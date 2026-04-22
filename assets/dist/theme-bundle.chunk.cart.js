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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmNhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBRWhDLElBQUlDLFFBQVE7QUFBQyxJQUVQQyxZQUFZO0VBdUJkLFNBQUFBLGFBQUEsRUFBYztJQUFBLEtBdEJkQyxRQUFRO0lBQUEsS0FLUkMsWUFBWTtJQUFBLEtBVVpDLGFBQWE7SUFRVCxJQUFJLENBQUNDLGNBQWMsR0FBR0MsQ0FBQyxDQUFDUCxnREFBUSxDQUFDUSxNQUFNLENBQUMsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQyxDQUNsRE0sSUFBSSxDQUFDLENBQUMsQ0FDTkMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUVyQixJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJO0VBQzNCO0VBQUMsSUFBQUMsTUFBQSxHQUFBVixZQUFBLENBQUFXLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxJQUFJLEdBQUosU0FBQUEsSUFBSUEsQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUN6QixJQUFJLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxPQUFPLENBQUM7RUFDOUMsQ0FBQztFQUFBTCxNQUFBLENBRURPLEtBQUssR0FBTCxTQUFBQSxLQUFLQSxDQUFDSixPQUFPLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQzFCLElBQUksQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztFQUMvQyxDQUFDO0VBQUFMLE1BQUEsQ0FFRE0sSUFBSSxHQUFKLFNBQUFBLElBQUlBLENBQUNILE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQVNHLFNBQVMsRUFBTztJQUFBLElBQUFDLEtBQUE7SUFBQSxJQUFoQ0osT0FBTztNQUFQQSxPQUFPLEdBQUcsSUFBSTtJQUFBO0lBQUEsSUFBRUcsU0FBUztNQUFUQSxTQUFTLEdBQUcsRUFBRTtJQUFBO0lBQzlDRSxZQUFZLENBQUMsSUFBSSxDQUFDWCxXQUFXLENBQUM7SUFFOUIsSUFBTVksS0FBSyxHQUFHdkIsZ0RBQVEsQ0FBQ1EsTUFBTSxDQUFDLElBQUksQ0FBQ0gsYUFBYSxDQUFDO0lBQ2pELElBQU1tQixLQUFLLEdBQUdqQixDQUFDLENBQUNQLGdEQUFRLENBQUNRLE1BQU0sQ0FBQyxJQUFJLENBQUNKLFlBQVksRUFBRTtNQUMvQ1csT0FBTyxFQUFQQSxPQUFPO01BQUVDLElBQUksRUFBSkEsSUFBSTtNQUFFTyxLQUFLLEVBQUxBLEtBQUs7TUFBRUgsU0FBUyxFQUFUQTtJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQ2QsY0FBYyxDQUFDbUIsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBQ04sSUFBSSxDQUFDLENBQUM7SUFDeENNLEtBQUssQ0FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUUxQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO01BQ25CSCxLQUFLLENBQUNJLFdBQVcsQ0FBQyxVQUFVLENBQUM7TUFDN0JDLFVBQVUsQ0FBQyxZQUFNO1FBQ2JMLEtBQUssQ0FBQ00sTUFBTSxDQUFDLENBQUM7UUFDZFQsS0FBSSxDQUFDVSxtQkFBbUIsQ0FBQyxDQUFDO01BQzlCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBTUMsS0FBSyxHQUFHSCxVQUFVLENBQUNGLFFBQVEsRUFBRVYsT0FBTyxDQUFDO0lBRTNDTyxLQUFLLENBQUNTLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUNsRUEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QmQsWUFBWSxDQUFDVSxLQUFLLENBQUM7TUFDbkJMLFFBQVEsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBZixNQUFBLENBRURtQixtQkFBbUIsR0FBbkIsU0FBQUEsbUJBQW1CQSxDQUFBLEVBQUc7SUFBQSxJQUFBTSxNQUFBO0lBQ2xCZixZQUFZLENBQUMsSUFBSSxDQUFDWCxXQUFXLENBQUM7SUFFOUIsSUFBSSxJQUFJLENBQUNMLGNBQWMsQ0FBQ2dDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUNsQyxJQUFJLENBQUMzQixXQUFXLEdBQUdrQixVQUFVLENBQUMsWUFBTTtRQUNoQ1EsTUFBSSxDQUFDL0IsY0FBYyxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUM5QixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1g7RUFDSixDQUFDO0VBQUEsT0FBQVAsWUFBQTtBQUFBO0FBR0wsNkJBQWUsc0NBQVk7RUFDdkIsSUFBSSxDQUFDRCxRQUFRLEVBQUU7SUFDWEEsUUFBUSxHQUFHLElBQUlDLFlBQVksQ0FBQyxDQUFDO0VBQ2pDO0VBQ0EsT0FBT0QsUUFBUTtBQUNuQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ub3RpZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuXHJcbmxldCBpbnN0YW5jZTtcclxuXHJcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XHJcbiAgICB0ZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9uc1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBpdGVtVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtaXRlbSB7e2NsYXNzTmFtZX19XCI+XHJcbiAgICAgICAgICAgIHt7Jmljb259fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHt7JmNvbnRlbnR9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3smY2xvc2V9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBjbG9zZVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy50ZW1wbGF0ZSkpXHJcbiAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm8oY29udGVudCwgaWNvbiwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2luZm8nKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KGNvbnRlbnQsIGljb24sIHRpbWVvdXQsICdfZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNvbnRlbnQsIGljb24sIHRpbWVvdXQgPSA1MDAwLCBjbGFzc05hbWUgPSAnJykge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5jbG9zZVRlbXBsYXRlKTtcclxuICAgICAgICBjb25zdCAkaXRlbSA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMuaXRlbVRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQsIGljb24sIGNsb3NlLCBjbGFzc05hbWUsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmFwcGVuZCgkaXRlbSkuc2hvdygpO1xyXG4gICAgICAgICRpdGVtLmFkZENsYXNzKCdfc2hvd2luZycpO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlQ2xhc3MoJ19zaG93aW5nJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbnMoKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoY2xvc2VGbmMsIHRpbWVvdXQpO1xyXG5cclxuICAgICAgICAkaXRlbS5maW5kKCcucGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBjbG9zZUZuYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kbm90aWZpY2F0aW9ucy5pcygnOmVtcHR5JykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9ucy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm11c3RhY2hlIiwiaW5zdGFuY2UiLCJOb3RpZmljYXRpb24iLCJ0ZW1wbGF0ZSIsIml0ZW1UZW1wbGF0ZSIsImNsb3NlVGVtcGxhdGUiLCIkbm90aWZpY2F0aW9ucyIsIiQiLCJyZW5kZXIiLCJoaWRlIiwiYXBwZW5kVG8iLCJoaWRlVGltZW91dCIsIl9wcm90byIsInByb3RvdHlwZSIsImluZm8iLCJjb250ZW50IiwiaWNvbiIsInRpbWVvdXQiLCJzaG93IiwiZXJyb3IiLCJjbGFzc05hbWUiLCJfdGhpcyIsImNsZWFyVGltZW91dCIsImNsb3NlIiwiJGl0ZW0iLCJhcHBlbmQiLCJhZGRDbGFzcyIsImNsb3NlRm5jIiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidXBkYXRlTm90aWZpY2F0aW9ucyIsInRpbWVyIiwiZmluZCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl90aGlzMiIsImlzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=