"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["cart"],{

/***/ "./assets/js/papathemes/notification.js"
/*!**********************************************!*\
  !*** ./assets/js/papathemes/notification.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var instance;
var Notification = /*#__PURE__*/function () {
  function Notification() {
    this.template = "\n        <div class=\"papathemes__notifications\">\n        </div>\n    ";
    this.itemTemplate = "\n        <div class=\"papathemes__notifications-item {{className}}\">\n            {{&icon}}\n            <div class=\"_content\">\n                {{&content}}\n            </div>\n            {{&close}}\n        </div>\n    ";
    this.closeTemplate = "\n        <button type=\"button\" class=\"papathemes__notifications-close\">\n            <span class=\"is-srOnly\">Close</span>\n            <i class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-xmark-large\"></use></svg></i>\n        </button>\n    ";
    this.$notifications = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.template)).hide().appendTo('body');
    this.hideTimeout = null;
  }
  var _proto = Notification.prototype;
  _proto.info = function info(content, icon, timeout) {
    this.show(content, icon, timeout, '_info');
  };
  _proto.error = function error(content, icon, timeout) {
    this.show(content, icon, timeout, '_error');
  };
  _proto.show = function show(content, icon, timeout, className) {
    var _this = this;
    if (timeout === void 0) {
      timeout = 5000;
    }
    if (className === void 0) {
      className = '';
    }
    clearTimeout(this.hideTimeout);
    var close = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.closeTemplate);
    var $item = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.itemTemplate, {
      content: content,
      icon: icon,
      close: close,
      className: className
    }));
    this.$notifications.append($item).show();
    $item.addClass('_showing');
    var closeFnc = function closeFnc() {
      $item.removeClass('_showing');
      setTimeout(function () {
        $item.remove();
        _this.updateNotifications();
      }, 500);
    };
    var timer = setTimeout(closeFnc, timeout);
    $item.find('.papathemes__notifications-close').on('click', function (event) {
      event.preventDefault();
      clearTimeout(timer);
      closeFnc();
    });
  };
  _proto.updateNotifications = function updateNotifications() {
    var _this2 = this;
    clearTimeout(this.hideTimeout);
    if (this.$notifications.is(':empty')) {
      this.hideTimeout = setTimeout(function () {
        _this2.$notifications.hide();
      }, 500);
    }
  };
  return Notification;
}();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!instance) {
    instance = new Notification();
  }
  return instance;
}

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7SUFBQSxJQUFBTSxNQUFBO0lBQ2xCZixZQUFZLENBQUMsSUFBSSxDQUFDWCxXQUFXLENBQUM7SUFFOUIsSUFBSSxJQUFJLENBQUNMLGNBQWMsQ0FBQ2dDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNsQyxJQUFJLENBQUMzQixXQUFXLEdBQUdrQixVQUFVLENBQUMsWUFBTTtRQUNoQ1EsTUFBSSxDQUFDL0IsY0FBYyxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUM5QixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1g7RUFDSixDQUFDO0VBQUEsT0FBQVAsWUFBQTtBQUFBO0FBR0wsNkJBQWUsc0NBQVk7RUFDdkIsSUFBSSxDQUFDRCxRQUFRLEVBQUU7SUFDWEEsUUFBUSxHQUFHLElBQUlDLFlBQVksQ0FBQyxDQUFDO0VBQ2pDO0VBQ0EsT0FBT0QsUUFBUTtBQUNuQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ub3RpZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxubGV0IGluc3RhbmNlO1xuXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuICAgIHRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgaXRlbVRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1pdGVtIHt7Y2xhc3NOYW1lfX1cIj5cbiAgICAgICAgICAgIHt7Jmljb259fVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3smY29udGVudH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt7JmNsb3NlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNsb3NlVGVtcGxhdGUgPSBgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9ucyA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMudGVtcGxhdGUpKVxuICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5mbyhjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2luZm8nKTtcbiAgICB9XG5cbiAgICBlcnJvcihjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2Vycm9yJyk7XG4gICAgfVxuXG4gICAgc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0ID0gNTAwMCwgY2xhc3NOYW1lID0gJycpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuY2xvc2VUZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5pdGVtVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIGNvbnRlbnQsIGljb24sIGNsb3NlLCBjbGFzc05hbWUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmFwcGVuZCgkaXRlbSkuc2hvdygpO1xuICAgICAgICAkaXRlbS5hZGRDbGFzcygnX3Nob3dpbmcnKTtcblxuICAgICAgICBjb25zdCBjbG9zZUZuYyA9ICgpID0+IHtcbiAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKCdfc2hvd2luZycpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChjbG9zZUZuYywgdGltZW91dCk7XG5cbiAgICAgICAgJGl0ZW0uZmluZCgnLnBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtY2xvc2UnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgY2xvc2VGbmMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLiRub3RpZmljYXRpb25zLmlzKCc6ZW1wdHknKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmaWNhdGlvbnMuaGlkZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbiJdLCJuYW1lcyI6WyJtdXN0YWNoZSIsImluc3RhbmNlIiwiTm90aWZpY2F0aW9uIiwidGVtcGxhdGUiLCJpdGVtVGVtcGxhdGUiLCJjbG9zZVRlbXBsYXRlIiwiJG5vdGlmaWNhdGlvbnMiLCIkIiwicmVuZGVyIiwiaGlkZSIsImFwcGVuZFRvIiwiaGlkZVRpbWVvdXQiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJpbmZvIiwiY29udGVudCIsImljb24iLCJ0aW1lb3V0Iiwic2hvdyIsImVycm9yIiwiY2xhc3NOYW1lIiwiX3RoaXMiLCJjbGVhclRpbWVvdXQiLCJjbG9zZSIsIiRpdGVtIiwiYXBwZW5kIiwiYWRkQ2xhc3MiLCJjbG9zZUZuYyIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsInJlbW92ZSIsInVwZGF0ZU5vdGlmaWNhdGlvbnMiLCJ0aW1lciIsImZpbmQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJfdGhpczIiLCJpcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9