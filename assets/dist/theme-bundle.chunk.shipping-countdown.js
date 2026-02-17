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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxrQ0FBa0MsSUFBSTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsb0JBQW9CO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzdpREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0QsSUFBSSxLQUE0RDtBQUNoRSxJQUFJLENBQ3lCO0FBQzdCLENBQUMsc0JBQXNCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3R0FBd0csSUFBSSx3QkFBd0IsSUFBSSx1REFBdUQsSUFBSTtBQUNuTSxxRUFBcUUsSUFBSTtBQUN6RSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLElBQUk7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNCQUFzQjtBQUMxRDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zaGlwcGluZy1jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbW9tZW50LXRpbWV6b25lL2J1aWxkcy9tb21lbnQtdGltZXpvbmUtd2l0aC1kYXRhLTEwLXllYXItcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKlxuPGRpdlxuICAgIGRhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd249XCIxMjowMDowMFwiXG4gICAgZGF0YS1ob3VyLXRleHQ9XCJIb3VyXCJcbiAgICBkYXRhLWhvdXJzLXRleHQ9XCJIb3Vyc1wiXG4gICAgZGF0YS1taW51dGUtdGV4dD1cIk1pbnV0ZVwiXG4gICAgZGF0YS1taW51dGVzLXRleHQ9XCJNaW51dGVzXCJcbiAgICBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgIDxkaXYgZGF0YS10b2RheS1obT5JbiBTdG9jayAmIFJlYWR5IFRvIFNoaXAhIE9yZGVyIEluIFRoZSBOZXh0IDxzdHJvbmc+JUhPVVIlPC9zdHJvbmc+IGFuZCA8c3Ryb25nPiVNSU5VVEUlPC9zdHJvbmc+IHRvIHNoaXAgdG9kYXkuPC9kaXY+XG4gICAgPGRpdiBkYXRhLXRvZGF5LW0+SW4gU3RvY2sgJiBSZWFkeSBUbyBTaGlwISBPcmRlciBJbiBUaGUgTmV4dCA8c3Ryb25nPiVNSU5VVEUlPC9zdHJvbmc+IHRvIHNoaXAgdG9kYXkuPC9kaXY+XG4gICAgPGRpdiBkYXRhLXRvbW9ycm93LWhtPkluIFN0b2NrICYgUmVhZHkgVG8gU2hpcCEgT3JkZXIgSW4gVGhlIE5leHQgPHN0cm9uZz4lSE9VUiU8L3N0cm9uZz4gYW5kIDxzdHJvbmc+JU1JTlVURSU8L3N0cm9uZz4gdG8gc2hpcCB0b21vcnJvdy48L2Rpdj5cbiAgICA8ZGl2IGRhdGEtdG9tb3Jyb3ctbT5JbiBTdG9jayAmIFJlYWR5IFRvIFNoaXAhIE9yZGVyIEluIFRoZSBOZXh0IDxzdHJvbmc+JU1JTlVURSU8L3N0cm9uZz4gdG8gc2hpcCB0b21vcnJvdy48L2Rpdj5cbiAgICA8ZGl2IGRhdGEtbW9uZGF5PkluIFN0b2NrICYgUmVhZHkgVG8gU2hpcCEgT3JkZXIgbm93IHRvIHNoaXAgTW9uZGF5LjwvZGl2PlxuICAgIDxkaXYgZGF0YS1jdXN0b20+PC9kaXY+XG48L2Rpdj5cbiovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbi8vIGltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lL2J1aWxkcy9tb21lbnQtdGltZXpvbmUtd2l0aC1kYXRhLTEwLXllYXItcmFuZ2UnO1xuaW1wb3J0IHN0ZW5jaWxVdGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmNvbnN0IEFQUFVJRCA9ICdQQVBBVEhFTUVTX1NISVBQSU5HQ09VTlRET1dOJztcbmNvbnN0IERBVEFLRVkgPSAncGFwYXRoZW1lc1NoaXBwaW5nQ291bnRkb3duJztcbmNvbnN0IERBU0hLRVkgPSAncGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd24nO1xuXG5jb25zdCBwcm9kdWN0TWV0YUJ5SWQgPSB7fTtcbmNvbnN0IHZhcmlhbnRNZXRhQnlJZCA9IHt9O1xuXG5jbGFzcyBDb3VudGRvd24ge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwge1xuICAgICAgICBkZWJ1ZyA9IGZhbHNlLFxuICAgICAgICBncmFwaFFMVG9rZW4gPSAnJyxcbiAgICAgICAgc3RvcmVUWiA9ICdBbWVyaWNhL01leGljb19DaXR5JyxcbiAgICAgICAgY2hlY2tNZXRhRmllbGQgPSBmYWxzZSxcbiAgICAgICAgY291bnRkb3duVmFsdWVzID0ge1xuICAgICAgICAgICAgcGFyY2VsOiAnMTU6MDA6MDAnLFxuICAgICAgICAgICAgTFRMOiAnMTI6MDA6MDAnLFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0Q291bnRkb3duVGltZSA9ICcxMjowMDowMCcsIC8vIHVzZSB0aGlzIHZhbHVlIGlmIGNoZWNrTWV0YWZpZWxkID0gZmFsc2Ugb3IgZGF0YS1wYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93biA9IGVtcHR5XG4gICAgICAgIGZpbmRQcm9kdWN0SWRGdW5jID0gKCRzY29wZTEpID0+IE51bWJlcigkc2NvcGUxLmNsb3Nlc3QoJy5wcm9kdWN0VmlldycpLmZpbmQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXSBpbnB1dFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XG4gICAgICAgIHRoaXMuc3RvcmVUWiA9IHN0b3JlVFo7XG4gICAgICAgIHRoaXMuY2hlY2tNZXRhRmllbGQgPSBjaGVja01ldGFGaWVsZDtcbiAgICAgICAgdGhpcy5jb3VudGRvd25WYWx1ZXMgPSBjb3VudGRvd25WYWx1ZXM7XG4gICAgICAgIHRoaXMuZGVmYXVsdENvdW50ZG93blRpbWUgPSBkZWZhdWx0Q291bnRkb3duVGltZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBmaW5kUHJvZHVjdElkRnVuYygkc2NvcGUpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9kdWN0SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ291bnRkb3duKCk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZUNvdW50ZG93bigpLCA2MDAwMCk7XG5cbiAgICAgICAgc3RlbmNpbFV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbnMtY2hhbmdlLXJlbW90ZScsIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnJlc3BvbnNlIHx8ICFkYXRhLnJlc3BvbnNlLmRhdGEgfHwgZGF0YS5yZXNwb25zZS5kYXRhLmlkICE9PSB0aGlzLnByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnRkb3duKHtcbiAgICAgICAgICAgICAgICB2YXJpYW50SWQ6IGRhdGEucmVzcG9uc2UuZGF0YS52M192YXJpYW50X2lkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdfc2hpcHBpbmctY291bnRkb3duLWluaXRpYWxpemVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlQ291bnRkb3duKHtcbiAgICAgICAgdmFyaWFudElkID0gMCxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgJHNjb3BlLCBkZWJ1ZywgZ3JhcGhRTFRva2VuLCBzdG9yZVRaLCBjaGVja01ldGFGaWVsZCwgY291bnRkb3duVmFsdWVzLCBkZWZhdWx0Q291bnRkb3duVGltZSwgcHJvZHVjdElkLFxuICAgICAgICB9ID0gdGhpcztcbiAgICAgICAgbGV0IGNvdW50ZG93biA9ICRzY29wZS5kYXRhKERBVEFLRVkpO1xuICAgICAgICBsZXQgY3VzdG9tO1xuXG4gICAgICAgIGlmIChjaGVja01ldGFGaWVsZCkge1xuICAgICAgICAgICAgaWYgKCFwcm9kdWN0TWV0YUJ5SWRbcHJvZHVjdElkXSB8fCB2YXJpYW50SWQgJiYgIXZhcmlhbnRNZXRhQnlJZFt2YXJpYW50SWRdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkoJHByb2R1Y3RJZDogSW50ISwgJHZhcmlhbnRJZDogSW50ISkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFmaWVsZHMobmFtZXNwYWNlOiBcInBhcGFcIiwga2V5czogW1wiY291bnRkb3duXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cyAoZW50aXR5SWRzOiBbJHZhcmlhbnRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWZpZWxkcyhuYW1lc3BhY2U6IFwicGFwYVwiLCBrZXlzOiBbXCJjb3VudGRvd25cIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0TWV0YUJ5SWRbcHJvZHVjdElkXSA9IHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QubWV0YWZpZWxkcy5lZGdlcy5yZWR1Y2UoKF92YWx1ZSwgeyBub2RlIH0pID0+IG5vZGUudmFsdWUsIG51bGwpO1xuICAgICAgICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUubG9nKGBwcm9kdWN0TWV0YUJ5SWRbJHtwcm9kdWN0SWR9XSA9YCwgcHJvZHVjdE1ldGFCeUlkW3Byb2R1Y3RJZF0pO1xuXG4gICAgICAgICAgICAgICAgdmFyaWFudE1ldGFCeUlkW3ZhcmlhbnRJZF0gPSByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LnZhcmlhbnRzLmVkZ2VzLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgKF92YWx1ZSwgeyBub2RlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm1ldGFmaWVsZHMuZWRnZXMucmVkdWNlKChfdmFsdWUxLCB7IG5vZGUxIH0pID0+IG5vZGUxLnZhbHVlLCBfdmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coYHZhcmlhbnRNZXRhQnlJZFske3ZhcmlhbnRJZH1dID1gLCB2YXJpYW50TWV0YUJ5SWRbdmFyaWFudElkXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFyaWFudE1ldGFCeUlkW3ZhcmlhbnRJZF0gfHwgcHJvZHVjdE1ldGFCeUlkW3Byb2R1Y3RJZF07XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb3VudGRvd24gPSBjb3VudGRvd25WYWx1ZXNbdmFsdWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXN0b20gPSAhY291bnRkb3duVmFsdWVzW3ZhbHVlXSA/IHZhbHVlIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudGRvd24gPSBjb3VudGRvd24gfHwgZGVmYXVsdENvdW50ZG93blRpbWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICghY291bnRkb3duICYmICFjdXN0b20pIHJldHVybjtcblxuICAgICAgICBjb25zdCBob3VyVGV4dCA9ICRzY29wZS5kYXRhKCdob3VyVGV4dCcpIHx8ICdIb3VyJztcbiAgICAgICAgY29uc3QgaG91cnNUZXh0ID0gJHNjb3BlLmRhdGEoJ2hvdXJzVGV4dCcpIHx8ICdIb3Vycyc7XG4gICAgICAgIGNvbnN0IG1pbnV0ZVRleHQgPSAkc2NvcGUuZGF0YSgnbWludXRlVGV4dCcpIHx8ICdNaW51dGUnO1xuICAgICAgICBjb25zdCBtaW51dGVzVGV4dCA9ICRzY29wZS5kYXRhKCdtaW51dGVzVGV4dCcpIHx8ICdNaW51dGVzJztcblxuICAgICAgICBjb25zdCAkdG9kYXlobSA9ICRzY29wZS5maW5kKCdbZGF0YS10b2RheS1obV0nKTtcbiAgICAgICAgY29uc3QgJHRvZGF5bSA9ICRzY29wZS5maW5kKCdbZGF0YS10b2RheS1tXScpO1xuICAgICAgICBjb25zdCAkdG9tb3Jyb3dobSA9ICRzY29wZS5maW5kKCdbZGF0YS10b21vcnJvdy1obV0nKTtcbiAgICAgICAgY29uc3QgJHRvbW9ycm93bSA9ICRzY29wZS5maW5kKCdbZGF0YS10b21vcnJvdy1tXScpO1xuICAgICAgICBjb25zdCAkbW9uZGF5ID0gJHNjb3BlLmZpbmQoJ1tkYXRhLW1vbmRheV0nKTtcbiAgICAgICAgY29uc3QgJGN1c3RvbSA9ICRzY29wZS5maW5kKCdbZGF0YS1jdXN0b21dJyk7XG5cbiAgICAgICAgaWYgKCEkdG9kYXlobS5kYXRhKCd0ZW1wbGF0ZScpKSB7XG4gICAgICAgICAgICAkdG9kYXlobS5kYXRhKCd0ZW1wbGF0ZScsICR0b2RheWhtLmh0bWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEkdG9kYXltLmRhdGEoJ3RlbXBsYXRlJykpIHtcbiAgICAgICAgICAgICR0b2RheW0uZGF0YSgndGVtcGxhdGUnLCAkdG9kYXltLmh0bWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEkdG9tb3Jyb3dobS5kYXRhKCd0ZW1wbGF0ZScpKSB7XG4gICAgICAgICAgICAkdG9tb3Jyb3dobS5kYXRhKCd0ZW1wbGF0ZScsICR0b21vcnJvd2htLmh0bWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEkdG9tb3Jyb3dtLmRhdGEoJ3RlbXBsYXRlJykpIHtcbiAgICAgICAgICAgICR0b21vcnJvd20uZGF0YSgndGVtcGxhdGUnLCAkdG9tb3Jyb3dtLmh0bWwoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRkb3duKSB7XG4gICAgICAgICAgICAkY3VzdG9tLmhpZGUoKTtcblxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkudHooc3RvcmVUWik7XG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG1vbWVudC50eihgJHttb21lbnQoKS50eihzdG9yZVRaKS5mb3JtYXQoJ1lZWVktTU0tREQnKX0gJHtjb3VudGRvd259YCwgc3RvcmVUWik7XG4gICAgICAgICAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudC50eihgJHttb21lbnQoKS5hZGQoMSwgJ2RheXMnKS50eihzdG9yZVRaKS5mb3JtYXQoJ1lZWVktTU0tREQnKX0gJHtjb3VudGRvd259YCwgc3RvcmVUWik7XG4gICAgICAgICAgICBjb25zdCBmcmlkYXkgPSBtb21lbnQudHooYCR7bW9tZW50KCkudHooc3RvcmVUWikuZGF5KCc1JykuZm9ybWF0KCdZWVlZLU1NLUREJyl9ICR7Y291bnRkb3dufWAsIHN0b3JlVFopO1xuICAgICAgICAgICAgY29uc3Qgc3VuZGF5ID0gbW9tZW50LnR6KGAke21vbWVudCgpLnR6KHN0b3JlVFopLmRheSgnNycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfSAyMzo1OTo1OWAsIHN0b3JlVFopO1xuICAgICAgICAgICAgY29uc3QgbW9uZGF5ID0gbW9tZW50LnR6KGAke21vbWVudCgpLnR6KHN0b3JlVFopLmRheSgnOCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpfSAke2NvdW50ZG93bn1gLCBzdG9yZVRaKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBub3cuaXNCZXR3ZWVuKGZyaWRheSwgc3VuZGF5KSA/IG1vbmRheSA6IChub3cuaXNCZWZvcmUodG9kYXkpID8gdG9kYXkgOiB0b21vcnJvdyk7XG5cbiAgICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUubG9nKCdub3cgPSAnLCBub3cuZm9ybWF0KCkpO1xuICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coJ3RvZGF5ID0gJywgdG9kYXkuZm9ybWF0KCkpO1xuICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coJ3RvbW9ycm93ID0gJywgdG9tb3Jyb3cuZm9ybWF0KCkpO1xuICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coJ2ZyaWRheSA9ICcsIGZyaWRheS5mb3JtYXQoKSk7XG4gICAgICAgICAgICBkZWJ1ZyAmJiBjb25zb2xlLmxvZygnc3VuZGF5ID0gJywgc3VuZGF5LmZvcm1hdCgpKTtcbiAgICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUubG9nKCdtb25kYXkgPSAnLCBtb25kYXkuZm9ybWF0KCkpO1xuICAgICAgICAgICAgZGVidWcgJiYgY29uc29sZS5sb2coJ3NoaXAgPSAnLCBzaGlwLmZvcm1hdCgpKTtcblxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBzaGlwLmRpZmYobm93LCAnaG91cicpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHNoaXAuZGlmZihub3csICdtaW51dGUnKSAtIGhvdXJzICogNjA7XG5cbiAgICAgICAgICAgIGlmIChzaGlwLmlzU2FtZShtb25kYXkpKSB7XG4gICAgICAgICAgICAgICAgJHRvZGF5aG0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICR0b2RheW0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICR0b21vcnJvd2htLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkdG9tb3Jyb3dtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbW9uZGF5LnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5pc1NhbWUodG9kYXkpKSB7XG4gICAgICAgICAgICAgICAgJHRvbW9ycm93aG0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICR0b21vcnJvd20uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtb25kYXkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkdG9kYXlobS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICR0b2RheW0uaHRtbCgkdG9kYXltLmRhdGEoJ3RlbXBsYXRlJykucmVwbGFjZSgvJU1JTlVURSUvZywgYCR7bWludXRlc30gJHttaW51dGVzID4gMSA/IG1pbnV0ZXNUZXh0IDogbWludXRlVGV4dH1gKSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0b2RheWhtLmh0bWwoJHRvZGF5aG0uZGF0YSgndGVtcGxhdGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyVIT1VSJS9nLCBgJHtob3Vyc30gJHtob3VycyA+IDEgPyBob3Vyc1RleHQgOiBob3VyVGV4dH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyVNSU5VVEUlL2csIGAke21pbnV0ZXN9ICR7bWludXRlcyA+IDEgPyBtaW51dGVzVGV4dCA6IG1pbnV0ZVRleHR9YCkpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJHRvZGF5bS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdG9kYXlobS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJHRvZGF5bS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG1vbmRheS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICR0b21vcnJvd2htLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJHRvbW9ycm93bS5odG1sKCR0b21vcnJvd20uZGF0YSgndGVtcGxhdGUnKS5yZXBsYWNlKC8lTUlOVVRFJS9nLCBgJHttaW51dGVzfSAke21pbnV0ZXMgPiAxID8gbWludXRlc1RleHQgOiBtaW51dGVUZXh0fWApKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHRvbW9ycm93aG0uaHRtbCgkdG9tb3Jyb3dobS5kYXRhKCd0ZW1wbGF0ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJUhPVVIlL2csIGAke2hvdXJzfSAke2hvdXJzID4gMSA/IGhvdXJzVGV4dCA6IGhvdXJUZXh0fWApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJU1JTlVURSUvZywgYCR7bWludXRlc30gJHttaW51dGVzID4gMSA/IG1pbnV0ZXNUZXh0IDogbWludXRlVGV4dH1gKSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkdG9tb3Jyb3dtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VzdG9tKSB7XG4gICAgICAgICAgICAkY3VzdG9tLmh0bWwoY3VzdG9tKS5zaG93KCk7XG4gICAgICAgICAgICAkdG9kYXlobS5oaWRlKCk7XG4gICAgICAgICAgICAkdG9kYXltLmhpZGUoKTtcbiAgICAgICAgICAgICR0b21vcnJvd2htLmhpZGUoKTtcbiAgICAgICAgICAgICR0b21vcnJvd20uaGlkZSgpO1xuICAgICAgICAgICAgJG1vbmRheS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUuc2hvdygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9tQ2hhbmdlZCh7XG4gICAgY291bnRkb3duU2VsZWN0b3IgPSBgW2RhdGEtJHtEQVNIS0VZfV1gLFxuICAgIC4uLnNldHRpbmdzXG59KSB7XG4gICAgJChjb3VudGRvd25TZWxlY3RvcikuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgIGlmICghJGVsLmRhdGEoYCR7QVBQVUlEfUNvdW50ZG93bkluc3RhbmNlYCkpIHtcbiAgICAgICAgICAgICRlbC5kYXRhKGAke0FQUFVJRH1Db3VudGRvd25JbnN0YW5jZWAsIG5ldyBDb3VudGRvd24oJGVsLCBzZXR0aW5ncykpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRBcHAoc2V0dGluZ3MgPSB7fSkge1xuICAgIGRvbUNoYW5nZWQoc2V0dGluZ3MpO1xuICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICBkb21DaGFuZ2VkKHNldHRpbmdzKTtcbiAgICB9KSwgMzAwKTtcbiAgICBtby5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xuICAgIGdyYXBoUUxUb2tlbixcbiAgICBzdG9yZVRaLFxuICAgIGNvdW50ZG93blZhbHVlcyxcbiAgICBkZWZhdWx0Q291bnRkb3duVGltZSxcbn0pIHtcbiAgICBpbml0QXBwKHtcbiAgICAgICAgZ3JhcGhRTFRva2VuLFxuICAgICAgICBzdG9yZVRaLFxuICAgICAgICBjb3VudGRvd25WYWx1ZXMsXG4gICAgICAgIGRlZmF1bHRDb3VudGRvd25UaW1lLFxuICAgIH0pO1xufVxuIiwiLy8hIG1vbWVudC10aW1lem9uZS5qc1xuLy8hIHZlcnNpb24gOiAwLjUuNDhcbi8vISBDb3B5cmlnaHQgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuLy8hIGxpY2Vuc2UgOiBNSVRcbi8vISBnaXRodWIuY29tL21vbWVudC9tb21lbnQtdGltZXpvbmVcblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdC8qZ2xvYmFsIGRlZmluZSovXG5cdGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdtb21lbnQnKSk7IC8vIE5vZGVcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoWydtb21lbnQnXSwgZmFjdG9yeSk7ICAgICAgICAgICAgICAgICAvLyBBTURcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KHJvb3QubW9tZW50KTsgICAgICAgICAgICAgICAgICAgICAgICAvLyBCcm93c2VyXG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKG1vbWVudCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvLyBSZXNvbHZlcyBlczYgbW9kdWxlIGxvYWRpbmcgaXNzdWVcblx0aWYgKG1vbWVudC52ZXJzaW9uID09PSB1bmRlZmluZWQgJiYgbW9tZW50LmRlZmF1bHQpIHtcblx0XHRtb21lbnQgPSBtb21lbnQuZGVmYXVsdDtcblx0fVxuXG5cdC8vIERvIG5vdCBsb2FkIG1vbWVudC10aW1lem9uZSBhIHNlY29uZCB0aW1lLlxuXHQvLyBpZiAobW9tZW50LnR6ICE9PSB1bmRlZmluZWQpIHtcblx0Ly8gXHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lICcgKyBtb21lbnQudHoudmVyc2lvbiArICcgd2FzIGFscmVhZHkgbG9hZGVkICcgKyAobW9tZW50LnR6LmRhdGFWZXJzaW9uID8gJ3dpdGggZGF0YSBmcm9tICcgOiAnd2l0aG91dCBhbnkgZGF0YScpICsgbW9tZW50LnR6LmRhdGFWZXJzaW9uKTtcblx0Ly8gXHRyZXR1cm4gbW9tZW50O1xuXHQvLyB9XG5cblx0dmFyIFZFUlNJT04gPSBcIjAuNS40OFwiLFxuXHRcdHpvbmVzID0ge30sXG5cdFx0bGlua3MgPSB7fSxcblx0XHRjb3VudHJpZXMgPSB7fSxcblx0XHRuYW1lcyA9IHt9LFxuXHRcdGd1ZXNzZXMgPSB7fSxcblx0XHRjYWNoZWRHdWVzcztcblxuXHRpZiAoIW1vbWVudCB8fCB0eXBlb2YgbW9tZW50LnZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG5cdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSByZXF1aXJlcyBNb21lbnQuanMuIFNlZSBodHRwczovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvdXNlLWl0L2Jyb3dzZXIvJyk7XG5cdH1cblxuXHR2YXIgbW9tZW50VmVyc2lvbiA9IG1vbWVudC52ZXJzaW9uLnNwbGl0KCcuJyksXG5cdFx0bWFqb3IgPSArbW9tZW50VmVyc2lvblswXSxcblx0XHRtaW5vciA9ICttb21lbnRWZXJzaW9uWzFdO1xuXG5cdC8vIE1vbWVudC5qcyB2ZXJzaW9uIGNoZWNrXG5cdGlmIChtYWpvciA8IDIgfHwgKG1ham9yID09PSAyICYmIG1pbm9yIDwgNikpIHtcblx0XHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lIHJlcXVpcmVzIE1vbWVudC5qcyA+PSAyLjYuMC4gWW91IGFyZSB1c2luZyBNb21lbnQuanMgJyArIG1vbWVudC52ZXJzaW9uICsgJy4gU2VlIG1vbWVudGpzLmNvbScpO1xuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFVucGFja2luZ1xuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gY2hhckNvZGVUb0ludChjaGFyQ29kZSkge1xuXHRcdGlmIChjaGFyQ29kZSA+IDk2KSB7XG5cdFx0XHRyZXR1cm4gY2hhckNvZGUgLSA4Nztcblx0XHR9IGVsc2UgaWYgKGNoYXJDb2RlID4gNjQpIHtcblx0XHRcdHJldHVybiBjaGFyQ29kZSAtIDI5O1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhckNvZGUgLSA0ODtcblx0fVxuXG5cdGZ1bmN0aW9uIHVucGFja0Jhc2U2MChzdHJpbmcpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRwYXJ0cyA9IHN0cmluZy5zcGxpdCgnLicpLFxuXHRcdFx0d2hvbGUgPSBwYXJ0c1swXSxcblx0XHRcdGZyYWN0aW9uYWwgPSBwYXJ0c1sxXSB8fCAnJyxcblx0XHRcdG11bHRpcGxpZXIgPSAxLFxuXHRcdFx0bnVtLFxuXHRcdFx0b3V0ID0gMCxcblx0XHRcdHNpZ24gPSAxO1xuXG5cdFx0Ly8gaGFuZGxlIG5lZ2F0aXZlIG51bWJlcnNcblx0XHRpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ1KSB7XG5cdFx0XHRpID0gMTtcblx0XHRcdHNpZ24gPSAtMTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgZGlnaXRzIGJlZm9yZSB0aGUgZGVjaW1hbFxuXHRcdGZvciAoaTsgaSA8IHdob2xlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KHdob2xlLmNoYXJDb2RlQXQoaSkpO1xuXHRcdFx0b3V0ID0gNjAgKiBvdXQgKyBudW07XG5cdFx0fVxuXG5cdFx0Ly8gaGFuZGxlIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbFxuXHRcdGZvciAoaSA9IDA7IGkgPCBmcmFjdGlvbmFsLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRtdWx0aXBsaWVyID0gbXVsdGlwbGllciAvIDYwO1xuXHRcdFx0bnVtID0gY2hhckNvZGVUb0ludChmcmFjdGlvbmFsLmNoYXJDb2RlQXQoaSkpO1xuXHRcdFx0b3V0ICs9IG51bSAqIG11bHRpcGxpZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dCAqIHNpZ247XG5cdH1cblxuXHRmdW5jdGlvbiBhcnJheVRvSW50IChhcnJheSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFycmF5W2ldID0gdW5wYWNrQmFzZTYwKGFycmF5W2ldKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBpbnRUb1VudGlsIChhcnJheSwgbGVuZ3RoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXlbaV0gPSBNYXRoLnJvdW5kKChhcnJheVtpIC0gMV0gfHwgMCkgKyAoYXJyYXlbaV0gKiA2MDAwMCkpOyAvLyBtaW51dGVzIHRvIG1pbGxpc2Vjb25kc1xuXHRcdH1cblxuXHRcdGFycmF5W2xlbmd0aCAtIDFdID0gSW5maW5pdHk7XG5cdH1cblxuXHRmdW5jdGlvbiBtYXBJbmRpY2VzIChzb3VyY2UsIGluZGljZXMpIHtcblx0XHR2YXIgb3V0ID0gW10sIGk7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgaW5kaWNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0b3V0W2ldID0gc291cmNlW2luZGljZXNbaV1dO1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnBhY2sgKHN0cmluZykge1xuXHRcdHZhciBkYXRhID0gc3RyaW5nLnNwbGl0KCd8JyksXG5cdFx0XHRvZmZzZXRzID0gZGF0YVsyXS5zcGxpdCgnICcpLFxuXHRcdFx0aW5kaWNlcyA9IGRhdGFbM10uc3BsaXQoJycpLFxuXHRcdFx0dW50aWxzICA9IGRhdGFbNF0uc3BsaXQoJyAnKTtcblxuXHRcdGFycmF5VG9JbnQob2Zmc2V0cyk7XG5cdFx0YXJyYXlUb0ludChpbmRpY2VzKTtcblx0XHRhcnJheVRvSW50KHVudGlscyk7XG5cblx0XHRpbnRUb1VudGlsKHVudGlscywgaW5kaWNlcy5sZW5ndGgpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUgICAgICAgOiBkYXRhWzBdLFxuXHRcdFx0YWJicnMgICAgICA6IG1hcEluZGljZXMoZGF0YVsxXS5zcGxpdCgnICcpLCBpbmRpY2VzKSxcblx0XHRcdG9mZnNldHMgICAgOiBtYXBJbmRpY2VzKG9mZnNldHMsIGluZGljZXMpLFxuXHRcdFx0dW50aWxzICAgICA6IHVudGlscyxcblx0XHRcdHBvcHVsYXRpb24gOiBkYXRhWzVdIHwgMFxuXHRcdH07XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0Wm9uZSBvYmplY3Rcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIFpvbmUgKHBhY2tlZFN0cmluZykge1xuXHRcdGlmIChwYWNrZWRTdHJpbmcpIHtcblx0XHRcdHRoaXMuX3NldCh1bnBhY2socGFja2VkU3RyaW5nKSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VzdCAobnVtLCBhcnIpIHtcblx0XHR2YXIgbGVuID0gYXJyLmxlbmd0aDtcblx0XHRpZiAobnVtIDwgYXJyWzBdKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9IGVsc2UgaWYgKGxlbiA+IDEgJiYgYXJyW2xlbiAtIDFdID09PSBJbmZpbml0eSAmJiBudW0gPj0gYXJyW2xlbiAtIDJdKSB7XG5cdFx0XHRyZXR1cm4gbGVuIC0gMTtcblx0XHR9IGVsc2UgaWYgKG51bSA+PSBhcnJbbGVuIC0gMV0pIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHR2YXIgbWlkO1xuXHRcdHZhciBsbyA9IDA7XG5cdFx0dmFyIGhpID0gbGVuIC0gMTtcblx0XHR3aGlsZSAoaGkgLSBsbyA+IDEpIHtcblx0XHRcdG1pZCA9IE1hdGguZmxvb3IoKGxvICsgaGkpIC8gMik7XG5cdFx0XHRpZiAoYXJyW21pZF0gPD0gbnVtKSB7XG5cdFx0XHRcdGxvID0gbWlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGkgPSBtaWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoaTtcblx0fVxuXG5cdFpvbmUucHJvdG90eXBlID0ge1xuXHRcdF9zZXQgOiBmdW5jdGlvbiAodW5wYWNrZWQpIHtcblx0XHRcdHRoaXMubmFtZSAgICAgICA9IHVucGFja2VkLm5hbWU7XG5cdFx0XHR0aGlzLmFiYnJzICAgICAgPSB1bnBhY2tlZC5hYmJycztcblx0XHRcdHRoaXMudW50aWxzICAgICA9IHVucGFja2VkLnVudGlscztcblx0XHRcdHRoaXMub2Zmc2V0cyAgICA9IHVucGFja2VkLm9mZnNldHM7XG5cdFx0XHR0aGlzLnBvcHVsYXRpb24gPSB1bnBhY2tlZC5wb3B1bGF0aW9uO1xuXHRcdH0sXG5cblx0XHRfaW5kZXggOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gK3RpbWVzdGFtcCxcblx0XHRcdFx0dW50aWxzID0gdGhpcy51bnRpbHMsXG5cdFx0XHRcdGk7XG5cblx0XHRcdGkgPSBjbG9zZXN0KHRhcmdldCwgdW50aWxzKTtcblx0XHRcdGlmIChpID49IDApIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvdW50cmllcyA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB6b25lX25hbWUgPSB0aGlzLm5hbWU7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoY291bnRyaWVzKS5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnlfY29kZSkge1xuXHRcdFx0XHRyZXR1cm4gY291bnRyaWVzW2NvdW50cnlfY29kZV0uem9uZXMuaW5kZXhPZih6b25lX25hbWUpICE9PSAtMTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRwYXJzZSA6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcblx0XHRcdHZhciB0YXJnZXQgID0gK3RpbWVzdGFtcCxcblx0XHRcdFx0b2Zmc2V0cyA9IHRoaXMub2Zmc2V0cyxcblx0XHRcdFx0dW50aWxzICA9IHRoaXMudW50aWxzLFxuXHRcdFx0XHRtYXggICAgID0gdW50aWxzLmxlbmd0aCAtIDEsXG5cdFx0XHRcdG9mZnNldCwgb2Zmc2V0TmV4dCwgb2Zmc2V0UHJldiwgaTtcblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0XHRcdG9mZnNldCAgICAgPSBvZmZzZXRzW2ldO1xuXHRcdFx0XHRvZmZzZXROZXh0ID0gb2Zmc2V0c1tpICsgMV07XG5cdFx0XHRcdG9mZnNldFByZXYgPSBvZmZzZXRzW2kgPyBpIC0gMSA6IGldO1xuXG5cdFx0XHRcdGlmIChvZmZzZXQgPCBvZmZzZXROZXh0ICYmIHR6Lm1vdmVBbWJpZ3VvdXNGb3J3YXJkKSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0TmV4dDtcblx0XHRcdFx0fSBlbHNlIGlmIChvZmZzZXQgPiBvZmZzZXRQcmV2ICYmIHR6Lm1vdmVJbnZhbGlkRm9yd2FyZCkge1xuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldFByZXY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGFyZ2V0IDwgdW50aWxzW2ldIC0gKG9mZnNldCAqIDYwMDAwKSkge1xuXHRcdFx0XHRcdHJldHVybiBvZmZzZXRzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRzW21heF07XG5cdFx0fSxcblxuXHRcdGFiYnIgOiBmdW5jdGlvbiAobW9tKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hYmJyc1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9LFxuXG5cdFx0b2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0bG9nRXJyb3IoXCJ6b25lLm9mZnNldCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHpvbmUudXRjT2Zmc2V0XCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9LFxuXG5cdFx0dXRjT2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9XG5cdH07XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdENvdW50cnkgb2JqZWN0XG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBDb3VudHJ5IChjb3VudHJ5X25hbWUsIHpvbmVfbmFtZXMpIHtcblx0XHR0aGlzLm5hbWUgPSBjb3VudHJ5X25hbWU7XG5cdFx0dGhpcy56b25lcyA9IHpvbmVfbmFtZXM7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0Q3VycmVudCBUaW1lem9uZVxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gT2Zmc2V0QXQoYXQpIHtcblx0XHR2YXIgdGltZVN0cmluZyA9IGF0LnRvVGltZVN0cmluZygpO1xuXHRcdHZhciBhYmJyID0gdGltZVN0cmluZy5tYXRjaCgvXFwoW2EteiBdK1xcKS9pKTtcblx0XHRpZiAoYWJiciAmJiBhYmJyWzBdKSB7XG5cdFx0XHQvLyAxNzo1NjozMSBHTVQtMDYwMCAoQ1NUKVxuXHRcdFx0Ly8gMTc6NTY6MzEgR01ULTA2MDAgKENlbnRyYWwgU3RhbmRhcmQgVGltZSlcblx0XHRcdGFiYnIgPSBhYmJyWzBdLm1hdGNoKC9bQS1aXS9nKTtcblx0XHRcdGFiYnIgPSBhYmJyID8gYWJici5qb2luKCcnKSA6IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gMTc6NTY6MzEgQ1NUXG5cdFx0XHQvLyAxNzo1NjozMSBHTVQrMDgwMCAo5Y+w5YyX5qiZ5rqW5pmC6ZaTKVxuXHRcdFx0YWJiciA9IHRpbWVTdHJpbmcubWF0Y2goL1tBLVpdezMsNX0vZyk7XG5cdFx0XHRhYmJyID0gYWJiciA/IGFiYnJbMF0gOiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGFiYnIgPT09ICdHTVQnKSB7XG5cdFx0XHRhYmJyID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHRoaXMuYXQgPSArYXQ7XG5cdFx0dGhpcy5hYmJyID0gYWJicjtcblx0XHR0aGlzLm9mZnNldCA9IGF0LmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBab25lU2NvcmUoem9uZSkge1xuXHRcdHRoaXMuem9uZSA9IHpvbmU7XG5cdFx0dGhpcy5vZmZzZXRTY29yZSA9IDA7XG5cdFx0dGhpcy5hYmJyU2NvcmUgPSAwO1xuXHR9XG5cblx0Wm9uZVNjb3JlLnByb3RvdHlwZS5zY29yZU9mZnNldEF0ID0gZnVuY3Rpb24gKG9mZnNldEF0KSB7XG5cdFx0dGhpcy5vZmZzZXRTY29yZSArPSBNYXRoLmFicyh0aGlzLnpvbmUudXRjT2Zmc2V0KG9mZnNldEF0LmF0KSAtIG9mZnNldEF0Lm9mZnNldCk7XG5cdFx0aWYgKHRoaXMuem9uZS5hYmJyKG9mZnNldEF0LmF0KS5yZXBsYWNlKC9bXkEtWl0vZywgJycpICE9PSBvZmZzZXRBdC5hYmJyKSB7XG5cdFx0XHR0aGlzLmFiYnJTY29yZSsrO1xuXHRcdH1cblx0fTtcblxuXHRmdW5jdGlvbiBmaW5kQ2hhbmdlKGxvdywgaGlnaCkge1xuXHRcdHZhciBtaWQsIGRpZmY7XG5cblx0XHR3aGlsZSAoKGRpZmYgPSAoKGhpZ2guYXQgLSBsb3cuYXQpIC8gMTJlNCB8IDApICogNmU0KSkge1xuXHRcdFx0bWlkID0gbmV3IE9mZnNldEF0KG5ldyBEYXRlKGxvdy5hdCArIGRpZmYpKTtcblx0XHRcdGlmIChtaWQub2Zmc2V0ID09PSBsb3cub2Zmc2V0KSB7XG5cdFx0XHRcdGxvdyA9IG1pZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhpZ2ggPSBtaWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxvdztcblx0fVxuXG5cdGZ1bmN0aW9uIHVzZXJPZmZzZXRzKCkge1xuXHRcdHZhciBzdGFydFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyLFxuXHRcdFx0bGFzdCA9IG5ldyBPZmZzZXRBdChuZXcgRGF0ZShzdGFydFllYXIsIDAsIDEpKSxcblx0XHRcdGxhc3RPZmZzZXQgPSBsYXN0Lm9mZnNldCxcblx0XHRcdG9mZnNldHMgPSBbbGFzdF0sXG5cdFx0XHRjaGFuZ2UsIG5leHQsIG5leHRPZmZzZXQsIGk7XG5cblx0XHRmb3IgKGkgPSAxOyBpIDwgNDg7IGkrKykge1xuXHRcdFx0bmV4dE9mZnNldCA9IG5ldyBEYXRlKHN0YXJ0WWVhciwgaSwgMSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblx0XHRcdGlmIChuZXh0T2Zmc2V0ICE9PSBsYXN0T2Zmc2V0KSB7XG5cdFx0XHRcdC8vIENyZWF0ZSBPZmZzZXRBdCBoZXJlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IGFiYnIgcGFyc2luZyBiZWZvcmUgY2hlY2tpbmcgb2Zmc2V0c1xuXHRcdFx0XHRuZXh0ID0gbmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciwgaSwgMSkpO1xuXHRcdFx0XHRjaGFuZ2UgPSBmaW5kQ2hhbmdlKGxhc3QsIG5leHQpO1xuXHRcdFx0XHRvZmZzZXRzLnB1c2goY2hhbmdlKTtcblx0XHRcdFx0b2Zmc2V0cy5wdXNoKG5ldyBPZmZzZXRBdChuZXcgRGF0ZShjaGFuZ2UuYXQgKyA2ZTQpKSk7XG5cdFx0XHRcdGxhc3QgPSBuZXh0O1xuXHRcdFx0XHRsYXN0T2Zmc2V0ID0gbmV4dE9mZnNldDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciArIGksIDAsIDEpKSk7XG5cdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKHN0YXJ0WWVhciArIGksIDYsIDEpKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9mZnNldHM7XG5cdH1cblxuXHRmdW5jdGlvbiBzb3J0Wm9uZVNjb3JlcyAoYSwgYikge1xuXHRcdGlmIChhLm9mZnNldFNjb3JlICE9PSBiLm9mZnNldFNjb3JlKSB7XG5cdFx0XHRyZXR1cm4gYS5vZmZzZXRTY29yZSAtIGIub2Zmc2V0U2NvcmU7XG5cdFx0fVxuXHRcdGlmIChhLmFiYnJTY29yZSAhPT0gYi5hYmJyU2NvcmUpIHtcblx0XHRcdHJldHVybiBhLmFiYnJTY29yZSAtIGIuYWJiclNjb3JlO1xuXHRcdH1cblx0XHRpZiAoYS56b25lLnBvcHVsYXRpb24gIT09IGIuem9uZS5wb3B1bGF0aW9uKSB7XG5cdFx0XHRyZXR1cm4gYi56b25lLnBvcHVsYXRpb24gLSBhLnpvbmUucG9wdWxhdGlvbjtcblx0XHR9XG5cdFx0cmV0dXJuIGIuem9uZS5uYW1lLmxvY2FsZUNvbXBhcmUoYS56b25lLm5hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkVG9HdWVzc2VzIChuYW1lLCBvZmZzZXRzKSB7XG5cdFx0dmFyIGksIG9mZnNldDtcblx0XHRhcnJheVRvSW50KG9mZnNldHMpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvZmZzZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvZmZzZXQgPSBvZmZzZXRzW2ldO1xuXHRcdFx0Z3Vlc3Nlc1tvZmZzZXRdID0gZ3Vlc3Nlc1tvZmZzZXRdIHx8IHt9O1xuXHRcdFx0Z3Vlc3Nlc1tvZmZzZXRdW25hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBndWVzc2VzRm9yVXNlck9mZnNldHMgKG9mZnNldHMpIHtcblx0XHR2YXIgb2Zmc2V0c0xlbmd0aCA9IG9mZnNldHMubGVuZ3RoLFxuXHRcdFx0ZmlsdGVyZWRHdWVzc2VzID0ge30sXG5cdFx0XHRvdXQgPSBbXSxcblx0XHRcdGNoZWNrZWRPZmZzZXRzID0ge30sXG5cdFx0XHRpLCBqLCBvZmZzZXQsIGd1ZXNzZXNPZmZzZXQ7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgb2Zmc2V0c0xlbmd0aDsgaSsrKSB7XG5cdFx0XHRvZmZzZXQgPSBvZmZzZXRzW2ldLm9mZnNldDtcblx0XHRcdGlmIChjaGVja2VkT2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eShvZmZzZXQpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Z3Vlc3Nlc09mZnNldCA9IGd1ZXNzZXNbb2Zmc2V0XSB8fCB7fTtcblx0XHRcdGZvciAoaiBpbiBndWVzc2VzT2Zmc2V0KSB7XG5cdFx0XHRcdGlmIChndWVzc2VzT2Zmc2V0Lmhhc093blByb3BlcnR5KGopKSB7XG5cdFx0XHRcdFx0ZmlsdGVyZWRHdWVzc2VzW2pdID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tlZE9mZnNldHNbb2Zmc2V0XSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIGZpbHRlcmVkR3Vlc3Nlcykge1xuXHRcdFx0aWYgKGZpbHRlcmVkR3Vlc3Nlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRvdXQucHVzaChuYW1lc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlYnVpbGRHdWVzcyAoKSB7XG5cblx0XHQvLyB1c2UgSW50bCBBUEkgd2hlbiBhdmFpbGFibGUgYW5kIHJldHVybmluZyB2YWxpZCB0aW1lIHpvbmVcblx0XHR0cnkge1xuXHRcdFx0dmFyIGludGxOYW1lID0gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuXHRcdFx0aWYgKGludGxOYW1lICYmIGludGxOYW1lLmxlbmd0aCA+IDMpIHtcblx0XHRcdFx0dmFyIG5hbWUgPSBuYW1lc1tub3JtYWxpemVOYW1lKGludGxOYW1lKV07XG5cdFx0XHRcdGlmIChuYW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgZm91bmQgXCIgKyBpbnRsTmFtZSArIFwiIGZyb20gdGhlIEludGwgYXBpLCBidXQgZGlkIG5vdCBoYXZlIHRoYXQgZGF0YSBsb2FkZWQuXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIEludGwgdW5hdmFpbGFibGUsIGZhbGwgYmFjayB0byBtYW51YWwgZ3Vlc3NpbmcuXG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldHMgPSB1c2VyT2Zmc2V0cygpLFxuXHRcdFx0b2Zmc2V0c0xlbmd0aCA9IG9mZnNldHMubGVuZ3RoLFxuXHRcdFx0Z3Vlc3NlcyA9IGd1ZXNzZXNGb3JVc2VyT2Zmc2V0cyhvZmZzZXRzKSxcblx0XHRcdHpvbmVTY29yZXMgPSBbXSxcblx0XHRcdHpvbmVTY29yZSwgaSwgajtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBndWVzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR6b25lU2NvcmUgPSBuZXcgWm9uZVNjb3JlKGdldFpvbmUoZ3Vlc3Nlc1tpXSksIG9mZnNldHNMZW5ndGgpO1xuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9mZnNldHNMZW5ndGg7IGorKykge1xuXHRcdFx0XHR6b25lU2NvcmUuc2NvcmVPZmZzZXRBdChvZmZzZXRzW2pdKTtcblx0XHRcdH1cblx0XHRcdHpvbmVTY29yZXMucHVzaCh6b25lU2NvcmUpO1xuXHRcdH1cblxuXHRcdHpvbmVTY29yZXMuc29ydChzb3J0Wm9uZVNjb3Jlcyk7XG5cblx0XHRyZXR1cm4gem9uZVNjb3Jlcy5sZW5ndGggPiAwID8gem9uZVNjb3Jlc1swXS56b25lLm5hbWUgOiB1bmRlZmluZWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBndWVzcyAoaWdub3JlQ2FjaGUpIHtcblx0XHRpZiAoIWNhY2hlZEd1ZXNzIHx8IGlnbm9yZUNhY2hlKSB7XG5cdFx0XHRjYWNoZWRHdWVzcyA9IHJlYnVpbGRHdWVzcygpO1xuXHRcdH1cblx0XHRyZXR1cm4gY2FjaGVkR3Vlc3M7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0R2xvYmFsIE1ldGhvZHNcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUgKG5hbWUpIHtcblx0XHRyZXR1cm4gKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwvL2csICdfJyk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRab25lIChwYWNrZWQpIHtcblx0XHR2YXIgaSwgbmFtZSwgc3BsaXQsIG5vcm1hbGl6ZWQ7XG5cblx0XHRpZiAodHlwZW9mIHBhY2tlZCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cGFja2VkID0gW3BhY2tlZF07XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHBhY2tlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0c3BsaXQgPSBwYWNrZWRbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdG5hbWUgPSBzcGxpdFswXTtcblx0XHRcdG5vcm1hbGl6ZWQgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuXHRcdFx0em9uZXNbbm9ybWFsaXplZF0gPSBwYWNrZWRbaV07XG5cdFx0XHRuYW1lc1tub3JtYWxpemVkXSA9IG5hbWU7XG5cdFx0XHRhZGRUb0d1ZXNzZXMobm9ybWFsaXplZCwgc3BsaXRbMl0uc3BsaXQoJyAnKSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9uZSAobmFtZSwgY2FsbGVyKSB7XG5cblx0XHRuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcblxuXHRcdHZhciB6b25lID0gem9uZXNbbmFtZV07XG5cdFx0dmFyIGxpbms7XG5cblx0XHRpZiAoem9uZSBpbnN0YW5jZW9mIFpvbmUpIHtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygem9uZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHpvbmUgPSBuZXcgWm9uZSh6b25lKTtcblx0XHRcdHpvbmVzW25hbWVdID0gem9uZTtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdC8vIFBhc3MgZ2V0Wm9uZSB0byBwcmV2ZW50IHJlY3Vyc2lvbiBtb3JlIHRoYW4gMSBsZXZlbCBkZWVwXG5cdFx0aWYgKGxpbmtzW25hbWVdICYmIGNhbGxlciAhPT0gZ2V0Wm9uZSAmJiAobGluayA9IGdldFpvbmUobGlua3NbbmFtZV0sIGdldFpvbmUpKSkge1xuXHRcdFx0em9uZSA9IHpvbmVzW25hbWVdID0gbmV3IFpvbmUoKTtcblx0XHRcdHpvbmUuX3NldChsaW5rKTtcblx0XHRcdHpvbmUubmFtZSA9IG5hbWVzW25hbWVdO1xuXHRcdFx0cmV0dXJuIHpvbmU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROYW1lcyAoKSB7XG5cdFx0dmFyIGksIG91dCA9IFtdO1xuXG5cdFx0Zm9yIChpIGluIG5hbWVzKSB7XG5cdFx0XHRpZiAobmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgKHpvbmVzW2ldIHx8IHpvbmVzW2xpbmtzW2ldXSkgJiYgbmFtZXNbaV0pIHtcblx0XHRcdFx0b3V0LnB1c2gobmFtZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvdXQuc29ydCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q291bnRyeU5hbWVzICgpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoY291bnRyaWVzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZExpbmsgKGFsaWFzZXMpIHtcblx0XHR2YXIgaSwgYWxpYXMsIG5vcm1hbDAsIG5vcm1hbDE7XG5cblx0XHRpZiAodHlwZW9mIGFsaWFzZXMgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGFsaWFzZXMgPSBbYWxpYXNlc107XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGFsaWFzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFsaWFzID0gYWxpYXNlc1tpXS5zcGxpdCgnfCcpO1xuXG5cdFx0XHRub3JtYWwwID0gbm9ybWFsaXplTmFtZShhbGlhc1swXSk7XG5cdFx0XHRub3JtYWwxID0gbm9ybWFsaXplTmFtZShhbGlhc1sxXSk7XG5cblx0XHRcdGxpbmtzW25vcm1hbDBdID0gbm9ybWFsMTtcblx0XHRcdG5hbWVzW25vcm1hbDBdID0gYWxpYXNbMF07XG5cblx0XHRcdGxpbmtzW25vcm1hbDFdID0gbm9ybWFsMDtcblx0XHRcdG5hbWVzW25vcm1hbDFdID0gYWxpYXNbMV07XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQ291bnRyaWVzIChkYXRhKSB7XG5cdFx0dmFyIGksIGNvdW50cnlfY29kZSwgY291bnRyeV96b25lcywgc3BsaXQ7XG5cdFx0aWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzcGxpdCA9IGRhdGFbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdGNvdW50cnlfY29kZSA9IHNwbGl0WzBdLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRjb3VudHJ5X3pvbmVzID0gc3BsaXRbMV0uc3BsaXQoJyAnKTtcblx0XHRcdGNvdW50cmllc1tjb3VudHJ5X2NvZGVdID0gbmV3IENvdW50cnkoXG5cdFx0XHRcdGNvdW50cnlfY29kZSxcblx0XHRcdFx0Y291bnRyeV96b25lc1xuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb3VudHJ5IChuYW1lKSB7XG5cdFx0bmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKTtcblx0XHRyZXR1cm4gY291bnRyaWVzW25hbWVdIHx8IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiB6b25lc0ZvckNvdW50cnkoY291bnRyeSwgd2l0aF9vZmZzZXQpIHtcblx0XHRjb3VudHJ5ID0gZ2V0Q291bnRyeShjb3VudHJ5KTtcblxuXHRcdGlmICghY291bnRyeSkgcmV0dXJuIG51bGw7XG5cblx0XHR2YXIgem9uZXMgPSBjb3VudHJ5LnpvbmVzLnNvcnQoKTtcblxuXHRcdGlmICh3aXRoX29mZnNldCkge1xuXHRcdFx0cmV0dXJuIHpvbmVzLm1hcChmdW5jdGlvbiAoem9uZV9uYW1lKSB7XG5cdFx0XHRcdHZhciB6b25lID0gZ2V0Wm9uZSh6b25lX25hbWUpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG5hbWU6IHpvbmVfbmFtZSxcblx0XHRcdFx0XHRvZmZzZXQ6IHpvbmUudXRjT2Zmc2V0KG5ldyBEYXRlKCkpXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gem9uZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkRGF0YSAoZGF0YSkge1xuXHRcdGFkZFpvbmUoZGF0YS56b25lcyk7XG5cdFx0YWRkTGluayhkYXRhLmxpbmtzKTtcblx0XHRhZGRDb3VudHJpZXMoZGF0YS5jb3VudHJpZXMpO1xuXHRcdHR6LmRhdGFWZXJzaW9uID0gZGF0YS52ZXJzaW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gem9uZUV4aXN0cyAobmFtZSkge1xuXHRcdGlmICghem9uZUV4aXN0cy5kaWRTaG93RXJyb3IpIHtcblx0XHRcdHpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yID0gdHJ1ZTtcblx0XHRcdFx0bG9nRXJyb3IoXCJtb21lbnQudHouem9uZUV4aXN0cygnXCIgKyBuYW1lICsgXCInKSBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mICFtb21lbnQudHouem9uZSgnXCIgKyBuYW1lICsgXCInKVwiKTtcblx0XHR9XG5cdFx0cmV0dXJuICEhZ2V0Wm9uZShuYW1lKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG5lZWRzT2Zmc2V0IChtKSB7XG5cdFx0dmFyIGlzVW5peFRpbWVzdGFtcCA9IChtLl9mID09PSAnWCcgfHwgbS5fZiA9PT0gJ3gnKTtcblx0XHRyZXR1cm4gISEobS5fYSAmJiAobS5fdHptID09PSB1bmRlZmluZWQpICYmICFpc1VuaXhUaW1lc3RhbXApO1xuXHR9XG5cblx0ZnVuY3Rpb24gbG9nRXJyb3IgKG1lc3NhZ2UpIHtcblx0XHRpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRtb21lbnQudHogbmFtZXNwYWNlXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiB0eiAoaW5wdXQpIHtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgLTEpLFxuXHRcdFx0bmFtZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0sXG5cdFx0XHRvdXQgID0gbW9tZW50LnV0Yy5hcHBseShudWxsLCBhcmdzKSxcblx0XHRcdHpvbmU7XG5cblx0XHRpZiAoIW1vbWVudC5pc01vbWVudChpbnB1dCkgJiYgbmVlZHNPZmZzZXQob3V0KSAmJiAoem9uZSA9IGdldFpvbmUobmFtZSkpKSB7XG5cdFx0XHRvdXQuYWRkKHpvbmUucGFyc2Uob3V0KSwgJ21pbnV0ZXMnKTtcblx0XHR9XG5cblx0XHRvdXQudHoobmFtZSk7XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0dHoudmVyc2lvbiAgICAgID0gVkVSU0lPTjtcblx0dHouZGF0YVZlcnNpb24gID0gJyc7XG5cdHR6Ll96b25lcyAgICAgICA9IHpvbmVzO1xuXHR0ei5fbGlua3MgICAgICAgPSBsaW5rcztcblx0dHouX25hbWVzICAgICAgID0gbmFtZXM7XG5cdHR6Ll9jb3VudHJpZXNcdD0gY291bnRyaWVzO1xuXHR0ei5hZGQgICAgICAgICAgPSBhZGRab25lO1xuXHR0ei5saW5rICAgICAgICAgPSBhZGRMaW5rO1xuXHR0ei5sb2FkICAgICAgICAgPSBsb2FkRGF0YTtcblx0dHouem9uZSAgICAgICAgID0gZ2V0Wm9uZTtcblx0dHouem9uZUV4aXN0cyAgID0gem9uZUV4aXN0czsgLy8gZGVwcmVjYXRlZCBpbiAwLjEuMFxuXHR0ei5ndWVzcyAgICAgICAgPSBndWVzcztcblx0dHoubmFtZXMgICAgICAgID0gZ2V0TmFtZXM7XG5cdHR6LlpvbmUgICAgICAgICA9IFpvbmU7XG5cdHR6LnVucGFjayAgICAgICA9IHVucGFjaztcblx0dHoudW5wYWNrQmFzZTYwID0gdW5wYWNrQmFzZTYwO1xuXHR0ei5uZWVkc09mZnNldCAgPSBuZWVkc09mZnNldDtcblx0dHoubW92ZUludmFsaWRGb3J3YXJkICAgPSB0cnVlO1xuXHR0ei5tb3ZlQW1iaWd1b3VzRm9yd2FyZCA9IGZhbHNlO1xuXHR0ei5jb3VudHJpZXMgICAgPSBnZXRDb3VudHJ5TmFtZXM7XG5cdHR6LnpvbmVzRm9yQ291bnRyeSA9IHpvbmVzRm9yQ291bnRyeTtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0SW50ZXJmYWNlIHdpdGggTW9tZW50LmpzXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHR2YXIgZm4gPSBtb21lbnQuZm47XG5cblx0bW9tZW50LnR6ID0gdHo7XG5cblx0bW9tZW50LmRlZmF1bHRab25lID0gbnVsbDtcblxuXHRtb21lbnQudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKG1vbSwga2VlcFRpbWUpIHtcblx0XHR2YXIgem9uZSA9IG1vbWVudC5kZWZhdWx0Wm9uZSxcblx0XHRcdG9mZnNldDtcblxuXHRcdGlmIChtb20uX3ogPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHpvbmUgJiYgbmVlZHNPZmZzZXQobW9tKSAmJiAhbW9tLl9pc1VUQyAmJiBtb20uaXNWYWxpZCgpKSB7XG5cdFx0XHRcdG1vbS5fZCA9IG1vbWVudC51dGMobW9tLl9hKS5fZDtcblx0XHRcdFx0bW9tLnV0YygpLmFkZCh6b25lLnBhcnNlKG1vbSksICdtaW51dGVzJyk7XG5cdFx0XHR9XG5cdFx0XHRtb20uX3ogPSB6b25lO1xuXHRcdH1cblx0XHRpZiAobW9tLl96KSB7XG5cdFx0XHRvZmZzZXQgPSBtb20uX3oudXRjT2Zmc2V0KG1vbSk7XG5cdFx0XHRpZiAoTWF0aC5hYnMob2Zmc2V0KSA8IDE2KSB7XG5cdFx0XHRcdG9mZnNldCA9IG9mZnNldCAvIDYwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vbS51dGNPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgeiA9IG1vbS5fejtcblx0XHRcdFx0bW9tLnV0Y09mZnNldCgtb2Zmc2V0LCBrZWVwVGltZSk7XG5cdFx0XHRcdG1vbS5feiA9IHo7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtb20uem9uZShvZmZzZXQsIGtlZXBUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Zm4udHogPSBmdW5jdGlvbiAobmFtZSwga2VlcFRpbWUpIHtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpbWUgem9uZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGdvdCAnICsgbmFtZSArICcgWycgKyB0eXBlb2YgbmFtZSArICddJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl96ID0gZ2V0Wm9uZShuYW1lKTtcblx0XHRcdGlmICh0aGlzLl96KSB7XG5cdFx0XHRcdG1vbWVudC51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgaGFzIG5vIGRhdGEgZm9yIFwiICsgbmFtZSArIFwiLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvZGF0YS1sb2FkaW5nLy5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3oubmFtZTsgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGFiYnJXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3ouYWJicih0aGlzKTsgfVxuXHRcdFx0cmV0dXJuIG9sZC5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldFpvbmVXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5feiA9IG51bGw7XG5cdFx0XHRyZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2V0Wm9uZVdyYXAyIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB0aGlzLl96ID0gbnVsbDtcblx0XHRcdHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9XG5cblx0Zm4uem9uZU5hbWUgID0gYWJicldyYXAoZm4uem9uZU5hbWUpO1xuXHRmbi56b25lQWJiciAgPSBhYmJyV3JhcChmbi56b25lQWJicik7XG5cdGZuLnV0YyAgICAgICA9IHJlc2V0Wm9uZVdyYXAoZm4udXRjKTtcblx0Zm4ubG9jYWwgICAgID0gcmVzZXRab25lV3JhcChmbi5sb2NhbCk7XG5cdGZuLnV0Y09mZnNldCA9IHJlc2V0Wm9uZVdyYXAyKGZuLnV0Y09mZnNldCk7XG5cblx0bW9tZW50LnR6LnNldERlZmF1bHQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA5KSkge1xuXHRcdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSBzZXREZWZhdWx0KCkgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuOS4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLicpO1xuXHRcdH1cblx0XHRtb21lbnQuZGVmYXVsdFpvbmUgPSBuYW1lID8gZ2V0Wm9uZShuYW1lKSA6IG51bGw7XG5cdFx0cmV0dXJuIG1vbWVudDtcblx0fTtcblxuXHQvLyBDbG9uaW5nIGEgbW9tZW50IHNob3VsZCBpbmNsdWRlIHRoZSBfeiBwcm9wZXJ0eS5cblx0dmFyIG1vbWVudFByb3BlcnRpZXMgPSBtb21lbnQubW9tZW50UHJvcGVydGllcztcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb21lbnRQcm9wZXJ0aWVzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRcdC8vIG1vbWVudCAyLjguMStcblx0XHRtb21lbnRQcm9wZXJ0aWVzLnB1c2goJ196Jyk7XG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfYScpO1xuXHR9IGVsc2UgaWYgKG1vbWVudFByb3BlcnRpZXMpIHtcblx0XHQvLyBtb21lbnQgMi43LjBcblx0XHRtb21lbnRQcm9wZXJ0aWVzLl96ID0gbnVsbDtcblx0fVxuXG5cdGxvYWREYXRhKHtcblx0XHRcInZlcnNpb25cIjogXCIyMDI1YlwiLFxuXHRcdFwiem9uZXNcIjogW1xuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxHTVR8MHwwfHw0OGU1XCIsXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEVBVHwtMzB8MHx8NDdlNVwiLFxuXHRcdFx0XCJBZnJpY2EvQWxnaWVyc3xDRVR8LTEwfDB8fDI2ZTVcIixcblx0XHRcdFwiQWZyaWNhL0xhZ29zfFdBVHwtMTB8MHx8MTdlNlwiLFxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18Q0FUfC0yMHwwfHw1MWU1XCIsXG5cdFx0XHRcIkFmcmljYS9DYWlyb3xFRVQgRUVTVHwtMjAgLTMwfDAxMDEwMTAxMDEwMTAxMDEwfDI5TlcwIDFjTDAgMWNOMCAxZnowIDFhMTAgMWZ6MCAxYTEwIDFmejAgMWNOMCAxY0wwIDFjTjAgMWNMMCAxY04wIDFjTDAgMWNOMCAxZnowfDE1ZTZcIixcblx0XHRcdFwiQWZyaWNhL0Nhc2FibGFuY2F8KzAxICswMHwtMTAgMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDF8MjJzcTAgZ00wIDI2MDAgZTAwIDI2MDAgZ00wIDI2MDAgZTAwIDI4TTAgZTAwIDI2MDAgZ00wIDI2MDAgZTAwIDI4TTAgZTAwIDI2MDAgZ00wIDI2MDAgZTAwIDI2MDAgZ00wIDI2MDB8MzJlNVwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8Q0VUIENFU1R8LTEwIC0yMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmsxMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDExZTZcIixcblx0XHRcdFwiQWZyaWNhL0pvaGFubmVzYnVyZ3xTQVNUfC0yMHwwfHw4NGU1XCIsXG5cdFx0XHRcIkFmcmljYS9KdWJhfEVBVCBDQVR8LTMwIC0yMHwwMXwyNG54MHxcIixcblx0XHRcdFwiQWZyaWNhL1RyaXBvbGl8RUVUfC0yMHwwfHwxMWU1XCIsXG5cdFx0XHRcIkFtZXJpY2EvQWRha3xIU1QgSERUfGEwIDkwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyYk0wIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjB8MzI2XCIsXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFLU1QgQUtEVHw5MCA4MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJMMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDMwZTRcIixcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFTVHw0MHwwfHwyOWU1XCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfC0wM3wzMHwwfHwyMGU2XCIsXG5cdFx0XHRcIkFtZXJpY2EvQXN1bmNpb258LTAzIC0wNHwzMCA0MHwwMTAxMDEwMTAxMHwyMmhmMCAxaXAwIDE5WDAgMWZCMCAxOVgwIDFmQjAgMTlYMCAxZkIwIDE5WDAgMWlwMHwyOGU1XCIsXG5cdFx0XHRcIkFtZXJpY2EvUGFuYW1hfEVTVHw1MHwwfHwxNWU1XCIsXG5cdFx0XHRcIkFtZXJpY2EvTWV4aWNvX0NpdHl8Q1NUIENEVHw2MCA1MHwwMTAxMDEwfDIybVUwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMHwyMGU2XCIsXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxDU1R8NjB8MHx8MjJlNVwiLFxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8LTA0fDQwfDB8fDI5ZTVcIixcblx0XHRcdFwiQW1lcmljYS9MaW1hfC0wNXw1MHwwfHwxMWU2XCIsXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfE1TVCBNRFR8NzAgNjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiSjAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHwyNmU1XCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xDU1QgQ0RUfDYwIDUwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyYkkwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjB8OTJlNVwiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWh1YWh1YXxNU1QgTURUIENTVHw3MCA2MCA2MHwwMTAxMDEyfDIybVYwIDFsYjAgMTRwMCAxblgwIDExQjAgMW5YMHw4MWU0XCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2l1ZGFkX0p1YXJlenxNU1QgTURUIENTVHw3MCA2MCA2MHwwMTAxMDEyMDEwMTAxMDEwMTAxMDEwMTB8MjJiSjAgMXpiMCBSZDAgMXpiMCBPcDAgMXduMCBjbTAgRVAwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjB8XCIsXG5cdFx0XHRcIkFtZXJpY2EvQ295aGFpcXVlfC0wMyAtMDR8MzAgNDB8MDEwMTAxMDEwMTB8MjJtUDAgMTFCMCAxblgwIDExQjAgMW5YMCAxNHAwIDFsYjAgMTFCMCAxcUwwIDExQjB8XCIsXG5cdFx0XHRcIkFtZXJpY2EvUGhvZW5peHxNU1R8NzB8MHx8NDJlNVwiLFxuXHRcdFx0XCJBbWVyaWNhL1doaXRlaG9yc2V8UFNUIFBEVCBNU1R8ODAgNzAgNzB8MDEyfDIyYkswIDF6OTB8MjNlM1wiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEVTVCBFRFR8NTAgNDB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiSDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHwyMWU2XCIsXG5cdFx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8UFNUIFBEVHw4MCA3MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJLMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDE1ZTZcIixcblx0XHRcdFwiQW1lcmljYS9IYWxpZmF4fEFTVCBBRFR8NDAgMzB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJiRzAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBSZDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMCBPcDAgMXpiMHwzOWU0XCIsXG5cdFx0XHRcIkFtZXJpY2EvR29kdGhhYnwtMDMgLTAyIC0wMXwzMCAyMCAxMHwwMTAxMDEwMTIxMjEyMTIxMjEyMTIxfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAyc28wIDFvMDAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwfDE3ZTNcIixcblx0XHRcdFwiQW1lcmljYS9IYXZhbmF8Q1NUIENEVHw1MCA0MHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJGMCAxemMwIFJjMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIFJjMCAxemMwIE9vMCAxemMwIE9vMCAxemMwIE9vMCAxemMwfDIxZTVcIixcblx0XHRcdFwiQW1lcmljYS9NYXphdGxhbnxNU1QgTURUfDcwIDYwfDAxMDEwMTB8MjJtVjAgMWxiMCAxNHAwIDFuWDAgMTFCMCAxblgwfDQ0ZTRcIixcblx0XHRcdFwiQW1lcmljYS9NaXF1ZWxvbnwtMDMgLTAyfDMwIDIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyYkYwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgUmQwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjAgT3AwIDF6YjB8NjFlMlwiLFxuXHRcdFx0XCJBbWVyaWNhL05vcm9uaGF8LTAyfDIwfDB8fDMwZTJcIixcblx0XHRcdFwiQW1lcmljYS9PamluYWdhfE1TVCBNRFQgQ1NUIENEVHw3MCA2MCA2MCA1MHwwMTAxMDEyMzIzMjMyMzIzMjMyMzIzMnwyMmJKMCAxemIwIFJkMCAxemIwIE9wMCAxd24wIFJjMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDIzZTNcIixcblx0XHRcdFwiQW1lcmljYS9TYW50aWFnb3wtMDMgLTA0fDMwIDQwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIybVAwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDExQjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIDExQjB8NjJlNVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Njb3Jlc2J5c3VuZHwtMDEgKzAwIC0wMnwxMCAwIDIwfDAxMDEwMTAxMDIwMjAyMDIwMjAyMDJ8MjJrMTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMnBBMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8NDUyXCIsXG5cdFx0XHRcIkFtZXJpY2EvU3RfSm9obnN8TlNUIE5EVHwzdSAydXwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmJGdSAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIFJkMCAxemIwIE9wMCAxemIwIE9wMCAxemIwIE9wMCAxemIwfDExZTRcIixcblx0XHRcdFwiQW50YXJjdGljYS9DYXNleXwrMTEgKzA4fC1iMCAtODB8MDEwMTAxMDF8MjJiczAgMW8wMSAxNGtYIDFsZjEgMTRrWCAxbGYxIDEzYlh8MTBcIixcblx0XHRcdFwiQXNpYS9CYW5na29rfCswN3wtNzB8MHx8MTVlNlwiLFxuXHRcdFx0XCJBc2lhL1ZsYWRpdm9zdG9rfCsxMHwtYTB8MHx8NjBlNFwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvU3lkbmV5fEFFRFQgQUVTVHwtYjAgLWEwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIybUUwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wfDQwZTVcIixcblx0XHRcdFwiQXNpYS9UYXNoa2VudHwrMDV8LTUwfDB8fDIzZTVcIixcblx0XHRcdFwiUGFjaWZpYy9BdWNrbGFuZHxOWkRUIE5aU1R8LWQwIC1jMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMm1DMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFpbzAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxY00wIDFmQTAgMWEwMHwxNGU1XCIsXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHwrMDN8LTMwfDB8fDEzZTZcIixcblx0XHRcdFwiQW50YXJjdGljYS9Ucm9sbHwrMDAgKzAyfDAgLTIwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8NDBcIixcblx0XHRcdFwiQW50YXJjdGljYS9Wb3N0b2t8KzA3ICswNXwtNzAgLTUwfDAxfDJibnYwfDI1XCIsXG5cdFx0XHRcIkFzaWEvQWxtYXR5fCswNiArMDV8LTYwIC01MHwwMXwyYlI2MHwxNWU1XCIsXG5cdFx0XHRcIkFzaWEvQW1tYW58RUVUIEVFU1QgKzAzfC0yMCAtMzAgLTMwfDAxMDEwMTJ8MjJqYTAgMXFNMCBXTTAgMXFNMCBMQTAgMUMwMHwyNWU1XCIsXG5cdFx0XHRcIkFzaWEvS2FtY2hhdGthfCsxMnwtYzB8MHx8MThlNFwiLFxuXHRcdFx0XCJBc2lhL0R1YmFpfCswNHwtNDB8MHx8MzllNVwiLFxuXHRcdFx0XCJBc2lhL0JlaXJ1dHxFRVQgRUVTVHwtMjAgLTMwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyalcwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMXFMMCBXTjAgMXFMMCBXTjAgMXFMMCAxMUIwIDFuWDB8MjJlNVwiLFxuXHRcdFx0XCJBc2lhL0RoYWthfCswNnwtNjB8MHx8MTZlNlwiLFxuXHRcdFx0XCJBc2lhL0t1YWxhX0x1bXB1cnwrMDh8LTgwfDB8fDcxZTVcIixcblx0XHRcdFwiQXNpYS9Lb2xrYXRhfElTVHwtNXV8MHx8MTVlNlwiLFxuXHRcdFx0XCJBc2lhL0NoaXRhfCswOXwtOTB8MHx8MzNlNFwiLFxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfENTVHwtODB8MHx8MjNlNlwiLFxuXHRcdFx0XCJBc2lhL0NvbG9tYm98KzA1MzB8LTV1fDB8fDIyZTVcIixcblx0XHRcdFwiQXNpYS9EYW1hc2N1c3xFRVQgRUVTVCArMDN8LTIwIC0zMCAtMzB8MDEwMTAxMnwyMmphMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwfDI2ZTVcIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFRVQgRUVTVHwtMjAgLTMwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8MzVlNVwiLFxuXHRcdFx0XCJBc2lhL0dhemF8RUVUIEVFU1R8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmp5MCAxbzAwIDExQTAgMXFvMCBYQTAgMXFwMCAxY04wIDFjTDAgMWExMCAxZnowIDE3ZDAgMWluMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIFdOMCAxcUwwIDExQjAgMW5YMHwxOGU1XCIsXG5cdFx0XHRcIkFzaWEvSG9uZ19Lb25nfEhLVHwtODB8MHx8NzNlNVwiLFxuXHRcdFx0XCJBc2lhL0pha2FydGF8V0lCfC03MHwwfHwzMWU2XCIsXG5cdFx0XHRcIkFzaWEvSmF5YXB1cmF8V0lUfC05MHwwfHwyNmU0XCIsXG5cdFx0XHRcIkFzaWEvSmVydXNhbGVtfElTVCBJRFR8LTIwIC0zMHwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMmpjMCAxb0wwIDEwTjAgMXJ6MCBXMTAgMXJ6MCBXMTAgMXJ6MCAxME4wIDFvTDAgMTBOMCAxb0wwIDEwTjAgMW9MMCAxME4wIDFyejAgVzEwIDFyejAgVzEwIDFyejAgMTBOMCAxb0wwfDgxZTRcIixcblx0XHRcdFwiQXNpYS9LYWJ1bHwrMDQzMHwtNHV8MHx8NDZlNVwiLFxuXHRcdFx0XCJBc2lhL0thcmFjaGl8UEtUfC01MHwwfHwyNGU2XCIsXG5cdFx0XHRcIkFzaWEvS2F0aG1hbmR1fCswNTQ1fC01SnwwfHwxMmU1XCIsXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58KzExfC1iMHwwfHw1OGU0XCIsXG5cdFx0XHRcIkFzaWEvTWFrYXNzYXJ8V0lUQXwtODB8MHx8MTVlNVwiLFxuXHRcdFx0XCJBc2lhL01hbmlsYXxQU1R8LTgwfDB8fDI0ZTZcIixcblx0XHRcdFwiQXNpYS9TZW91bHxLU1R8LTkwfDB8fDIzZTZcIixcblx0XHRcdFwiQXNpYS9SYW5nb29ufCswNjMwfC02dXwwfHw0OGU1XCIsXG5cdFx0XHRcIkFzaWEvVGVocmFufCswMzMwICswNDMwfC0zdSAtNHV8MDEwMTAxMHwyMmdJdSAxZHowIDFjTjAgMWR6MCAxY3AwIDFkejB8MTRlNlwiLFxuXHRcdFx0XCJBc2lhL1Rva3lvfEpTVHwtOTB8MHx8MzhlNlwiLFxuXHRcdFx0XCJBdGxhbnRpYy9Bem9yZXN8LTAxICswMHwxMCAwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8MjVlNFwiLFxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufFdFVCBXRVNUfDAgLTEwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8MjdlNVwiLFxuXHRcdFx0XCJBdGxhbnRpYy9DYXBlX1ZlcmRlfC0wMXwxMHwwfHw1MGU0XCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9BZGVsYWlkZXxBQ0RUIEFDU1R8LWF1IC05dXwwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMHwyMm1FdSAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFmQTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMHwxMWU1XCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9CcmlzYmFuZXxBRVNUfC1hMHwwfHwyMGU1XCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9EYXJ3aW58QUNTVHwtOXV8MHx8MTJlNFwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvRXVjbGF8KzA4NDV8LThKfDB8fDM2OFwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvTG9yZF9Ib3dlfCsxMSArMTAzMHwtYjAgLWF1fDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIybUQwIDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWZ6dSAxY011IDFjTHUgMWNNdSAxY0x1IDFjTXUgMWNMdSAxY011IDFjTHUgMWNNdSAxY0x1IDFmQXUgMWNMdSAxY011fDM0N1wiLFxuXHRcdFx0XCJBdXN0cmFsaWEvUGVydGh8QVdTVHwtODB8MHx8MThlNVwiLFxuXHRcdFx0XCJQYWNpZmljL0Vhc3RlcnwtMDUgLTA2fDUwIDYwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIybVAwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTRwMCAxbGIwIDExQjAgMXFMMCAxMUIwIDFuWDAgMTFCMCAxblgwIDExQjAgMW5YMCAxMUIwIDFuWDAgMTFCMCAxcUwwIFdOMCAxcUwwIDExQjB8MzBlMlwiLFxuXHRcdFx0XCJFdXJvcGUvRHVibGlufEdNVCBJU1R8MCAtMTB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJrMTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMHwxMmU1XCIsXG5cdFx0XHRcIkV0Yy9HTVQtMXwrMDF8LTEwfDB8fFwiLFxuXHRcdFx0XCJQYWNpZmljL1RvbmdhdGFwdXwrMTN8LWQwfDB8fDc1ZTNcIixcblx0XHRcdFwiUGFjaWZpYy9LaXJpdGltYXRpfCsxNHwtZTB8MHx8NTFlMlwiLFxuXHRcdFx0XCJFdGMvR01ULTJ8KzAyfC0yMHwwfHxcIixcblx0XHRcdFwiUGFjaWZpYy9UYWhpdGl8LTEwfGEwfDB8fDE4ZTRcIixcblx0XHRcdFwiUGFjaWZpYy9OaXVlfC0xMXxiMHwwfHwxMmUyXCIsXG5cdFx0XHRcIkV0Yy9HTVQrMTJ8LTEyfGMwfDB8fFwiLFxuXHRcdFx0XCJQYWNpZmljL0dhbGFwYWdvc3wtMDZ8NjB8MHx8MjVlM1wiLFxuXHRcdFx0XCJFdGMvR01UKzd8LTA3fDcwfDB8fFwiLFxuXHRcdFx0XCJQYWNpZmljL1BpdGNhaXJufC0wOHw4MHwwfHw1NlwiLFxuXHRcdFx0XCJQYWNpZmljL0dhbWJpZXJ8LTA5fDkwfDB8fDEyNVwiLFxuXHRcdFx0XCJFdGMvVVRDfFVUQ3wwfDB8fFwiLFxuXHRcdFx0XCJFdXJvcGUvTG9uZG9ufEdNVCBCU1R8MCAtMTB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJrMTAgMW8wMCAxMUEwIDFxTTAgV00wIDFxTTAgV00wIDFxTTAgMTFBMCAxbzAwIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMHwxMGU2XCIsXG5cdFx0XHRcIkV1cm9wZS9DaGlzaW5hdXxFRVQgRUVTVHwtMjAgLTMwfDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwfDIyazAwIDFvMDAgMTFBMCAxcU0wIFdNMCAxcU0wIFdNMCAxcU0wIDExQTAgMW8wMCAxMUEwIDFvMDAgMTFBMCAxbzAwIDExQTAgMXFNMCBXTTAgMXFNMCBXTTAgMXFNMCAxMUEwIDFvMDB8NjdlNFwiLFxuXHRcdFx0XCJFdXJvcGUvTW9zY293fE1TS3wtMzB8MHx8MTZlNlwiLFxuXHRcdFx0XCJFdXJvcGUvVm9sZ29ncmFkfCswNCBNU0t8LTQwIC0zMHwwMXwyNDlhMHwxMGU1XCIsXG5cdFx0XHRcIlBhY2lmaWMvSG9ub2x1bHV8SFNUfGEwfDB8fDM3ZTRcIixcblx0XHRcdFwiUGFjaWZpYy9DaGF0aGFtfCsxMzQ1ICsxMjQ1fC1kSiAtY0p8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtQzAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxaW8wIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWEwMCAxZkEwIDFhMDAgMWZBMCAxYTAwIDFmQTAgMWNNMCAxZkEwIDFhMDB8NjAwXCIsXG5cdFx0XHRcIlBhY2lmaWMvQXBpYXwrMTQgKzEzfC1lMCAtZDB8MDEwMXwyMm1DMCAxYTAwIDFmQTB8MzdlM1wiLFxuXHRcdFx0XCJQYWNpZmljL0Zpaml8KzEzICsxMnwtZDAgLWMwfDAxMDF8MjFOMjAgMmhjMCBiYzB8ODhlNFwiLFxuXHRcdFx0XCJQYWNpZmljL0d1YW18Q2hTVHwtYTB8MHx8MTdlNFwiLFxuXHRcdFx0XCJQYWNpZmljL01hcnF1ZXNhc3wtMDkzMHw5dXwwfHw4NmUyXCIsXG5cdFx0XHRcIlBhY2lmaWMvUGFnb19QYWdvfFNTVHxiMHwwfHwzN2UyXCIsXG5cdFx0XHRcIlBhY2lmaWMvTm9yZm9sa3wrMTIgKzExfC1jMCAtYjB8MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTB8MjJtRDAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxZkEwIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWNNMCAxY00wIDFjTTAgMWZBMCAxY00wIDFjTTB8MjVlNFwiXG5cdFx0XSxcblx0XHRcImxpbmtzXCI6IFtcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0FjY3JhXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9CYW1ha29cIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0Jhbmp1bFwiLFxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvQmlzc2F1XCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9Db25ha3J5XCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9EYWthclwiLFxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvRnJlZXRvd25cIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL0xvbWVcIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL01vbnJvdmlhXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9Ob3Vha2Nob3R0XCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFmcmljYS9PdWFnYWRvdWdvdVwiLFxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBZnJpY2EvU2FvX1RvbWVcIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58QWZyaWNhL1RpbWJ1a3R1XCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEFtZXJpY2EvRGFubWFya3NoYXZuXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEF0bGFudGljL1JleWtqYXZpa1wiLFxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxBdGxhbnRpYy9TdF9IZWxlbmFcIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58RXRjL0dNVFwiLFxuXHRcdFx0XCJBZnJpY2EvQWJpZGphbnxFdGMvR01UKzBcIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58RXRjL0dNVC0wXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEV0Yy9HTVQwXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEV0Yy9HcmVlbndpY2hcIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58R01UXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEdNVCswXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEdNVC0wXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEdNVDBcIixcblx0XHRcdFwiQWZyaWNhL0FiaWRqYW58R3JlZW53aWNoXCIsXG5cdFx0XHRcIkFmcmljYS9BYmlkamFufEljZWxhbmRcIixcblx0XHRcdFwiQWZyaWNhL0FsZ2llcnN8QWZyaWNhL1R1bmlzXCIsXG5cdFx0XHRcIkFmcmljYS9DYWlyb3xFZ3lwdFwiLFxuXHRcdFx0XCJBZnJpY2EvQ2FzYWJsYW5jYXxBZnJpY2EvRWxfQWFpdW5cIixcblx0XHRcdFwiQWZyaWNhL0pvaGFubmVzYnVyZ3xBZnJpY2EvTWFzZXJ1XCIsXG5cdFx0XHRcIkFmcmljYS9Kb2hhbm5lc2J1cmd8QWZyaWNhL01iYWJhbmVcIixcblx0XHRcdFwiQWZyaWNhL0toYXJ0b3VtfEFmcmljYS9CbGFudHlyZVwiLFxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL0J1anVtYnVyYVwiLFxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL0dhYm9yb25lXCIsXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvSGFyYXJlXCIsXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvS2lnYWxpXCIsXG5cdFx0XHRcIkFmcmljYS9LaGFydG91bXxBZnJpY2EvTHVidW1iYXNoaVwiLFxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL0x1c2FrYVwiLFxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL01hcHV0b1wiLFxuXHRcdFx0XCJBZnJpY2EvS2hhcnRvdW18QWZyaWNhL1dpbmRob2VrXCIsXG5cdFx0XHRcIkFmcmljYS9MYWdvc3xBZnJpY2EvQmFuZ3VpXCIsXG5cdFx0XHRcIkFmcmljYS9MYWdvc3xBZnJpY2EvQnJhenphdmlsbGVcIixcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9Eb3VhbGFcIixcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9LaW5zaGFzYVwiLFxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL0xpYnJldmlsbGVcIixcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9MdWFuZGFcIixcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9NYWxhYm9cIixcblx0XHRcdFwiQWZyaWNhL0xhZ29zfEFmcmljYS9OZGphbWVuYVwiLFxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL05pYW1leVwiLFxuXHRcdFx0XCJBZnJpY2EvTGFnb3N8QWZyaWNhL1BvcnRvLU5vdm9cIixcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL0FkZGlzX0FiYWJhXCIsXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEFmcmljYS9Bc21hcmFcIixcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL0FzbWVyYVwiLFxuXHRcdFx0XCJBZnJpY2EvTmFpcm9iaXxBZnJpY2EvRGFyX2VzX1NhbGFhbVwiLFxuXHRcdFx0XCJBZnJpY2EvTmFpcm9iaXxBZnJpY2EvRGppYm91dGlcIixcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL0thbXBhbGFcIixcblx0XHRcdFwiQWZyaWNhL05haXJvYml8QWZyaWNhL01vZ2FkaXNodVwiLFxuXHRcdFx0XCJBZnJpY2EvTmFpcm9iaXxJbmRpYW4vQW50YW5hbmFyaXZvXCIsXG5cdFx0XHRcIkFmcmljYS9OYWlyb2JpfEluZGlhbi9Db21vcm9cIixcblx0XHRcdFwiQWZyaWNhL05haXJvYml8SW5kaWFuL01heW90dGVcIixcblx0XHRcdFwiQWZyaWNhL1RyaXBvbGl8RXVyb3BlL0thbGluaW5ncmFkXCIsXG5cdFx0XHRcIkFmcmljYS9Ucmlwb2xpfExpYnlhXCIsXG5cdFx0XHRcIkFtZXJpY2EvQWRha3xBbWVyaWNhL0F0a2FcIixcblx0XHRcdFwiQW1lcmljYS9BZGFrfFVTL0FsZXV0aWFuXCIsXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFtZXJpY2EvSnVuZWF1XCIsXG5cdFx0XHRcIkFtZXJpY2EvQW5jaG9yYWdlfEFtZXJpY2EvTWV0bGFrYXRsYVwiLFxuXHRcdFx0XCJBbWVyaWNhL0FuY2hvcmFnZXxBbWVyaWNhL05vbWVcIixcblx0XHRcdFwiQW1lcmljYS9BbmNob3JhZ2V8QW1lcmljYS9TaXRrYVwiLFxuXHRcdFx0XCJBbWVyaWNhL0FuY2hvcmFnZXxBbWVyaWNhL1lha3V0YXRcIixcblx0XHRcdFwiQW1lcmljYS9BbmNob3JhZ2V8VVMvQWxhc2thXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xBbWVyaWNhL0JvYV9WaXN0YVwiLFxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9DYW1wb19HcmFuZGVcIixcblx0XHRcdFwiQW1lcmljYS9DYXJhY2FzfEFtZXJpY2EvQ3VpYWJhXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xBbWVyaWNhL0d1eWFuYVwiLFxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8QW1lcmljYS9MYV9QYXpcIixcblx0XHRcdFwiQW1lcmljYS9DYXJhY2FzfEFtZXJpY2EvTWFuYXVzXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xBbWVyaWNhL1BvcnRvX1ZlbGhvXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2FyYWNhc3xCcmF6aWwvV2VzdFwiLFxuXHRcdFx0XCJBbWVyaWNhL0NhcmFjYXN8RXRjL0dNVCs0XCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL0luZGlhbmEvS25veFwiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9JbmRpYW5hL1RlbGxfQ2l0eVwiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9Lbm94X0lOXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL01hdGFtb3Jvc1wiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9NZW5vbWluZWVcIixcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfEFtZXJpY2EvTm9ydGhfRGFrb3RhL0JldWxhaFwiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298QW1lcmljYS9Ob3J0aF9EYWtvdGEvQ2VudGVyXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL05vcnRoX0Rha290YS9OZXdfU2FsZW1cIixcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfEFtZXJpY2EvUmFpbnlfUml2ZXJcIixcblx0XHRcdFwiQW1lcmljYS9DaGljYWdvfEFtZXJpY2EvUmFua2luX0lubGV0XCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL1Jlc29sdXRlXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xBbWVyaWNhL1dpbm5pcGVnXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xDU1Q2Q0RUXCIsXG5cdFx0XHRcIkFtZXJpY2EvQ2hpY2Fnb3xDYW5hZGEvQ2VudHJhbFwiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298VVMvQ2VudHJhbFwiLFxuXHRcdFx0XCJBbWVyaWNhL0NoaWNhZ298VVMvSW5kaWFuYS1TdGFya2VcIixcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8QW1lcmljYS9Cb2lzZVwiLFxuXHRcdFx0XCJBbWVyaWNhL0RlbnZlcnxBbWVyaWNhL0NhbWJyaWRnZV9CYXlcIixcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8QW1lcmljYS9FZG1vbnRvblwiLFxuXHRcdFx0XCJBbWVyaWNhL0RlbnZlcnxBbWVyaWNhL0ludXZpa1wiLFxuXHRcdFx0XCJBbWVyaWNhL0RlbnZlcnxBbWVyaWNhL1NoaXByb2NrXCIsXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfEFtZXJpY2EvWWVsbG93a25pZmVcIixcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8Q2FuYWRhL01vdW50YWluXCIsXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfE1TVDdNRFRcIixcblx0XHRcdFwiQW1lcmljYS9EZW52ZXJ8TmF2YWpvXCIsXG5cdFx0XHRcIkFtZXJpY2EvRGVudmVyfFVTL01vdW50YWluXCIsXG5cdFx0XHRcIkFtZXJpY2EvR29kdGhhYnxBbWVyaWNhL051dWtcIixcblx0XHRcdFwiQW1lcmljYS9IYWxpZmF4fEFtZXJpY2EvR2xhY2VfQmF5XCIsXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBbWVyaWNhL0dvb3NlX0JheVwiLFxuXHRcdFx0XCJBbWVyaWNhL0hhbGlmYXh8QW1lcmljYS9Nb25jdG9uXCIsXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBbWVyaWNhL1RodWxlXCIsXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxBdGxhbnRpYy9CZXJtdWRhXCIsXG5cdFx0XHRcIkFtZXJpY2EvSGFsaWZheHxDYW5hZGEvQXRsYW50aWNcIixcblx0XHRcdFwiQW1lcmljYS9IYXZhbmF8Q3ViYVwiLFxuXHRcdFx0XCJBbWVyaWNhL0xpbWF8QW1lcmljYS9Cb2dvdGFcIixcblx0XHRcdFwiQW1lcmljYS9MaW1hfEFtZXJpY2EvRWlydW5lcGVcIixcblx0XHRcdFwiQW1lcmljYS9MaW1hfEFtZXJpY2EvR3VheWFxdWlsXCIsXG5cdFx0XHRcIkFtZXJpY2EvTGltYXxBbWVyaWNhL1BvcnRvX0FjcmVcIixcblx0XHRcdFwiQW1lcmljYS9MaW1hfEFtZXJpY2EvUmlvX0JyYW5jb1wiLFxuXHRcdFx0XCJBbWVyaWNhL0xpbWF8QnJhemlsL0FjcmVcIixcblx0XHRcdFwiQW1lcmljYS9MaW1hfEV0Yy9HTVQrNVwiLFxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfEFtZXJpY2EvRW5zZW5hZGFcIixcblx0XHRcdFwiQW1lcmljYS9Mb3NfQW5nZWxlc3xBbWVyaWNhL1NhbnRhX0lzYWJlbFwiLFxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfEFtZXJpY2EvVGlqdWFuYVwiLFxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfEFtZXJpY2EvVmFuY291dmVyXCIsXG5cdFx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8Q2FuYWRhL1BhY2lmaWNcIixcblx0XHRcdFwiQW1lcmljYS9Mb3NfQW5nZWxlc3xNZXhpY28vQmFqYU5vcnRlXCIsXG5cdFx0XHRcIkFtZXJpY2EvTG9zX0FuZ2VsZXN8UFNUOFBEVFwiLFxuXHRcdFx0XCJBbWVyaWNhL0xvc19BbmdlbGVzfFVTL1BhY2lmaWNcIixcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvQmVsaXplXCIsXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxBbWVyaWNhL0Nvc3RhX1JpY2FcIixcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvRWxfU2FsdmFkb3JcIixcblx0XHRcdFwiQW1lcmljYS9NYW5hZ3VhfEFtZXJpY2EvR3VhdGVtYWxhXCIsXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxBbWVyaWNhL1JlZ2luYVwiLFxuXHRcdFx0XCJBbWVyaWNhL01hbmFndWF8QW1lcmljYS9Td2lmdF9DdXJyZW50XCIsXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxBbWVyaWNhL1RlZ3VjaWdhbHBhXCIsXG5cdFx0XHRcIkFtZXJpY2EvTWFuYWd1YXxDYW5hZGEvU2Fza2F0Y2hld2FuXCIsXG5cdFx0XHRcIkFtZXJpY2EvTWF6YXRsYW58TWV4aWNvL0JhamFTdXJcIixcblx0XHRcdFwiQW1lcmljYS9NZXhpY29fQ2l0eXxBbWVyaWNhL0JhaGlhX0JhbmRlcmFzXCIsXG5cdFx0XHRcIkFtZXJpY2EvTWV4aWNvX0NpdHl8QW1lcmljYS9NZXJpZGFcIixcblx0XHRcdFwiQW1lcmljYS9NZXhpY29fQ2l0eXxBbWVyaWNhL01vbnRlcnJleVwiLFxuXHRcdFx0XCJBbWVyaWNhL01leGljb19DaXR5fE1leGljby9HZW5lcmFsXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9EZXRyb2l0XCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9Gb3J0X1dheW5lXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9HcmFuZF9UdXJrXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9JbmRpYW5hL0luZGlhbmFwb2xpc1wiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvSW5kaWFuYS9NYXJlbmdvXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9JbmRpYW5hL1BldGVyc2J1cmdcIixcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0luZGlhbmEvVmV2YXlcIixcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0luZGlhbmEvVmluY2VubmVzXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9JbmRpYW5hL1dpbmFtYWNcIixcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL0luZGlhbmFwb2xpc1wiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvSXFhbHVpdFwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvS2VudHVja3kvTG91aXN2aWxsZVwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvS2VudHVja3kvTW9udGljZWxsb1wiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvTG91aXN2aWxsZVwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvTW9udHJlYWxcIixcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL05hc3NhdVwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvTmlwaWdvblwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvUGFuZ25pcnR1bmdcIixcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xBbWVyaWNhL1BvcnQtYXUtUHJpbmNlXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8QW1lcmljYS9UaHVuZGVyX0JheVwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfEFtZXJpY2EvVG9yb250b1wiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfENhbmFkYS9FYXN0ZXJuXCIsXG5cdFx0XHRcIkFtZXJpY2EvTmV3X1lvcmt8RVNUNUVEVFwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfFVTL0Vhc3QtSW5kaWFuYVwiLFxuXHRcdFx0XCJBbWVyaWNhL05ld19Zb3JrfFVTL0Vhc3Rlcm5cIixcblx0XHRcdFwiQW1lcmljYS9OZXdfWW9ya3xVUy9NaWNoaWdhblwiLFxuXHRcdFx0XCJBbWVyaWNhL05vcm9uaGF8QXRsYW50aWMvU291dGhfR2VvcmdpYVwiLFxuXHRcdFx0XCJBbWVyaWNhL05vcm9uaGF8QnJhemlsL0RlTm9yb25oYVwiLFxuXHRcdFx0XCJBbWVyaWNhL05vcm9uaGF8RXRjL0dNVCsyXCIsXG5cdFx0XHRcIkFtZXJpY2EvUGFuYW1hfEFtZXJpY2EvQXRpa29rYW5cIixcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8QW1lcmljYS9DYW5jdW5cIixcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8QW1lcmljYS9DYXltYW5cIixcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8QW1lcmljYS9Db3JhbF9IYXJib3VyXCIsXG5cdFx0XHRcIkFtZXJpY2EvUGFuYW1hfEFtZXJpY2EvSmFtYWljYVwiLFxuXHRcdFx0XCJBbWVyaWNhL1BhbmFtYXxFU1RcIixcblx0XHRcdFwiQW1lcmljYS9QYW5hbWF8SmFtYWljYVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8QW1lcmljYS9DcmVzdG9uXCIsXG5cdFx0XHRcIkFtZXJpY2EvUGhvZW5peHxBbWVyaWNhL0Rhd3Nvbl9DcmVla1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8QW1lcmljYS9Gb3J0X05lbHNvblwiLFxuXHRcdFx0XCJBbWVyaWNhL1Bob2VuaXh8QW1lcmljYS9IZXJtb3NpbGxvXCIsXG5cdFx0XHRcIkFtZXJpY2EvUGhvZW5peHxNU1RcIixcblx0XHRcdFwiQW1lcmljYS9QaG9lbml4fFVTL0FyaXpvbmFcIixcblx0XHRcdFwiQW1lcmljYS9TYW50aWFnb3xDaGlsZS9Db250aW5lbnRhbFwiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9Bbmd1aWxsYVwiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9BbnRpZ3VhXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0FydWJhXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0JhcmJhZG9zXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0JsYW5jLVNhYmxvblwiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9DdXJhY2FvXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0RvbWluaWNhXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0dyZW5hZGFcIixcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvR3VhZGVsb3VwZVwiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9LcmFsZW5kaWprXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL0xvd2VyX1ByaW5jZXNcIixcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvTWFyaWdvdFwiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9NYXJ0aW5pcXVlXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL01vbnRzZXJyYXRcIixcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvUG9ydF9vZl9TcGFpblwiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9QdWVydG9fUmljb1wiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9TdF9CYXJ0aGVsZW15XCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL1N0X0tpdHRzXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL1N0X0x1Y2lhXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL1N0X1Rob21hc1wiLFxuXHRcdFx0XCJBbWVyaWNhL1NhbnRvX0RvbWluZ298QW1lcmljYS9TdF9WaW5jZW50XCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FudG9fRG9taW5nb3xBbWVyaWNhL1RvcnRvbGFcIixcblx0XHRcdFwiQW1lcmljYS9TYW50b19Eb21pbmdvfEFtZXJpY2EvVmlyZ2luXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJhZ3VhaW5hXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL0J1ZW5vc19BaXJlc1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9DYXRhbWFyY2FcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9BcmdlbnRpbmEvQ29tb2RSaXZhZGF2aWFcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9BcmdlbnRpbmEvQ29yZG9iYVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9KdWp1eVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9MYV9SaW9qYVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9NZW5kb3phXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL1Jpb19HYWxsZWdvc1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9TYWx0YVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9TYW5fSnVhblwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9TYW5fTHVpc1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0FyZ2VudGluYS9UdWN1bWFuXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQXJnZW50aW5hL1VzaHVhaWFcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9CYWhpYVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0JlbGVtXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQnVlbm9zX0FpcmVzXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQ2F0YW1hcmNhXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvQ2F5ZW5uZVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL0NvcmRvYmFcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9Gb3J0YWxlemFcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9KdWp1eVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL01hY2Vpb1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL01lbmRvemFcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9Nb250ZXZpZGVvXCIsXG5cdFx0XHRcIkFtZXJpY2EvU2FvX1BhdWxvfEFtZXJpY2EvUGFyYW1hcmlib1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL1B1bnRhX0FyZW5hc1wiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL1JlY2lmZVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbWVyaWNhL1Jvc2FyaW9cIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QW1lcmljYS9TYW50YXJlbVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbnRhcmN0aWNhL1BhbG1lclwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xBbnRhcmN0aWNhL1JvdGhlcmFcIixcblx0XHRcdFwiQW1lcmljYS9TYW9fUGF1bG98QXRsYW50aWMvU3RhbmxleVwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xCcmF6aWwvRWFzdFwiLFxuXHRcdFx0XCJBbWVyaWNhL1Nhb19QYXVsb3xFdGMvR01UKzNcIixcblx0XHRcdFwiQW1lcmljYS9TdF9Kb2huc3xDYW5hZGEvTmV3Zm91bmRsYW5kXCIsXG5cdFx0XHRcIkFtZXJpY2EvV2hpdGVob3JzZXxBbWVyaWNhL0Rhd3NvblwiLFxuXHRcdFx0XCJBbWVyaWNhL1doaXRlaG9yc2V8Q2FuYWRhL1l1a29uXCIsXG5cdFx0XHRcIkFzaWEvQWxtYXR5fEFzaWEvUW9zdGFuYXlcIixcblx0XHRcdFwiQXNpYS9CYW5na29rfEFudGFyY3RpY2EvRGF2aXNcIixcblx0XHRcdFwiQXNpYS9CYW5na29rfEFzaWEvQmFybmF1bFwiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9Ib19DaGlfTWluaFwiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9Ib3ZkXCIsXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL0tyYXNub3lhcnNrXCIsXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL05vdm9rdXpuZXRza1wiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9Ob3Zvc2liaXJza1wiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9QaG5vbV9QZW5oXCIsXG5cdFx0XHRcIkFzaWEvQmFuZ2tva3xBc2lhL1NhaWdvblwiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9Ub21za1wiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8QXNpYS9WaWVudGlhbmVcIixcblx0XHRcdFwiQXNpYS9CYW5na29rfEV0Yy9HTVQtN1wiLFxuXHRcdFx0XCJBc2lhL0Jhbmdrb2t8SW5kaWFuL0NocmlzdG1hc1wiLFxuXHRcdFx0XCJBc2lhL0NoaXRhfEFzaWEvRGlsaVwiLFxuXHRcdFx0XCJBc2lhL0NoaXRhfEFzaWEvS2hhbmR5Z2FcIixcblx0XHRcdFwiQXNpYS9DaGl0YXxBc2lhL1lha3V0c2tcIixcblx0XHRcdFwiQXNpYS9DaGl0YXxFdGMvR01ULTlcIixcblx0XHRcdFwiQXNpYS9DaGl0YXxQYWNpZmljL1BhbGF1XCIsXG5cdFx0XHRcIkFzaWEvRGhha2F8QXNpYS9CaXNoa2VrXCIsXG5cdFx0XHRcIkFzaWEvRGhha2F8QXNpYS9EYWNjYVwiLFxuXHRcdFx0XCJBc2lhL0RoYWthfEFzaWEvS2FzaGdhclwiLFxuXHRcdFx0XCJBc2lhL0RoYWthfEFzaWEvT21za1wiLFxuXHRcdFx0XCJBc2lhL0RoYWthfEFzaWEvVGhpbWJ1XCIsXG5cdFx0XHRcIkFzaWEvRGhha2F8QXNpYS9UaGltcGh1XCIsXG5cdFx0XHRcIkFzaWEvRGhha2F8QXNpYS9VcnVtcWlcIixcblx0XHRcdFwiQXNpYS9EaGFrYXxFdGMvR01ULTZcIixcblx0XHRcdFwiQXNpYS9EaGFrYXxJbmRpYW4vQ2hhZ29zXCIsXG5cdFx0XHRcIkFzaWEvRHViYWl8QXNpYS9CYWt1XCIsXG5cdFx0XHRcIkFzaWEvRHViYWl8QXNpYS9NdXNjYXRcIixcblx0XHRcdFwiQXNpYS9EdWJhaXxBc2lhL1RiaWxpc2lcIixcblx0XHRcdFwiQXNpYS9EdWJhaXxBc2lhL1llcmV2YW5cIixcblx0XHRcdFwiQXNpYS9EdWJhaXxFdGMvR01ULTRcIixcblx0XHRcdFwiQXNpYS9EdWJhaXxFdXJvcGUvQXN0cmFraGFuXCIsXG5cdFx0XHRcIkFzaWEvRHViYWl8RXVyb3BlL1NhbWFyYVwiLFxuXHRcdFx0XCJBc2lhL0R1YmFpfEV1cm9wZS9TYXJhdG92XCIsXG5cdFx0XHRcIkFzaWEvRHViYWl8RXVyb3BlL1VseWFub3Zza1wiLFxuXHRcdFx0XCJBc2lhL0R1YmFpfEluZGlhbi9NYWhlXCIsXG5cdFx0XHRcIkFzaWEvRHViYWl8SW5kaWFuL01hdXJpdGl1c1wiLFxuXHRcdFx0XCJBc2lhL0R1YmFpfEluZGlhbi9SZXVuaW9uXCIsXG5cdFx0XHRcIkFzaWEvR2F6YXxBc2lhL0hlYnJvblwiLFxuXHRcdFx0XCJBc2lhL0hvbmdfS29uZ3xIb25na29uZ1wiLFxuXHRcdFx0XCJBc2lhL0pha2FydGF8QXNpYS9Qb250aWFuYWtcIixcblx0XHRcdFwiQXNpYS9KZXJ1c2FsZW18QXNpYS9UZWxfQXZpdlwiLFxuXHRcdFx0XCJBc2lhL0plcnVzYWxlbXxJc3JhZWxcIixcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8QXNpYS9BbmFkeXJcIixcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8RXRjL0dNVC0xMlwiLFxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxLd2FqYWxlaW5cIixcblx0XHRcdFwiQXNpYS9LYW1jaGF0a2F8UGFjaWZpYy9GdW5hZnV0aVwiLFxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL0t3YWphbGVpblwiLFxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL01hanVyb1wiLFxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL05hdXJ1XCIsXG5cdFx0XHRcIkFzaWEvS2FtY2hhdGthfFBhY2lmaWMvVGFyYXdhXCIsXG5cdFx0XHRcIkFzaWEvS2FtY2hhdGthfFBhY2lmaWMvV2FrZVwiLFxuXHRcdFx0XCJBc2lhL0thbWNoYXRrYXxQYWNpZmljL1dhbGxpc1wiLFxuXHRcdFx0XCJBc2lhL0thdGhtYW5kdXxBc2lhL0thdG1hbmR1XCIsXG5cdFx0XHRcIkFzaWEvS29sa2F0YXxBc2lhL0NhbGN1dHRhXCIsXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfEFzaWEvQnJ1bmVpXCIsXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfEFzaWEvQ2hvaWJhbHNhblwiLFxuXHRcdFx0XCJBc2lhL0t1YWxhX0x1bXB1cnxBc2lhL0lya3V0c2tcIixcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9LdWNoaW5nXCIsXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfEFzaWEvU2luZ2Fwb3JlXCIsXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfEFzaWEvVWxhYW5iYWF0YXJcIixcblx0XHRcdFwiQXNpYS9LdWFsYV9MdW1wdXJ8QXNpYS9VbGFuX0JhdG9yXCIsXG5cdFx0XHRcIkFzaWEvS3VhbGFfTHVtcHVyfEV0Yy9HTVQtOFwiLFxuXHRcdFx0XCJBc2lhL0t1YWxhX0x1bXB1cnxTaW5nYXBvcmVcIixcblx0XHRcdFwiQXNpYS9NYWthc3NhcnxBc2lhL1VqdW5nX1BhbmRhbmdcIixcblx0XHRcdFwiQXNpYS9SYW5nb29ufEFzaWEvWWFuZ29uXCIsXG5cdFx0XHRcIkFzaWEvUmFuZ29vbnxJbmRpYW4vQ29jb3NcIixcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxBc2lhL01hZ2FkYW5cIixcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxBc2lhL1NyZWRuZWtvbHltc2tcIixcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxFdGMvR01ULTExXCIsXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58UGFjaWZpYy9Cb3VnYWludmlsbGVcIixcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxQYWNpZmljL0VmYXRlXCIsXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58UGFjaWZpYy9HdWFkYWxjYW5hbFwiLFxuXHRcdFx0XCJBc2lhL1Nha2hhbGlufFBhY2lmaWMvS29zcmFlXCIsXG5cdFx0XHRcIkFzaWEvU2FraGFsaW58UGFjaWZpYy9Ob3VtZWFcIixcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxQYWNpZmljL1BvaG5wZWlcIixcblx0XHRcdFwiQXNpYS9TYWtoYWxpbnxQYWNpZmljL1BvbmFwZVwiLFxuXHRcdFx0XCJBc2lhL1Nlb3VsfEFzaWEvUHlvbmd5YW5nXCIsXG5cdFx0XHRcIkFzaWEvU2VvdWx8Uk9LXCIsXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8QXNpYS9DaG9uZ3FpbmdcIixcblx0XHRcdFwiQXNpYS9TaGFuZ2hhaXxBc2lhL0NodW5na2luZ1wiLFxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfEFzaWEvSGFyYmluXCIsXG5cdFx0XHRcIkFzaWEvU2hhbmdoYWl8QXNpYS9NYWNhb1wiLFxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfEFzaWEvTWFjYXVcIixcblx0XHRcdFwiQXNpYS9TaGFuZ2hhaXxBc2lhL1RhaXBlaVwiLFxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfFBSQ1wiLFxuXHRcdFx0XCJBc2lhL1NoYW5naGFpfFJPQ1wiLFxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFudGFyY3RpY2EvTWF3c29uXCIsXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9BcXRhdVwiLFxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFzaWEvQXF0b2JlXCIsXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9Bc2hnYWJhdFwiLFxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFzaWEvQXNoa2hhYmFkXCIsXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9BdHlyYXVcIixcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxBc2lhL0R1c2hhbmJlXCIsXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9PcmFsXCIsXG5cdFx0XHRcIkFzaWEvVGFzaGtlbnR8QXNpYS9ReXp5bG9yZGFcIixcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxBc2lhL1NhbWFya2FuZFwiLFxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEFzaWEvWWVrYXRlcmluYnVyZ1wiLFxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEV0Yy9HTVQtNVwiLFxuXHRcdFx0XCJBc2lhL1Rhc2hrZW50fEluZGlhbi9LZXJndWVsZW5cIixcblx0XHRcdFwiQXNpYS9UYXNoa2VudHxJbmRpYW4vTWFsZGl2ZXNcIixcblx0XHRcdFwiQXNpYS9UZWhyYW58SXJhblwiLFxuXHRcdFx0XCJBc2lhL1Rva3lvfEphcGFuXCIsXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8QW50YXJjdGljYS9EdW1vbnREVXJ2aWxsZVwiLFxuXHRcdFx0XCJBc2lhL1ZsYWRpdm9zdG9rfEFzaWEvVXN0LU5lcmFcIixcblx0XHRcdFwiQXNpYS9WbGFkaXZvc3Rva3xFdGMvR01ULTEwXCIsXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8UGFjaWZpYy9DaHV1a1wiLFxuXHRcdFx0XCJBc2lhL1ZsYWRpdm9zdG9rfFBhY2lmaWMvUG9ydF9Nb3Jlc2J5XCIsXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8UGFjaWZpYy9UcnVrXCIsXG5cdFx0XHRcIkFzaWEvVmxhZGl2b3N0b2t8UGFjaWZpYy9ZYXBcIixcblx0XHRcdFwiQXRsYW50aWMvQ2FwZV9WZXJkZXxFdGMvR01UKzFcIixcblx0XHRcdFwiQXVzdHJhbGlhL0FkZWxhaWRlfEF1c3RyYWxpYS9Ccm9rZW5fSGlsbFwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvQWRlbGFpZGV8QXVzdHJhbGlhL1NvdXRoXCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9BZGVsYWlkZXxBdXN0cmFsaWEvWWFuY293aW5uYVwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvQnJpc2JhbmV8QXVzdHJhbGlhL0xpbmRlbWFuXCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9CcmlzYmFuZXxBdXN0cmFsaWEvUXVlZW5zbGFuZFwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvRGFyd2lufEF1c3RyYWxpYS9Ob3J0aFwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvTG9yZF9Ib3dlfEF1c3RyYWxpYS9MSElcIixcblx0XHRcdFwiQXVzdHJhbGlhL1BlcnRofEF1c3RyYWxpYS9XZXN0XCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QW50YXJjdGljYS9NYWNxdWFyaWVcIixcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvQUNUXCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QXVzdHJhbGlhL0NhbmJlcnJhXCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QXVzdHJhbGlhL0N1cnJpZVwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvU3lkbmV5fEF1c3RyYWxpYS9Ib2JhcnRcIixcblx0XHRcdFwiQXVzdHJhbGlhL1N5ZG5leXxBdXN0cmFsaWEvTWVsYm91cm5lXCIsXG5cdFx0XHRcIkF1c3RyYWxpYS9TeWRuZXl8QXVzdHJhbGlhL05TV1wiLFxuXHRcdFx0XCJBdXN0cmFsaWEvU3lkbmV5fEF1c3RyYWxpYS9UYXNtYW5pYVwiLFxuXHRcdFx0XCJBdXN0cmFsaWEvU3lkbmV5fEF1c3RyYWxpYS9WaWN0b3JpYVwiLFxuXHRcdFx0XCJFdGMvVVRDfEV0Yy9VQ1RcIixcblx0XHRcdFwiRXRjL1VUQ3xFdGMvVW5pdmVyc2FsXCIsXG5cdFx0XHRcIkV0Yy9VVEN8RXRjL1p1bHVcIixcblx0XHRcdFwiRXRjL1VUQ3xVQ1RcIixcblx0XHRcdFwiRXRjL1VUQ3xVVENcIixcblx0XHRcdFwiRXRjL1VUQ3xVbml2ZXJzYWxcIixcblx0XHRcdFwiRXRjL1VUQ3xadWx1XCIsXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8QXNpYS9GYW1hZ3VzdGFcIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xBc2lhL05pY29zaWFcIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFRVRcIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvQnVjaGFyZXN0XCIsXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL0hlbHNpbmtpXCIsXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL0tpZXZcIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvS3lpdlwiLFxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEV1cm9wZS9NYXJpZWhhbW5cIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvTmljb3NpYVwiLFxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEV1cm9wZS9SaWdhXCIsXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL1NvZmlhXCIsXG5cdFx0XHRcIkV1cm9wZS9BdGhlbnN8RXVyb3BlL1RhbGxpbm5cIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvVXpoZ29yb2RcIixcblx0XHRcdFwiRXVyb3BlL0F0aGVuc3xFdXJvcGUvVmlsbml1c1wiLFxuXHRcdFx0XCJFdXJvcGUvQXRoZW5zfEV1cm9wZS9aYXBvcm96aHllXCIsXG5cdFx0XHRcIkV1cm9wZS9DaGlzaW5hdXxFdXJvcGUvVGlyYXNwb2xcIixcblx0XHRcdFwiRXVyb3BlL0R1YmxpbnxFaXJlXCIsXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBbnRhcmN0aWNhL1N5b3dhXCIsXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBc2lhL0FkZW5cIixcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfEFzaWEvQmFnaGRhZFwiLFxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8QXNpYS9CYWhyYWluXCIsXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBc2lhL0lzdGFuYnVsXCIsXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxBc2lhL0t1d2FpdFwiLFxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8QXNpYS9RYXRhclwiLFxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8QXNpYS9SaXlhZGhcIixcblx0XHRcdFwiRXVyb3BlL0lzdGFuYnVsfEV0Yy9HTVQtM1wiLFxuXHRcdFx0XCJFdXJvcGUvSXN0YW5idWx8RXVyb3BlL01pbnNrXCIsXG5cdFx0XHRcIkV1cm9wZS9Jc3RhbmJ1bHxUdXJrZXlcIixcblx0XHRcdFwiRXVyb3BlL0xpc2JvbnxBdGxhbnRpYy9DYW5hcnlcIixcblx0XHRcdFwiRXVyb3BlL0xpc2JvbnxBdGxhbnRpYy9GYWVyb2VcIixcblx0XHRcdFwiRXVyb3BlL0xpc2JvbnxBdGxhbnRpYy9GYXJvZVwiLFxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufEF0bGFudGljL01hZGVpcmFcIixcblx0XHRcdFwiRXVyb3BlL0xpc2JvbnxQb3J0dWdhbFwiLFxuXHRcdFx0XCJFdXJvcGUvTGlzYm9ufFdFVFwiLFxuXHRcdFx0XCJFdXJvcGUvTG9uZG9ufEV1cm9wZS9CZWxmYXN0XCIsXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258RXVyb3BlL0d1ZXJuc2V5XCIsXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258RXVyb3BlL0lzbGVfb2ZfTWFuXCIsXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258RXVyb3BlL0plcnNleVwiLFxuXHRcdFx0XCJFdXJvcGUvTG9uZG9ufEdCXCIsXG5cdFx0XHRcIkV1cm9wZS9Mb25kb258R0ItRWlyZVwiLFxuXHRcdFx0XCJFdXJvcGUvTW9zY293fEV1cm9wZS9LaXJvdlwiLFxuXHRcdFx0XCJFdXJvcGUvTW9zY293fEV1cm9wZS9TaW1mZXJvcG9sXCIsXG5cdFx0XHRcIkV1cm9wZS9Nb3Njb3d8Vy1TVVwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8QWZyaWNhL0NldXRhXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xBcmN0aWMvTG9uZ3llYXJieWVuXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xBdGxhbnRpYy9KYW5fTWF5ZW5cIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfENFVFwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0Ftc3RlcmRhbVwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0FuZG9ycmFcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9CZWxncmFkZVwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0JlcmxpblwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0JyYXRpc2xhdmFcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9CcnVzc2Vsc1wiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL0J1ZGFwZXN0XCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvQnVzaW5nZW5cIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9Db3BlbmhhZ2VuXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvR2licmFsdGFyXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvTGp1YmxqYW5hXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvTHV4ZW1ib3VyZ1wiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL01hZHJpZFwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL01hbHRhXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvTW9uYWNvXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvT3Nsb1wiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1BvZGdvcmljYVwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1ByYWd1ZVwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1JvbWVcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9TYW5fTWFyaW5vXCIsXG5cdFx0XHRcIkV1cm9wZS9QYXJpc3xFdXJvcGUvU2FyYWpldm9cIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9Ta29wamVcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9TdG9ja2hvbG1cIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9UaXJhbmVcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9WYWR1elwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8RXVyb3BlL1ZhdGljYW5cIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9WaWVubmFcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9XYXJzYXdcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9aYWdyZWJcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfEV1cm9wZS9adXJpY2hcIixcblx0XHRcdFwiRXVyb3BlL1BhcmlzfE1FVFwiLFxuXHRcdFx0XCJFdXJvcGUvUGFyaXN8UG9sYW5kXCIsXG5cdFx0XHRcIlBhY2lmaWMvQXVja2xhbmR8QW50YXJjdGljYS9NY011cmRvXCIsXG5cdFx0XHRcIlBhY2lmaWMvQXVja2xhbmR8QW50YXJjdGljYS9Tb3V0aF9Qb2xlXCIsXG5cdFx0XHRcIlBhY2lmaWMvQXVja2xhbmR8TlpcIixcblx0XHRcdFwiUGFjaWZpYy9DaGF0aGFtfE5aLUNIQVRcIixcblx0XHRcdFwiUGFjaWZpYy9FYXN0ZXJ8Q2hpbGUvRWFzdGVySXNsYW5kXCIsXG5cdFx0XHRcIlBhY2lmaWMvR2FsYXBhZ29zfEV0Yy9HTVQrNlwiLFxuXHRcdFx0XCJQYWNpZmljL0dhbWJpZXJ8RXRjL0dNVCs5XCIsXG5cdFx0XHRcIlBhY2lmaWMvR3VhbXxQYWNpZmljL1NhaXBhblwiLFxuXHRcdFx0XCJQYWNpZmljL0hvbm9sdWx1fEhTVFwiLFxuXHRcdFx0XCJQYWNpZmljL0hvbm9sdWx1fFBhY2lmaWMvSm9obnN0b25cIixcblx0XHRcdFwiUGFjaWZpYy9Ib25vbHVsdXxVUy9IYXdhaWlcIixcblx0XHRcdFwiUGFjaWZpYy9LaXJpdGltYXRpfEV0Yy9HTVQtMTRcIixcblx0XHRcdFwiUGFjaWZpYy9OaXVlfEV0Yy9HTVQrMTFcIixcblx0XHRcdFwiUGFjaWZpYy9QYWdvX1BhZ298UGFjaWZpYy9NaWR3YXlcIixcblx0XHRcdFwiUGFjaWZpYy9QYWdvX1BhZ298UGFjaWZpYy9TYW1vYVwiLFxuXHRcdFx0XCJQYWNpZmljL1BhZ29fUGFnb3xVUy9TYW1vYVwiLFxuXHRcdFx0XCJQYWNpZmljL1BpdGNhaXJufEV0Yy9HTVQrOFwiLFxuXHRcdFx0XCJQYWNpZmljL1RhaGl0aXxFdGMvR01UKzEwXCIsXG5cdFx0XHRcIlBhY2lmaWMvVGFoaXRpfFBhY2lmaWMvUmFyb3RvbmdhXCIsXG5cdFx0XHRcIlBhY2lmaWMvVG9uZ2F0YXB1fEV0Yy9HTVQtMTNcIixcblx0XHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8UGFjaWZpYy9FbmRlcmJ1cnlcIixcblx0XHRcdFwiUGFjaWZpYy9Ub25nYXRhcHV8UGFjaWZpYy9GYWthb2ZvXCIsXG5cdFx0XHRcIlBhY2lmaWMvVG9uZ2F0YXB1fFBhY2lmaWMvS2FudG9uXCJcblx0XHRdLFxuXHRcdFwiY291bnRyaWVzXCI6IFtcblx0XHRcdFwiQUR8RXVyb3BlL0FuZG9ycmFcIixcblx0XHRcdFwiQUV8QXNpYS9EdWJhaVwiLFxuXHRcdFx0XCJBRnxBc2lhL0thYnVsXCIsXG5cdFx0XHRcIkFHfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9BbnRpZ3VhXCIsXG5cdFx0XHRcIkFJfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9Bbmd1aWxsYVwiLFxuXHRcdFx0XCJBTHxFdXJvcGUvVGlyYW5lXCIsXG5cdFx0XHRcIkFNfEFzaWEvWWVyZXZhblwiLFxuXHRcdFx0XCJBT3xBZnJpY2EvTGFnb3MgQWZyaWNhL0x1YW5kYVwiLFxuXHRcdFx0XCJBUXxBbnRhcmN0aWNhL0Nhc2V5IEFudGFyY3RpY2EvRGF2aXMgQW50YXJjdGljYS9NYXdzb24gQW50YXJjdGljYS9QYWxtZXIgQW50YXJjdGljYS9Sb3RoZXJhIEFudGFyY3RpY2EvVHJvbGwgQW50YXJjdGljYS9Wb3N0b2sgUGFjaWZpYy9BdWNrbGFuZCBQYWNpZmljL1BvcnRfTW9yZXNieSBBc2lhL1JpeWFkaCBBc2lhL1NpbmdhcG9yZSBBbnRhcmN0aWNhL01jTXVyZG8gQW50YXJjdGljYS9EdW1vbnREVXJ2aWxsZSBBbnRhcmN0aWNhL1N5b3dhXCIsXG5cdFx0XHRcIkFSfEFtZXJpY2EvQXJnZW50aW5hL0J1ZW5vc19BaXJlcyBBbWVyaWNhL0FyZ2VudGluYS9Db3Jkb2JhIEFtZXJpY2EvQXJnZW50aW5hL1NhbHRhIEFtZXJpY2EvQXJnZW50aW5hL0p1anV5IEFtZXJpY2EvQXJnZW50aW5hL1R1Y3VtYW4gQW1lcmljYS9BcmdlbnRpbmEvQ2F0YW1hcmNhIEFtZXJpY2EvQXJnZW50aW5hL0xhX1Jpb2phIEFtZXJpY2EvQXJnZW50aW5hL1Nhbl9KdWFuIEFtZXJpY2EvQXJnZW50aW5hL01lbmRvemEgQW1lcmljYS9BcmdlbnRpbmEvU2FuX0x1aXMgQW1lcmljYS9BcmdlbnRpbmEvUmlvX0dhbGxlZ29zIEFtZXJpY2EvQXJnZW50aW5hL1VzaHVhaWFcIixcblx0XHRcdFwiQVN8UGFjaWZpYy9QYWdvX1BhZ29cIixcblx0XHRcdFwiQVR8RXVyb3BlL1ZpZW5uYVwiLFxuXHRcdFx0XCJBVXxBdXN0cmFsaWEvTG9yZF9Ib3dlIEFudGFyY3RpY2EvTWFjcXVhcmllIEF1c3RyYWxpYS9Ib2JhcnQgQXVzdHJhbGlhL01lbGJvdXJuZSBBdXN0cmFsaWEvU3lkbmV5IEF1c3RyYWxpYS9Ccm9rZW5fSGlsbCBBdXN0cmFsaWEvQnJpc2JhbmUgQXVzdHJhbGlhL0xpbmRlbWFuIEF1c3RyYWxpYS9BZGVsYWlkZSBBdXN0cmFsaWEvRGFyd2luIEF1c3RyYWxpYS9QZXJ0aCBBdXN0cmFsaWEvRXVjbGEgQXNpYS9Ub2t5b1wiLFxuXHRcdFx0XCJBV3xBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvQXJ1YmFcIixcblx0XHRcdFwiQVh8RXVyb3BlL0hlbHNpbmtpIEV1cm9wZS9NYXJpZWhhbW5cIixcblx0XHRcdFwiQVp8QXNpYS9CYWt1XCIsXG5cdFx0XHRcIkJBfEV1cm9wZS9CZWxncmFkZSBFdXJvcGUvU2FyYWpldm9cIixcblx0XHRcdFwiQkJ8QW1lcmljYS9CYXJiYWRvc1wiLFxuXHRcdFx0XCJCRHxBc2lhL0RoYWthXCIsXG5cdFx0XHRcIkJFfEV1cm9wZS9CcnVzc2Vsc1wiLFxuXHRcdFx0XCJCRnxBZnJpY2EvQWJpZGphbiBBZnJpY2EvT3VhZ2Fkb3Vnb3VcIixcblx0XHRcdFwiQkd8RXVyb3BlL1NvZmlhXCIsXG5cdFx0XHRcIkJIfEFzaWEvUWF0YXIgQXNpYS9CYWhyYWluXCIsXG5cdFx0XHRcIkJJfEFmcmljYS9NYXB1dG8gQWZyaWNhL0J1anVtYnVyYVwiLFxuXHRcdFx0XCJCSnxBZnJpY2EvTGFnb3MgQWZyaWNhL1BvcnRvLU5vdm9cIixcblx0XHRcdFwiQkx8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1N0X0JhcnRoZWxlbXlcIixcblx0XHRcdFwiQk18QXRsYW50aWMvQmVybXVkYVwiLFxuXHRcdFx0XCJCTnxBc2lhL0t1Y2hpbmcgQXNpYS9CcnVuZWlcIixcblx0XHRcdFwiQk98QW1lcmljYS9MYV9QYXpcIixcblx0XHRcdFwiQlF8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0tyYWxlbmRpamtcIixcblx0XHRcdFwiQlJ8QW1lcmljYS9Ob3JvbmhhIEFtZXJpY2EvQmVsZW0gQW1lcmljYS9Gb3J0YWxlemEgQW1lcmljYS9SZWNpZmUgQW1lcmljYS9BcmFndWFpbmEgQW1lcmljYS9NYWNlaW8gQW1lcmljYS9CYWhpYSBBbWVyaWNhL1Nhb19QYXVsbyBBbWVyaWNhL0NhbXBvX0dyYW5kZSBBbWVyaWNhL0N1aWFiYSBBbWVyaWNhL1NhbnRhcmVtIEFtZXJpY2EvUG9ydG9fVmVsaG8gQW1lcmljYS9Cb2FfVmlzdGEgQW1lcmljYS9NYW5hdXMgQW1lcmljYS9FaXJ1bmVwZSBBbWVyaWNhL1Jpb19CcmFuY29cIixcblx0XHRcdFwiQlN8QW1lcmljYS9Ub3JvbnRvIEFtZXJpY2EvTmFzc2F1XCIsXG5cdFx0XHRcIkJUfEFzaWEvVGhpbXBodVwiLFxuXHRcdFx0XCJCV3xBZnJpY2EvTWFwdXRvIEFmcmljYS9HYWJvcm9uZVwiLFxuXHRcdFx0XCJCWXxFdXJvcGUvTWluc2tcIixcblx0XHRcdFwiQlp8QW1lcmljYS9CZWxpemVcIixcblx0XHRcdFwiQ0F8QW1lcmljYS9TdF9Kb2hucyBBbWVyaWNhL0hhbGlmYXggQW1lcmljYS9HbGFjZV9CYXkgQW1lcmljYS9Nb25jdG9uIEFtZXJpY2EvR29vc2VfQmF5IEFtZXJpY2EvVG9yb250byBBbWVyaWNhL0lxYWx1aXQgQW1lcmljYS9XaW5uaXBlZyBBbWVyaWNhL1Jlc29sdXRlIEFtZXJpY2EvUmFua2luX0lubGV0IEFtZXJpY2EvUmVnaW5hIEFtZXJpY2EvU3dpZnRfQ3VycmVudCBBbWVyaWNhL0VkbW9udG9uIEFtZXJpY2EvQ2FtYnJpZGdlX0JheSBBbWVyaWNhL0ludXZpayBBbWVyaWNhL0Rhd3Nvbl9DcmVlayBBbWVyaWNhL0ZvcnRfTmVsc29uIEFtZXJpY2EvV2hpdGVob3JzZSBBbWVyaWNhL0Rhd3NvbiBBbWVyaWNhL1ZhbmNvdXZlciBBbWVyaWNhL1BhbmFtYSBBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvUGhvZW5peCBBbWVyaWNhL0JsYW5jLVNhYmxvbiBBbWVyaWNhL0F0aWtva2FuIEFtZXJpY2EvQ3Jlc3RvblwiLFxuXHRcdFx0XCJDQ3xBc2lhL1lhbmdvbiBJbmRpYW4vQ29jb3NcIixcblx0XHRcdFwiQ0R8QWZyaWNhL01hcHV0byBBZnJpY2EvTGFnb3MgQWZyaWNhL0tpbnNoYXNhIEFmcmljYS9MdWJ1bWJhc2hpXCIsXG5cdFx0XHRcIkNGfEFmcmljYS9MYWdvcyBBZnJpY2EvQmFuZ3VpXCIsXG5cdFx0XHRcIkNHfEFmcmljYS9MYWdvcyBBZnJpY2EvQnJhenphdmlsbGVcIixcblx0XHRcdFwiQ0h8RXVyb3BlL1p1cmljaFwiLFxuXHRcdFx0XCJDSXxBZnJpY2EvQWJpZGphblwiLFxuXHRcdFx0XCJDS3xQYWNpZmljL1Jhcm90b25nYVwiLFxuXHRcdFx0XCJDTHxBbWVyaWNhL1NhbnRpYWdvIEFtZXJpY2EvQ295aGFpcXVlIEFtZXJpY2EvUHVudGFfQXJlbmFzIFBhY2lmaWMvRWFzdGVyXCIsXG5cdFx0XHRcIkNNfEFmcmljYS9MYWdvcyBBZnJpY2EvRG91YWxhXCIsXG5cdFx0XHRcIkNOfEFzaWEvU2hhbmdoYWkgQXNpYS9VcnVtcWlcIixcblx0XHRcdFwiQ098QW1lcmljYS9Cb2dvdGFcIixcblx0XHRcdFwiQ1J8QW1lcmljYS9Db3N0YV9SaWNhXCIsXG5cdFx0XHRcIkNVfEFtZXJpY2EvSGF2YW5hXCIsXG5cdFx0XHRcIkNWfEF0bGFudGljL0NhcGVfVmVyZGVcIixcblx0XHRcdFwiQ1d8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0N1cmFjYW9cIixcblx0XHRcdFwiQ1h8QXNpYS9CYW5na29rIEluZGlhbi9DaHJpc3RtYXNcIixcblx0XHRcdFwiQ1l8QXNpYS9OaWNvc2lhIEFzaWEvRmFtYWd1c3RhXCIsXG5cdFx0XHRcIkNafEV1cm9wZS9QcmFndWVcIixcblx0XHRcdFwiREV8RXVyb3BlL1p1cmljaCBFdXJvcGUvQmVybGluIEV1cm9wZS9CdXNpbmdlblwiLFxuXHRcdFx0XCJESnxBZnJpY2EvTmFpcm9iaSBBZnJpY2EvRGppYm91dGlcIixcblx0XHRcdFwiREt8RXVyb3BlL0JlcmxpbiBFdXJvcGUvQ29wZW5oYWdlblwiLFxuXHRcdFx0XCJETXxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvRG9taW5pY2FcIixcblx0XHRcdFwiRE98QW1lcmljYS9TYW50b19Eb21pbmdvXCIsXG5cdFx0XHRcIkRafEFmcmljYS9BbGdpZXJzXCIsXG5cdFx0XHRcIkVDfEFtZXJpY2EvR3VheWFxdWlsIFBhY2lmaWMvR2FsYXBhZ29zXCIsXG5cdFx0XHRcIkVFfEV1cm9wZS9UYWxsaW5uXCIsXG5cdFx0XHRcIkVHfEFmcmljYS9DYWlyb1wiLFxuXHRcdFx0XCJFSHxBZnJpY2EvRWxfQWFpdW5cIixcblx0XHRcdFwiRVJ8QWZyaWNhL05haXJvYmkgQWZyaWNhL0FzbWFyYVwiLFxuXHRcdFx0XCJFU3xFdXJvcGUvTWFkcmlkIEFmcmljYS9DZXV0YSBBdGxhbnRpYy9DYW5hcnlcIixcblx0XHRcdFwiRVR8QWZyaWNhL05haXJvYmkgQWZyaWNhL0FkZGlzX0FiYWJhXCIsXG5cdFx0XHRcIkZJfEV1cm9wZS9IZWxzaW5raVwiLFxuXHRcdFx0XCJGSnxQYWNpZmljL0ZpamlcIixcblx0XHRcdFwiRkt8QXRsYW50aWMvU3RhbmxleVwiLFxuXHRcdFx0XCJGTXxQYWNpZmljL0tvc3JhZSBQYWNpZmljL1BvcnRfTW9yZXNieSBQYWNpZmljL0d1YWRhbGNhbmFsIFBhY2lmaWMvQ2h1dWsgUGFjaWZpYy9Qb2hucGVpXCIsXG5cdFx0XHRcIkZPfEF0bGFudGljL0Zhcm9lXCIsXG5cdFx0XHRcIkZSfEV1cm9wZS9QYXJpc1wiLFxuXHRcdFx0XCJHQXxBZnJpY2EvTGFnb3MgQWZyaWNhL0xpYnJldmlsbGVcIixcblx0XHRcdFwiR0J8RXVyb3BlL0xvbmRvblwiLFxuXHRcdFx0XCJHRHxBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvR3JlbmFkYVwiLFxuXHRcdFx0XCJHRXxBc2lhL1RiaWxpc2lcIixcblx0XHRcdFwiR0Z8QW1lcmljYS9DYXllbm5lXCIsXG5cdFx0XHRcIkdHfEV1cm9wZS9Mb25kb24gRXVyb3BlL0d1ZXJuc2V5XCIsXG5cdFx0XHRcIkdIfEFmcmljYS9BYmlkamFuIEFmcmljYS9BY2NyYVwiLFxuXHRcdFx0XCJHSXxFdXJvcGUvR2licmFsdGFyXCIsXG5cdFx0XHRcIkdMfEFtZXJpY2EvTnV1ayBBbWVyaWNhL0Rhbm1hcmtzaGF2biBBbWVyaWNhL1Njb3Jlc2J5c3VuZCBBbWVyaWNhL1RodWxlXCIsXG5cdFx0XHRcIkdNfEFmcmljYS9BYmlkamFuIEFmcmljYS9CYW5qdWxcIixcblx0XHRcdFwiR058QWZyaWNhL0FiaWRqYW4gQWZyaWNhL0NvbmFrcnlcIixcblx0XHRcdFwiR1B8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL0d1YWRlbG91cGVcIixcblx0XHRcdFwiR1F8QWZyaWNhL0xhZ29zIEFmcmljYS9NYWxhYm9cIixcblx0XHRcdFwiR1J8RXVyb3BlL0F0aGVuc1wiLFxuXHRcdFx0XCJHU3xBdGxhbnRpYy9Tb3V0aF9HZW9yZ2lhXCIsXG5cdFx0XHRcIkdUfEFtZXJpY2EvR3VhdGVtYWxhXCIsXG5cdFx0XHRcIkdVfFBhY2lmaWMvR3VhbVwiLFxuXHRcdFx0XCJHV3xBZnJpY2EvQmlzc2F1XCIsXG5cdFx0XHRcIkdZfEFtZXJpY2EvR3V5YW5hXCIsXG5cdFx0XHRcIkhLfEFzaWEvSG9uZ19Lb25nXCIsXG5cdFx0XHRcIkhOfEFtZXJpY2EvVGVndWNpZ2FscGFcIixcblx0XHRcdFwiSFJ8RXVyb3BlL0JlbGdyYWRlIEV1cm9wZS9aYWdyZWJcIixcblx0XHRcdFwiSFR8QW1lcmljYS9Qb3J0LWF1LVByaW5jZVwiLFxuXHRcdFx0XCJIVXxFdXJvcGUvQnVkYXBlc3RcIixcblx0XHRcdFwiSUR8QXNpYS9KYWthcnRhIEFzaWEvUG9udGlhbmFrIEFzaWEvTWFrYXNzYXIgQXNpYS9KYXlhcHVyYVwiLFxuXHRcdFx0XCJJRXxFdXJvcGUvRHVibGluXCIsXG5cdFx0XHRcIklMfEFzaWEvSmVydXNhbGVtXCIsXG5cdFx0XHRcIklNfEV1cm9wZS9Mb25kb24gRXVyb3BlL0lzbGVfb2ZfTWFuXCIsXG5cdFx0XHRcIklOfEFzaWEvS29sa2F0YVwiLFxuXHRcdFx0XCJJT3xJbmRpYW4vQ2hhZ29zXCIsXG5cdFx0XHRcIklRfEFzaWEvQmFnaGRhZFwiLFxuXHRcdFx0XCJJUnxBc2lhL1RlaHJhblwiLFxuXHRcdFx0XCJJU3xBZnJpY2EvQWJpZGphbiBBdGxhbnRpYy9SZXlramF2aWtcIixcblx0XHRcdFwiSVR8RXVyb3BlL1JvbWVcIixcblx0XHRcdFwiSkV8RXVyb3BlL0xvbmRvbiBFdXJvcGUvSmVyc2V5XCIsXG5cdFx0XHRcIkpNfEFtZXJpY2EvSmFtYWljYVwiLFxuXHRcdFx0XCJKT3xBc2lhL0FtbWFuXCIsXG5cdFx0XHRcIkpQfEFzaWEvVG9reW9cIixcblx0XHRcdFwiS0V8QWZyaWNhL05haXJvYmlcIixcblx0XHRcdFwiS0d8QXNpYS9CaXNoa2VrXCIsXG5cdFx0XHRcIktIfEFzaWEvQmFuZ2tvayBBc2lhL1Bobm9tX1BlbmhcIixcblx0XHRcdFwiS0l8UGFjaWZpYy9UYXJhd2EgUGFjaWZpYy9LYW50b24gUGFjaWZpYy9LaXJpdGltYXRpXCIsXG5cdFx0XHRcIktNfEFmcmljYS9OYWlyb2JpIEluZGlhbi9Db21vcm9cIixcblx0XHRcdFwiS058QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1N0X0tpdHRzXCIsXG5cdFx0XHRcIktQfEFzaWEvUHlvbmd5YW5nXCIsXG5cdFx0XHRcIktSfEFzaWEvU2VvdWxcIixcblx0XHRcdFwiS1d8QXNpYS9SaXlhZGggQXNpYS9LdXdhaXRcIixcblx0XHRcdFwiS1l8QW1lcmljYS9QYW5hbWEgQW1lcmljYS9DYXltYW5cIixcblx0XHRcdFwiS1p8QXNpYS9BbG1hdHkgQXNpYS9ReXp5bG9yZGEgQXNpYS9Rb3N0YW5heSBBc2lhL0FxdG9iZSBBc2lhL0FxdGF1IEFzaWEvQXR5cmF1IEFzaWEvT3JhbFwiLFxuXHRcdFx0XCJMQXxBc2lhL0Jhbmdrb2sgQXNpYS9WaWVudGlhbmVcIixcblx0XHRcdFwiTEJ8QXNpYS9CZWlydXRcIixcblx0XHRcdFwiTEN8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1N0X0x1Y2lhXCIsXG5cdFx0XHRcIkxJfEV1cm9wZS9adXJpY2ggRXVyb3BlL1ZhZHV6XCIsXG5cdFx0XHRcIkxLfEFzaWEvQ29sb21ib1wiLFxuXHRcdFx0XCJMUnxBZnJpY2EvTW9ucm92aWFcIixcblx0XHRcdFwiTFN8QWZyaWNhL0pvaGFubmVzYnVyZyBBZnJpY2EvTWFzZXJ1XCIsXG5cdFx0XHRcIkxUfEV1cm9wZS9WaWxuaXVzXCIsXG5cdFx0XHRcIkxVfEV1cm9wZS9CcnVzc2VscyBFdXJvcGUvTHV4ZW1ib3VyZ1wiLFxuXHRcdFx0XCJMVnxFdXJvcGUvUmlnYVwiLFxuXHRcdFx0XCJMWXxBZnJpY2EvVHJpcG9saVwiLFxuXHRcdFx0XCJNQXxBZnJpY2EvQ2FzYWJsYW5jYVwiLFxuXHRcdFx0XCJNQ3xFdXJvcGUvUGFyaXMgRXVyb3BlL01vbmFjb1wiLFxuXHRcdFx0XCJNRHxFdXJvcGUvQ2hpc2luYXVcIixcblx0XHRcdFwiTUV8RXVyb3BlL0JlbGdyYWRlIEV1cm9wZS9Qb2Rnb3JpY2FcIixcblx0XHRcdFwiTUZ8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL01hcmlnb3RcIixcblx0XHRcdFwiTUd8QWZyaWNhL05haXJvYmkgSW5kaWFuL0FudGFuYW5hcml2b1wiLFxuXHRcdFx0XCJNSHxQYWNpZmljL1RhcmF3YSBQYWNpZmljL0t3YWphbGVpbiBQYWNpZmljL01hanVyb1wiLFxuXHRcdFx0XCJNS3xFdXJvcGUvQmVsZ3JhZGUgRXVyb3BlL1Nrb3BqZVwiLFxuXHRcdFx0XCJNTHxBZnJpY2EvQWJpZGphbiBBZnJpY2EvQmFtYWtvXCIsXG5cdFx0XHRcIk1NfEFzaWEvWWFuZ29uXCIsXG5cdFx0XHRcIk1OfEFzaWEvVWxhYW5iYWF0YXIgQXNpYS9Ib3ZkXCIsXG5cdFx0XHRcIk1PfEFzaWEvTWFjYXVcIixcblx0XHRcdFwiTVB8UGFjaWZpYy9HdWFtIFBhY2lmaWMvU2FpcGFuXCIsXG5cdFx0XHRcIk1RfEFtZXJpY2EvTWFydGluaXF1ZVwiLFxuXHRcdFx0XCJNUnxBZnJpY2EvQWJpZGphbiBBZnJpY2EvTm91YWtjaG90dFwiLFxuXHRcdFx0XCJNU3xBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvTW9udHNlcnJhdFwiLFxuXHRcdFx0XCJNVHxFdXJvcGUvTWFsdGFcIixcblx0XHRcdFwiTVV8SW5kaWFuL01hdXJpdGl1c1wiLFxuXHRcdFx0XCJNVnxJbmRpYW4vTWFsZGl2ZXNcIixcblx0XHRcdFwiTVd8QWZyaWNhL01hcHV0byBBZnJpY2EvQmxhbnR5cmVcIixcblx0XHRcdFwiTVh8QW1lcmljYS9NZXhpY29fQ2l0eSBBbWVyaWNhL0NhbmN1biBBbWVyaWNhL01lcmlkYSBBbWVyaWNhL01vbnRlcnJleSBBbWVyaWNhL01hdGFtb3JvcyBBbWVyaWNhL0NoaWh1YWh1YSBBbWVyaWNhL0NpdWRhZF9KdWFyZXogQW1lcmljYS9PamluYWdhIEFtZXJpY2EvTWF6YXRsYW4gQW1lcmljYS9CYWhpYV9CYW5kZXJhcyBBbWVyaWNhL0hlcm1vc2lsbG8gQW1lcmljYS9UaWp1YW5hXCIsXG5cdFx0XHRcIk1ZfEFzaWEvS3VjaGluZyBBc2lhL1NpbmdhcG9yZSBBc2lhL0t1YWxhX0x1bXB1clwiLFxuXHRcdFx0XCJNWnxBZnJpY2EvTWFwdXRvXCIsXG5cdFx0XHRcIk5BfEFmcmljYS9XaW5kaG9la1wiLFxuXHRcdFx0XCJOQ3xQYWNpZmljL05vdW1lYVwiLFxuXHRcdFx0XCJORXxBZnJpY2EvTGFnb3MgQWZyaWNhL05pYW1leVwiLFxuXHRcdFx0XCJORnxQYWNpZmljL05vcmZvbGtcIixcblx0XHRcdFwiTkd8QWZyaWNhL0xhZ29zXCIsXG5cdFx0XHRcIk5JfEFtZXJpY2EvTWFuYWd1YVwiLFxuXHRcdFx0XCJOTHxFdXJvcGUvQnJ1c3NlbHMgRXVyb3BlL0Ftc3RlcmRhbVwiLFxuXHRcdFx0XCJOT3xFdXJvcGUvQmVybGluIEV1cm9wZS9Pc2xvXCIsXG5cdFx0XHRcIk5QfEFzaWEvS2F0aG1hbmR1XCIsXG5cdFx0XHRcIk5SfFBhY2lmaWMvTmF1cnVcIixcblx0XHRcdFwiTlV8UGFjaWZpYy9OaXVlXCIsXG5cdFx0XHRcIk5afFBhY2lmaWMvQXVja2xhbmQgUGFjaWZpYy9DaGF0aGFtXCIsXG5cdFx0XHRcIk9NfEFzaWEvRHViYWkgQXNpYS9NdXNjYXRcIixcblx0XHRcdFwiUEF8QW1lcmljYS9QYW5hbWFcIixcblx0XHRcdFwiUEV8QW1lcmljYS9MaW1hXCIsXG5cdFx0XHRcIlBGfFBhY2lmaWMvVGFoaXRpIFBhY2lmaWMvTWFycXVlc2FzIFBhY2lmaWMvR2FtYmllclwiLFxuXHRcdFx0XCJQR3xQYWNpZmljL1BvcnRfTW9yZXNieSBQYWNpZmljL0JvdWdhaW52aWxsZVwiLFxuXHRcdFx0XCJQSHxBc2lhL01hbmlsYVwiLFxuXHRcdFx0XCJQS3xBc2lhL0thcmFjaGlcIixcblx0XHRcdFwiUEx8RXVyb3BlL1dhcnNhd1wiLFxuXHRcdFx0XCJQTXxBbWVyaWNhL01pcXVlbG9uXCIsXG5cdFx0XHRcIlBOfFBhY2lmaWMvUGl0Y2Fpcm5cIixcblx0XHRcdFwiUFJ8QW1lcmljYS9QdWVydG9fUmljb1wiLFxuXHRcdFx0XCJQU3xBc2lhL0dhemEgQXNpYS9IZWJyb25cIixcblx0XHRcdFwiUFR8RXVyb3BlL0xpc2JvbiBBdGxhbnRpYy9NYWRlaXJhIEF0bGFudGljL0F6b3Jlc1wiLFxuXHRcdFx0XCJQV3xQYWNpZmljL1BhbGF1XCIsXG5cdFx0XHRcIlBZfEFtZXJpY2EvQXN1bmNpb25cIixcblx0XHRcdFwiUUF8QXNpYS9RYXRhclwiLFxuXHRcdFx0XCJSRXxBc2lhL0R1YmFpIEluZGlhbi9SZXVuaW9uXCIsXG5cdFx0XHRcIlJPfEV1cm9wZS9CdWNoYXJlc3RcIixcblx0XHRcdFwiUlN8RXVyb3BlL0JlbGdyYWRlXCIsXG5cdFx0XHRcIlJVfEV1cm9wZS9LYWxpbmluZ3JhZCBFdXJvcGUvTW9zY293IEV1cm9wZS9TaW1mZXJvcG9sIEV1cm9wZS9LaXJvdiBFdXJvcGUvVm9sZ29ncmFkIEV1cm9wZS9Bc3RyYWtoYW4gRXVyb3BlL1NhcmF0b3YgRXVyb3BlL1VseWFub3ZzayBFdXJvcGUvU2FtYXJhIEFzaWEvWWVrYXRlcmluYnVyZyBBc2lhL09tc2sgQXNpYS9Ob3Zvc2liaXJzayBBc2lhL0Jhcm5hdWwgQXNpYS9Ub21zayBBc2lhL05vdm9rdXpuZXRzayBBc2lhL0tyYXNub3lhcnNrIEFzaWEvSXJrdXRzayBBc2lhL0NoaXRhIEFzaWEvWWFrdXRzayBBc2lhL0toYW5keWdhIEFzaWEvVmxhZGl2b3N0b2sgQXNpYS9Vc3QtTmVyYSBBc2lhL01hZ2FkYW4gQXNpYS9TYWtoYWxpbiBBc2lhL1NyZWRuZWtvbHltc2sgQXNpYS9LYW1jaGF0a2EgQXNpYS9BbmFkeXJcIixcblx0XHRcdFwiUld8QWZyaWNhL01hcHV0byBBZnJpY2EvS2lnYWxpXCIsXG5cdFx0XHRcIlNBfEFzaWEvUml5YWRoXCIsXG5cdFx0XHRcIlNCfFBhY2lmaWMvR3VhZGFsY2FuYWxcIixcblx0XHRcdFwiU0N8QXNpYS9EdWJhaSBJbmRpYW4vTWFoZVwiLFxuXHRcdFx0XCJTRHxBZnJpY2EvS2hhcnRvdW1cIixcblx0XHRcdFwiU0V8RXVyb3BlL0JlcmxpbiBFdXJvcGUvU3RvY2tob2xtXCIsXG5cdFx0XHRcIlNHfEFzaWEvU2luZ2Fwb3JlXCIsXG5cdFx0XHRcIlNIfEFmcmljYS9BYmlkamFuIEF0bGFudGljL1N0X0hlbGVuYVwiLFxuXHRcdFx0XCJTSXxFdXJvcGUvQmVsZ3JhZGUgRXVyb3BlL0xqdWJsamFuYVwiLFxuXHRcdFx0XCJTSnxFdXJvcGUvQmVybGluIEFyY3RpYy9Mb25neWVhcmJ5ZW5cIixcblx0XHRcdFwiU0t8RXVyb3BlL1ByYWd1ZSBFdXJvcGUvQnJhdGlzbGF2YVwiLFxuXHRcdFx0XCJTTHxBZnJpY2EvQWJpZGphbiBBZnJpY2EvRnJlZXRvd25cIixcblx0XHRcdFwiU018RXVyb3BlL1JvbWUgRXVyb3BlL1Nhbl9NYXJpbm9cIixcblx0XHRcdFwiU058QWZyaWNhL0FiaWRqYW4gQWZyaWNhL0Rha2FyXCIsXG5cdFx0XHRcIlNPfEFmcmljYS9OYWlyb2JpIEFmcmljYS9Nb2dhZGlzaHVcIixcblx0XHRcdFwiU1J8QW1lcmljYS9QYXJhbWFyaWJvXCIsXG5cdFx0XHRcIlNTfEFmcmljYS9KdWJhXCIsXG5cdFx0XHRcIlNUfEFmcmljYS9TYW9fVG9tZVwiLFxuXHRcdFx0XCJTVnxBbWVyaWNhL0VsX1NhbHZhZG9yXCIsXG5cdFx0XHRcIlNYfEFtZXJpY2EvUHVlcnRvX1JpY28gQW1lcmljYS9Mb3dlcl9QcmluY2VzXCIsXG5cdFx0XHRcIlNZfEFzaWEvRGFtYXNjdXNcIixcblx0XHRcdFwiU1p8QWZyaWNhL0pvaGFubmVzYnVyZyBBZnJpY2EvTWJhYmFuZVwiLFxuXHRcdFx0XCJUQ3xBbWVyaWNhL0dyYW5kX1R1cmtcIixcblx0XHRcdFwiVER8QWZyaWNhL05kamFtZW5hXCIsXG5cdFx0XHRcIlRGfEFzaWEvRHViYWkgSW5kaWFuL01hbGRpdmVzIEluZGlhbi9LZXJndWVsZW5cIixcblx0XHRcdFwiVEd8QWZyaWNhL0FiaWRqYW4gQWZyaWNhL0xvbWVcIixcblx0XHRcdFwiVEh8QXNpYS9CYW5na29rXCIsXG5cdFx0XHRcIlRKfEFzaWEvRHVzaGFuYmVcIixcblx0XHRcdFwiVEt8UGFjaWZpYy9GYWthb2ZvXCIsXG5cdFx0XHRcIlRMfEFzaWEvRGlsaVwiLFxuXHRcdFx0XCJUTXxBc2lhL0FzaGdhYmF0XCIsXG5cdFx0XHRcIlROfEFmcmljYS9UdW5pc1wiLFxuXHRcdFx0XCJUT3xQYWNpZmljL1RvbmdhdGFwdVwiLFxuXHRcdFx0XCJUUnxFdXJvcGUvSXN0YW5idWxcIixcblx0XHRcdFwiVFR8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1BvcnRfb2ZfU3BhaW5cIixcblx0XHRcdFwiVFZ8UGFjaWZpYy9UYXJhd2EgUGFjaWZpYy9GdW5hZnV0aVwiLFxuXHRcdFx0XCJUV3xBc2lhL1RhaXBlaVwiLFxuXHRcdFx0XCJUWnxBZnJpY2EvTmFpcm9iaSBBZnJpY2EvRGFyX2VzX1NhbGFhbVwiLFxuXHRcdFx0XCJVQXxFdXJvcGUvU2ltZmVyb3BvbCBFdXJvcGUvS3lpdlwiLFxuXHRcdFx0XCJVR3xBZnJpY2EvTmFpcm9iaSBBZnJpY2EvS2FtcGFsYVwiLFxuXHRcdFx0XCJVTXxQYWNpZmljL1BhZ29fUGFnbyBQYWNpZmljL1RhcmF3YSBQYWNpZmljL01pZHdheSBQYWNpZmljL1dha2VcIixcblx0XHRcdFwiVVN8QW1lcmljYS9OZXdfWW9yayBBbWVyaWNhL0RldHJvaXQgQW1lcmljYS9LZW50dWNreS9Mb3Vpc3ZpbGxlIEFtZXJpY2EvS2VudHVja3kvTW9udGljZWxsbyBBbWVyaWNhL0luZGlhbmEvSW5kaWFuYXBvbGlzIEFtZXJpY2EvSW5kaWFuYS9WaW5jZW5uZXMgQW1lcmljYS9JbmRpYW5hL1dpbmFtYWMgQW1lcmljYS9JbmRpYW5hL01hcmVuZ28gQW1lcmljYS9JbmRpYW5hL1BldGVyc2J1cmcgQW1lcmljYS9JbmRpYW5hL1ZldmF5IEFtZXJpY2EvQ2hpY2FnbyBBbWVyaWNhL0luZGlhbmEvVGVsbF9DaXR5IEFtZXJpY2EvSW5kaWFuYS9Lbm94IEFtZXJpY2EvTWVub21pbmVlIEFtZXJpY2EvTm9ydGhfRGFrb3RhL0NlbnRlciBBbWVyaWNhL05vcnRoX0Rha290YS9OZXdfU2FsZW0gQW1lcmljYS9Ob3J0aF9EYWtvdGEvQmV1bGFoIEFtZXJpY2EvRGVudmVyIEFtZXJpY2EvQm9pc2UgQW1lcmljYS9QaG9lbml4IEFtZXJpY2EvTG9zX0FuZ2VsZXMgQW1lcmljYS9BbmNob3JhZ2UgQW1lcmljYS9KdW5lYXUgQW1lcmljYS9TaXRrYSBBbWVyaWNhL01ldGxha2F0bGEgQW1lcmljYS9ZYWt1dGF0IEFtZXJpY2EvTm9tZSBBbWVyaWNhL0FkYWsgUGFjaWZpYy9Ib25vbHVsdVwiLFxuXHRcdFx0XCJVWXxBbWVyaWNhL01vbnRldmlkZW9cIixcblx0XHRcdFwiVVp8QXNpYS9TYW1hcmthbmQgQXNpYS9UYXNoa2VudFwiLFxuXHRcdFx0XCJWQXxFdXJvcGUvUm9tZSBFdXJvcGUvVmF0aWNhblwiLFxuXHRcdFx0XCJWQ3xBbWVyaWNhL1B1ZXJ0b19SaWNvIEFtZXJpY2EvU3RfVmluY2VudFwiLFxuXHRcdFx0XCJWRXxBbWVyaWNhL0NhcmFjYXNcIixcblx0XHRcdFwiVkd8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1RvcnRvbGFcIixcblx0XHRcdFwiVkl8QW1lcmljYS9QdWVydG9fUmljbyBBbWVyaWNhL1N0X1Rob21hc1wiLFxuXHRcdFx0XCJWTnxBc2lhL0Jhbmdrb2sgQXNpYS9Ib19DaGlfTWluaFwiLFxuXHRcdFx0XCJWVXxQYWNpZmljL0VmYXRlXCIsXG5cdFx0XHRcIldGfFBhY2lmaWMvVGFyYXdhIFBhY2lmaWMvV2FsbGlzXCIsXG5cdFx0XHRcIldTfFBhY2lmaWMvQXBpYVwiLFxuXHRcdFx0XCJZRXxBc2lhL1JpeWFkaCBBc2lhL0FkZW5cIixcblx0XHRcdFwiWVR8QWZyaWNhL05haXJvYmkgSW5kaWFuL01heW90dGVcIixcblx0XHRcdFwiWkF8QWZyaWNhL0pvaGFubmVzYnVyZ1wiLFxuXHRcdFx0XCJaTXxBZnJpY2EvTWFwdXRvIEFmcmljYS9MdXNha2FcIixcblx0XHRcdFwiWld8QWZyaWNhL01hcHV0byBBZnJpY2EvSGFyYXJlXCJcblx0XHRdXG5cdH0pO1xuXG5cblx0cmV0dXJuIG1vbWVudDtcbn0pKTtcbiIsIi8vISBtb21lbnQuanNcbi8vISB2ZXJzaW9uIDogMi4zMC4xXG4vLyEgYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8hIGxpY2Vuc2UgOiBNSVRcbi8vISBtb21lbnRqcy5jb21cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgZ2xvYmFsLm1vbWVudCA9IGZhY3RvcnkoKVxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgaG9va0NhbGxiYWNrO1xuXG4gICAgZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuICAgIC8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICBob29rQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KGlucHV0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICAgICAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXG4gICAgICAgIC8vIGlucHV0ICE9IG51bGxcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlucHV0ICE9IG51bGwgJiZcbiAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBOdW1iZXJdJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBEYXRlXSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgICAgICB2YXIgcmVzID0gW10sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgYXJyTGVuID0gYXJyLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyckxlbjsgKytpKSB7XG4gICAgICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgICAgICBhW2ldID0gYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd0b1N0cmluZycpKSB7XG4gICAgICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcbiAgICAgICAgICAgIGEudmFsdWVPZiA9IGIudmFsdWVPZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1wdHk6IGZhbHNlLFxuICAgICAgICAgICAgdW51c2VkVG9rZW5zOiBbXSxcbiAgICAgICAgICAgIHVudXNlZElucHV0OiBbXSxcbiAgICAgICAgICAgIG92ZXJmbG93OiAtMixcbiAgICAgICAgICAgIGNoYXJzTGVmdE92ZXI6IDAsXG4gICAgICAgICAgICBudWxsSW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgaW52YWxpZEVyYTogbnVsbCxcbiAgICAgICAgICAgIGludmFsaWRNb250aDogbnVsbCxcbiAgICAgICAgICAgIGludmFsaWRGb3JtYXQ6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzbzogZmFsc2UsXG4gICAgICAgICAgICBwYXJzZWREYXRlUGFydHM6IFtdLFxuICAgICAgICAgICAgZXJhOiBudWxsLFxuICAgICAgICAgICAgbWVyaWRpZW06IG51bGwsXG4gICAgICAgICAgICByZmMyODIyOiBmYWxzZSxcbiAgICAgICAgICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICAgICAgaWYgKG0uX3BmID09IG51bGwpIHtcbiAgICAgICAgICAgIG0uX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLl9wZjtcbiAgICB9XG5cbiAgICB2YXIgc29tZTtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAgICAgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNvbWUgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgICBsZW4gPSB0Lmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzVmFsaWQobSkge1xuICAgICAgICB2YXIgZmxhZ3MgPSBudWxsLFxuICAgICAgICAgICAgcGFyc2VkUGFydHMgPSBmYWxzZSxcbiAgICAgICAgICAgIGlzTm93VmFsaWQgPSBtLl9kICYmICFpc05hTihtLl9kLmdldFRpbWUoKSk7XG4gICAgICAgIGlmIChpc05vd1ZhbGlkKSB7XG4gICAgICAgICAgICBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhtKTtcbiAgICAgICAgICAgIHBhcnNlZFBhcnRzID0gc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAhPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpc05vd1ZhbGlkID1cbiAgICAgICAgICAgICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEVyYSAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAgICAgICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XG4gICAgICAgICAgICBpZiAobS5fc3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgaXNOb3dWYWxpZCA9XG4gICAgICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihtKSkge1xuICAgICAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS5faXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGZsYWdzKSB7XG4gICAgICAgIHZhciBtID0gY3JlYXRlVVRDKE5hTik7XG4gICAgICAgIGlmIChmbGFncyAhPSBudWxsKSB7XG4gICAgICAgICAgICBleHRlbmQoZ2V0UGFyc2luZ0ZsYWdzKG0pLCBmbGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkudXNlckludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbiAgICAvLyBzbyB3ZSBjYW4gcHJvcGVybHkgY2xvbmUgb3Vyc2VsdmVzLlxuICAgIHZhciBtb21lbnRQcm9wZXJ0aWVzID0gKGhvb2tzLm1vbWVudFByb3BlcnRpZXMgPSBbXSksXG4gICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwcm9wLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgbW9tZW50UHJvcGVydGllc0xlbiA9IG1vbWVudFByb3BlcnRpZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICAgICAgdG8uX2lzQU1vbWVudE9iamVjdCA9IGZyb20uX2lzQU1vbWVudE9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgICAgICB0by5faSA9IGZyb20uX2k7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICAgICAgdG8uX2YgPSBmcm9tLl9mO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgICAgIHRvLl9sID0gZnJvbS5fbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgICAgIHRvLl9zdHJpY3QgPSBmcm9tLl9zdHJpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgICAgICB0by5fdHptID0gZnJvbS5fdHptO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgICAgICB0by5faXNVVEMgPSBmcm9tLl9pc1VUQztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgICAgIHRvLl9vZmZzZXQgPSBmcm9tLl9vZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgICAgIHRvLl9wZiA9IGdldFBhcnNpbmdGbGFncyhmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9tZW50UHJvcGVydGllc0xlbiA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb21lbnRQcm9wZXJ0aWVzTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wID0gbW9tZW50UHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICB2YWwgPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB0b1twcm9wXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuXG4gICAgLy8gTW9tZW50IHByb3RvdHlwZSBvYmplY3RcbiAgICBmdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgICAgIGNvcHlDb25maWcodGhpcywgY29uZmlnKTtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5fZCAhPSBudWxsID8gY29uZmlnLl9kLmdldFRpbWUoKSA6IE5hTik7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAgICAgLy8gb2JqZWN0cy5cbiAgICAgICAgaWYgKHVwZGF0ZUluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTW9tZW50KG9iaikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgb2JqIGluc3RhbmNlb2YgTW9tZW50IHx8IChvYmogIT0gbnVsbCAmJiBvYmouX2lzQU1vbWVudE9iamVjdCAhPSBudWxsKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgY29uc29sZS53YXJuXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiAnICsgbXNnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlcHJlY2F0ZShtc2csIGZuKSB7XG4gICAgICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG51bGwsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXJnLFxuICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGFyZ0xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSAnXFxuWycgKyBpICsgJ10gJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGFyZ3VtZW50c1swXSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0ga2V5ICsgJzogJyArIGFyZ3VtZW50c1swXVtrZXldICsgJywgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMCwgLTIpOyAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgICAgIG1zZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxuQXJndW1lbnRzOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpLmpvaW4oJycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBmbik7XG4gICAgfVxuXG4gICAgdmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlU2ltcGxlKG5hbWUsIG1zZykge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihuYW1lLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgICAgICBkZXByZWNhdGlvbnNbbmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG4gICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0eXBlb2YgRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnICYmIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0KGNvbmZpZykge1xuICAgICAgICB2YXIgcHJvcCwgaTtcbiAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoY29uZmlnLCBpKSkge1xuICAgICAgICAgICAgICAgIHByb3AgPSBjb25maWdbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgLy8gTGVuaWVudCBvcmRpbmFsIHBhcnNpbmcgYWNjZXB0cyBqdXN0IGEgbnVtYmVyIGluIGFkZGl0aW9uIHRvXG4gICAgICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgdGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcbiAgICAgICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgICAgIC9cXGR7MSwyfS8uc291cmNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY2hpbGRDb25maWcpIHtcbiAgICAgICAgdmFyIHJlcyA9IGV4dGVuZCh7fSwgcGFyZW50Q29uZmlnKSxcbiAgICAgICAgICAgIHByb3A7XG4gICAgICAgIGZvciAocHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBwYXJlbnRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBjaGlsZENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1twcm9wXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGNoaWxkQ29uZmlnW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gZXh0ZW5kKHt9LCByZXNbcHJvcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9jYWxlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cztcblxuICAgIGlmIChPYmplY3Qua2V5cykge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgIHJlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdENhbGVuZGFyID0ge1xuICAgICAgICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFthdF0gTFQnLFxuICAgICAgICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjYWxlbmRhcihrZXksIG1vbSwgbm93KSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyWydzYW1lRWxzZSddO1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcbiAgICAgICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgK1xuICAgICAgICAgICAgYWJzTnVtYmVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPVxuICAgICAgICAgICAgLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xOezEsNX18WVlZWVlZfFlZWVlZfFlZWVl8WVl8eXsyLDR9fHlvP3xnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZyxcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZyxcbiAgICAgICAgZm9ybWF0RnVuY3Rpb25zID0ge30sXG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbiAgICAvLyB0b2tlbjogICAgJ00nXG4gICAgLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuICAgIC8vIG9yZGluYWw6ICAnTW8nXG4gICAgLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG4gICAgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBjYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbY2FsbGJhY2tdKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFkZGVkKSB7XG4gICAgICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKFxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJyxcbiAgICAgICAgICAgICAgICBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oYXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgICAgID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgOiBhcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgICAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPVxuICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxvY2FsZSkge1xuICAgICAgICB2YXIgaSA9IDU7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLmxvbmdEYXRlRm9ybWF0KGlucHV0KSB8fCBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2VucyxcbiAgICAgICAgICAgICAgICByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICAgICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICAgICAgTFQ6ICdoOm1tIEEnLFxuICAgICAgICBMOiAnTU0vREQvWVlZWScsXG4gICAgICAgIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgICAgICAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQoa2V5KSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICAgICAgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXJcbiAgICAgICAgICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodG9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdNTU1NJyB8fFxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdNTScgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9rID09PSAnREQnIHx8XG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ2RkZGQnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2suc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2s7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuICAgIGZ1bmN0aW9uIGludmFsaWREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRPcmRpbmFsID0gJyVkJyxcbiAgICAgICAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xuXG4gICAgZnVuY3Rpb24gb3JkaW5hbChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgICAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgICAgIHBhc3Q6ICclcyBhZ28nLFxuICAgICAgICBzOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgICAgIHNzOiAnJWQgc2Vjb25kcycsXG4gICAgICAgIG06ICdhIG1pbnV0ZScsXG4gICAgICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgICAgIGg6ICdhbiBob3VyJyxcbiAgICAgICAgaGg6ICclZCBob3VycycsXG4gICAgICAgIGQ6ICdhIGRheScsXG4gICAgICAgIGRkOiAnJWQgZGF5cycsXG4gICAgICAgIHc6ICdhIHdlZWsnLFxuICAgICAgICB3dzogJyVkIHdlZWtzJyxcbiAgICAgICAgTTogJ2EgbW9udGgnLFxuICAgICAgICBNTTogJyVkIG1vbnRocycsXG4gICAgICAgIHk6ICdhIHllYXInLFxuICAgICAgICB5eTogJyVkIHllYXJzJyxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cmluZ107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dClcbiAgICAgICAgICAgID8gb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSlcbiAgICAgICAgICAgIDogb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFzdEZ1dHVyZShkaWZmLCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZm9ybWF0KSA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG4gICAgfVxuXG4gICAgdmFyIGFsaWFzZXMgPSB7XG4gICAgICAgIEQ6ICdkYXRlJyxcbiAgICAgICAgZGF0ZXM6ICdkYXRlJyxcbiAgICAgICAgZGF0ZTogJ2RhdGUnLFxuICAgICAgICBkOiAnZGF5JyxcbiAgICAgICAgZGF5czogJ2RheScsXG4gICAgICAgIGRheTogJ2RheScsXG4gICAgICAgIGU6ICd3ZWVrZGF5JyxcbiAgICAgICAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcbiAgICAgICAgd2Vla2RheTogJ3dlZWtkYXknLFxuICAgICAgICBFOiAnaXNvV2Vla2RheScsXG4gICAgICAgIGlzb3dlZWtkYXlzOiAnaXNvV2Vla2RheScsXG4gICAgICAgIGlzb3dlZWtkYXk6ICdpc29XZWVrZGF5JyxcbiAgICAgICAgREREOiAnZGF5T2ZZZWFyJyxcbiAgICAgICAgZGF5b2Z5ZWFyczogJ2RheU9mWWVhcicsXG4gICAgICAgIGRheW9meWVhcjogJ2RheU9mWWVhcicsXG4gICAgICAgIGg6ICdob3VyJyxcbiAgICAgICAgaG91cnM6ICdob3VyJyxcbiAgICAgICAgaG91cjogJ2hvdXInLFxuICAgICAgICBtczogJ21pbGxpc2Vjb25kJyxcbiAgICAgICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmQnLFxuICAgICAgICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kJyxcbiAgICAgICAgbTogJ21pbnV0ZScsXG4gICAgICAgIG1pbnV0ZXM6ICdtaW51dGUnLFxuICAgICAgICBtaW51dGU6ICdtaW51dGUnLFxuICAgICAgICBNOiAnbW9udGgnLFxuICAgICAgICBtb250aHM6ICdtb250aCcsXG4gICAgICAgIG1vbnRoOiAnbW9udGgnLFxuICAgICAgICBROiAncXVhcnRlcicsXG4gICAgICAgIHF1YXJ0ZXJzOiAncXVhcnRlcicsXG4gICAgICAgIHF1YXJ0ZXI6ICdxdWFydGVyJyxcbiAgICAgICAgczogJ3NlY29uZCcsXG4gICAgICAgIHNlY29uZHM6ICdzZWNvbmQnLFxuICAgICAgICBzZWNvbmQ6ICdzZWNvbmQnLFxuICAgICAgICBnZzogJ3dlZWtZZWFyJyxcbiAgICAgICAgd2Vla3llYXJzOiAnd2Vla1llYXInLFxuICAgICAgICB3ZWVreWVhcjogJ3dlZWtZZWFyJyxcbiAgICAgICAgR0c6ICdpc29XZWVrWWVhcicsXG4gICAgICAgIGlzb3dlZWt5ZWFyczogJ2lzb1dlZWtZZWFyJyxcbiAgICAgICAgaXNvd2Vla3llYXI6ICdpc29XZWVrWWVhcicsXG4gICAgICAgIHc6ICd3ZWVrJyxcbiAgICAgICAgd2Vla3M6ICd3ZWVrJyxcbiAgICAgICAgd2VlazogJ3dlZWsnLFxuICAgICAgICBXOiAnaXNvV2VlaycsXG4gICAgICAgIGlzb3dlZWtzOiAnaXNvV2VlaycsXG4gICAgICAgIGlzb3dlZWs6ICdpc29XZWVrJyxcbiAgICAgICAgeTogJ3llYXInLFxuICAgICAgICB5ZWFyczogJ3llYXInLFxuICAgICAgICB5ZWFyOiAneWVhcicsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0KSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSB7fSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wLFxuICAgICAgICAgICAgcHJvcDtcblxuICAgICAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9ybWFsaXplZElucHV0O1xuICAgIH1cblxuICAgIHZhciBwcmlvcml0aWVzID0ge1xuICAgICAgICBkYXRlOiA5LFxuICAgICAgICBkYXk6IDExLFxuICAgICAgICB3ZWVrZGF5OiAxMSxcbiAgICAgICAgaXNvV2Vla2RheTogMTEsXG4gICAgICAgIGRheU9mWWVhcjogNCxcbiAgICAgICAgaG91cjogMTMsXG4gICAgICAgIG1pbGxpc2Vjb25kOiAxNixcbiAgICAgICAgbWludXRlOiAxNCxcbiAgICAgICAgbW9udGg6IDgsXG4gICAgICAgIHF1YXJ0ZXI6IDcsXG4gICAgICAgIHNlY29uZDogMTUsXG4gICAgICAgIHdlZWtZZWFyOiAxLFxuICAgICAgICBpc29XZWVrWWVhcjogMSxcbiAgICAgICAgd2VlazogNSxcbiAgICAgICAgaXNvV2VlazogNSxcbiAgICAgICAgeWVhcjogMSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICAgICAgICB2YXIgdW5pdHMgPSBbXSxcbiAgICAgICAgICAgIHU7XG4gICAgICAgIGZvciAodSBpbiB1bml0c09iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AodW5pdHNPYmosIHUpKSB7XG4gICAgICAgICAgICAgICAgdW5pdHMucHVzaCh7IHVuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gxID0gL1xcZC8sIC8vICAgICAgIDAgLSA5XG4gICAgICAgIG1hdGNoMiA9IC9cXGRcXGQvLCAvLyAgICAgIDAwIC0gOTlcbiAgICAgICAgbWF0Y2gzID0gL1xcZHszfS8sIC8vICAgICAwMDAgLSA5OTlcbiAgICAgICAgbWF0Y2g0ID0gL1xcZHs0fS8sIC8vICAgIDAwMDAgLSA5OTk5XG4gICAgICAgIG1hdGNoNiA9IC9bKy1dP1xcZHs2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2gxdG8yID0gL1xcZFxcZD8vLCAvLyAgICAgICAwIC0gOTlcbiAgICAgICAgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vLCAvLyAgICAgOTk5IC0gOTk5OVxuICAgICAgICBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy8sIC8vICAgOTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LywgLy8gICAgICAgMCAtIDk5OVxuICAgICAgICBtYXRjaDF0bzQgPSAvXFxkezEsNH0vLCAvLyAgICAgICAwIC0gOTk5OVxuICAgICAgICBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS8sIC8vIC05OTk5OTkgLSA5OTk5OTlcbiAgICAgICAgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLywgLy8gICAgICAgMCAtIGluZlxuICAgICAgICBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvLCAvLyAgICAtaW5mIC0gaW5mXG4gICAgICAgIG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICAgICAgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpLCAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuICAgICAgICBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy8sIC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG4gICAgICAgIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgICAgICAvLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4gICAgICAgIG1hdGNoV29yZCA9XG4gICAgICAgICAgICAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGMDdcXHVGRjEwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaSxcbiAgICAgICAgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyA9IC9eWzEtOV1cXGQ/LywgLy8gICAgICAgICAxLTk5XG4gICAgICAgIG1hdGNoMXRvMkhhc1plcm8gPSAvXihbMS05XVxcZHxcXGQpLywgLy8gICAgICAgICAgIDAtOTlcbiAgICAgICAgcmVnZXhlcztcblxuICAgIHJlZ2V4ZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4odG9rZW4sIHJlZ2V4LCBzdHJpY3RSZWdleCkge1xuICAgICAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpXG4gICAgICAgICAgICA/IHJlZ2V4XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4ID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykge1xuICAgICAgICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuICAgIGZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHMpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2V4RXNjYXBlKFxuICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAxIHx8IHAyIHx8IHAzIHx8IHA0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWJzRmxvb3IobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgICAgIHZhciBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb24sXG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBmdW5jID0gY2FsbGJhY2ssXG4gICAgICAgICAgICB0b2tlbkxlbjtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRva2VuID0gW3Rva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5MZW4gPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbkxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0b2tlbnNbdG9rZW5baV1dID0gZnVuYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuLCBjYWxsYmFjaykge1xuICAgICAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgICAgICBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIHRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIGlucHV0LCBjb25maWcpIHtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICAgICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICAgICAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XG4gICAgfVxuXG4gICAgdmFyIFlFQVIgPSAwLFxuICAgICAgICBNT05USCA9IDEsXG4gICAgICAgIERBVEUgPSAyLFxuICAgICAgICBIT1VSID0gMyxcbiAgICAgICAgTUlOVVRFID0gNCxcbiAgICAgICAgU0VDT05EID0gNSxcbiAgICAgICAgTUlMTElTRUNPTkQgPSA2LFxuICAgICAgICBXRUVLID0gNyxcbiAgICAgICAgV0VFS0RBWSA9IDg7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignWScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnllYXIoKTtcbiAgICAgICAgcmV0dXJuIHkgPD0gOTk5OSA/IHplcm9GaWxsKHksIDQpIDogJysnICsgeTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCA0XSwgMCwgJ3llYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZJywgNV0sIDAsICd5ZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWVknLCA2LCB0cnVlXSwgMCwgJ3llYXInKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignWVknLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W1lFQVJdID1cbiAgICAgICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xuICAgIH1cblxuICAgIC8vIEhPT0tTXG5cbiAgICBob29rcy5wYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xuICAgIH07XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0WWVhciA9IG1ha2VHZXRTZXQoJ0Z1bGxZZWFyJywgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0xlYXBZZWFyKCkge1xuICAgICAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUdldFNldCh1bml0LCBrZWVwVGltZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldCQxKHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldChtb20sIHVuaXQpIHtcbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGQgPSBtb20uX2QsXG4gICAgICAgICAgICBpc1VUQyA9IG1vbS5faXNVVEM7XG5cbiAgICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgICAgICBjYXNlICdNaWxsaXNlY29uZHMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCkgOiBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgY2FzZSAnU2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENTZWNvbmRzKCkgOiBkLmdldFNlY29uZHMoKTtcbiAgICAgICAgICAgIGNhc2UgJ01pbnV0ZXMnOlxuICAgICAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDTWludXRlcygpIDogZC5nZXRNaW51dGVzKCk7XG4gICAgICAgICAgICBjYXNlICdIb3Vycyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENIb3VycygpIDogZC5nZXRIb3VycygpO1xuICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENEYXRlKCkgOiBkLmdldERhdGUoKTtcbiAgICAgICAgICAgIGNhc2UgJ0RheSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENEYXkoKSA6IGQuZ2V0RGF5KCk7XG4gICAgICAgICAgICBjYXNlICdNb250aCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVVRDID8gZC5nZXRVVENNb250aCgpIDogZC5nZXRNb250aCgpO1xuICAgICAgICAgICAgY2FzZSAnRnVsbFllYXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBpc1VUQyA/IGQuZ2V0VVRDRnVsbFllYXIoKSA6IGQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjsgLy8gSnVzdCBpbiBjYXNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXQkMShtb20sIHVuaXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBkLCBpc1VUQywgeWVhciwgbW9udGgsIGRhdGU7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpIHx8IGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZCA9IG1vbS5fZDtcbiAgICAgICAgaXNVVEMgPSBtb20uX2lzVVRDO1xuXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICAgICAgY2FzZSAnTWlsbGlzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAoaXNVVENcbiAgICAgICAgICAgICAgICAgICAgPyBkLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBkLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSAnU2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENTZWNvbmRzKHZhbHVlKSA6IGQuc2V0U2Vjb25kcyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSAnTWludXRlcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENNaW51dGVzKHZhbHVlKSA6IGQuc2V0TWludXRlcyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSAnSG91cnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDSG91cnModmFsdWUpIDogZC5zZXRIb3Vycyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSAnRGF0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgKGlzVVRDID8gZC5zZXRVVENEYXRlKHZhbHVlKSA6IGQuc2V0RGF0ZSh2YWx1ZSkpO1xuICAgICAgICAgICAgLy8gY2FzZSAnRGF5JzogLy8gTm90IHJlYWxcbiAgICAgICAgICAgIC8vICAgIHJldHVybiB2b2lkIChpc1VUQyA/IGQuc2V0VVRDRGF5KHZhbHVlKSA6IGQuc2V0RGF5KHZhbHVlKSk7XG4gICAgICAgICAgICAvLyBjYXNlICdNb250aCc6IC8vIE5vdCB1c2VkIGJlY2F1c2Ugd2UgbmVlZCB0byBwYXNzIHR3byB2YXJpYWJsZXNcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdm9pZCAoaXNVVEMgPyBkLnNldFVUQ01vbnRoKHZhbHVlKSA6IGQuc2V0TW9udGgodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgJ0Z1bGxZZWFyJzpcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gU2VlIGJlbG93IC4uLlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEp1c3QgaW4gY2FzZVxuICAgICAgICB9XG5cbiAgICAgICAgeWVhciA9IHZhbHVlO1xuICAgICAgICBtb250aCA9IG1vbS5tb250aCgpO1xuICAgICAgICBkYXRlID0gbW9tLmRhdGUoKTtcbiAgICAgICAgZGF0ZSA9IGRhdGUgPT09IDI5ICYmIG1vbnRoID09PSAxICYmICFpc0xlYXBZZWFyKHllYXIpID8gMjggOiBkYXRlO1xuICAgICAgICB2b2lkIChpc1VUQ1xuICAgICAgICAgICAgPyBkLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXRlKVxuICAgICAgICAgICAgOiBkLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXRlKSk7XG4gICAgfVxuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gc3RyaW5nR2V0KHVuaXRzKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ1NldCh1bml0cywgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplT2JqZWN0VW5pdHModW5pdHMpO1xuICAgICAgICAgICAgdmFyIHByaW9yaXRpemVkID0gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0cyksXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBwcmlvcml0aXplZExlbiA9IHByaW9yaXRpemVkLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmlvcml0aXplZExlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9kKG4sIHgpIHtcbiAgICAgICAgcmV0dXJuICgobiAlIHgpICsgeCkgJSB4O1xuICAgIH1cblxuICAgIHZhciBpbmRleE9mO1xuXG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleE9mID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIC8vIEkga25vd1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xuICAgICAgICB5ZWFyICs9IChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICAgICAgICByZXR1cm4gbW9kTW9udGggPT09IDFcbiAgICAgICAgICAgID8gaXNMZWFwWWVhcih5ZWFyKVxuICAgICAgICAgICAgICAgID8gMjlcbiAgICAgICAgICAgICAgICA6IDI4XG4gICAgICAgICAgICA6IDMxIC0gKChtb2RNb250aCAlIDcpICUgMik7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJOb0xlYWRpbmdaZXJvKTtcbiAgICBhZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdNTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIHZhciBkZWZhdWx0TG9jYWxlTW9udGhzID1cbiAgICAgICAgICAgICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcbiAgICAgICAgICAgICAgICAnXydcbiAgICAgICAgICAgICksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9XG4gICAgICAgICAgICAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgICAgIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy8sXG4gICAgICAgIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgICAgICBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHMobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKVxuICAgICAgICAgICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNbJ3N0YW5kYWxvbmUnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpXG4gICAgICAgICAgICA/IHRoaXMuX21vbnRoc1ttLm1vbnRoKCldXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1tcbiAgICAgICAgICAgICAgICAgICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgICAgPyAnZm9ybWF0J1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3N0YW5kYWxvbmUnXG4gICAgICAgICAgICAgIF1bbS5tb250aCgpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFsnc3RhbmRhbG9uZSddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KVxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldXG4gICAgICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0W1xuICAgICAgICAgICAgICAgICAgTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdW20ubW9udGgoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQoXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzUGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlLmNhbGwodGhpcywgbW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJyxcbiAgICAgICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NTScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnTU1NJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIHNldE1vbnRoKG1vbSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vbnRoID0gdmFsdWUsXG4gICAgICAgICAgICBkYXRlID0gbW9tLmRhdGUoKTtcblxuICAgICAgICBkYXRlID0gZGF0ZSA8IDI5ID8gZGF0ZSA6IE1hdGgubWluKGRhdGUsIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIG1vbnRoKSk7XG4gICAgICAgIHZvaWQgKG1vbS5faXNVVENcbiAgICAgICAgICAgID8gbW9tLl9kLnNldFVUQ01vbnRoKG1vbnRoLCBkYXRlKVxuICAgICAgICAgICAgOiBtb20uX2Quc2V0TW9udGgobW9udGgsIGRhdGUpKTtcbiAgICAgICAgcmV0dXJuIG1vbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRNb250aCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0TW9udGgodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsICdNb250aCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF5c0luTW9udGgoKSB7XG4gICAgICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleFxuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoc1JlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZU1vbnRoc1BhcnNlKCkge1xuICAgICAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2hvcnRQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIGxvbmdQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgc2hvcnRQLFxuICAgICAgICAgICAgbG9uZ1A7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgc2hvcnRQID0gcmVnZXhFc2NhcGUodGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgICAgICAgICBsb25nUCA9IHJlZ2V4RXNjYXBlKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRQKTtcbiAgICAgICAgICAgIGxvbmdQaWVjZXMucHVzaChsb25nUCk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdQKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRQKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICAgICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuXG4gICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKSB7XG4gICAgICAgIC8vIGNhbid0IGp1c3QgYXBwbHkoKSB0byBjcmVhdGUgYSBkYXRlOlxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XG4gICAgICAgIHZhciBkYXRlO1xuICAgICAgICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHkgKyA0MDAsIG0sIGQsIGgsIE0sIHMsIG1zKTtcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVVENEYXRlKHkpIHtcbiAgICAgICAgdmFyIGRhdGUsIGFyZ3M7XG4gICAgICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICBhcmdzWzBdID0geSArIDQwMDtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmdzKSk7XG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuICAgIGZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gICAgICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICAgICAgZndkbHcgPSAoNyArIGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdykgJSA3O1xuXG4gICAgICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgICAgIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgICAgIHJlc1llYXIsXG4gICAgICAgICAgICByZXNEYXlPZlllYXI7XG5cbiAgICAgICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgICAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KG1vbS55ZWFyKCksIGRvdywgZG95KSxcbiAgICAgICAgICAgIHdlZWsgPSBNYXRoLmZsb29yKChtb20uZGF5T2ZZZWFyKCkgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDEsXG4gICAgICAgICAgICByZXNXZWVrLFxuICAgICAgICAgICAgcmVzWWVhcjtcblxuICAgICAgICBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgICAgICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyXSwgJ3dvJywgJ3dlZWsnKTtcbiAgICBhZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3cnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1cnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgICAgIFsndycsICd3dycsICdXJywgJ1dXJ10sXG4gICAgICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWsobW9tKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgICAgICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95OiA2LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA2dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrKGlucHV0KSB7XG4gICAgICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWsoaW5wdXQpIHtcbiAgICAgICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignZCcsIDAsICdkbycsICdkYXknKTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2UnLCAwLCAwLCAnd2Vla2RheScpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ2QnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcbiAgICBhZGRSZWdleFRva2VuKCdkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG4gICAgYWRkUmVnZXhUb2tlbignZGRkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2RkJywgJ2RkZCcsICdkZGRkJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgICAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydkJywgJ2UnLCAnRSddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICBmdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc05hTihpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNOYU4oaW5wdXQpID8gbnVsbCA6IGlucHV0O1xuICAgIH1cblxuICAgIC8vIExPQ0FMRVNcbiAgICBmdW5jdGlvbiBzaGlmdFdlZWtkYXlzKHdzLCBuKSB7XG4gICAgICAgIHJldHVybiB3cy5zbGljZShuLCA3KS5jb25jYXQod3Muc2xpY2UoMCwgbikpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPVxuICAgICAgICAgICAgJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICAgICAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgICAgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQsXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQsXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMobSwgZm9ybWF0KSB7XG4gICAgICAgIHZhciB3ZWVrZGF5cyA9IGlzQXJyYXkodGhpcy5fd2Vla2RheXMpXG4gICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzXG4gICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzW1xuICAgICAgICAgICAgICAgICAgbSAmJiBtICE9PSB0cnVlICYmIHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Zvcm1hdCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdO1xuICAgICAgICByZXR1cm4gbSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzaGlmdFdlZWtkYXlzKHdlZWtkYXlzLCB0aGlzLl93ZWVrLmRvdylcbiAgICAgICAgICAgIDogbVxuICAgICAgICAgICAgICA/IHdlZWtkYXlzW20uZGF5KCldXG4gICAgICAgICAgICAgIDogd2Vla2RheXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNTaG9ydChtKSB7XG4gICAgICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgICAgICA/IHNoaWZ0V2Vla2RheXModGhpcy5fd2Vla2RheXNTaG9ydCwgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgICAgICA6IG1cbiAgICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldXG4gICAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c01pbihtKSB7XG4gICAgICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgICAgICA/IHNoaWZ0V2Vla2RheXModGhpcy5fd2Vla2RheXNNaW4sIHRoaXMuX3dlZWsuZG93KVxuICAgICAgICAgICAgOiBtXG4gICAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV1cbiAgICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c01pbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZSQxKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGlpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihcbiAgICAgICAgICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQoXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzUGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZSQxLmNhbGwodGhpcywgd2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG5cbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXFxcLj8nKSArICckJyxcbiAgICAgICAgICAgICAgICAgICAgJ2knXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgJ14nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArXG4gICAgICAgICAgICAgICAgICAgICd8XicgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgK1xuICAgICAgICAgICAgICAgICAgICAnfF4nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgICAgICBmb3JtYXQgPT09ICdkZGRkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnZGRkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF5ID0gZ2V0KHRoaXMsICdEYXknKTtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2Vla2RheSA9ICh0aGlzLmRheSgpICsgNyAtIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdykgJSA3O1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWtkYXkgOiB0aGlzLmFkZChpbnB1dCAtIHdlZWtkYXksICdkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0SVNPRGF5T2ZXZWVrKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgICAgICAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcbiAgICAgICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgd2Vla2RheSA9IHBhcnNlSXNvV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KHRoaXMuZGF5KCkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRheSgpIHx8IDc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleFxuICAgICAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleFxuICAgICAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla2RheXNNaW5SZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3RcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXhcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlV2Vla2RheXNQYXJzZSgpIHtcbiAgICAgICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pblBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgc2hvcnRQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIGxvbmdQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbW9tLFxuICAgICAgICAgICAgbWlucCxcbiAgICAgICAgICAgIHNob3J0cCxcbiAgICAgICAgICAgIGxvbmdwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIG1pbnAgPSByZWdleEVzY2FwZSh0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpKTtcbiAgICAgICAgICAgIHNob3J0cCA9IHJlZ2V4RXNjYXBlKHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKSk7XG4gICAgICAgICAgICBsb25ncCA9IHJlZ2V4RXNjYXBlKHRoaXMud2Vla2RheXMobW9tLCAnJykpO1xuICAgICAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcblxuICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBtaW5QaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgZnVuY3Rpb24gaEZvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKSAlIDEyIHx8IDEyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtGb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCkgfHwgMjQ7XG4gICAgfVxuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMl0sIDAsICdob3VyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ2gnLCBbJ2hoJywgMl0sIDAsIGhGb3JtYXQpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDJdLCAwLCBrRm9ybWF0KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdobW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignaG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAnJyArXG4gICAgICAgICAgICBoRm9ybWF0LmFwcGx5KHRoaXMpICtcbiAgICAgICAgICAgIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMilcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdIbW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdIbW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICcnICtcbiAgICAgICAgICAgIHRoaXMuaG91cnMoKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtZXJpZGllbSh0b2tlbiwgbG93ZXJjYXNlKSB7XG4gICAgICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubWVyaWRpZW0oXG4gICAgICAgICAgICAgICAgdGhpcy5ob3VycygpLFxuICAgICAgICAgICAgICAgIHRoaXMubWludXRlcygpLFxuICAgICAgICAgICAgICAgIGxvd2VyY2FzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWVyaWRpZW0oJ2EnLCB0cnVlKTtcbiAgICBtZXJpZGllbSgnQScsIGZhbHNlKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0oaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLl9tZXJpZGllbVBhcnNlO1xuICAgIH1cblxuICAgIGFkZFJlZ2V4VG9rZW4oJ2EnLCBtYXRjaE1lcmlkaWVtKTtcbiAgICBhZGRSZWdleFRva2VuKCdBJywgbWF0Y2hNZXJpZGllbSk7XG4gICAgYWRkUmVnZXhUb2tlbignSCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG4gICAgYWRkUmVnZXhUb2tlbignaCcsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG4gICAgYWRkUmVnZXhUb2tlbignaycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8yTm9MZWFkaW5nWmVybyk7XG4gICAgYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbigna2snLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbiAgICBhZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbiAgICBhZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oWydrJywgJ2trJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgICAgICBjb25maWcuX21lcmlkaWVtID0gaW5wdXQ7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdobW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXG4gICAgICAgICAgICBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICAgICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0LFxuICAgICAgICAgICAgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgIH0pO1xuXG4gICAgLy8gTE9DQUxFU1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlSXNQTShpbnB1dCkge1xuICAgICAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxuICAgICAgICByZXR1cm4gKGlucHV0ICsgJycpLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCc7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2ksXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIGhvdXIgc2hvdWxkIGtlZXAgdGhlIHRpbWUsIGJlY2F1c2UgdGhlIHVzZXIgZXhwbGljaXRseVxuICAgICAgICAvLyBzcGVjaWZpZWQgd2hpY2ggaG91ciB0aGV5IHdhbnQuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuICAgICAgICAvLyBhIG5ldyB0aW1lem9uZSkgbWFrZXMgc2Vuc2UuIEFkZGluZy9zdWJ0cmFjdGluZyBob3VycyBkb2VzIG5vdCBmb2xsb3dcbiAgICAgICAgLy8gdGhpcyBydWxlLlxuICAgICAgICBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZU1lcmlkaWVtKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBiYXNlQ29uZmlnID0ge1xuICAgICAgICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICAgICAgICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICAgICAgICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICAgICAgICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgICAgICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gICAgICAgIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICAgICAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgICAgIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgICAgICAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgICAgICAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICAgICAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgICAgICAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgICAgICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UsXG4gICAgfTtcblxuICAgIC8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbiAgICB2YXIgbG9jYWxlcyA9IHt9LFxuICAgICAgICBsb2NhbGVGYW1pbGllcyA9IHt9LFxuICAgICAgICBnbG9iYWxMb2NhbGU7XG5cbiAgICBmdW5jdGlvbiBjb21tb25QcmVmaXgoYXJyMSwgYXJyMikge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIG1pbmwgPSBNYXRoLm1pbihhcnIxLmxlbmd0aCwgYXJyMi5sZW5ndGgpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWlubDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5sO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSA/IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnLScpIDoga2V5O1xuICAgIH1cblxuICAgIC8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuICAgIC8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXG4gICAgLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCwgYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuICAgIGZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lcykge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgbmV4dCxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIHNwbGl0O1xuXG4gICAgICAgIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGogPSBzcGxpdC5sZW5ndGg7XG4gICAgICAgICAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XG4gICAgICAgICAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG5leHQgJiZcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5sZW5ndGggPj0gaiAmJlxuICAgICAgICAgICAgICAgICAgICBjb21tb25QcmVmaXgoc3BsaXQsIG5leHQpID49IGogLSAxXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTG9jYWxlTmFtZVNhbmUobmFtZSkge1xuICAgICAgICAvLyBQcmV2ZW50IG5hbWVzIHRoYXQgbG9vayBsaWtlIGZpbGVzeXN0ZW0gcGF0aHMsIGkuZSBjb250YWluICcvJyBvciAnXFwnXG4gICAgICAgIC8vIEVuc3VyZSBuYW1lIGlzIGF2YWlsYWJsZSBhbmQgZnVuY3Rpb24gcmV0dXJucyBib29sZWFuXG4gICAgICAgIHJldHVybiAhIShuYW1lICYmIG5hbWUubWF0Y2goJ15bXi9cXFxcXFxcXF0qJCcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICAgICAgdmFyIG9sZExvY2FsZSA9IG51bGwsXG4gICAgICAgICAgICBhbGlhc2VkUmVxdWlyZTtcbiAgICAgICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgbW9kdWxlICYmXG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyAmJlxuICAgICAgICAgICAgaXNMb2NhbGVOYW1lU2FuZShuYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgICAgIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIG1hcmsgYXMgbm90IGZvdW5kIHRvIGF2b2lkIHJlcGVhdGluZyBleHBlbnNpdmUgZmlsZSByZXF1aXJlIGNhbGwgY2F1c2luZyBoaWdoIENQVVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdHJ5aW5nIHRvIGZpbmQgZW4tVVMsIGVuX1VTLCBlbi11cyBmb3IgZXZlcnkgZm9ybWF0IGNhbGxcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbnVsbDsgLy8gbnVsbCBtZWFucyBub3QgZm91bmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlKGtleSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciBkYXRhO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy93YXJuIHVzZXIgaWYgYXJndW1lbnRzIGFyZSBwYXNzZWQgYnV0IHRoZSBsb2NhbGUgY291bGQgbm90IGJlIHNldFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAnTG9jYWxlICcgKyBrZXkgKyAnIG5vdCBmb3VuZC4gRGlkIHlvdSBmb3JnZXQgdG8gbG9hZCBpdD8nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUsXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoXG4gICAgICAgICAgICAgICAgICAgICdkZWZpbmVMb2NhbGVPdmVycmlkZScsXG4gICAgICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29uZmlnKSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGUgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoY29uZmlnLnBhcmVudExvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlLl9jb25maWc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgICAgICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlLFxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsICYmIGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2hpbGQgbG9jYWxlIGluLXBsYWNlIHRvIGF2b2lkIG1lbW9yeS1sZWFrc1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0uc2V0KG1lcmdlQ29uZmlncyhsb2NhbGVzW25hbWVdLl9jb25maWcsIGNvbmZpZykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNRVJHRVxuICAgICAgICAgICAgICAgIHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVMb2NhbGUgaXMgY2FsbGVkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGVcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGFiYnIgc28gaXQgd2lsbCBoYXZlIGEgbmFtZSAoZ2V0dGVycyByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZWZpbmVkIG90aGVyd2lzZSkuXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICAgICAgICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSBnZXRTZXRHbG9iYWxMb2NhbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgbG9jYWxlIGRhdGFcbiAgICBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5KSB7XG4gICAgICAgIHZhciBsb2NhbGU7XG5cbiAgICAgICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICAvL3Nob3J0LWNpcmN1aXQgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKGtleSk7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNob29zZUxvY2FsZShrZXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xuICAgICAgICByZXR1cm4ga2V5cyhsb2NhbGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja092ZXJmbG93KG0pIHtcbiAgICAgICAgdmFyIG92ZXJmbG93LFxuICAgICAgICAgICAgYSA9IG0uX2E7XG5cbiAgICAgICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExXG4gICAgICAgICAgICAgICAgICAgID8gTU9OVEhcbiAgICAgICAgICAgICAgICAgICAgOiBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pXG4gICAgICAgICAgICAgICAgICAgICAgPyBEQVRFXG4gICAgICAgICAgICAgICAgICAgICAgOiBhW0hPVVJdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhW0hPVVJdID4gMjQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGFbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYVtNSU5VVEVdICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtTRUNPTkRdICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gIT09IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBIT1VSXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFbTUlOVVRFXSA8IDAgfHwgYVtNSU5VVEVdID4gNTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNSU5VVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhW1NFQ09ORF0gPCAwIHx8IGFbU0VDT05EXSA+IDU5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTRUNPTkRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNSUxMSVNFQ09ORFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAtMTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiZcbiAgICAgICAgICAgICAgICAob3ZlcmZsb3cgPCBZRUFSIHx8IG92ZXJmbG93ID4gREFURSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvLyBpc28gODYwMSByZWdleFxuICAgIC8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxuICAgIHZhciBleHRlbmRlZElzb1JlZ2V4ID1cbiAgICAgICAgICAgIC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxuICAgICAgICBiYXNpY0lzb1JlZ2V4ID1cbiAgICAgICAgICAgIC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGR8KSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoWystXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG4gICAgICAgIHR6UmVnZXggPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy8sXG4gICAgICAgIGlzb0RhdGVzID0gW1xuICAgICAgICAgICAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgICAgICAgICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICAgICAgICAgIFsnR0dHRy1bV11XVy1FJywgL1xcZHs0fS1XXFxkXFxkLVxcZC9dLFxuICAgICAgICAgICAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICAgICAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9L10sXG4gICAgICAgICAgICBbJ1lZWVktTU0nLCAvXFxkezR9LVxcZFxcZC8sIGZhbHNlXSxcbiAgICAgICAgICAgIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS9dLFxuICAgICAgICAgICAgWydZWVlZTU1ERCcsIC9cXGR7OH0vXSxcbiAgICAgICAgICAgIFsnR0dHR1tXXVdXRScsIC9cXGR7NH1XXFxkezN9L10sXG4gICAgICAgICAgICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxuICAgICAgICAgICAgWydZWVlZREREJywgL1xcZHs3fS9dLFxuICAgICAgICAgICAgWydZWVlZTU0nLCAvXFxkezZ9LywgZmFsc2VdLFxuICAgICAgICAgICAgWydZWVlZJywgL1xcZHs0fS8sIGZhbHNlXSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xuICAgICAgICBpc29UaW1lcyA9IFtcbiAgICAgICAgICAgIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcbiAgICAgICAgICAgIFsnSEg6bW06c3MsU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZCxcXGQrL10sXG4gICAgICAgICAgICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgICAgICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEhtbXNzLlNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICAgICAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxuICAgICAgICAgICAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXG4gICAgICAgICAgICBbJ0hIbW0nLCAvXFxkXFxkXFxkXFxkL10sXG4gICAgICAgICAgICBbJ0hIJywgL1xcZFxcZC9dLFxuICAgICAgICBdLFxuICAgICAgICBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKC0/XFxkKykvaSxcbiAgICAgICAgLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xuICAgICAgICByZmMyODIyID1cbiAgICAgICAgICAgIC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksP1xccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoWystXVxcZHs0fSkpJC8sXG4gICAgICAgIG9ic09mZnNldHMgPSB7XG4gICAgICAgICAgICBVVDogMCxcbiAgICAgICAgICAgIEdNVDogMCxcbiAgICAgICAgICAgIEVEVDogLTQgKiA2MCxcbiAgICAgICAgICAgIEVTVDogLTUgKiA2MCxcbiAgICAgICAgICAgIENEVDogLTUgKiA2MCxcbiAgICAgICAgICAgIENTVDogLTYgKiA2MCxcbiAgICAgICAgICAgIE1EVDogLTYgKiA2MCxcbiAgICAgICAgICAgIE1TVDogLTcgKiA2MCxcbiAgICAgICAgICAgIFBEVDogLTcgKiA2MCxcbiAgICAgICAgICAgIFBTVDogLTggKiA2MCxcbiAgICAgICAgfTtcblxuICAgIC8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWcpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgc3RyaW5nID0gY29uZmlnLl9pLFxuICAgICAgICAgICAgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoc3RyaW5nKSB8fCBiYXNpY0lzb1JlZ2V4LmV4ZWMoc3RyaW5nKSxcbiAgICAgICAgICAgIGFsbG93VGltZSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQsXG4gICAgICAgICAgICB0aW1lRm9ybWF0LFxuICAgICAgICAgICAgdHpGb3JtYXQsXG4gICAgICAgICAgICBpc29EYXRlc0xlbiA9IGlzb0RhdGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGlzb1RpbWVzTGVuID0gaXNvVGltZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaXNvID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlc0xlbjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lc0xlbjsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWxsb3dUaW1lICYmIHRpbWVGb3JtYXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFs0XSkge1xuICAgICAgICAgICAgICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHR6Rm9ybWF0ID0gJ1onO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoXG4gICAgICAgIHllYXJTdHIsXG4gICAgICAgIG1vbnRoU3RyLFxuICAgICAgICBkYXlTdHIsXG4gICAgICAgIGhvdXJTdHIsXG4gICAgICAgIG1pbnV0ZVN0cixcbiAgICAgICAgc2Vjb25kU3RyXG4gICAgKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXG4gICAgICAgICAgICB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSxcbiAgICAgICAgICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcbiAgICAgICAgICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQoaG91clN0ciwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWludXRlU3RyLCAxMCksXG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHNlY29uZFN0cikge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSB7XG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQoeWVhclN0ciwgMTApO1xuICAgICAgICBpZiAoeWVhciA8PSA0OSkge1xuICAgICAgICAgICAgcmV0dXJuIDIwMDAgKyB5ZWFyO1xuICAgICAgICB9IGVsc2UgaWYgKHllYXIgPD0gOTk5KSB7XG4gICAgICAgICAgICByZXR1cm4gMTkwMCArIHllYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHllYXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAgICAgICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICAgICAgICByZXR1cm4gc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKFteKCldKlxcKXxbXFxuXFx0XS9nLCAnICcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKFxcc1xccyspL2csICcgJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFxzXFxzKi8sICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcc1xccyokLywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyLCBwYXJzZWRJbnB1dCwgY29uZmlnKSB7XG4gICAgICAgIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbmRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXG4gICAgICAgICAgICB2YXIgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSxcbiAgICAgICAgICAgICAgICB3ZWVrZGF5QWN0dWFsID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzBdLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsxXSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMl1cbiAgICAgICAgICAgICAgICApLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChvYnNPZmZzZXQsIG1pbGl0YXJ5T2Zmc2V0LCBudW1PZmZzZXQpIHtcbiAgICAgICAgaWYgKG9ic09mZnNldCkge1xuICAgICAgICAgICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgICAgICAgfSBlbHNlIGlmIChtaWxpdGFyeU9mZnNldCkge1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApLFxuICAgICAgICAgICAgICAgIG0gPSBobSAlIDEwMCxcbiAgICAgICAgICAgICAgICBoID0gKGhtIC0gbSkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tUkZDMjgyMihjb25maWcpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcmZjMjgyMi5leGVjKHByZXByb2Nlc3NSRkMyODIyKGNvbmZpZy5faSkpLFxuICAgICAgICAgICAgcGFyc2VkQXJyYXk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcGFyc2VkQXJyYXkgPSBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKFxuICAgICAgICAgICAgICAgIG1hdGNoWzRdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzNdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzJdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzVdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzZdLFxuICAgICAgICAgICAgICAgIG1hdGNoWzddXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25maWcuX2EgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgICAgIGNvbmZpZy5fdHptID0gY2FsY3VsYXRlT2Zmc2V0KG1hdGNoWzhdLCBtYXRjaFs5XSwgbWF0Y2hbMTBdKTtcblxuICAgICAgICAgICAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICAgICAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucmZjMjgyMiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSAxKSBBU1AuTkVULCAyKSBJU08sIDMpIFJGQyAyODIyIGZvcm1hdHMsIG9yIDQpIG9wdGlvbmFsIGZhbGxiYWNrIGlmIHBhcnNpbmcgaXNuJ3Qgc3RyaWN0XG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWcpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuICAgICAgICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fc3RyaWN0KSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xuICAgICAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuICAgICAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuICAgICAgICAgICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4gICAgICAgICAgICAnZGlzY291cmFnZWQuIFBsZWFzZSByZWZlciB0byBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICAgICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBQaWNrIHRoZSBmaXJzdCBkZWZpbmVkIG9mIHR3byBvciB0aHJlZSBhcmd1bWVudHMuXG4gICAgZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xuICAgICAgICBpZiAoYSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYiAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gYjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgICAgICAvLyBob29rcyBpcyBhY3R1YWxseSB0aGUgZXhwb3J0ZWQgbW9tZW50IG9iamVjdFxuICAgICAgICB2YXIgbm93VmFsdWUgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4gICAgLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbiAgICAvLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cbiAgICAvLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGlucHV0ID0gW10sXG4gICAgICAgICAgICBjdXJyZW50RGF0ZSxcbiAgICAgICAgICAgIGV4cGVjdGVkV2Vla2RheSxcbiAgICAgICAgICAgIHllYXJUb1VzZTtcblxuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAgICAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgICAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fFxuICAgICAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZSh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNT05USF0gPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgICAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCBkYXRlLlxuICAgICAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gICAgICAgIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXG4gICAgICAgIC8vICogaWYgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgb25seSB5ZWFyXG4gICAgICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XG4gICAgICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IGN1cnJlbnREYXRlW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXG4gICAgICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9XG4gICAgICAgICAgICAgICAgY29uZmlnLl9hW2ldID09IG51bGwgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkoXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgKTtcbiAgICAgICAgZXhwZWN0ZWRXZWVrZGF5ID0gY29uZmlnLl91c2VVVENcbiAgICAgICAgICAgID8gY29uZmlnLl9kLmdldFVUQ0RheSgpXG4gICAgICAgICAgICA6IGNvbmZpZy5fZC5nZXREYXkoKTtcblxuICAgICAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcbiAgICAgICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgICAgIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMjQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBmb3IgbWlzbWF0Y2hpbmcgZGF5IG9mIHdlZWtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl93ICYmXG4gICAgICAgICAgICB0eXBlb2YgY29uZmlnLl93LmQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICBjb25maWcuX3cuZCAhPT0gZXhwZWN0ZWRXZWVrZGF5XG4gICAgICAgICkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICAgICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93LCBjdXJXZWVrO1xuXG4gICAgICAgIHcgPSBjb25maWcuX3c7XG4gICAgICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvdyA9IDE7XG4gICAgICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAgICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMoXG4gICAgICAgICAgICAgICAgdy5HRyxcbiAgICAgICAgICAgICAgICBjb25maWcuX2FbWUVBUl0sXG4gICAgICAgICAgICAgICAgd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCAxLCA0KS55ZWFyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgICAgICAgICB3ZWVrZGF5ID0gZGVmYXVsdHMody5FLCAxKTtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgICAgICAgICBkb3kgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3k7XG5cbiAgICAgICAgICAgIGN1cldlZWsgPSB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIGRvdywgZG95KTtcblxuICAgICAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XG5cbiAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCB3ZWVrLlxuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbm5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbm5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbiAgICBob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cbiAgICBob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gICAgICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLklTT184NjAxKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuUkZDXzI4MjIpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLl9hID0gW107XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgICAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcGFyc2VkSW5wdXQsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIHNraXBwZWQsXG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDAsXG4gICAgICAgICAgICBlcmEsXG4gICAgICAgICAgICB0b2tlbkxlbjtcblxuICAgICAgICB0b2tlbnMgPVxuICAgICAgICAgICAgZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuICAgICAgICB0b2tlbkxlbiA9IHRva2Vucy5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbkxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIHBhcnNlZElucHV0ID0gKHN0cmluZy5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpIHx8XG4gICAgICAgICAgICAgICAgW10pWzBdO1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZShcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID1cbiAgICAgICAgICAgIHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgICAgIGlmIChzdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPiAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAgICAgICAvLyBoYW5kbGUgbWVyaWRpZW1cbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKFxuICAgICAgICAgICAgY29uZmlnLl9sb2NhbGUsXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0sXG4gICAgICAgICAgICBjb25maWcuX21lcmlkaWVtXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gaGFuZGxlIGVyYVxuICAgICAgICBlcmEgPSBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lcmE7XG4gICAgICAgIGlmIChlcmEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNDb252ZXJ0WWVhcihlcmEsIGNvbmZpZy5fYVtZRUFSXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICAgICAgY2hlY2tPdmVyZmxvdyhjb25maWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGUsIGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgICAgIHZhciBpc1BtO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2tcbiAgICAgICAgICAgIGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XG4gICAgICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxuICAgICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICAgICAgdmFyIHRlbXBDb25maWcsXG4gICAgICAgICAgICBiZXN0TW9tZW50LFxuICAgICAgICAgICAgc2NvcmVUb0JlYXQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgY3VycmVudFNjb3JlLFxuICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCxcbiAgICAgICAgICAgIGJlc3RGb3JtYXRJc1ZhbGlkID0gZmFsc2UsXG4gICAgICAgICAgICBjb25maWdmTGVuID0gY29uZmlnLl9mLmxlbmd0aDtcblxuICAgICAgICBpZiAoY29uZmlnZkxlbiA9PT0gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZ2ZMZW47IGkrKykge1xuICAgICAgICAgICAgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xuXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgICAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xuXG4gICAgICAgICAgICAvL29yIHRva2Vuc1xuICAgICAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcblxuICAgICAgICAgICAgaWYgKCFiZXN0Rm9ybWF0SXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCB8fFxuICAgICAgICAgICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkRm9ybWF0Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3RGb3JtYXRJc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBleHRlbmQoY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoY29uZmlnLl9pKSxcbiAgICAgICAgICAgIGRheU9yRGF0ZSA9IGkuZGF5ID09PSB1bmRlZmluZWQgPyBpLmRhdGUgOiBpLmRheTtcbiAgICAgICAgY29uZmlnLl9hID0gbWFwKFxuICAgICAgICAgICAgW2kueWVhciwgaS5tb250aCwgZGF5T3JEYXRlLCBpLmhvdXIsIGkubWludXRlLCBpLnNlY29uZCwgaS5taWxsaXNlY29uZF0sXG4gICAgICAgICAgICBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZykge1xuICAgICAgICB2YXIgcmVzID0gbmV3IE1vbWVudChjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSkpO1xuICAgICAgICBpZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcbiAgICAgICAgICAgIHJlcy5hZGQoMSwgJ2QnKTtcbiAgICAgICAgICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcGFyZUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gY29uZmlnLl9pLFxuICAgICAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgICAgICAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7IG51bGxJbnB1dDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01vbWVudChpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3coaW5wdXQpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBpbnB1dDtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnRnJvbUlucHV0KGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjb25maWcuX2k7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dC52YWx1ZU9mKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9hID0gbWFwKGlucHV0LnNsaWNlKDApLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG9iaiwgMTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgaXNVVEMpIHtcbiAgICAgICAgdmFyIGMgPSB7fTtcblxuICAgICAgICBpZiAoZm9ybWF0ID09PSB0cnVlIHx8IGZvcm1hdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2NhbGUgPT09IHRydWUgfHwgbG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3RyaWN0ID0gbG9jYWxlO1xuICAgICAgICAgICAgbG9jYWxlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKGlzT2JqZWN0KGlucHV0KSAmJiBpc09iamVjdEVtcHR5KGlucHV0KSkgfHxcbiAgICAgICAgICAgIChpc0FycmF5KGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPT09IDApXG4gICAgICAgICkge1xuICAgICAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gb2JqZWN0IGNvbnN0cnVjdGlvbiBtdXN0IGJlIGRvbmUgdGhpcyB3YXkuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gICAgICAgIGMuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gICAgICAgIGMuX3VzZVVUQyA9IGMuX2lzVVRDID0gaXNVVEM7XG4gICAgICAgIGMuX2wgPSBsb2NhbGU7XG4gICAgICAgIGMuX2kgPSBpbnB1dDtcbiAgICAgICAgYy5fZiA9IGZvcm1hdDtcbiAgICAgICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVGcm9tQ29uZmlnKGMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2FsKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcbiAgICAgICAgICAgICdtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5tYXggaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA8IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIHByb3RvdHlwZU1heCA9IGRlcHJlY2F0ZShcbiAgICAgICAgICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA+IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAvLyBQaWNrIGEgbW9tZW50IG0gZnJvbSBtb21lbnRzIHNvIHRoYXQgbVtmbl0ob3RoZXIpIGlzIHRydWUgZm9yIGFsbFxuICAgIC8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbiAgICAvL1xuICAgIC8vIG1vbWVudHMgc2hvdWxkIGVpdGhlciBiZSBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cyBvciBhbiBhcnJheSwgd2hvc2VcbiAgICAvLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuICAgIGZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgICAgICB2YXIgcmVzLCBpO1xuICAgICAgICBpZiAobW9tZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShtb21lbnRzWzBdKSkge1xuICAgICAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzID0gbW9tZW50c1swXTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuICAgIGZ1bmN0aW9uIG1pbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNCZWZvcmUnLCBhcmdzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXgoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgICAgIHJldHVybiBwaWNrQnkoJ2lzQWZ0ZXInLCBhcmdzKTtcbiAgICB9XG5cbiAgICB2YXIgbm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogK25ldyBEYXRlKCk7XG4gICAgfTtcblxuICAgIHZhciBvcmRlcmluZyA9IFtcbiAgICAgICAgJ3llYXInLFxuICAgICAgICAncXVhcnRlcicsXG4gICAgICAgICdtb250aCcsXG4gICAgICAgICd3ZWVrJyxcbiAgICAgICAgJ2RheScsXG4gICAgICAgICdob3VyJyxcbiAgICAgICAgJ21pbnV0ZScsXG4gICAgICAgICdzZWNvbmQnLFxuICAgICAgICAnbWlsbGlzZWNvbmQnLFxuICAgIF07XG5cbiAgICBmdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQobSkge1xuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSBmYWxzZSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBvcmRlckxlbiA9IG9yZGVyaW5nLmxlbmd0aDtcbiAgICAgICAgZm9yIChrZXkgaW4gbSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGhhc093blByb3AobSwga2V5KSAmJlxuICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgKG1ba2V5XSA9PSBudWxsIHx8ICFpc05hTihtW2tleV0pKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvcmRlckxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAobVtvcmRlcmluZ1tpXV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VGbG9hdChtW29yZGVyaW5nW2ldXSkgIT09IHRvSW50KG1bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICAgICAgICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNWYWxpZCQxKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkJDEoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihOYU4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIER1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgbm9ybWFsaXplZElucHV0Lmlzb1dlZWsgfHwgMCxcbiAgICAgICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgICAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgPVxuICAgICAgICAgICAgK21pbGxpc2Vjb25kcyArXG4gICAgICAgICAgICBzZWNvbmRzICogMWUzICsgLy8gMTAwMFxuICAgICAgICAgICAgbWludXRlcyAqIDZlNCArIC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgICAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XG4gICAgICAgIHRoaXMuX2RheXMgPSArZGF5cyArIHdlZWtzICogNztcbiAgICAgICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAgICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAgICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICAgICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArIHF1YXJ0ZXJzICogMyArIHllYXJzICogMTI7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgICAgIHRoaXMuX2J1YmJsZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRHVyYXRpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNSb3VuZChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKC0xICogbnVtYmVyKSAqIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcbiAgICBmdW5jdGlvbiBjb21wYXJlQXJyYXlzKGFycmF5MSwgYXJyYXkyLCBkb250Q29udmVydCkge1xuICAgICAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXG4gICAgICAgICAgICBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICAgICAgZGlmZnMgPSAwLFxuICAgICAgICAgICAgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxuICAgICAgICAgICAgICAgICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBmdW5jdGlvbiBvZmZzZXQodG9rZW4sIHNlcGFyYXRvcikge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudXRjT2Zmc2V0KCksXG4gICAgICAgICAgICAgICAgc2lnbiA9ICcrJztcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcbiAgICAgICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBzaWduICtcbiAgICAgICAgICAgICAgICB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICtcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3IgK1xuICAgICAgICAgICAgICAgIHplcm9GaWxsKH5+b2Zmc2V0ICUgNjAsIDIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvZmZzZXQoJ1onLCAnOicpO1xuICAgIG9mZnNldCgnWlonLCAnJyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdaJywgbWF0Y2hTaG9ydE9mZnNldCk7XG4gICAgYWRkUmVnZXhUb2tlbignWlonLCBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgICAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgLy8gdGltZXpvbmUgY2h1bmtlclxuICAgIC8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuICAgIC8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxuICAgIHZhciBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcblxuICAgIGZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlciksXG4gICAgICAgICAgICBjaHVuayxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICAgICAgbWludXRlcztcblxuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjaHVuayA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXSB8fCBbXTtcbiAgICAgICAgcGFydHMgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgICAgICBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHRvSW50KHBhcnRzWzJdKTtcblxuICAgICAgICByZXR1cm4gbWludXRlcyA9PT0gMCA/IDAgOiBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG4gICAgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCBtb2RlbCkge1xuICAgICAgICB2YXIgcmVzLCBkaWZmO1xuICAgICAgICBpZiAobW9kZWwuX2lzVVRDKSB7XG4gICAgICAgICAgICByZXMgPSBtb2RlbC5jbG9uZSgpO1xuICAgICAgICAgICAgZGlmZiA9XG4gICAgICAgICAgICAgICAgKGlzTW9tZW50KGlucHV0KSB8fCBpc0RhdGUoaW5wdXQpXG4gICAgICAgICAgICAgICAgICAgID8gaW5wdXQudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xuICAgICAgICAgICAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICAgICAgICAgICAgcmVzLl9kLnNldFRpbWUocmVzLl9kLnZhbHVlT2YoKSArIGRpZmYpO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGVPZmZzZXQobSkge1xuICAgICAgICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgICAgICAgcmV0dXJuIC1NYXRoLnJvdW5kKG0uX2QuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgfVxuXG4gICAgLy8gSE9PS1NcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbiAgICAvLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbiAgICBob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIC8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuICAgIC8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4gICAgLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuICAgIC8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbiAgICAvL1xuICAgIC8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuICAgIC8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuICAgIC8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbiAgICAvLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2VcbiAgICAvLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuICAgIGZ1bmN0aW9uIGdldFNldE9mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSwga2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGlucHV0KSA8IDE2ICYmICFrZWVwTWludXRlcykge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IGlucHV0O1xuICAgICAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChsb2NhbEFkanVzdCwgJ20nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkU3VidHJhY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHVyYXRpb24oaW5wdXQgLSBvZmZzZXQsICdtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldFpvbmUoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSAtaW5wdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyhrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRoaXMuX3R6bSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG4gICAgICAgICAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRab25lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0ID0gaW5wdXQgPyBjcmVhdGVMb2NhbChpbnB1dCkudXRjT2Zmc2V0KCkgOiAwO1xuXG4gICAgICAgIHJldHVybiAodGhpcy51dGNPZmZzZXQoKSAtIGlucHV0KSAlIDYwID09PSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCgpIHtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGMgPSB7fSxcbiAgICAgICAgICAgIG90aGVyO1xuXG4gICAgICAgIGNvcHlDb25maWcoYywgdGhpcyk7XG4gICAgICAgIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xuXG4gICAgICAgIGlmIChjLl9hKSB7XG4gICAgICAgICAgICBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPVxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMb2NhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVdGNPZmZzZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVdGMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxuICAgIHZhciBhc3BOZXRSZWdleCA9IC9eKC18XFwrKT8oPzooXFxkKilbLiBdKT8oXFxkKyk6KFxcZCspKD86OihcXGQrKShcXC5cXGQqKT8pPyQvLFxuICAgICAgICAvLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuICAgICAgICAvLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4gICAgICAgIC8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbiAgICAgICAgaXNvUmVnZXggPVxuICAgICAgICAgICAgL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uKGlucHV0LCBrZXkpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXG4gICAgICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICAgICAgc2lnbixcbiAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgIGRpZmZSZXM7XG5cbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBtczogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBkOiBpbnB1dC5fZGF5cyxcbiAgICAgICAgICAgICAgICBNOiBpbnB1dC5fbW9udGhzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkgfHwgIWlzTmFOKCtpbnB1dCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb25ba2V5XSA9ICtpbnB1dDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmRzID0gK2lucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICAgICAgc2lnbiA9IG1hdGNoWzFdID09PSAnLScgPyAtMSA6IDE7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGQ6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgaDogdG9JbnQobWF0Y2hbSE9VUl0pICogc2lnbixcbiAgICAgICAgICAgICAgICBtOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIG1zOiB0b0ludChhYnNSb3VuZChtYXRjaFtNSUxMSVNFQ09ORF0gKiAxMDAwKSkgKiBzaWduLCAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gbWF0Y2hbMV0gPT09ICctJyA/IC0xIDogMTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBNOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXG4gICAgICAgICAgICAgICAgdzogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIGQ6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBoOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgbTogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICAgICAgICAgIHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICgnZnJvbScgaW4gZHVyYXRpb24gfHwgJ3RvJyBpbiBkdXJhdGlvbilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UoXG4gICAgICAgICAgICAgICAgY3JlYXRlTG9jYWwoZHVyYXRpb24uZnJvbSksXG4gICAgICAgICAgICAgICAgY3JlYXRlTG9jYWwoZHVyYXRpb24udG8pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIGR1cmF0aW9uLk0gPSBkaWZmUmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcbiAgICAgICAgICAgIHJldC5fbG9jYWxlID0gaW5wdXQuX2xvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSAmJiBoYXNPd25Qcm9wKGlucHV0LCAnX2lzVmFsaWQnKSkge1xuICAgICAgICAgICAgcmV0Ll9pc1ZhbGlkID0gaW5wdXQuX2lzVmFsaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuICAgIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkJDE7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUlzbyhpbnAsIHNpZ24pIHtcbiAgICAgICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgICAgICAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gICAgICAgIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgICAgICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgICAgIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcbiAgICAgICAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuXG4gICAgICAgIHJlcy5tb250aHMgPVxuICAgICAgICAgICAgb3RoZXIubW9udGgoKSAtIGJhc2UubW9udGgoKSArIChvdGhlci55ZWFyKCkgLSBiYXNlLnllYXIoKSkgKiAxMjtcbiAgICAgICAgaWYgKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKS5pc0FmdGVyKG90aGVyKSkge1xuICAgICAgICAgICAgLS1yZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICtiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJyk7XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICBpZiAoIShiYXNlLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UpO1xuICAgICAgICBpZiAoYmFzZS5pc0JlZm9yZShvdGhlcikpIHtcbiAgICAgICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShvdGhlciwgYmFzZSk7XG4gICAgICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgICAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHJlbW92ZSAnbmFtZScgYXJnIGFmdGVyIGRlcHJlY2F0aW9uIGlzIHJlbW92ZWRcbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRlcihkaXJlY3Rpb24sIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIHBlcmlvZCkge1xuICAgICAgICAgICAgdmFyIGR1ciwgdG1wO1xuICAgICAgICAgICAgLy9pbnZlcnQgdGhlIGFyZ3VtZW50cywgYnV0IGNvbXBsYWluIGFib3V0IGl0XG4gICAgICAgICAgICBpZiAocGVyaW9kICE9PSBudWxsICYmICFpc05hTigrcGVyaW9kKSkge1xuICAgICAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZShcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ21vbWVudCgpLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKG51bWJlciwgcGVyaW9kKS4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvYWRkLWludmVydGVkLXBhcmFtLyBmb3IgbW9yZSBpbmZvLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRtcCA9IHZhbDtcbiAgICAgICAgICAgICAgICB2YWwgPSBwZXJpb2Q7XG4gICAgICAgICAgICAgICAgcGVyaW9kID0gdG1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBkdXIsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJ0cmFjdChtb20sIGR1cmF0aW9uLCBpc0FkZGluZywgdXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgIHZhciBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKSxcbiAgICAgICAgICAgIG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xuXG4gICAgICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcblxuICAgICAgICBpZiAobW9udGhzKSB7XG4gICAgICAgICAgICBzZXRNb250aChtb20sIGdldChtb20sICdNb250aCcpICsgbW9udGhzICogaXNBZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXlzKSB7XG4gICAgICAgICAgICBzZXQkMShtb20sICdEYXRlJywgZ2V0KG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbGxpc2Vjb25kcykge1xuICAgICAgICAgICAgbW9tLl9kLnNldFRpbWUobW9tLl9kLnZhbHVlT2YoKSArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQobW9tLCBkYXlzIHx8IG1vbnRocyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYWRkID0gY3JlYXRlQWRkZXIoMSwgJ2FkZCcpLFxuICAgICAgICBzdWJ0cmFjdCA9IGNyZWF0ZUFkZGVyKC0xLCAnc3VidHJhY3QnKTtcblxuICAgIGZ1bmN0aW9uIGlzU3RyaW5nKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnIHx8IGlucHV0IGluc3RhbmNlb2YgU3RyaW5nO1xuICAgIH1cblxuICAgIC8vIHR5cGUgTW9tZW50SW5wdXQgPSBNb21lbnQgfCBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyIHwgKG51bWJlciB8IHN0cmluZylbXSB8IE1vbWVudElucHV0T2JqZWN0IHwgdm9pZDsgLy8gbnVsbCB8IHVuZGVmaW5lZFxuICAgIGZ1bmN0aW9uIGlzTW9tZW50SW5wdXQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlzTW9tZW50KGlucHV0KSB8fFxuICAgICAgICAgICAgaXNEYXRlKGlucHV0KSB8fFxuICAgICAgICAgICAgaXNTdHJpbmcoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc051bWJlcihpbnB1dCkgfHxcbiAgICAgICAgICAgIGlzTnVtYmVyT3JTdHJpbmdBcnJheShpbnB1dCkgfHxcbiAgICAgICAgICAgIGlzTW9tZW50SW5wdXRPYmplY3QoaW5wdXQpIHx8XG4gICAgICAgICAgICBpbnB1dCA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgaW5wdXQgPT09IHVuZGVmaW5lZFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTW9tZW50SW5wdXRPYmplY3QoaW5wdXQpIHtcbiAgICAgICAgdmFyIG9iamVjdFRlc3QgPSBpc09iamVjdChpbnB1dCkgJiYgIWlzT2JqZWN0RW1wdHkoaW5wdXQpLFxuICAgICAgICAgICAgcHJvcGVydHlUZXN0ID0gZmFsc2UsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgICAgICAgICd5ZWFycycsXG4gICAgICAgICAgICAgICAgJ3llYXInLFxuICAgICAgICAgICAgICAgICd5JyxcbiAgICAgICAgICAgICAgICAnbW9udGhzJyxcbiAgICAgICAgICAgICAgICAnbW9udGgnLFxuICAgICAgICAgICAgICAgICdNJyxcbiAgICAgICAgICAgICAgICAnZGF5cycsXG4gICAgICAgICAgICAgICAgJ2RheScsXG4gICAgICAgICAgICAgICAgJ2QnLFxuICAgICAgICAgICAgICAgICdkYXRlcycsXG4gICAgICAgICAgICAgICAgJ2RhdGUnLFxuICAgICAgICAgICAgICAgICdEJyxcbiAgICAgICAgICAgICAgICAnaG91cnMnLFxuICAgICAgICAgICAgICAgICdob3VyJyxcbiAgICAgICAgICAgICAgICAnaCcsXG4gICAgICAgICAgICAgICAgJ21pbnV0ZXMnLFxuICAgICAgICAgICAgICAgICdtaW51dGUnLFxuICAgICAgICAgICAgICAgICdtJyxcbiAgICAgICAgICAgICAgICAnc2Vjb25kcycsXG4gICAgICAgICAgICAgICAgJ3NlY29uZCcsXG4gICAgICAgICAgICAgICAgJ3MnLFxuICAgICAgICAgICAgICAgICdtaWxsaXNlY29uZHMnLFxuICAgICAgICAgICAgICAgICdtaWxsaXNlY29uZCcsXG4gICAgICAgICAgICAgICAgJ21zJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcHJvcGVydHksXG4gICAgICAgICAgICBwcm9wZXJ0eUxlbiA9IHByb3BlcnRpZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wZXJ0eUxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBwcm9wZXJ0eVRlc3QgfHwgaGFzT3duUHJvcChpbnB1dCwgcHJvcGVydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdFRlc3QgJiYgcHJvcGVydHlUZXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTnVtYmVyT3JTdHJpbmdBcnJheShpbnB1dCkge1xuICAgICAgICB2YXIgYXJyYXlUZXN0ID0gaXNBcnJheShpbnB1dCksXG4gICAgICAgICAgICBkYXRhVHlwZVRlc3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKGFycmF5VGVzdCkge1xuICAgICAgICAgICAgZGF0YVR5cGVUZXN0ID1cbiAgICAgICAgICAgICAgICBpbnB1dC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc051bWJlcihpdGVtKSAmJiBpc1N0cmluZyhpbnB1dCk7XG4gICAgICAgICAgICAgICAgfSkubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheVRlc3QgJiYgZGF0YVR5cGVUZXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQ2FsZW5kYXJTcGVjKGlucHV0KSB7XG4gICAgICAgIHZhciBvYmplY3RUZXN0ID0gaXNPYmplY3QoaW5wdXQpICYmICFpc09iamVjdEVtcHR5KGlucHV0KSxcbiAgICAgICAgICAgIHByb3BlcnR5VGVzdCA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvcGVydGllcyA9IFtcbiAgICAgICAgICAgICAgICAnc2FtZURheScsXG4gICAgICAgICAgICAgICAgJ25leHREYXknLFxuICAgICAgICAgICAgICAgICdsYXN0RGF5JyxcbiAgICAgICAgICAgICAgICAnbmV4dFdlZWsnLFxuICAgICAgICAgICAgICAgICdsYXN0V2VlaycsXG4gICAgICAgICAgICAgICAgJ3NhbWVFbHNlJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcHJvcGVydHk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIHByb3BlcnR5VGVzdCA9IHByb3BlcnR5VGVzdCB8fCBoYXNPd25Qcm9wKGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqZWN0VGVzdCAmJiBwcm9wZXJ0eVRlc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2FsZW5kYXJGb3JtYXQobXlNb21lbnQsIG5vdykge1xuICAgICAgICB2YXIgZGlmZiA9IG15TW9tZW50LmRpZmYobm93LCAnZGF5cycsIHRydWUpO1xuICAgICAgICByZXR1cm4gZGlmZiA8IC02XG4gICAgICAgICAgICA/ICdzYW1lRWxzZSdcbiAgICAgICAgICAgIDogZGlmZiA8IC0xXG4gICAgICAgICAgICAgID8gJ2xhc3RXZWVrJ1xuICAgICAgICAgICAgICA6IGRpZmYgPCAwXG4gICAgICAgICAgICAgICAgPyAnbGFzdERheSdcbiAgICAgICAgICAgICAgICA6IGRpZmYgPCAxXG4gICAgICAgICAgICAgICAgICA/ICdzYW1lRGF5J1xuICAgICAgICAgICAgICAgICAgOiBkaWZmIDwgMlxuICAgICAgICAgICAgICAgICAgICA/ICduZXh0RGF5J1xuICAgICAgICAgICAgICAgICAgICA6IGRpZmYgPCA3XG4gICAgICAgICAgICAgICAgICAgICAgPyAnbmV4dFdlZWsnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnc2FtZUVsc2UnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGVuZGFyJDEodGltZSwgZm9ybWF0cykge1xuICAgICAgICAvLyBTdXBwb3J0IGZvciBzaW5nbGUgcGFyYW1ldGVyLCBmb3JtYXRzIG9ubHkgb3ZlcmxvYWQgdG8gdGhlIGNhbGVuZGFyIGZ1bmN0aW9uXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNb21lbnRJbnB1dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBmb3JtYXRzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NhbGVuZGFyU3BlYyhhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICB0aW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY29tcGFyZSB0aGUgc3RhcnQgb2YgdG9kYXksIHZzIHRoaXMuXG4gICAgICAgIC8vIEdldHRpbmcgc3RhcnQtb2YtdG9kYXkgZGVwZW5kcyBvbiB3aGV0aGVyIHdlJ3JlIGxvY2FsL3V0Yy9vZmZzZXQgb3Igbm90LlxuICAgICAgICB2YXIgbm93ID0gdGltZSB8fCBjcmVhdGVMb2NhbCgpLFxuICAgICAgICAgICAgc29kID0gY2xvbmVXaXRoT2Zmc2V0KG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXG4gICAgICAgICAgICBmb3JtYXQgPSBob29rcy5jYWxlbmRhckZvcm1hdCh0aGlzLCBzb2QpIHx8ICdzYW1lRWxzZScsXG4gICAgICAgICAgICBvdXRwdXQgPVxuICAgICAgICAgICAgICAgIGZvcm1hdHMgJiZcbiAgICAgICAgICAgICAgICAoaXNGdW5jdGlvbihmb3JtYXRzW2Zvcm1hdF0pXG4gICAgICAgICAgICAgICAgICAgID8gZm9ybWF0c1tmb3JtYXRdLmNhbGwodGhpcywgbm93KVxuICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdHNbZm9ybWF0XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KFxuICAgICAgICAgICAgb3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgY3JlYXRlTG9jYWwobm93KSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb21lbnQodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBZnRlcihpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPiBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbElucHV0LnZhbHVlT2YoKSA8IHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0JlZm9yZShpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cykgfHwgJ21pbGxpc2Vjb25kJztcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNCZXR3ZWVuKGZyb20sIHRvLCB1bml0cywgaW5jbHVzaXZpdHkpIHtcbiAgICAgICAgdmFyIGxvY2FsRnJvbSA9IGlzTW9tZW50KGZyb20pID8gZnJvbSA6IGNyZWF0ZUxvY2FsKGZyb20pLFxuICAgICAgICAgICAgbG9jYWxUbyA9IGlzTW9tZW50KHRvKSA/IHRvIDogY3JlYXRlTG9jYWwodG8pO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbEZyb20uaXNWYWxpZCgpICYmIGxvY2FsVG8uaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGluY2x1c2l2aXR5ID0gaW5jbHVzaXZpdHkgfHwgJygpJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChpbmNsdXNpdml0eVswXSA9PT0gJygnXG4gICAgICAgICAgICAgICAgPyB0aGlzLmlzQWZ0ZXIobG9jYWxGcm9tLCB1bml0cylcbiAgICAgICAgICAgICAgICA6ICF0aGlzLmlzQmVmb3JlKGxvY2FsRnJvbSwgdW5pdHMpKSAmJlxuICAgICAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKSdcbiAgICAgICAgICAgICAgICA/IHRoaXMuaXNCZWZvcmUobG9jYWxUbywgdW5pdHMpXG4gICAgICAgICAgICAgICAgOiAhdGhpcy5pc0FmdGVyKGxvY2FsVG8sIHVuaXRzKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1NhbWUoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCksXG4gICAgICAgICAgICBpbnB1dE1zO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA9PT0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dE1zID0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJlxuICAgICAgICAgICAgICAgIGlucHV0TXMgPD0gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1NhbWVPckFmdGVyKGlucHV0LCB1bml0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQWZ0ZXIoaW5wdXQsIHVuaXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1NhbWVPckJlZm9yZShpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0JlZm9yZShpbnB1dCwgdW5pdHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpZmYoaW5wdXQsIHVuaXRzLCBhc0Zsb2F0KSB7XG4gICAgICAgIHZhciB0aGF0LCB6b25lRGVsdGEsIG91dHB1dDtcblxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKCF0aGF0LmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIHpvbmVEZWx0YSA9ICh0aGF0LnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSkgKiA2ZTQ7XG5cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDFlMztcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMFxuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gNmU0O1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjBcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAzNmU1O1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gODY0ZTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCAtIHpvbmVEZWx0YSkgLyA2MDQ4ZTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG91dHB1dCA9IHRoaXMgLSB0aGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoRGlmZihhLCBiKSB7XG4gICAgICAgIGlmIChhLmRhdGUoKSA8IGIuZGF0ZSgpKSB7XG4gICAgICAgICAgICAvLyBlbmQtb2YtbW9udGggY2FsY3VsYXRpb25zIHdvcmsgY29ycmVjdCB3aGVuIHRoZSBzdGFydCBtb250aCBoYXMgbW9yZVxuICAgICAgICAgICAgLy8gZGF5cyB0aGFuIHRoZSBlbmQgbW9udGguXG4gICAgICAgICAgICByZXR1cm4gLW1vbnRoRGlmZihiLCBhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgICAgICB2YXIgd2hvbGVNb250aERpZmYgPSAoYi55ZWFyKCkgLSBhLnllYXIoKSkgKiAxMiArIChiLm1vbnRoKCkgLSBhLm1vbnRoKCkpLFxuICAgICAgICAgICAgLy8gYiBpcyBpbiAoYW5jaG9yIC0gMSBtb250aCwgYW5jaG9yICsgMSBtb250aClcbiAgICAgICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgICAgIGFuY2hvcjIsXG4gICAgICAgICAgICBhZGp1c3Q7XG5cbiAgICAgICAgaWYgKGIgLSBhbmNob3IgPCAwKSB7XG4gICAgICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiAtIDEsICdtb250aHMnKTtcbiAgICAgICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yIC0gYW5jaG9yMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiArIDEsICdtb250aHMnKTtcbiAgICAgICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yMiAtIGFuY2hvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NoZWNrIGZvciBuZWdhdGl2ZSB6ZXJvLCByZXR1cm4gemVybyBpZiBuZWdhdGl2ZSB6ZXJvXG4gICAgICAgIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xuICAgIH1cblxuICAgIGhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuICAgIGhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgPSAnWVlZWS1NTS1ERFRISDptbTpzc1taXSc7XG5cbiAgICBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSVNPU3RyaW5nKGtlZXBPZmZzZXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV0YyA9IGtlZXBPZmZzZXQgIT09IHRydWUsXG4gICAgICAgICAgICBtID0gdXRjID8gdGhpcy5jbG9uZSgpLnV0YygpIDogdGhpcztcbiAgICAgICAgaWYgKG0ueWVhcigpIDwgMCB8fCBtLnllYXIoKSA+IDk5OTkpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQoXG4gICAgICAgICAgICAgICAgbSxcbiAgICAgICAgICAgICAgICB1dGNcbiAgICAgICAgICAgICAgICAgICAgPyAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJ1xuICAgICAgICAgICAgICAgICAgICA6ICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbihEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykpIHtcbiAgICAgICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgICAgICBpZiAodXRjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpICsgdGhpcy51dGNPZmZzZXQoKSAqIDYwICogMTAwMClcbiAgICAgICAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ1onLCBmb3JtYXRNb21lbnQobSwgJ1onKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChcbiAgICAgICAgICAgIG0sXG4gICAgICAgICAgICB1dGMgPyAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgaHVtYW4gcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2YgYSBtb21lbnQgdGhhdCBjYW5cbiAgICAgKiBhbHNvIGJlIGV2YWx1YXRlZCB0byBnZXQgYSBuZXcgbW9tZW50IHdoaWNoIGlzIHRoZSBzYW1lXG4gICAgICpcbiAgICAgKiBAbGluayBodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QvZG9jcy9hcGkvdXRpbC5odG1sI3V0aWxfY3VzdG9tX2luc3BlY3RfZnVuY3Rpb25fb25fb2JqZWN0c1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGluc3BlY3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZ1bmMgPSAnbW9tZW50JyxcbiAgICAgICAgICAgIHpvbmUgPSAnJyxcbiAgICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICBkYXRldGltZSxcbiAgICAgICAgICAgIHN1ZmZpeDtcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9jYWwoKSkge1xuICAgICAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XG4gICAgICAgICAgICB6b25lID0gJ1onO1xuICAgICAgICB9XG4gICAgICAgIHByZWZpeCA9ICdbJyArIGZ1bmMgKyAnKFwiXSc7XG4gICAgICAgIHllYXIgPSAwIDw9IHRoaXMueWVhcigpICYmIHRoaXMueWVhcigpIDw9IDk5OTkgPyAnWVlZWScgOiAnWVlZWVlZJztcbiAgICAgICAgZGF0ZXRpbWUgPSAnLU1NLUREW1RdSEg6bW06c3MuU1NTJztcbiAgICAgICAgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHByZWZpeCArIHllYXIgKyBkYXRldGltZSArIHN1ZmZpeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0KGlucHV0U3RyaW5nKSB7XG4gICAgICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgICAgICAgIGlucHV0U3RyaW5nID0gdGhpcy5pc1V0YygpXG4gICAgICAgICAgICAgICAgPyBob29rcy5kZWZhdWx0Rm9ybWF0VXRjXG4gICAgICAgICAgICAgICAgOiBob29rcy5kZWZhdWx0Rm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZyb20odGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHwgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7IHRvOiB0aGlzLCBmcm9tOiB0aW1lIH0pXG4gICAgICAgICAgICAgICAgLmxvY2FsZSh0aGlzLmxvY2FsZSgpKVxuICAgICAgICAgICAgICAgIC5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZyb21Ob3cod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8IGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyBmcm9tOiB0aGlzLCB0bzogdGltZSB9KVxuICAgICAgICAgICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcbiAgICAgICAgICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b05vdyh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xuICAgIH1cblxuICAgIC8vIElmIHBhc3NlZCBhIGxvY2FsZSBrZXksIGl0IHdpbGwgc2V0IHRoZSBsb2NhbGUgZm9yIHRoaXNcbiAgICAvLyBpbnN0YW5jZS4gIE90aGVyd2lzZSwgaXQgd2lsbCByZXR1cm4gdGhlIGxvY2FsZSBjb25maWd1cmF0aW9uXG4gICAgLy8gdmFyaWFibGVzIGZvciB0aGlzIGluc3RhbmNlLlxuICAgIGZ1bmN0aW9uIGxvY2FsZShrZXkpIHtcbiAgICAgICAgdmFyIG5ld0xvY2FsZURhdGE7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TG9jYWxlRGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsYW5nID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50KCkubGFuZygpIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIHVzZSBtb21lbnQoKS5sb2NhbGVEYXRhKCkgdG8gZ2V0IHRoZSBsYW5ndWFnZSBjb25maWd1cmF0aW9uLiBVc2UgbW9tZW50KCkubG9jYWxlKCkgdG8gY2hhbmdlIGxhbmd1YWdlcy4nLFxuICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgdmFyIE1TX1BFUl9TRUNPTkQgPSAxMDAwLFxuICAgICAgICBNU19QRVJfTUlOVVRFID0gNjAgKiBNU19QRVJfU0VDT05ELFxuICAgICAgICBNU19QRVJfSE9VUiA9IDYwICogTVNfUEVSX01JTlVURSxcbiAgICAgICAgTVNfUEVSXzQwMF9ZRUFSUyA9ICgzNjUgKiA0MDAgKyA5NykgKiAyNCAqIE1TX1BFUl9IT1VSO1xuXG4gICAgLy8gYWN0dWFsIG1vZHVsbyAtIGhhbmRsZXMgbmVnYXRpdmUgbnVtYmVycyAoZm9yIGRhdGVzIGJlZm9yZSAxOTcwKTpcbiAgICBmdW5jdGlvbiBtb2QkMShkaXZpZGVuZCwgZGl2aXNvcikge1xuICAgICAgICByZXR1cm4gKChkaXZpZGVuZCAlIGRpdmlzb3IpICsgZGl2aXNvcikgJSBkaXZpc29yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsU3RhcnRPZkRhdGUoeSwgbSwgZCkge1xuICAgICAgICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICAgICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHkgKyA0MDAsIG0sIGQpIC0gTVNfUEVSXzQwMF9ZRUFSUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCBkKS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1dGNTdGFydE9mRGF0ZSh5LCBtLCBkKSB7XG4gICAgICAgIC8vIERhdGUuVVRDIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgICAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5VVEMoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIERhdGUuVVRDKHksIG0sIGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRPZih1bml0cykge1xuICAgICAgICB2YXIgdGltZSwgc3RhcnRPZkRhdGU7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnRPZkRhdGUgPSB0aGlzLl9pc1VUQyA/IHV0Y1N0YXJ0T2ZEYXRlIDogbG9jYWxTdGFydE9mRGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIDAsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpIC0gKHRoaXMubW9udGgoKSAlIDMpLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gdGhpcy53ZWVrZGF5KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtICh0aGlzLmlzb1dlZWtkYXkoKSAtIDEpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgLT0gbW9kJDEoXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLFxuICAgICAgICAgICAgICAgICAgICBNU19QRVJfSE9VUlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9NSU5VVEUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Quc2V0VGltZSh0aW1lKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRPZih1bml0cykge1xuICAgICAgICB2YXIgdGltZSwgc3RhcnRPZkRhdGU7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJyB8fCAhdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnRPZkRhdGUgPSB0aGlzLl9pc1VUQyA/IHV0Y1N0YXJ0T2ZEYXRlIDogbG9jYWxTdGFydE9mRGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCkgKyAxLCAwLCAxKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSAtICh0aGlzLm1vbnRoKCkgJSAzKSArIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpICsgMSwgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtIHRoaXMud2Vla2RheSgpICsgN1xuICAgICAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSAodGhpcy5pc29XZWVrZGF5KCkgLSAxKSArIDdcbiAgICAgICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCksIHRoaXMuZGF0ZSgpICsgMSkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgKz1cbiAgICAgICAgICAgICAgICAgICAgTVNfUEVSX0hPVVIgLVxuICAgICAgICAgICAgICAgICAgICBtb2QkMShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgKyAodGhpcy5faXNVVEMgPyAwIDogdGhpcy51dGNPZmZzZXQoKSAqIE1TX1BFUl9NSU5VVEUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgTVNfUEVSX0hPVVJcbiAgICAgICAgICAgICAgICAgICAgKSAtXG4gICAgICAgICAgICAgICAgICAgIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lICs9IE1TX1BFUl9NSU5VVEUgLSBtb2QkMSh0aW1lLCBNU19QRVJfTUlOVVRFKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lICs9IE1TX1BFUl9TRUNPTkQgLSBtb2QkMSh0aW1lLCBNU19QRVJfU0VDT05EKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kLnNldFRpbWUodGltZSk7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2QudmFsdWVPZigpIC0gKHRoaXMuX29mZnNldCB8fCAwKSAqIDYwMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaXgoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpIC8gMTAwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9EYXRlKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgICAgIHZhciBtID0gdGhpcztcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG0ueWVhcigpLFxuICAgICAgICAgICAgbS5tb250aCgpLFxuICAgICAgICAgICAgbS5kYXRlKCksXG4gICAgICAgICAgICBtLmhvdXIoKSxcbiAgICAgICAgICAgIG0ubWludXRlKCksXG4gICAgICAgICAgICBtLnNlY29uZCgpLFxuICAgICAgICAgICAgbS5taWxsaXNlY29uZCgpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvT2JqZWN0KCkge1xuICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyczogbS55ZWFyKCksXG4gICAgICAgICAgICBtb250aHM6IG0ubW9udGgoKSxcbiAgICAgICAgICAgIGRhdGU6IG0uZGF0ZSgpLFxuICAgICAgICAgICAgaG91cnM6IG0uaG91cnMoKSxcbiAgICAgICAgICAgIG1pbnV0ZXM6IG0ubWludXRlcygpLFxuICAgICAgICAgICAgc2Vjb25kczogbS5zZWNvbmRzKCksXG4gICAgICAgICAgICBtaWxsaXNlY29uZHM6IG0ubWlsbGlzZWNvbmRzKCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgICAvLyBuZXcgRGF0ZShOYU4pLnRvSlNPTigpID09PSBudWxsXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNWYWxpZCQyKCkge1xuICAgICAgICByZXR1cm4gaXNWYWxpZCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzaW5nRmxhZ3MoKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZEF0KCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpLm92ZXJmbG93O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0aW9uRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0OiB0aGlzLl9pLFxuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLl9mLFxuICAgICAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgICAgICBpc1VUQzogdGhpcy5faXNVVEMsXG4gICAgICAgICAgICBzdHJpY3Q6IHRoaXMuX3N0cmljdCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTicsIDAsIDAsICdlcmFBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OJywgMCwgMCwgJ2VyYUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignTk5OJywgMCwgMCwgJ2VyYUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignTk5OTicsIDAsIDAsICdlcmFOYW1lJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ05OTk5OJywgMCwgMCwgJ2VyYU5hcnJvdycpO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3knLCAxXSwgJ3lvJywgJ2VyYVllYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigneScsIFsneXknLCAyXSwgMCwgJ2VyYVllYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigneScsIFsneXl5JywgM10sIDAsICdlcmFZZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3knLCBbJ3l5eXknLCA0XSwgMCwgJ2VyYVllYXInKTtcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ04nLCBtYXRjaEVyYUFiYnIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ05OJywgbWF0Y2hFcmFBYmJyKTtcbiAgICBhZGRSZWdleFRva2VuKCdOTk4nLCBtYXRjaEVyYUFiYnIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ05OTk4nLCBtYXRjaEVyYU5hbWUpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ05OTk5OJywgbWF0Y2hFcmFOYXJyb3cpO1xuXG4gICAgYWRkUGFyc2VUb2tlbihcbiAgICAgICAgWydOJywgJ05OJywgJ05OTicsICdOTk5OJywgJ05OTk5OJ10sXG4gICAgICAgIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBlcmEgPSBjb25maWcuX2xvY2FsZS5lcmFzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAgICAgICBpZiAoZXJhKSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZXJhID0gZXJhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRXJhID0gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgYWRkUmVnZXhUb2tlbigneScsIG1hdGNoVW5zaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3l5JywgbWF0Y2hVbnNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbigneXl5JywgbWF0Y2hVbnNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbigneXl5eScsIG1hdGNoVW5zaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3lvJywgbWF0Y2hFcmFZZWFyT3JkaW5hbCk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsneScsICd5eScsICd5eXknLCAneXl5eSddLCBZRUFSKTtcbiAgICBhZGRQYXJzZVRva2VuKFsneW8nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgbWF0Y2g7XG4gICAgICAgIGlmIChjb25maWcuX2xvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCkge1xuICAgICAgICAgICAgbWF0Y2ggPSBpbnB1dC5tYXRjaChjb25maWcuX2xvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLl9sb2NhbGUuZXJhWWVhck9yZGluYWxQYXJzZSkge1xuICAgICAgICAgICAgYXJyYXlbWUVBUl0gPSBjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKGlucHV0LCBtYXRjaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXMobSwgZm9ybWF0KSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5fZXJhcyB8fCBnZXRMb2NhbGUoJ2VuJykuX2VyYXM7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGhvb2tzKGVyYXNbaV0uc2luY2UpLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnNpbmNlID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICAgICAgZXJhc1tpXS51bnRpbCA9ICtJbmZpbml0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gaG9va3MoZXJhc1tpXS51bnRpbCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcmFzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXNQYXJzZShlcmFOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5lcmFzKCksXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYWJicixcbiAgICAgICAgICAgIG5hcnJvdztcbiAgICAgICAgZXJhTmFtZSA9IGVyYU5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIG5hbWUgPSBlcmFzW2ldLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGFiYnIgPSBlcmFzW2ldLmFiYnIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIG5hcnJvdyA9IGVyYXNbaV0ubmFycm93LnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdOTk4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFiYnIgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OTk4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OTk5OJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXJyb3cgPT09IGVyYU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoW25hbWUsIGFiYnIsIG5hcnJvd10uaW5kZXhPZihlcmFOYW1lKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVFcmFzQ29udmVydFllYXIoZXJhLCB5ZWFyKSB7XG4gICAgICAgIHZhciBkaXIgPSBlcmEuc2luY2UgPD0gZXJhLnVudGlsID8gKzEgOiAtMTtcbiAgICAgICAgaWYgKHllYXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tzKGVyYS5zaW5jZSkueWVhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tzKGVyYS5zaW5jZSkueWVhcigpICsgKHllYXIgLSBlcmEub2Zmc2V0KSAqIGRpcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVyYU5hbWUoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJhTmFycm93KCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLm5hcnJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcmFBYmJyKCkge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICBlcmFzID0gdGhpcy5sb2NhbGVEYXRhKCkuZXJhcygpO1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXJhcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIC8vIHRydW5jYXRlIHRpbWVcbiAgICAgICAgICAgIHZhbCA9IHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG5cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLmFiYnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5hYmJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVyYVllYXIoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGRpcixcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgZGlyID0gZXJhc1tpXS5zaW5jZSA8PSBlcmFzW2ldLnVudGlsID8gKzEgOiAtMTtcblxuICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChlcmFzW2ldLnNpbmNlIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS51bnRpbCkgfHxcbiAgICAgICAgICAgICAgICAoZXJhc1tpXS51bnRpbCA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0uc2luY2UpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAodGhpcy55ZWFyKCkgLSBob29rcyhlcmFzW2ldLnNpbmNlKS55ZWFyKCkpICogZGlyICtcbiAgICAgICAgICAgICAgICAgICAgZXJhc1tpXS5vZmZzZXRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVyYXNOYW1lUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfZXJhc05hbWVSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hbWVSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzQWJiclJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNBYmJyUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZUVyYXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1N0cmljdCA/IHRoaXMuX2VyYXNBYmJyUmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX2VyYXNOYXJyb3dSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc05hcnJvd1JlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoRXJhQWJicihpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc0FiYnJSZWdleChpc1N0cmljdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hFcmFOYW1lKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5lcmFzTmFtZVJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEVyYU5hcnJvdyhpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZXJhc05hcnJvd1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEVyYVllYXJPcmRpbmFsKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5fZXJhWWVhck9yZGluYWxSZWdleCB8fCBtYXRjaFVuc2lnbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVFcmFzUGFyc2UoKSB7XG4gICAgICAgIHZhciBhYmJyUGllY2VzID0gW10sXG4gICAgICAgICAgICBuYW1lUGllY2VzID0gW10sXG4gICAgICAgICAgICBuYXJyb3dQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGVyYXNOYW1lLFxuICAgICAgICAgICAgZXJhc0FiYnIsXG4gICAgICAgICAgICBlcmFzTmFycm93LFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMuZXJhcygpO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgZXJhc05hbWUgPSByZWdleEVzY2FwZShlcmFzW2ldLm5hbWUpO1xuICAgICAgICAgICAgZXJhc0FiYnIgPSByZWdleEVzY2FwZShlcmFzW2ldLmFiYnIpO1xuICAgICAgICAgICAgZXJhc05hcnJvdyA9IHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFycm93KTtcblxuICAgICAgICAgICAgbmFtZVBpZWNlcy5wdXNoKGVyYXNOYW1lKTtcbiAgICAgICAgICAgIGFiYnJQaWVjZXMucHVzaChlcmFzQWJicik7XG4gICAgICAgICAgICBuYXJyb3dQaWVjZXMucHVzaChlcmFzTmFycm93KTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2goZXJhc05hbWUpO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChlcmFzQWJicik7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGVyYXNOYXJyb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXJhc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9lcmFzTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbmFtZVBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX2VyYXNBYmJyUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBhYmJyUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fZXJhc05hcnJvd1JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBuYXJyb3dQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW4sIGdldHRlcikge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbigwLCBbdG9rZW4sIHRva2VuLmxlbmd0aF0sIDAsIGdldHRlcik7XG4gICAgfVxuXG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICd3ZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgJ3dlZWtZZWFyJyk7XG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsICdpc29XZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2cnLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignR0cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignR0dHRycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgICAgIFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sXG4gICAgICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMildID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZ2cnLCAnR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW5dID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB0aGlzLndlZWsoKSxcbiAgICAgICAgICAgIHRoaXMud2Vla2RheSgpICsgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG95XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB0aGlzLmlzb1dlZWsoKSxcbiAgICAgICAgICAgIHRoaXMuaXNvV2Vla2RheSgpLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCAxLCA0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJU09XZWVrc0luSVNPV2Vla1llYXIoKSB7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLmlzb1dlZWtZZWFyKCksIDEsIDQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdlZWtzSW5ZZWFyKCkge1xuICAgICAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2Vla3NJbldlZWtZZWFyKCkge1xuICAgICAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMud2Vla1llYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla3NUYXJnZXQ7XG4gICAgICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla09mWWVhcih0aGlzLCBkb3csIGRveSkueWVhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgICAgICAgICAgIGlmICh3ZWVrID4gd2Vla3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB3ZWVrID0gd2Vla3NUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2V0V2Vla0FsbC5jYWxsKHRoaXMsIGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRXZWVrQWxsKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgICAgICB2YXIgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpLFxuICAgICAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG5cbiAgICAgICAgdGhpcy55ZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgICAgIHRoaXMubW9udGgoZGF0ZS5nZXRVVENNb250aCgpKTtcbiAgICAgICAgdGhpcy5kYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1EnLCAwLCAnUW8nLCAncXVhcnRlcicpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG4gICAgYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGxcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpXG4gICAgICAgICAgICA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgKHRoaXMubW9udGgoKSAlIDMpKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyXSwgJ0RvJywgJ2RhdGUnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ0QnLCBtYXRjaDF0bzIsIG1hdGNoMXRvMk5vTGVhZGluZ1plcm8pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0REJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgICAgICByZXR1cm4gaXNTdHJpY3RcbiAgICAgICAgICAgID8gbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlXG4gICAgICAgICAgICA6IGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQ7XG4gICAgfSk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbiAgICBhZGRQYXJzZVRva2VuKCdEbycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbREFURV0gPSB0b0ludChpbnB1dC5tYXRjaChtYXRjaDF0bzIpWzBdKTtcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXREYXlPZk1vbnRoID0gbWFrZUdldFNldCgnRGF0ZScsIHRydWUpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDNdLCAnREREbycsICdkYXlPZlllYXInKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XG4gICAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mWWVhcihpbnB1dCkge1xuICAgICAgICB2YXIgZGF5T2ZZZWFyID1cbiAgICAgICAgICAgIE1hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTVcbiAgICAgICAgICAgICkgKyAxO1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKGlucHV0IC0gZGF5T2ZZZWFyLCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdtJywgbWF0Y2gxdG8yLCBtYXRjaDF0bzJIYXNaZXJvKTtcbiAgICBhZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyXSwgMCwgJ3NlY29uZCcpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbigncycsIG1hdGNoMXRvMiwgbWF0Y2gxdG8ySGFzWmVybyk7XG4gICAgYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRTZWNvbmQgPSBtYWtlR2V0U2V0KCdTZWNvbmRzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMDApO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTUycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTUycsIDNdLCAwLCAnbWlsbGlzZWNvbmQnKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1MnLCA0XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTUycsIDVdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1MnLCA2XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1MnLCA3XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTUycsIDhdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTU1MnLCA5XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbiAgICB9KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XG4gICAgYWRkUmVnZXhUb2tlbignU1MnLCBtYXRjaDF0bzMsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignU1NTJywgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG4gICAgdmFyIHRva2VuLCBnZXRTZXRNaWxsaXNlY29uZDtcbiAgICBmb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W01JTExJU0VDT05EXSA9IHRvSW50KCgnMC4nICsgaW5wdXQpICogMTAwMCk7XG4gICAgfVxuXG4gICAgZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgICAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBwYXJzZU1zKTtcbiAgICB9XG5cbiAgICBnZXRTZXRNaWxsaXNlY29uZCA9IG1ha2VHZXRTZXQoJ01pbGxpc2Vjb25kcycsIGZhbHNlKTtcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCd6JywgMCwgMCwgJ3pvbmVBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3p6JywgMCwgMCwgJ3pvbmVOYW1lJyk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRab25lQWJicigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRab25lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xuICAgIH1cblxuICAgIHZhciBwcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5hZGQgPSBhZGQ7XG4gICAgcHJvdG8uY2FsZW5kYXIgPSBjYWxlbmRhciQxO1xuICAgIHByb3RvLmNsb25lID0gY2xvbmU7XG4gICAgcHJvdG8uZGlmZiA9IGRpZmY7XG4gICAgcHJvdG8uZW5kT2YgPSBlbmRPZjtcbiAgICBwcm90by5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgcHJvdG8uZnJvbSA9IGZyb207XG4gICAgcHJvdG8uZnJvbU5vdyA9IGZyb21Ob3c7XG4gICAgcHJvdG8udG8gPSB0bztcbiAgICBwcm90by50b05vdyA9IHRvTm93O1xuICAgIHByb3RvLmdldCA9IHN0cmluZ0dldDtcbiAgICBwcm90by5pbnZhbGlkQXQgPSBpbnZhbGlkQXQ7XG4gICAgcHJvdG8uaXNBZnRlciA9IGlzQWZ0ZXI7XG4gICAgcHJvdG8uaXNCZWZvcmUgPSBpc0JlZm9yZTtcbiAgICBwcm90by5pc0JldHdlZW4gPSBpc0JldHdlZW47XG4gICAgcHJvdG8uaXNTYW1lID0gaXNTYW1lO1xuICAgIHByb3RvLmlzU2FtZU9yQWZ0ZXIgPSBpc1NhbWVPckFmdGVyO1xuICAgIHByb3RvLmlzU2FtZU9yQmVmb3JlID0gaXNTYW1lT3JCZWZvcmU7XG4gICAgcHJvdG8uaXNWYWxpZCA9IGlzVmFsaWQkMjtcbiAgICBwcm90by5sYW5nID0gbGFuZztcbiAgICBwcm90by5sb2NhbGUgPSBsb2NhbGU7XG4gICAgcHJvdG8ubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG4gICAgcHJvdG8ubWF4ID0gcHJvdG90eXBlTWF4O1xuICAgIHByb3RvLm1pbiA9IHByb3RvdHlwZU1pbjtcbiAgICBwcm90by5wYXJzaW5nRmxhZ3MgPSBwYXJzaW5nRmxhZ3M7XG4gICAgcHJvdG8uc2V0ID0gc3RyaW5nU2V0O1xuICAgIHByb3RvLnN0YXJ0T2YgPSBzdGFydE9mO1xuICAgIHByb3RvLnN1YnRyYWN0ID0gc3VidHJhY3Q7XG4gICAgcHJvdG8udG9BcnJheSA9IHRvQXJyYXk7XG4gICAgcHJvdG8udG9PYmplY3QgPSB0b09iamVjdDtcbiAgICBwcm90by50b0RhdGUgPSB0b0RhdGU7XG4gICAgcHJvdG8udG9JU09TdHJpbmcgPSB0b0lTT1N0cmluZztcbiAgICBwcm90by5pbnNwZWN0ID0gaW5zcGVjdDtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmZvciAhPSBudWxsKSB7XG4gICAgICAgIHByb3RvW1N5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJyldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdNb21lbnQ8JyArIHRoaXMuZm9ybWF0KCkgKyAnPic7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RvLnRvSlNPTiA9IHRvSlNPTjtcbiAgICBwcm90by50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgIHByb3RvLnVuaXggPSB1bml4O1xuICAgIHByb3RvLnZhbHVlT2YgPSB2YWx1ZU9mO1xuICAgIHByb3RvLmNyZWF0aW9uRGF0YSA9IGNyZWF0aW9uRGF0YTtcbiAgICBwcm90by5lcmFOYW1lID0gZ2V0RXJhTmFtZTtcbiAgICBwcm90by5lcmFOYXJyb3cgPSBnZXRFcmFOYXJyb3c7XG4gICAgcHJvdG8uZXJhQWJiciA9IGdldEVyYUFiYnI7XG4gICAgcHJvdG8uZXJhWWVhciA9IGdldEVyYVllYXI7XG4gICAgcHJvdG8ueWVhciA9IGdldFNldFllYXI7XG4gICAgcHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XG4gICAgcHJvdG8ud2Vla1llYXIgPSBnZXRTZXRXZWVrWWVhcjtcbiAgICBwcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xuICAgIHByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG4gICAgcHJvdG8ubW9udGggPSBnZXRTZXRNb250aDtcbiAgICBwcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xuICAgIHByb3RvLndlZWsgPSBwcm90by53ZWVrcyA9IGdldFNldFdlZWs7XG4gICAgcHJvdG8uaXNvV2VlayA9IHByb3RvLmlzb1dlZWtzID0gZ2V0U2V0SVNPV2VlaztcbiAgICBwcm90by53ZWVrc0luWWVhciA9IGdldFdlZWtzSW5ZZWFyO1xuICAgIHByb3RvLndlZWtzSW5XZWVrWWVhciA9IGdldFdlZWtzSW5XZWVrWWVhcjtcbiAgICBwcm90by5pc29XZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyO1xuICAgIHByb3RvLmlzb1dlZWtzSW5JU09XZWVrWWVhciA9IGdldElTT1dlZWtzSW5JU09XZWVrWWVhcjtcbiAgICBwcm90by5kYXRlID0gZ2V0U2V0RGF5T2ZNb250aDtcbiAgICBwcm90by5kYXkgPSBwcm90by5kYXlzID0gZ2V0U2V0RGF5T2ZXZWVrO1xuICAgIHByb3RvLndlZWtkYXkgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG4gICAgcHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcbiAgICBwcm90by5kYXlPZlllYXIgPSBnZXRTZXREYXlPZlllYXI7XG4gICAgcHJvdG8uaG91ciA9IHByb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcbiAgICBwcm90by5taW51dGUgPSBwcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xuICAgIHByb3RvLnNlY29uZCA9IHByb3RvLnNlY29uZHMgPSBnZXRTZXRTZWNvbmQ7XG4gICAgcHJvdG8ubWlsbGlzZWNvbmQgPSBwcm90by5taWxsaXNlY29uZHMgPSBnZXRTZXRNaWxsaXNlY29uZDtcbiAgICBwcm90by51dGNPZmZzZXQgPSBnZXRTZXRPZmZzZXQ7XG4gICAgcHJvdG8udXRjID0gc2V0T2Zmc2V0VG9VVEM7XG4gICAgcHJvdG8ubG9jYWwgPSBzZXRPZmZzZXRUb0xvY2FsO1xuICAgIHByb3RvLnBhcnNlWm9uZSA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xuICAgIHByb3RvLmhhc0FsaWduZWRIb3VyT2Zmc2V0ID0gaGFzQWxpZ25lZEhvdXJPZmZzZXQ7XG4gICAgcHJvdG8uaXNEU1QgPSBpc0RheWxpZ2h0U2F2aW5nVGltZTtcbiAgICBwcm90by5pc0xvY2FsID0gaXNMb2NhbDtcbiAgICBwcm90by5pc1V0Y09mZnNldCA9IGlzVXRjT2Zmc2V0O1xuICAgIHByb3RvLmlzVXRjID0gaXNVdGM7XG4gICAgcHJvdG8uaXNVVEMgPSBpc1V0YztcbiAgICBwcm90by56b25lQWJiciA9IGdldFpvbmVBYmJyO1xuICAgIHByb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG4gICAgcHJvdG8uZGF0ZXMgPSBkZXByZWNhdGUoXG4gICAgICAgICdkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLicsXG4gICAgICAgIGdldFNldERheU9mTW9udGhcbiAgICApO1xuICAgIHByb3RvLm1vbnRocyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbnRocyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgbW9udGggaW5zdGVhZCcsXG4gICAgICAgIGdldFNldE1vbnRoXG4gICAgKTtcbiAgICBwcm90by55ZWFycyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQnLFxuICAgICAgICBnZXRTZXRZZWFyXG4gICAgKTtcbiAgICBwcm90by56b25lID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50KCkuem9uZSBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50KCkudXRjT2Zmc2V0IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3Mvem9uZS8nLFxuICAgICAgICBnZXRTZXRab25lXG4gICAgKTtcbiAgICBwcm90by5pc0RTVFNoaWZ0ZWQgPSBkZXByZWNhdGUoXG4gICAgICAgICdpc0RTVFNoaWZ0ZWQgaXMgZGVwcmVjYXRlZC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZHN0LXNoaWZ0ZWQvIGZvciBtb3JlIGluZm9ybWF0aW9uJyxcbiAgICAgICAgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVuaXgoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0ICogMTAwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5ab25lKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvJDEgPSBMb2NhbGUucHJvdG90eXBlO1xuXG4gICAgcHJvdG8kMS5jYWxlbmRhciA9IGNhbGVuZGFyO1xuICAgIHByb3RvJDEubG9uZ0RhdGVGb3JtYXQgPSBsb25nRGF0ZUZvcm1hdDtcbiAgICBwcm90byQxLmludmFsaWREYXRlID0gaW52YWxpZERhdGU7XG4gICAgcHJvdG8kMS5vcmRpbmFsID0gb3JkaW5hbDtcbiAgICBwcm90byQxLnByZXBhcnNlID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xuICAgIHByb3RvJDEucG9zdGZvcm1hdCA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbiAgICBwcm90byQxLnJlbGF0aXZlVGltZSA9IHJlbGF0aXZlVGltZTtcbiAgICBwcm90byQxLnBhc3RGdXR1cmUgPSBwYXN0RnV0dXJlO1xuICAgIHByb3RvJDEuc2V0ID0gc2V0O1xuICAgIHByb3RvJDEuZXJhcyA9IGxvY2FsZUVyYXM7XG4gICAgcHJvdG8kMS5lcmFzUGFyc2UgPSBsb2NhbGVFcmFzUGFyc2U7XG4gICAgcHJvdG8kMS5lcmFzQ29udmVydFllYXIgPSBsb2NhbGVFcmFzQ29udmVydFllYXI7XG4gICAgcHJvdG8kMS5lcmFzQWJiclJlZ2V4ID0gZXJhc0FiYnJSZWdleDtcbiAgICBwcm90byQxLmVyYXNOYW1lUmVnZXggPSBlcmFzTmFtZVJlZ2V4O1xuICAgIHByb3RvJDEuZXJhc05hcnJvd1JlZ2V4ID0gZXJhc05hcnJvd1JlZ2V4O1xuXG4gICAgcHJvdG8kMS5tb250aHMgPSBsb2NhbGVNb250aHM7XG4gICAgcHJvdG8kMS5tb250aHNTaG9ydCA9IGxvY2FsZU1vbnRoc1Nob3J0O1xuICAgIHByb3RvJDEubW9udGhzUGFyc2UgPSBsb2NhbGVNb250aHNQYXJzZTtcbiAgICBwcm90byQxLm1vbnRoc1JlZ2V4ID0gbW9udGhzUmVnZXg7XG4gICAgcHJvdG8kMS5tb250aHNTaG9ydFJlZ2V4ID0gbW9udGhzU2hvcnRSZWdleDtcbiAgICBwcm90byQxLndlZWsgPSBsb2NhbGVXZWVrO1xuICAgIHByb3RvJDEuZmlyc3REYXlPZlllYXIgPSBsb2NhbGVGaXJzdERheU9mWWVhcjtcbiAgICBwcm90byQxLmZpcnN0RGF5T2ZXZWVrID0gbG9jYWxlRmlyc3REYXlPZldlZWs7XG5cbiAgICBwcm90byQxLndlZWtkYXlzID0gbG9jYWxlV2Vla2RheXM7XG4gICAgcHJvdG8kMS53ZWVrZGF5c01pbiA9IGxvY2FsZVdlZWtkYXlzTWluO1xuICAgIHByb3RvJDEud2Vla2RheXNTaG9ydCA9IGxvY2FsZVdlZWtkYXlzU2hvcnQ7XG4gICAgcHJvdG8kMS53ZWVrZGF5c1BhcnNlID0gbG9jYWxlV2Vla2RheXNQYXJzZTtcblxuICAgIHByb3RvJDEud2Vla2RheXNSZWdleCA9IHdlZWtkYXlzUmVnZXg7XG4gICAgcHJvdG8kMS53ZWVrZGF5c1Nob3J0UmVnZXggPSB3ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgcHJvdG8kMS53ZWVrZGF5c01pblJlZ2V4ID0gd2Vla2RheXNNaW5SZWdleDtcblxuICAgIHByb3RvJDEuaXNQTSA9IGxvY2FsZUlzUE07XG4gICAgcHJvdG8kMS5tZXJpZGllbSA9IGxvY2FsZU1lcmlkaWVtO1xuXG4gICAgZnVuY3Rpb24gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgICAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgICAgICB1dGMgPSBjcmVhdGVVVEMoKS5zZXQoc2V0dGVyLCBpbmRleCk7XG4gICAgICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIG91dCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCBpLCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvLyAoKVxuICAgIC8vICg1KVxuICAgIC8vIChmbXQsIDUpXG4gICAgLy8gKGZtdClcbiAgICAvLyAodHJ1ZSlcbiAgICAvLyAodHJ1ZSwgNSlcbiAgICAvLyAodHJ1ZSwgZm10LCA1KVxuICAgIC8vICh0cnVlLCBmbXQpXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpLFxuICAgICAgICAgICAgc2hpZnQgPSBsb2NhbGVTb3J0ZWQgPyBsb2NhbGUuX3dlZWsuZG93IDogMCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBvdXQgPSBbXTtcblxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRocyhmb3JtYXQsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRoc1Nob3J0KGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHNTaG9ydCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5cyhsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNTaG9ydCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNNaW4nKTtcbiAgICB9XG5cbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgICAgICBlcmFzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2luY2U6ICcwMDAxLTAxLTAxJyxcbiAgICAgICAgICAgICAgICB1bnRpbDogK0luZmluaXR5LFxuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQW5ubyBEb21pbmknLFxuICAgICAgICAgICAgICAgIG5hcnJvdzogJ0FEJyxcbiAgICAgICAgICAgICAgICBhYmJyOiAnQUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5jZTogJzAwMDAtMTItMzEnLFxuICAgICAgICAgICAgICAgIHVudGlsOiAtSW5maW5pdHksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdCZWZvcmUgQ2hyaXN0JyxcbiAgICAgICAgICAgICAgICBuYXJyb3c6ICdCQycsXG4gICAgICAgICAgICAgICAgYWJicjogJ0JDJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgICAgIG91dHB1dCA9XG4gICAgICAgICAgICAgICAgICAgIHRvSW50KChudW1iZXIgJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0aCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdyZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RoJztcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cbiAgICBob29rcy5sYW5nID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4nLFxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGVcbiAgICApO1xuICAgIGhvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50LmxhbmdEYXRhIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlRGF0YSBpbnN0ZWFkLicsXG4gICAgICAgIGdldExvY2FsZVxuICAgICk7XG5cbiAgICB2YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG4gICAgZnVuY3Rpb24gYWJzKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgICAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICAgICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICAgICAgZGF0YS5taW51dGVzID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xuICAgICAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICAgICAgZGF0YS5tb250aHMgPSBtYXRoQWJzKGRhdGEubW9udGhzKTtcbiAgICAgICAgZGF0YS55ZWFycyA9IG1hdGhBYnMoZGF0YS55ZWFycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3VidHJhY3QkMShkdXJhdGlvbiwgaW5wdXQsIHZhbHVlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgICAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XG4gICAgICAgIGR1cmF0aW9uLl9kYXlzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9kYXlzO1xuICAgICAgICBkdXJhdGlvbi5fbW9udGhzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLl9idWJibGUoKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG4gICAgZnVuY3Rpb24gYWRkJDEoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgMSk7XG4gICAgfVxuXG4gICAgLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdCQxKGlucHV0LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIC0xKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNDZWlsKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1YmJsZSgpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzLFxuICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzLFxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICBzZWNvbmRzLFxuICAgICAgICAgICAgbWludXRlcyxcbiAgICAgICAgICAgIGhvdXJzLFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBtb250aHNGcm9tRGF5cztcblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gICAgICAgIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XG4gICAgICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgICAgICAgICBkYXlzID0gMDtcbiAgICAgICAgICAgIG1vbnRocyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gICAgICAgIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgICAgICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgICAgIHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICAgICAgZGF0YS5zZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgICAgIG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgICAgICAgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgICAgICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICAgICAgICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgICAgICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgICAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gICAgICAgIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAgICAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgICAgICBtb250aHMgJT0gMTI7XG5cbiAgICAgICAgZGF0YS5kYXlzID0gZGF5cztcbiAgICAgICAgZGF0YS5tb250aHMgPSBtb250aHM7XG4gICAgICAgIGRhdGEueWVhcnMgPSB5ZWFycztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzVG9Nb250aHMoZGF5cykge1xuICAgICAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgICAgIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICAgICAgICByZXR1cm4gKGRheXMgKiA0ODAwKSAvIDE0NjA5NztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGhzKSB7XG4gICAgICAgIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICAgICAgICByZXR1cm4gKG1vbnRocyAqIDE0NjA5NykgLyA0ODAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzKHVuaXRzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRheXMsXG4gICAgICAgICAgICBtb250aHMsXG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAncXVhcnRlcicgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAzO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzIC8gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXG4gICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xuICAgICAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAxNDQwICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUFzKGFsaWFzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpLFxuICAgICAgICBhc1NlY29uZHMgPSBtYWtlQXMoJ3MnKSxcbiAgICAgICAgYXNNaW51dGVzID0gbWFrZUFzKCdtJyksXG4gICAgICAgIGFzSG91cnMgPSBtYWtlQXMoJ2gnKSxcbiAgICAgICAgYXNEYXlzID0gbWFrZUFzKCdkJyksXG4gICAgICAgIGFzV2Vla3MgPSBtYWtlQXMoJ3cnKSxcbiAgICAgICAgYXNNb250aHMgPSBtYWtlQXMoJ00nKSxcbiAgICAgICAgYXNRdWFydGVycyA9IG1ha2VBcygnUScpLFxuICAgICAgICBhc1llYXJzID0gbWFrZUFzKCd5JyksXG4gICAgICAgIHZhbHVlT2YkMSA9IGFzTWlsbGlzZWNvbmRzO1xuXG4gICAgZnVuY3Rpb24gY2xvbmUkMSgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldCQyKHVuaXRzKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzW3VuaXRzICsgJ3MnXSgpIDogTmFOO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VHZXR0ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5fZGF0YVtuYW1lXSA6IE5hTjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gbWFrZUdldHRlcignbWlsbGlzZWNvbmRzJyksXG4gICAgICAgIHNlY29uZHMgPSBtYWtlR2V0dGVyKCdzZWNvbmRzJyksXG4gICAgICAgIG1pbnV0ZXMgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyksXG4gICAgICAgIGhvdXJzID0gbWFrZUdldHRlcignaG91cnMnKSxcbiAgICAgICAgZGF5cyA9IG1ha2VHZXR0ZXIoJ2RheXMnKSxcbiAgICAgICAgbW9udGhzID0gbWFrZUdldHRlcignbW9udGhzJyksXG4gICAgICAgIHllYXJzID0gbWFrZUdldHRlcigneWVhcnMnKTtcblxuICAgIGZ1bmN0aW9uIHdlZWtzKCkge1xuICAgICAgICByZXR1cm4gYWJzRmxvb3IodGhpcy5kYXlzKCkgLyA3KTtcbiAgICB9XG5cbiAgICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kLFxuICAgICAgICB0aHJlc2hvbGRzID0ge1xuICAgICAgICAgICAgc3M6IDQ0LCAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcbiAgICAgICAgICAgIHM6IDQ1LCAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxuICAgICAgICAgICAgbTogNDUsIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgICAgICAgICAgaDogMjIsIC8vIGhvdXJzIHRvIGRheVxuICAgICAgICAgICAgZDogMjYsIC8vIGRheXMgdG8gbW9udGgvd2Vla1xuICAgICAgICAgICAgdzogbnVsbCwgLy8gd2Vla3MgdG8gbW9udGhcbiAgICAgICAgICAgIE06IDExLCAvLyBtb250aHMgdG8geWVhclxuICAgICAgICB9O1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbiAgICBmdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW1iZXIgfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxhdGl2ZVRpbWUkMShwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgdGhyZXNob2xkcywgbG9jYWxlKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKSxcbiAgICAgICAgICAgIHNlY29uZHMgPSByb3VuZChkdXJhdGlvbi5hcygncycpKSxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKSxcbiAgICAgICAgICAgIGhvdXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSksXG4gICAgICAgICAgICBkYXlzID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSksXG4gICAgICAgICAgICBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKSxcbiAgICAgICAgICAgIHdlZWtzID0gcm91bmQoZHVyYXRpb24uYXMoJ3cnKSksXG4gICAgICAgICAgICB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpLFxuICAgICAgICAgICAgYSA9XG4gICAgICAgICAgICAgICAgKHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSkgfHxcbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3NzJywgc2Vjb25kc10pIHx8XG4gICAgICAgICAgICAgICAgKG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSkgfHxcbiAgICAgICAgICAgICAgICAobWludXRlcyA8IHRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10pIHx8XG4gICAgICAgICAgICAgICAgKGhvdXJzIDw9IDEgJiYgWydoJ10pIHx8XG4gICAgICAgICAgICAgICAgKGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10pIHx8XG4gICAgICAgICAgICAgICAgKGRheXMgPD0gMSAmJiBbJ2QnXSkgfHxcbiAgICAgICAgICAgICAgICAoZGF5cyA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10pO1xuXG4gICAgICAgIGlmICh0aHJlc2hvbGRzLncgIT0gbnVsbCkge1xuICAgICAgICAgICAgYSA9XG4gICAgICAgICAgICAgICAgYSB8fFxuICAgICAgICAgICAgICAgICh3ZWVrcyA8PSAxICYmIFsndyddKSB8fFxuICAgICAgICAgICAgICAgICh3ZWVrcyA8IHRocmVzaG9sZHMudyAmJiBbJ3d3Jywgd2Vla3NdKTtcbiAgICAgICAgfVxuICAgICAgICBhID0gYSB8fFxuICAgICAgICAgICAgKG1vbnRocyA8PSAxICYmIFsnTSddKSB8fFxuICAgICAgICAgICAgKG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSkgfHxcbiAgICAgICAgICAgICh5ZWFycyA8PSAxICYmIFsneSddKSB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gICAgICAgIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAgICAgICBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgICAgICAgYVs0XSA9IGxvY2FsZTtcbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGEpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbiAgICBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByb3VuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJvdW5kaW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbiAgICBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkLCBsaW1pdCkge1xuICAgICAgICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgICAgICAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgICAgICAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGh1bWFuaXplKGFyZ1dpdGhTdWZmaXgsIGFyZ1RocmVzaG9sZHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2l0aFN1ZmZpeCA9IGZhbHNlLFxuICAgICAgICAgICAgdGggPSB0aHJlc2hvbGRzLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnV2l0aFN1ZmZpeCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGFyZ1RocmVzaG9sZHMgPSBhcmdXaXRoU3VmZml4O1xuICAgICAgICAgICAgYXJnV2l0aFN1ZmZpeCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXJnV2l0aFN1ZmZpeCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB3aXRoU3VmZml4ID0gYXJnV2l0aFN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFyZ1RocmVzaG9sZHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aCA9IE9iamVjdC5hc3NpZ24oe30sIHRocmVzaG9sZHMsIGFyZ1RocmVzaG9sZHMpO1xuICAgICAgICAgICAgaWYgKGFyZ1RocmVzaG9sZHMucyAhPSBudWxsICYmIGFyZ1RocmVzaG9sZHMuc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoLnNzID0gYXJnVGhyZXNob2xkcy5zIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICBvdXRwdXQgPSByZWxhdGl2ZVRpbWUkMSh0aGlzLCAhd2l0aFN1ZmZpeCwgdGgsIGxvY2FsZSk7XG5cbiAgICAgICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgdmFyIGFicyQxID0gTWF0aC5hYnM7XG5cbiAgICBmdW5jdGlvbiBzaWduKHgpIHtcbiAgICAgICAgcmV0dXJuICh4ID4gMCkgLSAoeCA8IDApIHx8ICt4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSVNPU3RyaW5nJDEoKSB7XG4gICAgICAgIC8vIGZvciBJU08gc3RyaW5ncyB3ZSBkbyBub3QgdXNlIHRoZSBub3JtYWwgYnViYmxpbmcgcnVsZXM6XG4gICAgICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcbiAgICAgICAgLy8gICogZGF5cyBkbyBub3QgYnViYmxlIGF0IGFsbFxuICAgICAgICAvLyAgKiBtb250aHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIHllYXJzXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXG4gICAgICAgIC8vICh0aGluayBvZiBjbG9jayBjaGFuZ2VzKVxuICAgICAgICAvLyBhbmQgYWxzbyBub3QgYmV0d2VlbiBkYXlzIGFuZCBtb250aHMgKDI4LTMxIGRheXMgcGVyIG1vbnRoKVxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWNvbmRzID0gYWJzJDEodGhpcy5fbWlsbGlzZWNvbmRzKSAvIDEwMDAsXG4gICAgICAgICAgICBkYXlzID0gYWJzJDEodGhpcy5fZGF5cyksXG4gICAgICAgICAgICBtb250aHMgPSBhYnMkMSh0aGlzLl9tb250aHMpLFxuICAgICAgICAgICAgbWludXRlcyxcbiAgICAgICAgICAgIGhvdXJzLFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgdG90YWwgPSB0aGlzLmFzU2Vjb25kcygpLFxuICAgICAgICAgICAgdG90YWxTaWduLFxuICAgICAgICAgICAgeW1TaWduLFxuICAgICAgICAgICAgZGF5c1NpZ24sXG4gICAgICAgICAgICBobXNTaWduO1xuXG4gICAgICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cbiAgICAgICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiAnUDBEJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDM2MDAgc2Vjb25kcyAtPiA2MCBtaW51dGVzIC0+IDEgaG91clxuICAgICAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgICAgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgICAgICBzZWNvbmRzICU9IDYwO1xuICAgICAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgICAgIG1vbnRocyAlPSAxMjtcblxuICAgICAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgICAgICBzID0gc2Vjb25kcyA/IHNlY29uZHMudG9GaXhlZCgzKS5yZXBsYWNlKC9cXC4/MCskLywgJycpIDogJyc7XG5cbiAgICAgICAgdG90YWxTaWduID0gdG90YWwgPCAwID8gJy0nIDogJyc7XG4gICAgICAgIHltU2lnbiA9IHNpZ24odGhpcy5fbW9udGhzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICAgICAgZGF5c1NpZ24gPSBzaWduKHRoaXMuX2RheXMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgICAgICBobXNTaWduID0gc2lnbih0aGlzLl9taWxsaXNlY29uZHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0b3RhbFNpZ24gK1xuICAgICAgICAgICAgJ1AnICtcbiAgICAgICAgICAgICh5ZWFycyA/IHltU2lnbiArIHllYXJzICsgJ1knIDogJycpICtcbiAgICAgICAgICAgIChtb250aHMgPyB5bVNpZ24gKyBtb250aHMgKyAnTScgOiAnJykgK1xuICAgICAgICAgICAgKGRheXMgPyBkYXlzU2lnbiArIGRheXMgKyAnRCcgOiAnJykgK1xuICAgICAgICAgICAgKGhvdXJzIHx8IG1pbnV0ZXMgfHwgc2Vjb25kcyA/ICdUJyA6ICcnKSArXG4gICAgICAgICAgICAoaG91cnMgPyBobXNTaWduICsgaG91cnMgKyAnSCcgOiAnJykgK1xuICAgICAgICAgICAgKG1pbnV0ZXMgPyBobXNTaWduICsgbWludXRlcyArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAoc2Vjb25kcyA/IGhtc1NpZ24gKyBzICsgJ1MnIDogJycpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvJDIgPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbiAgICBwcm90byQyLmlzVmFsaWQgPSBpc1ZhbGlkJDE7XG4gICAgcHJvdG8kMi5hYnMgPSBhYnM7XG4gICAgcHJvdG8kMi5hZGQgPSBhZGQkMTtcbiAgICBwcm90byQyLnN1YnRyYWN0ID0gc3VidHJhY3QkMTtcbiAgICBwcm90byQyLmFzID0gYXM7XG4gICAgcHJvdG8kMi5hc01pbGxpc2Vjb25kcyA9IGFzTWlsbGlzZWNvbmRzO1xuICAgIHByb3RvJDIuYXNTZWNvbmRzID0gYXNTZWNvbmRzO1xuICAgIHByb3RvJDIuYXNNaW51dGVzID0gYXNNaW51dGVzO1xuICAgIHByb3RvJDIuYXNIb3VycyA9IGFzSG91cnM7XG4gICAgcHJvdG8kMi5hc0RheXMgPSBhc0RheXM7XG4gICAgcHJvdG8kMi5hc1dlZWtzID0gYXNXZWVrcztcbiAgICBwcm90byQyLmFzTW9udGhzID0gYXNNb250aHM7XG4gICAgcHJvdG8kMi5hc1F1YXJ0ZXJzID0gYXNRdWFydGVycztcbiAgICBwcm90byQyLmFzWWVhcnMgPSBhc1llYXJzO1xuICAgIHByb3RvJDIudmFsdWVPZiA9IHZhbHVlT2YkMTtcbiAgICBwcm90byQyLl9idWJibGUgPSBidWJibGU7XG4gICAgcHJvdG8kMi5jbG9uZSA9IGNsb25lJDE7XG4gICAgcHJvdG8kMi5nZXQgPSBnZXQkMjtcbiAgICBwcm90byQyLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcztcbiAgICBwcm90byQyLnNlY29uZHMgPSBzZWNvbmRzO1xuICAgIHByb3RvJDIubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgcHJvdG8kMi5ob3VycyA9IGhvdXJzO1xuICAgIHByb3RvJDIuZGF5cyA9IGRheXM7XG4gICAgcHJvdG8kMi53ZWVrcyA9IHdlZWtzO1xuICAgIHByb3RvJDIubW9udGhzID0gbW9udGhzO1xuICAgIHByb3RvJDIueWVhcnMgPSB5ZWFycztcbiAgICBwcm90byQyLmh1bWFuaXplID0gaHVtYW5pemU7XG4gICAgcHJvdG8kMi50b0lTT1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi50b1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi50b0pTT04gPSB0b0lTT1N0cmluZyQxO1xuICAgIHByb3RvJDIubG9jYWxlID0gbG9jYWxlO1xuICAgIHByb3RvJDIubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG5cbiAgICBwcm90byQyLnRvSXNvU3RyaW5nID0gZGVwcmVjYXRlKFxuICAgICAgICAndG9Jc29TdHJpbmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRvSVNPU3RyaW5nKCkgaW5zdGVhZCAobm90aWNlIHRoZSBjYXBpdGFscyknLFxuICAgICAgICB0b0lTT1N0cmluZyQxXG4gICAgKTtcbiAgICBwcm90byQyLmxhbmcgPSBsYW5nO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1gnLCAwLCAwLCAndW5peCcpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd4JywgMCwgMCwgJ3ZhbHVlT2YnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcbiAgICBhZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQpICogMTAwMCk7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xuICAgIH0pO1xuXG4gICAgLy8hIG1vbWVudC5qc1xuXG4gICAgaG9va3MudmVyc2lvbiA9ICcyLjMwLjEnO1xuXG4gICAgc2V0SG9va0NhbGxiYWNrKGNyZWF0ZUxvY2FsKTtcblxuICAgIGhvb2tzLmZuID0gcHJvdG87XG4gICAgaG9va3MubWluID0gbWluO1xuICAgIGhvb2tzLm1heCA9IG1heDtcbiAgICBob29rcy5ub3cgPSBub3c7XG4gICAgaG9va3MudXRjID0gY3JlYXRlVVRDO1xuICAgIGhvb2tzLnVuaXggPSBjcmVhdGVVbml4O1xuICAgIGhvb2tzLm1vbnRocyA9IGxpc3RNb250aHM7XG4gICAgaG9va3MuaXNEYXRlID0gaXNEYXRlO1xuICAgIGhvb2tzLmxvY2FsZSA9IGdldFNldEdsb2JhbExvY2FsZTtcbiAgICBob29rcy5pbnZhbGlkID0gY3JlYXRlSW52YWxpZDtcbiAgICBob29rcy5kdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uO1xuICAgIGhvb2tzLmlzTW9tZW50ID0gaXNNb21lbnQ7XG4gICAgaG9va3Mud2Vla2RheXMgPSBsaXN0V2Vla2RheXM7XG4gICAgaG9va3MucGFyc2Vab25lID0gY3JlYXRlSW5ab25lO1xuICAgIGhvb2tzLmxvY2FsZURhdGEgPSBnZXRMb2NhbGU7XG4gICAgaG9va3MuaXNEdXJhdGlvbiA9IGlzRHVyYXRpb247XG4gICAgaG9va3MubW9udGhzU2hvcnQgPSBsaXN0TW9udGhzU2hvcnQ7XG4gICAgaG9va3Mud2Vla2RheXNNaW4gPSBsaXN0V2Vla2RheXNNaW47XG4gICAgaG9va3MuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xuICAgIGhvb2tzLnVwZGF0ZUxvY2FsZSA9IHVwZGF0ZUxvY2FsZTtcbiAgICBob29rcy5sb2NhbGVzID0gbGlzdExvY2FsZXM7XG4gICAgaG9va3Mud2Vla2RheXNTaG9ydCA9IGxpc3RXZWVrZGF5c1Nob3J0O1xuICAgIGhvb2tzLm5vcm1hbGl6ZVVuaXRzID0gbm9ybWFsaXplVW5pdHM7XG4gICAgaG9va3MucmVsYXRpdmVUaW1lUm91bmRpbmcgPSBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZztcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG4gICAgaG9va3MuY2FsZW5kYXJGb3JtYXQgPSBnZXRDYWxlbmRhckZvcm1hdDtcbiAgICBob29rcy5wcm90b3R5cGUgPSBwcm90bztcblxuICAgIC8vIGN1cnJlbnRseSBIVE1MNSBpbnB1dCB0eXBlIG9ubHkgc3VwcG9ydHMgMjQtaG91ciBmb3JtYXRzXG4gICAgaG9va3MuSFRNTDVfRk1UID0ge1xuICAgICAgICBEQVRFVElNRV9MT0NBTDogJ1lZWVktTU0tRERUSEg6bW0nLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgLz5cbiAgICAgICAgREFURVRJTUVfTE9DQUxfU0VDT05EUzogJ1lZWVktTU0tRERUSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjFcIiAvPlxuICAgICAgICBEQVRFVElNRV9MT0NBTF9NUzogJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTJywgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgICAgIERBVEU6ICdZWVlZLU1NLUREJywgLy8gPGlucHV0IHR5cGU9XCJkYXRlXCIgLz5cbiAgICAgICAgVElNRTogJ0hIOm1tJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgLz5cbiAgICAgICAgVElNRV9TRUNPTkRTOiAnSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMVwiIC8+XG4gICAgICAgIFRJTUVfTVM6ICdISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMC4wMDFcIiAvPlxuICAgICAgICBXRUVLOiAnR0dHRy1bV11XVycsIC8vIDxpbnB1dCB0eXBlPVwid2Vla1wiIC8+XG4gICAgICAgIE1PTlRIOiAnWVlZWS1NTScsIC8vIDxpbnB1dCB0eXBlPVwibW9udGhcIiAvPlxuICAgIH07XG5cbiAgICByZXR1cm4gaG9va3M7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiX2V4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJyIiwiZSIsInQiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsIl9yZWdlbmVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIm1vbWVudCIsInN0ZW5jaWxVdGlscyIsIkFQUFVJRCIsIkRBVEFLRVkiLCJEQVNIS0VZIiwicHJvZHVjdE1ldGFCeUlkIiwidmFyaWFudE1ldGFCeUlkIiwiQ291bnRkb3duIiwiJHNjb3BlIiwiX3RlbXAiLCJfdGhpcyIsIl9yZWYiLCJfcmVmJGRlYnVnIiwiZGVidWciLCJfcmVmJGdyYXBoUUxUb2tlbiIsImdyYXBoUUxUb2tlbiIsIl9yZWYkc3RvcmVUWiIsInN0b3JlVFoiLCJfcmVmJGNoZWNrTWV0YUZpZWxkIiwiY2hlY2tNZXRhRmllbGQiLCJfcmVmJGNvdW50ZG93blZhbHVlcyIsImNvdW50ZG93blZhbHVlcyIsInBhcmNlbCIsIkxUTCIsIl9yZWYkZGVmYXVsdENvdW50ZG93biIsImRlZmF1bHRDb3VudGRvd25UaW1lIiwiX3JlZiRmaW5kUHJvZHVjdElkRnVuIiwiZmluZFByb2R1Y3RJZEZ1bmMiLCIkc2NvcGUxIiwiTnVtYmVyIiwiY2xvc2VzdCIsImZpbmQiLCJ2YWwiLCJwcm9kdWN0SWQiLCJ1cGRhdGVDb3VudGRvd24iLCJ0aW1lciIsIndpbmRvdyIsInNldEludGVydmFsIiwiaG9va3MiLCJvbiIsImV2ZW50IiwiZGF0YSIsInJlc3BvbnNlIiwiaWQiLCJ2YXJpYW50SWQiLCJ2M192YXJpYW50X2lkIiwiYWRkQ2xhc3MiLCJfcHJvdG8iLCJfdXBkYXRlQ291bnRkb3duIiwiX2NhbGxlZSIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkdmFyaWFudElkIiwiY291bnRkb3duIiwiY3VzdG9tIiwicmVzcCIsImhvdXJUZXh0IiwiaG91cnNUZXh0IiwibWludXRlVGV4dCIsIm1pbnV0ZXNUZXh0IiwiJHRvZGF5aG0iLCIkdG9kYXltIiwiJHRvbW9ycm93aG0iLCIkdG9tb3Jyb3dtIiwiJG1vbmRheSIsIiRjdXN0b20iLCJub3ciLCJ0b2RheSIsInRvbW9ycm93IiwiZnJpZGF5Iiwic3VuZGF5IiwibW9uZGF5Iiwic2hpcCIsImhvdXJzIiwibWludXRlcyIsIl9jb250ZXh0IiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInNpdGUiLCJwcm9kdWN0IiwibWV0YWZpZWxkcyIsImVkZ2VzIiwicmVkdWNlIiwiX3ZhbHVlIiwiX3JlZjMiLCJub2RlIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwiX3JlZjQiLCJfdmFsdWUxIiwiX3JlZjUiLCJub2RlMSIsImh0bWwiLCJoaWRlIiwidHoiLCJmb3JtYXQiLCJhZGQiLCJkYXkiLCJpc0JldHdlZW4iLCJpc0JlZm9yZSIsImRpZmYiLCJpc1NhbWUiLCJzaG93IiwicmVwbGFjZSIsIl94IiwiZG9tQ2hhbmdlZCIsIl9yZWY2IiwiX3JlZjYkY291bnRkb3duU2VsZWN0IiwiY291bnRkb3duU2VsZWN0b3IiLCJzZXR0aW5ncyIsImVhY2giLCJlbCIsIiRlbCIsImluaXRBcHAiLCJfeDIiLCJfaW5pdEFwcCIsIl9jYWxsZWUyIiwibW8iLCJfY29udGV4dDIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX2RlYm91bmNlIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwiYm9keSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJfcmVmNyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9