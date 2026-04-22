(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["shipping-countdown"],{

/***/ "./assets/js/papathemes/shipping-countdown.js"
/*!****************************************************!*\
  !*** ./assets/js/papathemes/shipping-countdown.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone/builds/moment-timezone-with-data-10-year-range */ "./node_modules/moment-timezone/builds/moment-timezone-with-data-10-year-range.js");
/* harmony import */ var moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/*
<div
    data-papathemes-shipping-countdown="12:00:00"
    data-hour-text="Hour"
    data-hours-text="Hours"
    data-minute-text="Minute"
    data-minutes-text="Minutes"
    style="display:none">
    <div data-today-hm>In Stock & Ready To Ship! Order In The Next <strong>%HOUR%</strong> and <strong>%MINUTE%</strong> to ship today.</div>
    <div data-today-m>In Stock & Ready To Ship! Order In The Next <strong>%MINUTE%</strong> to ship today.</div>
    <div data-tomorrow-hm>In Stock & Ready To Ship! Order In The Next <strong>%HOUR%</strong> and <strong>%MINUTE%</strong> to ship tomorrow.</div>
    <div data-tomorrow-m>In Stock & Ready To Ship! Order In The Next <strong>%MINUTE%</strong> to ship tomorrow.</div>
    <div data-monday>In Stock & Ready To Ship! Order now to ship Monday.</div>
    <div data-custom></div>
</div>
*/
/* eslint-disable camelcase */
// import 'regenerator-runtime/runtime';
var _excluded = ["countdownSelector"];
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var APPUID = 'PAPATHEMES_SHIPPINGCOUNTDOWN';
var DATAKEY = 'papathemesShippingCountdown';
var DASHKEY = 'papathemes-shipping-countdown';
var productMetaById = {};
var variantMetaById = {};
var Countdown = /*#__PURE__*/function () {
  function Countdown($scope, _temp) {
    var _this = this;
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      _ref$graphQLToken = _ref.graphQLToken,
      graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken,
      _ref$storeTZ = _ref.storeTZ,
      storeTZ = _ref$storeTZ === void 0 ? 'America/Mexico_City' : _ref$storeTZ,
      _ref$checkMetaField = _ref.checkMetaField,
      checkMetaField = _ref$checkMetaField === void 0 ? false : _ref$checkMetaField,
      _ref$countdownValues = _ref.countdownValues,
      countdownValues = _ref$countdownValues === void 0 ? {
        parcel: '15:00:00',
        LTL: '12:00:00'
      } : _ref$countdownValues,
      _ref$defaultCountdown = _ref.defaultCountdownTime,
      defaultCountdownTime = _ref$defaultCountdown === void 0 ? '12:00:00' : _ref$defaultCountdown,
      _ref$findProductIdFun = _ref.findProductIdFunc,
      findProductIdFunc = _ref$findProductIdFun === void 0 ? function ($scope1) {
        return Number($scope1.closest('.productView').find('form[data-cart-item-add] input[name="product_id"]').val());
      } : _ref$findProductIdFun;
    this.$scope = $scope;
    this.debug = debug;
    this.graphQLToken = graphQLToken;
    this.storeTZ = storeTZ;
    this.checkMetaField = checkMetaField;
    this.countdownValues = countdownValues;
    this.defaultCountdownTime = defaultCountdownTime;
    this.productId = findProductIdFunc($scope);
    if (!this.productId) {
      return;
    }
    this.updateCountdown();
    this.timer = window.setInterval(function () {
      return _this.updateCountdown();
    }, 60000);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].hooks.on('product-options-change-remote', function (event, data) {
      if (!data || !data.response || !data.response.data || data.response.data.id !== _this.productId) {
        return;
      }
      _this.updateCountdown({
        variantId: data.response.data.v3_variant_id
      });
    });
    this.$scope.addClass('_shipping-countdown-initialized');
  }
  var _proto = Countdown.prototype;
  _proto.updateCountdown = /*#__PURE__*/function () {
    var _updateCountdown = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_temp2) {
      var _ref2, _ref2$variantId, variantId, $scope, debug, graphQLToken, storeTZ, checkMetaField, countdownValues, defaultCountdownTime, productId, countdown, custom, resp, value, hourText, hoursText, minuteText, minutesText, $todayhm, $todaym, $tomorrowhm, $tomorrowm, $monday, $custom, now, today, tomorrow, friday, sunday, monday, ship, hours, minutes;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$variantId = _ref2.variantId, variantId = _ref2$variantId === void 0 ? 0 : _ref2$variantId;
            $scope = this.$scope, debug = this.debug, graphQLToken = this.graphQLToken, storeTZ = this.storeTZ, checkMetaField = this.checkMetaField, countdownValues = this.countdownValues, defaultCountdownTime = this.defaultCountdownTime, productId = this.productId;
            countdown = $scope.data(DATAKEY);
            if (!checkMetaField) {
              _context.n = 3;
              break;
            }
            if (!(!productMetaById[productId] || variantId && !variantMetaById[variantId])) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                            query($productId: Int!, $variantId: Int!) {\n                                site {\n                                    product(entityId: $productId) {\n                                        entityId\n                                        metafields(namespace: \"papa\", keys: [\"countdown\"]) {\n                                            edges {\n                                                node {\n                                                    entityId\n                                                    key\n                                                    value\n                                                }\n                                            }\n                                        }\n                                        variants (entityIds: [$variantId]) {\n                                            edges {\n                                                node {\n                                                    metafields(namespace: \"papa\", keys: [\"countdown\"]) {\n                                                        edges {\n                                                            node {\n                                                                entityId\n                                                                key\n                                                                value\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        ",
                variables: {
                  productId: productId,
                  variantId: variantId
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 1:
            resp = _context.v;
            productMetaById[productId] = resp.data.site.product.metafields.edges.reduce(function (_value, _ref3) {
              var node = _ref3.node;
              return node.value;
            }, null);
            debug && console.log("productMetaById[" + productId + "] =", productMetaById[productId]);
            variantMetaById[variantId] = resp.data.site.product.variants.edges.reduce(function (_value, _ref4) {
              var node = _ref4.node;
              return node.metafields.edges.reduce(function (_value1, _ref5) {
                var node1 = _ref5.node1;
                return node1.value;
              }, _value);
            }, null);
            debug && console.log("variantMetaById[" + variantId + "] =", variantMetaById[variantId]);
          case 2:
            value = variantMetaById[variantId] || productMetaById[productId];
            if (value) {
              countdown = countdownValues[value];
            }
            custom = !countdownValues[value] ? value : '';
            _context.n = 4;
            break;
          case 3:
            countdown = countdown || defaultCountdownTime;
          case 4:
            if (!(!countdown && !custom)) {
              _context.n = 5;
              break;
            }
            return _context.a(2);
          case 5:
            hourText = $scope.data('hourText') || 'Hour';
            hoursText = $scope.data('hoursText') || 'Hours';
            minuteText = $scope.data('minuteText') || 'Minute';
            minutesText = $scope.data('minutesText') || 'Minutes';
            $todayhm = $scope.find('[data-today-hm]');
            $todaym = $scope.find('[data-today-m]');
            $tomorrowhm = $scope.find('[data-tomorrow-hm]');
            $tomorrowm = $scope.find('[data-tomorrow-m]');
            $monday = $scope.find('[data-monday]');
            $custom = $scope.find('[data-custom]');
            if (!$todayhm.data('template')) {
              $todayhm.data('template', $todayhm.html());
            }
            if (!$todaym.data('template')) {
              $todaym.data('template', $todaym.html());
            }
            if (!$tomorrowhm.data('template')) {
              $tomorrowhm.data('template', $tomorrowhm.html());
            }
            if (!$tomorrowm.data('template')) {
              $tomorrowm.data('template', $tomorrowm.html());
            }
            if (countdown) {
              $custom.hide();
              now = moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default()().tz(storeTZ);
              today = moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default().tz(moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default()().tz(storeTZ).format('YYYY-MM-DD') + " " + countdown, storeTZ);
              tomorrow = moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default().tz(moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'days').tz(storeTZ).format('YYYY-MM-DD') + " " + countdown, storeTZ);
              friday = moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default().tz(moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default()().tz(storeTZ).day('5').format('YYYY-MM-DD') + " " + countdown, storeTZ);
              sunday = moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default().tz(moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default()().tz(storeTZ).day('7').format('YYYY-MM-DD') + " 23:59:59", storeTZ);
              monday = moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default().tz(moment_timezone_builds_moment_timezone_with_data_10_year_range__WEBPACK_IMPORTED_MODULE_1___default()().tz(storeTZ).day('8').format('YYYY-MM-DD') + " " + countdown, storeTZ);
              ship = now.isBetween(friday, sunday) ? monday : now.isBefore(today) ? today : tomorrow;
              debug && console.log('now = ', now.format());
              debug && console.log('today = ', today.format());
              debug && console.log('tomorrow = ', tomorrow.format());
              debug && console.log('friday = ', friday.format());
              debug && console.log('sunday = ', sunday.format());
              debug && console.log('monday = ', monday.format());
              debug && console.log('ship = ', ship.format());
              hours = ship.diff(now, 'hour');
              minutes = ship.diff(now, 'minute') - hours * 60;
              if (ship.isSame(monday)) {
                $todayhm.hide();
                $todaym.hide();
                $tomorrowhm.hide();
                $tomorrowm.hide();
                $monday.show();
              } else if (ship.isSame(today)) {
                $tomorrowhm.hide();
                $tomorrowm.hide();
                $monday.hide();
                if (hours === 0) {
                  $todayhm.hide();
                  $todaym.html($todaym.data('template').replace(/%MINUTE%/g, minutes + " " + (minutes > 1 ? minutesText : minuteText))).show();
                } else {
                  $todayhm.html($todayhm.data('template').replace(/%HOUR%/g, hours + " " + (hours > 1 ? hoursText : hourText)).replace(/%MINUTE%/g, minutes + " " + (minutes > 1 ? minutesText : minuteText))).show();
                  $todaym.hide();
                }
              } else {
                $todayhm.hide();
                $todaym.hide();
                $monday.hide();
                if (hours === 0) {
                  $tomorrowhm.hide();
                  $tomorrowm.html($tomorrowm.data('template').replace(/%MINUTE%/g, minutes + " " + (minutes > 1 ? minutesText : minuteText))).show();
                } else {
                  $tomorrowhm.html($tomorrowhm.data('template').replace(/%HOUR%/g, hours + " " + (hours > 1 ? hoursText : hourText)).replace(/%MINUTE%/g, minutes + " " + (minutes > 1 ? minutesText : minuteText))).show();
                  $tomorrowm.hide();
                }
              }
            }
            if (custom) {
              $custom.html(custom).show();
              $todayhm.hide();
              $todaym.hide();
              $tomorrowhm.hide();
              $tomorrowm.hide();
              $monday.hide();
            }
            $scope.show();
          case 6:
            return _context.a(2);
        }
      }, _callee, this);
    }));
    function updateCountdown(_x) {
      return _updateCountdown.apply(this, arguments);
    }
    return updateCountdown;
  }();
  return Countdown;
}();
function domChanged(_ref6) {
  var _ref6$countdownSelect = _ref6.countdownSelector,
    countdownSelector = _ref6$countdownSelect === void 0 ? "[data-" + DASHKEY + "]" : _ref6$countdownSelect,
    settings = _objectWithoutPropertiesLoose(_ref6, _excluded);
  $(countdownSelector).each(function (i, el) {
    var $el = $(el);
    if (!$el.data(APPUID + "CountdownInstance")) {
      $el.data(APPUID + "CountdownInstance", new Countdown($el, settings));
    }
  });
}
function initApp(_x2) {
  return _initApp.apply(this, arguments);
}
function _initApp() {
  _initApp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(settings) {
    var mo;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (settings === void 0) {
            settings = {};
          }
          domChanged(settings);
          mo = new MutationObserver(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
            domChanged(settings);
          }), 300);
          mo.observe(document.body, {
            childList: true,
            subtree: true
          });
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _initApp.apply(this, arguments);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref7) {
  var graphQLToken = _ref7.graphQLToken,
    storeTZ = _ref7.storeTZ,
    countdownValues = _ref7.countdownValues,
    defaultCountdownTime = _ref7.defaultCountdownTime;
  initApp({
    graphQLToken: graphQLToken,
    storeTZ: storeTZ,
    countdownValues: countdownValues,
    defaultCountdownTime: defaultCountdownTime
  });
}

/***/ },

/***/ "./node_modules/moment-timezone/builds/moment-timezone-with-data-10-year-range.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/moment-timezone/builds/moment-timezone-with-data-10-year-range.js ***!
  \****************************************************************************************/
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone.js
//! version : 0.5.48
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if ( true && module.exports) {
		module.exports = factory(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js")); // Node
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! moment */ "./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));                 // AMD
	} else // removed by dead control flow
{}
}(this, function (moment) {
	"use strict";

	// Resolves es6 module loading issue
	if (moment.version === undefined && moment.default) {
		moment = moment.default;
	}

	// Do not load moment-timezone a second time.
	// if (moment.tz !== undefined) {
	// 	logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
	// 	return moment;
	// }

	var VERSION = "0.5.48",
		zones = {},
		links = {},
		countries = {},
		names = {},
		guesses = {},
		cachedGuess;

	if (!moment || typeof moment.version !== 'string') {
		logError('Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/');
	}

	var momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name       : data[0],
			abbrs      : mapIndices(data[1].split(' '), indices),
			offsets    : mapIndices(offsets, indices),
			untils     : untils,
			population : data[5] | 0
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	function closest (num, arr) {
		var len = arr.length;
		if (num < arr[0]) {
			return 0;
		} else if (len > 1 && arr[len - 1] === Infinity && num >= arr[len - 2]) {
			return len - 1;
		} else if (num >= arr[len - 1]) {
			return -1;
		}

		var mid;
		var lo = 0;
		var hi = len - 1;
		while (hi - lo > 1) {
			mid = Math.floor((lo + hi) / 2);
			if (arr[mid] <= num) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		return hi;
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name       = unpacked.name;
			this.abbrs      = unpacked.abbrs;
			this.untils     = unpacked.untils;
			this.offsets    = unpacked.offsets;
			this.population = unpacked.population;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			i = closest(target, untils);
			if (i >= 0) {
				return i;
			}
		},

		countries : function () {
			var zone_name = this.name;
			return Object.keys(countries).filter(function (country_code) {
				return countries[country_code].zones.indexOf(zone_name) !== -1;
			});
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			logError("zone.offset has been deprecated in favor of zone.utcOffset");
			return this.offsets[this._index(mom)];
		},

		utcOffset : function (mom) {
			return this.offsets[this._index(mom)];
		}
	};

	/************************************
		Country object
	************************************/

	function Country (country_name, zone_names) {
		this.name = country_name;
		this.zones = zone_names;
	}

	/************************************
		Current Timezone
	************************************/

	function OffsetAt(at) {
		var timeString = at.toTimeString();
		var abbr = timeString.match(/\([a-z ]+\)/i);
		if (abbr && abbr[0]) {
			// 17:56:31 GMT-0600 (CST)
			// 17:56:31 GMT-0600 (Central Standard Time)
			abbr = abbr[0].match(/[A-Z]/g);
			abbr = abbr ? abbr.join('') : undefined;
		} else {
			// 17:56:31 CST
			// 17:56:31 GMT+0800 (台北標準時間)
			abbr = timeString.match(/[A-Z]{3,5}/g);
			abbr = abbr ? abbr[0] : undefined;
		}

		if (abbr === 'GMT') {
			abbr = undefined;
		}

		this.at = +at;
		this.abbr = abbr;
		this.offset = at.getTimezoneOffset();
	}

	function ZoneScore(zone) {
		this.zone = zone;
		this.offsetScore = 0;
		this.abbrScore = 0;
	}

	ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
		this.offsetScore += Math.abs(this.zone.utcOffset(offsetAt.at) - offsetAt.offset);
		if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
			this.abbrScore++;
		}
	};

	function findChange(low, high) {
		var mid, diff;

		while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
			mid = new OffsetAt(new Date(low.at + diff));
			if (mid.offset === low.offset) {
				low = mid;
			} else {
				high = mid;
			}
		}

		return low;
	}

	function userOffsets() {
		var startYear = new Date().getFullYear() - 2,
			last = new OffsetAt(new Date(startYear, 0, 1)),
			lastOffset = last.offset,
			offsets = [last],
			change, next, nextOffset, i;

		for (i = 1; i < 48; i++) {
			nextOffset = new Date(startYear, i, 1).getTimezoneOffset();
			if (nextOffset !== lastOffset) {
				// Create OffsetAt here to avoid unnecessary abbr parsing before checking offsets
				next = new OffsetAt(new Date(startYear, i, 1));
				change = findChange(last, next);
				offsets.push(change);
				offsets.push(new OffsetAt(new Date(change.at + 6e4)));
				last = next;
				lastOffset = nextOffset;
			}
		}

		for (i = 0; i < 4; i++) {
			offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
			offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
		}

		return offsets;
	}

	function sortZoneScores (a, b) {
		if (a.offsetScore !== b.offsetScore) {
			return a.offsetScore - b.offsetScore;
		}
		if (a.abbrScore !== b.abbrScore) {
			return a.abbrScore - b.abbrScore;
		}
		if (a.zone.population !== b.zone.population) {
			return b.zone.population - a.zone.population;
		}
		return b.zone.name.localeCompare(a.zone.name);
	}

	function addToGuesses (name, offsets) {
		var i, offset;
		arrayToInt(offsets);
		for (i = 0; i < offsets.length; i++) {
			offset = offsets[i];
			guesses[offset] = guesses[offset] || {};
			guesses[offset][name] = true;
		}
	}

	function guessesForUserOffsets (offsets) {
		var offsetsLength = offsets.length,
			filteredGuesses = {},
			out = [],
			checkedOffsets = {},
			i, j, offset, guessesOffset;

		for (i = 0; i < offsetsLength; i++) {
			offset = offsets[i].offset;
			if (checkedOffsets.hasOwnProperty(offset)) {
				continue;
			}
			guessesOffset = guesses[offset] || {};
			for (j in guessesOffset) {
				if (guessesOffset.hasOwnProperty(j)) {
					filteredGuesses[j] = true;
				}
			}
			checkedOffsets[offset] = true;
		}

		for (i in filteredGuesses) {
			if (filteredGuesses.hasOwnProperty(i)) {
				out.push(names[i]);
			}
		}

		return out;
	}

	function rebuildGuess () {

		// use Intl API when available and returning valid time zone
		try {
			var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
			if (intlName && intlName.length > 3) {
				var name = names[normalizeName(intlName)];
				if (name) {
					return name;
				}
				logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
			}
		} catch (e) {
			// Intl unavailable, fall back to manual guessing.
		}

		var offsets = userOffsets(),
			offsetsLength = offsets.length,
			guesses = guessesForUserOffsets(offsets),
			zoneScores = [],
			zoneScore, i, j;

		for (i = 0; i < guesses.length; i++) {
			zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
			for (j = 0; j < offsetsLength; j++) {
				zoneScore.scoreOffsetAt(offsets[j]);
			}
			zoneScores.push(zoneScore);
		}

		zoneScores.sort(sortZoneScores);

		return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
	}

	function guess (ignoreCache) {
		if (!cachedGuess || ignoreCache) {
			cachedGuess = rebuildGuess();
		}
		return cachedGuess;
	}

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, name, split, normalized;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			split = packed[i].split('|');
			name = split[0];
			normalized = normalizeName(name);
			zones[normalized] = packed[i];
			names[normalized] = name;
			addToGuesses(normalized, split[2].split(' '));
		}
	}

	function getZone (name, caller) {

		name = normalizeName(name);

		var zone = zones[name];
		var link;

		if (zone instanceof Zone) {
			return zone;
		}

		if (typeof zone === 'string') {
			zone = new Zone(zone);
			zones[name] = zone;
			return zone;
		}

		// Pass getZone to prevent recursion more than 1 level deep
		if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
			zone = zones[name] = new Zone();
			zone._set(link);
			zone.name = names[name];
			return zone;
		}

		return null;
	}

	function getNames () {
		var i, out = [];

		for (i in names) {
			if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
				out.push(names[i]);
			}
		}

		return out.sort();
	}

	function getCountryNames () {
		return Object.keys(countries);
	}

	function addLink (aliases) {
		var i, alias, normal0, normal1;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');

			normal0 = normalizeName(alias[0]);
			normal1 = normalizeName(alias[1]);

			links[normal0] = normal1;
			names[normal0] = alias[0];

			links[normal1] = normal0;
			names[normal1] = alias[1];
		}
	}

	function addCountries (data) {
		var i, country_code, country_zones, split;
		if (!data || !data.length) return;
		for (i = 0; i < data.length; i++) {
			split = data[i].split('|');
			country_code = split[0].toUpperCase();
			country_zones = split[1].split(' ');
			countries[country_code] = new Country(
				country_code,
				country_zones
			);
		}
	}

	function getCountry (name) {
		name = name.toUpperCase();
		return countries[name] || null;
	}

	function zonesForCountry(country, with_offset) {
		country = getCountry(country);

		if (!country) return null;

		var zones = country.zones.sort();

		if (with_offset) {
			return zones.map(function (zone_name) {
				var zone = getZone(zone_name);
				return {
					name: zone_name,
					offset: zone.utcOffset(new Date())
				};
			});
		}

		return zones;
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		addCountries(data.countries);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		var isUnixTimestamp = (m._f === 'X' || m._f === 'x');
		return !!(m._a && (m._tzm === undefined) && !isUnixTimestamp);
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz (input) {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			out  = moment.utc.apply(null, args),
			zone;

		if (!moment.isMoment(input) && needsOffset(out) && (zone = getZone(name))) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz._names       = names;
	tz._countries	= countries;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.guess        = guess;
	tz.names        = getNames;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;
	tz.countries    = getCountryNames;
	tz.zonesForCountry = zonesForCountry;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.defaultZone = null;

	moment.updateOffset = function (mom, keepTime) {
		var zone = moment.defaultZone,
			offset;

		if (mom._z === undefined) {
			if (zone && needsOffset(mom) && !mom._isUTC && mom.isValid()) {
				mom._d = moment.utc(mom._a)._d;
				mom.utc().add(zone.parse(mom), 'minutes');
			}
			mom._z = zone;
		}
		if (mom._z) {
			offset = mom._z.utcOffset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			if (mom.utcOffset !== undefined) {
				var z = mom._z;
				mom.utcOffset(-offset, keepTime);
				mom._z = z;
			} else {
				mom.zone(offset, keepTime);
			}
		}
	};

	fn.tz = function (name, keepTime) {
		if (name) {
			if (typeof name !== 'string') {
				throw new Error('Time zone name must be a string, got ' + name + ' [' + typeof name + ']');
			}
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this, keepTime);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	function resetZoneWrap2 (old) {
		return function () {
			if (arguments.length > 0) this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName  = abbrWrap(fn.zoneName);
	fn.zoneAbbr  = abbrWrap(fn.zoneAbbr);
	fn.utc       = resetZoneWrap(fn.utc);
	fn.local     = resetZoneWrap(fn.local);
	fn.utcOffset = resetZoneWrap2(fn.utcOffset);

	moment.tz.setDefault = function(name) {
		if (major < 2 || (major === 2 && minor < 9)) {
			logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
		}
		moment.defaultZone = name ? getZone(name) : null;
		return moment;
	};

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	loadData({
		"version": "2025b",
		"zones": [
			"Africa/Abidjan|GMT|0|0||48e5",
			"Africa/Nairobi|EAT|-30|0||47e5",
			"Africa/Algiers|CET|-10|0||26e5",
			"Africa/Lagos|WAT|-10|0||17e6",
			"Africa/Khartoum|CAT|-20|0||51e5",
			"Africa/Cairo|EET EEST|-20 -30|01010101010101010|29NW0 1cL0 1cN0 1fz0 1a10 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0|15e6",
			"Africa/Casablanca|+01 +00|-10 0|010101010101010101010101|22sq0 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600|32e5",
			"Europe/Paris|CET CEST|-10 -20|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e6",
			"Africa/Johannesburg|SAST|-20|0||84e5",
			"Africa/Juba|EAT CAT|-30 -20|01|24nx0|",
			"Africa/Tripoli|EET|-20|0||11e5",
			"America/Adak|HST HDT|a0 90|01010101010101010101010|22bM0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326",
			"America/Anchorage|AKST AKDT|90 80|01010101010101010101010|22bL0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4",
			"America/Santo_Domingo|AST|40|0||29e5",
			"America/Sao_Paulo|-03|30|0||20e6",
			"America/Asuncion|-03 -04|30 40|01010101010|22hf0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0|28e5",
			"America/Panama|EST|50|0||15e5",
			"America/Mexico_City|CST CDT|60 50|0101010|22mU0 1lb0 14p0 1nX0 11B0 1nX0|20e6",
			"America/Managua|CST|60|0||22e5",
			"America/Caracas|-04|40|0||29e5",
			"America/Lima|-05|50|0||11e6",
			"America/Denver|MST MDT|70 60|01010101010101010101010|22bJ0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5",
			"America/Chicago|CST CDT|60 50|01010101010101010101010|22bI0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5",
			"America/Chihuahua|MST MDT CST|70 60 60|0101012|22mV0 1lb0 14p0 1nX0 11B0 1nX0|81e4",
			"America/Ciudad_Juarez|MST MDT CST|70 60 60|010101201010101010101010|22bJ0 1zb0 Rd0 1zb0 Op0 1wn0 cm0 EP0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|",
			"America/Coyhaique|-03 -04|30 40|01010101010|22mP0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0|",
			"America/Phoenix|MST|70|0||42e5",
			"America/Whitehorse|PST PDT MST|80 70 70|012|22bK0 1z90|23e3",
			"America/New_York|EST EDT|50 40|01010101010101010101010|22bH0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6",
			"America/Los_Angeles|PST PDT|80 70|01010101010101010101010|22bK0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6",
			"America/Halifax|AST ADT|40 30|01010101010101010101010|22bG0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4",
			"America/Godthab|-03 -02 -01|30 20 10|0101010121212121212121|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 2so0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e3",
			"America/Havana|CST CDT|50 40|01010101010101010101010|22bF0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5",
			"America/Mazatlan|MST MDT|70 60|0101010|22mV0 1lb0 14p0 1nX0 11B0 1nX0|44e4",
			"America/Miquelon|-03 -02|30 20|01010101010101010101010|22bF0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2",
			"America/Noronha|-02|20|0||30e2",
			"America/Ojinaga|MST MDT CST CDT|70 60 60 50|01010123232323232323232|22bJ0 1zb0 Rd0 1zb0 Op0 1wn0 Rc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3",
			"America/Santiago|-03 -04|30 40|01010101010101010101010|22mP0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|62e5",
			"America/Scoresbysund|-01 +00 -02|10 0 20|0101010102020202020202|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 2pA0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|452",
			"America/St_Johns|NST NDT|3u 2u|01010101010101010101010|22bFu 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4",
			"Antarctica/Casey|+11 +08|-b0 -80|01010101|22bs0 1o01 14kX 1lf1 14kX 1lf1 13bX|10",
			"Asia/Bangkok|+07|-70|0||15e6",
			"Asia/Vladivostok|+10|-a0|0||60e4",
			"Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|22mE0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|40e5",
			"Asia/Tashkent|+05|-50|0||23e5",
			"Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|22mC0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|14e5",
			"Europe/Istanbul|+03|-30|0||13e6",
			"Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|40",
			"Antarctica/Vostok|+07 +05|-70 -50|01|2bnv0|25",
			"Asia/Almaty|+06 +05|-60 -50|01|2bR60|15e5",
			"Asia/Amman|EET EEST +03|-20 -30 -30|0101012|22ja0 1qM0 WM0 1qM0 LA0 1C00|25e5",
			"Asia/Kamchatka|+12|-c0|0||18e4",
			"Asia/Dubai|+04|-40|0||39e5",
			"Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|22jW0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|22e5",
			"Asia/Dhaka|+06|-60|0||16e6",
			"Asia/Kuala_Lumpur|+08|-80|0||71e5",
			"Asia/Kolkata|IST|-5u|0||15e6",
			"Asia/Chita|+09|-90|0||33e4",
			"Asia/Shanghai|CST|-80|0||23e6",
			"Asia/Colombo|+0530|-5u|0||22e5",
			"Asia/Damascus|EET EEST +03|-20 -30 -30|0101012|22ja0 1qL0 WN0 1qL0 WN0 1qL0|26e5",
			"Europe/Athens|EET EEST|-20 -30|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|35e5",
			"Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|22jy0 1o00 11A0 1qo0 XA0 1qp0 1cN0 1cL0 1a10 1fz0 17d0 1in0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|18e5",
			"Asia/Hong_Kong|HKT|-80|0||73e5",
			"Asia/Jakarta|WIB|-70|0||31e6",
			"Asia/Jayapura|WIT|-90|0||26e4",
			"Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|22jc0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0|81e4",
			"Asia/Kabul|+0430|-4u|0||46e5",
			"Asia/Karachi|PKT|-50|0||24e6",
			"Asia/Kathmandu|+0545|-5J|0||12e5",
			"Asia/Sakhalin|+11|-b0|0||58e4",
			"Asia/Makassar|WITA|-80|0||15e5",
			"Asia/Manila|PST|-80|0||24e6",
			"Asia/Seoul|KST|-90|0||23e6",
			"Asia/Rangoon|+0630|-6u|0||48e5",
			"Asia/Tehran|+0330 +0430|-3u -4u|0101010|22gIu 1dz0 1cN0 1dz0 1cp0 1dz0|14e6",
			"Asia/Tokyo|JST|-90|0||38e6",
			"Atlantic/Azores|-01 +00|10 0|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|25e4",
			"Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e5",
			"Atlantic/Cape_Verde|-01|10|0||50e4",
			"Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|22mEu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|11e5",
			"Australia/Brisbane|AEST|-a0|0||20e5",
			"Australia/Darwin|ACST|-9u|0||12e4",
			"Australia/Eucla|+0845|-8J|0||368",
			"Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|22mD0 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu|347",
			"Australia/Perth|AWST|-80|0||18e5",
			"Pacific/Easter|-05 -06|50 60|01010101010101010101010|22mP0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|30e2",
			"Europe/Dublin|GMT IST|0 -10|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5",
			"Etc/GMT-1|+01|-10|0||",
			"Pacific/Tongatapu|+13|-d0|0||75e3",
			"Pacific/Kiritimati|+14|-e0|0||51e2",
			"Etc/GMT-2|+02|-20|0||",
			"Pacific/Tahiti|-10|a0|0||18e4",
			"Pacific/Niue|-11|b0|0||12e2",
			"Etc/GMT+12|-12|c0|0||",
			"Pacific/Galapagos|-06|60|0||25e3",
			"Etc/GMT+7|-07|70|0||",
			"Pacific/Pitcairn|-08|80|0||56",
			"Pacific/Gambier|-09|90|0||125",
			"Etc/UTC|UTC|0|0||",
			"Europe/London|GMT BST|0 -10|01010101010101010101010|22k10 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|10e6",
			"Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|22k00 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|67e4",
			"Europe/Moscow|MSK|-30|0||16e6",
			"Europe/Volgograd|+04 MSK|-40 -30|01|249a0|10e5",
			"Pacific/Honolulu|HST|a0|0||37e4",
			"Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|22mC0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|600",
			"Pacific/Apia|+14 +13|-e0 -d0|0101|22mC0 1a00 1fA0|37e3",
			"Pacific/Fiji|+13 +12|-d0 -c0|0101|21N20 2hc0 bc0|88e4",
			"Pacific/Guam|ChST|-a0|0||17e4",
			"Pacific/Marquesas|-0930|9u|0||86e2",
			"Pacific/Pago_Pago|SST|b0|0||37e2",
			"Pacific/Norfolk|+12 +11|-c0 -b0|01010101010101010101010|22mD0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|25e4"
		],
		"links": [
			"Africa/Abidjan|Africa/Accra",
			"Africa/Abidjan|Africa/Bamako",
			"Africa/Abidjan|Africa/Banjul",
			"Africa/Abidjan|Africa/Bissau",
			"Africa/Abidjan|Africa/Conakry",
			"Africa/Abidjan|Africa/Dakar",
			"Africa/Abidjan|Africa/Freetown",
			"Africa/Abidjan|Africa/Lome",
			"Africa/Abidjan|Africa/Monrovia",
			"Africa/Abidjan|Africa/Nouakchott",
			"Africa/Abidjan|Africa/Ouagadougou",
			"Africa/Abidjan|Africa/Sao_Tome",
			"Africa/Abidjan|Africa/Timbuktu",
			"Africa/Abidjan|America/Danmarkshavn",
			"Africa/Abidjan|Atlantic/Reykjavik",
			"Africa/Abidjan|Atlantic/St_Helena",
			"Africa/Abidjan|Etc/GMT",
			"Africa/Abidjan|Etc/GMT+0",
			"Africa/Abidjan|Etc/GMT-0",
			"Africa/Abidjan|Etc/GMT0",
			"Africa/Abidjan|Etc/Greenwich",
			"Africa/Abidjan|GMT",
			"Africa/Abidjan|GMT+0",
			"Africa/Abidjan|GMT-0",
			"Africa/Abidjan|GMT0",
			"Africa/Abidjan|Greenwich",
			"Africa/Abidjan|Iceland",
			"Africa/Algiers|Africa/Tunis",
			"Africa/Cairo|Egypt",
			"Africa/Casablanca|Africa/El_Aaiun",
			"Africa/Johannesburg|Africa/Maseru",
			"Africa/Johannesburg|Africa/Mbabane",
			"Africa/Khartoum|Africa/Blantyre",
			"Africa/Khartoum|Africa/Bujumbura",
			"Africa/Khartoum|Africa/Gaborone",
			"Africa/Khartoum|Africa/Harare",
			"Africa/Khartoum|Africa/Kigali",
			"Africa/Khartoum|Africa/Lubumbashi",
			"Africa/Khartoum|Africa/Lusaka",
			"Africa/Khartoum|Africa/Maputo",
			"Africa/Khartoum|Africa/Windhoek",
			"Africa/Lagos|Africa/Bangui",
			"Africa/Lagos|Africa/Brazzaville",
			"Africa/Lagos|Africa/Douala",
			"Africa/Lagos|Africa/Kinshasa",
			"Africa/Lagos|Africa/Libreville",
			"Africa/Lagos|Africa/Luanda",
			"Africa/Lagos|Africa/Malabo",
			"Africa/Lagos|Africa/Ndjamena",
			"Africa/Lagos|Africa/Niamey",
			"Africa/Lagos|Africa/Porto-Novo",
			"Africa/Nairobi|Africa/Addis_Ababa",
			"Africa/Nairobi|Africa/Asmara",
			"Africa/Nairobi|Africa/Asmera",
			"Africa/Nairobi|Africa/Dar_es_Salaam",
			"Africa/Nairobi|Africa/Djibouti",
			"Africa/Nairobi|Africa/Kampala",
			"Africa/Nairobi|Africa/Mogadishu",
			"Africa/Nairobi|Indian/Antananarivo",
			"Africa/Nairobi|Indian/Comoro",
			"Africa/Nairobi|Indian/Mayotte",
			"Africa/Tripoli|Europe/Kaliningrad",
			"Africa/Tripoli|Libya",
			"America/Adak|America/Atka",
			"America/Adak|US/Aleutian",
			"America/Anchorage|America/Juneau",
			"America/Anchorage|America/Metlakatla",
			"America/Anchorage|America/Nome",
			"America/Anchorage|America/Sitka",
			"America/Anchorage|America/Yakutat",
			"America/Anchorage|US/Alaska",
			"America/Caracas|America/Boa_Vista",
			"America/Caracas|America/Campo_Grande",
			"America/Caracas|America/Cuiaba",
			"America/Caracas|America/Guyana",
			"America/Caracas|America/La_Paz",
			"America/Caracas|America/Manaus",
			"America/Caracas|America/Porto_Velho",
			"America/Caracas|Brazil/West",
			"America/Caracas|Etc/GMT+4",
			"America/Chicago|America/Indiana/Knox",
			"America/Chicago|America/Indiana/Tell_City",
			"America/Chicago|America/Knox_IN",
			"America/Chicago|America/Matamoros",
			"America/Chicago|America/Menominee",
			"America/Chicago|America/North_Dakota/Beulah",
			"America/Chicago|America/North_Dakota/Center",
			"America/Chicago|America/North_Dakota/New_Salem",
			"America/Chicago|America/Rainy_River",
			"America/Chicago|America/Rankin_Inlet",
			"America/Chicago|America/Resolute",
			"America/Chicago|America/Winnipeg",
			"America/Chicago|CST6CDT",
			"America/Chicago|Canada/Central",
			"America/Chicago|US/Central",
			"America/Chicago|US/Indiana-Starke",
			"America/Denver|America/Boise",
			"America/Denver|America/Cambridge_Bay",
			"America/Denver|America/Edmonton",
			"America/Denver|America/Inuvik",
			"America/Denver|America/Shiprock",
			"America/Denver|America/Yellowknife",
			"America/Denver|Canada/Mountain",
			"America/Denver|MST7MDT",
			"America/Denver|Navajo",
			"America/Denver|US/Mountain",
			"America/Godthab|America/Nuuk",
			"America/Halifax|America/Glace_Bay",
			"America/Halifax|America/Goose_Bay",
			"America/Halifax|America/Moncton",
			"America/Halifax|America/Thule",
			"America/Halifax|Atlantic/Bermuda",
			"America/Halifax|Canada/Atlantic",
			"America/Havana|Cuba",
			"America/Lima|America/Bogota",
			"America/Lima|America/Eirunepe",
			"America/Lima|America/Guayaquil",
			"America/Lima|America/Porto_Acre",
			"America/Lima|America/Rio_Branco",
			"America/Lima|Brazil/Acre",
			"America/Lima|Etc/GMT+5",
			"America/Los_Angeles|America/Ensenada",
			"America/Los_Angeles|America/Santa_Isabel",
			"America/Los_Angeles|America/Tijuana",
			"America/Los_Angeles|America/Vancouver",
			"America/Los_Angeles|Canada/Pacific",
			"America/Los_Angeles|Mexico/BajaNorte",
			"America/Los_Angeles|PST8PDT",
			"America/Los_Angeles|US/Pacific",
			"America/Managua|America/Belize",
			"America/Managua|America/Costa_Rica",
			"America/Managua|America/El_Salvador",
			"America/Managua|America/Guatemala",
			"America/Managua|America/Regina",
			"America/Managua|America/Swift_Current",
			"America/Managua|America/Tegucigalpa",
			"America/Managua|Canada/Saskatchewan",
			"America/Mazatlan|Mexico/BajaSur",
			"America/Mexico_City|America/Bahia_Banderas",
			"America/Mexico_City|America/Merida",
			"America/Mexico_City|America/Monterrey",
			"America/Mexico_City|Mexico/General",
			"America/New_York|America/Detroit",
			"America/New_York|America/Fort_Wayne",
			"America/New_York|America/Grand_Turk",
			"America/New_York|America/Indiana/Indianapolis",
			"America/New_York|America/Indiana/Marengo",
			"America/New_York|America/Indiana/Petersburg",
			"America/New_York|America/Indiana/Vevay",
			"America/New_York|America/Indiana/Vincennes",
			"America/New_York|America/Indiana/Winamac",
			"America/New_York|America/Indianapolis",
			"America/New_York|America/Iqaluit",
			"America/New_York|America/Kentucky/Louisville",
			"America/New_York|America/Kentucky/Monticello",
			"America/New_York|America/Louisville",
			"America/New_York|America/Montreal",
			"America/New_York|America/Nassau",
			"America/New_York|America/Nipigon",
			"America/New_York|America/Pangnirtung",
			"America/New_York|America/Port-au-Prince",
			"America/New_York|America/Thunder_Bay",
			"America/New_York|America/Toronto",
			"America/New_York|Canada/Eastern",
			"America/New_York|EST5EDT",
			"America/New_York|US/East-Indiana",
			"America/New_York|US/Eastern",
			"America/New_York|US/Michigan",
			"America/Noronha|Atlantic/South_Georgia",
			"America/Noronha|Brazil/DeNoronha",
			"America/Noronha|Etc/GMT+2",
			"America/Panama|America/Atikokan",
			"America/Panama|America/Cancun",
			"America/Panama|America/Cayman",
			"America/Panama|America/Coral_Harbour",
			"America/Panama|America/Jamaica",
			"America/Panama|EST",
			"America/Panama|Jamaica",
			"America/Phoenix|America/Creston",
			"America/Phoenix|America/Dawson_Creek",
			"America/Phoenix|America/Fort_Nelson",
			"America/Phoenix|America/Hermosillo",
			"America/Phoenix|MST",
			"America/Phoenix|US/Arizona",
			"America/Santiago|Chile/Continental",
			"America/Santo_Domingo|America/Anguilla",
			"America/Santo_Domingo|America/Antigua",
			"America/Santo_Domingo|America/Aruba",
			"America/Santo_Domingo|America/Barbados",
			"America/Santo_Domingo|America/Blanc-Sablon",
			"America/Santo_Domingo|America/Curacao",
			"America/Santo_Domingo|America/Dominica",
			"America/Santo_Domingo|America/Grenada",
			"America/Santo_Domingo|America/Guadeloupe",
			"America/Santo_Domingo|America/Kralendijk",
			"America/Santo_Domingo|America/Lower_Princes",
			"America/Santo_Domingo|America/Marigot",
			"America/Santo_Domingo|America/Martinique",
			"America/Santo_Domingo|America/Montserrat",
			"America/Santo_Domingo|America/Port_of_Spain",
			"America/Santo_Domingo|America/Puerto_Rico",
			"America/Santo_Domingo|America/St_Barthelemy",
			"America/Santo_Domingo|America/St_Kitts",
			"America/Santo_Domingo|America/St_Lucia",
			"America/Santo_Domingo|America/St_Thomas",
			"America/Santo_Domingo|America/St_Vincent",
			"America/Santo_Domingo|America/Tortola",
			"America/Santo_Domingo|America/Virgin",
			"America/Sao_Paulo|America/Araguaina",
			"America/Sao_Paulo|America/Argentina/Buenos_Aires",
			"America/Sao_Paulo|America/Argentina/Catamarca",
			"America/Sao_Paulo|America/Argentina/ComodRivadavia",
			"America/Sao_Paulo|America/Argentina/Cordoba",
			"America/Sao_Paulo|America/Argentina/Jujuy",
			"America/Sao_Paulo|America/Argentina/La_Rioja",
			"America/Sao_Paulo|America/Argentina/Mendoza",
			"America/Sao_Paulo|America/Argentina/Rio_Gallegos",
			"America/Sao_Paulo|America/Argentina/Salta",
			"America/Sao_Paulo|America/Argentina/San_Juan",
			"America/Sao_Paulo|America/Argentina/San_Luis",
			"America/Sao_Paulo|America/Argentina/Tucuman",
			"America/Sao_Paulo|America/Argentina/Ushuaia",
			"America/Sao_Paulo|America/Bahia",
			"America/Sao_Paulo|America/Belem",
			"America/Sao_Paulo|America/Buenos_Aires",
			"America/Sao_Paulo|America/Catamarca",
			"America/Sao_Paulo|America/Cayenne",
			"America/Sao_Paulo|America/Cordoba",
			"America/Sao_Paulo|America/Fortaleza",
			"America/Sao_Paulo|America/Jujuy",
			"America/Sao_Paulo|America/Maceio",
			"America/Sao_Paulo|America/Mendoza",
			"America/Sao_Paulo|America/Montevideo",
			"America/Sao_Paulo|America/Paramaribo",
			"America/Sao_Paulo|America/Punta_Arenas",
			"America/Sao_Paulo|America/Recife",
			"America/Sao_Paulo|America/Rosario",
			"America/Sao_Paulo|America/Santarem",
			"America/Sao_Paulo|Antarctica/Palmer",
			"America/Sao_Paulo|Antarctica/Rothera",
			"America/Sao_Paulo|Atlantic/Stanley",
			"America/Sao_Paulo|Brazil/East",
			"America/Sao_Paulo|Etc/GMT+3",
			"America/St_Johns|Canada/Newfoundland",
			"America/Whitehorse|America/Dawson",
			"America/Whitehorse|Canada/Yukon",
			"Asia/Almaty|Asia/Qostanay",
			"Asia/Bangkok|Antarctica/Davis",
			"Asia/Bangkok|Asia/Barnaul",
			"Asia/Bangkok|Asia/Ho_Chi_Minh",
			"Asia/Bangkok|Asia/Hovd",
			"Asia/Bangkok|Asia/Krasnoyarsk",
			"Asia/Bangkok|Asia/Novokuznetsk",
			"Asia/Bangkok|Asia/Novosibirsk",
			"Asia/Bangkok|Asia/Phnom_Penh",
			"Asia/Bangkok|Asia/Saigon",
			"Asia/Bangkok|Asia/Tomsk",
			"Asia/Bangkok|Asia/Vientiane",
			"Asia/Bangkok|Etc/GMT-7",
			"Asia/Bangkok|Indian/Christmas",
			"Asia/Chita|Asia/Dili",
			"Asia/Chita|Asia/Khandyga",
			"Asia/Chita|Asia/Yakutsk",
			"Asia/Chita|Etc/GMT-9",
			"Asia/Chita|Pacific/Palau",
			"Asia/Dhaka|Asia/Bishkek",
			"Asia/Dhaka|Asia/Dacca",
			"Asia/Dhaka|Asia/Kashgar",
			"Asia/Dhaka|Asia/Omsk",
			"Asia/Dhaka|Asia/Thimbu",
			"Asia/Dhaka|Asia/Thimphu",
			"Asia/Dhaka|Asia/Urumqi",
			"Asia/Dhaka|Etc/GMT-6",
			"Asia/Dhaka|Indian/Chagos",
			"Asia/Dubai|Asia/Baku",
			"Asia/Dubai|Asia/Muscat",
			"Asia/Dubai|Asia/Tbilisi",
			"Asia/Dubai|Asia/Yerevan",
			"Asia/Dubai|Etc/GMT-4",
			"Asia/Dubai|Europe/Astrakhan",
			"Asia/Dubai|Europe/Samara",
			"Asia/Dubai|Europe/Saratov",
			"Asia/Dubai|Europe/Ulyanovsk",
			"Asia/Dubai|Indian/Mahe",
			"Asia/Dubai|Indian/Mauritius",
			"Asia/Dubai|Indian/Reunion",
			"Asia/Gaza|Asia/Hebron",
			"Asia/Hong_Kong|Hongkong",
			"Asia/Jakarta|Asia/Pontianak",
			"Asia/Jerusalem|Asia/Tel_Aviv",
			"Asia/Jerusalem|Israel",
			"Asia/Kamchatka|Asia/Anadyr",
			"Asia/Kamchatka|Etc/GMT-12",
			"Asia/Kamchatka|Kwajalein",
			"Asia/Kamchatka|Pacific/Funafuti",
			"Asia/Kamchatka|Pacific/Kwajalein",
			"Asia/Kamchatka|Pacific/Majuro",
			"Asia/Kamchatka|Pacific/Nauru",
			"Asia/Kamchatka|Pacific/Tarawa",
			"Asia/Kamchatka|Pacific/Wake",
			"Asia/Kamchatka|Pacific/Wallis",
			"Asia/Kathmandu|Asia/Katmandu",
			"Asia/Kolkata|Asia/Calcutta",
			"Asia/Kuala_Lumpur|Asia/Brunei",
			"Asia/Kuala_Lumpur|Asia/Choibalsan",
			"Asia/Kuala_Lumpur|Asia/Irkutsk",
			"Asia/Kuala_Lumpur|Asia/Kuching",
			"Asia/Kuala_Lumpur|Asia/Singapore",
			"Asia/Kuala_Lumpur|Asia/Ulaanbaatar",
			"Asia/Kuala_Lumpur|Asia/Ulan_Bator",
			"Asia/Kuala_Lumpur|Etc/GMT-8",
			"Asia/Kuala_Lumpur|Singapore",
			"Asia/Makassar|Asia/Ujung_Pandang",
			"Asia/Rangoon|Asia/Yangon",
			"Asia/Rangoon|Indian/Cocos",
			"Asia/Sakhalin|Asia/Magadan",
			"Asia/Sakhalin|Asia/Srednekolymsk",
			"Asia/Sakhalin|Etc/GMT-11",
			"Asia/Sakhalin|Pacific/Bougainville",
			"Asia/Sakhalin|Pacific/Efate",
			"Asia/Sakhalin|Pacific/Guadalcanal",
			"Asia/Sakhalin|Pacific/Kosrae",
			"Asia/Sakhalin|Pacific/Noumea",
			"Asia/Sakhalin|Pacific/Pohnpei",
			"Asia/Sakhalin|Pacific/Ponape",
			"Asia/Seoul|Asia/Pyongyang",
			"Asia/Seoul|ROK",
			"Asia/Shanghai|Asia/Chongqing",
			"Asia/Shanghai|Asia/Chungking",
			"Asia/Shanghai|Asia/Harbin",
			"Asia/Shanghai|Asia/Macao",
			"Asia/Shanghai|Asia/Macau",
			"Asia/Shanghai|Asia/Taipei",
			"Asia/Shanghai|PRC",
			"Asia/Shanghai|ROC",
			"Asia/Tashkent|Antarctica/Mawson",
			"Asia/Tashkent|Asia/Aqtau",
			"Asia/Tashkent|Asia/Aqtobe",
			"Asia/Tashkent|Asia/Ashgabat",
			"Asia/Tashkent|Asia/Ashkhabad",
			"Asia/Tashkent|Asia/Atyrau",
			"Asia/Tashkent|Asia/Dushanbe",
			"Asia/Tashkent|Asia/Oral",
			"Asia/Tashkent|Asia/Qyzylorda",
			"Asia/Tashkent|Asia/Samarkand",
			"Asia/Tashkent|Asia/Yekaterinburg",
			"Asia/Tashkent|Etc/GMT-5",
			"Asia/Tashkent|Indian/Kerguelen",
			"Asia/Tashkent|Indian/Maldives",
			"Asia/Tehran|Iran",
			"Asia/Tokyo|Japan",
			"Asia/Vladivostok|Antarctica/DumontDUrville",
			"Asia/Vladivostok|Asia/Ust-Nera",
			"Asia/Vladivostok|Etc/GMT-10",
			"Asia/Vladivostok|Pacific/Chuuk",
			"Asia/Vladivostok|Pacific/Port_Moresby",
			"Asia/Vladivostok|Pacific/Truk",
			"Asia/Vladivostok|Pacific/Yap",
			"Atlantic/Cape_Verde|Etc/GMT+1",
			"Australia/Adelaide|Australia/Broken_Hill",
			"Australia/Adelaide|Australia/South",
			"Australia/Adelaide|Australia/Yancowinna",
			"Australia/Brisbane|Australia/Lindeman",
			"Australia/Brisbane|Australia/Queensland",
			"Australia/Darwin|Australia/North",
			"Australia/Lord_Howe|Australia/LHI",
			"Australia/Perth|Australia/West",
			"Australia/Sydney|Antarctica/Macquarie",
			"Australia/Sydney|Australia/ACT",
			"Australia/Sydney|Australia/Canberra",
			"Australia/Sydney|Australia/Currie",
			"Australia/Sydney|Australia/Hobart",
			"Australia/Sydney|Australia/Melbourne",
			"Australia/Sydney|Australia/NSW",
			"Australia/Sydney|Australia/Tasmania",
			"Australia/Sydney|Australia/Victoria",
			"Etc/UTC|Etc/UCT",
			"Etc/UTC|Etc/Universal",
			"Etc/UTC|Etc/Zulu",
			"Etc/UTC|UCT",
			"Etc/UTC|UTC",
			"Etc/UTC|Universal",
			"Etc/UTC|Zulu",
			"Europe/Athens|Asia/Famagusta",
			"Europe/Athens|Asia/Nicosia",
			"Europe/Athens|EET",
			"Europe/Athens|Europe/Bucharest",
			"Europe/Athens|Europe/Helsinki",
			"Europe/Athens|Europe/Kiev",
			"Europe/Athens|Europe/Kyiv",
			"Europe/Athens|Europe/Mariehamn",
			"Europe/Athens|Europe/Nicosia",
			"Europe/Athens|Europe/Riga",
			"Europe/Athens|Europe/Sofia",
			"Europe/Athens|Europe/Tallinn",
			"Europe/Athens|Europe/Uzhgorod",
			"Europe/Athens|Europe/Vilnius",
			"Europe/Athens|Europe/Zaporozhye",
			"Europe/Chisinau|Europe/Tiraspol",
			"Europe/Dublin|Eire",
			"Europe/Istanbul|Antarctica/Syowa",
			"Europe/Istanbul|Asia/Aden",
			"Europe/Istanbul|Asia/Baghdad",
			"Europe/Istanbul|Asia/Bahrain",
			"Europe/Istanbul|Asia/Istanbul",
			"Europe/Istanbul|Asia/Kuwait",
			"Europe/Istanbul|Asia/Qatar",
			"Europe/Istanbul|Asia/Riyadh",
			"Europe/Istanbul|Etc/GMT-3",
			"Europe/Istanbul|Europe/Minsk",
			"Europe/Istanbul|Turkey",
			"Europe/Lisbon|Atlantic/Canary",
			"Europe/Lisbon|Atlantic/Faeroe",
			"Europe/Lisbon|Atlantic/Faroe",
			"Europe/Lisbon|Atlantic/Madeira",
			"Europe/Lisbon|Portugal",
			"Europe/Lisbon|WET",
			"Europe/London|Europe/Belfast",
			"Europe/London|Europe/Guernsey",
			"Europe/London|Europe/Isle_of_Man",
			"Europe/London|Europe/Jersey",
			"Europe/London|GB",
			"Europe/London|GB-Eire",
			"Europe/Moscow|Europe/Kirov",
			"Europe/Moscow|Europe/Simferopol",
			"Europe/Moscow|W-SU",
			"Europe/Paris|Africa/Ceuta",
			"Europe/Paris|Arctic/Longyearbyen",
			"Europe/Paris|Atlantic/Jan_Mayen",
			"Europe/Paris|CET",
			"Europe/Paris|Europe/Amsterdam",
			"Europe/Paris|Europe/Andorra",
			"Europe/Paris|Europe/Belgrade",
			"Europe/Paris|Europe/Berlin",
			"Europe/Paris|Europe/Bratislava",
			"Europe/Paris|Europe/Brussels",
			"Europe/Paris|Europe/Budapest",
			"Europe/Paris|Europe/Busingen",
			"Europe/Paris|Europe/Copenhagen",
			"Europe/Paris|Europe/Gibraltar",
			"Europe/Paris|Europe/Ljubljana",
			"Europe/Paris|Europe/Luxembourg",
			"Europe/Paris|Europe/Madrid",
			"Europe/Paris|Europe/Malta",
			"Europe/Paris|Europe/Monaco",
			"Europe/Paris|Europe/Oslo",
			"Europe/Paris|Europe/Podgorica",
			"Europe/Paris|Europe/Prague",
			"Europe/Paris|Europe/Rome",
			"Europe/Paris|Europe/San_Marino",
			"Europe/Paris|Europe/Sarajevo",
			"Europe/Paris|Europe/Skopje",
			"Europe/Paris|Europe/Stockholm",
			"Europe/Paris|Europe/Tirane",
			"Europe/Paris|Europe/Vaduz",
			"Europe/Paris|Europe/Vatican",
			"Europe/Paris|Europe/Vienna",
			"Europe/Paris|Europe/Warsaw",
			"Europe/Paris|Europe/Zagreb",
			"Europe/Paris|Europe/Zurich",
			"Europe/Paris|MET",
			"Europe/Paris|Poland",
			"Pacific/Auckland|Antarctica/McMurdo",
			"Pacific/Auckland|Antarctica/South_Pole",
			"Pacific/Auckland|NZ",
			"Pacific/Chatham|NZ-CHAT",
			"Pacific/Easter|Chile/EasterIsland",
			"Pacific/Galapagos|Etc/GMT+6",
			"Pacific/Gambier|Etc/GMT+9",
			"Pacific/Guam|Pacific/Saipan",
			"Pacific/Honolulu|HST",
			"Pacific/Honolulu|Pacific/Johnston",
			"Pacific/Honolulu|US/Hawaii",
			"Pacific/Kiritimati|Etc/GMT-14",
			"Pacific/Niue|Etc/GMT+11",
			"Pacific/Pago_Pago|Pacific/Midway",
			"Pacific/Pago_Pago|Pacific/Samoa",
			"Pacific/Pago_Pago|US/Samoa",
			"Pacific/Pitcairn|Etc/GMT+8",
			"Pacific/Tahiti|Etc/GMT+10",
			"Pacific/Tahiti|Pacific/Rarotonga",
			"Pacific/Tongatapu|Etc/GMT-13",
			"Pacific/Tongatapu|Pacific/Enderbury",
			"Pacific/Tongatapu|Pacific/Fakaofo",
			"Pacific/Tongatapu|Pacific/Kanton"
		],
		"countries": [
			"AD|Europe/Andorra",
			"AE|Asia/Dubai",
			"AF|Asia/Kabul",
			"AG|America/Puerto_Rico America/Antigua",
			"AI|America/Puerto_Rico America/Anguilla",
			"AL|Europe/Tirane",
			"AM|Asia/Yerevan",
			"AO|Africa/Lagos Africa/Luanda",
			"AQ|Antarctica/Casey Antarctica/Davis Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Troll Antarctica/Vostok Pacific/Auckland Pacific/Port_Moresby Asia/Riyadh Asia/Singapore Antarctica/McMurdo Antarctica/DumontDUrville Antarctica/Syowa",
			"AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia",
			"AS|Pacific/Pago_Pago",
			"AT|Europe/Vienna",
			"AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla Asia/Tokyo",
			"AW|America/Puerto_Rico America/Aruba",
			"AX|Europe/Helsinki Europe/Mariehamn",
			"AZ|Asia/Baku",
			"BA|Europe/Belgrade Europe/Sarajevo",
			"BB|America/Barbados",
			"BD|Asia/Dhaka",
			"BE|Europe/Brussels",
			"BF|Africa/Abidjan Africa/Ouagadougou",
			"BG|Europe/Sofia",
			"BH|Asia/Qatar Asia/Bahrain",
			"BI|Africa/Maputo Africa/Bujumbura",
			"BJ|Africa/Lagos Africa/Porto-Novo",
			"BL|America/Puerto_Rico America/St_Barthelemy",
			"BM|Atlantic/Bermuda",
			"BN|Asia/Kuching Asia/Brunei",
			"BO|America/La_Paz",
			"BQ|America/Puerto_Rico America/Kralendijk",
			"BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco",
			"BS|America/Toronto America/Nassau",
			"BT|Asia/Thimphu",
			"BW|Africa/Maputo Africa/Gaborone",
			"BY|Europe/Minsk",
			"BZ|America/Belize",
			"CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Toronto America/Iqaluit America/Winnipeg America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Inuvik America/Dawson_Creek America/Fort_Nelson America/Whitehorse America/Dawson America/Vancouver America/Panama America/Puerto_Rico America/Phoenix America/Blanc-Sablon America/Atikokan America/Creston",
			"CC|Asia/Yangon Indian/Cocos",
			"CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi",
			"CF|Africa/Lagos Africa/Bangui",
			"CG|Africa/Lagos Africa/Brazzaville",
			"CH|Europe/Zurich",
			"CI|Africa/Abidjan",
			"CK|Pacific/Rarotonga",
			"CL|America/Santiago America/Coyhaique America/Punta_Arenas Pacific/Easter",
			"CM|Africa/Lagos Africa/Douala",
			"CN|Asia/Shanghai Asia/Urumqi",
			"CO|America/Bogota",
			"CR|America/Costa_Rica",
			"CU|America/Havana",
			"CV|Atlantic/Cape_Verde",
			"CW|America/Puerto_Rico America/Curacao",
			"CX|Asia/Bangkok Indian/Christmas",
			"CY|Asia/Nicosia Asia/Famagusta",
			"CZ|Europe/Prague",
			"DE|Europe/Zurich Europe/Berlin Europe/Busingen",
			"DJ|Africa/Nairobi Africa/Djibouti",
			"DK|Europe/Berlin Europe/Copenhagen",
			"DM|America/Puerto_Rico America/Dominica",
			"DO|America/Santo_Domingo",
			"DZ|Africa/Algiers",
			"EC|America/Guayaquil Pacific/Galapagos",
			"EE|Europe/Tallinn",
			"EG|Africa/Cairo",
			"EH|Africa/El_Aaiun",
			"ER|Africa/Nairobi Africa/Asmara",
			"ES|Europe/Madrid Africa/Ceuta Atlantic/Canary",
			"ET|Africa/Nairobi Africa/Addis_Ababa",
			"FI|Europe/Helsinki",
			"FJ|Pacific/Fiji",
			"FK|Atlantic/Stanley",
			"FM|Pacific/Kosrae Pacific/Port_Moresby Pacific/Guadalcanal Pacific/Chuuk Pacific/Pohnpei",
			"FO|Atlantic/Faroe",
			"FR|Europe/Paris",
			"GA|Africa/Lagos Africa/Libreville",
			"GB|Europe/London",
			"GD|America/Puerto_Rico America/Grenada",
			"GE|Asia/Tbilisi",
			"GF|America/Cayenne",
			"GG|Europe/London Europe/Guernsey",
			"GH|Africa/Abidjan Africa/Accra",
			"GI|Europe/Gibraltar",
			"GL|America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule",
			"GM|Africa/Abidjan Africa/Banjul",
			"GN|Africa/Abidjan Africa/Conakry",
			"GP|America/Puerto_Rico America/Guadeloupe",
			"GQ|Africa/Lagos Africa/Malabo",
			"GR|Europe/Athens",
			"GS|Atlantic/South_Georgia",
			"GT|America/Guatemala",
			"GU|Pacific/Guam",
			"GW|Africa/Bissau",
			"GY|America/Guyana",
			"HK|Asia/Hong_Kong",
			"HN|America/Tegucigalpa",
			"HR|Europe/Belgrade Europe/Zagreb",
			"HT|America/Port-au-Prince",
			"HU|Europe/Budapest",
			"ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura",
			"IE|Europe/Dublin",
			"IL|Asia/Jerusalem",
			"IM|Europe/London Europe/Isle_of_Man",
			"IN|Asia/Kolkata",
			"IO|Indian/Chagos",
			"IQ|Asia/Baghdad",
			"IR|Asia/Tehran",
			"IS|Africa/Abidjan Atlantic/Reykjavik",
			"IT|Europe/Rome",
			"JE|Europe/London Europe/Jersey",
			"JM|America/Jamaica",
			"JO|Asia/Amman",
			"JP|Asia/Tokyo",
			"KE|Africa/Nairobi",
			"KG|Asia/Bishkek",
			"KH|Asia/Bangkok Asia/Phnom_Penh",
			"KI|Pacific/Tarawa Pacific/Kanton Pacific/Kiritimati",
			"KM|Africa/Nairobi Indian/Comoro",
			"KN|America/Puerto_Rico America/St_Kitts",
			"KP|Asia/Pyongyang",
			"KR|Asia/Seoul",
			"KW|Asia/Riyadh Asia/Kuwait",
			"KY|America/Panama America/Cayman",
			"KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral",
			"LA|Asia/Bangkok Asia/Vientiane",
			"LB|Asia/Beirut",
			"LC|America/Puerto_Rico America/St_Lucia",
			"LI|Europe/Zurich Europe/Vaduz",
			"LK|Asia/Colombo",
			"LR|Africa/Monrovia",
			"LS|Africa/Johannesburg Africa/Maseru",
			"LT|Europe/Vilnius",
			"LU|Europe/Brussels Europe/Luxembourg",
			"LV|Europe/Riga",
			"LY|Africa/Tripoli",
			"MA|Africa/Casablanca",
			"MC|Europe/Paris Europe/Monaco",
			"MD|Europe/Chisinau",
			"ME|Europe/Belgrade Europe/Podgorica",
			"MF|America/Puerto_Rico America/Marigot",
			"MG|Africa/Nairobi Indian/Antananarivo",
			"MH|Pacific/Tarawa Pacific/Kwajalein Pacific/Majuro",
			"MK|Europe/Belgrade Europe/Skopje",
			"ML|Africa/Abidjan Africa/Bamako",
			"MM|Asia/Yangon",
			"MN|Asia/Ulaanbaatar Asia/Hovd",
			"MO|Asia/Macau",
			"MP|Pacific/Guam Pacific/Saipan",
			"MQ|America/Martinique",
			"MR|Africa/Abidjan Africa/Nouakchott",
			"MS|America/Puerto_Rico America/Montserrat",
			"MT|Europe/Malta",
			"MU|Indian/Mauritius",
			"MV|Indian/Maldives",
			"MW|Africa/Maputo Africa/Blantyre",
			"MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Chihuahua America/Ciudad_Juarez America/Ojinaga America/Mazatlan America/Bahia_Banderas America/Hermosillo America/Tijuana",
			"MY|Asia/Kuching Asia/Singapore Asia/Kuala_Lumpur",
			"MZ|Africa/Maputo",
			"NA|Africa/Windhoek",
			"NC|Pacific/Noumea",
			"NE|Africa/Lagos Africa/Niamey",
			"NF|Pacific/Norfolk",
			"NG|Africa/Lagos",
			"NI|America/Managua",
			"NL|Europe/Brussels Europe/Amsterdam",
			"NO|Europe/Berlin Europe/Oslo",
			"NP|Asia/Kathmandu",
			"NR|Pacific/Nauru",
			"NU|Pacific/Niue",
			"NZ|Pacific/Auckland Pacific/Chatham",
			"OM|Asia/Dubai Asia/Muscat",
			"PA|America/Panama",
			"PE|America/Lima",
			"PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier",
			"PG|Pacific/Port_Moresby Pacific/Bougainville",
			"PH|Asia/Manila",
			"PK|Asia/Karachi",
			"PL|Europe/Warsaw",
			"PM|America/Miquelon",
			"PN|Pacific/Pitcairn",
			"PR|America/Puerto_Rico",
			"PS|Asia/Gaza Asia/Hebron",
			"PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores",
			"PW|Pacific/Palau",
			"PY|America/Asuncion",
			"QA|Asia/Qatar",
			"RE|Asia/Dubai Indian/Reunion",
			"RO|Europe/Bucharest",
			"RS|Europe/Belgrade",
			"RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Volgograd Europe/Astrakhan Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr",
			"RW|Africa/Maputo Africa/Kigali",
			"SA|Asia/Riyadh",
			"SB|Pacific/Guadalcanal",
			"SC|Asia/Dubai Indian/Mahe",
			"SD|Africa/Khartoum",
			"SE|Europe/Berlin Europe/Stockholm",
			"SG|Asia/Singapore",
			"SH|Africa/Abidjan Atlantic/St_Helena",
			"SI|Europe/Belgrade Europe/Ljubljana",
			"SJ|Europe/Berlin Arctic/Longyearbyen",
			"SK|Europe/Prague Europe/Bratislava",
			"SL|Africa/Abidjan Africa/Freetown",
			"SM|Europe/Rome Europe/San_Marino",
			"SN|Africa/Abidjan Africa/Dakar",
			"SO|Africa/Nairobi Africa/Mogadishu",
			"SR|America/Paramaribo",
			"SS|Africa/Juba",
			"ST|Africa/Sao_Tome",
			"SV|America/El_Salvador",
			"SX|America/Puerto_Rico America/Lower_Princes",
			"SY|Asia/Damascus",
			"SZ|Africa/Johannesburg Africa/Mbabane",
			"TC|America/Grand_Turk",
			"TD|Africa/Ndjamena",
			"TF|Asia/Dubai Indian/Maldives Indian/Kerguelen",
			"TG|Africa/Abidjan Africa/Lome",
			"TH|Asia/Bangkok",
			"TJ|Asia/Dushanbe",
			"TK|Pacific/Fakaofo",
			"TL|Asia/Dili",
			"TM|Asia/Ashgabat",
			"TN|Africa/Tunis",
			"TO|Pacific/Tongatapu",
			"TR|Europe/Istanbul",
			"TT|America/Puerto_Rico America/Port_of_Spain",
			"TV|Pacific/Tarawa Pacific/Funafuti",
			"TW|Asia/Taipei",
			"TZ|Africa/Nairobi Africa/Dar_es_Salaam",
			"UA|Europe/Simferopol Europe/Kyiv",
			"UG|Africa/Nairobi Africa/Kampala",
			"UM|Pacific/Pago_Pago Pacific/Tarawa Pacific/Midway Pacific/Wake",
			"US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu",
			"UY|America/Montevideo",
			"UZ|Asia/Samarkand Asia/Tashkent",
			"VA|Europe/Rome Europe/Vatican",
			"VC|America/Puerto_Rico America/St_Vincent",
			"VE|America/Caracas",
			"VG|America/Puerto_Rico America/Tortola",
			"VI|America/Puerto_Rico America/St_Thomas",
			"VN|Asia/Bangkok Asia/Ho_Chi_Minh",
			"VU|Pacific/Efate",
			"WF|Pacific/Tarawa Pacific/Wallis",
			"WS|Pacific/Apia",
			"YE|Asia/Riyadh Asia/Aden",
			"YT|Africa/Nairobi Indian/Mayotte",
			"ZA|Africa/Johannesburg",
			"ZM|Africa/Maputo Africa/Lusaka",
			"ZW|Africa/Maputo Africa/Harare"
		]
	});


	return moment;
}));


/***/ },

/***/ "./node_modules/moment/moment.js"
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    0
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i,
            arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        var flags = null,
            parsedParts = false,
            isNowValid = m._d && !isNaN(m._d.getTime());
        if (isNowValid) {
            flags = getParsingFlags(m);
            parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            isNowValid =
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i,
            prop,
            val,
            momentPropertiesLen = momentProperties.length;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key,
                    argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {
        D: 'date',
        dates: 'date',
        date: 'date',
        d: 'day',
        days: 'day',
        day: 'day',
        e: 'weekday',
        weekdays: 'weekday',
        weekday: 'weekday',
        E: 'isoWeekday',
        isoweekdays: 'isoWeekday',
        isoweekday: 'isoWeekday',
        DDD: 'dayOfYear',
        dayofyears: 'dayOfYear',
        dayofyear: 'dayOfYear',
        h: 'hour',
        hours: 'hour',
        hour: 'hour',
        ms: 'millisecond',
        milliseconds: 'millisecond',
        millisecond: 'millisecond',
        m: 'minute',
        minutes: 'minute',
        minute: 'minute',
        M: 'month',
        months: 'month',
        month: 'month',
        Q: 'quarter',
        quarters: 'quarter',
        quarter: 'quarter',
        s: 'second',
        seconds: 'second',
        second: 'second',
        gg: 'weekYear',
        weekyears: 'weekYear',
        weekyear: 'weekYear',
        GG: 'isoWeekYear',
        isoweekyears: 'isoWeekYear',
        isoweekyear: 'isoWeekYear',
        w: 'week',
        weeks: 'week',
        week: 'week',
        W: 'isoWeek',
        isoweeks: 'isoWeek',
        isoweek: 'isoWeek',
        y: 'year',
        years: 'year',
        year: 'year',
    };

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1,
    };

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
        match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback,
            tokenLen;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        tokenLen = token.length;
        for (i = 0; i < tokenLen; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        if (!mom.isValid()) {
            return NaN;
        }

        var d = mom._d,
            isUTC = mom._isUTC;

        switch (unit) {
            case 'Milliseconds':
                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
            case 'Seconds':
                return isUTC ? d.getUTCSeconds() : d.getSeconds();
            case 'Minutes':
                return isUTC ? d.getUTCMinutes() : d.getMinutes();
            case 'Hours':
                return isUTC ? d.getUTCHours() : d.getHours();
            case 'Date':
                return isUTC ? d.getUTCDate() : d.getDate();
            case 'Day':
                return isUTC ? d.getUTCDay() : d.getDay();
            case 'Month':
                return isUTC ? d.getUTCMonth() : d.getMonth();
            case 'FullYear':
                return isUTC ? d.getUTCFullYear() : d.getFullYear();
            default:
                return NaN; // Just in case
        }
    }

    function set$1(mom, unit, value) {
        var d, isUTC, year, month, date;

        if (!mom.isValid() || isNaN(value)) {
            return;
        }

        d = mom._d;
        isUTC = mom._isUTC;

        switch (unit) {
            case 'Milliseconds':
                return void (isUTC
                    ? d.setUTCMilliseconds(value)
                    : d.setMilliseconds(value));
            case 'Seconds':
                return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
            case 'Minutes':
                return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
            case 'Hours':
                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
            case 'Date':
                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
            // case 'Day': // Not real
            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
            // case 'Month': // Not used because we need to pass two variables
            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
            case 'FullYear':
                break; // See below ...
            default:
                return; // Just in case
        }

        year = value;
        month = mom.month();
        date = mom.date();
        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
        void (isUTC
            ? d.setUTCFullYear(year, month, date)
            : d.setFullYear(year, month, date));
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // PARSING

    addRegexToken('M', match1to2, match1to2NoLeadingZero);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        defaultLocaleMonthsShort =
            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        var month = value,
            date = mom.date();

        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
        void (mom._isUTC
            ? mom._d.setUTCMonth(month, date)
            : mom._d.setMonth(month, date));
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            shortP,
            longP;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortP = regexEscape(this.monthsShort(mom, ''));
            longP = regexEscape(this.months(mom, ''));
            shortPieces.push(shortP);
            longPieces.push(longP);
            mixedPieces.push(longP);
            mixedPieces.push(shortP);
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // PARSING

    addRegexToken('w', match1to2, match1to2NoLeadingZero);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2, match1to2NoLeadingZero);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays =
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
              ? weekdays[m.day()]
              : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
              ? this._weekdaysShort[m.day()]
              : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
              ? this._weekdaysMin[m.day()]
              : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        var day = get(this, 'Day');
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2, match1to2HasZero);
    addRegexToken('h', match1to2, match1to2NoLeadingZero);
    addRegexToken('k', match1to2, match1to2NoLeadingZero);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        // Ensure name is available and function returns boolean
        return !!(name && name.match('^[^/\\\\]*$'));
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            "object" !== 'undefined' &&
            module &&
            module.exports &&
            isLocaleNameSane(name)
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = undefined;
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                      ? DATE
                      : a[HOUR] < 0 ||
                          a[HOUR] > 24 ||
                          (a[HOUR] === 24 &&
                              (a[MINUTE] !== 0 ||
                                  a[SECOND] !== 0 ||
                                  a[MILLISECOND] !== 0))
                        ? HOUR
                        : a[MINUTE] < 0 || a[MINUTE] > 59
                          ? MINUTE
                          : a[SECOND] < 0 || a[SECOND] > 59
                            ? SECOND
                            : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                              ? MILLISECOND
                              : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat,
            isoDatesLen = isoDates.length,
            isoTimesLen = isoTimes.length;

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^()]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era,
            tokenLen;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for (i = 0; i < tokenLen; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false,
            configfLen = config._f.length;

        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i,
            orderLen = ordering.length;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property,
            propertyLen = properties.length;

        for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
              ? 'lastWeek'
              : diff < 0
                ? 'lastDay'
                : diff < 1
                  ? 'sameDay'
                  : diff < 2
                    ? 'nextDay'
                    : diff < 7
                      ? 'nextWeek'
                      : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        }
    );

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            erasName,
            erasAbbr,
            erasNarrow,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            erasName = regexEscape(eras[i].name);
            erasAbbr = regexEscape(eras[i].abbr);
            erasNarrow = regexEscape(eras[i].narrow);

            namePieces.push(erasName);
            abbrPieces.push(erasAbbr);
            narrowPieces.push(erasNarrow);
            mixedPieces.push(erasName);
            mixedPieces.push(erasAbbr);
            mixedPieces.push(erasNarrow);
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday() + this.localeData()._week.dow,
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // PARSING

    addRegexToken('D', match1to2, match1to2NoLeadingZero);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // PARSING

    addRegexToken('m', match1to2, match1to2HasZero);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // PARSING

    addRegexToken('s', match1to2, match1to2HasZero);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                          ? 'st'
                          : b === 2
                            ? 'nd'
                            : b === 3
                              ? 'rd'
                              : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y'),
        valueOf$1 = asMilliseconds;

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.30.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLnNoaXBwaW5nLWNvdW50ZG93bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLElBQUFBLFNBQUE7QUFBQSxTQUFBQyw4QkFBQUMsQ0FBQSxFQUFBQyxDQUFBLGdCQUFBRCxDQUFBLGlCQUFBRSxDQUFBLGdCQUFBQyxDQUFBLElBQUFILENBQUEsU0FBQUksY0FBQSxDQUFBQyxJQUFBLENBQUFMLENBQUEsRUFBQUcsQ0FBQSxnQkFBQUYsQ0FBQSxDQUFBSyxPQUFBLENBQUFILENBQUEsYUFBQUQsQ0FBQSxDQUFBQyxDQUFBLElBQUFILENBQUEsQ0FBQUcsQ0FBQSxZQUFBRCxDQUFBO0FBQUEsU0FBQUssYUFBQSxJQW5CQSx1S0FBQU4sQ0FBQSxFQUFBQyxDQUFBLEVBQUFGLENBQUEsd0JBQUFRLE1BQUEsR0FBQUEsTUFBQSxPQUFBTCxDQUFBLEdBQUFILENBQUEsQ0FBQVMsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBVixDQUFBLENBQUFXLFdBQUEsOEJBQUFDLEVBQUFaLENBQUEsRUFBQUcsQ0FBQSxFQUFBTyxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQVcsU0FBQSxZQUFBQyxTQUFBLEdBQUFaLENBQUEsR0FBQVksU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQWhCLENBQUEsRUFBQUcsQ0FBQSxFQUFBTyxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFsQixDQUFBLEtBQUFxQixDQUFBLEVBQUF2QixDQUFBLEVBQUF3QixDQUFBLEVBQUFDLENBQUEsRUFBQU4sQ0FBQSxFQUFBTSxDQUFBLENBQUFDLElBQUEsQ0FBQTFCLENBQUEsTUFBQXlCLENBQUEsV0FBQUEsRUFBQXhCLENBQUEsRUFBQUYsQ0FBQSxXQUFBWSxDQUFBLEdBQUFWLENBQUEsRUFBQVcsQ0FBQSxNQUFBRyxDQUFBLEdBQUFmLENBQUEsRUFBQXNCLENBQUEsQ0FBQXBCLENBQUEsR0FBQUgsQ0FBQSxFQUFBeUIsQ0FBQSxnQkFBQUMsRUFBQTFCLENBQUEsRUFBQUcsQ0FBQSxTQUFBVSxDQUFBLEdBQUFiLENBQUEsRUFBQWdCLENBQUEsR0FBQWIsQ0FBQSxFQUFBRCxDQUFBLE9BQUFvQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBUixDQUFBLEdBQUFtQixDQUFBLENBQUFPLE1BQUEsRUFBQTFCLENBQUEsVUFBQVEsQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQW5CLENBQUEsR0FBQXdCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQVosQ0FBQSxRQUFBVSxDQUFBLEdBQUFtQixDQUFBLEtBQUExQixDQUFBLE1BQUFhLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVgsQ0FBQSxJQUFBVyxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQVYsQ0FBQSxRQUFBMEIsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFyQixDQUFBLEVBQUFvQixDQUFBLENBQUFwQixDQUFBLEdBQUFTLENBQUEsT0FBQWMsQ0FBQSxHQUFBRyxDQUFBLEtBQUFuQixDQUFBLEdBQUFWLENBQUEsUUFBQVksQ0FBQSxNQUFBVCxDQUFBLElBQUFBLENBQUEsR0FBQTBCLENBQUEsTUFBQWpCLENBQUEsTUFBQVosQ0FBQSxFQUFBWSxDQUFBLE1BQUFULENBQUEsRUFBQW9CLENBQUEsQ0FBQXBCLENBQUEsR0FBQTBCLENBQUEsRUFBQWhCLENBQUEsY0FBQUgsQ0FBQSxJQUFBVixDQUFBLGFBQUF5QixDQUFBLFFBQUFILENBQUEsT0FBQW5CLENBQUEscUJBQUFPLENBQUEsRUFBQVcsQ0FBQSxFQUFBUSxDQUFBLFFBQUFULENBQUEsWUFBQVUsU0FBQSx1Q0FBQVIsQ0FBQSxVQUFBRCxDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxFQUFBUSxDQUFBLEdBQUFoQixDQUFBLEdBQUFRLENBQUEsRUFBQUwsQ0FBQSxHQUFBYSxDQUFBLEdBQUEzQixDQUFBLEdBQUFXLENBQUEsT0FBQVosQ0FBQSxHQUFBZSxDQUFBLE1BQUFNLENBQUEsS0FBQVYsQ0FBQSxLQUFBQyxDQUFBLEdBQUFBLENBQUEsUUFBQUEsQ0FBQSxTQUFBVSxDQUFBLENBQUFwQixDQUFBLFFBQUF1QixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFwQixDQUFBLEdBQUFhLENBQUEsR0FBQU8sQ0FBQSxDQUFBQyxDQUFBLEdBQUFSLENBQUEsYUFBQUksQ0FBQSxNQUFBUixDQUFBLFFBQUFDLENBQUEsS0FBQUgsQ0FBQSxZQUFBUixDQUFBLEdBQUFVLENBQUEsQ0FBQUYsQ0FBQSxXQUFBUixDQUFBLEdBQUFBLENBQUEsQ0FBQUcsSUFBQSxDQUFBTyxDQUFBLEVBQUFJLENBQUEsVUFBQWMsU0FBQSwyQ0FBQTVCLENBQUEsQ0FBQTZCLElBQUEsU0FBQTdCLENBQUEsRUFBQWMsQ0FBQSxHQUFBZCxDQUFBLENBQUE4QixLQUFBLEVBQUFuQixDQUFBLFNBQUFBLENBQUEsb0JBQUFBLENBQUEsS0FBQVgsQ0FBQSxHQUFBVSxDQUFBLGVBQUFWLENBQUEsQ0FBQUcsSUFBQSxDQUFBTyxDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFYLENBQUEsY0FBQUMsQ0FBQSxJQUFBb0IsQ0FBQSxHQUFBQyxDQUFBLENBQUFwQixDQUFBLFFBQUFhLENBQUEsR0FBQWhCLENBQUEsQ0FBQUssSUFBQSxDQUFBRixDQUFBLEVBQUFvQixDQUFBLE9BQUFFLENBQUEsa0JBQUF2QixDQUFBLElBQUFVLENBQUEsR0FBQVgsQ0FBQSxFQUFBWSxDQUFBLE1BQUFHLENBQUEsR0FBQWQsQ0FBQSxjQUFBa0IsQ0FBQSxtQkFBQVksS0FBQSxFQUFBOUIsQ0FBQSxFQUFBNkIsSUFBQSxFQUFBVCxDQUFBLFNBQUF0QixDQUFBLEVBQUFVLENBQUEsRUFBQUUsQ0FBQSxRQUFBSSxDQUFBLFFBQUFTLENBQUEsZ0JBQUFWLFVBQUEsY0FBQWtCLGtCQUFBLGNBQUFDLDJCQUFBLEtBQUFoQyxDQUFBLEdBQUFlLE1BQUEsQ0FBQWtCLGNBQUEsTUFBQXRCLENBQUEsTUFBQVYsQ0FBQSxJQUFBRCxDQUFBLENBQUFBLENBQUEsSUFBQUMsQ0FBQSxTQUFBZ0IsbUJBQUEsQ0FBQWpCLENBQUEsT0FBQUMsQ0FBQSxpQ0FBQUQsQ0FBQSxHQUFBYyxDQUFBLEdBQUFrQiwwQkFBQSxDQUFBcEIsU0FBQSxHQUFBQyxTQUFBLENBQUFELFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFMLENBQUEsWUFBQU8sRUFBQW5CLENBQUEsV0FBQWdCLE1BQUEsQ0FBQW1CLGNBQUEsR0FBQW5CLE1BQUEsQ0FBQW1CLGNBQUEsQ0FBQW5DLENBQUEsRUFBQWlDLDBCQUFBLEtBQUFqQyxDQUFBLENBQUFvQyxTQUFBLEdBQUFILDBCQUFBLEVBQUFmLG1CQUFBLENBQUFsQixDQUFBLEVBQUFTLENBQUEseUJBQUFULENBQUEsQ0FBQWEsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBZixDQUFBLFdBQUFnQyxpQkFBQSxDQUFBbkIsU0FBQSxHQUFBb0IsMEJBQUEsRUFBQWYsbUJBQUEsQ0FBQUgsQ0FBQSxpQkFBQWtCLDBCQUFBLEdBQUFmLG1CQUFBLENBQUFlLDBCQUFBLGlCQUFBRCxpQkFBQSxHQUFBQSxpQkFBQSxDQUFBSyxXQUFBLHdCQUFBbkIsbUJBQUEsQ0FBQWUsMEJBQUEsRUFBQXhCLENBQUEsd0JBQUFTLG1CQUFBLENBQUFILENBQUEsR0FBQUcsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBTixDQUFBLGdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFiLENBQUEsaUNBQUFnQixtQkFBQSxDQUFBSCxDQUFBLDhEQUFBVCxZQUFBLFlBQUFBLGFBQUEsYUFBQWdDLENBQUEsRUFBQTNCLENBQUEsRUFBQTRCLENBQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBRCxvQkFBQWxCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFELENBQUEsUUFBQVUsQ0FBQSxHQUFBSyxNQUFBLENBQUF3QixjQUFBLFFBQUE3QixDQUFBLHVCQUFBWCxDQUFBLElBQUFXLENBQUEsUUFBQU8sbUJBQUEsWUFBQXVCLG1CQUFBekMsQ0FBQSxFQUFBRCxDQUFBLEVBQUFHLENBQUEsRUFBQUQsQ0FBQSxhQUFBUSxFQUFBVixDQUFBLEVBQUFHLENBQUEsSUFBQWdCLG1CQUFBLENBQUFsQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTBDLE9BQUEsQ0FBQTNDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRixDQUFBLFNBQUFELENBQUEsR0FBQVksQ0FBQSxHQUFBQSxDQUFBLENBQUFYLENBQUEsRUFBQUQsQ0FBQSxJQUFBZ0MsS0FBQSxFQUFBN0IsQ0FBQSxFQUFBeUMsVUFBQSxHQUFBMUMsQ0FBQSxFQUFBMkMsWUFBQSxHQUFBM0MsQ0FBQSxFQUFBNEMsUUFBQSxHQUFBNUMsQ0FBQSxNQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUcsQ0FBQSxJQUFBTyxDQUFBLGFBQUFBLENBQUEsY0FBQUEsQ0FBQSxtQkFBQVMsbUJBQUEsQ0FBQWxCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFELENBQUE7QUFBQSxTQUFBNkMsbUJBQUE1QyxDQUFBLEVBQUFELENBQUEsRUFBQUQsQ0FBQSxFQUFBRCxDQUFBLEVBQUFVLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQVQsQ0FBQSxDQUFBc0IsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBb0IsS0FBQSxXQUFBN0IsQ0FBQSxnQkFBQUYsQ0FBQSxDQUFBRSxDQUFBLEtBQUFTLENBQUEsQ0FBQW1CLElBQUEsR0FBQTdCLENBQUEsQ0FBQWMsQ0FBQSxJQUFBZ0MsT0FBQSxDQUFBQyxPQUFBLENBQUFqQyxDQUFBLEVBQUFrQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFVLENBQUE7QUFBQSxTQUFBeUMsa0JBQUFoRCxDQUFBLDZCQUFBRCxDQUFBLFNBQUFELENBQUEsR0FBQW1ELFNBQUEsYUFBQUosT0FBQSxXQUFBaEQsQ0FBQSxFQUFBVSxDQUFBLFFBQUFlLENBQUEsR0FBQXRCLENBQUEsQ0FBQWtELEtBQUEsQ0FBQW5ELENBQUEsRUFBQUQsQ0FBQSxZQUFBcUQsTUFBQW5ELENBQUEsSUFBQTRDLGtCQUFBLENBQUF0QixDQUFBLEVBQUF6QixDQUFBLEVBQUFVLENBQUEsRUFBQTRDLEtBQUEsRUFBQUMsTUFBQSxVQUFBcEQsQ0FBQSxjQUFBb0QsT0FBQXBELENBQUEsSUFBQTRDLGtCQUFBLENBQUF0QixDQUFBLEVBQUF6QixDQUFBLEVBQUFVLENBQUEsRUFBQTRDLEtBQUEsRUFBQUMsTUFBQSxXQUFBcEQsQ0FBQSxLQUFBbUQsS0FBQTtBQXFCb0Y7QUFDOUI7QUFFdEQsSUFBTUksTUFBTSxHQUFHLDhCQUE4QjtBQUM3QyxJQUFNQyxPQUFPLEdBQUcsNkJBQTZCO0FBQzdDLElBQU1DLE9BQU8sR0FBRywrQkFBK0I7QUFFL0MsSUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFNQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQUMsSUFFckJDLFNBQVM7RUFDWCxTQUFBQSxVQUFZQyxNQUFNLEVBQUFDLEtBQUEsRUFXVjtJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFBQyxJQUFBLEdBQUFGLEtBQUEsY0FBSixDQUFDLENBQUMsR0FBQUEsS0FBQTtNQUFBRyxVQUFBLEdBQUFELElBQUEsQ0FWRkUsS0FBSztNQUFMQSxLQUFLLEdBQUFELFVBQUEsY0FBRyxLQUFLLEdBQUFBLFVBQUE7TUFBQUUsaUJBQUEsR0FBQUgsSUFBQSxDQUNiSSxZQUFZO01BQVpBLFlBQVksR0FBQUQsaUJBQUEsY0FBRyxFQUFFLEdBQUFBLGlCQUFBO01BQUFFLFlBQUEsR0FBQUwsSUFBQSxDQUNqQk0sT0FBTztNQUFQQSxPQUFPLEdBQUFELFlBQUEsY0FBRyxxQkFBcUIsR0FBQUEsWUFBQTtNQUFBRSxtQkFBQSxHQUFBUCxJQUFBLENBQy9CUSxjQUFjO01BQWRBLGNBQWMsR0FBQUQsbUJBQUEsY0FBRyxLQUFLLEdBQUFBLG1CQUFBO01BQUFFLG9CQUFBLEdBQUFULElBQUEsQ0FDdEJVLGVBQWU7TUFBZkEsZUFBZSxHQUFBRCxvQkFBQSxjQUFHO1FBQ2RFLE1BQU0sRUFBRSxVQUFVO1FBQ2xCQyxHQUFHLEVBQUU7TUFDVCxDQUFDLEdBQUFILG9CQUFBO01BQUFJLHFCQUFBLEdBQUFiLElBQUEsQ0FDRGMsb0JBQW9CO01BQXBCQSxvQkFBb0IsR0FBQUQscUJBQUEsY0FBRyxVQUFVLEdBQUFBLHFCQUFBO01BQUFFLHFCQUFBLEdBQUFmLElBQUEsQ0FDakNnQixpQkFBaUI7TUFBakJBLGlCQUFpQixHQUFBRCxxQkFBQSxjQUFHLFVBQUNFLE9BQU87UUFBQSxPQUFLQyxNQUFNLENBQUNELE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUFBLElBQUFOLHFCQUFBO0lBRXhJLElBQUksQ0FBQ2xCLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNLLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNFLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNFLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUNFLGNBQWMsR0FBR0EsY0FBYztJQUNwQyxJQUFJLENBQUNFLGVBQWUsR0FBR0EsZUFBZTtJQUN0QyxJQUFJLENBQUNJLG9CQUFvQixHQUFHQSxvQkFBb0I7SUFDaEQsSUFBSSxDQUFDUSxTQUFTLEdBQUdOLGlCQUFpQixDQUFDbkIsTUFBTSxDQUFDO0lBRTFDLElBQUksQ0FBQyxJQUFJLENBQUN5QixTQUFTLEVBQUU7TUFDakI7SUFDSjtJQUVBLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7SUFFdEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDO01BQUEsT0FBTTNCLEtBQUksQ0FBQ3dCLGVBQWUsQ0FBQyxDQUFDO0lBQUEsR0FBRSxLQUFLLENBQUM7SUFFcEVqQyx3RUFBa0IsQ0FBQ3NDLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxVQUFDQyxLQUFLLEVBQUVDLElBQUksRUFBSztNQUNwRSxJQUFJLENBQUNBLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNDLFFBQVEsSUFBSSxDQUFDRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxFQUFFLEtBQUtqQyxLQUFJLENBQUN1QixTQUFTLEVBQUU7UUFDNUY7TUFDSjtNQUNBdkIsS0FBSSxDQUFDd0IsZUFBZSxDQUFDO1FBQ2pCVSxTQUFTLEVBQUVILElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxJQUFJLENBQUNJO01BQ2xDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ3JDLE1BQU0sQ0FBQ3NDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQztFQUMzRDtFQUFDLElBQUFDLE1BQUEsR0FBQXhDLFNBQUEsQ0FBQWpELFNBQUE7RUFBQXlGLE1BQUEsQ0FFS2IsZUFBZTtJQUFBLElBQUFjLGdCQUFBLEdBQUFyRCxpQkFBQSxjQUFBNUMsWUFBQSxHQUFBaUMsQ0FBQSxDQUFyQixTQUFBaUUsUUFBQUMsTUFBQTtNQUFBLElBQUFDLEtBQUEsRUFBQUMsZUFBQSxFQUFBUixTQUFBLEVBQUFwQyxNQUFBLEVBQUFLLEtBQUEsRUFBQUUsWUFBQSxFQUFBRSxPQUFBLEVBQUFFLGNBQUEsRUFBQUUsZUFBQSxFQUFBSSxvQkFBQSxFQUFBUSxTQUFBLEVBQUFvQixTQUFBLEVBQUFDLE1BQUEsRUFBQUMsSUFBQSxFQUFBL0UsS0FBQSxFQUFBZ0YsUUFBQSxFQUFBQyxTQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxFQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxHQUFBLEVBQUFDLEtBQUEsRUFBQUMsUUFBQSxFQUFBQyxNQUFBLEVBQUFDLE1BQUEsRUFBQUMsTUFBQSxFQUFBQyxJQUFBLEVBQUFDLEtBQUEsRUFBQUMsT0FBQTtNQUFBLE9BQUEzSCxZQUFBLEdBQUFnQyxDQUFBLFdBQUE0RixRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQWhJLENBQUE7VUFBQTtZQUFBd0csS0FBQSxHQUFBRCxNQUFBLGNBRUksQ0FBQyxDQUFDLEdBQUFBLE1BQUEsRUFBQUUsZUFBQSxHQUFBRCxLQUFBLENBREZQLFNBQVMsRUFBVEEsU0FBUyxHQUFBUSxlQUFBLGNBQUcsQ0FBQyxHQUFBQSxlQUFBO1lBR1Q1QyxNQUFNLEdBQ04sSUFBSSxDQURKQSxNQUFNLEVBQUVLLEtBQUssR0FDYixJQUFJLENBRElBLEtBQUssRUFBRUUsWUFBWSxHQUMzQixJQUFJLENBRFdBLFlBQVksRUFBRUUsT0FBTyxHQUNwQyxJQUFJLENBRHlCQSxPQUFPLEVBQUVFLGNBQWMsR0FDcEQsSUFBSSxDQURrQ0EsY0FBYyxFQUFFRSxlQUFlLEdBQ3JFLElBQUksQ0FEa0RBLGVBQWUsRUFBRUksb0JBQW9CLEdBQzNGLElBQUksQ0FEbUVBLG9CQUFvQixFQUFFUSxTQUFTLEdBQ3RHLElBQUksQ0FEeUZBLFNBQVM7WUFFdEdvQixTQUFTLEdBQUc3QyxNQUFNLENBQUNpQyxJQUFJLENBQUN0QyxPQUFPLENBQUM7WUFBQSxLQUdoQ2dCLGNBQWM7Y0FBQXdELFFBQUEsQ0FBQWhJLENBQUE7Y0FBQTtZQUFBO1lBQUEsTUFDVixDQUFDMEQsZUFBZSxDQUFDNEIsU0FBUyxDQUFDLElBQUlXLFNBQVMsSUFBSSxDQUFDdEMsZUFBZSxDQUFDc0MsU0FBUyxDQUFDO2NBQUErQixRQUFBLENBQUFoSSxDQUFBO2NBQUE7WUFBQTtZQUFBZ0ksUUFBQSxDQUFBaEksQ0FBQTtZQUFBLE9BQ3BEaUksQ0FBQyxDQUFDQyxJQUFJLENBQUM7Y0FDdEJDLEdBQUcsRUFBRSxVQUFVO2NBQ2ZDLE1BQU0sRUFBRSxNQUFNO2NBQ2R0QyxJQUFJLEVBQUV1QyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDakJDLEtBQUssK3pEQWdDSjtnQkFDREMsU0FBUyxFQUFFO2tCQUNQbEQsU0FBUyxFQUFUQSxTQUFTO2tCQUNUVyxTQUFTLEVBQVRBO2dCQUNKO2NBQ0osQ0FBQyxDQUFDO2NBQ0Z3QyxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbENDLGFBQWEsY0FBWXRFO2NBQzdCLENBQUM7Y0FDRHVFLFNBQVMsRUFBRTtnQkFDUEMsZUFBZSxFQUFFO2NBQ3JCO1lBQ0osQ0FBQyxDQUFDO1VBQUE7WUFqREloQyxJQUFJLEdBQUFvQixRQUFBLENBQUEzRyxDQUFBO1lBbURWcUMsZUFBZSxDQUFDNEIsU0FBUyxDQUFDLEdBQUdzQixJQUFJLENBQUNkLElBQUksQ0FBQytDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFVBQUNDLE1BQU0sRUFBQUMsS0FBQTtjQUFBLElBQUlDLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO2NBQUEsT0FBT0EsSUFBSSxDQUFDdkgsS0FBSztZQUFBLEdBQUUsSUFBSSxDQUFDO1lBQ25IcUMsS0FBSyxJQUFJbUYsT0FBTyxDQUFDQyxHQUFHLHNCQUFvQmhFLFNBQVMsVUFBTzVCLGVBQWUsQ0FBQzRCLFNBQVMsQ0FBQyxDQUFDO1lBRW5GM0IsZUFBZSxDQUFDc0MsU0FBUyxDQUFDLEdBQUdXLElBQUksQ0FBQ2QsSUFBSSxDQUFDK0MsSUFBSSxDQUFDQyxPQUFPLENBQUNTLFFBQVEsQ0FBQ1AsS0FBSyxDQUFDQyxNQUFNLENBQ3JFLFVBQUNDLE1BQU0sRUFBQU0sS0FBQTtjQUFBLElBQUlKLElBQUksR0FBQUksS0FBQSxDQUFKSixJQUFJO2NBQUEsT0FDWEEsSUFBSSxDQUFDTCxVQUFVLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFVBQUNRLE9BQU8sRUFBQUMsS0FBQTtnQkFBQSxJQUFJQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztnQkFBQSxPQUFPQSxLQUFLLENBQUM5SCxLQUFLO2NBQUEsR0FBRXFILE1BQU0sQ0FBQztZQUFBLEdBQzdFLElBQ0osQ0FBQztZQUNEaEYsS0FBSyxJQUFJbUYsT0FBTyxDQUFDQyxHQUFHLHNCQUFvQnJELFNBQVMsVUFBT3RDLGVBQWUsQ0FBQ3NDLFNBQVMsQ0FBQyxDQUFDO1VBQUM7WUFHbEZwRSxLQUFLLEdBQUc4QixlQUFlLENBQUNzQyxTQUFTLENBQUMsSUFBSXZDLGVBQWUsQ0FBQzRCLFNBQVMsQ0FBQztZQUN0RSxJQUFJekQsS0FBSyxFQUFFO2NBQ1A2RSxTQUFTLEdBQUdoQyxlQUFlLENBQUM3QyxLQUFLLENBQUM7WUFDdEM7WUFFQThFLE1BQU0sR0FBRyxDQUFDakMsZUFBZSxDQUFDN0MsS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBRyxFQUFFO1lBQUNtRyxRQUFBLENBQUFoSSxDQUFBO1lBQUE7VUFBQTtZQUU5QzBHLFNBQVMsR0FBR0EsU0FBUyxJQUFJNUIsb0JBQW9CO1VBQUM7WUFBQSxNQUk5QyxDQUFDNEIsU0FBUyxJQUFJLENBQUNDLE1BQU07Y0FBQXFCLFFBQUEsQ0FBQWhJLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQWdJLFFBQUEsQ0FBQTFHLENBQUE7VUFBQTtZQUVuQnVGLFFBQVEsR0FBR2hELE1BQU0sQ0FBQ2lDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxNQUFNO1lBQzVDZ0IsU0FBUyxHQUFHakQsTUFBTSxDQUFDaUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU87WUFDL0NpQixVQUFVLEdBQUdsRCxNQUFNLENBQUNpQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUTtZQUNsRGtCLFdBQVcsR0FBR25ELE1BQU0sQ0FBQ2lDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxTQUFTO1lBRXJEbUIsUUFBUSxHQUFHcEQsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3pDOEIsT0FBTyxHQUFHckQsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDK0IsV0FBVyxHQUFHdEQsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQy9DZ0MsVUFBVSxHQUFHdkQsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDaUMsT0FBTyxHQUFHeEQsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUN0Q2tDLE9BQU8sR0FBR3pELE1BQU0sQ0FBQ3VCLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFNUMsSUFBSSxDQUFDNkIsUUFBUSxDQUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2NBQzVCbUIsUUFBUSxDQUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRW1CLFFBQVEsQ0FBQzJDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUM7WUFDQSxJQUFJLENBQUMxQyxPQUFPLENBQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Y0FDM0JvQixPQUFPLENBQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFb0IsT0FBTyxDQUFDMEMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QztZQUNBLElBQUksQ0FBQ3pDLFdBQVcsQ0FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtjQUMvQnFCLFdBQVcsQ0FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUVxQixXQUFXLENBQUN5QyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BEO1lBQ0EsSUFBSSxDQUFDeEMsVUFBVSxDQUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2NBQzlCc0IsVUFBVSxDQUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRXNCLFVBQVUsQ0FBQ3dDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEQ7WUFFQSxJQUFJbEQsU0FBUyxFQUFFO2NBQ1hZLE9BQU8sQ0FBQ3VDLElBQUksQ0FBQyxDQUFDO2NBRVJ0QyxHQUFHLEdBQUdsRSxxR0FBTSxDQUFDLENBQUMsQ0FBQ3lHLEVBQUUsQ0FBQ3hGLE9BQU8sQ0FBQztjQUMxQmtELEtBQUssR0FBR25FLHdHQUFTLENBQUlBLHFHQUFNLENBQUMsQ0FBQyxDQUFDeUcsRUFBRSxDQUFDeEYsT0FBTyxDQUFDLENBQUN5RixNQUFNLENBQUMsWUFBWSxDQUFDLFNBQUlyRCxTQUFTLEVBQUlwQyxPQUFPLENBQUM7Y0FDdkZtRCxRQUFRLEdBQUdwRSx3R0FBUyxDQUFJQSxxR0FBTSxDQUFDLENBQUMsQ0FBQzJHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUNGLEVBQUUsQ0FBQ3hGLE9BQU8sQ0FBQyxDQUFDeUYsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFJckQsU0FBUyxFQUFJcEMsT0FBTyxDQUFDO2NBQ3pHb0QsTUFBTSxHQUFHckUsd0dBQVMsQ0FBSUEscUdBQU0sQ0FBQyxDQUFDLENBQUN5RyxFQUFFLENBQUN4RixPQUFPLENBQUMsQ0FBQzJGLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFJckQsU0FBUyxFQUFJcEMsT0FBTyxDQUFDO2NBQ2pHcUQsTUFBTSxHQUFHdEUsd0dBQVMsQ0FBSUEscUdBQU0sQ0FBQyxDQUFDLENBQUN5RyxFQUFFLENBQUN4RixPQUFPLENBQUMsQ0FBQzJGLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBYXpGLE9BQU8sQ0FBQztjQUM3RnNELE1BQU0sR0FBR3ZFLHdHQUFTLENBQUlBLHFHQUFNLENBQUMsQ0FBQyxDQUFDeUcsRUFBRSxDQUFDeEYsT0FBTyxDQUFDLENBQUMyRixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUNGLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBSXJELFNBQVMsRUFBSXBDLE9BQU8sQ0FBQztjQUNqR3VELElBQUksR0FBR04sR0FBRyxDQUFDMkMsU0FBUyxDQUFDeEMsTUFBTSxFQUFFQyxNQUFNLENBQUMsR0FBR0MsTUFBTSxHQUFJTCxHQUFHLENBQUM0QyxRQUFRLENBQUMzQyxLQUFLLENBQUMsR0FBR0EsS0FBSyxHQUFHQyxRQUFTO2NBRTlGdkQsS0FBSyxJQUFJbUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFL0IsR0FBRyxDQUFDd0MsTUFBTSxDQUFDLENBQUMsQ0FBQztjQUM1QzdGLEtBQUssSUFBSW1GLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRTlCLEtBQUssQ0FBQ3VDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Y0FDaEQ3RixLQUFLLElBQUltRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU3QixRQUFRLENBQUNzQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2NBQ3REN0YsS0FBSyxJQUFJbUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFNUIsTUFBTSxDQUFDcUMsTUFBTSxDQUFDLENBQUMsQ0FBQztjQUNsRDdGLEtBQUssSUFBSW1GLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRTNCLE1BQU0sQ0FBQ29DLE1BQU0sQ0FBQyxDQUFDLENBQUM7Y0FDbEQ3RixLQUFLLElBQUltRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUUxQixNQUFNLENBQUNtQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2NBQ2xEN0YsS0FBSyxJQUFJbUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFekIsSUFBSSxDQUFDa0MsTUFBTSxDQUFDLENBQUMsQ0FBQztjQUV4Q2pDLEtBQUssR0FBR0QsSUFBSSxDQUFDdUMsSUFBSSxDQUFDN0MsR0FBRyxFQUFFLE1BQU0sQ0FBQztjQUM5QlEsT0FBTyxHQUFHRixJQUFJLENBQUN1QyxJQUFJLENBQUM3QyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUdPLEtBQUssR0FBRyxFQUFFO2NBRXJELElBQUlELElBQUksQ0FBQ3dDLE1BQU0sQ0FBQ3pDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQlgsUUFBUSxDQUFDNEMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YzQyxPQUFPLENBQUMyQyxJQUFJLENBQUMsQ0FBQztnQkFDZDFDLFdBQVcsQ0FBQzBDLElBQUksQ0FBQyxDQUFDO2dCQUNsQnpDLFVBQVUsQ0FBQ3lDLElBQUksQ0FBQyxDQUFDO2dCQUNqQnhDLE9BQU8sQ0FBQ2lELElBQUksQ0FBQyxDQUFDO2NBQ2xCLENBQUMsTUFBTSxJQUFJekMsSUFBSSxDQUFDd0MsTUFBTSxDQUFDN0MsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCTCxXQUFXLENBQUMwQyxJQUFJLENBQUMsQ0FBQztnQkFDbEJ6QyxVQUFVLENBQUN5QyxJQUFJLENBQUMsQ0FBQztnQkFDakJ4QyxPQUFPLENBQUN3QyxJQUFJLENBQUMsQ0FBQztnQkFDZCxJQUFJL0IsS0FBSyxLQUFLLENBQUMsRUFBRTtrQkFDYmIsUUFBUSxDQUFDNEMsSUFBSSxDQUFDLENBQUM7a0JBQ2YzQyxPQUFPLENBQUMwQyxJQUFJLENBQUMxQyxPQUFPLENBQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUN5RSxPQUFPLENBQUMsV0FBVyxFQUFLeEMsT0FBTyxVQUFJQSxPQUFPLEdBQUcsQ0FBQyxHQUFHZixXQUFXLEdBQUdELFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQ3VELElBQUksQ0FBQyxDQUFDO2dCQUM5SCxDQUFDLE1BQU07a0JBQ0hyRCxRQUFRLENBQUMyQyxJQUFJLENBQUMzQyxRQUFRLENBQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQ2xDeUUsT0FBTyxDQUFDLFNBQVMsRUFBS3pDLEtBQUssVUFBSUEsS0FBSyxHQUFHLENBQUMsR0FBR2hCLFNBQVMsR0FBR0QsUUFBUSxDQUFFLENBQUMsQ0FDbEUwRCxPQUFPLENBQUMsV0FBVyxFQUFLeEMsT0FBTyxVQUFJQSxPQUFPLEdBQUcsQ0FBQyxHQUFHZixXQUFXLEdBQUdELFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQ3VELElBQUksQ0FBQyxDQUFDO2tCQUN6RnBELE9BQU8sQ0FBQzJDLElBQUksQ0FBQyxDQUFDO2dCQUNsQjtjQUNKLENBQUMsTUFBTTtnQkFDSDVDLFFBQVEsQ0FBQzRDLElBQUksQ0FBQyxDQUFDO2dCQUNmM0MsT0FBTyxDQUFDMkMsSUFBSSxDQUFDLENBQUM7Z0JBQ2R4QyxPQUFPLENBQUN3QyxJQUFJLENBQUMsQ0FBQztnQkFDZCxJQUFJL0IsS0FBSyxLQUFLLENBQUMsRUFBRTtrQkFDYlgsV0FBVyxDQUFDMEMsSUFBSSxDQUFDLENBQUM7a0JBQ2xCekMsVUFBVSxDQUFDd0MsSUFBSSxDQUFDeEMsVUFBVSxDQUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDeUUsT0FBTyxDQUFDLFdBQVcsRUFBS3hDLE9BQU8sVUFBSUEsT0FBTyxHQUFHLENBQUMsR0FBR2YsV0FBVyxHQUFHRCxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUN1RCxJQUFJLENBQUMsQ0FBQztnQkFDcEksQ0FBQyxNQUFNO2tCQUNIbkQsV0FBVyxDQUFDeUMsSUFBSSxDQUFDekMsV0FBVyxDQUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUN4Q3lFLE9BQU8sQ0FBQyxTQUFTLEVBQUt6QyxLQUFLLFVBQUlBLEtBQUssR0FBRyxDQUFDLEdBQUdoQixTQUFTLEdBQUdELFFBQVEsQ0FBRSxDQUFDLENBQ2xFMEQsT0FBTyxDQUFDLFdBQVcsRUFBS3hDLE9BQU8sVUFBSUEsT0FBTyxHQUFHLENBQUMsR0FBR2YsV0FBVyxHQUFHRCxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUN1RCxJQUFJLENBQUMsQ0FBQztrQkFDekZsRCxVQUFVLENBQUN5QyxJQUFJLENBQUMsQ0FBQztnQkFDckI7Y0FDSjtZQUNKO1lBRUEsSUFBSWxELE1BQU0sRUFBRTtjQUNSVyxPQUFPLENBQUNzQyxJQUFJLENBQUNqRCxNQUFNLENBQUMsQ0FBQzJELElBQUksQ0FBQyxDQUFDO2NBQzNCckQsUUFBUSxDQUFDNEMsSUFBSSxDQUFDLENBQUM7Y0FDZjNDLE9BQU8sQ0FBQzJDLElBQUksQ0FBQyxDQUFDO2NBQ2QxQyxXQUFXLENBQUMwQyxJQUFJLENBQUMsQ0FBQztjQUNsQnpDLFVBQVUsQ0FBQ3lDLElBQUksQ0FBQyxDQUFDO2NBQ2pCeEMsT0FBTyxDQUFDd0MsSUFBSSxDQUFDLENBQUM7WUFDbEI7WUFFQWhHLE1BQU0sQ0FBQ3lHLElBQUksQ0FBQyxDQUFDO1VBQUM7WUFBQSxPQUFBdEMsUUFBQSxDQUFBMUcsQ0FBQTtRQUFBO01BQUEsR0FBQWdGLE9BQUE7SUFBQSxDQUNqQjtJQUFBLFNBbExLZixlQUFlQSxDQUFBaUYsRUFBQTtNQUFBLE9BQUFuRSxnQkFBQSxDQUFBbkQsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFmc0MsZUFBZTtFQUFBO0VBQUEsT0FBQTNCLFNBQUE7QUFBQTtBQXFMekIsU0FBUzZHLFVBQVVBLENBQUFDLEtBQUEsRUFHaEI7RUFBQSxJQUFBQyxxQkFBQSxHQUFBRCxLQUFBLENBRkNFLGlCQUFpQjtJQUFqQkEsaUJBQWlCLEdBQUFELHFCQUFBLHlCQUFZbEgsT0FBTyxTQUFBa0gscUJBQUE7SUFDakNFLFFBQVEsR0FBQWpMLDZCQUFBLENBQUE4SyxLQUFBLEVBQUEvSyxTQUFBO0VBRVhzSSxDQUFDLENBQUMyQyxpQkFBaUIsQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBQ3JLLENBQUMsRUFBRXNLLEVBQUUsRUFBSztJQUNqQyxJQUFNQyxHQUFHLEdBQUcvQyxDQUFDLENBQUM4QyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDQyxHQUFHLENBQUNsRixJQUFJLENBQUl2QyxNQUFNLHNCQUFtQixDQUFDLEVBQUU7TUFDekN5SCxHQUFHLENBQUNsRixJQUFJLENBQUl2QyxNQUFNLHdCQUFxQixJQUFJSyxTQUFTLENBQUNvSCxHQUFHLEVBQUVILFFBQVEsQ0FBQyxDQUFDO0lBQ3hFO0VBQ0osQ0FBQyxDQUFDO0FBQ047QUFBQyxTQUVjSSxPQUFPQSxDQUFBQyxHQUFBO0VBQUEsT0FBQUMsUUFBQSxDQUFBakksS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUFBa0ksU0FBQTtFQUFBQSxRQUFBLEdBQUFuSSxpQkFBQSxjQUFBNUMsWUFBQSxHQUFBaUMsQ0FBQSxDQUF0QixTQUFBK0ksU0FBdUJQLFFBQVE7SUFBQSxJQUFBUSxFQUFBO0lBQUEsT0FBQWpMLFlBQUEsR0FBQWdDLENBQUEsV0FBQWtKLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBdEwsQ0FBQTtRQUFBO1VBQUEsSUFBUjZLLFFBQVE7WUFBUkEsUUFBUSxHQUFHLENBQUMsQ0FBQztVQUFBO1VBQ2hDSixVQUFVLENBQUNJLFFBQVEsQ0FBQztVQUNkUSxFQUFFLEdBQUcsSUFBSUUsZ0JBQWdCLENBQUNDLHNEQUFBLENBQVMsWUFBTTtZQUMzQ2YsVUFBVSxDQUFDSSxRQUFRLENBQUM7VUFDeEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ1JRLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDQyxRQUFRLENBQUNDLElBQUksRUFBRTtZQUFFQyxTQUFTLEVBQUUsSUFBSTtZQUFFQyxPQUFPLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFBQztVQUFBLE9BQUFQLFNBQUEsQ0FBQWhLLENBQUE7TUFBQTtJQUFBLEdBQUE4SixRQUFBO0VBQUEsQ0FDakU7RUFBQSxPQUFBRCxRQUFBLENBQUFqSSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUVELDZCQUFlLG9DQUFBNkksS0FBQSxFQUtaO0VBQUEsSUFKQzFILFlBQVksR0FBQTBILEtBQUEsQ0FBWjFILFlBQVk7SUFDWkUsT0FBTyxHQUFBd0gsS0FBQSxDQUFQeEgsT0FBTztJQUNQSSxlQUFlLEdBQUFvSCxLQUFBLENBQWZwSCxlQUFlO0lBQ2ZJLG9CQUFvQixHQUFBZ0gsS0FBQSxDQUFwQmhILG9CQUFvQjtFQUVwQm1HLE9BQU8sQ0FBQztJQUNKN0csWUFBWSxFQUFaQSxZQUFZO0lBQ1pFLE9BQU8sRUFBUEEsT0FBTztJQUNQSSxlQUFlLEVBQWZBLGVBQWU7SUFDZkksb0JBQW9CLEVBQXBCQTtFQUNKLENBQUMsQ0FBQztBQUNOLEM7Ozs7Ozs7Ozs7QUMvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEtBQTBCO0FBQy9CLDJCQUEyQixtQkFBTyxDQUFDLCtDQUFRLElBQUk7QUFDL0MsR0FBRyxTQUFTLElBQTBDO0FBQ3RELEVBQUUsaUNBQU8sQ0FBQyxvRUFBUSxDQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUMsa0JBQWtCO0FBQy9DLEdBQUcsS0FBSztBQUFBLEVBRU47QUFDRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUIsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxrQ0FBa0MsSUFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM3aUREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLEtBQTREO0FBQ2hFLElBQUksQ0FDeUI7QUFDN0IsQ0FBQyxzQkFBc0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHLElBQUksd0JBQXdCLElBQUksdURBQXVELElBQUk7QUFDbk0scUVBQXFFLElBQUk7QUFDekUsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtDQUFrQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkIscUJBQXFCLEVBQUU7QUFDdkIsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUIsd0JBQXdCLElBQUk7QUFDNUIsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSx3RUFBd0UsTUFBTSxtQkFBbUIsTUFBTSxxQkFBcUIsTUFBTSxFQUFFLElBQUk7QUFDaks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQU87QUFDeEMsZ0JBQWdCLHdJQUFrQztBQUNsRDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRSxJQUFJLEVBQUU7QUFDcEM7QUFDQSw0QkFBNEIsRUFBRSxJQUFJLEVBQUU7QUFDcEM7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDLCtCQUErQixFQUFFO0FBQ2pDLGlDQUFpQyxFQUFFO0FBQ25DLCtCQUErQixFQUFFO0FBQ2pDLDZCQUE2QixFQUFFLElBQUksRUFBRTtBQUNyQyw0QkFBNEIsRUFBRTtBQUM5QixtQ0FBbUMsR0FBRztBQUN0Qyw2QkFBNkIsRUFBRTtBQUMvQiwrQkFBK0IsRUFBRSxJQUFJLEVBQUU7QUFDdkMsOEJBQThCLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLDRCQUE0QixFQUFFO0FBQzlCLDJCQUEyQixFQUFFO0FBQzdCLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELElBQUksMERBQTBELElBQUkscUVBQXFFLEVBQUU7QUFDak07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxzQkFBc0I7QUFDMUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3NoaXBwaW5nLWNvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9tb21lbnQtdGltZXpvbmUvYnVpbGRzL21vbWVudC10aW1lem9uZS13aXRoLWRhdGEtMTAteWVhci1yYW5nZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXHJcbi8qXHJcbjxkaXZcclxuICAgIGRhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd249XCIxMjowMDowMFwiXHJcbiAgICBkYXRhLWhvdXItdGV4dD1cIkhvdXJcIlxyXG4gICAgZGF0YS1ob3Vycy10ZXh0PVwiSG91cnNcIlxyXG4gICAgZGF0YS1taW51dGUtdGV4dD1cIk1pbnV0ZVwiXHJcbiAgICBkYXRhLW1pbnV0ZXMtdGV4dD1cIk1pbnV0ZXNcIlxyXG4gICAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cclxuICAgIDxkaXYgZGF0YS10b2RheS1obT5JbiBTdG9jayAmIFJlYWR5IFRvIFNoaXAhIE9yZGVyIEluIFRoZSBOZXh0IDxzdHJvbmc+JUhPVVIlPC9zdHJvbmc+IGFuZCA8c3Ryb25nPiVNSU5VVEUlPC9zdHJvbmc+IHRvIHNoaXAgdG9kYXkuPC9kaXY+XHJcbiAgICA8ZGl2IGRhdGEtdG9kYXktbT5JbiBTdG9jayAmIFJlYWR5IFRvIFNoaXAhIE9yZGVyIEluIFRoZSBOZXh0IDxzdHJvbmc+JU1JTlVURSU8L3N0cm9uZz4gdG8gc2hpcCB0b2RheS48L2Rpdj5cclxuICAgIDxkaXYgZGF0YS10b21vcnJvdy1obT5JbiBTdG9jayAmIFJlYWR5IFRvIFNoaXAhIE9yZGVyIEluIFRoZSBOZXh0IDxzdHJvbmc+JUhPVVIlPC9zdHJvbmc+IGFuZCA8c3Ryb25nPiVNSU5VVEUlPC9zdHJvbmc+IHRvIHNoaXAgdG9tb3Jyb3cuPC9kaXY+XHJcbiAgICA8ZGl2IGRhdGEtdG9tb3Jyb3ctbT5JbiBTdG9jayAmIFJlYWR5IFRvIFNoaXAhIE9yZGVyIEluIFRoZSBOZXh0IDxzdHJvbmc+JU1JTlVURSU8L3N0cm9uZz4gdG8gc2hpcCB0b21vcnJvdy48L2Rpdj5cclxuICAgIDxkaXYgZGF0YS1tb25kYXk+SW4gU3RvY2sgJiBSZWFkeSBUbyBTaGlwISBPcmRlciBub3cgdG8gc2hpcCBNb25kYXkuPC9kaXY+XHJcbiAgICA8ZGl2IGRhdGEtY3VzdG9tPjwvZGl2PlxyXG48L2Rpdj5cclxuKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbi8vIGltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZS9idWlsZHMvbW9tZW50LXRpbWV6b25lLXdpdGgtZGF0YS0xMC15ZWFyLXJhbmdlJztcclxuaW1wb3J0IHN0ZW5jaWxVdGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcblxyXG5jb25zdCBBUFBVSUQgPSAnUEFQQVRIRU1FU19TSElQUElOR0NPVU5URE9XTic7XHJcbmNvbnN0IERBVEFLRVkgPSAncGFwYXRoZW1lc1NoaXBwaW5nQ291bnRkb3duJztcclxuY29uc3QgREFTSEtFWSA9ICdwYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93bic7XHJcblxyXG5jb25zdCBwcm9kdWN0TWV0YUJ5SWQgPSB7fTtcclxuY29uc3QgdmFyaWFudE1ldGFCeUlkID0ge307XHJcblxyXG5jbGFzcyBDb3VudGRvd24ge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCB7XHJcbiAgICAgICAgZGVidWcgPSBmYWxzZSxcclxuICAgICAgICBncmFwaFFMVG9rZW4gPSAnJyxcclxuICAgICAgICBzdG9yZVRaID0gJ0FtZXJpY2EvTWV4aWNvX0NpdHknLFxyXG4gICAgICAgIGNoZWNrTWV0YUZpZWxkID0gZmFsc2UsXHJcbiAgICAgICAgY291bnRkb3duVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBwYXJjZWw6ICcxNTowMDowMCcsXHJcbiAgICAgICAgICAgIExUTDogJzEyOjAwOjAwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRDb3VudGRvd25UaW1lID0gJzEyOjAwOjAwJywgLy8gdXNlIHRoaXMgdmFsdWUgaWYgY2hlY2tNZXRhZmllbGQgPSBmYWxzZSBvciBkYXRhLXBhcGF0aGVtZXMtc2hpcHBpbmctY291bnRkb3duID0gZW1wdHlcclxuICAgICAgICBmaW5kUHJvZHVjdElkRnVuYyA9ICgkc2NvcGUxKSA9PiBOdW1iZXIoJHNjb3BlMS5jbG9zZXN0KCcucHJvZHVjdFZpZXcnKS5maW5kKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0gaW5wdXRbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSksXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLmRlYnVnID0gZGVidWc7XHJcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XHJcbiAgICAgICAgdGhpcy5zdG9yZVRaID0gc3RvcmVUWjtcclxuICAgICAgICB0aGlzLmNoZWNrTWV0YUZpZWxkID0gY2hlY2tNZXRhRmllbGQ7XHJcbiAgICAgICAgdGhpcy5jb3VudGRvd25WYWx1ZXMgPSBjb3VudGRvd25WYWx1ZXM7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q291bnRkb3duVGltZSA9IGRlZmF1bHRDb3VudGRvd25UaW1lO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gZmluZFByb2R1Y3RJZEZ1bmMoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZG93bigpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlQ291bnRkb3duKCksIDYwMDAwKTtcclxuXHJcbiAgICAgICAgc3RlbmNpbFV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbnMtY2hhbmdlLXJlbW90ZScsIChldmVudCwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEucmVzcG9uc2UgfHwgIWRhdGEucmVzcG9uc2UuZGF0YSB8fCBkYXRhLnJlc3BvbnNlLmRhdGEuaWQgIT09IHRoaXMucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudGRvd24oe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudElkOiBkYXRhLnJlc3BvbnNlLmRhdGEudjNfdmFyaWFudF9pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdfc2hpcHBpbmctY291bnRkb3duLWluaXRpYWxpemVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ291bnRkb3duKHtcclxuICAgICAgICB2YXJpYW50SWQgPSAwLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAkc2NvcGUsIGRlYnVnLCBncmFwaFFMVG9rZW4sIHN0b3JlVFosIGNoZWNrTWV0YUZpZWxkLCBjb3VudGRvd25WYWx1ZXMsIGRlZmF1bHRDb3VudGRvd25UaW1lLCBwcm9kdWN0SWQsXHJcbiAgICAgICAgfSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvdW50ZG93biA9ICRzY29wZS5kYXRhKERBVEFLRVkpO1xyXG4gICAgICAgIGxldCBjdXN0b207XHJcblxyXG4gICAgICAgIGlmIChjaGVja01ldGFGaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RNZXRhQnlJZFtwcm9kdWN0SWRdIHx8IHZhcmlhbnRJZCAmJiAhdmFyaWFudE1ldGFCeUlkW3ZhcmlhbnRJZF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSgkcHJvZHVjdElkOiBJbnQhLCAkdmFyaWFudElkOiBJbnQhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZmllbGRzKG5hbWVzcGFjZTogXCJwYXBhXCIsIGtleXM6IFtcImNvdW50ZG93blwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHMgKGVudGl0eUlkczogWyR2YXJpYW50SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFmaWVsZHMobmFtZXNwYWNlOiBcInBhcGFcIiwga2V5czogW1wiY291bnRkb3duXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdE1ldGFCeUlkW3Byb2R1Y3RJZF0gPSByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0Lm1ldGFmaWVsZHMuZWRnZXMucmVkdWNlKChfdmFsdWUsIHsgbm9kZSB9KSA9PiBub2RlLnZhbHVlLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUubG9nKGBwcm9kdWN0TWV0YUJ5SWRbJHtwcm9kdWN0SWR9XSA9YCwgcHJvZHVjdE1ldGFCeUlkW3Byb2R1Y3RJZF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhcmlhbnRNZXRhQnlJZFt2YXJpYW50SWRdID0gcmVzcC5kYXRhLnNpdGUucHJvZHVjdC52YXJpYW50cy5lZGdlcy5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgKF92YWx1ZSwgeyBub2RlIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubWV0YWZpZWxkcy5lZGdlcy5yZWR1Y2UoKF92YWx1ZTEsIHsgbm9kZTEgfSkgPT4gbm9kZTEudmFsdWUsIF92YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLmxvZyhgdmFyaWFudE1ldGFCeUlkWyR7dmFyaWFudElkfV0gPWAsIHZhcmlhbnRNZXRhQnlJZFt2YXJpYW50SWRdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YXJpYW50TWV0YUJ5SWRbdmFyaWFudElkXSB8fCBwcm9kdWN0TWV0YUJ5SWRbcHJvZHVjdElkXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGRvd24gPSBjb3VudGRvd25WYWx1ZXNbdmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdXN0b20gPSAhY291bnRkb3duVmFsdWVzW3ZhbHVlXSA/IHZhbHVlIDogJyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY291bnRkb3duID0gY291bnRkb3duIHx8IGRlZmF1bHRDb3VudGRvd25UaW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICghY291bnRkb3duICYmICFjdXN0b20pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaG91clRleHQgPSAkc2NvcGUuZGF0YSgnaG91clRleHQnKSB8fCAnSG91cic7XHJcbiAgICAgICAgY29uc3QgaG91cnNUZXh0ID0gJHNjb3BlLmRhdGEoJ2hvdXJzVGV4dCcpIHx8ICdIb3Vycyc7XHJcbiAgICAgICAgY29uc3QgbWludXRlVGV4dCA9ICRzY29wZS5kYXRhKCdtaW51dGVUZXh0JykgfHwgJ01pbnV0ZSc7XHJcbiAgICAgICAgY29uc3QgbWludXRlc1RleHQgPSAkc2NvcGUuZGF0YSgnbWludXRlc1RleHQnKSB8fCAnTWludXRlcyc7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0b2RheWhtID0gJHNjb3BlLmZpbmQoJ1tkYXRhLXRvZGF5LWhtXScpO1xyXG4gICAgICAgIGNvbnN0ICR0b2RheW0gPSAkc2NvcGUuZmluZCgnW2RhdGEtdG9kYXktbV0nKTtcclxuICAgICAgICBjb25zdCAkdG9tb3Jyb3dobSA9ICRzY29wZS5maW5kKCdbZGF0YS10b21vcnJvdy1obV0nKTtcclxuICAgICAgICBjb25zdCAkdG9tb3Jyb3dtID0gJHNjb3BlLmZpbmQoJ1tkYXRhLXRvbW9ycm93LW1dJyk7XHJcbiAgICAgICAgY29uc3QgJG1vbmRheSA9ICRzY29wZS5maW5kKCdbZGF0YS1tb25kYXldJyk7XHJcbiAgICAgICAgY29uc3QgJGN1c3RvbSA9ICRzY29wZS5maW5kKCdbZGF0YS1jdXN0b21dJyk7XHJcblxyXG4gICAgICAgIGlmICghJHRvZGF5aG0uZGF0YSgndGVtcGxhdGUnKSkge1xyXG4gICAgICAgICAgICAkdG9kYXlobS5kYXRhKCd0ZW1wbGF0ZScsICR0b2RheWhtLmh0bWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJHRvZGF5bS5kYXRhKCd0ZW1wbGF0ZScpKSB7XHJcbiAgICAgICAgICAgICR0b2RheW0uZGF0YSgndGVtcGxhdGUnLCAkdG9kYXltLmh0bWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJHRvbW9ycm93aG0uZGF0YSgndGVtcGxhdGUnKSkge1xyXG4gICAgICAgICAgICAkdG9tb3Jyb3dobS5kYXRhKCd0ZW1wbGF0ZScsICR0b21vcnJvd2htLmh0bWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJHRvbW9ycm93bS5kYXRhKCd0ZW1wbGF0ZScpKSB7XHJcbiAgICAgICAgICAgICR0b21vcnJvd20uZGF0YSgndGVtcGxhdGUnLCAkdG9tb3Jyb3dtLmh0bWwoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRkb3duKSB7XHJcbiAgICAgICAgICAgICRjdXN0b20uaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkudHooc3RvcmVUWik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbW9tZW50LnR6KGAke21vbWVudCgpLnR6KHN0b3JlVFopLmZvcm1hdCgnWVlZWS1NTS1ERCcpfSAke2NvdW50ZG93bn1gLCBzdG9yZVRaKTtcclxuICAgICAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBtb21lbnQudHooYCR7bW9tZW50KCkuYWRkKDEsICdkYXlzJykudHooc3RvcmVUWikuZm9ybWF0KCdZWVlZLU1NLUREJyl9ICR7Y291bnRkb3dufWAsIHN0b3JlVFopO1xyXG4gICAgICAgICAgICBjb25zdCBmcmlkYXkgPSBtb21lbnQudHooYCR7bW9tZW50KCkudHooc3RvcmVUWikuZGF5KCc1JykuZm9ybWF0KCdZWVlZLU1NLUREJyl9ICR7Y291bnRkb3dufWAsIHN0b3JlVFopO1xyXG4gICAgICAgICAgICBjb25zdCBzdW5kYXkgPSBtb21lbnQudHooYCR7bW9tZW50KCkudHooc3RvcmVUWikuZGF5KCc3JykuZm9ybWF0KCdZWVlZLU1NLUREJyl9IDIzOjU5OjU5YCwgc3RvcmVUWik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbmRheSA9IG1vbWVudC50eihgJHttb21lbnQoKS50eihzdG9yZVRaKS5kYXkoJzgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKX0gJHtjb3VudGRvd259YCwgc3RvcmVUWik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBub3cuaXNCZXR3ZWVuKGZyaWRheSwgc3VuZGF5KSA/IG1vbmRheSA6IChub3cuaXNCZWZvcmUodG9kYXkpID8gdG9kYXkgOiB0b21vcnJvdyk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLmxvZygnbm93ID0gJywgbm93LmZvcm1hdCgpKTtcclxuICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coJ3RvZGF5ID0gJywgdG9kYXkuZm9ybWF0KCkpO1xyXG4gICAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLmxvZygndG9tb3Jyb3cgPSAnLCB0b21vcnJvdy5mb3JtYXQoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUubG9nKCdmcmlkYXkgPSAnLCBmcmlkYXkuZm9ybWF0KCkpO1xyXG4gICAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLmxvZygnc3VuZGF5ID0gJywgc3VuZGF5LmZvcm1hdCgpKTtcclxuICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coJ21vbmRheSA9ICcsIG1vbmRheS5mb3JtYXQoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUubG9nKCdzaGlwID0gJywgc2hpcC5mb3JtYXQoKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IHNoaXAuZGlmZihub3csICdob3VyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBzaGlwLmRpZmYobm93LCAnbWludXRlJykgLSBob3VycyAqIDYwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoaXAuaXNTYW1lKG1vbmRheSkpIHtcclxuICAgICAgICAgICAgICAgICR0b2RheWhtLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICR0b2RheW0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJHRvbW9ycm93aG0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJHRvbW9ycm93bS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkbW9uZGF5LnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLmlzU2FtZSh0b2RheSkpIHtcclxuICAgICAgICAgICAgICAgICR0b21vcnJvd2htLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICR0b21vcnJvd20uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJG1vbmRheS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaG91cnMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkdG9kYXlobS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvZGF5bS5odG1sKCR0b2RheW0uZGF0YSgndGVtcGxhdGUnKS5yZXBsYWNlKC8lTUlOVVRFJS9nLCBgJHttaW51dGVzfSAke21pbnV0ZXMgPiAxID8gbWludXRlc1RleHQgOiBtaW51dGVUZXh0fWApKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR0b2RheWhtLmh0bWwoJHRvZGF5aG0uZGF0YSgndGVtcGxhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJUhPVVIlL2csIGAke2hvdXJzfSAke2hvdXJzID4gMSA/IGhvdXJzVGV4dCA6IGhvdXJUZXh0fWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8lTUlOVVRFJS9nLCBgJHttaW51dGVzfSAke21pbnV0ZXMgPiAxID8gbWludXRlc1RleHQgOiBtaW51dGVUZXh0fWApKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvZGF5bS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkdG9kYXlobS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkdG9kYXltLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICRtb25kYXkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhvdXJzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvbW9ycm93aG0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0b21vcnJvd20uaHRtbCgkdG9tb3Jyb3dtLmRhdGEoJ3RlbXBsYXRlJykucmVwbGFjZSgvJU1JTlVURSUvZywgYCR7bWludXRlc30gJHttaW51dGVzID4gMSA/IG1pbnV0ZXNUZXh0IDogbWludXRlVGV4dH1gKSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdG9tb3Jyb3dobS5odG1sKCR0b21vcnJvd2htLmRhdGEoJ3RlbXBsYXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyVIT1VSJS9nLCBgJHtob3Vyc30gJHtob3VycyA+IDEgPyBob3Vyc1RleHQgOiBob3VyVGV4dH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJU1JTlVURSUvZywgYCR7bWludXRlc30gJHttaW51dGVzID4gMSA/IG1pbnV0ZXNUZXh0IDogbWludXRlVGV4dH1gKSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0b21vcnJvd20uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VzdG9tKSB7XHJcbiAgICAgICAgICAgICRjdXN0b20uaHRtbChjdXN0b20pLnNob3coKTtcclxuICAgICAgICAgICAgJHRvZGF5aG0uaGlkZSgpO1xyXG4gICAgICAgICAgICAkdG9kYXltLmhpZGUoKTtcclxuICAgICAgICAgICAgJHRvbW9ycm93aG0uaGlkZSgpO1xyXG4gICAgICAgICAgICAkdG9tb3Jyb3dtLmhpZGUoKTtcclxuICAgICAgICAgICAgJG1vbmRheS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuc2hvdygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb21DaGFuZ2VkKHtcclxuICAgIGNvdW50ZG93blNlbGVjdG9yID0gYFtkYXRhLSR7REFTSEtFWX1dYCxcclxuICAgIC4uLnNldHRpbmdzXHJcbn0pIHtcclxuICAgICQoY291bnRkb3duU2VsZWN0b3IpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgaWYgKCEkZWwuZGF0YShgJHtBUFBVSUR9Q291bnRkb3duSW5zdGFuY2VgKSkge1xyXG4gICAgICAgICAgICAkZWwuZGF0YShgJHtBUFBVSUR9Q291bnRkb3duSW5zdGFuY2VgLCBuZXcgQ291bnRkb3duKCRlbCwgc2V0dGluZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdEFwcChzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICBkb21DaGFuZ2VkKHNldHRpbmdzKTtcclxuICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgICAgIGRvbUNoYW5nZWQoc2V0dGluZ3MpO1xyXG4gICAgfSksIDMwMCk7XHJcbiAgICBtby5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xyXG4gICAgZ3JhcGhRTFRva2VuLFxyXG4gICAgc3RvcmVUWixcclxuICAgIGNvdW50ZG93blZhbHVlcyxcclxuICAgIGRlZmF1bHRDb3VudGRvd25UaW1lLFxyXG59KSB7XHJcbiAgICBpbml0QXBwKHtcclxuICAgICAgICBncmFwaFFMVG9rZW4sXHJcbiAgICAgICAgc3RvcmVUWixcclxuICAgICAgICBjb3VudGRvd25WYWx1ZXMsXHJcbiAgICAgICAgZGVmYXVsdENvdW50ZG93blRpbWUsXHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyEgbW9tZW50LXRpbWV6b25lLmpzXHJcbi8vISB2ZXJzaW9uIDogMC41LjQ4XHJcbi8vISBDb3B5cmlnaHQgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xyXG4vLyEgbGljZW5zZSA6IE1JVFxyXG4vLyEgZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50LXRpbWV6b25lXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0LypnbG9iYWwgZGVmaW5lKi9cclxuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdtb21lbnQnKSk7IC8vIE5vZGVcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFsnbW9tZW50J10sIGZhY3RvcnkpOyAgICAgICAgICAgICAgICAgLy8gQU1EXHJcblx0fSBlbHNlIHtcclxuXHRcdGZhY3Rvcnkocm9vdC5tb21lbnQpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJyb3dzZXJcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKG1vbWVudCkge1xyXG5cdFwidXNlIHN0cmljdFwiO1xyXG5cclxuXHQvLyBSZXNvbHZlcyBlczYgbW9kdWxlIGxvYWRpbmcgaXNzdWVcclxuXHRpZiAobW9tZW50LnZlcnNpb24gPT09IHVuZGVmaW5lZCAmJiBtb21lbnQuZGVmYXVsdCkge1xyXG5cdFx0bW9tZW50ID0gbW9tZW50LmRlZmF1bHQ7XHJcblx0fVxyXG5cclxuXHQvLyBEbyBub3QgbG9hZCBtb21lbnQtdGltZXpvbmUgYSBzZWNvbmQgdGltZS5cclxuXHQvLyBpZiAobW9tZW50LnR6ICE9PSB1bmRlZmluZWQpIHtcclxuXHQvLyBcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgJyArIG1vbWVudC50ei52ZXJzaW9uICsgJyB3YXMgYWxyZWFkeSBsb2FkZWQgJyArIChtb21lbnQudHouZGF0YVZlcnNpb24gPyAnd2l0aCBkYXRhIGZyb20gJyA6ICd3aXRob3V0IGFueSBkYXRhJykgKyBtb21lbnQudHouZGF0YVZlcnNpb24pO1xyXG5cdC8vIFx0cmV0dXJuIG1vbWVudDtcclxuXHQvLyB9XHJcblxyXG5cdHZhciBWRVJTSU9OID0gXCIwLjUuNDhcIixcclxuXHRcdHpvbmVzID0ge30sXHJcblx0XHRsaW5rcyA9IHt9LFxyXG5cdFx0Y291bnRyaWVzID0ge30sXHJcblx0XHRuYW1lcyA9IHt9LFxyXG5cdFx0Z3Vlc3NlcyA9IHt9LFxyXG5cdFx0Y2FjaGVkR3Vlc3M7XHJcblxyXG5cdGlmICghbW9tZW50IHx8IHR5cGVvZiBtb21lbnQudmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcclxuXHRcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgcmVxdWlyZXMgTW9tZW50LmpzLiBTZWUgaHR0cHM6Ly9tb21lbnRqcy5jb20vdGltZXpvbmUvZG9jcy8jL3VzZS1pdC9icm93c2VyLycpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1vbWVudFZlcnNpb24gPSBtb21lbnQudmVyc2lvbi5zcGxpdCgnLicpLFxyXG5cdFx0bWFqb3IgPSArbW9tZW50VmVyc2lvblswXSxcclxuXHRcdG1pbm9yID0gK21vbWVudFZlcnNpb25bMV07XHJcblxyXG5cdC8vIE1vbWVudC5qcyB2ZXJzaW9uIGNoZWNrXHJcblx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA2KSkge1xyXG5cdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSByZXF1aXJlcyBNb21lbnQuanMgPj0gMi42LjAuIFlvdSBhcmUgdXNpbmcgTW9tZW50LmpzICcgKyBtb21lbnQudmVyc2lvbiArICcuIFNlZSBtb21lbnRqcy5jb20nKTtcclxuXHR9XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdFVucGFja2luZ1xyXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0ZnVuY3Rpb24gY2hhckNvZGVUb0ludChjaGFyQ29kZSkge1xyXG5cdFx0aWYgKGNoYXJDb2RlID4gOTYpIHtcclxuXHRcdFx0cmV0dXJuIGNoYXJDb2RlIC0gODc7XHJcblx0XHR9IGVsc2UgaWYgKGNoYXJDb2RlID4gNjQpIHtcclxuXHRcdFx0cmV0dXJuIGNoYXJDb2RlIC0gMjk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2hhckNvZGUgLSA0ODtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVucGFja0Jhc2U2MChzdHJpbmcpIHtcclxuXHRcdHZhciBpID0gMCxcclxuXHRcdFx0cGFydHMgPSBzdHJpbmcuc3BsaXQoJy4nKSxcclxuXHRcdFx0d2hvbGUgPSBwYXJ0c1swXSxcclxuXHRcdFx0ZnJhY3Rpb25hbCA9IHBhcnRzWzFdIHx8ICcnLFxyXG5cdFx0XHRtdWx0aXBsaWVyID0gMSxcclxuXHRcdFx0bnVtLFxyXG5cdFx0XHRvdXQgPSAwLFxyXG5cdFx0XHRzaWduID0gMTtcclxuXHJcblx0XHQvLyBoYW5kbGUgbmVnYXRpdmUgbnVtYmVyc1xyXG5cdFx0aWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NSkge1xyXG5cdFx0XHRpID0gMTtcclxuXHRcdFx0c2lnbiA9IC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGhhbmRsZSBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsXHJcblx0XHRmb3IgKGk7IGkgPCB3aG9sZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KHdob2xlLmNoYXJDb2RlQXQoaSkpO1xyXG5cdFx0XHRvdXQgPSA2MCAqIG91dCArIG51bTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBoYW5kbGUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgZnJhY3Rpb25hbC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRtdWx0aXBsaWVyID0gbXVsdGlwbGllciAvIDYwO1xyXG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KGZyYWN0aW9uYWwuY2hhckNvZGVBdChpKSk7XHJcblx0XHRcdG91dCArPSBudW0gKiBtdWx0aXBsaWVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBvdXQgKiBzaWduO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXJyYXlUb0ludCAoYXJyYXkpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0YXJyYXlbaV0gPSB1bnBhY2tCYXNlNjAoYXJyYXlbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaW50VG9VbnRpbCAoYXJyYXksIGxlbmd0aCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRhcnJheVtpXSA9IE1hdGgucm91bmQoKGFycmF5W2kgLSAxXSB8fCAwKSArIChhcnJheVtpXSAqIDYwMDAwKSk7IC8vIG1pbnV0ZXMgdG8gbWlsbGlzZWNvbmRzXHJcblx0XHR9XHJcblxyXG5cdFx0YXJyYXlbbGVuZ3RoIC0gMV0gPSBJbmZpbml0eTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG1hcEluZGljZXMgKHNvdXJjZSwgaW5kaWNlcykge1xyXG5cdFx0dmFyIG91dCA9IFtdLCBpO1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG91dFtpXSA9IHNvdXJjZVtpbmRpY2VzW2ldXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdW5wYWNrIChzdHJpbmcpIHtcclxuXHRcdHZhciBkYXRhID0gc3RyaW5nLnNwbGl0KCd8JyksXHJcblx0XHRcdG9mZnNldHMgPSBkYXRhWzJdLnNwbGl0KCcgJyksXHJcblx0XHRcdGluZGljZXMgPSBkYXRhWzNdLnNwbGl0KCcnKSxcclxuXHRcdFx0dW50aWxzICA9IGRhdGFbNF0uc3BsaXQoJyAnKTtcclxuXHJcblx0XHRhcnJheVRvSW50KG9mZnNldHMpO1xyXG5cdFx0YXJyYXlUb0ludChpbmRpY2VzKTtcclxuXHRcdGFycmF5VG9JbnQodW50aWxzKTtcclxuXHJcblx0XHRpbnRUb1VudGlsKHVudGlscywgaW5kaWNlcy5sZW5ndGgpO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5hbWUgICAgICAgOiBkYXRhWzBdLFxyXG5cdFx0XHRhYmJycyAgICAgIDogbWFwSW5kaWNlcyhkYXRhWzFdLnNwbGl0KCcgJyksIGluZGljZXMpLFxyXG5cdFx0XHRvZmZzZXRzICAgIDogbWFwSW5kaWNlcyhvZmZzZXRzLCBpbmRpY2VzKSxcclxuXHRcdFx0dW50aWxzICAgICA6IHVudGlscyxcclxuXHRcdFx0cG9wdWxhdGlvbiA6IGRhdGFbNV0gfCAwXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0Wm9uZSBvYmplY3RcclxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdGZ1bmN0aW9uIFpvbmUgKHBhY2tlZFN0cmluZykge1xyXG5cdFx0aWYgKHBhY2tlZFN0cmluZykge1xyXG5cdFx0XHR0aGlzLl9zZXQodW5wYWNrKHBhY2tlZFN0cmluZykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VzdCAobnVtLCBhcnIpIHtcclxuXHRcdHZhciBsZW4gPSBhcnIubGVuZ3RoO1xyXG5cdFx0aWYgKG51bSA8IGFyclswXSkge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSBpZiAobGVuID4gMSAmJiBhcnJbbGVuIC0gMV0gPT09IEluZmluaXR5ICYmIG51bSA+PSBhcnJbbGVuIC0gMl0pIHtcclxuXHRcdFx0cmV0dXJuIGxlbiAtIDE7XHJcblx0XHR9IGVsc2UgaWYgKG51bSA+PSBhcnJbbGVuIC0gMV0pIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBtaWQ7XHJcblx0XHR2YXIgbG8gPSAwO1xyXG5cdFx0dmFyIGhpID0gbGVuIC0gMTtcclxuXHRcdHdoaWxlIChoaSAtIGxvID4gMSkge1xyXG5cdFx0XHRtaWQgPSBNYXRoLmZsb29yKChsbyArIGhpKSAvIDIpO1xyXG5cdFx0XHRpZiAoYXJyW21pZF0gPD0gbnVtKSB7XHJcblx0XHRcdFx0bG8gPSBtaWQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aGkgPSBtaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBoaTtcclxuXHR9XHJcblxyXG5cdFpvbmUucHJvdG90eXBlID0ge1xyXG5cdFx0X3NldCA6IGZ1bmN0aW9uICh1bnBhY2tlZCkge1xyXG5cdFx0XHR0aGlzLm5hbWUgICAgICAgPSB1bnBhY2tlZC5uYW1lO1xyXG5cdFx0XHR0aGlzLmFiYnJzICAgICAgPSB1bnBhY2tlZC5hYmJycztcclxuXHRcdFx0dGhpcy51bnRpbHMgICAgID0gdW5wYWNrZWQudW50aWxzO1xyXG5cdFx0XHR0aGlzLm9mZnNldHMgICAgPSB1bnBhY2tlZC5vZmZzZXRzO1xyXG5cdFx0XHR0aGlzLnBvcHVsYXRpb24gPSB1bnBhY2tlZC5wb3B1bGF0aW9uO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfaW5kZXggOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XHJcblx0XHRcdHZhciB0YXJnZXQgPSArdGltZXN0YW1wLFxyXG5cdFx0XHRcdHVudGlscyA9IHRoaXMudW50aWxzLFxyXG5cdFx0XHRcdGk7XHJcblxyXG5cdFx0XHRpID0gY2xvc2VzdCh0YXJnZXQsIHVudGlscyk7XHJcblx0XHRcdGlmIChpID49IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRjb3VudHJpZXMgOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB6b25lX25hbWUgPSB0aGlzLm5hbWU7XHJcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyhjb3VudHJpZXMpLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeV9jb2RlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvdW50cmllc1tjb3VudHJ5X2NvZGVdLnpvbmVzLmluZGV4T2Yoem9uZV9uYW1lKSAhPT0gLTE7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwYXJzZSA6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcclxuXHRcdFx0dmFyIHRhcmdldCAgPSArdGltZXN0YW1wLFxyXG5cdFx0XHRcdG9mZnNldHMgPSB0aGlzLm9mZnNldHMsXHJcblx0XHRcdFx0dW50aWxzICA9IHRoaXMudW50aWxzLFxyXG5cdFx0XHRcdG1heCAgICAgPSB1bnRpbHMubGVuZ3RoIC0gMSxcclxuXHRcdFx0XHRvZmZzZXQsIG9mZnNldE5leHQsIG9mZnNldFByZXYsIGk7XHJcblxyXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcclxuXHRcdFx0XHRvZmZzZXQgICAgID0gb2Zmc2V0c1tpXTtcclxuXHRcdFx0XHRvZmZzZXROZXh0ID0gb2Zmc2V0c1tpICsgMV07XHJcblx0XHRcdFx0b2Zmc2V0UHJldiA9IG9mZnNldHNbaSA/IGkgLSAxIDogaV07XHJcblxyXG5cdFx0XHRcdGlmIChvZmZzZXQgPCBvZmZzZXROZXh0ICYmIHR6Lm1vdmVBbWJpZ3VvdXNGb3J3YXJkKSB7XHJcblx0XHRcdFx0XHRvZmZzZXQgPSBvZmZzZXROZXh0O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAob2Zmc2V0ID4gb2Zmc2V0UHJldiAmJiB0ei5tb3ZlSW52YWxpZEZvcndhcmQpIHtcclxuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldFByZXY7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGFyZ2V0IDwgdW50aWxzW2ldIC0gKG9mZnNldCAqIDYwMDAwKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9mZnNldHNbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gb2Zmc2V0c1ttYXhdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhYmJyIDogZnVuY3Rpb24gKG1vbSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hYmJyc1t0aGlzLl9pbmRleChtb20pXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xyXG5cdFx0XHRsb2dFcnJvcihcInpvbmUub2Zmc2V0IGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2Ygem9uZS51dGNPZmZzZXRcIik7XHJcblx0XHRcdHJldHVybiB0aGlzLm9mZnNldHNbdGhpcy5faW5kZXgobW9tKV07XHJcblx0XHR9LFxyXG5cclxuXHRcdHV0Y09mZnNldCA6IGZ1bmN0aW9uIChtb20pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRDb3VudHJ5IG9iamVjdFxyXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0ZnVuY3Rpb24gQ291bnRyeSAoY291bnRyeV9uYW1lLCB6b25lX25hbWVzKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBjb3VudHJ5X25hbWU7XHJcblx0XHR0aGlzLnpvbmVzID0gem9uZV9uYW1lcztcclxuXHR9XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdEN1cnJlbnQgVGltZXpvbmVcclxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cdGZ1bmN0aW9uIE9mZnNldEF0KGF0KSB7XHJcblx0XHR2YXIgdGltZVN0cmluZyA9IGF0LnRvVGltZVN0cmluZygpO1xyXG5cdFx0dmFyIGFiYnIgPSB0aW1lU3RyaW5nLm1hdGNoKC9cXChbYS16IF0rXFwpL2kpO1xyXG5cdFx0aWYgKGFiYnIgJiYgYWJiclswXSkge1xyXG5cdFx0XHQvLyAxNzo1NjozMSBHTVQtMDYwMCAoQ1NUKVxyXG5cdFx0XHQvLyAxNzo1NjozMSBHTVQtMDYwMCAoQ2VudHJhbCBTdGFuZGFyZCBUaW1lKVxyXG5cdFx0XHRhYmJyID0gYWJiclswXS5tYXRjaCgvW0EtWl0vZyk7XHJcblx0XHRcdGFiYnIgPSBhYmJyID8gYWJici5qb2luKCcnKSA6IHVuZGVmaW5lZDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIDE3OjU2OjMxIENTVFxyXG5cdFx0XHQvLyAxNzo1NjozMSBHTVQrMDgwMCAo5Y+w5YyX5qiZ5rqW5pmC6ZaTKVxyXG5cdFx0XHRhYmJyID0gdGltZVN0cmluZy5tYXRjaCgvW0EtWl17Myw1fS9nKTtcclxuXHRcdFx0YWJiciA9IGFiYnIgPyBhYmJyWzBdIDogdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChhYmJyID09PSAnR01UJykge1xyXG5cdFx0XHRhYmJyID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXQgPSArYXQ7XHJcblx0XHR0aGlzLmFiYnIgPSBhYmJyO1xyXG5cdFx0dGhpcy5vZmZzZXQgPSBhdC5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gWm9uZVNjb3JlKHpvbmUpIHtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmU7XHJcblx0XHR0aGlzLm9mZnNldFNjb3JlID0gMDtcclxuXHRcdHRoaXMuYWJiclNjb3JlID0gMDtcclxuXHR9XHJcblxyXG5cdFpvbmVTY29yZS5wcm90b3R5cGUuc2NvcmVPZmZzZXRBdCA9IGZ1bmN0aW9uIChvZmZzZXRBdCkge1xyXG5cdFx0dGhpcy5vZmZzZXRTY29yZSArPSBNYXRoLmFicyh0aGlzLnpvbmUudXRjT2Zmc2V0KG9mZnNldEF0LmF0KSAtIG9mZnNldEF0Lm9mZnNldCk7XHJcblx0XHRpZiAodGhpcy56b25lLmFiYnIob2Zmc2V0QXQuYXQpLnJlcGxhY2UoL1teQS1aXS9nLCAnJykgIT09IG9mZnNldEF0LmFiYnIpIHtcclxuXHRcdFx0dGhpcy5hYmJyU2NvcmUrKztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBmaW5kQ2hhbmdlKGxvdywgaGlnaCkge1xyXG5cdFx0dmFyIG1pZCwgZGlmZjtcclxuXHJcblx0XHR3aGlsZSAoKGRpZmYgPSAoKGhpZ2guYXQgLSBsb3cuYXQpIC8gMTJlNCB8IDApICogNmU0KSkge1xyXG5cdFx0XHRtaWQgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUobG93LmF0ICsgZGlmZikpO1xyXG5cdFx0XHRpZiAobWlkLm9mZnNldCA9PT0gbG93Lm9mZnNldCkge1xyXG5cdFx0XHRcdGxvdyA9IG1pZDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRoaWdoID0gbWlkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGxvdztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVzZXJPZmZzZXRzKCkge1xyXG5cdFx0dmFyIHN0YXJ0WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIsXHJcblx0XHRcdGxhc3QgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCAwLCAxKSksXHJcblx0XHRcdGxhc3RPZmZzZXQgPSBsYXN0Lm9mZnNldCxcclxuXHRcdFx0b2Zmc2V0cyA9IFtsYXN0XSxcclxuXHRcdFx0Y2hhbmdlLCBuZXh0LCBuZXh0T2Zmc2V0LCBpO1xyXG5cclxuXHRcdGZvciAoaSA9IDE7IGkgPCA0ODsgaSsrKSB7XHJcblx0XHRcdG5leHRPZmZzZXQgPSBuZXcgRGF0ZShzdGFydFllYXIsIGksIDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7XHJcblx0XHRcdGlmIChuZXh0T2Zmc2V0ICE9PSBsYXN0T2Zmc2V0KSB7XHJcblx0XHRcdFx0Ly8gQ3JlYXRlIE9mZnNldEF0IGhlcmUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgYWJiciBwYXJzaW5nIGJlZm9yZSBjaGVja2luZyBvZmZzZXRzXHJcblx0XHRcdFx0bmV4dCA9IG5ldyBPZmZzZXRBdChuZXcgRGF0ZShzdGFydFllYXIsIGksIDEpKTtcclxuXHRcdFx0XHRjaGFuZ2UgPSBmaW5kQ2hhbmdlKGxhc3QsIG5leHQpO1xyXG5cdFx0XHRcdG9mZnNldHMucHVzaChjaGFuZ2UpO1xyXG5cdFx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoY2hhbmdlLmF0ICsgNmU0KSkpO1xyXG5cdFx0XHRcdGxhc3QgPSBuZXh0O1xyXG5cdFx0XHRcdGxhc3RPZmZzZXQgPSBuZXh0T2Zmc2V0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IDQ7IGkrKykge1xyXG5cdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciArIGksIDAsIDEpKSk7XHJcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgNiwgMSkpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb2Zmc2V0cztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNvcnRab25lU2NvcmVzIChhLCBiKSB7XHJcblx0XHRpZiAoYS5vZmZzZXRTY29yZSAhPT0gYi5vZmZzZXRTY29yZSkge1xyXG5cdFx0XHRyZXR1cm4gYS5vZmZzZXRTY29yZSAtIGIub2Zmc2V0U2NvcmU7XHJcblx0XHR9XHJcblx0XHRpZiAoYS5hYmJyU2NvcmUgIT09IGIuYWJiclNjb3JlKSB7XHJcblx0XHRcdHJldHVybiBhLmFiYnJTY29yZSAtIGIuYWJiclNjb3JlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGEuem9uZS5wb3B1bGF0aW9uICE9PSBiLnpvbmUucG9wdWxhdGlvbikge1xyXG5cdFx0XHRyZXR1cm4gYi56b25lLnBvcHVsYXRpb24gLSBhLnpvbmUucG9wdWxhdGlvbjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBiLnpvbmUubmFtZS5sb2NhbGVDb21wYXJlKGEuem9uZS5uYW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFRvR3Vlc3NlcyAobmFtZSwgb2Zmc2V0cykge1xyXG5cdFx0dmFyIGksIG9mZnNldDtcclxuXHRcdGFycmF5VG9JbnQob2Zmc2V0cyk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgb2Zmc2V0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRvZmZzZXQgPSBvZmZzZXRzW2ldO1xyXG5cdFx0XHRndWVzc2VzW29mZnNldF0gPSBndWVzc2VzW29mZnNldF0gfHwge307XHJcblx0XHRcdGd1ZXNzZXNbb2Zmc2V0XVtuYW1lXSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBndWVzc2VzRm9yVXNlck9mZnNldHMgKG9mZnNldHMpIHtcclxuXHRcdHZhciBvZmZzZXRzTGVuZ3RoID0gb2Zmc2V0cy5sZW5ndGgsXHJcblx0XHRcdGZpbHRlcmVkR3Vlc3NlcyA9IHt9LFxyXG5cdFx0XHRvdXQgPSBbXSxcclxuXHRcdFx0Y2hlY2tlZE9mZnNldHMgPSB7fSxcclxuXHRcdFx0aSwgaiwgb2Zmc2V0LCBndWVzc2VzT2Zmc2V0O1xyXG5cclxuXHRcdGZvciAoaSA9IDA7IGkgPCBvZmZzZXRzTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b2Zmc2V0ID0gb2Zmc2V0c1tpXS5vZmZzZXQ7XHJcblx0XHRcdGlmIChjaGVja2VkT2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eShvZmZzZXQpKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Z3Vlc3Nlc09mZnNldCA9IGd1ZXNzZXNbb2Zmc2V0XSB8fCB7fTtcclxuXHRcdFx0Zm9yIChqIGluIGd1ZXNzZXNPZmZzZXQpIHtcclxuXHRcdFx0XHRpZiAoZ3Vlc3Nlc09mZnNldC5oYXNPd25Qcm9wZXJ0eShqKSkge1xyXG5cdFx0XHRcdFx0ZmlsdGVyZWRHdWVzc2VzW2pdID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hlY2tlZE9mZnNldHNbb2Zmc2V0XSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChpIGluIGZpbHRlcmVkR3Vlc3Nlcykge1xyXG5cdFx0XHRpZiAoZmlsdGVyZWRHdWVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XHJcblx0XHRcdFx0b3V0LnB1c2gobmFtZXNbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG91dDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlYnVpbGRHdWVzcyAoKSB7XHJcblxyXG5cdFx0Ly8gdXNlIEludGwgQVBJIHdoZW4gYXZhaWxhYmxlIGFuZCByZXR1cm5pbmcgdmFsaWQgdGltZSB6b25lXHJcblx0XHR0cnkge1xyXG5cdFx0XHR2YXIgaW50bE5hbWUgPSBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XHJcblx0XHRcdGlmIChpbnRsTmFtZSAmJiBpbnRsTmFtZS5sZW5ndGggPiAzKSB7XHJcblx0XHRcdFx0dmFyIG5hbWUgPSBuYW1lc1tub3JtYWxpemVOYW1lKGludGxOYW1lKV07XHJcblx0XHRcdFx0aWYgKG5hbWUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsb2dFcnJvcihcIk1vbWVudCBUaW1lem9uZSBmb3VuZCBcIiArIGludGxOYW1lICsgXCIgZnJvbSB0aGUgSW50bCBhcGksIGJ1dCBkaWQgbm90IGhhdmUgdGhhdCBkYXRhIGxvYWRlZC5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly8gSW50bCB1bmF2YWlsYWJsZSwgZmFsbCBiYWNrIHRvIG1hbnVhbCBndWVzc2luZy5cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgb2Zmc2V0cyA9IHVzZXJPZmZzZXRzKCksXHJcblx0XHRcdG9mZnNldHNMZW5ndGggPSBvZmZzZXRzLmxlbmd0aCxcclxuXHRcdFx0Z3Vlc3NlcyA9IGd1ZXNzZXNGb3JVc2VyT2Zmc2V0cyhvZmZzZXRzKSxcclxuXHRcdFx0em9uZVNjb3JlcyA9IFtdLFxyXG5cdFx0XHR6b25lU2NvcmUsIGksIGo7XHJcblxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGd1ZXNzZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0em9uZVNjb3JlID0gbmV3IFpvbmVTY29yZShnZXRab25lKGd1ZXNzZXNbaV0pLCBvZmZzZXRzTGVuZ3RoKTtcclxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9mZnNldHNMZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHpvbmVTY29yZS5zY29yZU9mZnNldEF0KG9mZnNldHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHpvbmVTY29yZXMucHVzaCh6b25lU2NvcmUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHpvbmVTY29yZXMuc29ydChzb3J0Wm9uZVNjb3Jlcyk7XHJcblxyXG5cdFx0cmV0dXJuIHpvbmVTY29yZXMubGVuZ3RoID4gMCA/IHpvbmVTY29yZXNbMF0uem9uZS5uYW1lIDogdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ3Vlc3MgKGlnbm9yZUNhY2hlKSB7XHJcblx0XHRpZiAoIWNhY2hlZEd1ZXNzIHx8IGlnbm9yZUNhY2hlKSB7XHJcblx0XHRcdGNhY2hlZEd1ZXNzID0gcmVidWlsZEd1ZXNzKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2FjaGVkR3Vlc3M7XHJcblx0fVxyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRHbG9iYWwgTWV0aG9kc1xyXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0ZnVuY3Rpb24gbm9ybWFsaXplTmFtZSAobmFtZSkge1xyXG5cdFx0cmV0dXJuIChuYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkWm9uZSAocGFja2VkKSB7XHJcblx0XHR2YXIgaSwgbmFtZSwgc3BsaXQsIG5vcm1hbGl6ZWQ7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiBwYWNrZWQgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0cGFja2VkID0gW3BhY2tlZF07XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHBhY2tlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRzcGxpdCA9IHBhY2tlZFtpXS5zcGxpdCgnfCcpO1xyXG5cdFx0XHRuYW1lID0gc3BsaXRbMF07XHJcblx0XHRcdG5vcm1hbGl6ZWQgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xyXG5cdFx0XHR6b25lc1tub3JtYWxpemVkXSA9IHBhY2tlZFtpXTtcclxuXHRcdFx0bmFtZXNbbm9ybWFsaXplZF0gPSBuYW1lO1xyXG5cdFx0XHRhZGRUb0d1ZXNzZXMobm9ybWFsaXplZCwgc3BsaXRbMl0uc3BsaXQoJyAnKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRab25lIChuYW1lLCBjYWxsZXIpIHtcclxuXHJcblx0XHRuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcclxuXHJcblx0XHR2YXIgem9uZSA9IHpvbmVzW25hbWVdO1xyXG5cdFx0dmFyIGxpbms7XHJcblxyXG5cdFx0aWYgKHpvbmUgaW5zdGFuY2VvZiBab25lKSB7XHJcblx0XHRcdHJldHVybiB6b25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0eXBlb2Ygem9uZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0em9uZSA9IG5ldyBab25lKHpvbmUpO1xyXG5cdFx0XHR6b25lc1tuYW1lXSA9IHpvbmU7XHJcblx0XHRcdHJldHVybiB6b25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFBhc3MgZ2V0Wm9uZSB0byBwcmV2ZW50IHJlY3Vyc2lvbiBtb3JlIHRoYW4gMSBsZXZlbCBkZWVwXHJcblx0XHRpZiAobGlua3NbbmFtZV0gJiYgY2FsbGVyICE9PSBnZXRab25lICYmIChsaW5rID0gZ2V0Wm9uZShsaW5rc1tuYW1lXSwgZ2V0Wm9uZSkpKSB7XHJcblx0XHRcdHpvbmUgPSB6b25lc1tuYW1lXSA9IG5ldyBab25lKCk7XHJcblx0XHRcdHpvbmUuX3NldChsaW5rKTtcclxuXHRcdFx0em9uZS5uYW1lID0gbmFtZXNbbmFtZV07XHJcblx0XHRcdHJldHVybiB6b25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0TmFtZXMgKCkge1xyXG5cdFx0dmFyIGksIG91dCA9IFtdO1xyXG5cclxuXHRcdGZvciAoaSBpbiBuYW1lcykge1xyXG5cdFx0XHRpZiAobmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgKHpvbmVzW2ldIHx8IHpvbmVzW2xpbmtzW2ldXSkgJiYgbmFtZXNbaV0pIHtcclxuXHRcdFx0XHRvdXQucHVzaChuYW1lc1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb3V0LnNvcnQoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldENvdW50cnlOYW1lcyAoKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoY291bnRyaWVzKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZExpbmsgKGFsaWFzZXMpIHtcclxuXHRcdHZhciBpLCBhbGlhcywgbm9ybWFsMCwgbm9ybWFsMTtcclxuXHJcblx0XHRpZiAodHlwZW9mIGFsaWFzZXMgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0YWxpYXNlcyA9IFthbGlhc2VzXTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYWxpYXNlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRhbGlhcyA9IGFsaWFzZXNbaV0uc3BsaXQoJ3wnKTtcclxuXHJcblx0XHRcdG5vcm1hbDAgPSBub3JtYWxpemVOYW1lKGFsaWFzWzBdKTtcclxuXHRcdFx0bm9ybWFsMSA9IG5vcm1hbGl6ZU5hbWUoYWxpYXNbMV0pO1xyXG5cclxuXHRcdFx0bGlua3Nbbm9ybWFsMF0gPSBub3JtYWwxO1xyXG5cdFx0XHRuYW1lc1tub3JtYWwwXSA9IGFsaWFzWzBdO1xyXG5cclxuXHRcdFx0bGlua3Nbbm9ybWFsMV0gPSBub3JtYWwwO1xyXG5cdFx0XHRuYW1lc1tub3JtYWwxXSA9IGFsaWFzWzFdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYWRkQ291bnRyaWVzIChkYXRhKSB7XHJcblx0XHR2YXIgaSwgY291bnRyeV9jb2RlLCBjb3VudHJ5X3pvbmVzLCBzcGxpdDtcclxuXHRcdGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHJldHVybjtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHNwbGl0ID0gZGF0YVtpXS5zcGxpdCgnfCcpO1xyXG5cdFx0XHRjb3VudHJ5X2NvZGUgPSBzcGxpdFswXS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRjb3VudHJ5X3pvbmVzID0gc3BsaXRbMV0uc3BsaXQoJyAnKTtcclxuXHRcdFx0Y291bnRyaWVzW2NvdW50cnlfY29kZV0gPSBuZXcgQ291bnRyeShcclxuXHRcdFx0XHRjb3VudHJ5X2NvZGUsXHJcblx0XHRcdFx0Y291bnRyeV96b25lc1xyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0Q291bnRyeSAobmFtZSkge1xyXG5cdFx0bmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKTtcclxuXHRcdHJldHVybiBjb3VudHJpZXNbbmFtZV0gfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHpvbmVzRm9yQ291bnRyeShjb3VudHJ5LCB3aXRoX29mZnNldCkge1xyXG5cdFx0Y291bnRyeSA9IGdldENvdW50cnkoY291bnRyeSk7XHJcblxyXG5cdFx0aWYgKCFjb3VudHJ5KSByZXR1cm4gbnVsbDtcclxuXHJcblx0XHR2YXIgem9uZXMgPSBjb3VudHJ5LnpvbmVzLnNvcnQoKTtcclxuXHJcblx0XHRpZiAod2l0aF9vZmZzZXQpIHtcclxuXHRcdFx0cmV0dXJuIHpvbmVzLm1hcChmdW5jdGlvbiAoem9uZV9uYW1lKSB7XHJcblx0XHRcdFx0dmFyIHpvbmUgPSBnZXRab25lKHpvbmVfbmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdG5hbWU6IHpvbmVfbmFtZSxcclxuXHRcdFx0XHRcdG9mZnNldDogem9uZS51dGNPZmZzZXQobmV3IERhdGUoKSlcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gem9uZXM7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBsb2FkRGF0YSAoZGF0YSkge1xyXG5cdFx0YWRkWm9uZShkYXRhLnpvbmVzKTtcclxuXHRcdGFkZExpbmsoZGF0YS5saW5rcyk7XHJcblx0XHRhZGRDb3VudHJpZXMoZGF0YS5jb3VudHJpZXMpO1xyXG5cdFx0dHouZGF0YVZlcnNpb24gPSBkYXRhLnZlcnNpb247XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB6b25lRXhpc3RzIChuYW1lKSB7XHJcblx0XHRpZiAoIXpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yKSB7XHJcblx0XHRcdHpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRsb2dFcnJvcihcIm1vbWVudC50ei56b25lRXhpc3RzKCdcIiArIG5hbWUgKyBcIicpIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgIW1vbWVudC50ei56b25lKCdcIiArIG5hbWUgKyBcIicpXCIpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICEhZ2V0Wm9uZShuYW1lKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG5lZWRzT2Zmc2V0IChtKSB7XHJcblx0XHR2YXIgaXNVbml4VGltZXN0YW1wID0gKG0uX2YgPT09ICdYJyB8fCBtLl9mID09PSAneCcpO1xyXG5cdFx0cmV0dXJuICEhKG0uX2EgJiYgKG0uX3R6bSA9PT0gdW5kZWZpbmVkKSAmJiAhaXNVbml4VGltZXN0YW1wKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGxvZ0Vycm9yIChtZXNzYWdlKSB7XHJcblx0XHRpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRtb21lbnQudHogbmFtZXNwYWNlXHJcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHRmdW5jdGlvbiB0eiAoaW5wdXQpIHtcclxuXHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSksXHJcblx0XHRcdG5hbWUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLFxyXG5cdFx0XHRvdXQgID0gbW9tZW50LnV0Yy5hcHBseShudWxsLCBhcmdzKSxcclxuXHRcdFx0em9uZTtcclxuXHJcblx0XHRpZiAoIW1vbWVudC5pc01vbWVudChpbnB1dCkgJiYgbmVlZHNPZmZzZXQob3V0KSAmJiAoem9uZSA9IGdldFpvbmUobmFtZSkpKSB7XHJcblx0XHRcdG91dC5hZGQoem9uZS5wYXJzZShvdXQpLCAnbWludXRlcycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG91dC50eihuYW1lKTtcclxuXHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH1cclxuXHJcblx0dHoudmVyc2lvbiAgICAgID0gVkVSU0lPTjtcclxuXHR0ei5kYXRhVmVyc2lvbiAgPSAnJztcclxuXHR0ei5fem9uZXMgICAgICAgPSB6b25lcztcclxuXHR0ei5fbGlua3MgICAgICAgPSBsaW5rcztcclxuXHR0ei5fbmFtZXMgICAgICAgPSBuYW1lcztcclxuXHR0ei5fY291bnRyaWVzXHQ9IGNvdW50cmllcztcclxuXHR0ei5hZGQgICAgICAgICAgPSBhZGRab25lO1xyXG5cdHR6LmxpbmsgICAgICAgICA9IGFkZExpbms7XHJcblx0dHoubG9hZCAgICAgICAgID0gbG9hZERhdGE7XHJcblx0dHouem9uZSAgICAgICAgID0gZ2V0Wm9uZTtcclxuXHR0ei56b25lRXhpc3RzICAgPSB6b25lRXhpc3RzOyAvLyBkZXByZWNhdGVkIGluIDAuMS4wXHJcblx0dHouZ3Vlc3MgICAgICAgID0gZ3Vlc3M7XHJcblx0dHoubmFtZXMgICAgICAgID0gZ2V0TmFtZXM7XHJcblx0dHouWm9uZSAgICAgICAgID0gWm9uZTtcclxuXHR0ei51bnBhY2sgICAgICAgPSB1bnBhY2s7XHJcblx0dHoudW5wYWNrQmFzZTYwID0gdW5wYWNrQmFzZTYwO1xyXG5cdHR6Lm5lZWRzT2Zmc2V0ICA9IG5lZWRzT2Zmc2V0O1xyXG5cdHR6Lm1vdmVJbnZhbGlkRm9yd2FyZCAgID0gdHJ1ZTtcclxuXHR0ei5tb3ZlQW1iaWd1b3VzRm9yd2FyZCA9IGZhbHNlO1xyXG5cdHR6LmNvdW50cmllcyAgICA9IGdldENvdW50cnlOYW1lcztcclxuXHR0ei56b25lc0ZvckNvdW50cnkgPSB6b25lc0ZvckNvdW50cnk7XHJcblxyXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdEludGVyZmFjZSB3aXRoIE1vbWVudC5qc1xyXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblx0dmFyIGZuID0gbW9tZW50LmZuO1xyXG5cclxuXHRtb21lbnQudHogPSB0ejtcclxuXHJcblx0bW9tZW50LmRlZmF1bHRab25lID0gbnVsbDtcclxuXHJcblx0bW9tZW50LnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uIChtb20sIGtlZXBUaW1lKSB7XHJcblx0XHR2YXIgem9uZSA9IG1vbWVudC5kZWZhdWx0Wm9uZSxcclxuXHRcdFx0b2Zmc2V0O1xyXG5cclxuXHRcdGlmIChtb20uX3ogPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRpZiAoem9uZSAmJiBuZWVkc09mZnNldChtb20pICYmICFtb20uX2lzVVRDICYmIG1vbS5pc1ZhbGlkKCkpIHtcclxuXHRcdFx0XHRtb20uX2QgPSBtb21lbnQudXRjKG1vbS5fYSkuX2Q7XHJcblx0XHRcdFx0bW9tLnV0YygpLmFkZCh6b25lLnBhcnNlKG1vbSksICdtaW51dGVzJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0bW9tLl96ID0gem9uZTtcclxuXHRcdH1cclxuXHRcdGlmIChtb20uX3opIHtcclxuXHRcdFx0b2Zmc2V0ID0gbW9tLl96LnV0Y09mZnNldChtb20pO1xyXG5cdFx0XHRpZiAoTWF0aC5hYnMob2Zmc2V0KSA8IDE2KSB7XHJcblx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0IC8gNjA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKG1vbS51dGNPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHZhciB6ID0gbW9tLl96O1xyXG5cdFx0XHRcdG1vbS51dGNPZmZzZXQoLW9mZnNldCwga2VlcFRpbWUpO1xyXG5cdFx0XHRcdG1vbS5feiA9IHo7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bW9tLnpvbmUob2Zmc2V0LCBrZWVwVGltZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmbi50eiA9IGZ1bmN0aW9uIChuYW1lLCBrZWVwVGltZSkge1xyXG5cdFx0aWYgKG5hbWUpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGltZSB6b25lIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgZ290ICcgKyBuYW1lICsgJyBbJyArIHR5cGVvZiBuYW1lICsgJ10nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl96ID0gZ2V0Wm9uZShuYW1lKTtcclxuXHRcdFx0aWYgKHRoaXMuX3opIHtcclxuXHRcdFx0XHRtb21lbnQudXBkYXRlT2Zmc2V0KHRoaXMsIGtlZXBUaW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsb2dFcnJvcihcIk1vbWVudCBUaW1lem9uZSBoYXMgbm8gZGF0YSBmb3IgXCIgKyBuYW1lICsgXCIuIFNlZSBodHRwOi8vbW9tZW50anMuY29tL3RpbWV6b25lL2RvY3MvIy9kYXRhLWxvYWRpbmcvLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLl96KSB7IHJldHVybiB0aGlzLl96Lm5hbWU7IH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBhYmJyV3JhcCAob2xkKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodGhpcy5feikgeyByZXR1cm4gdGhpcy5fei5hYmJyKHRoaXMpOyB9XHJcblx0XHRcdHJldHVybiBvbGQuY2FsbCh0aGlzKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZXNldFpvbmVXcmFwIChvbGQpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMuX3ogPSBudWxsO1xyXG5cdFx0XHRyZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVzZXRab25lV3JhcDIgKG9sZCkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB0aGlzLl96ID0gbnVsbDtcclxuXHRcdFx0cmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGZuLnpvbmVOYW1lICA9IGFiYnJXcmFwKGZuLnpvbmVOYW1lKTtcclxuXHRmbi56b25lQWJiciAgPSBhYmJyV3JhcChmbi56b25lQWJicik7XHJcblx0Zm4udXRjICAgICAgID0gcmVzZXRab25lV3JhcChmbi51dGMpO1xyXG5cdGZuLmxvY2FsICAgICA9IHJlc2V0Wm9uZVdyYXAoZm4ubG9jYWwpO1xyXG5cdGZuLnV0Y09mZnNldCA9IHJlc2V0Wm9uZVdyYXAyKGZuLnV0Y09mZnNldCk7XHJcblxyXG5cdG1vbWVudC50ei5zZXREZWZhdWx0ID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA5KSkge1xyXG5cdFx0XHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lIHNldERlZmF1bHQoKSByZXF1aXJlcyBNb21lbnQuanMgPj0gMi45LjAuIFlvdSBhcmUgdXNpbmcgTW9tZW50LmpzICcgKyBtb21lbnQudmVyc2lvbiArICcuJyk7XHJcblx0XHR9XHJcblx0XHRtb21lbnQuZGVmYXVsdFpvbmUgPSBuYW1lID8gZ2V0Wm9uZShuYW1lKSA6IG51bGw7XHJcblx0XHRyZXR1cm4gbW9tZW50O1xyXG5cdH07XHJcblxyXG5cdC8vIENsb25pbmcgYSBtb21lbnQgc2hvdWxkIGluY2x1ZGUgdGhlIF96IHByb3BlcnR5LlxyXG5cdHZhciBtb21lbnRQcm9wZXJ0aWVzID0gbW9tZW50Lm1vbWVudFByb3BlcnRpZXM7XHJcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb21lbnRQcm9wZXJ0aWVzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG5cdFx0Ly8gbW9tZW50IDIuOC4xK1xyXG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfeicpO1xyXG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfYScpO1xyXG5cdH0gZWxzZSBpZiAobW9tZW50UHJvcGVydGllcykge1xyXG5cdFx0Ly8gbW9tZW50IDIuNy4wXHJcblx0XHRtb21lbnRQcm9wZXJ0aWVzLl96ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGxvYWREYXRhKHtcclxuXHRcdFwidmVyc2lvblwiOiBcIjIwMjViXCIsXHJcblx0XHRcInpvbmVzXCI6IFtcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxHTVR8MHwwfHw0OGU1XCIsXHJcblx0XHRcdFwiQWZyaWNhL05haXJvYml8RUFUfC0zMHwwfHw0N2U1XCIsXHJcblx0XHRcdFwiQWZyaWNhL0FsZ2llcnN8Q0VUfC0xMHwwfHwyNmU1XCIsXHJcblx0XHRcdFwiQWZyaWNhL0xhZ29zfFdBVHwtMTB8MHx8MTdlNlwiLFxyXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxDQVR8LTIwfDB8fDUxZTVcIixcclxuXHRcdFx0XCJBZnJpY2EvQ2Fpcm98RUVUIEVFU1R8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMHwyOU5XMCAxY0wwIDFjTjAgMWZ6MCAxYTEwIDFmejAgMWExMCAxZnowIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxY0wwIDFjTjAgMWZ6MHwxNWU2XCIsXHJcblx0XHRcdFwiQWZyaWNhL0Nhc2FibGFuY2F8KzAxICswMHwtMTAgMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDF8MjJzcTAgZ00wIDI2MDAgZTAwIDI2MDAgZ00wIDI2MDAgZTAwIDI4TTAgZTAwIDI2MDAgZ00wIDI2MDAgZTAwIDI4TTAgZTAwIDI2MDAgZ00wIDI2MDAgZTAwIDI2MDAgZ00wIDI2MDB8MzJlNVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xDRVQgQ0VTVHwtMTAgLTIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8MTFlNlwiLFxyXG5cdFx0XHRcIkFmcmljYS9Kb2hhbm5lc2J1cmd8U0FTVHwtMjB8MHx8ODRlNVwiLFxyXG5cdFx0XHRcIkFmcmljYS9KdWJhfEVBVCBDQVR8LTMwIC0yMHwwMXwyNG54MHxcIixcclxuXHRcdFx0XCJBZnJpY2EvVHJpcG9saXxFRVR8LTIwfDB8fDExZTVcIixcclxuXHRcdFx0XCJBbWVyaWNhL0FkYWt8SFNUIEhEVHxhMCA5MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJNMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDMyNlwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFLU1QgQUtEVHw5MCA4MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJMMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDMwZTRcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QVNUfDQwfDB8fDI5ZTVcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3wtMDN8MzB8MHx8MjBlNlwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQXN1bmNpb258LTAzIC0wNHwzMCA0MHwwMTAxMDEwMTAxMHwyMmhmMCAxaXAwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWlwMHwyOGU1XCIsXHJcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8RVNUfDUwfDB8fDE1ZTVcIixcclxuXHRcdFx0XCJBbWVyaWNhL01leGljb19DaXR5fENTVCBDRFR8NjAgNTB8MDEwMTAxMHwyMm1VMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDB8MjBlNlwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxDU1R8NjB8MHx8MjJlNVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3wtMDR8NDB8MHx8MjllNVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTGltYXwtMDV8NTB8MHx8MTFlNlwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfE1TVCBNRFR8NzAgNjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiSjAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHwyNmU1XCIsXHJcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfENTVCBDRFR8NjAgNTB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiSTAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHw5MmU1XCIsXHJcblx0XHRcdFwiQW1lcmljYS9DaGlodWFodWF8TVNUIE1EVCBDU1R8NzAgNjAgNjB8MDEwMTAxMnwyMm1WMCAxbGIwIDE0cDAgMW5YMCAxMUIwIDFuWDB8ODFlNFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2l1ZGFkX0p1YXJlenxNU1QgTURUIENTVHw3MCA2MCA2MHwwMTAxMDEyMDEwMTAxMDEwMTAxMDEwMTB8MjJiSjAgMXpiMCBSZDAgMXpiMCBPcDAgMXduMCBjbTAgRVAwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjB8XCIsXHJcblx0XHRcdFwiQW1lcmljYS9Db3loYWlxdWV8LTAzIC0wNHwzMCA0MHwwMTAxMDEwMTAxMHwyMm1QMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxMUIwIDFxTDAgMTFCMHxcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8TVNUfDcwfDB8fDQyZTVcIixcclxuXHRcdFx0XCJBbWVyaWNhL1doaXRlaG9yc2V8UFNUIFBEVCBNU1R8ODAgNzAgNzB8MDEyfDIyYkswIDF6OTB8MjNlM1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8RVNUIEVEVHw1MCA0MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJIMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDIxZTZcIixcclxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfFBTVCBQRFR8ODAgNzB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiSzAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHwxNWU2XCIsXHJcblx0XHRcdFwiQW1lcmljYS9IYWxpZmF4fEFTVCBBRFR8NDAgMzB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiRzAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHwzOWU0XCIsXHJcblx0XHRcdFwiQW1lcmljYS9Hb2R0aGFifC0wMyAtMDIgLTAxfDMwIDIwIDEwfDAxMDEwMTAxMjEyMTIxMjEyMTIxMjF8MjJrMTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDJzbzAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8MTdlM1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvSGF2YW5hfENTVCBDRFR8NTAgNDB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiRjAgMXpjMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBSYzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMCBPbzAgMXpjMHwyMWU1XCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYXphdGxhbnxNU1QgTURUfDcwIDYwfDAxMDEwMTB8MjJtVjAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwfDQ0ZTRcIixcclxuXHRcdFx0XCJBbWVyaWNhL01pcXVlbG9ufC0wMyAtMDJ8MzAgMjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiRjAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHw2MWUyXCIsXHJcblx0XHRcdFwiQW1lcmljYS9Ob3JvbmhhfC0wMnwyMHwwfHwzMGUyXCIsXHJcblx0XHRcdFwiQW1lcmljYS9PamluYWdhfE1TVCBNRFQgQ1NUIENEVHw3MCA2MCA2MCA1MHwwMTAxMDEyMzIzMjMyMzIzMjMyMzIzMnwyMmJKMCAxemIwIFJkMCAxemIwIE9wMCAxd24wIFJjMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDIzZTNcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRpYWdvfC0wMyAtMDR8MzAgNDB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtUDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTFCMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDAgMTFCMHw2MmU1XCIsXHJcblx0XHRcdFwiQW1lcmljYS9TY29yZXNieXN1bmR8LTAxICswMCAtMDJ8MTAgMCAyMHwwMTAxMDEwMTAyMDIwMjAyMDIwMjAyfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDJwQTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDQ1MlwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU3RfSm9obnN8TlNUIE5EVHwzdSAydXwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJGdSAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDExZTRcIixcclxuXHRcdFx0XCJBbnRhcmN0aWNhL0Nhc2V5fCsxMSArMDh8LWIwIC04MHwwMTAxMDEwMXwyMmJzMCAxbzAxIDE0a1ggMWxmMSAxNGtYIDFsZjEgMTNiWHwxMFwiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3wrMDd8LTcwfDB8fDE1ZTZcIixcclxuXHRcdFx0XCJBc2lhL1ZsYWRpdm9zdG9rfCsxMHwtYTB8MHx8NjBlNFwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QUVEVCBBRVNUfC1iMCAtYTB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtRTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTB8NDBlNVwiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8KzA1fC01MHwwfHwyM2U1XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9BdWNrbGFuZHxOWkRUIE5aU1R8LWQwIC1jMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMm1DMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFpbzAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxY00wIDFmQTAgMWEwMHwxNGU1XCIsXHJcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfCswM3wtMzB8MHx8MTNlNlwiLFxyXG5cdFx0XHRcIkFudGFyY3RpY2EvVHJvbGx8KzAwICswMnwwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmsxMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDQwXCIsXHJcblx0XHRcdFwiQW50YXJjdGljYS9Wb3N0b2t8KzA3ICswNXwtNzAgLTUwfDAxfDJibnYwfDI1XCIsXHJcblx0XHRcdFwiQXNpYS9BbG1hdHl8KzA2ICswNXwtNjAgLTUwfDAxfDJiUjYwfDE1ZTVcIixcclxuXHRcdFx0XCJBc2lhL0FtbWFufEVFVCBFRVNUICswM3wtMjAgLTMwIC0zMHwwMTAxMDEyfDIyamEwIDFxTTAgV00wIDFxTTAgTEEwIDFDMDB8MjVlNVwiLFxyXG5cdFx0XHRcIkFzaWEvS2FtY2hhdGthfCsxMnwtYzB8MHx8MThlNFwiLFxyXG5cdFx0XHRcIkFzaWEvRHViYWl8KzA0fC00MHwwfHwzOWU1XCIsXHJcblx0XHRcdFwiQXNpYS9CZWlydXR8RUVUIEVFU1R8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmpXMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFxTDAgV04wIDFxTDAgV04wIDFxTDAgMTFCMCAxblgwfDIyZTVcIixcclxuXHRcdFx0XCJBc2lhL0RoYWthfCswNnwtNjB8MHx8MTZlNlwiLFxyXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfCswOHwtODB8MHx8NzFlNVwiLFxyXG5cdFx0XHRcIkFzaWEvS29sa2F0YXxJU1R8LTV1fDB8fDE1ZTZcIixcclxuXHRcdFx0XCJBc2lhL0NoaXRhfCswOXwtOTB8MHx8MzNlNFwiLFxyXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8Q1NUfC04MHwwfHwyM2U2XCIsXHJcblx0XHRcdFwiQXNpYS9Db2xvbWJvfCswNTMwfC01dXwwfHwyMmU1XCIsXHJcblx0XHRcdFwiQXNpYS9EYW1hc2N1c3xFRVQgRUVTVCArMDN8LTIwIC0zMCAtMzB8MDEwMTAxMnwyMmphMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwfDI2ZTVcIixcclxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEVFVCBFRVNUfC0yMCAtMzB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJrMTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMHwzNWU1XCIsXHJcblx0XHRcdFwiQXNpYS9HYXphfEVFVCBFRVNUfC0yMCAtMzB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJqeTAgMW8wMCAxMUEwIDFxbzAgWEEwIDFxcDAgMWNOMCAxY0wwIDFhMTAgMWZ6MCAxN2QwIDFpbjAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDB8MThlNVwiLFxyXG5cdFx0XHRcIkFzaWEvSG9uZ19Lb25nfEhLVHwtODB8MHx8NzNlNVwiLFxyXG5cdFx0XHRcIkFzaWEvSmFrYXJ0YXxXSUJ8LTcwfDB8fDMxZTZcIixcclxuXHRcdFx0XCJBc2lhL0pheWFwdXJhfFdJVHwtOTB8MHx8MjZlNFwiLFxyXG5cdFx0XHRcIkFzaWEvSmVydXNhbGVtfElTVCBJRFR8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmpjMCAxb0wwIDEwTjAgMXJ6MCBXMTAgMXJ6MCBXMTAgMXJ6MCAxME4wIDFvTDAgMTBOMCAxb0wwIDEwTjAgMW9MMCAxME4wIDFyejAgVzEwIDFyejAgVzEwIDFyejAgMTBOMCAxb0wwfDgxZTRcIixcclxuXHRcdFx0XCJBc2lhL0thYnVsfCswNDMwfC00dXwwfHw0NmU1XCIsXHJcblx0XHRcdFwiQXNpYS9LYXJhY2hpfFBLVHwtNTB8MHx8MjRlNlwiLFxyXG5cdFx0XHRcIkFzaWEvS2F0aG1hbmR1fCswNTQ1fC01SnwwfHwxMmU1XCIsXHJcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnwrMTF8LWIwfDB8fDU4ZTRcIixcclxuXHRcdFx0XCJBc2lhL01ha2Fzc2FyfFdJVEF8LTgwfDB8fDE1ZTVcIixcclxuXHRcdFx0XCJBc2lhL01hbmlsYXxQU1R8LTgwfDB8fDI0ZTZcIixcclxuXHRcdFx0XCJBc2lhL1Nlb3VsfEtTVHwtOTB8MHx8MjNlNlwiLFxyXG5cdFx0XHRcIkFzaWEvUmFuZ29vbnwrMDYzMHwtNnV8MHx8NDhlNVwiLFxyXG5cdFx0XHRcIkFzaWEvVGVocmFufCswMzMwICswNDMwfC0zdSAtNHV8MDEwMTAxMHwyMmdJdSAxZHowIDFjTjAgMWR6MCAxY3AwIDFkejB8MTRlNlwiLFxyXG5cdFx0XHRcIkFzaWEvVG9reW98SlNUfC05MHwwfHwzOGU2XCIsXHJcblx0XHRcdFwiQXRsYW50aWMvQXpvcmVzfC0wMSArMDB8MTAgMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmsxMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDI1ZTRcIixcclxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufFdFVCBXRVNUfDAgLTEwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8MjdlNVwiLFxyXG5cdFx0XHRcIkF0bGFudGljL0NhcGVfVmVyZGV8LTAxfDEwfDB8fDUwZTRcIixcclxuXHRcdFx0XCJBdXN0cmFsaWEvQWRlbGFpZGV8QUNEVCBBQ1NUfC1hdSAtOXV8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtRXUgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTB8MTFlNVwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9CcmlzYmFuZXxBRVNUfC1hMHwwfHwyMGU1XCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL0RhcndpbnxBQ1NUfC05dXwwfHwxMmU0XCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL0V1Y2xhfCswODQ1fC04SnwwfHwzNjhcIixcclxuXHRcdFx0XCJBdXN0cmFsaWEvTG9yZF9Ib3dlfCsxMSArMTAzMHwtYjAgLWF1fDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIybUQwIDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWZ6dSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFmQXUgMWNMdSAxY011fDM0N1wiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9QZXJ0aHxBV1NUfC04MHwwfHwxOGU1XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9FYXN0ZXJ8LTA1IC0wNnw1MCA2MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMm1QMCAxMUIwIDFuWDAgMTFCMCAxblgwIDE0cDAgMWxiMCAxMUIwIDFxTDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCAxMUIwfDMwZTJcIixcclxuXHRcdFx0XCJFdXJvcGUvRHVibGlufEdNVCBJU1R8MCAtMTB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJrMTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMHwxMmU1XCIsXHJcblx0XHRcdFwiRXRjL0dNVC0xfCswMXwtMTB8MHx8XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8KzEzfC1kMHwwfHw3NWUzXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9LaXJpdGltYXRpfCsxNHwtZTB8MHx8NTFlMlwiLFxyXG5cdFx0XHRcIkV0Yy9HTVQtMnwrMDJ8LTIwfDB8fFwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvVGFoaXRpfC0xMHxhMHwwfHwxOGU0XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9OaXVlfC0xMXxiMHwwfHwxMmUyXCIsXHJcblx0XHRcdFwiRXRjL0dNVCsxMnwtMTJ8YzB8MHx8XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9HYWxhcGFnb3N8LTA2fDYwfDB8fDI1ZTNcIixcclxuXHRcdFx0XCJFdGMvR01UKzd8LTA3fDcwfDB8fFwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvUGl0Y2Fpcm58LTA4fDgwfDB8fDU2XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9HYW1iaWVyfC0wOXw5MHwwfHwxMjVcIixcclxuXHRcdFx0XCJFdGMvVVRDfFVUQ3wwfDB8fFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258R01UIEJTVHwwIC0xMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmsxMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDEwZTZcIixcclxuXHRcdFx0XCJFdXJvcGUvQ2hpc2luYXV8RUVUIEVFU1R8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmswMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDY3ZTRcIixcclxuXHRcdFx0XCJFdXJvcGUvTW9zY293fE1TS3wtMzB8MHx8MTZlNlwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Wb2xnb2dyYWR8KzA0IE1TS3wtNDAgLTMwfDAxfDI0OWEwfDEwZTVcIixcclxuXHRcdFx0XCJQYWNpZmljL0hvbm9sdWx1fEhTVHxhMHwwfHwzN2U0XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9DaGF0aGFtfCsxMzQ1ICsxMjQ1fC1kSiAtY0p8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtQzAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxaW8wIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDB8NjAwXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9BcGlhfCsxNCArMTN8LWUwIC1kMHwwMTAxfDIybUMwIDFhMDAgMWZBMHwzN2UzXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9GaWppfCsxMyArMTJ8LWQwIC1jMHwwMTAxfDIxTjIwIDJoYzAgYmMwfDg4ZTRcIixcclxuXHRcdFx0XCJQYWNpZmljL0d1YW18Q2hTVHwtYTB8MHx8MTdlNFwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvTWFycXVlc2FzfC0wOTMwfDl1fDB8fDg2ZTJcIixcclxuXHRcdFx0XCJQYWNpZmljL1BhZ29fUGFnb3xTU1R8YjB8MHx8MzdlMlwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvTm9yZm9sa3wrMTIgKzExfC1jMCAtYjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtRDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTB8MjVlNFwiXHJcblx0XHRdLFxyXG5cdFx0XCJsaW5rc1wiOiBbXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0FjY3JhXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0JhbWFrb1wiLFxyXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9CYW5qdWxcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvQmlzc2F1XCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0NvbmFrcnlcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvRGFrYXJcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvRnJlZXRvd25cIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvTG9tZVwiLFxyXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9Nb25yb3ZpYVwiLFxyXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9Ob3Vha2Nob3R0XCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL091YWdhZG91Z291XCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL1Nhb19Ub21lXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL1RpbWJ1a3R1XCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QW1lcmljYS9EYW5tYXJrc2hhdm5cIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBdGxhbnRpYy9SZXlramF2aWtcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBdGxhbnRpYy9TdF9IZWxlbmFcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxFdGMvR01UXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58RXRjL0dNVCswXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58RXRjL0dNVC0wXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58RXRjL0dNVDBcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxFdGMvR3JlZW53aWNoXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58R01UXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58R01UKzBcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxHTVQtMFwiLFxyXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEdNVDBcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxHcmVlbndpY2hcIixcclxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxJY2VsYW5kXCIsXHJcblx0XHRcdFwiQWZyaWNhL0FsZ2llcnN8QWZyaWNhL1R1bmlzXCIsXHJcblx0XHRcdFwiQWZyaWNhL0NhaXJvfEVneXB0XCIsXHJcblx0XHRcdFwiQWZyaWNhL0Nhc2FibGFuY2F8QWZyaWNhL0VsX0FhaXVuXCIsXHJcblx0XHRcdFwiQWZyaWNhL0pvaGFubmVzYnVyZ3xBZnJpY2EvTWFzZXJ1XCIsXHJcblx0XHRcdFwiQWZyaWNhL0pvaGFubmVzYnVyZ3xBZnJpY2EvTWJhYmFuZVwiLFxyXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvQmxhbnR5cmVcIixcclxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL0J1anVtYnVyYVwiLFxyXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvR2Fib3JvbmVcIixcclxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL0hhcmFyZVwiLFxyXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvS2lnYWxpXCIsXHJcblx0XHRcdFwiQWZyaWNhL0toYXJ0b3VtfEFmcmljYS9MdWJ1bWJhc2hpXCIsXHJcblx0XHRcdFwiQWZyaWNhL0toYXJ0b3VtfEFmcmljYS9MdXNha2FcIixcclxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL01hcHV0b1wiLFxyXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvV2luZGhvZWtcIixcclxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL0Jhbmd1aVwiLFxyXG5cdFx0XHRcIkFmcmljYS9MYWdvc3xBZnJpY2EvQnJhenphdmlsbGVcIixcclxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL0RvdWFsYVwiLFxyXG5cdFx0XHRcIkFmcmljYS9MYWdvc3xBZnJpY2EvS2luc2hhc2FcIixcclxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL0xpYnJldmlsbGVcIixcclxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL0x1YW5kYVwiLFxyXG5cdFx0XHRcIkFmcmljYS9MYWdvc3xBZnJpY2EvTWFsYWJvXCIsXHJcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9OZGphbWVuYVwiLFxyXG5cdFx0XHRcIkFmcmljYS9MYWdvc3xBZnJpY2EvTmlhbWV5XCIsXHJcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9Qb3J0by1Ob3ZvXCIsXHJcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL0FkZGlzX0FiYWJhXCIsXHJcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL0FzbWFyYVwiLFxyXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEFmcmljYS9Bc21lcmFcIixcclxuXHRcdFx0XCJBZnJpY2EvTmFpcm9iaXxBZnJpY2EvRGFyX2VzX1NhbGFhbVwiLFxyXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEFmcmljYS9Eamlib3V0aVwiLFxyXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEFmcmljYS9LYW1wYWxhXCIsXHJcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL01vZ2FkaXNodVwiLFxyXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEluZGlhbi9BbnRhbmFuYXJpdm9cIixcclxuXHRcdFx0XCJBZnJpY2EvTmFpcm9iaXxJbmRpYW4vQ29tb3JvXCIsXHJcblx0XHRcdFwiQWZyaWNhL05haXJvYml8SW5kaWFuL01heW90dGVcIixcclxuXHRcdFx0XCJBZnJpY2EvVHJpcG9saXxFdXJvcGUvS2FsaW5pbmdyYWRcIixcclxuXHRcdFx0XCJBZnJpY2EvVHJpcG9saXxMaWJ5YVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQWRha3xBbWVyaWNhL0F0a2FcIixcclxuXHRcdFx0XCJBbWVyaWNhL0FkYWt8VVMvQWxldXRpYW5cIixcclxuXHRcdFx0XCJBbWVyaWNhL0FuY2hvcmFnZXxBbWVyaWNhL0p1bmVhdVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFtZXJpY2EvTWV0bGFrYXRsYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFtZXJpY2EvTm9tZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFtZXJpY2EvU2l0a2FcIixcclxuXHRcdFx0XCJBbWVyaWNhL0FuY2hvcmFnZXxBbWVyaWNhL1lha3V0YXRcIixcclxuXHRcdFx0XCJBbWVyaWNhL0FuY2hvcmFnZXxVUy9BbGFza2FcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9Cb2FfVmlzdGFcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9DYW1wb19HcmFuZGVcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9DdWlhYmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9HdXlhbmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9MYV9QYXpcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9NYW5hdXNcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9Qb3J0b19WZWxob1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xCcmF6aWwvV2VzdFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xFdGMvR01UKzRcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9JbmRpYW5hL0tub3hcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9JbmRpYW5hL1RlbGxfQ2l0eVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL0tub3hfSU5cIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9NYXRhbW9yb3NcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9NZW5vbWluZWVcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9Ob3J0aF9EYWtvdGEvQmV1bGFoXCIsXHJcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfEFtZXJpY2EvTm9ydGhfRGFrb3RhL0NlbnRlclwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL05vcnRoX0Rha290YS9OZXdfU2FsZW1cIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9SYWlueV9SaXZlclwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL1Jhbmtpbl9JbmxldFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL1Jlc29sdXRlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfEFtZXJpY2EvV2lubmlwZWdcIixcclxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298Q1NUNkNEVFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xDYW5hZGEvQ2VudHJhbFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xVUy9DZW50cmFsXCIsXHJcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfFVTL0luZGlhbmEtU3RhcmtlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8QW1lcmljYS9Cb2lzZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfEFtZXJpY2EvQ2FtYnJpZGdlX0JheVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfEFtZXJpY2EvRWRtb250b25cIixcclxuXHRcdFx0XCJBbWVyaWNhL0RlbnZlcnxBbWVyaWNhL0ludXZpa1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfEFtZXJpY2EvU2hpcHJvY2tcIixcclxuXHRcdFx0XCJBbWVyaWNhL0RlbnZlcnxBbWVyaWNhL1llbGxvd2tuaWZlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8Q2FuYWRhL01vdW50YWluXCIsXHJcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8TVNUN01EVFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfE5hdmFqb1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfFVTL01vdW50YWluXCIsXHJcblx0XHRcdFwiQW1lcmljYS9Hb2R0aGFifEFtZXJpY2EvTnV1a1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBbWVyaWNhL0dsYWNlX0JheVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBbWVyaWNhL0dvb3NlX0JheVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBbWVyaWNhL01vbmN0b25cIixcclxuXHRcdFx0XCJBbWVyaWNhL0hhbGlmYXh8QW1lcmljYS9UaHVsZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBdGxhbnRpYy9CZXJtdWRhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9IYWxpZmF4fENhbmFkYS9BdGxhbnRpY1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvSGF2YW5hfEN1YmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL0xpbWF8QW1lcmljYS9Cb2dvdGFcIixcclxuXHRcdFx0XCJBbWVyaWNhL0xpbWF8QW1lcmljYS9FaXJ1bmVwZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTGltYXxBbWVyaWNhL0d1YXlhcXVpbFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTGltYXxBbWVyaWNhL1BvcnRvX0FjcmVcIixcclxuXHRcdFx0XCJBbWVyaWNhL0xpbWF8QW1lcmljYS9SaW9fQnJhbmNvXCIsXHJcblx0XHRcdFwiQW1lcmljYS9MaW1hfEJyYXppbC9BY3JlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9MaW1hfEV0Yy9HTVQrNVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8QW1lcmljYS9FbnNlbmFkYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8QW1lcmljYS9TYW50YV9Jc2FiZWxcIixcclxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfEFtZXJpY2EvVGlqdWFuYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8QW1lcmljYS9WYW5jb3V2ZXJcIixcclxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfENhbmFkYS9QYWNpZmljXCIsXHJcblx0XHRcdFwiQW1lcmljYS9Mb3NfQW5nZWxlc3xNZXhpY28vQmFqYU5vcnRlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9Mb3NfQW5nZWxlc3xQU1Q4UERUXCIsXHJcblx0XHRcdFwiQW1lcmljYS9Mb3NfQW5nZWxlc3xVUy9QYWNpZmljXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvQmVsaXplXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvQ29zdGFfUmljYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxBbWVyaWNhL0VsX1NhbHZhZG9yXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvR3VhdGVtYWxhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvUmVnaW5hXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvU3dpZnRfQ3VycmVudFwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxBbWVyaWNhL1RlZ3VjaWdhbHBhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfENhbmFkYS9TYXNrYXRjaGV3YW5cIixcclxuXHRcdFx0XCJBbWVyaWNhL01hemF0bGFufE1leGljby9CYWphU3VyXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NZXhpY29fQ2l0eXxBbWVyaWNhL0JhaGlhX0JhbmRlcmFzXCIsXHJcblx0XHRcdFwiQW1lcmljYS9NZXhpY29fQ2l0eXxBbWVyaWNhL01lcmlkYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTWV4aWNvX0NpdHl8QW1lcmljYS9Nb250ZXJyZXlcIixcclxuXHRcdFx0XCJBbWVyaWNhL01leGljb19DaXR5fE1leGljby9HZW5lcmFsXCIsXHJcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0RldHJvaXRcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvRm9ydF9XYXluZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9HcmFuZF9UdXJrXCIsXHJcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0luZGlhbmEvSW5kaWFuYXBvbGlzXCIsXHJcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0luZGlhbmEvTWFyZW5nb1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9JbmRpYW5hL1BldGVyc2J1cmdcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvSW5kaWFuYS9WZXZheVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9JbmRpYW5hL1ZpbmNlbm5lc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9JbmRpYW5hL1dpbmFtYWNcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvSW5kaWFuYXBvbGlzXCIsXHJcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0lxYWx1aXRcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvS2VudHVja3kvTG91aXN2aWxsZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9LZW50dWNreS9Nb250aWNlbGxvXCIsXHJcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0xvdWlzdmlsbGVcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvTW9udHJlYWxcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvTmFzc2F1XCIsXHJcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL05pcGlnb25cIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvUGFuZ25pcnR1bmdcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvUG9ydC1hdS1QcmluY2VcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvVGh1bmRlcl9CYXlcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvVG9yb250b1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8Q2FuYWRhL0Vhc3Rlcm5cIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEVTVDVFRFRcIixcclxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfFVTL0Vhc3QtSW5kaWFuYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8VVMvRWFzdGVyblwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8VVMvTWljaGlnYW5cIixcclxuXHRcdFx0XCJBbWVyaWNhL05vcm9uaGF8QXRsYW50aWMvU291dGhfR2VvcmdpYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvTm9yb25oYXxCcmF6aWwvRGVOb3JvbmhhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9Ob3JvbmhhfEV0Yy9HTVQrMlwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvUGFuYW1hfEFtZXJpY2EvQXRpa29rYW5cIixcclxuXHRcdFx0XCJBbWVyaWNhL1BhbmFtYXxBbWVyaWNhL0NhbmN1blwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvUGFuYW1hfEFtZXJpY2EvQ2F5bWFuXCIsXHJcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8QW1lcmljYS9Db3JhbF9IYXJib3VyXCIsXHJcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8QW1lcmljYS9KYW1haWNhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8RVNUXCIsXHJcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8SmFtYWljYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvUGhvZW5peHxBbWVyaWNhL0NyZXN0b25cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8QW1lcmljYS9EYXdzb25fQ3JlZWtcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8QW1lcmljYS9Gb3J0X05lbHNvblwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvUGhvZW5peHxBbWVyaWNhL0hlcm1vc2lsbG9cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8TVNUXCIsXHJcblx0XHRcdFwiQW1lcmljYS9QaG9lbml4fFVTL0FyaXpvbmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRpYWdvfENoaWxlL0NvbnRpbmVudGFsXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvQW5ndWlsbGFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9BbnRpZ3VhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvQXJ1YmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9CYXJiYWRvc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0JsYW5jLVNhYmxvblwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0N1cmFjYW9cIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9Eb21pbmljYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0dyZW5hZGFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9HdWFkZWxvdXBlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvS3JhbGVuZGlqa1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0xvd2VyX1ByaW5jZXNcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9NYXJpZ290XCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvTWFydGluaXF1ZVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL01vbnRzZXJyYXRcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9Qb3J0X29mX1NwYWluXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvUHVlcnRvX1JpY29cIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9TdF9CYXJ0aGVsZW15XCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvU3RfS2l0dHNcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9TdF9MdWNpYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL1N0X1Rob21hc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL1N0X1ZpbmNlbnRcIixcclxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9Ub3J0b2xhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvVmlyZ2luXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9BcmFndWFpbmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9CdWVub3NfQWlyZXNcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9DYXRhbWFyY2FcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9Db21vZFJpdmFkYXZpYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL0NvcmRvYmFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9KdWp1eVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL0xhX1Jpb2phXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9BcmdlbnRpbmEvTWVuZG96YVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL1Jpb19HYWxsZWdvc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL1NhbHRhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9BcmdlbnRpbmEvU2FuX0p1YW5cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9TYW5fTHVpc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL1R1Y3VtYW5cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9Vc2h1YWlhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9CYWhpYVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQmVsZW1cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0J1ZW5vc19BaXJlc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQ2F0YW1hcmNhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9DYXllbm5lXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9Db3Jkb2JhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9Gb3J0YWxlemFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0p1anV5XCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9NYWNlaW9cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL01lbmRvemFcIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL01vbnRldmlkZW9cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL1BhcmFtYXJpYm9cIixcclxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL1B1bnRhX0FyZW5hc1wiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvUmVjaWZlXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9Sb3NhcmlvXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9TYW50YXJlbVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFudGFyY3RpY2EvUGFsbWVyXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW50YXJjdGljYS9Sb3RoZXJhXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QXRsYW50aWMvU3RhbmxleVwiLFxyXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEJyYXppbC9FYXN0XCIsXHJcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98RXRjL0dNVCszXCIsXHJcblx0XHRcdFwiQW1lcmljYS9TdF9Kb2huc3xDYW5hZGEvTmV3Zm91bmRsYW5kXCIsXHJcblx0XHRcdFwiQW1lcmljYS9XaGl0ZWhvcnNlfEFtZXJpY2EvRGF3c29uXCIsXHJcblx0XHRcdFwiQW1lcmljYS9XaGl0ZWhvcnNlfENhbmFkYS9ZdWtvblwiLFxyXG5cdFx0XHRcIkFzaWEvQWxtYXR5fEFzaWEvUW9zdGFuYXlcIixcclxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QW50YXJjdGljYS9EYXZpc1wiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL0Jhcm5hdWxcIixcclxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9Ib19DaGlfTWluaFwiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL0hvdmRcIixcclxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9LcmFzbm95YXJza1wiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL05vdm9rdXpuZXRza1wiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL05vdm9zaWJpcnNrXCIsXHJcblx0XHRcdFwiQXNpYS9CYW5na29rfEFzaWEvUGhub21fUGVuaFwiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL1NhaWdvblwiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL1RvbXNrXCIsXHJcblx0XHRcdFwiQXNpYS9CYW5na29rfEFzaWEvVmllbnRpYW5lXCIsXHJcblx0XHRcdFwiQXNpYS9CYW5na29rfEV0Yy9HTVQtN1wiLFxyXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xJbmRpYW4vQ2hyaXN0bWFzXCIsXHJcblx0XHRcdFwiQXNpYS9DaGl0YXxBc2lhL0RpbGlcIixcclxuXHRcdFx0XCJBc2lhL0NoaXRhfEFzaWEvS2hhbmR5Z2FcIixcclxuXHRcdFx0XCJBc2lhL0NoaXRhfEFzaWEvWWFrdXRza1wiLFxyXG5cdFx0XHRcIkFzaWEvQ2hpdGF8RXRjL0dNVC05XCIsXHJcblx0XHRcdFwiQXNpYS9DaGl0YXxQYWNpZmljL1BhbGF1XCIsXHJcblx0XHRcdFwiQXNpYS9EaGFrYXxBc2lhL0Jpc2hrZWtcIixcclxuXHRcdFx0XCJBc2lhL0RoYWthfEFzaWEvRGFjY2FcIixcclxuXHRcdFx0XCJBc2lhL0RoYWthfEFzaWEvS2FzaGdhclwiLFxyXG5cdFx0XHRcIkFzaWEvRGhha2F8QXNpYS9PbXNrXCIsXHJcblx0XHRcdFwiQXNpYS9EaGFrYXxBc2lhL1RoaW1idVwiLFxyXG5cdFx0XHRcIkFzaWEvRGhha2F8QXNpYS9UaGltcGh1XCIsXHJcblx0XHRcdFwiQXNpYS9EaGFrYXxBc2lhL1VydW1xaVwiLFxyXG5cdFx0XHRcIkFzaWEvRGhha2F8RXRjL0dNVC02XCIsXHJcblx0XHRcdFwiQXNpYS9EaGFrYXxJbmRpYW4vQ2hhZ29zXCIsXHJcblx0XHRcdFwiQXNpYS9EdWJhaXxBc2lhL0Jha3VcIixcclxuXHRcdFx0XCJBc2lhL0R1YmFpfEFzaWEvTXVzY2F0XCIsXHJcblx0XHRcdFwiQXNpYS9EdWJhaXxBc2lhL1RiaWxpc2lcIixcclxuXHRcdFx0XCJBc2lhL0R1YmFpfEFzaWEvWWVyZXZhblwiLFxyXG5cdFx0XHRcIkFzaWEvRHViYWl8RXRjL0dNVC00XCIsXHJcblx0XHRcdFwiQXNpYS9EdWJhaXxFdXJvcGUvQXN0cmFraGFuXCIsXHJcblx0XHRcdFwiQXNpYS9EdWJhaXxFdXJvcGUvU2FtYXJhXCIsXHJcblx0XHRcdFwiQXNpYS9EdWJhaXxFdXJvcGUvU2FyYXRvdlwiLFxyXG5cdFx0XHRcIkFzaWEvRHViYWl8RXVyb3BlL1VseWFub3Zza1wiLFxyXG5cdFx0XHRcIkFzaWEvRHViYWl8SW5kaWFuL01haGVcIixcclxuXHRcdFx0XCJBc2lhL0R1YmFpfEluZGlhbi9NYXVyaXRpdXNcIixcclxuXHRcdFx0XCJBc2lhL0R1YmFpfEluZGlhbi9SZXVuaW9uXCIsXHJcblx0XHRcdFwiQXNpYS9HYXphfEFzaWEvSGVicm9uXCIsXHJcblx0XHRcdFwiQXNpYS9Ib25nX0tvbmd8SG9uZ2tvbmdcIixcclxuXHRcdFx0XCJBc2lhL0pha2FydGF8QXNpYS9Qb250aWFuYWtcIixcclxuXHRcdFx0XCJBc2lhL0plcnVzYWxlbXxBc2lhL1RlbF9Bdml2XCIsXHJcblx0XHRcdFwiQXNpYS9KZXJ1c2FsZW18SXNyYWVsXCIsXHJcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8QXNpYS9BbmFkeXJcIixcclxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxFdGMvR01ULTEyXCIsXHJcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8S3dhamFsZWluXCIsXHJcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8UGFjaWZpYy9GdW5hZnV0aVwiLFxyXG5cdFx0XHRcIkFzaWEvS2FtY2hhdGthfFBhY2lmaWMvS3dhamFsZWluXCIsXHJcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8UGFjaWZpYy9NYWp1cm9cIixcclxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL05hdXJ1XCIsXHJcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8UGFjaWZpYy9UYXJhd2FcIixcclxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL1dha2VcIixcclxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL1dhbGxpc1wiLFxyXG5cdFx0XHRcIkFzaWEvS2F0aG1hbmR1fEFzaWEvS2F0bWFuZHVcIixcclxuXHRcdFx0XCJBc2lhL0tvbGthdGF8QXNpYS9DYWxjdXR0YVwiLFxyXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfEFzaWEvQnJ1bmVpXCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9DaG9pYmFsc2FuXCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9Jcmt1dHNrXCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9LdWNoaW5nXCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9TaW5nYXBvcmVcIixcclxuXHRcdFx0XCJBc2lhL0t1YWxhX0x1bXB1cnxBc2lhL1VsYWFuYmFhdGFyXCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9VbGFuX0JhdG9yXCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8RXRjL0dNVC04XCIsXHJcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8U2luZ2Fwb3JlXCIsXHJcblx0XHRcdFwiQXNpYS9NYWthc3NhcnxBc2lhL1VqdW5nX1BhbmRhbmdcIixcclxuXHRcdFx0XCJBc2lhL1Jhbmdvb258QXNpYS9ZYW5nb25cIixcclxuXHRcdFx0XCJBc2lhL1Jhbmdvb258SW5kaWFuL0NvY29zXCIsXHJcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxBc2lhL01hZ2FkYW5cIixcclxuXHRcdFx0XCJBc2lhL1Nha2hhbGlufEFzaWEvU3JlZG5la29seW1za1wiLFxyXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58RXRjL0dNVC0xMVwiLFxyXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58UGFjaWZpYy9Cb3VnYWludmlsbGVcIixcclxuXHRcdFx0XCJBc2lhL1Nha2hhbGlufFBhY2lmaWMvRWZhdGVcIixcclxuXHRcdFx0XCJBc2lhL1Nha2hhbGlufFBhY2lmaWMvR3VhZGFsY2FuYWxcIixcclxuXHRcdFx0XCJBc2lhL1Nha2hhbGlufFBhY2lmaWMvS29zcmFlXCIsXHJcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxQYWNpZmljL05vdW1lYVwiLFxyXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58UGFjaWZpYy9Qb2hucGVpXCIsXHJcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxQYWNpZmljL1BvbmFwZVwiLFxyXG5cdFx0XHRcIkFzaWEvU2VvdWx8QXNpYS9QeW9uZ3lhbmdcIixcclxuXHRcdFx0XCJBc2lhL1Nlb3VsfFJPS1wiLFxyXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8QXNpYS9DaG9uZ3FpbmdcIixcclxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfEFzaWEvQ2h1bmdraW5nXCIsXHJcblx0XHRcdFwiQXNpYS9TaGFuZ2hhaXxBc2lhL0hhcmJpblwiLFxyXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8QXNpYS9NYWNhb1wiLFxyXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8QXNpYS9NYWNhdVwiLFxyXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8QXNpYS9UYWlwZWlcIixcclxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfFBSQ1wiLFxyXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8Uk9DXCIsXHJcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxBbnRhcmN0aWNhL01hd3NvblwiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9BcXRhdVwiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9BcXRvYmVcIixcclxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFzaWEvQXNoZ2FiYXRcIixcclxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFzaWEvQXNoa2hhYmFkXCIsXHJcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxBc2lhL0F0eXJhdVwiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9EdXNoYW5iZVwiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9PcmFsXCIsXHJcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxBc2lhL1F5enlsb3JkYVwiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9TYW1hcmthbmRcIixcclxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFzaWEvWWVrYXRlcmluYnVyZ1wiLFxyXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8RXRjL0dNVC01XCIsXHJcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxJbmRpYW4vS2VyZ3VlbGVuXCIsXHJcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxJbmRpYW4vTWFsZGl2ZXNcIixcclxuXHRcdFx0XCJBc2lhL1RlaHJhbnxJcmFuXCIsXHJcblx0XHRcdFwiQXNpYS9Ub2t5b3xKYXBhblwiLFxyXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8QW50YXJjdGljYS9EdW1vbnREVXJ2aWxsZVwiLFxyXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8QXNpYS9Vc3QtTmVyYVwiLFxyXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8RXRjL0dNVC0xMFwiLFxyXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8UGFjaWZpYy9DaHV1a1wiLFxyXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8UGFjaWZpYy9Qb3J0X01vcmVzYnlcIixcclxuXHRcdFx0XCJBc2lhL1ZsYWRpdm9zdG9rfFBhY2lmaWMvVHJ1a1wiLFxyXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8UGFjaWZpYy9ZYXBcIixcclxuXHRcdFx0XCJBdGxhbnRpYy9DYXBlX1ZlcmRlfEV0Yy9HTVQrMVwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9BZGVsYWlkZXxBdXN0cmFsaWEvQnJva2VuX0hpbGxcIixcclxuXHRcdFx0XCJBdXN0cmFsaWEvQWRlbGFpZGV8QXVzdHJhbGlhL1NvdXRoXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL0FkZWxhaWRlfEF1c3RyYWxpYS9ZYW5jb3dpbm5hXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL0JyaXNiYW5lfEF1c3RyYWxpYS9MaW5kZW1hblwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9CcmlzYmFuZXxBdXN0cmFsaWEvUXVlZW5zbGFuZFwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9EYXJ3aW58QXVzdHJhbGlhL05vcnRoXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL0xvcmRfSG93ZXxBdXN0cmFsaWEvTEhJXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1BlcnRofEF1c3RyYWxpYS9XZXN0XCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBbnRhcmN0aWNhL01hY3F1YXJpZVwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QXVzdHJhbGlhL0FDVFwiLFxyXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QXVzdHJhbGlhL0NhbmJlcnJhXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvQ3VycmllXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvSG9iYXJ0XCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvTWVsYm91cm5lXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvTlNXXCIsXHJcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvVGFzbWFuaWFcIixcclxuXHRcdFx0XCJBdXN0cmFsaWEvU3lkbmV5fEF1c3RyYWxpYS9WaWN0b3JpYVwiLFxyXG5cdFx0XHRcIkV0Yy9VVEN8RXRjL1VDVFwiLFxyXG5cdFx0XHRcIkV0Yy9VVEN8RXRjL1VuaXZlcnNhbFwiLFxyXG5cdFx0XHRcIkV0Yy9VVEN8RXRjL1p1bHVcIixcclxuXHRcdFx0XCJFdGMvVVRDfFVDVFwiLFxyXG5cdFx0XHRcIkV0Yy9VVEN8VVRDXCIsXHJcblx0XHRcdFwiRXRjL1VUQ3xVbml2ZXJzYWxcIixcclxuXHRcdFx0XCJFdGMvVVRDfFp1bHVcIixcclxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEFzaWEvRmFtYWd1c3RhXCIsXHJcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xBc2lhL05pY29zaWFcIixcclxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEVFVFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL0J1Y2hhcmVzdFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL0hlbHNpbmtpXCIsXHJcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvS2lldlwiLFxyXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL0t5aXZcIixcclxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEV1cm9wZS9NYXJpZWhhbW5cIixcclxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEV1cm9wZS9OaWNvc2lhXCIsXHJcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvUmlnYVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL1NvZmlhXCIsXHJcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvVGFsbGlublwiLFxyXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL1V6aGdvcm9kXCIsXHJcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvVmlsbml1c1wiLFxyXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL1phcG9yb3poeWVcIixcclxuXHRcdFx0XCJFdXJvcGUvQ2hpc2luYXV8RXVyb3BlL1RpcmFzcG9sXCIsXHJcblx0XHRcdFwiRXVyb3BlL0R1YmxpbnxFaXJlXCIsXHJcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfEFudGFyY3RpY2EvU3lvd2FcIixcclxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8QXNpYS9BZGVuXCIsXHJcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfEFzaWEvQmFnaGRhZFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBc2lhL0JhaHJhaW5cIixcclxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8QXNpYS9Jc3RhbmJ1bFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBc2lhL0t1d2FpdFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBc2lhL1FhdGFyXCIsXHJcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfEFzaWEvUml5YWRoXCIsXHJcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfEV0Yy9HTVQtM1wiLFxyXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxFdXJvcGUvTWluc2tcIixcclxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8VHVya2V5XCIsXHJcblx0XHRcdFwiRXVyb3BlL0xpc2JvbnxBdGxhbnRpYy9DYW5hcnlcIixcclxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufEF0bGFudGljL0ZhZXJvZVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9MaXNib258QXRsYW50aWMvRmFyb2VcIixcclxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufEF0bGFudGljL01hZGVpcmFcIixcclxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufFBvcnR1Z2FsXCIsXHJcblx0XHRcdFwiRXVyb3BlL0xpc2JvbnxXRVRcIixcclxuXHRcdFx0XCJFdXJvcGUvTG9uZG9ufEV1cm9wZS9CZWxmYXN0XCIsXHJcblx0XHRcdFwiRXVyb3BlL0xvbmRvbnxFdXJvcGUvR3Vlcm5zZXlcIixcclxuXHRcdFx0XCJFdXJvcGUvTG9uZG9ufEV1cm9wZS9Jc2xlX29mX01hblwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258RXVyb3BlL0plcnNleVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258R0JcIixcclxuXHRcdFx0XCJFdXJvcGUvTG9uZG9ufEdCLUVpcmVcIixcclxuXHRcdFx0XCJFdXJvcGUvTW9zY293fEV1cm9wZS9LaXJvdlwiLFxyXG5cdFx0XHRcIkV1cm9wZS9Nb3Njb3d8RXVyb3BlL1NpbWZlcm9wb2xcIixcclxuXHRcdFx0XCJFdXJvcGUvTW9zY293fFctU1VcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8QWZyaWNhL0NldXRhXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEFyY3RpYy9Mb25neWVhcmJ5ZW5cIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8QXRsYW50aWMvSmFuX01heWVuXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfENFVFwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvQW1zdGVyZGFtXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9BbmRvcnJhXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9CZWxncmFkZVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvQmVybGluXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9CcmF0aXNsYXZhXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9CcnVzc2Vsc1wiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvQnVkYXBlc3RcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0J1c2luZ2VuXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9Db3BlbmhhZ2VuXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9HaWJyYWx0YXJcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0xqdWJsamFuYVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvTHV4ZW1ib3VyZ1wiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvTWFkcmlkXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9NYWx0YVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvTW9uYWNvXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9Pc2xvXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9Qb2Rnb3JpY2FcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1ByYWd1ZVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvUm9tZVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvU2FuX01hcmlub1wiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvU2FyYWpldm9cIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1Nrb3BqZVwiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvU3RvY2tob2xtXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9UaXJhbmVcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1ZhZHV6XCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9WYXRpY2FuXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9WaWVubmFcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1dhcnNhd1wiLFxyXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvWmFncmViXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9adXJpY2hcIixcclxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8TUVUXCIsXHJcblx0XHRcdFwiRXVyb3BlL1BhcmlzfFBvbGFuZFwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvQXVja2xhbmR8QW50YXJjdGljYS9NY011cmRvXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9BdWNrbGFuZHxBbnRhcmN0aWNhL1NvdXRoX1BvbGVcIixcclxuXHRcdFx0XCJQYWNpZmljL0F1Y2tsYW5kfE5aXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9DaGF0aGFtfE5aLUNIQVRcIixcclxuXHRcdFx0XCJQYWNpZmljL0Vhc3RlcnxDaGlsZS9FYXN0ZXJJc2xhbmRcIixcclxuXHRcdFx0XCJQYWNpZmljL0dhbGFwYWdvc3xFdGMvR01UKzZcIixcclxuXHRcdFx0XCJQYWNpZmljL0dhbWJpZXJ8RXRjL0dNVCs5XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9HdWFtfFBhY2lmaWMvU2FpcGFuXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9Ib25vbHVsdXxIU1RcIixcclxuXHRcdFx0XCJQYWNpZmljL0hvbm9sdWx1fFBhY2lmaWMvSm9obnN0b25cIixcclxuXHRcdFx0XCJQYWNpZmljL0hvbm9sdWx1fFVTL0hhd2FpaVwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvS2lyaXRpbWF0aXxFdGMvR01ULTE0XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9OaXVlfEV0Yy9HTVQrMTFcIixcclxuXHRcdFx0XCJQYWNpZmljL1BhZ29fUGFnb3xQYWNpZmljL01pZHdheVwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvUGFnb19QYWdvfFBhY2lmaWMvU2Ftb2FcIixcclxuXHRcdFx0XCJQYWNpZmljL1BhZ29fUGFnb3xVUy9TYW1vYVwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvUGl0Y2Fpcm58RXRjL0dNVCs4XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9UYWhpdGl8RXRjL0dNVCsxMFwiLFxyXG5cdFx0XHRcIlBhY2lmaWMvVGFoaXRpfFBhY2lmaWMvUmFyb3RvbmdhXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8RXRjL0dNVC0xM1wiLFxyXG5cdFx0XHRcIlBhY2lmaWMvVG9uZ2F0YXB1fFBhY2lmaWMvRW5kZXJidXJ5XCIsXHJcblx0XHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8UGFjaWZpYy9GYWthb2ZvXCIsXHJcblx0XHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8UGFjaWZpYy9LYW50b25cIlxyXG5cdFx0XSxcclxuXHRcdFwiY291bnRyaWVzXCI6IFtcclxuXHRcdFx0XCJBRHxFdXJvcGUvQW5kb3JyYVwiLFxyXG5cdFx0XHRcIkFFfEFzaWEvRHViYWlcIixcclxuXHRcdFx0XCJBRnxBc2lhL0thYnVsXCIsXHJcblx0XHRcdFwiQUd8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0FudGlndWFcIixcclxuXHRcdFx0XCJBSXxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvQW5ndWlsbGFcIixcclxuXHRcdFx0XCJBTHxFdXJvcGUvVGlyYW5lXCIsXHJcblx0XHRcdFwiQU18QXNpYS9ZZXJldmFuXCIsXHJcblx0XHRcdFwiQU98QWZyaWNhL0xhZ29zIEFmcmljYS9MdWFuZGFcIixcclxuXHRcdFx0XCJBUXxBbnRhcmN0aWNhL0Nhc2V5IEFudGFyY3RpY2EvRGF2aXMgQW50YXJjdGljYS9NYXdzb24gQW50YXJjdGljYS9QYWxtZXIgQW50YXJjdGljYS9Sb3RoZXJhIEFudGFyY3RpY2EvVHJvbGwgQW50YXJjdGljYS9Wb3N0b2sgUGFjaWZpYy9BdWNrbGFuZCBQYWNpZmljL1BvcnRfTW9yZXNieSBBc2lhL1JpeWFkaCBBc2lhL1NpbmdhcG9yZSBBbnRhcmN0aWNhL01jTXVyZG8gQW50YXJjdGljYS9EdW1vbnREVXJ2aWxsZSBBbnRhcmN0aWNhL1N5b3dhXCIsXHJcblx0XHRcdFwiQVJ8QW1lcmljYS9BcmdlbnRpbmEvQnVlbm9zX0FpcmVzIEFtZXJpY2EvQXJnZW50aW5hL0NvcmRvYmEgQW1lcmljYS9BcmdlbnRpbmEvU2FsdGEgQW1lcmljYS9BcmdlbnRpbmEvSnVqdXkgQW1lcmljYS9BcmdlbnRpbmEvVHVjdW1hbiBBbWVyaWNhL0FyZ2VudGluYS9DYXRhbWFyY2EgQW1lcmljYS9BcmdlbnRpbmEvTGFfUmlvamEgQW1lcmljYS9BcmdlbnRpbmEvU2FuX0p1YW4gQW1lcmljYS9BcmdlbnRpbmEvTWVuZG96YSBBbWVyaWNhL0FyZ2VudGluYS9TYW5fTHVpcyBBbWVyaWNhL0FyZ2VudGluYS9SaW9fR2FsbGVnb3MgQW1lcmljYS9BcmdlbnRpbmEvVXNodWFpYVwiLFxyXG5cdFx0XHRcIkFTfFBhY2lmaWMvUGFnb19QYWdvXCIsXHJcblx0XHRcdFwiQVR8RXVyb3BlL1ZpZW5uYVwiLFxyXG5cdFx0XHRcIkFVfEF1c3RyYWxpYS9Mb3JkX0hvd2UgQW50YXJjdGljYS9NYWNxdWFyaWUgQXVzdHJhbGlhL0hvYmFydCBBdXN0cmFsaWEvTWVsYm91cm5lIEF1c3RyYWxpYS9TeWRuZXkgQXVzdHJhbGlhL0Jyb2tlbl9IaWxsIEF1c3RyYWxpYS9CcmlzYmFuZSBBdXN0cmFsaWEvTGluZGVtYW4gQXVzdHJhbGlhL0FkZWxhaWRlIEF1c3RyYWxpYS9EYXJ3aW4gQXVzdHJhbGlhL1BlcnRoIEF1c3RyYWxpYS9FdWNsYSBBc2lhL1Rva3lvXCIsXHJcblx0XHRcdFwiQVd8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0FydWJhXCIsXHJcblx0XHRcdFwiQVh8RXVyb3BlL0hlbHNpbmtpIEV1cm9wZS9NYXJpZWhhbW5cIixcclxuXHRcdFx0XCJBWnxBc2lhL0Jha3VcIixcclxuXHRcdFx0XCJCQXxFdXJvcGUvQmVsZ3JhZGUgRXVyb3BlL1NhcmFqZXZvXCIsXHJcblx0XHRcdFwiQkJ8QW1lcmljYS9CYXJiYWRvc1wiLFxyXG5cdFx0XHRcIkJEfEFzaWEvRGhha2FcIixcclxuXHRcdFx0XCJCRXxFdXJvcGUvQnJ1c3NlbHNcIixcclxuXHRcdFx0XCJCRnxBZnJpY2EvQWJpZGphbiBBZnJpY2EvT3VhZ2Fkb3Vnb3VcIixcclxuXHRcdFx0XCJCR3xFdXJvcGUvU29maWFcIixcclxuXHRcdFx0XCJCSHxBc2lhL1FhdGFyIEFzaWEvQmFocmFpblwiLFxyXG5cdFx0XHRcIkJJfEFmcmljYS9NYXB1dG8gQWZyaWNhL0J1anVtYnVyYVwiLFxyXG5cdFx0XHRcIkJKfEFmcmljYS9MYWdvcyBBZnJpY2EvUG9ydG8tTm92b1wiLFxyXG5cdFx0XHRcIkJMfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9TdF9CYXJ0aGVsZW15XCIsXHJcblx0XHRcdFwiQk18QXRsYW50aWMvQmVybXVkYVwiLFxyXG5cdFx0XHRcIkJOfEFzaWEvS3VjaGluZyBBc2lhL0JydW5laVwiLFxyXG5cdFx0XHRcIkJPfEFtZXJpY2EvTGFfUGF6XCIsXHJcblx0XHRcdFwiQlF8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0tyYWxlbmRpamtcIixcclxuXHRcdFx0XCJCUnxBbWVyaWNhL05vcm9uaGEgQW1lcmljYS9CZWxlbSBBbWVyaWNhL0ZvcnRhbGV6YSBBbWVyaWNhL1JlY2lmZSBBbWVyaWNhL0FyYWd1YWluYSBBbWVyaWNhL01hY2VpbyBBbWVyaWNhL0JhaGlhIEFtZXJpY2EvU2FvX1BhdWxvIEFtZXJpY2EvQ2FtcG9fR3JhbmRlIEFtZXJpY2EvQ3VpYWJhIEFtZXJpY2EvU2FudGFyZW0gQW1lcmljYS9Qb3J0b19WZWxobyBBbWVyaWNhL0JvYV9WaXN0YSBBbWVyaWNhL01hbmF1cyBBbWVyaWNhL0VpcnVuZXBlIEFtZXJpY2EvUmlvX0JyYW5jb1wiLFxyXG5cdFx0XHRcIkJTfEFtZXJpY2EvVG9yb250byBBbWVyaWNhL05hc3NhdVwiLFxyXG5cdFx0XHRcIkJUfEFzaWEvVGhpbXBodVwiLFxyXG5cdFx0XHRcIkJXfEFmcmljYS9NYXB1dG8gQWZyaWNhL0dhYm9yb25lXCIsXHJcblx0XHRcdFwiQll8RXVyb3BlL01pbnNrXCIsXHJcblx0XHRcdFwiQlp8QW1lcmljYS9CZWxpemVcIixcclxuXHRcdFx0XCJDQXxBbWVyaWNhL1N0X0pvaG5zIEFtZXJpY2EvSGFsaWZheCBBbWVyaWNhL0dsYWNlX0JheSBBbWVyaWNhL01vbmN0b24gQW1lcmljYS9Hb29zZV9CYXkgQW1lcmljYS9Ub3JvbnRvIEFtZXJpY2EvSXFhbHVpdCBBbWVyaWNhL1dpbm5pcGVnIEFtZXJpY2EvUmVzb2x1dGUgQW1lcmljYS9SYW5raW5fSW5sZXQgQW1lcmljYS9SZWdpbmEgQW1lcmljYS9Td2lmdF9DdXJyZW50IEFtZXJpY2EvRWRtb250b24gQW1lcmljYS9DYW1icmlkZ2VfQmF5IEFtZXJpY2EvSW51dmlrIEFtZXJpY2EvRGF3c29uX0NyZWVrIEFtZXJpY2EvRm9ydF9OZWxzb24gQW1lcmljYS9XaGl0ZWhvcnNlIEFtZXJpY2EvRGF3c29uIEFtZXJpY2EvVmFuY291dmVyIEFtZXJpY2EvUGFuYW1hIEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9QaG9lbml4IEFtZXJpY2EvQmxhbmMtU2FibG9uIEFtZXJpY2EvQXRpa29rYW4gQW1lcmljYS9DcmVzdG9uXCIsXHJcblx0XHRcdFwiQ0N8QXNpYS9ZYW5nb24gSW5kaWFuL0NvY29zXCIsXHJcblx0XHRcdFwiQ0R8QWZyaWNhL01hcHV0byBBZnJpY2EvTGFnb3MgQWZyaWNhL0tpbnNoYXNhIEFmcmljYS9MdWJ1bWJhc2hpXCIsXHJcblx0XHRcdFwiQ0Z8QWZyaWNhL0xhZ29zIEFmcmljYS9CYW5ndWlcIixcclxuXHRcdFx0XCJDR3xBZnJpY2EvTGFnb3MgQWZyaWNhL0JyYXp6YXZpbGxlXCIsXHJcblx0XHRcdFwiQ0h8RXVyb3BlL1p1cmljaFwiLFxyXG5cdFx0XHRcIkNJfEFmcmljYS9BYmlkamFuXCIsXHJcblx0XHRcdFwiQ0t8UGFjaWZpYy9SYXJvdG9uZ2FcIixcclxuXHRcdFx0XCJDTHxBbWVyaWNhL1NhbnRpYWdvIEFtZXJpY2EvQ295aGFpcXVlIEFtZXJpY2EvUHVudGFfQXJlbmFzIFBhY2lmaWMvRWFzdGVyXCIsXHJcblx0XHRcdFwiQ018QWZyaWNhL0xhZ29zIEFmcmljYS9Eb3VhbGFcIixcclxuXHRcdFx0XCJDTnxBc2lhL1NoYW5naGFpIEFzaWEvVXJ1bXFpXCIsXHJcblx0XHRcdFwiQ098QW1lcmljYS9Cb2dvdGFcIixcclxuXHRcdFx0XCJDUnxBbWVyaWNhL0Nvc3RhX1JpY2FcIixcclxuXHRcdFx0XCJDVXxBbWVyaWNhL0hhdmFuYVwiLFxyXG5cdFx0XHRcIkNWfEF0bGFudGljL0NhcGVfVmVyZGVcIixcclxuXHRcdFx0XCJDV3xBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvQ3VyYWNhb1wiLFxyXG5cdFx0XHRcIkNYfEFzaWEvQmFuZ2tvayBJbmRpYW4vQ2hyaXN0bWFzXCIsXHJcblx0XHRcdFwiQ1l8QXNpYS9OaWNvc2lhIEFzaWEvRmFtYWd1c3RhXCIsXHJcblx0XHRcdFwiQ1p8RXVyb3BlL1ByYWd1ZVwiLFxyXG5cdFx0XHRcIkRFfEV1cm9wZS9adXJpY2ggRXVyb3BlL0JlcmxpbiBFdXJvcGUvQnVzaW5nZW5cIixcclxuXHRcdFx0XCJESnxBZnJpY2EvTmFpcm9iaSBBZnJpY2EvRGppYm91dGlcIixcclxuXHRcdFx0XCJES3xFdXJvcGUvQmVybGluIEV1cm9wZS9Db3BlbmhhZ2VuXCIsXHJcblx0XHRcdFwiRE18QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0RvbWluaWNhXCIsXHJcblx0XHRcdFwiRE98QW1lcmljYS9TYW50b19Eb21pbmdvXCIsXHJcblx0XHRcdFwiRFp8QWZyaWNhL0FsZ2llcnNcIixcclxuXHRcdFx0XCJFQ3xBbWVyaWNhL0d1YXlhcXVpbCBQYWNpZmljL0dhbGFwYWdvc1wiLFxyXG5cdFx0XHRcIkVFfEV1cm9wZS9UYWxsaW5uXCIsXHJcblx0XHRcdFwiRUd8QWZyaWNhL0NhaXJvXCIsXHJcblx0XHRcdFwiRUh8QWZyaWNhL0VsX0FhaXVuXCIsXHJcblx0XHRcdFwiRVJ8QWZyaWNhL05haXJvYmkgQWZyaWNhL0FzbWFyYVwiLFxyXG5cdFx0XHRcIkVTfEV1cm9wZS9NYWRyaWQgQWZyaWNhL0NldXRhIEF0bGFudGljL0NhbmFyeVwiLFxyXG5cdFx0XHRcIkVUfEFmcmljYS9OYWlyb2JpIEFmcmljYS9BZGRpc19BYmFiYVwiLFxyXG5cdFx0XHRcIkZJfEV1cm9wZS9IZWxzaW5raVwiLFxyXG5cdFx0XHRcIkZKfFBhY2lmaWMvRmlqaVwiLFxyXG5cdFx0XHRcIkZLfEF0bGFudGljL1N0YW5sZXlcIixcclxuXHRcdFx0XCJGTXxQYWNpZmljL0tvc3JhZSBQYWNpZmljL1BvcnRfTW9yZXNieSBQYWNpZmljL0d1YWRhbGNhbmFsIFBhY2lmaWMvQ2h1dWsgUGFjaWZpYy9Qb2hucGVpXCIsXHJcblx0XHRcdFwiRk98QXRsYW50aWMvRmFyb2VcIixcclxuXHRcdFx0XCJGUnxFdXJvcGUvUGFyaXNcIixcclxuXHRcdFx0XCJHQXxBZnJpY2EvTGFnb3MgQWZyaWNhL0xpYnJldmlsbGVcIixcclxuXHRcdFx0XCJHQnxFdXJvcGUvTG9uZG9uXCIsXHJcblx0XHRcdFwiR0R8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0dyZW5hZGFcIixcclxuXHRcdFx0XCJHRXxBc2lhL1RiaWxpc2lcIixcclxuXHRcdFx0XCJHRnxBbWVyaWNhL0NheWVubmVcIixcclxuXHRcdFx0XCJHR3xFdXJvcGUvTG9uZG9uIEV1cm9wZS9HdWVybnNleVwiLFxyXG5cdFx0XHRcIkdIfEFmcmljYS9BYmlkamFuIEFmcmljYS9BY2NyYVwiLFxyXG5cdFx0XHRcIkdJfEV1cm9wZS9HaWJyYWx0YXJcIixcclxuXHRcdFx0XCJHTHxBbWVyaWNhL051dWsgQW1lcmljYS9EYW5tYXJrc2hhdm4gQW1lcmljYS9TY29yZXNieXN1bmQgQW1lcmljYS9UaHVsZVwiLFxyXG5cdFx0XHRcIkdNfEFmcmljYS9BYmlkamFuIEFmcmljYS9CYW5qdWxcIixcclxuXHRcdFx0XCJHTnxBZnJpY2EvQWJpZGphbiBBZnJpY2EvQ29uYWtyeVwiLFxyXG5cdFx0XHRcIkdQfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9HdWFkZWxvdXBlXCIsXHJcblx0XHRcdFwiR1F8QWZyaWNhL0xhZ29zIEFmcmljYS9NYWxhYm9cIixcclxuXHRcdFx0XCJHUnxFdXJvcGUvQXRoZW5zXCIsXHJcblx0XHRcdFwiR1N8QXRsYW50aWMvU291dGhfR2VvcmdpYVwiLFxyXG5cdFx0XHRcIkdUfEFtZXJpY2EvR3VhdGVtYWxhXCIsXHJcblx0XHRcdFwiR1V8UGFjaWZpYy9HdWFtXCIsXHJcblx0XHRcdFwiR1d8QWZyaWNhL0Jpc3NhdVwiLFxyXG5cdFx0XHRcIkdZfEFtZXJpY2EvR3V5YW5hXCIsXHJcblx0XHRcdFwiSEt8QXNpYS9Ib25nX0tvbmdcIixcclxuXHRcdFx0XCJITnxBbWVyaWNhL1RlZ3VjaWdhbHBhXCIsXHJcblx0XHRcdFwiSFJ8RXVyb3BlL0JlbGdyYWRlIEV1cm9wZS9aYWdyZWJcIixcclxuXHRcdFx0XCJIVHxBbWVyaWNhL1BvcnQtYXUtUHJpbmNlXCIsXHJcblx0XHRcdFwiSFV8RXVyb3BlL0J1ZGFwZXN0XCIsXHJcblx0XHRcdFwiSUR8QXNpYS9KYWthcnRhIEFzaWEvUG9udGlhbmFrIEFzaWEvTWFrYXNzYXIgQXNpYS9KYXlhcHVyYVwiLFxyXG5cdFx0XHRcIklFfEV1cm9wZS9EdWJsaW5cIixcclxuXHRcdFx0XCJJTHxBc2lhL0plcnVzYWxlbVwiLFxyXG5cdFx0XHRcIklNfEV1cm9wZS9Mb25kb24gRXVyb3BlL0lzbGVfb2ZfTWFuXCIsXHJcblx0XHRcdFwiSU58QXNpYS9Lb2xrYXRhXCIsXHJcblx0XHRcdFwiSU98SW5kaWFuL0NoYWdvc1wiLFxyXG5cdFx0XHRcIklRfEFzaWEvQmFnaGRhZFwiLFxyXG5cdFx0XHRcIklSfEFzaWEvVGVocmFuXCIsXHJcblx0XHRcdFwiSVN8QWZyaWNhL0FiaWRqYW4gQXRsYW50aWMvUmV5a2phdmlrXCIsXHJcblx0XHRcdFwiSVR8RXVyb3BlL1JvbWVcIixcclxuXHRcdFx0XCJKRXxFdXJvcGUvTG9uZG9uIEV1cm9wZS9KZXJzZXlcIixcclxuXHRcdFx0XCJKTXxBbWVyaWNhL0phbWFpY2FcIixcclxuXHRcdFx0XCJKT3xBc2lhL0FtbWFuXCIsXHJcblx0XHRcdFwiSlB8QXNpYS9Ub2t5b1wiLFxyXG5cdFx0XHRcIktFfEFmcmljYS9OYWlyb2JpXCIsXHJcblx0XHRcdFwiS0d8QXNpYS9CaXNoa2VrXCIsXHJcblx0XHRcdFwiS0h8QXNpYS9CYW5na29rIEFzaWEvUGhub21fUGVuaFwiLFxyXG5cdFx0XHRcIktJfFBhY2lmaWMvVGFyYXdhIFBhY2lmaWMvS2FudG9uIFBhY2lmaWMvS2lyaXRpbWF0aVwiLFxyXG5cdFx0XHRcIktNfEFmcmljYS9OYWlyb2JpIEluZGlhbi9Db21vcm9cIixcclxuXHRcdFx0XCJLTnxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvU3RfS2l0dHNcIixcclxuXHRcdFx0XCJLUHxBc2lhL1B5b25neWFuZ1wiLFxyXG5cdFx0XHRcIktSfEFzaWEvU2VvdWxcIixcclxuXHRcdFx0XCJLV3xBc2lhL1JpeWFkaCBBc2lhL0t1d2FpdFwiLFxyXG5cdFx0XHRcIktZfEFtZXJpY2EvUGFuYW1hIEFtZXJpY2EvQ2F5bWFuXCIsXHJcblx0XHRcdFwiS1p8QXNpYS9BbG1hdHkgQXNpYS9ReXp5bG9yZGEgQXNpYS9Rb3N0YW5heSBBc2lhL0FxdG9iZSBBc2lhL0FxdGF1IEFzaWEvQXR5cmF1IEFzaWEvT3JhbFwiLFxyXG5cdFx0XHRcIkxBfEFzaWEvQmFuZ2tvayBBc2lhL1ZpZW50aWFuZVwiLFxyXG5cdFx0XHRcIkxCfEFzaWEvQmVpcnV0XCIsXHJcblx0XHRcdFwiTEN8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1N0X0x1Y2lhXCIsXHJcblx0XHRcdFwiTEl8RXVyb3BlL1p1cmljaCBFdXJvcGUvVmFkdXpcIixcclxuXHRcdFx0XCJMS3xBc2lhL0NvbG9tYm9cIixcclxuXHRcdFx0XCJMUnxBZnJpY2EvTW9ucm92aWFcIixcclxuXHRcdFx0XCJMU3xBZnJpY2EvSm9oYW5uZXNidXJnIEFmcmljYS9NYXNlcnVcIixcclxuXHRcdFx0XCJMVHxFdXJvcGUvVmlsbml1c1wiLFxyXG5cdFx0XHRcIkxVfEV1cm9wZS9CcnVzc2VscyBFdXJvcGUvTHV4ZW1ib3VyZ1wiLFxyXG5cdFx0XHRcIkxWfEV1cm9wZS9SaWdhXCIsXHJcblx0XHRcdFwiTFl8QWZyaWNhL1RyaXBvbGlcIixcclxuXHRcdFx0XCJNQXxBZnJpY2EvQ2FzYWJsYW5jYVwiLFxyXG5cdFx0XHRcIk1DfEV1cm9wZS9QYXJpcyBFdXJvcGUvTW9uYWNvXCIsXHJcblx0XHRcdFwiTUR8RXVyb3BlL0NoaXNpbmF1XCIsXHJcblx0XHRcdFwiTUV8RXVyb3BlL0JlbGdyYWRlIEV1cm9wZS9Qb2Rnb3JpY2FcIixcclxuXHRcdFx0XCJNRnxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvTWFyaWdvdFwiLFxyXG5cdFx0XHRcIk1HfEFmcmljYS9OYWlyb2JpIEluZGlhbi9BbnRhbmFuYXJpdm9cIixcclxuXHRcdFx0XCJNSHxQYWNpZmljL1RhcmF3YSBQYWNpZmljL0t3YWphbGVpbiBQYWNpZmljL01hanVyb1wiLFxyXG5cdFx0XHRcIk1LfEV1cm9wZS9CZWxncmFkZSBFdXJvcGUvU2tvcGplXCIsXHJcblx0XHRcdFwiTUx8QWZyaWNhL0FiaWRqYW4gQWZyaWNhL0JhbWFrb1wiLFxyXG5cdFx0XHRcIk1NfEFzaWEvWWFuZ29uXCIsXHJcblx0XHRcdFwiTU58QXNpYS9VbGFhbmJhYXRhciBBc2lhL0hvdmRcIixcclxuXHRcdFx0XCJNT3xBc2lhL01hY2F1XCIsXHJcblx0XHRcdFwiTVB8UGFjaWZpYy9HdWFtIFBhY2lmaWMvU2FpcGFuXCIsXHJcblx0XHRcdFwiTVF8QW1lcmljYS9NYXJ0aW5pcXVlXCIsXHJcblx0XHRcdFwiTVJ8QWZyaWNhL0FiaWRqYW4gQWZyaWNhL05vdWFrY2hvdHRcIixcclxuXHRcdFx0XCJNU3xBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvTW9udHNlcnJhdFwiLFxyXG5cdFx0XHRcIk1UfEV1cm9wZS9NYWx0YVwiLFxyXG5cdFx0XHRcIk1VfEluZGlhbi9NYXVyaXRpdXNcIixcclxuXHRcdFx0XCJNVnxJbmRpYW4vTWFsZGl2ZXNcIixcclxuXHRcdFx0XCJNV3xBZnJpY2EvTWFwdXRvIEFmcmljYS9CbGFudHlyZVwiLFxyXG5cdFx0XHRcIk1YfEFtZXJpY2EvTWV4aWNvX0NpdHkgQW1lcmljYS9DYW5jdW4gQW1lcmljYS9NZXJpZGEgQW1lcmljYS9Nb250ZXJyZXkgQW1lcmljYS9NYXRhbW9yb3MgQW1lcmljYS9DaGlodWFodWEgQW1lcmljYS9DaXVkYWRfSnVhcmV6IEFtZXJpY2EvT2ppbmFnYSBBbWVyaWNhL01hemF0bGFuIEFtZXJpY2EvQmFoaWFfQmFuZGVyYXMgQW1lcmljYS9IZXJtb3NpbGxvIEFtZXJpY2EvVGlqdWFuYVwiLFxyXG5cdFx0XHRcIk1ZfEFzaWEvS3VjaGluZyBBc2lhL1NpbmdhcG9yZSBBc2lhL0t1YWxhX0x1bXB1clwiLFxyXG5cdFx0XHRcIk1afEFmcmljYS9NYXB1dG9cIixcclxuXHRcdFx0XCJOQXxBZnJpY2EvV2luZGhvZWtcIixcclxuXHRcdFx0XCJOQ3xQYWNpZmljL05vdW1lYVwiLFxyXG5cdFx0XHRcIk5FfEFmcmljYS9MYWdvcyBBZnJpY2EvTmlhbWV5XCIsXHJcblx0XHRcdFwiTkZ8UGFjaWZpYy9Ob3Jmb2xrXCIsXHJcblx0XHRcdFwiTkd8QWZyaWNhL0xhZ29zXCIsXHJcblx0XHRcdFwiTkl8QW1lcmljYS9NYW5hZ3VhXCIsXHJcblx0XHRcdFwiTkx8RXVyb3BlL0JydXNzZWxzIEV1cm9wZS9BbXN0ZXJkYW1cIixcclxuXHRcdFx0XCJOT3xFdXJvcGUvQmVybGluIEV1cm9wZS9Pc2xvXCIsXHJcblx0XHRcdFwiTlB8QXNpYS9LYXRobWFuZHVcIixcclxuXHRcdFx0XCJOUnxQYWNpZmljL05hdXJ1XCIsXHJcblx0XHRcdFwiTlV8UGFjaWZpYy9OaXVlXCIsXHJcblx0XHRcdFwiTlp8UGFjaWZpYy9BdWNrbGFuZCBQYWNpZmljL0NoYXRoYW1cIixcclxuXHRcdFx0XCJPTXxBc2lhL0R1YmFpIEFzaWEvTXVzY2F0XCIsXHJcblx0XHRcdFwiUEF8QW1lcmljYS9QYW5hbWFcIixcclxuXHRcdFx0XCJQRXxBbWVyaWNhL0xpbWFcIixcclxuXHRcdFx0XCJQRnxQYWNpZmljL1RhaGl0aSBQYWNpZmljL01hcnF1ZXNhcyBQYWNpZmljL0dhbWJpZXJcIixcclxuXHRcdFx0XCJQR3xQYWNpZmljL1BvcnRfTW9yZXNieSBQYWNpZmljL0JvdWdhaW52aWxsZVwiLFxyXG5cdFx0XHRcIlBIfEFzaWEvTWFuaWxhXCIsXHJcblx0XHRcdFwiUEt8QXNpYS9LYXJhY2hpXCIsXHJcblx0XHRcdFwiUEx8RXVyb3BlL1dhcnNhd1wiLFxyXG5cdFx0XHRcIlBNfEFtZXJpY2EvTWlxdWVsb25cIixcclxuXHRcdFx0XCJQTnxQYWNpZmljL1BpdGNhaXJuXCIsXHJcblx0XHRcdFwiUFJ8QW1lcmljYS9QdWVydG9fUmljb1wiLFxyXG5cdFx0XHRcIlBTfEFzaWEvR2F6YSBBc2lhL0hlYnJvblwiLFxyXG5cdFx0XHRcIlBUfEV1cm9wZS9MaXNib24gQXRsYW50aWMvTWFkZWlyYSBBdGxhbnRpYy9Bem9yZXNcIixcclxuXHRcdFx0XCJQV3xQYWNpZmljL1BhbGF1XCIsXHJcblx0XHRcdFwiUFl8QW1lcmljYS9Bc3VuY2lvblwiLFxyXG5cdFx0XHRcIlFBfEFzaWEvUWF0YXJcIixcclxuXHRcdFx0XCJSRXxBc2lhL0R1YmFpIEluZGlhbi9SZXVuaW9uXCIsXHJcblx0XHRcdFwiUk98RXVyb3BlL0J1Y2hhcmVzdFwiLFxyXG5cdFx0XHRcIlJTfEV1cm9wZS9CZWxncmFkZVwiLFxyXG5cdFx0XHRcIlJVfEV1cm9wZS9LYWxpbmluZ3JhZCBFdXJvcGUvTW9zY293IEV1cm9wZS9TaW1mZXJvcG9sIEV1cm9wZS9LaXJvdiBFdXJvcGUvVm9sZ29ncmFkIEV1cm9wZS9Bc3RyYWtoYW4gRXVyb3BlL1NhcmF0b3YgRXVyb3BlL1VseWFub3ZzayBFdXJvcGUvU2FtYXJhIEFzaWEvWWVrYXRlcmluYnVyZyBBc2lhL09tc2sgQXNpYS9Ob3Zvc2liaXJzayBBc2lhL0Jhcm5hdWwgQXNpYS9Ub21zayBBc2lhL05vdm9rdXpuZXRzayBBc2lhL0tyYXNub3lhcnNrIEFzaWEvSXJrdXRzayBBc2lhL0NoaXRhIEFzaWEvWWFrdXRzayBBc2lhL0toYW5keWdhIEFzaWEvVmxhZGl2b3N0b2sgQXNpYS9Vc3QtTmVyYSBBc2lhL01hZ2FkYW4gQXNpYS9TYWtoYWxpbiBBc2lhL1NyZWRuZWtvbHltc2sgQXNpYS9LYW1jaGF0a2EgQXNpYS9BbmFkeXJcIixcclxuXHRcdFx0XCJSV3xBZnJpY2EvTWFwdXRvIEFmcmljYS9LaWdhbGlcIixcclxuXHRcdFx0XCJTQXxBc2lhL1JpeWFkaFwiLFxyXG5cdFx0XHRcIlNCfFBhY2lmaWMvR3VhZGFsY2FuYWxcIixcclxuXHRcdFx0XCJTQ3xBc2lhL0R1YmFpIEluZGlhbi9NYWhlXCIsXHJcblx0XHRcdFwiU0R8QWZyaWNhL0toYXJ0b3VtXCIsXHJcblx0XHRcdFwiU0V8RXVyb3BlL0JlcmxpbiBFdXJvcGUvU3RvY2tob2xtXCIsXHJcblx0XHRcdFwiU0d8QXNpYS9TaW5nYXBvcmVcIixcclxuXHRcdFx0XCJTSHxBZnJpY2EvQWJpZGphbiBBdGxhbnRpYy9TdF9IZWxlbmFcIixcclxuXHRcdFx0XCJTSXxFdXJvcGUvQmVsZ3JhZGUgRXVyb3BlL0xqdWJsamFuYVwiLFxyXG5cdFx0XHRcIlNKfEV1cm9wZS9CZXJsaW4gQXJjdGljL0xvbmd5ZWFyYnllblwiLFxyXG5cdFx0XHRcIlNLfEV1cm9wZS9QcmFndWUgRXVyb3BlL0JyYXRpc2xhdmFcIixcclxuXHRcdFx0XCJTTHxBZnJpY2EvQWJpZGphbiBBZnJpY2EvRnJlZXRvd25cIixcclxuXHRcdFx0XCJTTXxFdXJvcGUvUm9tZSBFdXJvcGUvU2FuX01hcmlub1wiLFxyXG5cdFx0XHRcIlNOfEFmcmljYS9BYmlkamFuIEFmcmljYS9EYWthclwiLFxyXG5cdFx0XHRcIlNPfEFmcmljYS9OYWlyb2JpIEFmcmljYS9Nb2dhZGlzaHVcIixcclxuXHRcdFx0XCJTUnxBbWVyaWNhL1BhcmFtYXJpYm9cIixcclxuXHRcdFx0XCJTU3xBZnJpY2EvSnViYVwiLFxyXG5cdFx0XHRcIlNUfEFmcmljYS9TYW9fVG9tZVwiLFxyXG5cdFx0XHRcIlNWfEFtZXJpY2EvRWxfU2FsdmFkb3JcIixcclxuXHRcdFx0XCJTWHxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvTG93ZXJfUHJpbmNlc1wiLFxyXG5cdFx0XHRcIlNZfEFzaWEvRGFtYXNjdXNcIixcclxuXHRcdFx0XCJTWnxBZnJpY2EvSm9oYW5uZXNidXJnIEFmcmljYS9NYmFiYW5lXCIsXHJcblx0XHRcdFwiVEN8QW1lcmljYS9HcmFuZF9UdXJrXCIsXHJcblx0XHRcdFwiVER8QWZyaWNhL05kamFtZW5hXCIsXHJcblx0XHRcdFwiVEZ8QXNpYS9EdWJhaSBJbmRpYW4vTWFsZGl2ZXMgSW5kaWFuL0tlcmd1ZWxlblwiLFxyXG5cdFx0XHRcIlRHfEFmcmljYS9BYmlkamFuIEFmcmljYS9Mb21lXCIsXHJcblx0XHRcdFwiVEh8QXNpYS9CYW5na29rXCIsXHJcblx0XHRcdFwiVEp8QXNpYS9EdXNoYW5iZVwiLFxyXG5cdFx0XHRcIlRLfFBhY2lmaWMvRmFrYW9mb1wiLFxyXG5cdFx0XHRcIlRMfEFzaWEvRGlsaVwiLFxyXG5cdFx0XHRcIlRNfEFzaWEvQXNoZ2FiYXRcIixcclxuXHRcdFx0XCJUTnxBZnJpY2EvVHVuaXNcIixcclxuXHRcdFx0XCJUT3xQYWNpZmljL1RvbmdhdGFwdVwiLFxyXG5cdFx0XHRcIlRSfEV1cm9wZS9Jc3RhbmJ1bFwiLFxyXG5cdFx0XHRcIlRUfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9Qb3J0X29mX1NwYWluXCIsXHJcblx0XHRcdFwiVFZ8UGFjaWZpYy9UYXJhd2EgUGFjaWZpYy9GdW5hZnV0aVwiLFxyXG5cdFx0XHRcIlRXfEFzaWEvVGFpcGVpXCIsXHJcblx0XHRcdFwiVFp8QWZyaWNhL05haXJvYmkgQWZyaWNhL0Rhcl9lc19TYWxhYW1cIixcclxuXHRcdFx0XCJVQXxFdXJvcGUvU2ltZmVyb3BvbCBFdXJvcGUvS3lpdlwiLFxyXG5cdFx0XHRcIlVHfEFmcmljYS9OYWlyb2JpIEFmcmljYS9LYW1wYWxhXCIsXHJcblx0XHRcdFwiVU18UGFjaWZpYy9QYWdvX1BhZ28gUGFjaWZpYy9UYXJhd2EgUGFjaWZpYy9NaWR3YXkgUGFjaWZpYy9XYWtlXCIsXHJcblx0XHRcdFwiVVN8QW1lcmljYS9OZXdfWW9yayBBbWVyaWNhL0RldHJvaXQgQW1lcmljYS9LZW50dWNreS9Mb3Vpc3ZpbGxlIEFtZXJpY2EvS2VudHVja3kvTW9udGljZWxsbyBBbWVyaWNhL0luZGlhbmEvSW5kaWFuYXBvbGlzIEFtZXJpY2EvSW5kaWFuYS9WaW5jZW5uZXMgQW1lcmljYS9JbmRpYW5hL1dpbmFtYWMgQW1lcmljYS9JbmRpYW5hL01hcmVuZ28gQW1lcmljYS9JbmRpYW5hL1BldGVyc2J1cmcgQW1lcmljYS9JbmRpYW5hL1ZldmF5IEFtZXJpY2EvQ2hpY2FnbyBBbWVyaWNhL0luZGlhbmEvVGVsbF9DaXR5IEFtZXJpY2EvSW5kaWFuYS9Lbm94IEFtZXJpY2EvTWVub21pbmVlIEFtZXJpY2EvTm9ydGhfRGFrb3RhL0NlbnRlciBBbWVyaWNhL05vcnRoX0Rha290YS9OZXdfU2FsZW0gQW1lcmljYS9Ob3J0aF9EYWtvdGEvQmV1bGFoIEFtZXJpY2EvRGVudmVyIEFtZXJpY2EvQm9pc2UgQW1lcmljYS9QaG9lbml4IEFtZXJpY2EvTG9zX0FuZ2VsZXMgQW1lcmljYS9BbmNob3JhZ2UgQW1lcmljYS9KdW5lYXUgQW1lcmljYS9TaXRrYSBBbWVyaWNhL01ldGxha2F0bGEgQW1lcmljYS9ZYWt1dGF0IEFtZXJpY2EvTm9tZSBBbWVyaWNhL0FkYWsgUGFjaWZpYy9Ib25vbHVsdVwiLFxyXG5cdFx0XHRcIlVZfEFtZXJpY2EvTW9udGV2aWRlb1wiLFxyXG5cdFx0XHRcIlVafEFzaWEvU2FtYXJrYW5kIEFzaWEvVGFzaGtlbnRcIixcclxuXHRcdFx0XCJWQXxFdXJvcGUvUm9tZSBFdXJvcGUvVmF0aWNhblwiLFxyXG5cdFx0XHRcIlZDfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9TdF9WaW5jZW50XCIsXHJcblx0XHRcdFwiVkV8QW1lcmljYS9DYXJhY2FzXCIsXHJcblx0XHRcdFwiVkd8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1RvcnRvbGFcIixcclxuXHRcdFx0XCJWSXxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvU3RfVGhvbWFzXCIsXHJcblx0XHRcdFwiVk58QXNpYS9CYW5na29rIEFzaWEvSG9fQ2hpX01pbmhcIixcclxuXHRcdFx0XCJWVXxQYWNpZmljL0VmYXRlXCIsXHJcblx0XHRcdFwiV0Z8UGFjaWZpYy9UYXJhd2EgUGFjaWZpYy9XYWxsaXNcIixcclxuXHRcdFx0XCJXU3xQYWNpZmljL0FwaWFcIixcclxuXHRcdFx0XCJZRXxBc2lhL1JpeWFkaCBBc2lhL0FkZW5cIixcclxuXHRcdFx0XCJZVHxBZnJpY2EvTmFpcm9iaSBJbmRpYW4vTWF5b3R0ZVwiLFxyXG5cdFx0XHRcIlpBfEFmcmljYS9Kb2hhbm5lc2J1cmdcIixcclxuXHRcdFx0XCJaTXxBZnJpY2EvTWFwdXRvIEFmcmljYS9MdXNha2FcIixcclxuXHRcdFx0XCJaV3xBZnJpY2EvTWFwdXRvIEFmcmljYS9IYXJhcmVcIlxyXG5cdFx0XVxyXG5cdH0pO1xyXG5cclxuXHJcblx0cmV0dXJuIG1vbWVudDtcclxufSkpO1xyXG4iLCIvLyEgbW9tZW50LmpzXHJcbi8vISB2ZXJzaW9uIDogMi4zMC4xXHJcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXHJcbi8vISBsaWNlbnNlIDogTUlUXHJcbi8vISBtb21lbnRqcy5jb21cclxuXHJcbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xyXG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxyXG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcclxuICAgIGdsb2JhbC5tb21lbnQgPSBmYWN0b3J5KClcclxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGhvb2tDYWxsYmFjaztcclxuXHJcbiAgICBmdW5jdGlvbiBob29rcygpIHtcclxuICAgICAgICByZXR1cm4gaG9va0NhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcclxuICAgIC8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxyXG4gICAgZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNBcnJheShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcclxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcclxuICAgICAgICAvLyBJRTggd2lsbCB0cmVhdCB1bmRlZmluZWQgYW5kIG51bGwgYXMgb2JqZWN0IGlmIGl0IHdhc24ndCBmb3JcclxuICAgICAgICAvLyBpbnB1dCAhPSBudWxsXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaW5wdXQgIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGs7XHJcbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXIoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8XHJcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RhdGUoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIERhdGUgfHxcclxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRGF0ZV0nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xyXG4gICAgICAgIHZhciByZXMgPSBbXSxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgYXJyTGVuID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyTGVuOyArK2kpIHtcclxuICAgICAgICAgICAgcmVzLnB1c2goZm4oYXJyW2ldLCBpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGIpIHtcclxuICAgICAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcclxuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzT3duUHJvcChiLCAndG9TdHJpbmcnKSkge1xyXG4gICAgICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcclxuICAgICAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIHRydWUpLnV0YygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKSB7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtcHR5OiBmYWxzZSxcclxuICAgICAgICAgICAgdW51c2VkVG9rZW5zOiBbXSxcclxuICAgICAgICAgICAgdW51c2VkSW5wdXQ6IFtdLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogLTIsXHJcbiAgICAgICAgICAgIGNoYXJzTGVmdE92ZXI6IDAsXHJcbiAgICAgICAgICAgIG51bGxJbnB1dDogZmFsc2UsXHJcbiAgICAgICAgICAgIGludmFsaWRFcmE6IG51bGwsXHJcbiAgICAgICAgICAgIGludmFsaWRNb250aDogbnVsbCxcclxuICAgICAgICAgICAgaW52YWxpZEZvcm1hdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJJbnZhbGlkYXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzbzogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGVQYXJ0czogW10sXHJcbiAgICAgICAgICAgIGVyYTogbnVsbCxcclxuICAgICAgICAgICAgbWVyaWRpZW06IG51bGwsXHJcbiAgICAgICAgICAgIHJmYzI4MjI6IGZhbHNlLFxyXG4gICAgICAgICAgICB3ZWVrZGF5TWlzbWF0Y2g6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcclxuICAgICAgICBpZiAobS5fcGYgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG0uX3BmO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzb21lO1xyXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5zb21lKSB7XHJcbiAgICAgICAgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzb21lID0gZnVuY3Rpb24gKGZ1bikge1xyXG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGxlbiA9IHQubGVuZ3RoID4+PiAwLFxyXG4gICAgICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgaW4gdCAmJiBmdW4uY2FsbCh0aGlzLCB0W2ldLCBpLCB0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1ZhbGlkKG0pIHtcclxuICAgICAgICB2YXIgZmxhZ3MgPSBudWxsLFxyXG4gICAgICAgICAgICBwYXJzZWRQYXJ0cyA9IGZhbHNlLFxyXG4gICAgICAgICAgICBpc05vd1ZhbGlkID0gbS5fZCAmJiAhaXNOYU4obS5fZC5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGlmIChpc05vd1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKG0pO1xyXG4gICAgICAgICAgICBwYXJzZWRQYXJ0cyA9IHNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAhPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXNOb3dWYWxpZCA9XHJcbiAgICAgICAgICAgICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcclxuICAgICAgICAgICAgICAgICFmbGFncy5lbXB0eSAmJlxyXG4gICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRFcmEgJiZcclxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcclxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkV2Vla2RheSAmJlxyXG4gICAgICAgICAgICAgICAgIWZsYWdzLndlZWtkYXlNaXNtYXRjaCAmJlxyXG4gICAgICAgICAgICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxyXG4gICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcclxuICAgICAgICAgICAgICAgICFmbGFncy51c2VySW52YWxpZGF0ZWQgJiZcclxuICAgICAgICAgICAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XHJcbiAgICAgICAgICAgIGlmIChtLl9zdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgPVxyXG4gICAgICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihtKSkge1xyXG4gICAgICAgICAgICBtLl9pc1ZhbGlkID0gaXNOb3dWYWxpZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNOb3dWYWxpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG0uX2lzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSW52YWxpZChmbGFncykge1xyXG4gICAgICAgIHZhciBtID0gY3JlYXRlVVRDKE5hTik7XHJcbiAgICAgICAgaWYgKGZsYWdzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZXh0ZW5kKGdldFBhcnNpbmdGbGFncyhtKSwgZmxhZ3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGx1Z2lucyB0aGF0IGFkZCBwcm9wZXJ0aWVzIHNob3VsZCBhbHNvIGFkZCB0aGUga2V5IGhlcmUgKG51bGwgdmFsdWUpLFxyXG4gICAgLy8gc28gd2UgY2FuIHByb3Blcmx5IGNsb25lIG91cnNlbHZlcy5cclxuICAgIHZhciBtb21lbnRQcm9wZXJ0aWVzID0gKGhvb2tzLm1vbWVudFByb3BlcnRpZXMgPSBbXSksXHJcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgcHJvcCxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBtb21lbnRQcm9wZXJ0aWVzTGVuID0gbW9tZW50UHJvcGVydGllcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xyXG4gICAgICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XHJcbiAgICAgICAgICAgIHRvLl9pID0gZnJvbS5faTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xyXG4gICAgICAgICAgICB0by5fZiA9IGZyb20uX2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcclxuICAgICAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcclxuICAgICAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XHJcbiAgICAgICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XHJcbiAgICAgICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcclxuICAgICAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcclxuICAgICAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcclxuICAgICAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb21lbnRQcm9wZXJ0aWVzTGVuID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbW9tZW50UHJvcGVydGllc0xlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wID0gbW9tZW50UHJvcGVydGllc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhbCA9IGZyb21bcHJvcF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b1twcm9wXSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XHJcbiAgICBmdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XHJcbiAgICAgICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShjb25maWcuX2QgIT0gbnVsbCA/IGNvbmZpZy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcclxuICAgICAgICAvLyBvYmplY3RzLlxyXG4gICAgICAgIGlmICh1cGRhdGVJblByb2dyZXNzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xyXG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTW9tZW50KG9iaikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG9iaiBpbnN0YW5jZW9mIE1vbWVudCB8fCAob2JqICE9IG51bGwgJiYgb2JqLl9pc0FNb21lbnRPYmplY3QgIT0gbnVsbClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhcm4obXNnKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPT09IGZhbHNlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiAnICsgbXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlKG1zZywgZm4pIHtcclxuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG51bGwsIG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICBhcmcsXHJcbiAgICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdMZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0gJ1xcblsnICsgaSArICddICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGFyZ3VtZW50c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093blByb3AoYXJndW1lbnRzWzBdLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnICs9IGtleSArICc6ICcgKyBhcmd1bWVudHNbMF1ba2V5XSArICcsICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKDAsIC0yKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGFuZCBzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG5Bcmd1bWVudHM6ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKS5qb2luKCcnKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKCkuc3RhY2tcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9LCBmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCBtc2cpIHtcclxuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHdhcm4obXNnKTtcclxuICAgICAgICAgICAgZGVwcmVjYXRpb25zW25hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XHJcbiAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAodHlwZW9mIEZ1bmN0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB8fFxyXG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXQoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHByb3AsIGk7XHJcbiAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChjb25maWcsIGkpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wID0gY29uZmlnW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIC8vIExlbmllbnQgb3JkaW5hbCBwYXJzaW5nIGFjY2VwdHMganVzdCBhIG51bWJlciBpbiBhZGRpdGlvbiB0b1xyXG4gICAgICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXHJcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxyXG4gICAgICAgIHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50ID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcclxuICAgICAgICAgICAgICAgICd8JyArXHJcbiAgICAgICAgICAgICAgICAvXFxkezEsMn0vLnNvdXJjZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY2hpbGRDb25maWcpIHtcclxuICAgICAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLFxyXG4gICAgICAgICAgICBwcm9wO1xyXG4gICAgICAgIGZvciAocHJvcCBpbiBjaGlsZENvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW3Byb3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIHBhcmVudENvbmZpZ1twcm9wXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgY2hpbGRDb25maWdbcHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1twcm9wXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gY2hpbGRDb25maWdbcHJvcF07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNbcHJvcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChwcm9wIGluIHBhcmVudENvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcHJvcCkgJiZcclxuICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcclxuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGV4dGVuZCh7fSwgcmVzW3Byb3BdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIExvY2FsZShjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleXM7XHJcblxyXG4gICAgaWYgKE9iamVjdC5rZXlzKSB7XHJcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBrZXlzID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgICAgIHJlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XHJcbiAgICAgICAgc2FtZURheTogJ1tUb2RheSBhdF0gTFQnLFxyXG4gICAgICAgIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcclxuICAgICAgICBuZXh0V2VlazogJ2RkZGQgW2F0XSBMVCcsXHJcbiAgICAgICAgbGFzdERheTogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcclxuICAgICAgICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxyXG4gICAgICAgIHNhbWVFbHNlOiAnTCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGVuZGFyKGtleSwgbW9tLCBub3cpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhclsnc2FtZUVsc2UnXTtcclxuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcclxuICAgICAgICB2YXIgYWJzTnVtYmVyID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxyXG4gICAgICAgICAgICB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGgsXHJcbiAgICAgICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgK1xyXG4gICAgICAgICAgICBhYnNOdW1iZXJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmb3JtYXR0aW5nVG9rZW5zID1cclxuICAgICAgICAgICAgLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xOezEsNX18WVlZWVlZfFlZWVlZfFlZWVl8WVl8eXsyLDR9fHlvP3xnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZyxcclxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nLFxyXG4gICAgICAgIGZvcm1hdEZ1bmN0aW9ucyA9IHt9LFxyXG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XHJcblxyXG4gICAgLy8gdG9rZW46ICAgICdNJ1xyXG4gICAgLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxyXG4gICAgLy8gb3JkaW5hbDogICdNbydcclxuICAgIC8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxyXG4gICAgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWRkZWQpIHtcclxuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yZGluYWwpIHtcclxuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcclxuICAgICAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBsZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9ICcnLFxyXG4gICAgICAgICAgICAgICAgaTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gaXNGdW5jdGlvbihhcnJheVtpXSlcclxuICAgICAgICAgICAgICAgICAgICA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XHJcbiAgICAgICAgaWYgKCFtLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcclxuICAgICAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9XHJcbiAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgdmFyIGkgPSA1O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGkgLT0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcclxuICAgICAgICBMVFM6ICdoOm1tOnNzIEEnLFxyXG4gICAgICAgIExUOiAnaDptbSBBJyxcclxuICAgICAgICBMOiAnTU0vREQvWVlZWScsXHJcbiAgICAgICAgTEw6ICdNTU1NIEQsIFlZWVknLFxyXG4gICAgICAgIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxyXG4gICAgICAgIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQoa2V5KSB7XHJcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0sXHJcbiAgICAgICAgICAgIGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xyXG5cclxuICAgICAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyXHJcbiAgICAgICAgICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh0b2spIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdNTU1NJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ01NJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ0REJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ2RkZGQnXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9rLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvaztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XHJcblxyXG4gICAgZnVuY3Rpb24gaW52YWxpZERhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWZhdWx0T3JkaW5hbCA9ICclZCcsXHJcbiAgICAgICAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9yZGluYWwobnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xyXG4gICAgICAgIGZ1dHVyZTogJ2luICVzJyxcclxuICAgICAgICBwYXN0OiAnJXMgYWdvJyxcclxuICAgICAgICBzOiAnYSBmZXcgc2Vjb25kcycsXHJcbiAgICAgICAgc3M6ICclZCBzZWNvbmRzJyxcclxuICAgICAgICBtOiAnYSBtaW51dGUnLFxyXG4gICAgICAgIG1tOiAnJWQgbWludXRlcycsXHJcbiAgICAgICAgaDogJ2FuIGhvdXInLFxyXG4gICAgICAgIGhoOiAnJWQgaG91cnMnLFxyXG4gICAgICAgIGQ6ICdhIGRheScsXHJcbiAgICAgICAgZGQ6ICclZCBkYXlzJyxcclxuICAgICAgICB3OiAnYSB3ZWVrJyxcclxuICAgICAgICB3dzogJyVkIHdlZWtzJyxcclxuICAgICAgICBNOiAnYSBtb250aCcsXHJcbiAgICAgICAgTU06ICclZCBtb250aHMnLFxyXG4gICAgICAgIHk6ICdhIHllYXInLFxyXG4gICAgICAgIHl5OiAnJWQgeWVhcnMnLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWxhdGl2ZVRpbWUobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJpbmddO1xyXG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dClcclxuICAgICAgICAgICAgPyBvdXRwdXQobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKVxyXG4gICAgICAgICAgICA6IG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhc3RGdXR1cmUoZGlmZiwgb3V0cHV0KSB7XHJcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcclxuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWxpYXNlcyA9IHtcclxuICAgICAgICBEOiAnZGF0ZScsXHJcbiAgICAgICAgZGF0ZXM6ICdkYXRlJyxcclxuICAgICAgICBkYXRlOiAnZGF0ZScsXHJcbiAgICAgICAgZDogJ2RheScsXHJcbiAgICAgICAgZGF5czogJ2RheScsXHJcbiAgICAgICAgZGF5OiAnZGF5JyxcclxuICAgICAgICBlOiAnd2Vla2RheScsXHJcbiAgICAgICAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcclxuICAgICAgICB3ZWVrZGF5OiAnd2Vla2RheScsXHJcbiAgICAgICAgRTogJ2lzb1dlZWtkYXknLFxyXG4gICAgICAgIGlzb3dlZWtkYXlzOiAnaXNvV2Vla2RheScsXHJcbiAgICAgICAgaXNvd2Vla2RheTogJ2lzb1dlZWtkYXknLFxyXG4gICAgICAgIERERDogJ2RheU9mWWVhcicsXHJcbiAgICAgICAgZGF5b2Z5ZWFyczogJ2RheU9mWWVhcicsXHJcbiAgICAgICAgZGF5b2Z5ZWFyOiAnZGF5T2ZZZWFyJyxcclxuICAgICAgICBoOiAnaG91cicsXHJcbiAgICAgICAgaG91cnM6ICdob3VyJyxcclxuICAgICAgICBob3VyOiAnaG91cicsXHJcbiAgICAgICAgbXM6ICdtaWxsaXNlY29uZCcsXHJcbiAgICAgICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmQnLFxyXG4gICAgICAgIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmQnLFxyXG4gICAgICAgIG06ICdtaW51dGUnLFxyXG4gICAgICAgIG1pbnV0ZXM6ICdtaW51dGUnLFxyXG4gICAgICAgIG1pbnV0ZTogJ21pbnV0ZScsXHJcbiAgICAgICAgTTogJ21vbnRoJyxcclxuICAgICAgICBtb250aHM6ICdtb250aCcsXHJcbiAgICAgICAgbW9udGg6ICdtb250aCcsXHJcbiAgICAgICAgUTogJ3F1YXJ0ZXInLFxyXG4gICAgICAgIHF1YXJ0ZXJzOiAncXVhcnRlcicsXHJcbiAgICAgICAgcXVhcnRlcjogJ3F1YXJ0ZXInLFxyXG4gICAgICAgIHM6ICdzZWNvbmQnLFxyXG4gICAgICAgIHNlY29uZHM6ICdzZWNvbmQnLFxyXG4gICAgICAgIHNlY29uZDogJ3NlY29uZCcsXHJcbiAgICAgICAgZ2c6ICd3ZWVrWWVhcicsXHJcbiAgICAgICAgd2Vla3llYXJzOiAnd2Vla1llYXInLFxyXG4gICAgICAgIHdlZWt5ZWFyOiAnd2Vla1llYXInLFxyXG4gICAgICAgIEdHOiAnaXNvV2Vla1llYXInLFxyXG4gICAgICAgIGlzb3dlZWt5ZWFyczogJ2lzb1dlZWtZZWFyJyxcclxuICAgICAgICBpc293ZWVreWVhcjogJ2lzb1dlZWtZZWFyJyxcclxuICAgICAgICB3OiAnd2VlaycsXHJcbiAgICAgICAgd2Vla3M6ICd3ZWVrJyxcclxuICAgICAgICB3ZWVrOiAnd2VlaycsXHJcbiAgICAgICAgVzogJ2lzb1dlZWsnLFxyXG4gICAgICAgIGlzb3dlZWtzOiAnaXNvV2VlaycsXHJcbiAgICAgICAgaXNvd2VlazogJ2lzb1dlZWsnLFxyXG4gICAgICAgIHk6ICd5ZWFyJyxcclxuICAgICAgICB5ZWFyczogJ3llYXInLFxyXG4gICAgICAgIHllYXI6ICd5ZWFyJyxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHMpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHVuaXRzID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgICA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV1cclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3QpIHtcclxuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wLFxyXG4gICAgICAgICAgICBwcm9wO1xyXG5cclxuICAgICAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9ybWFsaXplZElucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcmlvcml0aWVzID0ge1xyXG4gICAgICAgIGRhdGU6IDksXHJcbiAgICAgICAgZGF5OiAxMSxcclxuICAgICAgICB3ZWVrZGF5OiAxMSxcclxuICAgICAgICBpc29XZWVrZGF5OiAxMSxcclxuICAgICAgICBkYXlPZlllYXI6IDQsXHJcbiAgICAgICAgaG91cjogMTMsXHJcbiAgICAgICAgbWlsbGlzZWNvbmQ6IDE2LFxyXG4gICAgICAgIG1pbnV0ZTogMTQsXHJcbiAgICAgICAgbW9udGg6IDgsXHJcbiAgICAgICAgcXVhcnRlcjogNyxcclxuICAgICAgICBzZWNvbmQ6IDE1LFxyXG4gICAgICAgIHdlZWtZZWFyOiAxLFxyXG4gICAgICAgIGlzb1dlZWtZZWFyOiAxLFxyXG4gICAgICAgIHdlZWs6IDUsXHJcbiAgICAgICAgaXNvV2VlazogNSxcclxuICAgICAgICB5ZWFyOiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XHJcbiAgICAgICAgdmFyIHVuaXRzID0gW10sXHJcbiAgICAgICAgICAgIHU7XHJcbiAgICAgICAgZm9yICh1IGluIHVuaXRzT2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKHVuaXRzT2JqLCB1KSkge1xyXG4gICAgICAgICAgICAgICAgdW5pdHMucHVzaCh7IHVuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1bml0cztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWF0Y2gxID0gL1xcZC8sIC8vICAgICAgIDAgLSA5XHJcbiAgICAgICAgbWF0Y2gyID0gL1xcZFxcZC8sIC8vICAgICAgMDAgLSA5OVxyXG4gICAgICAgIG1hdGNoMyA9IC9cXGR7M30vLCAvLyAgICAgMDAwIC0gOTk5XHJcbiAgICAgICAgbWF0Y2g0ID0gL1xcZHs0fS8sIC8vICAgIDAwMDAgLSA5OTk5XHJcbiAgICAgICAgbWF0Y2g2ID0gL1srLV0/XFxkezZ9LywgLy8gLTk5OTk5OSAtIDk5OTk5OVxyXG4gICAgICAgIG1hdGNoMXRvMiA9IC9cXGRcXGQ/LywgLy8gICAgICAgMCAtIDk5XHJcbiAgICAgICAgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vLCAvLyAgICAgOTk5IC0gOTk5OVxyXG4gICAgICAgIG1hdGNoNXRvNiA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LywgLy8gICA5OTk5OSAtIDk5OTk5OVxyXG4gICAgICAgIG1hdGNoMXRvMyA9IC9cXGR7MSwzfS8sIC8vICAgICAgIDAgLSA5OTlcclxuICAgICAgICBtYXRjaDF0bzQgPSAvXFxkezEsNH0vLCAvLyAgICAgICAwIC0gOTk5OVxyXG4gICAgICAgIG1hdGNoMXRvNiA9IC9bKy1dP1xcZHsxLDZ9LywgLy8gLTk5OTk5OSAtIDk5OTk5OVxyXG4gICAgICAgIG1hdGNoVW5zaWduZWQgPSAvXFxkKy8sIC8vICAgICAgIDAgLSBpbmZcclxuICAgICAgICBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvLCAvLyAgICAtaW5mIC0gaW5mXHJcbiAgICAgICAgbWF0Y2hPZmZzZXQgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2ksIC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxyXG4gICAgICAgIG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naSwgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcclxuICAgICAgICBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy8sIC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXHJcbiAgICAgICAgLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXHJcbiAgICAgICAgLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xyXG4gICAgICAgIG1hdGNoV29yZCA9XHJcbiAgICAgICAgICAgIC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkYwN1xcdUZGMTAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pLFxyXG4gICAgICAgIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8gPSAvXlsxLTldXFxkPy8sIC8vICAgICAgICAgMS05OVxyXG4gICAgICAgIG1hdGNoMXRvMkhhc1plcm8gPSAvXihbMS05XVxcZHxcXGQpLywgLy8gICAgICAgICAgIDAtOTlcclxuICAgICAgICByZWdleGVzO1xyXG5cclxuICAgIHJlZ2V4ZXMgPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuLCByZWdleCwgc3RyaWN0UmVnZXgpIHtcclxuICAgICAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpXHJcbiAgICAgICAgICAgID8gcmVnZXhcclxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4ID8gc3RyaWN0UmVnZXggOiByZWdleDtcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxyXG4gICAgZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xyXG4gICAgICAgIHJldHVybiByZWdleEVzY2FwZShcclxuICAgICAgICAgICAgc1xyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWdleEVzY2FwZShzKSB7XHJcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWJzRmxvb3IobnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcclxuICAgICAgICAgICAgLy8gLTAgLT4gMFxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XHJcbiAgICAgICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcclxuICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG5cclxuICAgICAgICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0b2tlbnMgPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRQYXJzZVRva2VuKHRva2VuLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICBmdW5jID0gY2FsbGJhY2ssXHJcbiAgICAgICAgICAgIHRva2VuTGVuO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gW3Rva2VuXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2tlbkxlbiA9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5MZW47IGkrKykge1xyXG4gICAgICAgICAgICB0b2tlbnNbdG9rZW5baV1dID0gZnVuYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4odG9rZW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xyXG4gICAgICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgdG9rZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xyXG4gICAgICAgICAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcclxuICAgICAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFlFQVIgPSAwLFxyXG4gICAgICAgIE1PTlRIID0gMSxcclxuICAgICAgICBEQVRFID0gMixcclxuICAgICAgICBIT1VSID0gMyxcclxuICAgICAgICBNSU5VVEUgPSA0LFxyXG4gICAgICAgIFNFQ09ORCA9IDUsXHJcbiAgICAgICAgTUlMTElTRUNPTkQgPSA2LFxyXG4gICAgICAgIFdFRUsgPSA3LFxyXG4gICAgICAgIFdFRUtEQVkgPSA4O1xyXG5cclxuICAgIC8vIEZPUk1BVFRJTkdcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignWScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xyXG4gICAgICAgIHJldHVybiB5IDw9IDk5OTkgPyB6ZXJvRmlsbCh5LCA0KSA6ICcrJyArIHk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCA0XSwgMCwgJ3llYXInKTtcclxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCA1XSwgMCwgJ3llYXInKTtcclxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIDAsICd5ZWFyJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVknLCBtYXRjaDF0bzQsIG1hdGNoNCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuXHJcbiAgICBhZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xyXG4gICAgYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcclxuICAgICAgICBhcnJheVtZRUFSXSA9XHJcbiAgICAgICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcclxuICAgIH0pO1xyXG4gICAgYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XHJcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XHJcbiAgICB9KTtcclxuICAgIGFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XHJcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSEVMUEVSU1xyXG5cclxuICAgIGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xyXG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhPT0tTXHJcblxyXG4gICAgaG9va3MucGFyc2VUd29EaWdpdFllYXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBNT01FTlRTXHJcblxyXG4gICAgdmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldElzTGVhcFllYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VHZXRTZXQodW5pdCwga2VlcFRpbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQkMSh0aGlzLCB1bml0LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXQobW9tLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOYU47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZCA9IG1vbS5fZCxcclxuICAgICAgICAgICAgaXNVVEMgPSBtb20uX2lzVVRDO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnTWlsbGlzZWNvbmRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgOiBkLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gICAgICAgICAgICBjYXNlICdTZWNvbmRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDU2Vjb25kcygpIDogZC5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ01pbnV0ZXMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNaW51dGVzKCkgOiBkLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgY2FzZSAnSG91cnMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENIb3VycygpIDogZC5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICBjYXNlICdEYXRlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRGF0ZSgpIDogZC5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RheSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ0RheSgpIDogZC5nZXREYXkoKTtcclxuICAgICAgICAgICAgY2FzZSAnTW9udGgnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNb250aCgpIDogZC5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICBjYXNlICdGdWxsWWVhcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNVVEMgPyBkLmdldFVUQ0Z1bGxZZWFyKCkgOiBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOOyAvLyBKdXN0IGluIGNhc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0JDEobW9tLCB1bml0LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBkLCBpc1VUQywgeWVhciwgbW9udGgsIGRhdGU7XHJcblxyXG4gICAgICAgIGlmICghbW9tLmlzVmFsaWQoKSB8fCBpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZCA9IG1vbS5fZDtcclxuICAgICAgICBpc1VUQyA9IG1vbS5faXNVVEM7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgICAgICBjYXNlICdNaWxsaXNlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IGQuc2V0TWlsbGlzZWNvbmRzKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENTZWNvbmRzKHZhbHVlKSA6IGQuc2V0U2Vjb25kcyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBjYXNlICdNaW51dGVzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkLnNldE1pbnV0ZXModmFsdWUpKTtcclxuICAgICAgICAgICAgY2FzZSAnSG91cnMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENIb3Vycyh2YWx1ZSkgOiBkLnNldEhvdXJzKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENEYXRlKHZhbHVlKSA6IGQuc2V0RGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAvLyBjYXNlICdEYXknOiAvLyBOb3QgcmVhbFxyXG4gICAgICAgICAgICAvLyAgICByZXR1cm4gdm9pZCAoaXNVVEMgPyBkLnNldFVUQ0RheSh2YWx1ZSkgOiBkLnNldERheSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAvLyBjYXNlICdNb250aCc6IC8vIE5vdCB1c2VkIGJlY2F1c2Ugd2UgbmVlZCB0byBwYXNzIHR3byB2YXJpYWJsZXNcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDTW9udGgodmFsdWUpIDogZC5zZXRNb250aCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICBjYXNlICdGdWxsWWVhcic6XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gU2VlIGJlbG93IC4uLlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBKdXN0IGluIGNhc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHllYXIgPSB2YWx1ZTtcclxuICAgICAgICBtb250aCA9IG1vbS5tb250aCgpO1xyXG4gICAgICAgIGRhdGUgPSBtb20uZGF0ZSgpO1xyXG4gICAgICAgIGRhdGUgPSBkYXRlID09PSAyOSAmJiBtb250aCA9PT0gMSAmJiAhaXNMZWFwWWVhcih5ZWFyKSA/IDI4IDogZGF0ZTtcclxuICAgICAgICB2b2lkIChpc1VUQ1xyXG4gICAgICAgICAgICA/IGQuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIGRhdGUpXHJcbiAgICAgICAgICAgIDogZC5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1PTUVOVFNcclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpbmdHZXQodW5pdHMpIHtcclxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmluZ1NldCh1bml0cywgdmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVuaXRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKHVuaXRzKTtcclxuICAgICAgICAgICAgdmFyIHByaW9yaXRpemVkID0gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0cyksXHJcbiAgICAgICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdGl6ZWRMZW4gPSBwcmlvcml0aXplZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmlvcml0aXplZExlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ByaW9yaXRpemVkW2ldLnVuaXRdKHVuaXRzW3ByaW9yaXRpemVkW2ldLnVuaXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xyXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW9kKG4sIHgpIHtcclxuICAgICAgICByZXR1cm4gKChuICUgeCkgKyB4KSAlIHg7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4T2Y7XHJcblxyXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XHJcbiAgICAgICAgaW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbmRleE9mID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgLy8gSSBrbm93XHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IG8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xyXG4gICAgICAgIGlmIChpc05hTih5ZWFyKSB8fCBpc05hTihtb250aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5hTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vZE1vbnRoID0gbW9kKG1vbnRoLCAxMik7XHJcbiAgICAgICAgeWVhciArPSAobW9udGggLSBtb2RNb250aCkgLyAxMjtcclxuICAgICAgICByZXR1cm4gbW9kTW9udGggPT09IDFcclxuICAgICAgICAgICAgPyBpc0xlYXBZZWFyKHllYXIpXHJcbiAgICAgICAgICAgICAgICA/IDI5XHJcbiAgICAgICAgICAgICAgICA6IDI4XHJcbiAgICAgICAgICAgIDogMzEgLSAoKG1vZE1vbnRoICUgNykgJSAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGT1JNQVRUSU5HXHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb250aCgpICsgMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCdNTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQQVJTSU5HXHJcblxyXG4gICAgYWRkUmVnZXhUb2tlbignTScsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcclxuICAgIH0pO1xyXG4gICAgYWRkUmVnZXhUb2tlbignTU1NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XHJcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gY29uZmlnLl9sb2NhbGUubW9udGhzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XHJcbiAgICAgICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXHJcbiAgICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYXJyYXlbTU9OVEhdID0gbW9udGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTE9DQUxFU1xyXG5cclxuICAgIHZhciBkZWZhdWx0TG9jYWxlTW9udGhzID1cclxuICAgICAgICAgICAgJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxyXG4gICAgICAgICAgICAgICAgJ18nXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID1cclxuICAgICAgICAgICAgJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxyXG4gICAgICAgIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy8sXHJcbiAgICAgICAgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXHJcbiAgICAgICAgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvY2FsZU1vbnRocyhtLCBmb3JtYXQpIHtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9tb250aHNcclxuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzWydzdGFuZGFsb25lJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocylcclxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNbbS5tb250aCgpXVxyXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1tcclxuICAgICAgICAgICAgICAgICAgKHRoaXMuX21vbnRocy5pc0Zvcm1hdCB8fCBNT05USFNfSU5fRk9STUFUKS50ZXN0KGZvcm1hdClcclxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Zvcm1hdCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgICAgICAgXVttLm1vbnRoKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvY2FsZU1vbnRoc1Nob3J0KG0sIGZvcm1hdCkge1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcclxuICAgICAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRcclxuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRbJ3N0YW5kYWxvbmUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpXHJcbiAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRbbS5tb250aCgpXVxyXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0W1xyXG4gICAgICAgICAgICAgICAgICBNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXHJcbiAgICAgICAgICAgICAgXVttLm1vbnRoKCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgaWksXHJcbiAgICAgICAgICAgIG1vbSxcclxuICAgICAgICAgICAgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXHJcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0cmljdCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcclxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcclxuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XHJcbiAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcclxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXHJcbiAgICAgICAgLy8gc2VlIHNvcnRpbmcgaW4gY29tcHV0ZU1vbnRoc1BhcnNlXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XHJcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xyXG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcclxuICAgICAgICAgICAgICAgICAgICAnaSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2knXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgcmVnZXggPVxyXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ01NTU0nICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ01NTScgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1PTUVOVFNcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNb250aChtb20sIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIE5vIG9wXHJcbiAgICAgICAgICAgIHJldHVybiBtb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdG9JbnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEFub3RoZXIgc2lsZW50IGZhaWx1cmU/XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtb250aCA9IHZhbHVlLFxyXG4gICAgICAgICAgICBkYXRlID0gbW9tLmRhdGUoKTtcclxuXHJcbiAgICAgICAgZGF0ZSA9IGRhdGUgPCAyOSA/IGRhdGUgOiBNYXRoLm1pbihkYXRlLCBkYXlzSW5Nb250aChtb20ueWVhcigpLCBtb250aCkpO1xyXG4gICAgICAgIHZvaWQgKG1vbS5faXNVVENcclxuICAgICAgICAgICAgPyBtb20uX2Quc2V0VVRDTW9udGgobW9udGgsIGRhdGUpXHJcbiAgICAgICAgICAgIDogbW9tLl9kLnNldE1vbnRoKG1vbnRoLCBkYXRlKSk7XHJcbiAgICAgICAgcmV0dXJuIG1vbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZXRNb250aCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNldE1vbnRoKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsICdNb250aCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCgpIHtcclxuICAgICAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW9udGhzU2hvcnRSZWdleChpc1N0cmljdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXhcclxuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW9udGhzUmVnZXgoaXNTdHJpY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xyXG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTdHJpY3RSZWdleFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNSZWdleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcHV0ZU1vbnRoc1BhcnNlKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNob3J0UGllY2VzID0gW10sXHJcbiAgICAgICAgICAgIGxvbmdQaWVjZXMgPSBbXSxcclxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMgPSBbXSxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgbW9tLFxyXG4gICAgICAgICAgICBzaG9ydFAsXHJcbiAgICAgICAgICAgIGxvbmdQO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxyXG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcclxuICAgICAgICAgICAgc2hvcnRQID0gcmVnZXhFc2NhcGUodGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XHJcbiAgICAgICAgICAgIGxvbmdQID0gcmVnZXhFc2NhcGUodGhpcy5tb250aHMobW9tLCAnJykpO1xyXG4gICAgICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0UCk7XHJcbiAgICAgICAgICAgIGxvbmdQaWVjZXMucHVzaChsb25nUCk7XHJcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ1ApO1xyXG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0UCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcclxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXHJcbiAgICAgICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuXHJcbiAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XHJcbiAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xyXG4gICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLFxyXG4gICAgICAgICAgICAnaSdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLFxyXG4gICAgICAgICAgICAnaSdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcclxuICAgICAgICAvLyBjYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcclxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XHJcbiAgICAgICAgdmFyIGRhdGU7XHJcbiAgICAgICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XHJcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkLCBoLCBNLCBzLCBtcyk7XHJcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVUQ0RhdGUoeSkge1xyXG4gICAgICAgIHZhciBkYXRlLCBhcmdzO1xyXG4gICAgICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcclxuICAgICAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcclxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XHJcbiAgICAgICAgICAgIGFyZ3NbMF0gPSB5ICsgNDAwO1xyXG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJncykpO1xyXG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXJ0LW9mLWZpcnN0LXdlZWsgLSBzdGFydC1vZi15ZWFyXHJcbiAgICBmdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpIHtcclxuICAgICAgICB2YXIgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXHJcbiAgICAgICAgICAgIGZ3ZCA9IDcgKyBkb3cgLSBkb3ksXHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcclxuICAgICAgICAgICAgZndkbHcgPSAoNyArIGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdykgJSA3O1xyXG5cclxuICAgICAgICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxyXG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XHJcbiAgICAgICAgdmFyIGxvY2FsV2Vla2RheSA9ICg3ICsgd2Vla2RheSAtIGRvdykgJSA3LFxyXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcclxuICAgICAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcclxuICAgICAgICAgICAgcmVzWWVhcixcclxuICAgICAgICAgICAgcmVzRGF5T2ZZZWFyO1xyXG5cclxuICAgICAgICBpZiAoZGF5T2ZZZWFyIDw9IDApIHtcclxuICAgICAgICAgICAgcmVzWWVhciA9IHllYXIgLSAxO1xyXG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xyXG4gICAgICAgICAgICByZXNZZWFyID0geWVhciArIDE7XHJcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzWWVhciA9IHllYXI7XHJcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHllYXI6IHJlc1llYXIsXHJcbiAgICAgICAgICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XHJcbiAgICAgICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQobW9tLnllYXIoKSwgZG93LCBkb3kpLFxyXG4gICAgICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxyXG4gICAgICAgICAgICByZXNXZWVrLFxyXG4gICAgICAgICAgICByZXNZZWFyO1xyXG5cclxuICAgICAgICBpZiAod2VlayA8IDEpIHtcclxuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgLSAxO1xyXG4gICAgICAgICAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcclxuICAgICAgICAgICAgcmVzV2VlayA9IHdlZWsgLSB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSk7XHJcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpICsgMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKTtcclxuICAgICAgICAgICAgcmVzV2VlayA9IHdlZWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3ZWVrOiByZXNXZWVrLFxyXG4gICAgICAgICAgICB5ZWFyOiByZXNZZWFyLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhciwgZG93LCBkb3kpIHtcclxuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXHJcbiAgICAgICAgICAgIHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XHJcbiAgICAgICAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRk9STUFUVElOR1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCd3JywgWyd3dycsIDJdLCAnd28nLCAnd2VlaycpO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMl0sICdXbycsICdpc29XZWVrJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ3cnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xyXG4gICAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdXJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG5cclxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFxyXG4gICAgICAgIFsndycsICd3dycsICdXJywgJ1dXJ10sXHJcbiAgICAgICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XHJcbiAgICAgICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIC8vIEhFTFBFUlNcclxuXHJcbiAgICAvLyBMT0NBTEVTXHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vlayhtb20pIHtcclxuICAgICAgICByZXR1cm4gd2Vla09mWWVhcihtb20sIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSkud2VlaztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWsgPSB7XHJcbiAgICAgICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgICAgICBkb3k6IDYsIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDZ0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZldlZWsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZZZWFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNT01FTlRTXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2V0V2VlayhpbnB1dCkge1xyXG4gICAgICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcclxuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayhpbnB1dCkge1xyXG4gICAgICAgIHZhciB3ZWVrID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS53ZWVrO1xyXG4gICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGT1JNQVRUSU5HXHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2QnLCAwLCAnZG8nLCAnZGF5Jyk7XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c01pbih0aGlzLCBmb3JtYXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignZScsIDAsIDAsICd3ZWVrZGF5Jyk7XHJcbiAgICBhZGRGb3JtYXRUb2tlbignRScsIDAsIDAsICdpc29XZWVrZGF5Jyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ2QnLCBtYXRjaDF0bzIpO1xyXG4gICAgYWRkUmVnZXhUb2tlbignZScsIG1hdGNoMXRvMik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdFJywgbWF0Y2gxdG8yKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xyXG4gICAgfSk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcclxuICAgIH0pO1xyXG4gICAgYWRkUmVnZXhUb2tlbignZGRkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZGQnLCAnZGRkJywgJ2RkZGQnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XHJcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xyXG4gICAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxyXG4gICAgICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9IGlucHV0O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XHJcbiAgICAgICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIRUxQRVJTXHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMT0NBTEVTXHJcbiAgICBmdW5jdGlvbiBzaGlmdFdlZWtkYXlzKHdzLCBuKSB7XHJcbiAgICAgICAgcmV0dXJuIHdzLnNsaWNlKG4sIDcpLmNvbmNhdCh3cy5zbGljZSgwLCBuKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9XHJcbiAgICAgICAgICAgICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcclxuICAgICAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXHJcbiAgICAgICAgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxyXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkLFxyXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXHJcbiAgICAgICAgZGVmYXVsdFdlZWtkYXlzTWluUmVnZXggPSBtYXRjaFdvcmQ7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMobSwgZm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIHdlZWtkYXlzID0gaXNBcnJheSh0aGlzLl93ZWVrZGF5cylcclxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1xyXG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzW1xyXG4gICAgICAgICAgICAgICAgICBtICYmIG0gIT09IHRydWUgJiYgdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICdmb3JtYXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIG0gPT09IHRydWVcclxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcclxuICAgICAgICAgICAgOiBtXHJcbiAgICAgICAgICAgICAgPyB3ZWVrZGF5c1ttLmRheSgpXVxyXG4gICAgICAgICAgICAgIDogd2Vla2RheXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNTaG9ydChtKSB7XHJcbiAgICAgICAgcmV0dXJuIG0gPT09IHRydWVcclxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHRoaXMuX3dlZWtkYXlzU2hvcnQsIHRoaXMuX3dlZWsuZG93KVxyXG4gICAgICAgICAgICA6IG1cclxuICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbbS5kYXkoKV1cclxuICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4obSkge1xyXG4gICAgICAgIHJldHVybiBtID09PSB0cnVlXHJcbiAgICAgICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c01pbiwgdGhpcy5fd2Vlay5kb3cpXHJcbiAgICAgICAgICAgIDogbVxyXG4gICAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV1cclxuICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzTWluO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlJDEod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XHJcbiAgICAgICAgdmFyIGksXHJcbiAgICAgICAgICAgIGlpLFxyXG4gICAgICAgICAgICBtb20sXHJcbiAgICAgICAgICAgIGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0cmljdCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcclxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcclxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcclxuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xyXG4gICAgICAgIHZhciBpLCBtb20sIHJlZ2V4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZSQxLmNhbGwodGhpcywgd2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxyXG5cclxuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xyXG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcclxuICAgICAgICAgICAgICAgICAgICAnaSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcXFwuPycpICsgJyQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcclxuICAgICAgICAgICAgICAgICAgICAnaSdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZWdleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgJ14nICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzKG1vbSwgJycpICtcclxuICAgICAgICAgICAgICAgICAgICAnfF4nICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICd8XicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnZGRkZCcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkZCcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPT09ICdkZCcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1PTUVOVFNcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsoaW5wdXQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXkgPSBnZXQodGhpcywgJ0RheScpO1xyXG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChpbnB1dCAtIGRheSwgJ2QnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZXRMb2NhbGVEYXlPZldlZWsoaW5wdXQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcclxuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWtkYXkgOiB0aGlzLmFkZChpbnB1dCAtIHdlZWtkYXksICdkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2V0SVNPRGF5T2ZXZWVrKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XHJcbiAgICAgICAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcclxuICAgICAgICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXHJcblxyXG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2Vla2RheXNSZWdleChpc1N0cmljdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcclxuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXhcclxuICAgICAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNSZWdleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xyXG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcclxuICAgICAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4XHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2Vla2RheXNNaW5SZWdleChpc1N0cmljdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcclxuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXhcclxuICAgICAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWluUGllY2VzID0gW10sXHJcbiAgICAgICAgICAgIHNob3J0UGllY2VzID0gW10sXHJcbiAgICAgICAgICAgIGxvbmdQaWVjZXMgPSBbXSxcclxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMgPSBbXSxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgbW9tLFxyXG4gICAgICAgICAgICBtaW5wLFxyXG4gICAgICAgICAgICBzaG9ydHAsXHJcbiAgICAgICAgICAgIGxvbmdwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XHJcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcclxuICAgICAgICAgICAgbWlucCA9IHJlZ2V4RXNjYXBlKHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykpO1xyXG4gICAgICAgICAgICBzaG9ydHAgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykpO1xyXG4gICAgICAgICAgICBsb25ncCA9IHJlZ2V4RXNjYXBlKHRoaXMud2Vla2RheXMobW9tLCAnJykpO1xyXG4gICAgICAgICAgICBtaW5QaWVjZXMucHVzaChtaW5wKTtcclxuICAgICAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xyXG4gICAgICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xyXG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKG1pbnApO1xyXG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XHJcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcclxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXHJcbiAgICAgICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgICAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICAgICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICAgICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG5cclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XHJcblxyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsXHJcbiAgICAgICAgICAgICdpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcclxuICAgICAgICAgICAgJ2knXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgJ14oJyArIG1pblBpZWNlcy5qb2luKCd8JykgKyAnKScsXHJcbiAgICAgICAgICAgICdpJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRk9STUFUVElOR1xyXG5cclxuICAgIGZ1bmN0aW9uIGhGb3JtYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKSAlIDEyIHx8IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGtGb3JtYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyXSwgMCwgJ2hvdXInKTtcclxuICAgIGFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDJdLCAwLCBoRm9ybWF0KTtcclxuICAgIGFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDJdLCAwLCBrRm9ybWF0KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignaG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignaG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgJycgK1xyXG4gICAgICAgICAgICBoRm9ybWF0LmFwcGx5KHRoaXMpICtcclxuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcclxuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCdIbW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICcnICsgdGhpcy5ob3VycygpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICcnICtcclxuICAgICAgICAgICAgdGhpcy5ob3VycygpICtcclxuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcclxuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuLCBsb3dlcmNhc2UpIHtcclxuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubWVyaWRpZW0oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgICAgIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XHJcbiAgICBtZXJpZGllbSgnQScsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBQQVJTSU5HXHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRSZWdleFRva2VuKCdhJywgbWF0Y2hNZXJpZGllbSk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdBJywgbWF0Y2hNZXJpZGllbSk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdIJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJIYXNaZXJvKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ2gnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xyXG4gICAgYWRkUmVnZXhUb2tlbignaycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gICAgYWRkUmVnZXhUb2tlbigna2snLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcblxyXG4gICAgYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XHJcblxyXG4gICAgYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XHJcbiAgICBhZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgICAgICB2YXIga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xyXG4gICAgICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XHJcbiAgICB9KTtcclxuICAgIGFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XHJcbiAgICAgICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xyXG4gICAgfSk7XHJcbiAgICBhZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XHJcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XHJcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgICAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXHJcbiAgICAgICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xyXG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcclxuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcclxuICAgICAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XHJcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XHJcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcclxuICAgIH0pO1xyXG4gICAgYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgICAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXHJcbiAgICAgICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xyXG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcclxuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcclxuICAgICAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIExPQ0FMRVNcclxuXHJcbiAgICBmdW5jdGlvbiBsb2NhbGVJc1BNKGlucHV0KSB7XHJcbiAgICAgICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xyXG4gICAgICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxyXG4gICAgICAgIHJldHVybiAoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaSxcclxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcclxuICAgICAgICAvLyBzcGVjaWZpZWQgd2hpY2ggaG91ciB0aGV5IHdhbnQuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxyXG4gICAgICAgIC8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xyXG4gICAgICAgIC8vIHRoaXMgcnVsZS5cclxuICAgICAgICBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2NhbGVNZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xyXG4gICAgICAgIGlmIChob3VycyA+IDExKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhc2VDb25maWcgPSB7XHJcbiAgICAgICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcclxuICAgICAgICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxyXG4gICAgICAgIGludmFsaWREYXRlOiBkZWZhdWx0SW52YWxpZERhdGUsXHJcbiAgICAgICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXHJcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXHJcbiAgICAgICAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxyXG5cclxuICAgICAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXHJcbiAgICAgICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcclxuXHJcbiAgICAgICAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXHJcblxyXG4gICAgICAgIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXHJcbiAgICAgICAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcclxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcclxuXHJcbiAgICAgICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcclxuICAgIHZhciBsb2NhbGVzID0ge30sXHJcbiAgICAgICAgbG9jYWxlRmFtaWxpZXMgPSB7fSxcclxuICAgICAgICBnbG9iYWxMb2NhbGU7XHJcblxyXG4gICAgZnVuY3Rpb24gY29tbW9uUHJlZml4KGFycjEsIGFycjIpIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgbWlubCA9IE1hdGgubWluKGFycjEubGVuZ3RoLCBhcnIyLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1pbmw7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbmw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xyXG4gICAgICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcclxuICAgIC8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXHJcbiAgICAvLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LCBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XHJcbiAgICBmdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXMpIHtcclxuICAgICAgICB2YXIgaSA9IDAsXHJcbiAgICAgICAgICAgIGosXHJcbiAgICAgICAgICAgIG5leHQsXHJcbiAgICAgICAgICAgIGxvY2FsZSxcclxuICAgICAgICAgICAgc3BsaXQ7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcclxuICAgICAgICAgICAgd2hpbGUgKGogPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBuZXh0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5sZW5ndGggPj0gaiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vblByZWZpeChzcGxpdCwgbmV4dCkgPj0gaiAtIDFcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGotLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMb2NhbGVOYW1lU2FuZShuYW1lKSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBuYW1lcyB0aGF0IGxvb2sgbGlrZSBmaWxlc3lzdGVtIHBhdGhzLCBpLmUgY29udGFpbiAnLycgb3IgJ1xcJ1xyXG4gICAgICAgIC8vIEVuc3VyZSBuYW1lIGlzIGF2YWlsYWJsZSBhbmQgZnVuY3Rpb24gcmV0dXJucyBib29sZWFuXHJcbiAgICAgICAgcmV0dXJuICEhKG5hbWUgJiYgbmFtZS5tYXRjaCgnXlteL1xcXFxcXFxcXSokJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZSkge1xyXG4gICAgICAgIHZhciBvbGRMb2NhbGUgPSBudWxsLFxyXG4gICAgICAgICAgICBhbGlhc2VkUmVxdWlyZTtcclxuICAgICAgICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgIG1vZHVsZSAmJlxyXG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyAmJlxyXG4gICAgICAgICAgICBpc0xvY2FsZU5hbWVTYW5lKG5hbWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XHJcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XHJcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgbm90IGZvdW5kIHRvIGF2b2lkIHJlcGVhdGluZyBleHBlbnNpdmUgZmlsZSByZXF1aXJlIGNhbGwgY2F1c2luZyBoaWdoIENQVVxyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0cnlpbmcgdG8gZmluZCBlbi1VUywgZW5fVVMsIGVuLXVzIGZvciBldmVyeSBmb3JtYXQgY2FsbFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG51bGw7IC8vIG51bGwgbWVhbnMgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXHJcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxyXG4gICAgLy8gbG9jYWxlIGtleS5cclxuICAgIGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXksIHZhbHVlcykge1xyXG4gICAgICAgIHZhciBkYXRhO1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3dhcm4gdXNlciBpZiBhcmd1bWVudHMgYXJlIHBhc3NlZCBidXQgdGhlIGxvY2FsZSBjb3VsZCBub3QgYmUgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTG9jYWxlICcgKyBrZXkgKyAnIG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gbG9hZCBpdD8nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZS5fYWJicjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgbG9jYWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcclxuICAgICAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RlZmluZUxvY2FsZU92ZXJyaWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAndXNlIG1vbWVudC51cGRhdGVMb2NhbGUobG9jYWxlTmFtZSwgY29uZmlnKSB0byBjaGFuZ2UgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb25maWcpIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RlZmluZS1sb2NhbGUvIGZvciBtb3JlIGluZm8uJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbbmFtZV0uX2NvbmZpZztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoY29uZmlnLnBhcmVudExvY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZS5fY29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cclxuICAgICAgICAgICAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXHJcbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xyXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2FsZSxcclxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSxcclxuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XHJcblxyXG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsICYmIGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjaGlsZCBsb2NhbGUgaW4tcGxhY2UgdG8gYXZvaWQgbWVtb3J5LWxlYWtzXHJcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdLnNldChtZXJnZUNvbmZpZ3MobG9jYWxlc1tuYW1lXS5fY29uZmlnLCBjb25maWcpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE1FUkdFXHJcbiAgICAgICAgICAgICAgICB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gdG1wTG9jYWxlLl9jb25maWc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcExvY2FsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlTG9jYWxlIGlzIGNhbGxlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGFiYnIgc28gaXQgd2lsbCBoYXZlIGEgbmFtZSAoZ2V0dGVycyByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgb3RoZXJ3aXNlKS5cclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBuZXcgTG9jYWxlKGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxyXG4gICAgICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcclxuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IGdldFNldEdsb2JhbExvY2FsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgbG9jYWxlIGRhdGFcclxuICAgIGZ1bmN0aW9uIGdldExvY2FsZShrZXkpIHtcclxuICAgICAgICB2YXIgbG9jYWxlO1xyXG5cclxuICAgICAgICBpZiAoa2V5ICYmIGtleS5fbG9jYWxlICYmIGtleS5fbG9jYWxlLl9hYmJyKSB7XHJcbiAgICAgICAgICAgIGtleSA9IGtleS5fbG9jYWxlLl9hYmJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcclxuICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNob29zZUxvY2FsZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xyXG4gICAgICAgIHJldHVybiBrZXlzKGxvY2FsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cobSkge1xyXG4gICAgICAgIHZhciBvdmVyZmxvdyxcclxuICAgICAgICAgICAgYSA9IG0uX2E7XHJcblxyXG4gICAgICAgIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9PT0gLTIpIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cgPVxyXG4gICAgICAgICAgICAgICAgYVtNT05USF0gPCAwIHx8IGFbTU9OVEhdID4gMTFcclxuICAgICAgICAgICAgICAgICAgICA/IE1PTlRIXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IERBVEVcclxuICAgICAgICAgICAgICAgICAgICAgIDogYVtIT1VSXSA8IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhW0hPVVJdID4gMjQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYVtIT1VSXSA9PT0gMjQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFbTUlOVVRFXSAhPT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtTRUNPTkRdICE9PSAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW01JTExJU0VDT05EXSAhPT0gMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gSE9VUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFbTUlOVVRFXSA8IDAgfHwgYVtNSU5VVEVdID4gNTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IE1JTlVURVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYVtTRUNPTkRdIDwgMCB8fCBhW1NFQ09ORF0gPiA1OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTRUNPTkRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYVtNSUxMSVNFQ09ORF0gPCAwIHx8IGFbTUlMTElTRUNPTkRdID4gOTk5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gTUlMTElTRUNPTkRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiZcclxuICAgICAgICAgICAgICAgIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gREFURTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpc28gODYwMSByZWdleFxyXG4gICAgLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXHJcbiAgICB2YXIgZXh0ZW5kZWRJc29SZWdleCA9XHJcbiAgICAgICAgICAgIC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxyXG4gICAgICAgIGJhc2ljSXNvUmVnZXggPVxyXG4gICAgICAgICAgICAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkfCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxyXG4gICAgICAgIHR6UmVnZXggPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy8sXHJcbiAgICAgICAgaXNvRGF0ZXMgPSBbXHJcbiAgICAgICAgICAgIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkXFxkLVxcZFxcZC9dLFxyXG4gICAgICAgICAgICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvXSxcclxuICAgICAgICAgICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkL10sXHJcbiAgICAgICAgICAgIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZFxcZC8sIGZhbHNlXSxcclxuICAgICAgICAgICAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9L10sXHJcbiAgICAgICAgICAgIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxyXG4gICAgICAgICAgICBbJ1lZWVlZWU1NREQnLCAvWystXVxcZHsxMH0vXSxcclxuICAgICAgICAgICAgWydZWVlZTU1ERCcsIC9cXGR7OH0vXSxcclxuICAgICAgICAgICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcclxuICAgICAgICAgICAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcclxuICAgICAgICAgICAgWydZWVlZREREJywgL1xcZHs3fS9dLFxyXG4gICAgICAgICAgICBbJ1lZWVlNTScsIC9cXGR7Nn0vLCBmYWxzZV0sXHJcbiAgICAgICAgICAgIFsnWVlZWScsIC9cXGR7NH0vLCBmYWxzZV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXHJcbiAgICAgICAgaXNvVGltZXMgPSBbXHJcbiAgICAgICAgICAgIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcclxuICAgICAgICAgICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcclxuICAgICAgICAgICAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxyXG4gICAgICAgICAgICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcclxuICAgICAgICAgICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXHJcbiAgICAgICAgICAgIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcclxuICAgICAgICAgICAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXHJcbiAgICAgICAgICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcclxuICAgICAgICAgICAgWydISCcsIC9cXGRcXGQvXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoLT9cXGQrKS9pLFxyXG4gICAgICAgIC8vIFJGQyAyODIyIHJlZ2V4OiBGb3IgZGV0YWlscyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjc2VjdGlvbi0zLjNcclxuICAgICAgICByZmMyODIyID1cclxuICAgICAgICAgICAgL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLyxcclxuICAgICAgICBvYnNPZmZzZXRzID0ge1xyXG4gICAgICAgICAgICBVVDogMCxcclxuICAgICAgICAgICAgR01UOiAwLFxyXG4gICAgICAgICAgICBFRFQ6IC00ICogNjAsXHJcbiAgICAgICAgICAgIEVTVDogLTUgKiA2MCxcclxuICAgICAgICAgICAgQ0RUOiAtNSAqIDYwLFxyXG4gICAgICAgICAgICBDU1Q6IC02ICogNjAsXHJcbiAgICAgICAgICAgIE1EVDogLTYgKiA2MCxcclxuICAgICAgICAgICAgTVNUOiAtNyAqIDYwLFxyXG4gICAgICAgICAgICBQRFQ6IC03ICogNjAsXHJcbiAgICAgICAgICAgIFBTVDogLTggKiA2MCxcclxuICAgICAgICB9O1xyXG5cclxuICAgIC8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XHJcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICBsLFxyXG4gICAgICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXHJcbiAgICAgICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXHJcbiAgICAgICAgICAgIGFsbG93VGltZSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdCxcclxuICAgICAgICAgICAgdGltZUZvcm1hdCxcclxuICAgICAgICAgICAgdHpGb3JtYXQsXHJcbiAgICAgICAgICAgIGlzb0RhdGVzTGVuID0gaXNvRGF0ZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpc29UaW1lc0xlbiA9IGlzb1RpbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlc0xlbjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IGlzb0RhdGVzW2ldWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobWF0Y2hbM10pIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lc0xlbjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaFsyXSBzaG91bGQgYmUgJ1QnIG9yIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGltZUZvcm1hdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghYWxsb3dUaW1lICYmIHRpbWVGb3JtYXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hdGNoWzRdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHR6Rm9ybWF0ID0gJ1onO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcclxuICAgICAgICB5ZWFyU3RyLFxyXG4gICAgICAgIG1vbnRoU3RyLFxyXG4gICAgICAgIGRheVN0cixcclxuICAgICAgICBob3VyU3RyLFxyXG4gICAgICAgIG1pbnV0ZVN0cixcclxuICAgICAgICBzZWNvbmRTdHJcclxuICAgICkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXHJcbiAgICAgICAgICAgIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpLFxyXG4gICAgICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxyXG4gICAgICAgICAgICBwYXJzZUludChob3VyU3RyLCAxMCksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGlmIChzZWNvbmRTdHIpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSB7XHJcbiAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XHJcbiAgICAgICAgaWYgKHllYXIgPD0gNDkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDIwMDAgKyB5ZWFyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeWVhciA8PSA5OTkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE5MDAgKyB5ZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geWVhcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcclxuICAgICAgICByZXR1cm4gc1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwoW14oKV0qXFwpfFtcXG5cXHRdL2csICcgJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tXZWVrZGF5KHdlZWtkYXlTdHIsIHBhcnNlZElucHV0LCBjb25maWcpIHtcclxuICAgICAgICBpZiAod2Vla2RheVN0cikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbmRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXHJcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5UHJvdmlkZWQgPSBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpLFxyXG4gICAgICAgICAgICAgICAgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzJdXHJcbiAgICAgICAgICAgICAgICApLmdldERheSgpO1xyXG4gICAgICAgICAgICBpZiAod2Vla2RheVByb3ZpZGVkICE9PSB3ZWVrZGF5QWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KG9ic09mZnNldCwgbWlsaXRhcnlPZmZzZXQsIG51bU9mZnNldCkge1xyXG4gICAgICAgIGlmIChvYnNPZmZzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBvbmx5IGFsbG93ZWQgbWlsaXRhcnkgdHogaXMgWlxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKSxcclxuICAgICAgICAgICAgICAgIG0gPSBobSAlIDEwMCxcclxuICAgICAgICAgICAgICAgIGggPSAoaG0gLSBtKSAvIDEwMDtcclxuICAgICAgICAgICAgcmV0dXJuIGggKiA2MCArIG07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcclxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKSxcclxuICAgICAgICAgICAgcGFyc2VkQXJyYXk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcclxuICAgICAgICAgICAgICAgIG1hdGNoWzRdLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2hbM10sXHJcbiAgICAgICAgICAgICAgICBtYXRjaFsyXSxcclxuICAgICAgICAgICAgICAgIG1hdGNoWzVdLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2hbNl0sXHJcbiAgICAgICAgICAgICAgICBtYXRjaFs3XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrV2Vla2RheShtYXRjaFsxXSwgcGFyc2VkQXJyYXksIGNvbmZpZykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fdHptID0gY2FsY3VsYXRlT2Zmc2V0KG1hdGNoWzhdLCBtYXRjaFs5XSwgbWF0Y2hbMTBdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IGNyZWF0ZVVUQ0RhdGUuYXBwbHkobnVsbCwgY29uZmlnLl9hKTtcclxuICAgICAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcclxuXHJcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIGZyb20gMSkgQVNQLk5FVCwgMikgSVNPLCAzKSBSRkMgMjgyMiBmb3JtYXRzLCBvciA0KSBvcHRpb25hbCBmYWxsYmFjayBpZiBwYXJzaW5nIGlzbid0IHN0cmljdFxyXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWcpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XHJcbiAgICAgICAgaWYgKG1hdGNoZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xyXG4gICAgICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5fc3RyaWN0KSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xyXG4gICAgICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayA9IGRlcHJlY2F0ZShcclxuICAgICAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xyXG4gICAgICAgICAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gUkZDMjgyMi9JU08gZGF0ZSBmb3JtYXRzIGFyZSAnICtcclxuICAgICAgICAgICAgJ2Rpc2NvdXJhZ2VkLiBQbGVhc2UgcmVmZXIgdG8gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXHJcbiAgICAgICAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xyXG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XHJcbiAgICAgICAgLy8gaG9va3MgaXMgYWN0dWFsbHkgdGhlIGV4cG9ydGVkIG1vbWVudCBvYmplY3RcclxuICAgICAgICB2YXIgbm93VmFsdWUgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDTW9udGgoKSxcclxuICAgICAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxyXG4gICAgLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcclxuICAgIC8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxyXG4gICAgLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXHJcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tQXJyYXkoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGksXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIGlucHV0ID0gW10sXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLFxyXG4gICAgICAgICAgICBleHBlY3RlZFdlZWtkYXksXHJcbiAgICAgICAgICAgIHllYXJUb1VzZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5fZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcclxuXHJcbiAgICAgICAgLy9jb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xyXG4gICAgICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXHJcbiAgICAgICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fFxyXG4gICAgICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPT09IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZSh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKTtcclxuICAgICAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgICAgICAgICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cclxuICAgICAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XHJcbiAgICAgICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcclxuICAgICAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxyXG4gICAgICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcclxuICAgICAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFplcm8gb3V0IHdoYXRldmVyIHdhcyBub3QgZGVmYXVsdGVkLCBpbmNsdWRpbmcgdGltZVxyXG4gICAgICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID1cclxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9PSBudWxsID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDXHJcbiAgICAgICAgICAgID8gY29uZmlnLl9kLmdldFVUQ0RheSgpXHJcbiAgICAgICAgICAgIDogY29uZmlnLl9kLmdldERheSgpO1xyXG5cclxuICAgICAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcclxuICAgICAgICAvLyB3aXRoIHBhcnNlWm9uZS5cclxuICAgICAgICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xyXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY29uZmlnLl93ICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93LCBjdXJXZWVrO1xyXG5cclxuICAgICAgICB3ID0gY29uZmlnLl93O1xyXG4gICAgICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZG93ID0gMTtcclxuICAgICAgICAgICAgZG95ID0gNDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxyXG4gICAgICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXHJcbiAgICAgICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBub3cpLlxyXG4gICAgICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKFxyXG4gICAgICAgICAgICAgICAgdy5HRyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSxcclxuICAgICAgICAgICAgICAgIHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgMSwgNCkueWVhclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcclxuICAgICAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XHJcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xyXG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcclxuICAgICAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xyXG5cclxuICAgICAgICAgICAgY3VyV2VlayA9IHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgZG93LCBkb3kpO1xyXG5cclxuICAgICAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cclxuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXHJcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gdy5kO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbm5pbmcgb2Ygd2Vla1xyXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHcuZSArIGRvdztcclxuICAgICAgICAgICAgICAgIGlmICh3LmUgPCAwIHx8IHcuZSA+IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbm5pbmcgb2Ygd2Vla1xyXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IGRvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcclxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xyXG4gICAgICAgICAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcclxuICAgIGhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cclxuICAgIGhvb2tzLlJGQ18yODIyID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xyXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpIHtcclxuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xyXG4gICAgICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLklTT184NjAxKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5SRkNfMjgyMikge1xyXG4gICAgICAgICAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZy5fYSA9IFtdO1xyXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcclxuICAgICAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHBhcnNlZElucHV0LFxyXG4gICAgICAgICAgICB0b2tlbnMsXHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICBza2lwcGVkLFxyXG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxyXG4gICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMCxcclxuICAgICAgICAgICAgZXJhLFxyXG4gICAgICAgICAgICB0b2tlbkxlbjtcclxuXHJcbiAgICAgICAgdG9rZW5zID1cclxuICAgICAgICAgICAgZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xyXG4gICAgICAgIHRva2VuTGVuID0gdG9rZW5zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5MZW47IGkrKykge1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcclxuICAgICAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHxcclxuICAgICAgICAgICAgICAgIFtdKVswXTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxyXG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID1cclxuICAgICAgICAgICAgc3RyaW5nTGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcclxuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxyXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XHJcbiAgICAgICAgLy8gaGFuZGxlIG1lcmlkaWVtXHJcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKFxyXG4gICAgICAgICAgICBjb25maWcuX2xvY2FsZSxcclxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdLFxyXG4gICAgICAgICAgICBjb25maWcuX21lcmlkaWVtXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIGVyYVxyXG4gICAgICAgIGVyYSA9IGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVyYTtcclxuICAgICAgICBpZiAoZXJhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNDb252ZXJ0WWVhcihlcmEsIGNvbmZpZy5fYVtZRUFSXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcclxuICAgICAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcclxuICAgICAgICB2YXIgaXNQbTtcclxuXHJcbiAgICAgICAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gbm90aGluZyB0byBkb1xyXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2FsZS5tZXJpZGllbUhvdXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbGUuaXNQTSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrXHJcbiAgICAgICAgICAgIGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XHJcbiAgICAgICAgICAgIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xyXG4gICAgICAgICAgICAgICAgaG91ciArPSAxMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcclxuICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxyXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcclxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcclxuICAgICAgICB2YXIgdGVtcENvbmZpZyxcclxuICAgICAgICAgICAgYmVzdE1vbWVudCxcclxuICAgICAgICAgICAgc2NvcmVUb0JlYXQsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSxcclxuICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCxcclxuICAgICAgICAgICAgYmVzdEZvcm1hdElzVmFsaWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlnZkxlbiA9IGNvbmZpZy5fZi5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChjb25maWdmTGVuID09PSAwKSB7XHJcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnZkxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSA9IDA7XHJcbiAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGVtcENvbmZpZyA9IGNvcHlDb25maWcoe30sIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xyXG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzVmFsaWQodGVtcENvbmZpZykpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxyXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XHJcblxyXG4gICAgICAgICAgICAvL29yIHRva2Vuc1xyXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcclxuXHJcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYmVzdEZvcm1hdElzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQgfHxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRGb3JtYXRGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0Rm9ybWF0SXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4dGVuZChjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoY29uZmlnLl9pKSxcclxuICAgICAgICAgICAgZGF5T3JEYXRlID0gaS5kYXkgPT09IHVuZGVmaW5lZCA/IGkuZGF0ZSA6IGkuZGF5O1xyXG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChcclxuICAgICAgICAgICAgW2kueWVhciwgaS5tb250aCwgZGF5T3JEYXRlLCBpLmhvdXIsIGkubWludXRlLCBpLnNlY29uZCwgaS5taWxsaXNlY29uZF0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZykge1xyXG4gICAgICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XHJcbiAgICAgICAgaWYgKHJlcy5fbmV4dERheSkge1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcclxuICAgICAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xyXG4gICAgICAgICAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gY29uZmlnLl9pLFxyXG4gICAgICAgICAgICBmb3JtYXQgPSBjb25maWcuX2Y7XHJcblxyXG4gICAgICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7IG51bGxJbnB1dDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTW9tZW50KGlucHV0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IGlucHV0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBjb25maWcuX2k7XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xyXG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlT2YoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG9iaiwgMTApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcclxuICAgICAgICAgICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXHJcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBpc1VUQykge1xyXG4gICAgICAgIHZhciBjID0ge307XHJcblxyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IHRydWUgfHwgZm9ybWF0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzdHJpY3QgPSBmb3JtYXQ7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsb2NhbGUgPT09IHRydWUgfHwgbG9jYWxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzdHJpY3QgPSBsb2NhbGU7XHJcbiAgICAgICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKGlzT2JqZWN0KGlucHV0KSAmJiBpc09iamVjdEVtcHR5KGlucHV0KSkgfHxcclxuICAgICAgICAgICAgKGlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXHJcbiAgICAgICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xyXG4gICAgICAgIGMuX2wgPSBsb2NhbGU7XHJcbiAgICAgICAgYy5faSA9IGlucHV0O1xyXG4gICAgICAgIGMuX2YgPSBmb3JtYXQ7XHJcbiAgICAgICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhbChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcclxuICAgICAgICAgICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXHJcbiAgICAgICAgICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcclxuICAgIC8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cclxuICAgIC8vXHJcbiAgICAvLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXHJcbiAgICAvLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxyXG4gICAgZnVuY3Rpb24gcGlja0J5KGZuLCBtb21lbnRzKSB7XHJcbiAgICAgICAgdmFyIHJlcywgaTtcclxuICAgICAgICBpZiAobW9tZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShtb21lbnRzWzBdKSkge1xyXG4gICAgICAgICAgICBtb21lbnRzID0gbW9tZW50c1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtb21lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzID0gbW9tZW50c1swXTtcclxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbW9tZW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoIW1vbWVudHNbaV0uaXNWYWxpZCgpIHx8IG1vbWVudHNbaV1bZm5dKHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xyXG4gICAgZnVuY3Rpb24gbWluKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1heCgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBub3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICtuZXcgRGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3JkZXJpbmcgPSBbXHJcbiAgICAgICAgJ3llYXInLFxyXG4gICAgICAgICdxdWFydGVyJyxcclxuICAgICAgICAnbW9udGgnLFxyXG4gICAgICAgICd3ZWVrJyxcclxuICAgICAgICAnZGF5JyxcclxuICAgICAgICAnaG91cicsXHJcbiAgICAgICAgJ21pbnV0ZScsXHJcbiAgICAgICAgJ3NlY29uZCcsXHJcbiAgICAgICAgJ21pbGxpc2Vjb25kJyxcclxuICAgIF07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKG0pIHtcclxuICAgICAgICB2YXIga2V5LFxyXG4gICAgICAgICAgICB1bml0SGFzRGVjaW1hbCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBvcmRlckxlbiA9IG9yZGVyaW5nLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGtleSBpbiBtKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGhhc093blByb3AobSwga2V5KSAmJlxyXG4gICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKG1ba2V5XSA9PSBudWxsIHx8ICFpc05hTihtW2tleV0pKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9yZGVyTGVuOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKG1bb3JkZXJpbmdbaV1dKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChtW29yZGVyaW5nW2ldXSkgIT09IHRvSW50KG1bb3JkZXJpbmdbaV1dKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNWYWxpZCQxKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQkMSgpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEdXJhdGlvbihkdXJhdGlvbikge1xyXG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXHJcbiAgICAgICAgICAgIHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMCxcclxuICAgICAgICAgICAgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwLFxyXG4gICAgICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcclxuICAgICAgICAgICAgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCBub3JtYWxpemVkSW5wdXQuaXNvV2VlayB8fCAwLFxyXG4gICAgICAgICAgICBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwLFxyXG4gICAgICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXHJcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlIHx8IDAsXHJcbiAgICAgICAgICAgIHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kIHx8IDAsXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXHJcbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID1cclxuICAgICAgICAgICAgK21pbGxpc2Vjb25kcyArXHJcbiAgICAgICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXHJcbiAgICAgICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcclxuICAgICAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XHJcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXHJcbiAgICAgICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxyXG4gICAgICAgIHRoaXMuX2RheXMgPSArZGF5cyArIHdlZWtzICogNztcclxuICAgICAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xyXG4gICAgICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXHJcbiAgICAgICAgLy8gaXQgc2VwYXJhdGVseS5cclxuICAgICAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICsgcXVhcnRlcnMgKiAzICsgeWVhcnMgKiAxMjtcclxuXHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYnViYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEdXJhdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWJzUm91bmQobnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoLTEgKiBudW1iZXIpICogLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xyXG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcclxuICAgICAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGRpZmZzID0gMCxcclxuICAgICAgICAgICAgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxyXG4gICAgICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGRpZmZzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGT1JNQVRUSU5HXHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0KHRva2VuLCBzZXBhcmF0b3IpIHtcclxuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy51dGNPZmZzZXQoKSxcclxuICAgICAgICAgICAgICAgIHNpZ24gPSAnKyc7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgc2lnbiA9ICctJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc2lnbiArXHJcbiAgICAgICAgICAgICAgICB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICtcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvciArXHJcbiAgICAgICAgICAgICAgICB6ZXJvRmlsbCh+fm9mZnNldCAlIDYwLCAyKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldCgnWicsICc6Jyk7XHJcbiAgICBvZmZzZXQoJ1paJywgJycpO1xyXG5cclxuICAgIC8vIFBBUlNJTkdcclxuXHJcbiAgICBhZGRSZWdleFRva2VuKCdaJywgbWF0Y2hTaG9ydE9mZnNldCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xyXG4gICAgYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xyXG4gICAgICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIRUxQRVJTXHJcblxyXG4gICAgLy8gdGltZXpvbmUgY2h1bmtlclxyXG4gICAgLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXHJcbiAgICAvLyAnLTE1MzAnICA+IFsnLTE1JywgJzMwJ11cclxuICAgIHZhciBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXIsIHN0cmluZykge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlciksXHJcbiAgICAgICAgICAgIGNodW5rLFxyXG4gICAgICAgICAgICBwYXJ0cyxcclxuICAgICAgICAgICAgbWludXRlcztcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHVuayA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXSB8fCBbXTtcclxuICAgICAgICBwYXJ0cyA9IChjaHVuayArICcnKS5tYXRjaChjaHVua09mZnNldCkgfHwgWyctJywgMCwgMF07XHJcbiAgICAgICAgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyB0b0ludChwYXJ0c1syXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cclxuICAgIGZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dCwgbW9kZWwpIHtcclxuICAgICAgICB2YXIgcmVzLCBkaWZmO1xyXG4gICAgICAgIGlmIChtb2RlbC5faXNVVEMpIHtcclxuICAgICAgICAgICAgcmVzID0gbW9kZWwuY2xvbmUoKTtcclxuICAgICAgICAgICAgZGlmZiA9XHJcbiAgICAgICAgICAgICAgICAoaXNNb21lbnQoaW5wdXQpIHx8IGlzRGF0ZShpbnB1dClcclxuICAgICAgICAgICAgICAgICAgICA/IGlucHV0LnZhbHVlT2YoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXHJcbiAgICAgICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcclxuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZU9mZnNldChtKSB7XHJcbiAgICAgICAgLy8gT24gRmlyZWZveC4yNCBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgYSBmbG9hdGluZyBwb2ludC5cclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcclxuICAgICAgICByZXR1cm4gLU1hdGgucm91bmQobS5fZC5nZXRUaW1lem9uZU9mZnNldCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIT09LU1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cclxuICAgIC8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxyXG4gICAgaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgLy8gTU9NRU5UU1xyXG5cclxuICAgIC8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxyXG4gICAgLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cclxuICAgIC8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcclxuICAgIC8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cclxuICAgIC8vXHJcbiAgICAvLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcclxuICAgIC8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxyXG4gICAgLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxyXG4gICAgLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXHJcbiAgICAvLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxyXG4gICAgZnVuY3Rpb24gZ2V0U2V0T2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lLCBrZWVwTWludXRlcykge1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9vZmZzZXQgfHwgMCxcclxuICAgICAgICAgICAgbG9jYWxBZGp1c3Q7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGxvY2FsQWRqdXN0LCAnbScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFN1YnRyYWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEdXJhdGlvbihpbnB1dCAtIG9mZnNldCwgJ20nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiBnZXREYXRlT2Zmc2V0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gLWlucHV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGtlZXBMb2NhbFRpbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbChrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVVRDKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5faSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XHJcbiAgICAgICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0Wm9uZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNBbGlnbmVkSG91ck9mZnNldChpbnB1dCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCA9IGlucHV0ID8gY3JlYXRlTG9jYWwoaW5wdXQpLnV0Y09mZnNldCgpIDogMDtcclxuXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpIC0gaW5wdXQpICUgNjAgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQoKSB7XHJcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYyA9IHt9LFxyXG4gICAgICAgICAgICBvdGhlcjtcclxuXHJcbiAgICAgICAgY29weUNvbmZpZyhjLCB0aGlzKTtcclxuICAgICAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcclxuXHJcbiAgICAgICAgaWYgKGMuX2EpIHtcclxuICAgICAgICAgICAgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiYgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNMb2NhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1V0Y09mZnNldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVXRjKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxyXG4gICAgdmFyIGFzcE5ldFJlZ2V4ID0gL14oLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKTooXFxkKykoPzo6KFxcZCspKFxcLlxcZCopPyk/JC8sXHJcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcclxuICAgICAgICAvLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXHJcbiAgICAgICAgLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxyXG4gICAgICAgIGlzb1JlZ2V4ID1cclxuICAgICAgICAgICAgL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEdXJhdGlvbihpbnB1dCwga2V5KSB7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXHJcbiAgICAgICAgICAgIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXHJcbiAgICAgICAgICAgIG1hdGNoID0gbnVsbCxcclxuICAgICAgICAgICAgc2lnbixcclxuICAgICAgICAgICAgcmV0LFxyXG4gICAgICAgICAgICBkaWZmUmVzO1xyXG5cclxuICAgICAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBtczogaW5wdXQuX21pbGxpc2Vjb25kcyxcclxuICAgICAgICAgICAgICAgIGQ6IGlucHV0Ll9kYXlzLFxyXG4gICAgICAgICAgICAgICAgTTogaW5wdXQuX21vbnRocyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSB8fCAhaXNOYU4oK2lucHV0KSkge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbltrZXldID0gK2lucHV0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmRzID0gK2lucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KSkpIHtcclxuICAgICAgICAgICAgc2lnbiA9IG1hdGNoWzFdID09PSAnLScgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIGQ6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXHJcbiAgICAgICAgICAgICAgICBoOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxyXG4gICAgICAgICAgICAgICAgbTogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxyXG4gICAgICAgICAgICAgICAgczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxyXG4gICAgICAgICAgICAgICAgbXM6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24sIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XHJcbiAgICAgICAgICAgIHNpZ24gPSBtYXRjaFsxXSA9PT0gJy0nID8gLTEgOiAxO1xyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHk6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcclxuICAgICAgICAgICAgICAgIE06IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcclxuICAgICAgICAgICAgICAgIHc6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcclxuICAgICAgICAgICAgICAgIGQ6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcclxuICAgICAgICAgICAgICAgIGg6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcclxuICAgICAgICAgICAgICAgIG06IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcclxuICAgICAgICAgICAgICAgIHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICAgICAgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLnRvKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcclxuICAgICAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcclxuICAgICAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0ID0gbmV3IER1cmF0aW9uKGR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcclxuICAgICAgICAgICAgcmV0Ll9sb2NhbGUgPSBpbnB1dC5fbG9jYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfaXNWYWxpZCcpKSB7XHJcbiAgICAgICAgICAgIHJldC5faXNWYWxpZCA9IGlucHV0Ll9pc1ZhbGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcclxuICAgIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkJDE7XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VJc28oaW5wLCBzaWduKSB7XHJcbiAgICAgICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cclxuICAgICAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cclxuICAgICAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXHJcbiAgICAgICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICAgICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxyXG4gICAgICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xyXG5cclxuICAgICAgICByZXMubW9udGhzID1cclxuICAgICAgICAgICAgb3RoZXIubW9udGgoKSAtIGJhc2UubW9udGgoKSArIChvdGhlci55ZWFyKCkgLSBiYXNlLnllYXIoKSkgKiAxMjtcclxuICAgICAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XHJcbiAgICAgICAgICAgIC0tcmVzLm1vbnRocztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XHJcbiAgICAgICAgdmFyIHJlcztcclxuICAgICAgICBpZiAoIShiYXNlLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XHJcbiAgICAgICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xyXG4gICAgICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XHJcbiAgICAgICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIHBlcmlvZCkge1xyXG4gICAgICAgICAgICB2YXIgZHVyLCB0bXA7XHJcbiAgICAgICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxyXG4gICAgICAgICAgICBpZiAocGVyaW9kICE9PSBudWxsICYmICFpc05hTigrcGVyaW9kKSkge1xyXG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21vbWVudCgpLicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyhwZXJpb2QsIG51bWJlcikgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBtb21lbnQoKS4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcobnVtYmVyLCBwZXJpb2QpLiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2FkZC1pbnZlcnRlZC1wYXJhbS8gZm9yIG1vcmUgaW5mby4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdG1wID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgdmFsID0gcGVyaW9kO1xyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0gdG1wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XHJcbiAgICAgICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRTdWJ0cmFjdChtb20sIGR1cmF0aW9uLCBpc0FkZGluZywgdXBkYXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXHJcbiAgICAgICAgICAgIGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyksXHJcbiAgICAgICAgICAgIG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xyXG5cclxuICAgICAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgLy8gTm8gb3BcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xyXG5cclxuICAgICAgICBpZiAobW9udGhzKSB7XHJcbiAgICAgICAgICAgIHNldE1vbnRoKG1vbSwgZ2V0KG1vbSwgJ01vbnRoJykgKyBtb250aHMgKiBpc0FkZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXlzKSB7XHJcbiAgICAgICAgICAgIHNldCQxKG1vbSwgJ0RhdGUnLCBnZXQobW9tLCAnRGF0ZScpICsgZGF5cyAqIGlzQWRkaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbGxpc2Vjb25kcykge1xyXG4gICAgICAgICAgICBtb20uX2Quc2V0VGltZShtb20uX2QudmFsdWVPZigpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXBkYXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChtb20sIGRheXMgfHwgbW9udGhzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFkZCA9IGNyZWF0ZUFkZGVyKDEsICdhZGQnKSxcclxuICAgICAgICBzdWJ0cmFjdCA9IGNyZWF0ZUFkZGVyKC0xLCAnc3VidHJhY3QnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc1N0cmluZyhpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHR5cGUgTW9tZW50SW5wdXQgPSBNb21lbnQgfCBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyIHwgKG51bWJlciB8IHN0cmluZylbXSB8IE1vbWVudElucHV0T2JqZWN0IHwgdm9pZDsgLy8gbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgZnVuY3Rpb24gaXNNb21lbnRJbnB1dChpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGlzTW9tZW50KGlucHV0KSB8fFxyXG4gICAgICAgICAgICBpc0RhdGUoaW5wdXQpIHx8XHJcbiAgICAgICAgICAgIGlzU3RyaW5nKGlucHV0KSB8fFxyXG4gICAgICAgICAgICBpc051bWJlcihpbnB1dCkgfHxcclxuICAgICAgICAgICAgaXNOdW1iZXJPclN0cmluZ0FycmF5KGlucHV0KSB8fFxyXG4gICAgICAgICAgICBpc01vbWVudElucHV0T2JqZWN0KGlucHV0KSB8fFxyXG4gICAgICAgICAgICBpbnB1dCA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICBpbnB1dCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc01vbWVudElucHV0T2JqZWN0KGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG9iamVjdFRlc3QgPSBpc09iamVjdChpbnB1dCkgJiYgIWlzT2JqZWN0RW1wdHkoaW5wdXQpLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcclxuICAgICAgICAgICAgcHJvcGVydGllcyA9IFtcclxuICAgICAgICAgICAgICAgICd5ZWFycycsXHJcbiAgICAgICAgICAgICAgICAneWVhcicsXHJcbiAgICAgICAgICAgICAgICAneScsXHJcbiAgICAgICAgICAgICAgICAnbW9udGhzJyxcclxuICAgICAgICAgICAgICAgICdtb250aCcsXHJcbiAgICAgICAgICAgICAgICAnTScsXHJcbiAgICAgICAgICAgICAgICAnZGF5cycsXHJcbiAgICAgICAgICAgICAgICAnZGF5JyxcclxuICAgICAgICAgICAgICAgICdkJyxcclxuICAgICAgICAgICAgICAgICdkYXRlcycsXHJcbiAgICAgICAgICAgICAgICAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAnRCcsXHJcbiAgICAgICAgICAgICAgICAnaG91cnMnLFxyXG4gICAgICAgICAgICAgICAgJ2hvdXInLFxyXG4gICAgICAgICAgICAgICAgJ2gnLFxyXG4gICAgICAgICAgICAgICAgJ21pbnV0ZXMnLFxyXG4gICAgICAgICAgICAgICAgJ21pbnV0ZScsXHJcbiAgICAgICAgICAgICAgICAnbScsXHJcbiAgICAgICAgICAgICAgICAnc2Vjb25kcycsXHJcbiAgICAgICAgICAgICAgICAnc2Vjb25kJyxcclxuICAgICAgICAgICAgICAgICdzJyxcclxuICAgICAgICAgICAgICAgICdtaWxsaXNlY29uZHMnLFxyXG4gICAgICAgICAgICAgICAgJ21pbGxpc2Vjb25kJyxcclxuICAgICAgICAgICAgICAgICdtcycsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICBwcm9wZXJ0eUxlbiA9IHByb3BlcnRpZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydHlMZW47IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgICAgIHByb3BlcnR5VGVzdCA9IHByb3BlcnR5VGVzdCB8fCBoYXNPd25Qcm9wKGlucHV0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0VGVzdCAmJiBwcm9wZXJ0eVRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNOdW1iZXJPclN0cmluZ0FycmF5KGlucHV0KSB7XHJcbiAgICAgICAgdmFyIGFycmF5VGVzdCA9IGlzQXJyYXkoaW5wdXQpLFxyXG4gICAgICAgICAgICBkYXRhVHlwZVRlc3QgPSBmYWxzZTtcclxuICAgICAgICBpZiAoYXJyYXlUZXN0KSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlVGVzdCA9XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzTnVtYmVyKGl0ZW0pICYmIGlzU3RyaW5nKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5VGVzdCAmJiBkYXRhVHlwZVRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNDYWxlbmRhclNwZWMoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXHJcbiAgICAgICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgICAgICAgICAgJ3NhbWVEYXknLFxyXG4gICAgICAgICAgICAgICAgJ25leHREYXknLFxyXG4gICAgICAgICAgICAgICAgJ2xhc3REYXknLFxyXG4gICAgICAgICAgICAgICAgJ25leHRXZWVrJyxcclxuICAgICAgICAgICAgICAgICdsYXN0V2VlaycsXHJcbiAgICAgICAgICAgICAgICAnc2FtZUVsc2UnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xyXG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBwcm9wZXJ0eVRlc3QgfHwgaGFzT3duUHJvcChpbnB1dCwgcHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcclxuICAgICAgICB2YXIgZGlmZiA9IG15TW9tZW50LmRpZmYobm93LCAnZGF5cycsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBkaWZmIDwgLTZcclxuICAgICAgICAgICAgPyAnc2FtZUVsc2UnXHJcbiAgICAgICAgICAgIDogZGlmZiA8IC0xXHJcbiAgICAgICAgICAgICAgPyAnbGFzdFdlZWsnXHJcbiAgICAgICAgICAgICAgOiBkaWZmIDwgMFxyXG4gICAgICAgICAgICAgICAgPyAnbGFzdERheSdcclxuICAgICAgICAgICAgICAgIDogZGlmZiA8IDFcclxuICAgICAgICAgICAgICAgICAgPyAnc2FtZURheSdcclxuICAgICAgICAgICAgICAgICAgOiBkaWZmIDwgMlxyXG4gICAgICAgICAgICAgICAgICAgID8gJ25leHREYXknXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkaWZmIDwgN1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyAnbmV4dFdlZWsnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzYW1lRWxzZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsZW5kYXIkMSh0aW1lLCBmb3JtYXRzKSB7XHJcbiAgICAgICAgLy8gU3VwcG9ydCBmb3Igc2luZ2xlIHBhcmFtZXRlciwgZm9ybWF0cyBvbmx5IG92ZXJsb2FkIHRvIHRoZSBjYWxlbmRhciBmdW5jdGlvblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0cyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc01vbWVudElucHV0KGFyZ3VtZW50c1swXSkpIHtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2FsZW5kYXJTcGVjKGFyZ3VtZW50c1swXSkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHMgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY29tcGFyZSB0aGUgc3RhcnQgb2YgdG9kYXksIHZzIHRoaXMuXHJcbiAgICAgICAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXHJcbiAgICAgICAgdmFyIG5vdyA9IHRpbWUgfHwgY3JlYXRlTG9jYWwoKSxcclxuICAgICAgICAgICAgc29kID0gY2xvbmVXaXRoT2Zmc2V0KG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGhvb2tzLmNhbGVuZGFyRm9ybWF0KHRoaXMsIHNvZCkgfHwgJ3NhbWVFbHNlJyxcclxuICAgICAgICAgICAgb3V0cHV0ID1cclxuICAgICAgICAgICAgICAgIGZvcm1hdHMgJiZcclxuICAgICAgICAgICAgICAgIChpc0Z1bmN0aW9uKGZvcm1hdHNbZm9ybWF0XSlcclxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdHNbZm9ybWF0XS5jYWxsKHRoaXMsIG5vdylcclxuICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdHNbZm9ybWF0XSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChcclxuICAgICAgICAgICAgb3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgY3JlYXRlTG9jYWwobm93KSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzQWZ0ZXIoaW5wdXQsIHVuaXRzKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcclxuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xyXG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPiBsb2NhbElucHV0LnZhbHVlT2YoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxJbnB1dC52YWx1ZU9mKCkgPCB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0JlZm9yZShpbnB1dCwgdW5pdHMpIHtcclxuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xyXG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XHJcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0JldHdlZW4oZnJvbSwgdG8sIHVuaXRzLCBpbmNsdXNpdml0eSkge1xyXG4gICAgICAgIHZhciBsb2NhbEZyb20gPSBpc01vbWVudChmcm9tKSA/IGZyb20gOiBjcmVhdGVMb2NhbChmcm9tKSxcclxuICAgICAgICAgICAgbG9jYWxUbyA9IGlzTW9tZW50KHRvKSA/IHRvIDogY3JlYXRlTG9jYWwodG8pO1xyXG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsRnJvbS5pc1ZhbGlkKCkgJiYgbG9jYWxUby5pc1ZhbGlkKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChpbmNsdXNpdml0eVswXSA9PT0gJygnXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuaXNBZnRlcihsb2NhbEZyb20sIHVuaXRzKVxyXG4gICAgICAgICAgICAgICAgOiAhdGhpcy5pc0JlZm9yZShsb2NhbEZyb20sIHVuaXRzKSkgJiZcclxuICAgICAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKSdcclxuICAgICAgICAgICAgICAgID8gdGhpcy5pc0JlZm9yZShsb2NhbFRvLCB1bml0cylcclxuICAgICAgICAgICAgICAgIDogIXRoaXMuaXNBZnRlcihsb2NhbFRvLCB1bml0cykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NhbWUoaW5wdXQsIHVuaXRzKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KSxcclxuICAgICAgICAgICAgaW5wdXRNcztcclxuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xyXG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IGxvY2FsSW5wdXQudmFsdWVPZigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0TXMgPSBsb2NhbElucHV0LnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJlxyXG4gICAgICAgICAgICAgICAgaW5wdXRNcyA8PSB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1NhbWVPckFmdGVyKGlucHV0LCB1bml0cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNBZnRlcihpbnB1dCwgdW5pdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKGlucHV0LCB1bml0cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsIHVuaXRzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaWZmKGlucHV0LCB1bml0cywgYXNGbG9hdCkge1xyXG4gICAgICAgIHZhciB0aGF0LCB6b25lRGVsdGEsIG91dHB1dDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmICghdGhhdC5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5hTjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHpvbmVEZWx0YSA9ICh0aGF0LnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSkgKiA2ZTQ7XHJcblxyXG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMTI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDFlMztcclxuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwXHJcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gNmU0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MFxyXG4gICAgICAgICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAzNmU1O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwXHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gODY0ZTU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCwgbmVnYXRlIGRzdFxyXG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCAtIHpvbmVEZWx0YSkgLyA2MDQ4ZTU7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcsIG5lZ2F0ZSBkc3RcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG91dHB1dCA9IHRoaXMgLSB0aGF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vbnRoRGlmZihhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEuZGF0ZSgpIDwgYi5kYXRlKCkpIHtcclxuICAgICAgICAgICAgLy8gZW5kLW9mLW1vbnRoIGNhbGN1bGF0aW9ucyB3b3JrIGNvcnJlY3Qgd2hlbiB0aGUgc3RhcnQgbW9udGggaGFzIG1vcmVcclxuICAgICAgICAgICAgLy8gZGF5cyB0aGFuIHRoZSBlbmQgbW9udGguXHJcbiAgICAgICAgICAgIHJldHVybiAtbW9udGhEaWZmKGIsIGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xyXG4gICAgICAgIHZhciB3aG9sZU1vbnRoRGlmZiA9IChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXHJcbiAgICAgICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXHJcbiAgICAgICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcclxuICAgICAgICAgICAgYW5jaG9yMixcclxuICAgICAgICAgICAgYWRqdXN0O1xyXG5cclxuICAgICAgICBpZiAoYiAtIGFuY2hvciA8IDApIHtcclxuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgLSAxLCAnbW9udGhzJyk7XHJcbiAgICAgICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXHJcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IgLSBhbmNob3IyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiArIDEsICdtb250aHMnKTtcclxuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcclxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvcjIgLSBhbmNob3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xyXG4gICAgICAgIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xyXG4gICAgaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcclxuXHJcbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9JU09TdHJpbmcoa2VlcE9mZnNldCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1dGMgPSBrZWVwT2Zmc2V0ICE9PSB0cnVlLFxyXG4gICAgICAgICAgICBtID0gdXRjID8gdGhpcy5jbG9uZSgpLnV0YygpIDogdGhpcztcclxuICAgICAgICBpZiAobS55ZWFyKCkgPCAwIHx8IG0ueWVhcigpID4gOTk5OSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxyXG4gICAgICAgICAgICAgICAgbSxcclxuICAgICAgICAgICAgICAgIHV0Y1xyXG4gICAgICAgICAgICAgICAgICAgID8gJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXSdcclxuICAgICAgICAgICAgICAgICAgICA6ICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGdW5jdGlvbihEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykpIHtcclxuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cclxuICAgICAgICAgICAgaWYgKHV0Yykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSArIHRoaXMudXRjT2Zmc2V0KCkgKiA2MCAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnWicsIGZvcm1hdE1vbWVudChtLCAnWicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxyXG4gICAgICAgICAgICBtLFxyXG4gICAgICAgICAgICB1dGMgPyAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXHJcbiAgICAgKiBhbHNvIGJlIGV2YWx1YXRlZCB0byBnZXQgYSBuZXcgbW9tZW50IHdoaWNoIGlzIHRoZSBzYW1lXHJcbiAgICAgKlxyXG4gICAgICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5zcGVjdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmdW5jID0gJ21vbWVudCcsXHJcbiAgICAgICAgICAgIHpvbmUgPSAnJyxcclxuICAgICAgICAgICAgcHJlZml4LFxyXG4gICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICBkYXRldGltZSxcclxuICAgICAgICAgICAgc3VmZml4O1xyXG4gICAgICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcclxuICAgICAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XHJcbiAgICAgICAgICAgIHpvbmUgPSAnWic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWZpeCA9ICdbJyArIGZ1bmMgKyAnKFwiXSc7XHJcbiAgICAgICAgeWVhciA9IDAgPD0gdGhpcy55ZWFyKCkgJiYgdGhpcy55ZWFyKCkgPD0gOTk5OSA/ICdZWVlZJyA6ICdZWVlZWVknO1xyXG4gICAgICAgIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XHJcbiAgICAgICAgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdChwcmVmaXggKyB5ZWFyICsgZGF0ZXRpbWUgKyBzdWZmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdChpbnB1dFN0cmluZykge1xyXG4gICAgICAgIGlmICghaW5wdXRTdHJpbmcpIHtcclxuICAgICAgICAgICAgaW5wdXRTdHJpbmcgPSB0aGlzLmlzVXRjKClcclxuICAgICAgICAgICAgICAgID8gaG9va3MuZGVmYXVsdEZvcm1hdFV0Y1xyXG4gICAgICAgICAgICAgICAgOiBob29rcy5kZWZhdWx0Rm9ybWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZyb20odGltZSwgd2l0aG91dFN1ZmZpeCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiZcclxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHwgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcywgZnJvbTogdGltZSB9KVxyXG4gICAgICAgICAgICAgICAgLmxvY2FsZSh0aGlzLmxvY2FsZSgpKVxyXG4gICAgICAgICAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZnJvbU5vdyh3aXRob3V0U3VmZml4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbShjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0byh0aW1lLCB3aXRob3V0U3VmZml4KSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJlxyXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fCBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7IGZyb206IHRoaXMsIHRvOiB0aW1lIH0pXHJcbiAgICAgICAgICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXHJcbiAgICAgICAgICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b05vdyh3aXRob3V0U3VmZml4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgcGFzc2VkIGEgbG9jYWxlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxvY2FsZSBmb3IgdGhpc1xyXG4gICAgLy8gaW5zdGFuY2UuICBPdGhlcndpc2UsIGl0IHdpbGwgcmV0dXJuIHRoZSBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4gICAgLy8gdmFyaWFibGVzIGZvciB0aGlzIGluc3RhbmNlLlxyXG4gICAgZnVuY3Rpb24gbG9jYWxlKGtleSkge1xyXG4gICAgICAgIHZhciBuZXdMb2NhbGVEYXRhO1xyXG5cclxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsYW5nID0gZGVwcmVjYXRlKFxyXG4gICAgICAgICdtb21lbnQoKS5sYW5nKCkgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgdXNlIG1vbWVudCgpLmxvY2FsZURhdGEoKSB0byBnZXQgdGhlIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24uIFVzZSBtb21lbnQoKS5sb2NhbGUoKSB0byBjaGFuZ2UgbGFuZ3VhZ2VzLicsXHJcbiAgICAgICAgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2NhbGVEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIE1TX1BFUl9TRUNPTkQgPSAxMDAwLFxyXG4gICAgICAgIE1TX1BFUl9NSU5VVEUgPSA2MCAqIE1TX1BFUl9TRUNPTkQsXHJcbiAgICAgICAgTVNfUEVSX0hPVVIgPSA2MCAqIE1TX1BFUl9NSU5VVEUsXHJcbiAgICAgICAgTVNfUEVSXzQwMF9ZRUFSUyA9ICgzNjUgKiA0MDAgKyA5NykgKiAyNCAqIE1TX1BFUl9IT1VSO1xyXG5cclxuICAgIC8vIGFjdHVhbCBtb2R1bG8gLSBoYW5kbGVzIG5lZ2F0aXZlIG51bWJlcnMgKGZvciBkYXRlcyBiZWZvcmUgMTk3MCk6XHJcbiAgICBmdW5jdGlvbiBtb2QkMShkaXZpZGVuZCwgZGl2aXNvcikge1xyXG4gICAgICAgIHJldHVybiAoKGRpdmlkZW5kICUgZGl2aXNvcikgKyBkaXZpc29yKSAlIGRpdmlzb3I7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxTdGFydE9mRGF0ZSh5LCBtLCBkKSB7XHJcbiAgICAgICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XHJcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0sIGQpLnZhbHVlT2YoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXRjU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xyXG4gICAgICAgIC8vIERhdGUuVVRDIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxyXG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xyXG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxyXG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5VVEMoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEYXRlLlVUQyh5LCBtLCBkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRPZih1bml0cykge1xyXG4gICAgICAgIHZhciB0aW1lLCBzdGFydE9mRGF0ZTtcclxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcclxuICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydE9mRGF0ZSA9IHRoaXMuX2lzVVRDID8gdXRjU3RhcnRPZkRhdGUgOiBsb2NhbFN0YXJ0T2ZEYXRlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCAwLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcclxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMyksXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gdGhpcy53ZWVrZGF5KClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaXNvV2Vlayc6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gKHRoaXMuaXNvV2Vla2RheSgpIC0gMSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMShcclxuICAgICAgICAgICAgICAgICAgICB0aW1lICsgKHRoaXMuX2lzVVRDID8gMCA6IHRoaXMudXRjT2Zmc2V0KCkgKiBNU19QRVJfTUlOVVRFKSxcclxuICAgICAgICAgICAgICAgICAgICBNU19QRVJfSE9VUlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfTUlOVVRFKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xyXG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmRPZih1bml0cykge1xyXG4gICAgICAgIHZhciB0aW1lLCBzdGFydE9mRGF0ZTtcclxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcclxuICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydE9mRGF0ZSA9IHRoaXMuX2lzVVRDID8gdXRjU3RhcnRPZkRhdGUgOiBsb2NhbFN0YXJ0T2ZEYXRlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpICsgMSwgMCwgMSkgLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMykgKyAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkgKyAxLCAxKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgICAgICAgICB0aW1lID1cclxuICAgICAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKSArIDdcclxuICAgICAgICAgICAgICAgICAgICApIC0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpc29XZWVrJzpcclxuICAgICAgICAgICAgICAgIHRpbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtICh0aGlzLmlzb1dlZWtkYXkoKSAtIDEpICsgN1xyXG4gICAgICAgICAgICAgICAgICAgICkgLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpICsgMSkgLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgdGltZSArPVxyXG4gICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSIC1cclxuICAgICAgICAgICAgICAgICAgICBtb2QkMShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSArICh0aGlzLl9pc1VUQyA/IDAgOiB0aGlzLnV0Y09mZnNldCgpICogTVNfUEVSX01JTlVURSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXHJcbiAgICAgICAgICAgICAgICAgICAgKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgdGltZSArPSBNU19QRVJfTUlOVVRFIC0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSkgLSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lICs9IE1TX1BFUl9TRUNPTkQgLSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Quc2V0VGltZSh0aW1lKTtcclxuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsdWVPZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdW5peCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIG0ueWVhcigpLFxyXG4gICAgICAgICAgICBtLm1vbnRoKCksXHJcbiAgICAgICAgICAgIG0uZGF0ZSgpLFxyXG4gICAgICAgICAgICBtLmhvdXIoKSxcclxuICAgICAgICAgICAgbS5taW51dGUoKSxcclxuICAgICAgICAgICAgbS5zZWNvbmQoKSxcclxuICAgICAgICAgICAgbS5taWxsaXNlY29uZCgpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9PYmplY3QoKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHllYXJzOiBtLnllYXIoKSxcclxuICAgICAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXHJcbiAgICAgICAgICAgIGRhdGU6IG0uZGF0ZSgpLFxyXG4gICAgICAgICAgICBob3VyczogbS5ob3VycygpLFxyXG4gICAgICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgc2Vjb25kczogbS5zZWNvbmRzKCksXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kczogbS5taWxsaXNlY29uZHMoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvSlNPTigpIHtcclxuICAgICAgICAvLyBuZXcgRGF0ZShOYU4pLnRvSlNPTigpID09PSBudWxsXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy50b0lTT1N0cmluZygpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1ZhbGlkJDIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2luZ0ZsYWdzKCkge1xyXG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW52YWxpZEF0KCkge1xyXG4gICAgICAgIHJldHVybiBnZXRQYXJzaW5nRmxhZ3ModGhpcykub3ZlcmZsb3c7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRpb25EYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlucHV0OiB0aGlzLl9pLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuX2YsXHJcbiAgICAgICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxyXG4gICAgICAgICAgICBpc1VUQzogdGhpcy5faXNVVEMsXHJcbiAgICAgICAgICAgIHN0cmljdDogdGhpcy5fc3RyaWN0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ04nLCAwLCAwLCAnZXJhQWJicicpO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OJywgMCwgMCwgJ2VyYUFiYnInKTtcclxuICAgIGFkZEZvcm1hdFRva2VuKCdOTk4nLCAwLCAwLCAnZXJhQWJicicpO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTk4nLCAwLCAwLCAnZXJhTmFtZScpO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTk5OJywgMCwgMCwgJ2VyYU5hcnJvdycpO1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5JywgMV0sICd5bycsICdlcmFZZWFyJyk7XHJcbiAgICBhZGRGb3JtYXRUb2tlbigneScsIFsneXknLCAyXSwgMCwgJ2VyYVllYXInKTtcclxuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5eXknLCAzXSwgMCwgJ2VyYVllYXInKTtcclxuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5eXl5JywgNF0sIDAsICdlcmFZZWFyJyk7XHJcblxyXG4gICAgYWRkUmVnZXhUb2tlbignTicsIG1hdGNoRXJhQWJicik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdOTicsIG1hdGNoRXJhQWJicik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdOTk4nLCBtYXRjaEVyYUFiYnIpO1xyXG4gICAgYWRkUmVnZXhUb2tlbignTk5OTicsIG1hdGNoRXJhTmFtZSk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdOTk5OTicsIG1hdGNoRXJhTmFycm93KTtcclxuXHJcbiAgICBhZGRQYXJzZVRva2VuKFxyXG4gICAgICAgIFsnTicsICdOTicsICdOTk4nLCAnTk5OTicsICdOTk5OTiddLFxyXG4gICAgICAgIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcclxuICAgICAgICAgICAgdmFyIGVyYSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcclxuICAgICAgICAgICAgaWYgKGVyYSkge1xyXG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZXJhID0gZXJhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEVyYSA9IGlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBhZGRSZWdleFRva2VuKCd5JywgbWF0Y2hVbnNpZ25lZCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCd5eScsIG1hdGNoVW5zaWduZWQpO1xyXG4gICAgYWRkUmVnZXhUb2tlbigneXl5JywgbWF0Y2hVbnNpZ25lZCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCd5eXl5JywgbWF0Y2hVbnNpZ25lZCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCd5bycsIG1hdGNoRXJhWWVhck9yZGluYWwpO1xyXG5cclxuICAgIGFkZFBhcnNlVG9rZW4oWyd5JywgJ3l5JywgJ3l5eScsICd5eXl5J10sIFlFQVIpO1xyXG4gICAgYWRkUGFyc2VUb2tlbihbJ3lvJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcclxuICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5fbG9jYWxlLl9lcmFZZWFyT3JkaW5hbFJlZ2V4KSB7XHJcbiAgICAgICAgICAgIG1hdGNoID0gaW5wdXQubWF0Y2goY29uZmlnLl9sb2NhbGUuX2VyYVllYXJPcmRpbmFsUmVnZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5fbG9jYWxlLmVyYVllYXJPcmRpbmFsUGFyc2UpIHtcclxuICAgICAgICAgICAgYXJyYXlbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKGlucHV0LCBtYXRjaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXMobSwgZm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIGksXHJcbiAgICAgICAgICAgIGwsXHJcbiAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLl9lcmFzIHx8IGdldExvY2FsZSgnZW4nKS5fZXJhcztcclxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgZXJhc1tpXS5zaW5jZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGhvb2tzKGVyYXNbaV0uc2luY2UpLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVyYXNbaV0uc2luY2UgPSBkYXRlLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgZXJhc1tpXS51bnRpbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcclxuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gK0luZmluaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGhvb2tzKGVyYXNbaV0udW50aWwpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gZGF0ZS52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVyYXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9jYWxlRXJhc1BhcnNlKGVyYU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XHJcbiAgICAgICAgdmFyIGksXHJcbiAgICAgICAgICAgIGwsXHJcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgYWJicixcclxuICAgICAgICAgICAgbmFycm93O1xyXG4gICAgICAgIGVyYU5hbWUgPSBlcmFOYW1lLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICBuYW1lID0gZXJhc1tpXS5uYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGFiYnIgPSBlcmFzW2ldLmFiYnIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgbmFycm93ID0gZXJhc1tpXS5uYXJyb3cudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTic6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk4nOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OTic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhYmJyID09PSBlcmFOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk5OTic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBlcmFOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk5OTk4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFycm93ID09PSBlcmFOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChbbmFtZSwgYWJiciwgbmFycm93XS5pbmRleE9mKGVyYU5hbWUpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXNDb252ZXJ0WWVhcihlcmEsIHllYXIpIHtcclxuICAgICAgICB2YXIgZGlyID0gZXJhLnNpbmNlIDw9IGVyYS51bnRpbCA/ICsxIDogLTE7XHJcbiAgICAgICAgaWYgKHllYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaG9va3MoZXJhLnNpbmNlKS55ZWFyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhvb2tzKGVyYS5zaW5jZSkueWVhcigpICsgKHllYXIgLSBlcmEub2Zmc2V0KSAqIGRpcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RXJhTmFtZSgpIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgbCxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXHJcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RXJhTmFycm93KCkge1xyXG4gICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICBsLFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcclxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFycm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFycm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RXJhQWJicigpIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgbCxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xyXG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXHJcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLmFiYnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5hYmJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RXJhWWVhcigpIHtcclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgbCxcclxuICAgICAgICAgICAgZGlyLFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIGRpciA9IGVyYXNbaV0uc2luY2UgPD0gZXJhc1tpXS51bnRpbCA/ICsxIDogLTE7XHJcblxyXG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXHJcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHx8XHJcbiAgICAgICAgICAgICAgICAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy55ZWFyKCkgLSBob29rcyhlcmFzW2ldLnNpbmNlKS55ZWFyKCkpICogZGlyICtcclxuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLm9mZnNldFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVyYXNOYW1lUmVnZXgoaXNTdHJpY3QpIHtcclxuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzTmFtZVJlZ2V4JykpIHtcclxuICAgICAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNTdHJpY3QgPyB0aGlzLl9lcmFzTmFtZVJlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVyYXNBYmJyUmVnZXgoaXNTdHJpY3QpIHtcclxuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzQWJiclJlZ2V4JykpIHtcclxuICAgICAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNTdHJpY3QgPyB0aGlzLl9lcmFzQWJiclJlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVyYXNOYXJyb3dSZWdleChpc1N0cmljdCkge1xyXG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYXJyb3dSZWdleCcpKSB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hcnJvd1JlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hdGNoRXJhQWJicihpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5lcmFzQWJiclJlZ2V4KGlzU3RyaWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaEVyYU5hbWUoaXNTdHJpY3QsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc05hbWVSZWdleChpc1N0cmljdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWF0Y2hFcmFOYXJyb3coaXNTdHJpY3QsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXRjaEVyYVllYXJPcmRpbmFsKGlzU3RyaWN0LCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLl9lcmFZZWFyT3JkaW5hbFJlZ2V4IHx8IG1hdGNoVW5zaWduZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcHV0ZUVyYXNQYXJzZSgpIHtcclxuICAgICAgICB2YXIgYWJiclBpZWNlcyA9IFtdLFxyXG4gICAgICAgICAgICBuYW1lUGllY2VzID0gW10sXHJcbiAgICAgICAgICAgIG5hcnJvd1BpZWNlcyA9IFtdLFxyXG4gICAgICAgICAgICBtaXhlZFBpZWNlcyA9IFtdLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBsLFxyXG4gICAgICAgICAgICBlcmFzTmFtZSxcclxuICAgICAgICAgICAgZXJhc0FiYnIsXHJcbiAgICAgICAgICAgIGVyYXNOYXJyb3csXHJcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XHJcbiAgICAgICAgICAgIGVyYXNOYW1lID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgZXJhc0FiYnIgPSByZWdleEVzY2FwZShlcmFzW2ldLmFiYnIpO1xyXG4gICAgICAgICAgICBlcmFzTmFycm93ID0gcmVnZXhFc2NhcGUoZXJhc1tpXS5uYXJyb3cpO1xyXG5cclxuICAgICAgICAgICAgbmFtZVBpZWNlcy5wdXNoKGVyYXNOYW1lKTtcclxuICAgICAgICAgICAgYWJiclBpZWNlcy5wdXNoKGVyYXNBYmJyKTtcclxuICAgICAgICAgICAgbmFycm93UGllY2VzLnB1c2goZXJhc05hcnJvdyk7XHJcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2goZXJhc05hbWUpO1xyXG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGVyYXNBYmJyKTtcclxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChlcmFzTmFycm93KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VyYXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcclxuICAgICAgICB0aGlzLl9lcmFzTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbmFtZVBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XHJcbiAgICAgICAgdGhpcy5fZXJhc0FiYnJSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGFiYnJQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xyXG4gICAgICAgIHRoaXMuX2VyYXNOYXJyb3dSZWdleCA9IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgICdeKCcgKyBuYXJyb3dQaWVjZXMuam9pbignfCcpICsgJyknLFxyXG4gICAgICAgICAgICAnaSdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZPUk1BVFRJTkdcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ2dnJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrWWVhcigpICUgMTAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydHRycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW4sIGdldHRlcikge1xyXG4gICAgICAgIGFkZEZvcm1hdFRva2VuKDAsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoXSwgMCwgZ2V0dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgJ3dlZWtZZWFyJyk7XHJcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsICd3ZWVrWWVhcicpO1xyXG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsICdpc29XZWVrWWVhcicpO1xyXG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCAnaXNvV2Vla1llYXInKTtcclxuXHJcbiAgICAvLyBBTElBU0VTXHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ0cnLCBtYXRjaFNpZ25lZCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdnJywgbWF0Y2hTaWduZWQpO1xyXG4gICAgYWRkUmVnZXhUb2tlbignR0cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdnZycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xyXG4gICAgYWRkUmVnZXhUb2tlbignR0dHR0cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnZycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuXHJcbiAgICBhZGRXZWVrUGFyc2VUb2tlbihcclxuICAgICAgICBbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLFxyXG4gICAgICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xyXG4gICAgICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xyXG4gICAgICAgIHdlZWtbdG9rZW5dID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTU9NRU5UU1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwoXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICB0aGlzLndlZWsoKSxcclxuICAgICAgICAgICAgdGhpcy53ZWVrZGF5KCkgKyB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3csXHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG95XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhcihpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgdGhpcy5pc29XZWVrKCksXHJcbiAgICAgICAgICAgIHRoaXMuaXNvV2Vla2RheSgpLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICA0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcigpIHtcclxuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIDEsIDQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElTT1dlZWtzSW5JU09XZWVrWWVhcigpIHtcclxuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy5pc29XZWVrWWVhcigpLCAxLCA0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXZWVrc0luWWVhcigpIHtcclxuICAgICAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcclxuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXZWVrc0luV2Vla1llYXIoKSB7XHJcbiAgICAgICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XHJcbiAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMud2Vla1llYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xyXG4gICAgICAgIHZhciB3ZWVrc1RhcmdldDtcclxuICAgICAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2Vla09mWWVhcih0aGlzLCBkb3csIGRveSkueWVhcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XHJcbiAgICAgICAgICAgIGlmICh3ZWVrID4gd2Vla3NUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHdlZWsgPSB3ZWVrc1RhcmdldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0V2Vla0FsbC5jYWxsKHRoaXMsIGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFdlZWtBbGwod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XHJcbiAgICAgICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcclxuICAgICAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XHJcblxyXG4gICAgICAgIHRoaXMueWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xyXG4gICAgICAgIHRoaXMubW9udGgoZGF0ZS5nZXRVVENNb250aCgpKTtcclxuICAgICAgICB0aGlzLmRhdGUoZGF0ZS5nZXRVVENEYXRlKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZPUk1BVFRJTkdcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignUScsIDAsICdRbycsICdxdWFydGVyJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xyXG4gICAgYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcclxuICAgICAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTU9NRU5UU1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbFxyXG4gICAgICAgICAgICA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKVxyXG4gICAgICAgICAgICA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgKHRoaXMubW9udGgoKSAlIDMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGT1JNQVRUSU5HXHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMl0sICdEbycsICdkYXRlJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ0QnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xyXG4gICAgYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgICBhZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxyXG4gICAgICAgIHJldHVybiBpc1N0cmljdFxyXG4gICAgICAgICAgICA/IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZVxyXG4gICAgICAgICAgICA6IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcclxuICAgIGFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xyXG4gICAgICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNT01FTlRTXHJcblxyXG4gICAgdmFyIGdldFNldERheU9mTW9udGggPSBtYWtlR2V0U2V0KCdEYXRlJywgdHJ1ZSk7XHJcblxyXG4gICAgLy8gRk9STUFUVElOR1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzXSwgJ0RERG8nLCAnZGF5T2ZZZWFyJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcclxuICAgIGFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhFTFBFUlNcclxuXHJcbiAgICAvLyBNT01FTlRTXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2V0RGF5T2ZZZWFyKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIGRheU9mWWVhciA9XHJcbiAgICAgICAgICAgIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpIC0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKSkgLyA4NjRlNVxyXG4gICAgICAgICAgICApICsgMTtcclxuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKGlucHV0IC0gZGF5T2ZZZWFyLCAnZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZPUk1BVFRJTkdcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyXSwgMCwgJ21pbnV0ZScpO1xyXG5cclxuICAgIC8vIFBBUlNJTkdcclxuXHJcbiAgICBhZGRSZWdleFRva2VuKCdtJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJIYXNaZXJvKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ21tJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gICAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcclxuXHJcbiAgICAvLyBNT01FTlRTXHJcblxyXG4gICAgdmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRk9STUFUVElOR1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCdzJywgWydzcycsIDJdLCAwLCAnc2Vjb25kJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ3MnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMkhhc1plcm8pO1xyXG4gICAgYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgICBhZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xyXG5cclxuICAgIC8vIE1PTUVOVFNcclxuXHJcbiAgICB2YXIgZ2V0U2V0U2Vjb25kID0gbWFrZUdldFNldCgnU2Vjb25kcycsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBGT1JNQVRUSU5HXHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1MnLCAzXSwgMCwgJ21pbGxpc2Vjb25kJyk7XHJcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1MnLCA0XSwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDtcclxuICAgIH0pO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTUycsIDVdLCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDtcclxuICAgIH0pO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1MnLCA2XSwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwO1xyXG4gICAgfSk7XHJcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1MnLCA3XSwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDtcclxuICAgIH0pO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTUycsIDhdLCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDtcclxuICAgIH0pO1xyXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTU1MnLCA5XSwgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcclxuICAgIGFkZFJlZ2V4VG9rZW4oJ1NTUycsIG1hdGNoMXRvMywgbWF0Y2gzKTtcclxuXHJcbiAgICB2YXIgdG9rZW4sIGdldFNldE1pbGxpc2Vjb25kO1xyXG4gICAgZm9yICh0b2tlbiA9ICdTU1NTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xyXG4gICAgICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQsIGFycmF5KSB7XHJcbiAgICAgICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XHJcbiAgICAgICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2V0TWlsbGlzZWNvbmQgPSBtYWtlR2V0U2V0KCdNaWxsaXNlY29uZHMnLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRk9STUFUVElOR1xyXG5cclxuICAgIGFkZEZvcm1hdFRva2VuKCd6JywgMCwgMCwgJ3pvbmVBYmJyJyk7XHJcbiAgICBhZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcclxuXHJcbiAgICAvLyBNT01FTlRTXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Wm9uZUFiYnIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRab25lTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb3RvID0gTW9tZW50LnByb3RvdHlwZTtcclxuXHJcbiAgICBwcm90by5hZGQgPSBhZGQ7XHJcbiAgICBwcm90by5jYWxlbmRhciA9IGNhbGVuZGFyJDE7XHJcbiAgICBwcm90by5jbG9uZSA9IGNsb25lO1xyXG4gICAgcHJvdG8uZGlmZiA9IGRpZmY7XHJcbiAgICBwcm90by5lbmRPZiA9IGVuZE9mO1xyXG4gICAgcHJvdG8uZm9ybWF0ID0gZm9ybWF0O1xyXG4gICAgcHJvdG8uZnJvbSA9IGZyb207XHJcbiAgICBwcm90by5mcm9tTm93ID0gZnJvbU5vdztcclxuICAgIHByb3RvLnRvID0gdG87XHJcbiAgICBwcm90by50b05vdyA9IHRvTm93O1xyXG4gICAgcHJvdG8uZ2V0ID0gc3RyaW5nR2V0O1xyXG4gICAgcHJvdG8uaW52YWxpZEF0ID0gaW52YWxpZEF0O1xyXG4gICAgcHJvdG8uaXNBZnRlciA9IGlzQWZ0ZXI7XHJcbiAgICBwcm90by5pc0JlZm9yZSA9IGlzQmVmb3JlO1xyXG4gICAgcHJvdG8uaXNCZXR3ZWVuID0gaXNCZXR3ZWVuO1xyXG4gICAgcHJvdG8uaXNTYW1lID0gaXNTYW1lO1xyXG4gICAgcHJvdG8uaXNTYW1lT3JBZnRlciA9IGlzU2FtZU9yQWZ0ZXI7XHJcbiAgICBwcm90by5pc1NhbWVPckJlZm9yZSA9IGlzU2FtZU9yQmVmb3JlO1xyXG4gICAgcHJvdG8uaXNWYWxpZCA9IGlzVmFsaWQkMjtcclxuICAgIHByb3RvLmxhbmcgPSBsYW5nO1xyXG4gICAgcHJvdG8ubG9jYWxlID0gbG9jYWxlO1xyXG4gICAgcHJvdG8ubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XHJcbiAgICBwcm90by5tYXggPSBwcm90b3R5cGVNYXg7XHJcbiAgICBwcm90by5taW4gPSBwcm90b3R5cGVNaW47XHJcbiAgICBwcm90by5wYXJzaW5nRmxhZ3MgPSBwYXJzaW5nRmxhZ3M7XHJcbiAgICBwcm90by5zZXQgPSBzdHJpbmdTZXQ7XHJcbiAgICBwcm90by5zdGFydE9mID0gc3RhcnRPZjtcclxuICAgIHByb3RvLnN1YnRyYWN0ID0gc3VidHJhY3Q7XHJcbiAgICBwcm90by50b0FycmF5ID0gdG9BcnJheTtcclxuICAgIHByb3RvLnRvT2JqZWN0ID0gdG9PYmplY3Q7XHJcbiAgICBwcm90by50b0RhdGUgPSB0b0RhdGU7XHJcbiAgICBwcm90by50b0lTT1N0cmluZyA9IHRvSVNPU3RyaW5nO1xyXG4gICAgcHJvdG8uaW5zcGVjdCA9IGluc3BlY3Q7XHJcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmZvciAhPSBudWxsKSB7XHJcbiAgICAgICAgcHJvdG9bU3ltYm9sLmZvcignbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnTW9tZW50PCcgKyB0aGlzLmZvcm1hdCgpICsgJz4nO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcm90by50b0pTT04gPSB0b0pTT047XHJcbiAgICBwcm90by50b1N0cmluZyA9IHRvU3RyaW5nO1xyXG4gICAgcHJvdG8udW5peCA9IHVuaXg7XHJcbiAgICBwcm90by52YWx1ZU9mID0gdmFsdWVPZjtcclxuICAgIHByb3RvLmNyZWF0aW9uRGF0YSA9IGNyZWF0aW9uRGF0YTtcclxuICAgIHByb3RvLmVyYU5hbWUgPSBnZXRFcmFOYW1lO1xyXG4gICAgcHJvdG8uZXJhTmFycm93ID0gZ2V0RXJhTmFycm93O1xyXG4gICAgcHJvdG8uZXJhQWJiciA9IGdldEVyYUFiYnI7XHJcbiAgICBwcm90by5lcmFZZWFyID0gZ2V0RXJhWWVhcjtcclxuICAgIHByb3RvLnllYXIgPSBnZXRTZXRZZWFyO1xyXG4gICAgcHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XHJcbiAgICBwcm90by53ZWVrWWVhciA9IGdldFNldFdlZWtZZWFyO1xyXG4gICAgcHJvdG8uaXNvV2Vla1llYXIgPSBnZXRTZXRJU09XZWVrWWVhcjtcclxuICAgIHByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XHJcbiAgICBwcm90by5tb250aCA9IGdldFNldE1vbnRoO1xyXG4gICAgcHJvdG8uZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aDtcclxuICAgIHByb3RvLndlZWsgPSBwcm90by53ZWVrcyA9IGdldFNldFdlZWs7XHJcbiAgICBwcm90by5pc29XZWVrID0gcHJvdG8uaXNvV2Vla3MgPSBnZXRTZXRJU09XZWVrO1xyXG4gICAgcHJvdG8ud2Vla3NJblllYXIgPSBnZXRXZWVrc0luWWVhcjtcclxuICAgIHByb3RvLndlZWtzSW5XZWVrWWVhciA9IGdldFdlZWtzSW5XZWVrWWVhcjtcclxuICAgIHByb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XHJcbiAgICBwcm90by5pc29XZWVrc0luSVNPV2Vla1llYXIgPSBnZXRJU09XZWVrc0luSVNPV2Vla1llYXI7XHJcbiAgICBwcm90by5kYXRlID0gZ2V0U2V0RGF5T2ZNb250aDtcclxuICAgIHByb3RvLmRheSA9IHByb3RvLmRheXMgPSBnZXRTZXREYXlPZldlZWs7XHJcbiAgICBwcm90by53ZWVrZGF5ID0gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrO1xyXG4gICAgcHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcclxuICAgIHByb3RvLmRheU9mWWVhciA9IGdldFNldERheU9mWWVhcjtcclxuICAgIHByb3RvLmhvdXIgPSBwcm90by5ob3VycyA9IGdldFNldEhvdXI7XHJcbiAgICBwcm90by5taW51dGUgPSBwcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xyXG4gICAgcHJvdG8uc2Vjb25kID0gcHJvdG8uc2Vjb25kcyA9IGdldFNldFNlY29uZDtcclxuICAgIHByb3RvLm1pbGxpc2Vjb25kID0gcHJvdG8ubWlsbGlzZWNvbmRzID0gZ2V0U2V0TWlsbGlzZWNvbmQ7XHJcbiAgICBwcm90by51dGNPZmZzZXQgPSBnZXRTZXRPZmZzZXQ7XHJcbiAgICBwcm90by51dGMgPSBzZXRPZmZzZXRUb1VUQztcclxuICAgIHByb3RvLmxvY2FsID0gc2V0T2Zmc2V0VG9Mb2NhbDtcclxuICAgIHByb3RvLnBhcnNlWm9uZSA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xyXG4gICAgcHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcclxuICAgIHByb3RvLmlzRFNUID0gaXNEYXlsaWdodFNhdmluZ1RpbWU7XHJcbiAgICBwcm90by5pc0xvY2FsID0gaXNMb2NhbDtcclxuICAgIHByb3RvLmlzVXRjT2Zmc2V0ID0gaXNVdGNPZmZzZXQ7XHJcbiAgICBwcm90by5pc1V0YyA9IGlzVXRjO1xyXG4gICAgcHJvdG8uaXNVVEMgPSBpc1V0YztcclxuICAgIHByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XHJcbiAgICBwcm90by56b25lTmFtZSA9IGdldFpvbmVOYW1lO1xyXG4gICAgcHJvdG8uZGF0ZXMgPSBkZXByZWNhdGUoXHJcbiAgICAgICAgJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJyxcclxuICAgICAgICBnZXRTZXREYXlPZk1vbnRoXHJcbiAgICApO1xyXG4gICAgcHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKFxyXG4gICAgICAgICdtb250aHMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbnRoIGluc3RlYWQnLFxyXG4gICAgICAgIGdldFNldE1vbnRoXHJcbiAgICApO1xyXG4gICAgcHJvdG8ueWVhcnMgPSBkZXByZWNhdGUoXHJcbiAgICAgICAgJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQnLFxyXG4gICAgICAgIGdldFNldFllYXJcclxuICAgICk7XHJcbiAgICBwcm90by56b25lID0gZGVwcmVjYXRlKFxyXG4gICAgICAgICdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsXHJcbiAgICAgICAgZ2V0U2V0Wm9uZVxyXG4gICAgKTtcclxuICAgIHByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZShcclxuICAgICAgICAnaXNEU1RTaGlmdGVkIGlzIGRlcHJlY2F0ZWQuIFNlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RzdC1zaGlmdGVkLyBmb3IgbW9yZSBpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkXHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVuaXgoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJblpvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cykucGFyc2Vab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJlUGFyc2VQb3N0Rm9ybWF0KHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb3RvJDEgPSBMb2NhbGUucHJvdG90eXBlO1xyXG5cclxuICAgIHByb3RvJDEuY2FsZW5kYXIgPSBjYWxlbmRhcjtcclxuICAgIHByb3RvJDEubG9uZ0RhdGVGb3JtYXQgPSBsb25nRGF0ZUZvcm1hdDtcclxuICAgIHByb3RvJDEuaW52YWxpZERhdGUgPSBpbnZhbGlkRGF0ZTtcclxuICAgIHByb3RvJDEub3JkaW5hbCA9IG9yZGluYWw7XHJcbiAgICBwcm90byQxLnByZXBhcnNlID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xyXG4gICAgcHJvdG8kMS5wb3N0Zm9ybWF0ID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xyXG4gICAgcHJvdG8kMS5yZWxhdGl2ZVRpbWUgPSByZWxhdGl2ZVRpbWU7XHJcbiAgICBwcm90byQxLnBhc3RGdXR1cmUgPSBwYXN0RnV0dXJlO1xyXG4gICAgcHJvdG8kMS5zZXQgPSBzZXQ7XHJcbiAgICBwcm90byQxLmVyYXMgPSBsb2NhbGVFcmFzO1xyXG4gICAgcHJvdG8kMS5lcmFzUGFyc2UgPSBsb2NhbGVFcmFzUGFyc2U7XHJcbiAgICBwcm90byQxLmVyYXNDb252ZXJ0WWVhciA9IGxvY2FsZUVyYXNDb252ZXJ0WWVhcjtcclxuICAgIHByb3RvJDEuZXJhc0FiYnJSZWdleCA9IGVyYXNBYmJyUmVnZXg7XHJcbiAgICBwcm90byQxLmVyYXNOYW1lUmVnZXggPSBlcmFzTmFtZVJlZ2V4O1xyXG4gICAgcHJvdG8kMS5lcmFzTmFycm93UmVnZXggPSBlcmFzTmFycm93UmVnZXg7XHJcblxyXG4gICAgcHJvdG8kMS5tb250aHMgPSBsb2NhbGVNb250aHM7XHJcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0ID0gbG9jYWxlTW9udGhzU2hvcnQ7XHJcbiAgICBwcm90byQxLm1vbnRoc1BhcnNlID0gbG9jYWxlTW9udGhzUGFyc2U7XHJcbiAgICBwcm90byQxLm1vbnRoc1JlZ2V4ID0gbW9udGhzUmVnZXg7XHJcbiAgICBwcm90byQxLm1vbnRoc1Nob3J0UmVnZXggPSBtb250aHNTaG9ydFJlZ2V4O1xyXG4gICAgcHJvdG8kMS53ZWVrID0gbG9jYWxlV2VlaztcclxuICAgIHByb3RvJDEuZmlyc3REYXlPZlllYXIgPSBsb2NhbGVGaXJzdERheU9mWWVhcjtcclxuICAgIHByb3RvJDEuZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcclxuXHJcbiAgICBwcm90byQxLndlZWtkYXlzID0gbG9jYWxlV2Vla2RheXM7XHJcbiAgICBwcm90byQxLndlZWtkYXlzTWluID0gbG9jYWxlV2Vla2RheXNNaW47XHJcbiAgICBwcm90byQxLndlZWtkYXlzU2hvcnQgPSBsb2NhbGVXZWVrZGF5c1Nob3J0O1xyXG4gICAgcHJvdG8kMS53ZWVrZGF5c1BhcnNlID0gbG9jYWxlV2Vla2RheXNQYXJzZTtcclxuXHJcbiAgICBwcm90byQxLndlZWtkYXlzUmVnZXggPSB3ZWVrZGF5c1JlZ2V4O1xyXG4gICAgcHJvdG8kMS53ZWVrZGF5c1Nob3J0UmVnZXggPSB3ZWVrZGF5c1Nob3J0UmVnZXg7XHJcbiAgICBwcm90byQxLndlZWtkYXlzTWluUmVnZXggPSB3ZWVrZGF5c01pblJlZ2V4O1xyXG5cclxuICAgIHByb3RvJDEuaXNQTSA9IGxvY2FsZUlzUE07XHJcbiAgICBwcm90byQxLm1lcmlkaWVtID0gbG9jYWxlTWVyaWRpZW07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcclxuICAgICAgICAgICAgdXRjID0gY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xyXG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xyXG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaSxcclxuICAgICAgICAgICAgb3V0ID0gW107XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCBpLCBmaWVsZCwgJ21vbnRoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gKClcclxuICAgIC8vICg1KVxyXG4gICAgLy8gKGZtdCwgNSlcclxuICAgIC8vIChmbXQpXHJcbiAgICAvLyAodHJ1ZSlcclxuICAgIC8vICh0cnVlLCA1KVxyXG4gICAgLy8gKHRydWUsIGZtdCwgNSlcclxuICAgIC8vICh0cnVlLCBmbXQpXHJcbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxvY2FsZVNvcnRlZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcclxuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XHJcbiAgICAgICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXHJcbiAgICAgICAgICAgIHNoaWZ0ID0gbG9jYWxlU29ydGVkID8gbG9jYWxlLl93ZWVrLmRvdyA6IDAsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIG91dCA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0JDEoZm9ybWF0LCAoaW5kZXggKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIChpICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzKGZvcm1hdCwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRocycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RNb250aHNTaG9ydChmb3JtYXQsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHNTaG9ydCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5cyhsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5cycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzU2hvcnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNNaW4obG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNNaW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xyXG4gICAgICAgIGVyYXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2luY2U6ICcwMDAxLTAxLTAxJyxcclxuICAgICAgICAgICAgICAgIHVudGlsOiArSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQW5ubyBEb21pbmknLFxyXG4gICAgICAgICAgICAgICAgbmFycm93OiAnQUQnLFxyXG4gICAgICAgICAgICAgICAgYWJicjogJ0FEJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2luY2U6ICcwMDAwLTEyLTMxJyxcclxuICAgICAgICAgICAgICAgIHVudGlsOiAtSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmVmb3JlIENocmlzdCcsXHJcbiAgICAgICAgICAgICAgICBuYXJyb3c6ICdCQycsXHJcbiAgICAgICAgICAgICAgICBhYmJyOiAnQkMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXHJcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID1cclxuICAgICAgICAgICAgICAgICAgICB0b0ludCgobnVtYmVyICUgMTAwKSAvIDEwKSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICduZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdyZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGgnO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXHJcblxyXG4gICAgaG9va3MubGFuZyA9IGRlcHJlY2F0ZShcclxuICAgICAgICAnbW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4nLFxyXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZVxyXG4gICAgKTtcclxuICAgIGhvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKFxyXG4gICAgICAgICdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJyxcclxuICAgICAgICBnZXRMb2NhbGVcclxuICAgICk7XHJcblxyXG4gICAgdmFyIG1hdGhBYnMgPSBNYXRoLmFicztcclxuXHJcbiAgICBmdW5jdGlvbiBhYnMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xyXG5cclxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XHJcbiAgICAgICAgdGhpcy5fZGF5cyA9IG1hdGhBYnModGhpcy5fZGF5cyk7XHJcbiAgICAgICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xyXG5cclxuICAgICAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xyXG4gICAgICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcclxuICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XHJcbiAgICAgICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XHJcbiAgICAgICAgZGF0YS5tb250aHMgPSBtYXRoQWJzKGRhdGEubW9udGhzKTtcclxuICAgICAgICBkYXRhLnllYXJzID0gbWF0aEFicyhkYXRhLnllYXJzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU3VidHJhY3QkMShkdXJhdGlvbiwgaW5wdXQsIHZhbHVlLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVEdXJhdGlvbihpbnB1dCwgdmFsdWUpO1xyXG5cclxuICAgICAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XHJcbiAgICAgICAgZHVyYXRpb24uX2RheXMgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XHJcbiAgICAgICAgZHVyYXRpb24uX21vbnRocyArPSBkaXJlY3Rpb24gKiBvdGhlci5fbW9udGhzO1xyXG5cclxuICAgICAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIGFkZCgxLCAncycpIG9yIGFkZChkdXJhdGlvbilcclxuICAgIGZ1bmN0aW9uIGFkZCQxKGlucHV0LCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0JDEoaW5wdXQsIHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWJzQ2VpbChudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnViYmxlKCkge1xyXG4gICAgICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHMsXHJcbiAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzLFxyXG4gICAgICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMsXHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9kYXRhLFxyXG4gICAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBob3VycyxcclxuICAgICAgICAgICAgeWVhcnMsXHJcbiAgICAgICAgICAgIG1vbnRoc0Zyb21EYXlzO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XHJcbiAgICAgICAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhKFxyXG4gICAgICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcclxuICAgICAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xyXG4gICAgICAgICAgICBkYXlzID0gMDtcclxuICAgICAgICAgICAgbW9udGhzID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcclxuICAgICAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXHJcbiAgICAgICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xyXG5cclxuICAgICAgICBzZWNvbmRzID0gYWJzRmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XHJcbiAgICAgICAgZGF0YS5zZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xyXG5cclxuICAgICAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XHJcblxyXG4gICAgICAgIGhvdXJzID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgICAgICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcclxuXHJcbiAgICAgICAgZGF5cyArPSBhYnNGbG9vcihob3VycyAvIDI0KTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xyXG4gICAgICAgIG1vbnRoc0Zyb21EYXlzID0gYWJzRmxvb3IoZGF5c1RvTW9udGhzKGRheXMpKTtcclxuICAgICAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XHJcbiAgICAgICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xyXG5cclxuICAgICAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXHJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XHJcbiAgICAgICAgbW9udGhzICU9IDEyO1xyXG5cclxuICAgICAgICBkYXRhLmRheXMgPSBkYXlzO1xyXG4gICAgICAgIGRhdGEubW9udGhzID0gbW9udGhzO1xyXG4gICAgICAgIGRhdGEueWVhcnMgPSB5ZWFycztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheXMpIHtcclxuICAgICAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXHJcbiAgICAgICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXHJcbiAgICAgICAgcmV0dXJuIChkYXlzICogNDgwMCkgLyAxNDYwOTc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW9udGhzVG9EYXlzKG1vbnRocykge1xyXG4gICAgICAgIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xyXG4gICAgICAgIHJldHVybiAobW9udGhzICogMTQ2MDk3KSAvIDQ4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXModW5pdHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOYU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkYXlzLFxyXG4gICAgICAgICAgICBtb250aHMsXHJcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcclxuXHJcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XHJcblxyXG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21vbnRoJyB8fCB1bml0cyA9PT0gJ3F1YXJ0ZXInIHx8IHVuaXRzID09PSAneWVhcicpIHtcclxuICAgICAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcclxuICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRocyAvIDEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxyXG4gICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAxNDQwICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKGRheXMgKiA4NjRlNSkgKyBtaWxsaXNlY29uZHM7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biB1bml0ICcgKyB1bml0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZUFzKGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXMoYWxpYXMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpLFxyXG4gICAgICAgIGFzU2Vjb25kcyA9IG1ha2VBcygncycpLFxyXG4gICAgICAgIGFzTWludXRlcyA9IG1ha2VBcygnbScpLFxyXG4gICAgICAgIGFzSG91cnMgPSBtYWtlQXMoJ2gnKSxcclxuICAgICAgICBhc0RheXMgPSBtYWtlQXMoJ2QnKSxcclxuICAgICAgICBhc1dlZWtzID0gbWFrZUFzKCd3JyksXHJcbiAgICAgICAgYXNNb250aHMgPSBtYWtlQXMoJ00nKSxcclxuICAgICAgICBhc1F1YXJ0ZXJzID0gbWFrZUFzKCdRJyksXHJcbiAgICAgICAgYXNZZWFycyA9IG1ha2VBcygneScpLFxyXG4gICAgICAgIHZhbHVlT2YkMSA9IGFzTWlsbGlzZWNvbmRzO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb25lJDEoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldCQyKHVuaXRzKSB7XHJcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpc1t1bml0cyArICdzJ10oKSA6IE5hTjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9kYXRhW25hbWVdIDogTmFOO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ21pbGxpc2Vjb25kcycpLFxyXG4gICAgICAgIHNlY29uZHMgPSBtYWtlR2V0dGVyKCdzZWNvbmRzJyksXHJcbiAgICAgICAgbWludXRlcyA9IG1ha2VHZXR0ZXIoJ21pbnV0ZXMnKSxcclxuICAgICAgICBob3VycyA9IG1ha2VHZXR0ZXIoJ2hvdXJzJyksXHJcbiAgICAgICAgZGF5cyA9IG1ha2VHZXR0ZXIoJ2RheXMnKSxcclxuICAgICAgICBtb250aHMgPSBtYWtlR2V0dGVyKCdtb250aHMnKSxcclxuICAgICAgICB5ZWFycyA9IG1ha2VHZXR0ZXIoJ3llYXJzJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gd2Vla3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic0Zsb29yKHRoaXMuZGF5cygpIC8gNyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcclxuICAgICAgICB0aHJlc2hvbGRzID0ge1xyXG4gICAgICAgICAgICBzczogNDQsIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xyXG4gICAgICAgICAgICBzOiA0NSwgLy8gc2Vjb25kcyB0byBtaW51dGVcclxuICAgICAgICAgICAgbTogNDUsIC8vIG1pbnV0ZXMgdG8gaG91clxyXG4gICAgICAgICAgICBoOiAyMiwgLy8gaG91cnMgdG8gZGF5XHJcbiAgICAgICAgICAgIGQ6IDI2LCAvLyBkYXlzIHRvIG1vbnRoL3dlZWtcclxuICAgICAgICAgICAgdzogbnVsbCwgLy8gd2Vla3MgdG8gbW9udGhcclxuICAgICAgICAgICAgTTogMTEsIC8vIG1vbnRocyB0byB5ZWFyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxyXG4gICAgZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyaW5nLCBudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGlzRnV0dXJlLCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW1iZXIgfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWxhdGl2ZVRpbWUkMShwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgdGhyZXNob2xkcywgbG9jYWxlKSB7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpLFxyXG4gICAgICAgICAgICBzZWNvbmRzID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSksXHJcbiAgICAgICAgICAgIG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKSxcclxuICAgICAgICAgICAgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKSxcclxuICAgICAgICAgICAgZGF5cyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpLFxyXG4gICAgICAgICAgICBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKSxcclxuICAgICAgICAgICAgd2Vla3MgPSByb3VuZChkdXJhdGlvbi5hcygndycpKSxcclxuICAgICAgICAgICAgeWVhcnMgPSByb3VuZChkdXJhdGlvbi5hcygneScpKSxcclxuICAgICAgICAgICAgYSA9XHJcbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlY29uZHMgPCB0aHJlc2hvbGRzLnMgJiYgWydzcycsIHNlY29uZHNdKSB8fFxyXG4gICAgICAgICAgICAgICAgKG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSkgfHxcclxuICAgICAgICAgICAgICAgIChtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSkgfHxcclxuICAgICAgICAgICAgICAgIChob3VycyA8PSAxICYmIFsnaCddKSB8fFxyXG4gICAgICAgICAgICAgICAgKGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10pIHx8XHJcbiAgICAgICAgICAgICAgICAoZGF5cyA8PSAxICYmIFsnZCddKSB8fFxyXG4gICAgICAgICAgICAgICAgKGRheXMgPCB0aHJlc2hvbGRzLmQgJiYgWydkZCcsIGRheXNdKTtcclxuXHJcbiAgICAgICAgaWYgKHRocmVzaG9sZHMudyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGEgPVxyXG4gICAgICAgICAgICAgICAgYSB8fFxyXG4gICAgICAgICAgICAgICAgKHdlZWtzIDw9IDEgJiYgWyd3J10pIHx8XHJcbiAgICAgICAgICAgICAgICAod2Vla3MgPCB0aHJlc2hvbGRzLncgJiYgWyd3dycsIHdlZWtzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEgPSBhIHx8XHJcbiAgICAgICAgICAgIChtb250aHMgPD0gMSAmJiBbJ00nXSkgfHxcclxuICAgICAgICAgICAgKG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSkgfHxcclxuICAgICAgICAgICAgKHllYXJzIDw9IDEgJiYgWyd5J10pIHx8IFsneXknLCB5ZWFyc107XHJcblxyXG4gICAgICAgIGFbMl0gPSB3aXRob3V0U3VmZml4O1xyXG4gICAgICAgIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xyXG4gICAgICAgIGFbNF0gPSBsb2NhbGU7XHJcbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcclxuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nKHJvdW5kaW5nRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiByb3VuZGluZ0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcclxuICAgIGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQsIGxpbWl0KSB7XHJcbiAgICAgICAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XHJcbiAgICAgICAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XHJcbiAgICAgICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGh1bWFuaXplKGFyZ1dpdGhTdWZmaXgsIGFyZ1RocmVzaG9sZHMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHdpdGhTdWZmaXggPSBmYWxzZSxcclxuICAgICAgICAgICAgdGggPSB0aHJlc2hvbGRzLFxyXG4gICAgICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgICAgIG91dHB1dDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdXaXRoU3VmZml4ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBhcmdUaHJlc2hvbGRzID0gYXJnV2l0aFN1ZmZpeDtcclxuICAgICAgICAgICAgYXJnV2l0aFN1ZmZpeCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGFyZ1dpdGhTdWZmaXggPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICB3aXRoU3VmZml4ID0gYXJnV2l0aFN1ZmZpeDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUaHJlc2hvbGRzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aCA9IE9iamVjdC5hc3NpZ24oe30sIHRocmVzaG9sZHMsIGFyZ1RocmVzaG9sZHMpO1xyXG4gICAgICAgICAgICBpZiAoYXJnVGhyZXNob2xkcy5zICE9IG51bGwgJiYgYXJnVGhyZXNob2xkcy5zcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aC5zcyA9IGFyZ1RocmVzaG9sZHMucyAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xyXG4gICAgICAgIG91dHB1dCA9IHJlbGF0aXZlVGltZSQxKHRoaXMsICF3aXRoU3VmZml4LCB0aCwgbG9jYWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHdpdGhTdWZmaXgpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcclxuXHJcbiAgICBmdW5jdGlvbiBzaWduKHgpIHtcclxuICAgICAgICByZXR1cm4gKHggPiAwKSAtICh4IDwgMCkgfHwgK3g7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9JU09TdHJpbmckMSgpIHtcclxuICAgICAgICAvLyBmb3IgSVNPIHN0cmluZ3Mgd2UgZG8gbm90IHVzZSB0aGUgbm9ybWFsIGJ1YmJsaW5nIHJ1bGVzOlxyXG4gICAgICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcclxuICAgICAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXHJcbiAgICAgICAgLy8gICogbW9udGhzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSB5ZWFyc1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXHJcbiAgICAgICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXHJcbiAgICAgICAgLy8gYW5kIGFsc28gbm90IGJldHdlZW4gZGF5cyBhbmQgbW9udGhzICgyOC0zMSBkYXlzIHBlciBtb250aClcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlY29uZHMgPSBhYnMkMSh0aGlzLl9taWxsaXNlY29uZHMpIC8gMTAwMCxcclxuICAgICAgICAgICAgZGF5cyA9IGFicyQxKHRoaXMuX2RheXMpLFxyXG4gICAgICAgICAgICBtb250aHMgPSBhYnMkMSh0aGlzLl9tb250aHMpLFxyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBob3VycyxcclxuICAgICAgICAgICAgeWVhcnMsXHJcbiAgICAgICAgICAgIHMsXHJcbiAgICAgICAgICAgIHRvdGFsID0gdGhpcy5hc1NlY29uZHMoKSxcclxuICAgICAgICAgICAgdG90YWxTaWduLFxyXG4gICAgICAgICAgICB5bVNpZ24sXHJcbiAgICAgICAgICAgIGRheXNTaWduLFxyXG4gICAgICAgICAgICBobXNTaWduO1xyXG5cclxuICAgICAgICBpZiAoIXRvdGFsKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cclxuICAgICAgICAgICAgLy8gYnV0IG5vdCBvdGhlciBKUyAoZ29vZy5kYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gJ1AwRCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAzNjAwIHNlY29uZHMgLT4gNjAgbWludXRlcyAtPiAxIGhvdXJcclxuICAgICAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgICAgICBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgc2Vjb25kcyAlPSA2MDtcclxuICAgICAgICBtaW51dGVzICU9IDYwO1xyXG5cclxuICAgICAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXHJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XHJcbiAgICAgICAgbW9udGhzICU9IDEyO1xyXG5cclxuICAgICAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xyXG4gICAgICAgIHMgPSBzZWNvbmRzID8gc2Vjb25kcy50b0ZpeGVkKDMpLnJlcGxhY2UoL1xcLj8wKyQvLCAnJykgOiAnJztcclxuXHJcbiAgICAgICAgdG90YWxTaWduID0gdG90YWwgPCAwID8gJy0nIDogJyc7XHJcbiAgICAgICAgeW1TaWduID0gc2lnbih0aGlzLl9tb250aHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xyXG4gICAgICAgIGRheXNTaWduID0gc2lnbih0aGlzLl9kYXlzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcclxuICAgICAgICBobXNTaWduID0gc2lnbih0aGlzLl9taWxsaXNlY29uZHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0b3RhbFNpZ24gK1xyXG4gICAgICAgICAgICAnUCcgK1xyXG4gICAgICAgICAgICAoeWVhcnMgPyB5bVNpZ24gKyB5ZWFycyArICdZJyA6ICcnKSArXHJcbiAgICAgICAgICAgIChtb250aHMgPyB5bVNpZ24gKyBtb250aHMgKyAnTScgOiAnJykgK1xyXG4gICAgICAgICAgICAoZGF5cyA/IGRheXNTaWduICsgZGF5cyArICdEJyA6ICcnKSArXHJcbiAgICAgICAgICAgIChob3VycyB8fCBtaW51dGVzIHx8IHNlY29uZHMgPyAnVCcgOiAnJykgK1xyXG4gICAgICAgICAgICAoaG91cnMgPyBobXNTaWduICsgaG91cnMgKyAnSCcgOiAnJykgK1xyXG4gICAgICAgICAgICAobWludXRlcyA/IGhtc1NpZ24gKyBtaW51dGVzICsgJ00nIDogJycpICtcclxuICAgICAgICAgICAgKHNlY29uZHMgPyBobXNTaWduICsgcyArICdTJyA6ICcnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb3RvJDIgPSBEdXJhdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gICAgcHJvdG8kMi5pc1ZhbGlkID0gaXNWYWxpZCQxO1xyXG4gICAgcHJvdG8kMi5hYnMgPSBhYnM7XHJcbiAgICBwcm90byQyLmFkZCA9IGFkZCQxO1xyXG4gICAgcHJvdG8kMi5zdWJ0cmFjdCA9IHN1YnRyYWN0JDE7XHJcbiAgICBwcm90byQyLmFzID0gYXM7XHJcbiAgICBwcm90byQyLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XHJcbiAgICBwcm90byQyLmFzU2Vjb25kcyA9IGFzU2Vjb25kcztcclxuICAgIHByb3RvJDIuYXNNaW51dGVzID0gYXNNaW51dGVzO1xyXG4gICAgcHJvdG8kMi5hc0hvdXJzID0gYXNIb3VycztcclxuICAgIHByb3RvJDIuYXNEYXlzID0gYXNEYXlzO1xyXG4gICAgcHJvdG8kMi5hc1dlZWtzID0gYXNXZWVrcztcclxuICAgIHByb3RvJDIuYXNNb250aHMgPSBhc01vbnRocztcclxuICAgIHByb3RvJDIuYXNRdWFydGVycyA9IGFzUXVhcnRlcnM7XHJcbiAgICBwcm90byQyLmFzWWVhcnMgPSBhc1llYXJzO1xyXG4gICAgcHJvdG8kMi52YWx1ZU9mID0gdmFsdWVPZiQxO1xyXG4gICAgcHJvdG8kMi5fYnViYmxlID0gYnViYmxlO1xyXG4gICAgcHJvdG8kMi5jbG9uZSA9IGNsb25lJDE7XHJcbiAgICBwcm90byQyLmdldCA9IGdldCQyO1xyXG4gICAgcHJvdG8kMi5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHM7XHJcbiAgICBwcm90byQyLnNlY29uZHMgPSBzZWNvbmRzO1xyXG4gICAgcHJvdG8kMi5taW51dGVzID0gbWludXRlcztcclxuICAgIHByb3RvJDIuaG91cnMgPSBob3VycztcclxuICAgIHByb3RvJDIuZGF5cyA9IGRheXM7XHJcbiAgICBwcm90byQyLndlZWtzID0gd2Vla3M7XHJcbiAgICBwcm90byQyLm1vbnRocyA9IG1vbnRocztcclxuICAgIHByb3RvJDIueWVhcnMgPSB5ZWFycztcclxuICAgIHByb3RvJDIuaHVtYW5pemUgPSBodW1hbml6ZTtcclxuICAgIHByb3RvJDIudG9JU09TdHJpbmcgPSB0b0lTT1N0cmluZyQxO1xyXG4gICAgcHJvdG8kMi50b1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XHJcbiAgICBwcm90byQyLnRvSlNPTiA9IHRvSVNPU3RyaW5nJDE7XHJcbiAgICBwcm90byQyLmxvY2FsZSA9IGxvY2FsZTtcclxuICAgIHByb3RvJDIubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XHJcblxyXG4gICAgcHJvdG8kMi50b0lzb1N0cmluZyA9IGRlcHJlY2F0ZShcclxuICAgICAgICAndG9Jc29TdHJpbmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRvSVNPU3RyaW5nKCkgaW5zdGVhZCAobm90aWNlIHRoZSBjYXBpdGFscyknLFxyXG4gICAgICAgIHRvSVNPU3RyaW5nJDFcclxuICAgICk7XHJcbiAgICBwcm90byQyLmxhbmcgPSBsYW5nO1xyXG5cclxuICAgIC8vIEZPUk1BVFRJTkdcclxuXHJcbiAgICBhZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XHJcbiAgICBhZGRGb3JtYXRUb2tlbigneCcsIDAsIDAsICd2YWx1ZU9mJyk7XHJcblxyXG4gICAgLy8gUEFSU0lOR1xyXG5cclxuICAgIGFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XHJcbiAgICBhZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xyXG4gICAgYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQpICogMTAwMCk7XHJcbiAgICB9KTtcclxuICAgIGFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8hIG1vbWVudC5qc1xyXG5cclxuICAgIGhvb2tzLnZlcnNpb24gPSAnMi4zMC4xJztcclxuXHJcbiAgICBzZXRIb29rQ2FsbGJhY2soY3JlYXRlTG9jYWwpO1xyXG5cclxuICAgIGhvb2tzLmZuID0gcHJvdG87XHJcbiAgICBob29rcy5taW4gPSBtaW47XHJcbiAgICBob29rcy5tYXggPSBtYXg7XHJcbiAgICBob29rcy5ub3cgPSBub3c7XHJcbiAgICBob29rcy51dGMgPSBjcmVhdGVVVEM7XHJcbiAgICBob29rcy51bml4ID0gY3JlYXRlVW5peDtcclxuICAgIGhvb2tzLm1vbnRocyA9IGxpc3RNb250aHM7XHJcbiAgICBob29rcy5pc0RhdGUgPSBpc0RhdGU7XHJcbiAgICBob29rcy5sb2NhbGUgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XHJcbiAgICBob29rcy5pbnZhbGlkID0gY3JlYXRlSW52YWxpZDtcclxuICAgIGhvb2tzLmR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb247XHJcbiAgICBob29rcy5pc01vbWVudCA9IGlzTW9tZW50O1xyXG4gICAgaG9va3Mud2Vla2RheXMgPSBsaXN0V2Vla2RheXM7XHJcbiAgICBob29rcy5wYXJzZVpvbmUgPSBjcmVhdGVJblpvbmU7XHJcbiAgICBob29rcy5sb2NhbGVEYXRhID0gZ2V0TG9jYWxlO1xyXG4gICAgaG9va3MuaXNEdXJhdGlvbiA9IGlzRHVyYXRpb247XHJcbiAgICBob29rcy5tb250aHNTaG9ydCA9IGxpc3RNb250aHNTaG9ydDtcclxuICAgIGhvb2tzLndlZWtkYXlzTWluID0gbGlzdFdlZWtkYXlzTWluO1xyXG4gICAgaG9va3MuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xyXG4gICAgaG9va3MudXBkYXRlTG9jYWxlID0gdXBkYXRlTG9jYWxlO1xyXG4gICAgaG9va3MubG9jYWxlcyA9IGxpc3RMb2NhbGVzO1xyXG4gICAgaG9va3Mud2Vla2RheXNTaG9ydCA9IGxpc3RXZWVrZGF5c1Nob3J0O1xyXG4gICAgaG9va3Mubm9ybWFsaXplVW5pdHMgPSBub3JtYWxpemVVbml0cztcclxuICAgIGhvb2tzLnJlbGF0aXZlVGltZVJvdW5kaW5nID0gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmc7XHJcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XHJcbiAgICBob29rcy5jYWxlbmRhckZvcm1hdCA9IGdldENhbGVuZGFyRm9ybWF0O1xyXG4gICAgaG9va3MucHJvdG90eXBlID0gcHJvdG87XHJcblxyXG4gICAgLy8gY3VycmVudGx5IEhUTUw1IGlucHV0IHR5cGUgb25seSBzdXBwb3J0cyAyNC1ob3VyIGZvcm1hdHNcclxuICAgIGhvb2tzLkhUTUw1X0ZNVCA9IHtcclxuICAgICAgICBEQVRFVElNRV9MT0NBTDogJ1lZWVktTU0tRERUSEg6bW0nLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgLz5cclxuICAgICAgICBEQVRFVElNRV9MT0NBTF9TRUNPTkRTOiAnWVlZWS1NTS1ERFRISDptbTpzcycsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMVwiIC8+XHJcbiAgICAgICAgREFURVRJTUVfTE9DQUxfTVM6ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTUycsIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMC4wMDFcIiAvPlxyXG4gICAgICAgIERBVEU6ICdZWVlZLU1NLUREJywgLy8gPGlucHV0IHR5cGU9XCJkYXRlXCIgLz5cclxuICAgICAgICBUSU1FOiAnSEg6bW0nLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiAvPlxyXG4gICAgICAgIFRJTUVfU0VDT05EUzogJ0hIOm1tOnNzJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgc3RlcD1cIjFcIiAvPlxyXG4gICAgICAgIFRJTUVfTVM6ICdISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMC4wMDFcIiAvPlxyXG4gICAgICAgIFdFRUs6ICdHR0dHLVtXXVdXJywgLy8gPGlucHV0IHR5cGU9XCJ3ZWVrXCIgLz5cclxuICAgICAgICBNT05USDogJ1lZWVktTU0nLCAvLyA8aW5wdXQgdHlwZT1cIm1vbnRoXCIgLz5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGhvb2tzO1xyXG5cclxufSkpKTtcclxuIl0sIm5hbWVzIjpbIl9leGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiciIsImUiLCJ0IiwibiIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJfcmVnZW5lcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJtb21lbnQiLCJzdGVuY2lsVXRpbHMiLCJBUFBVSUQiLCJEQVRBS0VZIiwiREFTSEtFWSIsInByb2R1Y3RNZXRhQnlJZCIsInZhcmlhbnRNZXRhQnlJZCIsIkNvdW50ZG93biIsIiRzY29wZSIsIl90ZW1wIiwiX3RoaXMiLCJfcmVmIiwiX3JlZiRkZWJ1ZyIsImRlYnVnIiwiX3JlZiRncmFwaFFMVG9rZW4iLCJncmFwaFFMVG9rZW4iLCJfcmVmJHN0b3JlVFoiLCJzdG9yZVRaIiwiX3JlZiRjaGVja01ldGFGaWVsZCIsImNoZWNrTWV0YUZpZWxkIiwiX3JlZiRjb3VudGRvd25WYWx1ZXMiLCJjb3VudGRvd25WYWx1ZXMiLCJwYXJjZWwiLCJMVEwiLCJfcmVmJGRlZmF1bHRDb3VudGRvd24iLCJkZWZhdWx0Q291bnRkb3duVGltZSIsIl9yZWYkZmluZFByb2R1Y3RJZEZ1biIsImZpbmRQcm9kdWN0SWRGdW5jIiwiJHNjb3BlMSIsIk51bWJlciIsImNsb3Nlc3QiLCJmaW5kIiwidmFsIiwicHJvZHVjdElkIiwidXBkYXRlQ291bnRkb3duIiwidGltZXIiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImhvb2tzIiwib24iLCJldmVudCIsImRhdGEiLCJyZXNwb25zZSIsImlkIiwidmFyaWFudElkIiwidjNfdmFyaWFudF9pZCIsImFkZENsYXNzIiwiX3Byb3RvIiwiX3VwZGF0ZUNvdW50ZG93biIsIl9jYWxsZWUiLCJfdGVtcDIiLCJfcmVmMiIsIl9yZWYyJHZhcmlhbnRJZCIsImNvdW50ZG93biIsImN1c3RvbSIsInJlc3AiLCJob3VyVGV4dCIsImhvdXJzVGV4dCIsIm1pbnV0ZVRleHQiLCJtaW51dGVzVGV4dCIsIiR0b2RheWhtIiwiJHRvZGF5bSIsIiR0b21vcnJvd2htIiwiJHRvbW9ycm93bSIsIiRtb25kYXkiLCIkY3VzdG9tIiwibm93IiwidG9kYXkiLCJ0b21vcnJvdyIsImZyaWRheSIsInN1bmRheSIsIm1vbmRheSIsInNoaXAiLCJob3VycyIsIm1pbnV0ZXMiLCJfY29udGV4dCIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzaXRlIiwicHJvZHVjdCIsIm1ldGFmaWVsZHMiLCJlZGdlcyIsInJlZHVjZSIsIl92YWx1ZSIsIl9yZWYzIiwibm9kZSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50cyIsIl9yZWY0IiwiX3ZhbHVlMSIsIl9yZWY1Iiwibm9kZTEiLCJodG1sIiwiaGlkZSIsInR6IiwiZm9ybWF0IiwiYWRkIiwiZGF5IiwiaXNCZXR3ZWVuIiwiaXNCZWZvcmUiLCJkaWZmIiwiaXNTYW1lIiwic2hvdyIsInJlcGxhY2UiLCJfeCIsImRvbUNoYW5nZWQiLCJfcmVmNiIsIl9yZWY2JGNvdW50ZG93blNlbGVjdCIsImNvdW50ZG93blNlbGVjdG9yIiwic2V0dGluZ3MiLCJlYWNoIiwiZWwiLCIkZWwiLCJpbml0QXBwIiwiX3gyIiwiX2luaXRBcHAiLCJfY2FsbGVlMiIsIm1vIiwiX2NvbnRleHQyIiwiTXV0YXRpb25PYnNlcnZlciIsIl9kZWJvdW5jZSIsIm9ic2VydmUiLCJkb2N1bWVudCIsImJvZHkiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiX3JlZjciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==