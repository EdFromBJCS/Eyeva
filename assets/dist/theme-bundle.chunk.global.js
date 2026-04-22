(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["global"],{

/***/ "./assets/js/papathemes/ajax-addtocart.js"
/*!************************************************!*\
  !*** ./assets/js/papathemes/ajax-addtocart.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");





// Supermarket - OBPS Mod
/* eslint-disable */
function shake($el, settings) {
  if (typeof settings === 'undefined') {
    settings = {};
  }
  if (typeof settings.interval === 'undefined') {
    settings.interval = 100;
  }
  if (typeof settings.distance === 'undefined') {
    settings.distance = 10;
  }
  if (typeof settings.times === 'undefined') {
    settings.times = 4;
  }
  if (typeof settings.complete === 'undefined') {
    settings.complete = function () {};
  }
  $el.css('position', 'relative');
  for (var iter = 0; iter < settings.times + 1; iter++) {
    $el.animate({
      left: iter % 2 === 0 ? settings.distance : settings.distance * -1
    }, settings.interval);
  }
  $el.animate({
    left: 0
  }, settings.interval, settings.complete);
}
/* eslint-enable */

function onMiniPreviewModalOpen() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('has-activeModal--miniPreview');
}
function onMiniPreviewModalClose() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('has-activeModal--miniPreview');
  if (typeof this.autoCloseTimer !== 'undefined' && this.autoCloseTimer) {
    window.clearInterval(this.autoCloseTimer);
    this.autoCloseTimer = null;
  }
}
function applyModalAutoClose(modal) {
  var $autoCloseEl = modal.$modal.find('[data-auto-close]');
  if ($autoCloseEl.length > 0) {
    var sec = $autoCloseEl.data('autoClose') || 5;
    var $count = $autoCloseEl.find('.count');
    $count.html(sec);
    modal.autoCloseTimer = window.setInterval(function () {
      // eslint-disable-line
      if (sec > 1) {
        sec--;
        $count.html(sec);
      } else {
        window.clearInterval(modal.autoCloseTimer);
        modal.autoCloseTimer = null; // eslint-disable-line
        modal.close();
      }
    }, 1000);
  }
}

/**
 * Get URL Parameter
 *
 * @param  {String} Parameter name
 * @param  {String} URL
 * @return {String} return string value or 0 if not exist
 */
function getURLParam(name, url) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(url);
  return results[1] || 0;
}

/**
 * Get cart contents
 *
 * @param {String} cartItemHash
 * @param {Function} onComplete
 */
function getCartContent(cartItemHash, onComplete) {
  var options = {
    template: 'cart/preview',
    params: {
      suggest: cartItemHash
    },
    config: {
      cart: {
        suggestions: {
          limit: 4
        }
      }
    }
  };
  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent(options, onComplete);
}

/**
 * Update cart content
 *
 * @param {String} cartItemHash
 */
function updateCartContent(modal, cartItemHash) {
  getCartContent(cartItemHash, function (err, response) {
    if (err) {
      return;
    }
    modal.updateContent(response);
    applyModalAutoClose(modal); // Supermarket

    // Update cart counter
    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-cart-quantity]', modal.$content);
    var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action .cart-count');
    var quantity = $cartQuantity.data('cart-quantity') || 0;
    $cartCounter.addClass('cart-count--positive');
    $body.trigger('cart-quantity-update', quantity);

    // Supermarket - OBPS Mod
    shake(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-item--cart > .navUser-action'));
  });
}

/**
 * Checks if the current window is being run inside an iframe
 * @returns {boolean}
 */
function isRunningInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

/**
 * Redirect to url
 *
 * @param {String} url
 */
function redirectTo(url) {
  if (isRunningInIframe() && !window.iframeSdk) {
    window.top.location = url;
  } else {
    window.location = url;
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('#previewModal')[0];
  modal.$modal.addClass('preview-modal').addClass("preview-modal--" + context.add_to_cart_popup);
  if (context.add_to_cart_popup === 'mini') {
    // unbind open/close event of the original modal
    modal.$modal.off(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.open, modal.onModalOpen);
    modal.$modal.off(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.close, modal.onModalClose);

    // bind open/class event for mini preview modal
    modal.onModalOpen = onMiniPreviewModalOpen.bind(modal);
    modal.onModalClose = onMiniPreviewModalClose.bind(modal);
    modal.$modal.on(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.open, modal.onModalOpen);
    modal.$modal.on(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.close, modal.onModalClose);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', '[data-papathemes-cart-item-add]', function (event) {
    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      return;
    }
    event.preventDefault();
    var productId = getURLParam('product_id', event.currentTarget.href);
    if (productId === 0) {
      return;
    }
    var formData = new FormData();
    formData.append('product_id', productId);
    var $parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('form, .card');
    var qty = $parent.find("input[name=qty_" + productId + "]:visible").val();
    if (qty && qty.length > 0) {
      if (parseInt(qty, 10) > 0) {
        formData.append('qty[]', qty);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).is('[data-check-qty]')) {
        (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.showAlertModal)(context.ajaxAddToCartEnterQty || 'Please enter quantity');
        return;
      }
    }

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(formData, function (err, response) {
      var errorMessage = err || response.data.error;

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
        if (response && response.data && response.data.data && response.data.data.url) {
          window.location = response.data.data.url;
        }
        return;
      }

      // Papathemes - Supermarket: Support redirect to cart page after added to cart
      if (context.redirect_cart) {
        redirectTo(response.data.cart_item.cart_url || context.urls.cart);
        return;
      }

      // papathemes-inhealth: Show cart preview on the right side
      if (context.add_to_cart_popup === 'cart') {
        // close quick-view modal
        var defModal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.defaultModal)();
        if (defModal) {
          defModal.close();
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').trigger('ajax-addtocart-item-added', productId);
        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.openCartPreview)(response.data.cart_item.id, context);
      }

      // Supermarket - OBPS Mod
      // Open preview modal and update content
      if (context.add_to_cart_popup !== 'hide') {
        modal.open();
        modal.open({
          size: 'large'
        });
      }
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').trigger('ajax-addtocart-item-added', productId);
      updateCartContent(modal, response.data.cart_item.hash);
    });
  });
}

/***/ },

/***/ "./assets/js/papathemes/card-swatches/Card.js"
/*!****************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/Card.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _sale_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sale-countdown */ "./assets/js/papathemes/sale-countdown.js");
/* harmony import */ var _eyeva_image_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eyeva/image-gallery */ "./assets/js/papathemes/eyeva/image-gallery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var Card = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {jQuery} options.$scope
   * @param {jQuery} options.$attributesContainer
   * @param {Number} options.productId
   * @param {String} options.productViewFile
   * @param {String} options.attributesTemplate
   * @param {jQuery} options.$countdown
   * @param {String} options.countdownCustomField
   * @param {Object} options.templateCustomTags
   * @param {String} options.addToCartFormSelector
   * @param {jQuery} options.$cardImage
   * @param {jQuery} options.$cardPriceContainer
   * @param {String} options.imageSize
   * @param {String} options.zoomSize
   * @param {String} options.productSize
   * @param {String} options.thumbSize
   * @param {Function} options.inputFinderFunc
   * @param {Number} options.swatchesLimit
   * @param {Function} options.imageReplacerFunc
   * @param {Array} options.includeOptions
   * @param {Array} options.displayStyles
   * @param {Boolean} options.displayInStockOnly
   * @param {Boolean} options.autoSelectOptionValues
   * @param {Boolean} options.autoInit
   * @param {Object} options.graphQLNode
   * @param {String} options.graphQLToken
   * @param {Boolean} options.showSwatches
   * @param {Boolean} options.shouldUpdateMinMaxQty
   * @param {String} options.variantImageUrlTemplate
   * @param {Array} options.arrayAttributeSelect
   * @param {Boolean} options.showCountdown
   * @param {Boolean} options.showGallery
   * @param {Boolean} options.showHoverVideo
   * @param {String} options.image360CustomField
   * @param {String} options.hoverVideoCustomField
   * @param {jQuery} options.cardImageContainerSelector
   * @param {Boolean} options.showPriceCall
   * @param {String} options.txtVideosLabel
   * @param {String} options.txtImages360Label
   * @param {String} options.txtImagesLabel
   * @constructor
   */
  function Card(_ref) {
    var $scope = _ref.$scope,
      $attributesContainer = _ref.$attributesContainer,
      productId = _ref.productId,
      productViewFile = _ref.productViewFile,
      attributesTemplate = _ref.attributesTemplate,
      $countdown = _ref.$countdown,
      countdownCustomField = _ref.countdownCustomField,
      templateCustomTags = _ref.templateCustomTags,
      addToCartFormSelector = _ref.addToCartFormSelector,
      $cardImage = _ref.$cardImage,
      $cardPriceContainer = _ref.$cardPriceContainer,
      imageSize = _ref.imageSize,
      zoomSize = _ref.zoomSize,
      productSize = _ref.productSize,
      thumbSize = _ref.thumbSize,
      inputFinderFunc = _ref.inputFinderFunc,
      swatchesLimit = _ref.swatchesLimit,
      imageReplacerFunc = _ref.imageReplacerFunc,
      includeOptions = _ref.includeOptions,
      displayStyles = _ref.displayStyles,
      displayInStockOnly = _ref.displayInStockOnly,
      autoSelectOptionValues = _ref.autoSelectOptionValues,
      _ref$autoInit = _ref.autoInit,
      autoInit = _ref$autoInit === void 0 ? true : _ref$autoInit,
      graphQLNode = _ref.graphQLNode,
      graphQLToken = _ref.graphQLToken,
      showSwatches = _ref.showSwatches,
      shouldUpdateMinMaxQty = _ref.shouldUpdateMinMaxQty,
      variantImageUrlTemplate = _ref.variantImageUrlTemplate,
      arrayAttributeSelect = _ref.arrayAttributeSelect,
      showCountdown = _ref.showCountdown,
      showGallery = _ref.showGallery,
      showHoverVideo = _ref.showHoverVideo,
      image360CustomField = _ref.image360CustomField,
      hoverVideoCustomField = _ref.hoverVideoCustomField,
      cardImageContainerSelector = _ref.cardImageContainerSelector,
      showPriceCall = _ref.showPriceCall,
      txtVideosLabel = _ref.txtVideosLabel,
      txtImages360Label = _ref.txtImages360Label,
      txtImagesLabel = _ref.txtImagesLabel;
    this.$scope = $scope;
    this.productId = productId;
    this.$attributesContainer = $attributesContainer;
    this.productViewFile = productViewFile;
    this.attributesTemplate = attributesTemplate;
    this.$countdown = $countdown;
    this.countdownCustomField = countdownCustomField;
    this.templateCustomTags = templateCustomTags;
    this.addToCartFormSelector = addToCartFormSelector;
    this.$cardImage = $cardImage;
    this.$cardPriceContainer = $cardPriceContainer;
    this.imageSize = imageSize;
    this.zoomSize = zoomSize;
    this.productSize = productSize;
    this.thumbSize = thumbSize;
    this.inputFinderFunc = inputFinderFunc;
    this.swatchesLimit = swatchesLimit;
    this.imageReplacerFunc = imageReplacerFunc;
    this.includeOptions = includeOptions;
    this.displayStyles = displayStyles;
    this.displayInStockOnly = displayInStockOnly;
    this.autoSelectOptionValues = autoSelectOptionValues;
    this.autoInit = autoInit;
    this.graphQLNode = graphQLNode;
    this.graphQLToken = graphQLToken;
    this.showSwatches = showSwatches;
    this.shouldUpdateMinMaxQty = shouldUpdateMinMaxQty;
    this.variantImageUrlTemplate = variantImageUrlTemplate;
    this.arrayAttributeSelect = arrayAttributeSelect;
    this.showCountdown = showCountdown;
    this.showGallery = showGallery;
    this.showHoverVideo = showHoverVideo;
    this.image360CustomField = image360CustomField;
    this.hoverVideoCustomField = hoverVideoCustomField;
    this.cardImageContainerSelector = cardImageContainerSelector;
    this.showPriceCall = showPriceCall;
    this.txtVideosLabel = txtVideosLabel;
    this.txtImages360Label = txtImages360Label;
    this.txtImagesLabel = txtImagesLabel;
    if (this.autoInit) {
      this.init();
    }
  }
  var _proto = Card.prototype;
  _proto.init = function init() {
    if (this.variantImageUrlTemplate) {
      this.updateCardImage(this.variantImageUrlTemplate);
    }
    if (this.displayInStockOnly && this.showSwatches) {
      this.requestInStockAttributes();
    } else if (this.graphQLNode && this.showSwatches) {
      this.buildProductOptions();
    } else if (this.showSwatches) {
      this.requestProductOptions();
    }
    if (this.graphQLNode && this.showCountdown) {
      this.initCountdown();
    }
    if (this.graphQLNode && this.showGallery) {
      this.initGallery();
    }
    if (this.graphQLNode && this.showHoverVideo) {
      this.initHoverVideo();
    }
    if (this.graphQLNode && this.showPriceCall) {
      this.updateCardPriceMess();
    }

    // this.updateAttributeSelect(this.arrayAttributeSelect);

    if (this.shouldUpdateMinMaxQty && this.graphQLNode) {
      this.updateMinMaxQty();
    }
  };
  _proto.updateMinMaxQty = function updateMinMaxQty() {
    var _this$graphQLNode = this.graphQLNode,
      minPurchaseQuantity = _this$graphQLNode.minPurchaseQuantity,
      maxPurchaseQuantity = _this$graphQLNode.maxPurchaseQuantity;
    var $input = this.$scope.find('[data-card-quantity-change] input');
    var $boInput = this.$scope.find('input[data-bulkorder-qty-id]');
    var qty = Number($input.val()) || 1;
    if (minPurchaseQuantity) {
      $input.attr('min', minPurchaseQuantity).attr('data-quantity-min', minPurchaseQuantity);
      if (qty < minPurchaseQuantity) {
        $input.val(minPurchaseQuantity);
      }
      $boInput.attr('data-quantity-min', minPurchaseQuantity);
    }
    if (maxPurchaseQuantity) {
      $input.attr('max', maxPurchaseQuantity).attr('data-quantity-max', maxPurchaseQuantity);
      if (qty > maxPurchaseQuantity) {
        $input.val(maxPurchaseQuantity);
      }
      $boInput.attr('data-quantity-max', maxPurchaseQuantity);
    }
  };
  _proto.requestInStockAttributes = function requestInStockAttributes() {
    var _this = this;
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      data: {
        action: 'add',
        product_id: this.productId
      },
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var attributesData = resp.data || {};
        if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
          if (_this.graphQLNode) {
            _this.buildProductOptions(attributesData);
          } else {
            _this.requestProductOptions(attributesData);
          }
        }
      }
    });
  };
  _proto.requestProductOptions = function requestProductOptions(attributesData) {
    var _this2 = this;
    $.ajax({
      url: "/products.php?productId=" + this.productId,
      method: 'GET',
      headers: {
        'stencil-config': '{}',
        'stencil-options': "{\"render_with\":\"" + this.productViewFile + "\"}",
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        _this2.buildProductOptions(attributesData, resp);
      }
    });
  };
  _proto.buildProductOptions = function buildProductOptions(attributesData, resp) {
    var _this3 = this;
    if (attributesData === void 0) {
      attributesData = {};
    }
    var data = {
      attributes: []
    };
    if (this.graphQLNode) {
      // load attributes from graphQL
      data.attributes = this.graphQLNode.productOptions.edges.reduce(function (_options, _ref2) {
        var optionNode = _ref2.node;
        if (_this3.includeOptions.length > 0 && !_this3.includeOptions.includes(String(optionNode.displayName).toLocaleUpperCase())) {
          return _options;
        }

        // only display swatch or rectangle options if includeOptions is empty
        if ((!_this3.includeOptions || _this3.includeOptions.length === 0) && !_this3.displayStyles.includes(optionNode.displayStyle)) {
          return _options;
        }

        // only display the first option if includeOptions is empty
        if (!_this3.includeOptions || _options.length > 0) {
          return _options;
        }
        if (optionNode.values) {
          var values = optionNode.values.edges.reduce(function (_values, _ref3) {
            var valueNode = _ref3.node;
            if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1) {
              if (valueNode.imageUrl || valueNode.hexColors || valueNode.label) {
                _values.push({
                  content: valueNode.imageUrl // eslint-disable-line no-nested-ternary
                  ? "<span class=\"form-option-variant form-option-variant--pattern\" title=\"" + valueNode.label + "\" style=\"background-image: url('" + valueNode.imageUrl + "');\"></span>" : valueNode.hexColors ? valueNode.hexColors.map(function (color) {
                    return "<span class='form-option-variant form-option-variant--color' title=\"" + valueNode.label + "\" style=\"background-color: " + color + "\"></span>";
                  }).join('') : "<span class=\"form-option-variant\">" + valueNode.label + "</span>",
                  label: valueNode.label,
                  type: valueNode.imageUrl || valueNode.hexColors ? 'swatch' : 'rectangle',
                  attributeId: optionNode.entityId,
                  attributeName: optionNode.displayName,
                  attributeValue: valueNode.entityId
                });
              }
            }
            return _values;
          }, []);
          if (values.length > 0) {
            _options.push(values);
          }
        }
        return _options;
      }, []);
    } else {
      // load attributes from AJAX request
      $(resp).find('[data-product-attribute="swatch"]').each(function (i, el) {
        var $swatches = $(el);
        var swatches = [];
        $swatches.find('[data-product-attribute-value]').each(function (_i, labelEl) {
          var $label = $(labelEl);
          var $input = _this3.inputFinderFunc ? _this3.inputFinderFunc($swatches, $label) : $swatches.find("[id=\"" + $label.attr('for') + "\"]");
          var attributeValue = Number($input.attr('value'));
          var attributeId = Number($input.attr('name').replace(/attribute\[([0-9]+)\]/, '$1'));
          if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(attributeValue) > -1) {
            swatches.push({
              content: $label.html(),
              label: $input.data('productAttributeLabel'),
              attributeId: attributeId,
              attributeValue: attributeValue
            });
          }
        });
        if (swatches.length > 0) {
          data.attributes.push(swatches);
        }
      });
    }
    if (data.attributes.length === 0 || !this.attributesTemplate) {
      return;
    }
    var html = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.attributesTemplate, data, null, this.templateCustomTags);
    this.$attributesContainer.append(html);
    var $form;
    if (this.graphQLNode) {
      // build Form from graphQL
      $form = $('<form class="productSwatches-hiddenForm"></form>').hide();
      $form.append('<input type="hidden" name="action" value="add">');
      $form.append("<input type=\"hidden\" name=\"product_id\" value=\"" + this.productId + "\">");
      $form.append("<input type=\"hidden\" name=\"qty[]\" value=\"" + (this.graphQLNode.minPurchaseQuantity || 1) + "\">");
      this.graphQLNode.productOptions.edges.forEach(function (_ref4) {
        var optionNode = _ref4.node;
        var defaultValue = '';
        if (optionNode.values) {
          defaultValue = _this3.autoSelectOptionValues && optionNode.values.edges.length > 0 ? optionNode.values.edges[0].node.entityId : '';
          defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref5) {
            var valueNode = _ref5.node;
            return valueNode.isDefault ? valueNode.entityId : _defaultValue;
          }, defaultValue);
          if (!defaultValue && attributesData && attributesData.in_stock_attributes) {
            defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref6) {
              var valueNode = _ref6.node;
              return _defaultValue || (attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1 ? valueNode.entityId : '');
            }, '');
          }
        } else if (optionNode.checkedByDefault) {
          defaultValue = 1;
        }
        $form.append("<input type=\"hidden\" name=\"attribute[" + optionNode.entityId + "]\" value=\"" + defaultValue + "\">");
      });
      var $cardOption = $('.productSwatches-swatches-item', this.$attributesContainer);
      this.updateAttributeSelect(this.arrayAttributeSelect, $cardOption);
    } else {
      // build Form from AJAX request
      var $form2 = $('<div></div>').append(resp).find(this.addToCartFormSelector).addClass('productSwatches-hiddenForm').hide();

      // Remove all 'id' to avoid duplicated label.for in quick-view
      $form2.find('[id]').prop('id', null);
    }
    this.$attributesContainer.append($form);
    this.$attributesContainer.on('click', '[data-attribute-id]', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var id = $a.data('attributeId');
      var value = $a.data('attributeValue');
      _this3.$attributesContainer.find("[data-attribute-id=" + id + "]").removeClass('is-active').find('input').prop('checked', false);
      $a.addClass('is-active').find('input').prop('checked', true);
      $form.find("[name=\"attribute[" + id + "]\"]").val([value]);
      _this3.requestAttributesChange($form);
    });
    if (this.swatchesLimit) {
      this.$attributesContainer.find('[data-more]').each(function (i, moreEl) {
        var $more = $(moreEl);
        var $list = $more.closest('[data-swatches]');
        var $less = $list.find('[data-less]');
        var $items = $list.find('[data-attribute-id]');
        if ($items.length > _this3.swatchesLimit) {
          var $hiddenItems = $items.filter(function (j) {
            return j >= _this3.swatchesLimit;
          }).hide();
          var txtMore = "+" + ($items.length - _this3.swatchesLimit);
          $more.text(txtMore);
          $more.on('click', function () {
            $hiddenItems.show();
            $more.hide();
            $less.show();
          });
          $less.on('click', function () {
            $hiddenItems.hide();
            $less.hide();
            $more.show();
          });
        } else {
          $more.hide();
        }
        $less.hide();
      });
    } else {
      this.$attributesContainer.find('[data-more], [data-less]').hide();
    }
  };
  _proto.requestAttributesChange = function requestAttributesChange($form) {
    var _this4 = this;
    if (!window.FormData) {
      return;
    }
    var data = this.filterEmptyFilesFromForm(new FormData($form.get(0)));
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      contentType: false,
      processData: false,
      data: data,
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var _resp$data = resp.data,
          image = _resp$data.image,
          price = _resp$data.price;
        _this4.updateCardImage(image == null ? void 0 : image.data);
        if (price) {
          var viewModel = _this4.getViewModel(_this4.$scope);
          _this4.updatePriceView(viewModel, price);
        }
      }
    });
  };
  _proto.updateCardPriceMess = function updateCardPriceMess() {
    if (this.graphQLNode.availabilityV2.message) {
      var messPurchase = this.graphQLNode.availabilityV2.message;
      this.$cardPriceContainer.html("<span class=\"price--call\">" + messPurchase + "</span>");
    }
  };
  _proto.updateCardImage = function updateCardImage(urlTemplate) {
    if (this.imageReplacerFunc) {
      var img = urlTemplate ? urlTemplate.data.replace('{:size}', this.imageSize) : null;
      this.imageReplacerFunc(this.$cardImage, img);
    } else if (urlTemplate) {
      var _img = urlTemplate.replace('{:size}', this.imageSize);
      if (!this.$cardImage.data('originalSrc')) {
        this.$cardImage.data('originalSrc', this.$cardImage.attr('src')).data('originalSrcset', this.$cardImage.attr('srcset'));
      }
      this.$cardImage.attr('src', _img).attr('srcset', '').attr('data-srcset', '').addClass('productSwatches-image-optionChanged');
    } else if (this.$cardImage.data('originalSrc')) {
      this.$cardImage.attr('src', this.$cardImage.data('originalSrc')).attr('srcset', this.$cardImage.data('originalSrcset')).attr('data-srcset', this.$cardImage.data('originalSrcset')).data('originalSrc', null).data('originalSrcset', null).removeClass('productSwatches-image-optionChanged');
    }
  };
  _proto.updateAttributeSelect = function updateAttributeSelect(arraySelect, cardOption) {
    if (!arraySelect) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    arraySelect.forEach(function (itemSelect) {
      var _itemSelect$node$valu;
      var idSelect = itemSelect.node.entityId;
      var idValue = (_itemSelect$node$valu = itemSelect.node.values) == null ? void 0 : _itemSelect$node$valu.edges[0].node.entityId;
      cardOption.each(function (index, item) {
        var idItem = $(item).data('attributeId');
        var valueItem = $(item).data('attributeValue');
        if (idItem === idSelect && idValue === valueItem) {
          $(item).addClass('is-active');
        }
      });
    });
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */;
  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return formData;
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-price-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      }
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  };
  _proto.initCountdown = function initCountdown() {
    var _this$graphQLNode$cus,
      _this5 = this;
    if (this.$countdown.length === 0) return;
    var strEndDate = (_this$graphQLNode$cus = this.graphQLNode.customFields) == null || (_this$graphQLNode$cus = _this$graphQLNode$cus.edges) == null || (_this$graphQLNode$cus = _this$graphQLNode$cus.find(function (_ref7) {
      var node = _ref7.node;
      return node.name === _this5.countdownCustomField;
    })) == null || (_this$graphQLNode$cus = _this$graphQLNode$cus.node) == null ? void 0 : _this$graphQLNode$cus.value;
    if (!strEndDate) return;
    var date = (0,_sale_countdown__WEBPACK_IMPORTED_MODULE_1__.parseCountdownDate)(strEndDate);
    if (!date) return;
    _sale_countdown__WEBPACK_IMPORTED_MODULE_1__["default"].add(this.$countdown, date);
  };
  _proto.initGallery = function initGallery() {
    var _this$graphQLNode$vid,
      _this$graphQLNode$cus2,
      _this6 = this;
    var hasVideo = ((_this$graphQLNode$vid = this.graphQLNode.videos) == null || (_this$graphQLNode$vid = _this$graphQLNode$vid.edges) == null ? void 0 : _this$graphQLNode$vid.length) > 0;
    var has360 = !!((_this$graphQLNode$cus2 = this.graphQLNode.customFields) != null && (_this$graphQLNode$cus2 = _this$graphQLNode$cus2.edges) != null && _this$graphQLNode$cus2.find(function (_ref8) {
      var node = _ref8.node;
      return node.name === _this6.image360CustomField;
    }));
    var $videoBtn = this.$scope.find('[data-video-button]');
    var $360Btn = this.$scope.find('[data-360-button]');
    if (hasVideo || has360) {
      var productId = this.productId,
        graphQLToken = this.graphQLToken,
        zoomSize = this.zoomSize,
        productSize = this.productSize,
        thumbSize = this.thumbSize,
        txtVideosLabel = this.txtVideosLabel,
        txtImages360Label = this.txtImages360Label,
        txtImagesLabel = this.txtImagesLabel;
      this.cardImageGalleryModal = new _eyeva_image_gallery__WEBPACK_IMPORTED_MODULE_2__.CardImageGalleryModal(this.$scope, {
        productId: productId,
        graphQLToken: graphQLToken,
        zoomSize: zoomSize,
        productSize: productSize,
        thumbSize: thumbSize,
        txtVideosLabel: txtVideosLabel,
        txtImages360Label: txtImages360Label,
        txtImagesLabel: txtImagesLabel
      });
    }
    if (hasVideo) {
      $videoBtn.on('click', function (event) {
        event.preventDefault();
        _this6.cardImageGalleryModal.openModal({
          firstVideo: true
        });
      }).show();
    }
    if (has360) {
      $360Btn.on('click', function (event) {
        event.preventDefault();
        _this6.cardImageGalleryModal.openModal({
          first360: true
        });
      }).show();
    }
  };
  _proto.initHoverVideo = function initHoverVideo() {
    var _this$graphQLNode$cus3,
      _this7 = this;
    var hoverVideo = (_this$graphQLNode$cus3 = this.graphQLNode.customFields) == null || (_this$graphQLNode$cus3 = _this$graphQLNode$cus3.edges) == null || (_this$graphQLNode$cus3 = _this$graphQLNode$cus3.find(function (_ref9) {
      var node = _ref9.node;
      return node.name === _this7.hoverVideoCustomField;
    })) == null || (_this$graphQLNode$cus3 = _this$graphQLNode$cus3.node) == null ? void 0 : _this$graphQLNode$cus3.value;
    if (!hoverVideo) return;
    var $cardImageContainer = this.$scope.find(this.cardImageContainerSelector).first();
    if (!$cardImageContainer.length) return;
    var $video = $('<video class="card-video" muted loop playsinline />').attr('src', hoverVideo).appendTo($cardImageContainer);
    var videoEl = $video.get(0);
    $cardImageContainer.on('mouseenter', function () {
      $video.addClass('_playing');
      videoEl.play()["catch"](function (error) {
        console.warn('Video play failed:', error); // eslint-disable-line no-console
      });
    });
    $cardImageContainer.on('mouseleave', function () {
      videoEl.pause();
      $video.removeClass('_playing');
    });

    // Touch event - toggle play/pause on touch
    $cardImageContainer.on('touchstart', function () {
      // pause all other product card videos that are currently playing
      $(_this7.cardImageContainerSelector).find('video').each(function (_i, el) {
        if (el !== videoEl) {
          el.pause();
          $(el).removeClass('_playing');
        }
      });

      // Toggle play/pause with error handling
      if (videoEl.paused) {
        $video.addClass('_playing');
        videoEl.play()["catch"](function (error) {
          console.warn('Video play failed:', error); // eslint-disable-line no-console
        });

        // create intersection observer to stop video if not in viewport
        var interactionObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              videoEl.pause();
              $video.removeClass('_playing');
              interactionObserver.unobserve($cardImageContainer[0]);
              interactionObserver.disconnect();
            }
          });
        });
        interactionObserver.observe($cardImageContainer[0]);
      } else {
        videoEl.pause();
        $video.removeClass('_playing');
      }
    });
  };
  return Card;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ },

/***/ "./assets/js/papathemes/card-swatches/ProductSwatches.js"
/*!***************************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/ProductSwatches.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./assets/js/papathemes/card-swatches/Card.js");
/* harmony import */ var _sale_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sale-countdown */ "./assets/js/papathemes/sale-countdown.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(typeof e + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function strEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
var ProductSwatches = /*#__PURE__*/function () {
  function ProductSwatches(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$showSwatches = _ref.showSwatches,
      showSwatches = _ref$showSwatches === void 0 ? true : _ref$showSwatches,
      _ref$shouldUpdateMinM = _ref.shouldUpdateMinMaxQty,
      shouldUpdateMinMaxQty = _ref$shouldUpdateMinM === void 0 ? false : _ref$shouldUpdateMinM,
      _ref$cardSelector = _ref.cardSelector,
      cardSelector = _ref$cardSelector === void 0 ? '.product .card, .productCarousel-slide .card, .product .listItem' : _ref$cardSelector,
      _ref$productIdSelecto = _ref.productIdSelector,
      productIdSelector = _ref$productIdSelecto === void 0 ? '[data-product-id]' : _ref$productIdSelecto,
      _ref$findProductIdByI = _ref.findProductIdByImg,
      findProductIdByImg = _ref$findProductIdByI === void 0 ? false : _ref$findProductIdByI,
      _ref$swatchesContaine = _ref.swatchesContainerSelector,
      swatchesContainerSelector = _ref$swatchesContaine === void 0 ? '.card-text--colorswatches' : _ref$swatchesContaine,
      _ref$cardImageSelecto = _ref.cardImageSelector,
      cardImageSelector = _ref$cardImageSelecto === void 0 ? '.card-image' : _ref$cardImageSelecto,
      _ref$cardImageContain = _ref.cardImageContainerSelector,
      cardImageContainerSelector = _ref$cardImageContain === void 0 ? '.card-img-container' : _ref$cardImageContain,
      _ref$cardTextPriceSel = _ref.cardTextPriceSelector,
      cardTextPriceSelector = _ref$cardTextPriceSel === void 0 ? '.card-text--price' : _ref$cardTextPriceSel,
      _ref$addToCartFormSel = _ref.addToCartFormSelector,
      addToCartFormSelector = _ref$addToCartFormSel === void 0 ? 'form[data-cart-item-add]' : _ref$addToCartFormSel,
      _ref$productViewFile = _ref.productViewFile,
      productViewFile = _ref$productViewFile === void 0 ? 'products/product-view' : _ref$productViewFile,
      _ref$attributesTempla = _ref.attributesTemplate,
      attributesTemplate = _ref$attributesTempla === void 0 ? "\n            <div class=\"productSwatches-attributes\">\n                {{#attributes}}\n                    <div class=\"productSwatches-swatches\" data-swatches=\"{{0.attributeName}}\">\n                        {{#.}}\n                            <a href=\"#\" class=\"productSwatches-swatches-item productSwatches-swatches-item--{{type}}\" title=\"{{label}}\"\n                                data-attribute-id=\"{{attributeId}}\"\n                                data-attribute-value=\"{{attributeValue}}\">{{&content}}</a>\n                        {{/.}}\n                        <button type=\"button\" class=\"productSwatches-swatches-more\" data-more>+ More</button>\n                        <button type=\"button\" class=\"productSwatches-swatches-less\" data-less>- Less</button>\n                    </div>\n                {{/attributes}}\n            </div>\n        " : _ref$attributesTempla,
      _ref$countdownSelecto = _ref.countdownSelector,
      countdownSelector = _ref$countdownSelecto === void 0 ? '.card-countdown' : _ref$countdownSelecto,
      _ref$countdownCustomF = _ref.countdownCustomField,
      countdownCustomField = _ref$countdownCustomF === void 0 ? '__countdown_date' : _ref$countdownCustomF,
      _ref$templateCustomTa = _ref.templateCustomTags,
      templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
      _ref$imageSize = _ref.imageSize,
      imageSize = _ref$imageSize === void 0 ? '590x590' : _ref$imageSize,
      _ref$zoomSize = _ref.zoomSize,
      zoomSize = _ref$zoomSize === void 0 ? '1280x1280' : _ref$zoomSize,
      _ref$productSize = _ref.productSize,
      productSize = _ref$productSize === void 0 ? '900x900' : _ref$productSize,
      _ref$thumbSize = _ref.thumbSize,
      thumbSize = _ref$thumbSize === void 0 ? '80x80' : _ref$thumbSize,
      _ref$inputFinderFunc = _ref.inputFinderFunc,
      inputFinderFunc = _ref$inputFinderFunc === void 0 ? null : _ref$inputFinderFunc,
      _ref$swatchesLimit = _ref.swatchesLimit,
      swatchesLimit = _ref$swatchesLimit === void 0 ? 3 : _ref$swatchesLimit,
      _ref$imageReplacerFun = _ref.imageReplacerFunc,
      imageReplacerFunc = _ref$imageReplacerFun === void 0 ? null : _ref$imageReplacerFun,
      _ref$includeOptions = _ref.includeOptions,
      includeOptions = _ref$includeOptions === void 0 ? [] : _ref$includeOptions,
      _ref$displayStyles = _ref.displayStyles,
      displayStyles = _ref$displayStyles === void 0 ? ['Swatch', 'RectangleBoxes'] : _ref$displayStyles,
      _ref$displayInStockOn = _ref.displayInStockOnly,
      displayInStockOnly = _ref$displayInStockOn === void 0 ? false : _ref$displayInStockOn,
      _ref$autoSelectOption = _ref.autoSelectOptionValues,
      autoSelectOptionValues = _ref$autoSelectOption === void 0 ? true : _ref$autoSelectOption,
      _ref$graphQLToken = _ref.graphQLToken,
      graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken,
      _ref$enableVariantIma = _ref.enableVariantImages,
      enableVariantImages = _ref$enableVariantIma === void 0 ? false : _ref$enableVariantIma,
      _ref$showCountdown = _ref.showCountdown,
      showCountdown = _ref$showCountdown === void 0 ? true : _ref$showCountdown,
      _ref$showGallery = _ref.showGallery,
      showGallery = _ref$showGallery === void 0 ? false : _ref$showGallery,
      _ref$showHoverVideo = _ref.showHoverVideo,
      showHoverVideo = _ref$showHoverVideo === void 0 ? false : _ref$showHoverVideo,
      _ref$image360CustomFi = _ref.image360CustomField,
      image360CustomField = _ref$image360CustomFi === void 0 ? '__@360' : _ref$image360CustomFi,
      _ref$hoverVideoCustom = _ref.hoverVideoCustomField,
      hoverVideoCustomField = _ref$hoverVideoCustom === void 0 ? '__@card_video' : _ref$hoverVideoCustom,
      _ref$showPriceCall = _ref.showPriceCall,
      showPriceCall = _ref$showPriceCall === void 0 ? true : _ref$showPriceCall,
      txtSaleCountdownJSON = _ref.txtSaleCountdownJSON,
      _ref$txtVideosLabel = _ref.txtVideosLabel,
      txtVideosLabel = _ref$txtVideosLabel === void 0 ? 'Videos' : _ref$txtVideosLabel,
      _ref$txtImages360Labe = _ref.txtImages360Label,
      txtImages360Label = _ref$txtImages360Labe === void 0 ? '360 Views' : _ref$txtImages360Labe,
      _ref$txtImagesLabel = _ref.txtImagesLabel,
      txtImagesLabel = _ref$txtImagesLabel === void 0 ? 'Product Images' : _ref$txtImagesLabel;
    this.config = {
      showSwatches: showSwatches,
      shouldUpdateMinMaxQty: shouldUpdateMinMaxQty,
      cardSelector: cardSelector,
      productIdSelector: productIdSelector,
      findProductIdByImg: findProductIdByImg,
      swatchesContainerSelector: swatchesContainerSelector,
      cardImageSelector: cardImageSelector,
      cardImageContainerSelector: cardImageContainerSelector,
      cardTextPriceSelector: cardTextPriceSelector,
      addToCartFormSelector: addToCartFormSelector,
      productViewFile: productViewFile,
      attributesTemplate: attributesTemplate,
      countdownSelector: countdownSelector,
      countdownCustomField: countdownCustomField,
      templateCustomTags: templateCustomTags,
      imageSize: imageSize,
      zoomSize: zoomSize,
      productSize: productSize,
      thumbSize: thumbSize,
      inputFinderFunc: inputFinderFunc,
      swatchesLimit: swatchesLimit,
      imageReplacerFunc: imageReplacerFunc,
      includeOptions: includeOptions.map(function (s) {
        return String(s).trim().toLocaleUpperCase();
      }),
      displayStyles: displayStyles,
      displayInStockOnly: displayInStockOnly,
      autoSelectOptionValues: autoSelectOptionValues,
      graphQLToken: graphQLToken,
      enableVariantImages: enableVariantImages,
      showCountdown: showCountdown,
      showGallery: showGallery,
      showHoverVideo: showHoverVideo,
      image360CustomField: image360CustomField,
      hoverVideoCustomField: hoverVideoCustomField,
      showPriceCall: showPriceCall,
      txtVideosLabel: txtVideosLabel,
      txtImages360Label: txtImages360Label,
      txtImagesLabel: txtImagesLabel
    };
    _sale_countdown__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
      txtSaleCountdownJSON: txtSaleCountdownJSON
    });
    this.bindEvents();
  }
  var _proto = ProductSwatches.prototype;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      this.mutationObserver = new MutationObserver(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this.onWindowScroll();
      }, 200));
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  };
  _proto.onWindowScroll = function onWindowScroll($body) {
    var _this2 = this;
    if ($body === void 0) {
      $body = null;
    }
    /**
     * @type {Card[]}
     */
    var cards = [];
    $(this.config.cardSelector, $body).not('.productSwatchesLoaded').each(function (i, el) {
      var $scope = $(el).addClass('productSwatchesLoaded');
      if ($scope.data('productSwatchesCard')) {
        return;
      }
      var productId = Number($scope.data('productId') || $scope.find(_this2.config.productIdSelector).data('productId'));
      if (!productId) {
        // try to find product ID by img src
        if (!_this2.config.findProductIdByImg) {
          return;
        }
        productId = $scope.find('img').get().reduce(function (id, img) {
          if (id) {
            return id;
          }
          var m = String(img.src).match(/products\/([0-9]+)\//);
          return m ? Number(m[1]) : id;
        }, null);
        if (!productId) {
          return;
        }
      }
      var $attributesContainer = $scope.find(_this2.config.swatchesContainerSelector);
      var $countdown = $scope.find(_this2.config.countdownSelector);
      var $cardPriceContainer = $scope.find(_this2.config.cardTextPriceSelector);
      var hasPriceCall = $scope.find('[data-price-call-placeholder]').length > 0;
      if (!_this2.config.showGallery && !_this2.config.showHoverVideo && !_this2.config.showCountdown && !_this2.config.showSwatches && (!_this2.config.showPriceCall || !hasPriceCall)) {
        return;
      }
      var _this2$config = _this2.config,
        productViewFile = _this2$config.productViewFile,
        attributesTemplate = _this2$config.attributesTemplate,
        countdownCustomField = _this2$config.countdownCustomField,
        templateCustomTags = _this2$config.templateCustomTags,
        addToCartFormSelector = _this2$config.addToCartFormSelector,
        imageSize = _this2$config.imageSize,
        zoomSize = _this2$config.zoomSize,
        productSize = _this2$config.productSize,
        thumbSize = _this2$config.thumbSize,
        inputFinderFunc = _this2$config.inputFinderFunc,
        swatchesLimit = _this2$config.swatchesLimit,
        imageReplacerFunc = _this2$config.imageReplacerFunc,
        includeOptions = _this2$config.includeOptions,
        displayStyles = _this2$config.displayStyles,
        displayInStockOnly = _this2$config.displayInStockOnly,
        autoSelectOptionValues = _this2$config.autoSelectOptionValues,
        graphQLToken = _this2$config.graphQLToken,
        showSwatches = _this2$config.showSwatches,
        shouldUpdateMinMaxQty = _this2$config.shouldUpdateMinMaxQty,
        showCountdown = _this2$config.showCountdown,
        showGallery = _this2$config.showGallery,
        showHoverVideo = _this2$config.showHoverVideo,
        image360CustomField = _this2$config.image360CustomField,
        hoverVideoCustomField = _this2$config.hoverVideoCustomField,
        cardImageContainerSelector = _this2$config.cardImageContainerSelector,
        showPriceCall = _this2$config.showPriceCall,
        txtVideosLabel = _this2$config.txtVideosLabel,
        txtImages360Label = _this2$config.txtImages360Label,
        txtImagesLabel = _this2$config.txtImagesLabel;
      var $cardImage = $scope.find(_this2.config.cardImageSelector).first();
      var card = new _Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $scope: $scope,
        $attributesContainer: $attributesContainer,
        productId: productId,
        productViewFile: productViewFile,
        attributesTemplate: attributesTemplate,
        $countdown: $countdown,
        countdownCustomField: countdownCustomField,
        templateCustomTags: templateCustomTags,
        addToCartFormSelector: addToCartFormSelector,
        $cardImage: $cardImage,
        $cardPriceContainer: $cardPriceContainer,
        imageSize: imageSize,
        zoomSize: zoomSize,
        productSize: productSize,
        thumbSize: thumbSize,
        inputFinderFunc: inputFinderFunc,
        swatchesLimit: swatchesLimit,
        imageReplacerFunc: imageReplacerFunc,
        includeOptions: includeOptions,
        displayStyles: displayStyles,
        displayInStockOnly: displayInStockOnly,
        autoSelectOptionValues: autoSelectOptionValues,
        autoInit: !graphQLToken,
        graphQLToken: graphQLToken,
        showSwatches: showSwatches,
        shouldUpdateMinMaxQty: shouldUpdateMinMaxQty,
        showCountdown: showCountdown,
        showGallery: showGallery,
        showHoverVideo: showHoverVideo,
        image360CustomField: image360CustomField,
        hoverVideoCustomField: hoverVideoCustomField,
        cardImageContainerSelector: cardImageContainerSelector,
        showPriceCall: showPriceCall,
        txtVideosLabel: txtVideosLabel,
        txtImages360Label: txtImages360Label,
        txtImagesLabel: txtImagesLabel
      });
      cards.push(card);
      $scope.data('productSwatchesCard', card);
    });
    if (this.config.graphQLToken && cards.length > 0) {
      var ids = Array.from(new Set(cards.map(function (card) {
        return card.productId;
      })));
      // this.fetchGraphQLProducts(ids).then(edges => {
      //     edges.forEach(edge => {
      //         cards.filter(card => card.productId === edge.node.entityId).forEach(card => {
      //             card.graphQLNode = edge.node; // eslint-disable-line no-param-reassign
      //             card.init();
      //         });
      //     });
      // });

      this.fetchGraphQLProducts(ids).then(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(edges) {
          var variantImages, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                if (!_this2.config.enableVariantImages) {
                  _context.n = 2;
                  break;
                }
                _context.n = 1;
                return _this2.fetchGraphQLVariantImages(_this2.createGraphQLParamsForVariantImages(edges.map(function (_ref3) {
                  var node = _ref3.node;
                  return node;
                })));
              case 1:
                _t = _context.v;
                _context.n = 3;
                break;
              case 2:
                _t = [];
              case 3:
                variantImages = _t;
                edges.forEach(function (edge) {
                  cards.filter(function (card) {
                    return card.productId === edge.node.entityId;
                  }).forEach(function (card) {
                    var _variantImages$find, _variantImages$find2;
                    // eslint-disable-next-line no-param-reassign
                    card.graphQLNode = edge.node;
                    // eslint-disable-next-line no-param-reassign
                    card.variantImageUrlTemplate = (_variantImages$find = variantImages.find(function (v) {
                      return v.productId === card.productId;
                    })) == null ? void 0 : _variantImages$find.imageUrlTemplate;
                    // eslint-disable-next-line no-param-reassign
                    card.arrayAttributeSelect = (_variantImages$find2 = variantImages.find(function (v) {
                      return v.productId === card.productId;
                    })) == null ? void 0 : _variantImages$find2.arrayAttributeIdSelect;
                    card.init();
                  });
                });
              case 4:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  };
  _proto.fetchGraphQLProducts = /*#__PURE__*/function () {
    var _fetchGraphQLProducts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(ids) {
      var edges, i, _ids, resp;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            edges = [];
            i = 0;
          case 1:
            if (!(i < ids.length)) {
              _context2.n = 4;
              break;
            }
            _ids = ids.slice(i, i + 50);
            _context2.n = 2;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                        query ($entityIds: [Int!]) {\n                            site {\n                                products (entityIds: $entityIds, first: 50) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            minPurchaseQuantity\n                                            maxPurchaseQuantity\n                                            " + (this.config.showSwatches ? "\n                                                productOptions {\n                                                    edges {\n                                                        node {\n                                                            entityId\n                                                            displayName\n                                                            ... on CheckboxOption {\n                                                                checkedByDefault\n                                                            }\n                                                            ... on MultipleChoiceOption {\n                                                                displayStyle\n                                                                values {\n                                                                    edges {\n                                                                        node {\n                                                                            entityId\n                                                                            isDefault\n                                                                            ... on SwatchOptionValue {\n                                                                                label\n                                                                                hexColors\n                                                                                imageUrl(width: 100)\n                                                                            }\n                                                                            ... on MultipleChoiceOptionValue {\n                                                                                label\n                                                                            }\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            " : '') + "\n                                            " + (this.config.showCountdown || this.config.showGallery || this.config.showHoverVideo ? "\n                                                customFields(names: [\"" + this.config.countdownCustomField + "\", \"" + this.config.image360CustomField + "\", \"" + this.config.hoverVideoCustomField + "\"]) {\n                                                    edges {\n                                                        node {\n                                                            name\n                                                            value\n                                                        }\n                                                    }\n                                                }\n                                            " : '') + "\n                                            " + (this.config.showGallery ? "\n                                                videos(first: 1) {\n                                                    edges {\n                                                        node {\n                                                            title\n                                                            url\n                                                        }\n                                                    }\n                                                }\n                                            " : '') + "\n                                            availabilityV2 {\n                                                ... on ProductUnavailable {\n                                                message\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ",
                variables: {
                  entityIds: _ids
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.config.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 2:
            resp = _context2.v;
            edges = edges.concat(resp.data.site.products.edges);
          case 3:
            i += 50;
            _context2.n = 1;
            break;
          case 4:
            return _context2.a(2, edges);
        }
      }, _callee2, this);
    }));
    function fetchGraphQLProducts(_x2) {
      return _fetchGraphQLProducts.apply(this, arguments);
    }
    return fetchGraphQLProducts;
  }()
  /**
   * Create GraphQL params for fetching variant images
   * @param {Product} products
   * @returns {[{ entityId: number, optionValueIds: [{ optionEntityId: number, valueEntityId: number }]}]}
   */
  ;
  _proto.createGraphQLParamsForVariantImages = function createGraphQLParamsForVariantImages(products) {
    var searchParams = new URLSearchParams(window.location.search);
    var filters = searchParams.get('_bc_fsnf') ? Array.from(searchParams.entries()).map(function (_ref4) {
      var name = _ref4[0],
        value = _ref4[1];
      return {
        name: name.replace('[]', ''),
        value: value
      };
    }).filter(function (_ref5) {
      var name = _ref5.name;
      return name !== '_bc_fsnf';
    }) : [];
    var gqlParams = [];
    products.forEach(function (node) {
      var optionValueIds = [];
      node.productOptions.edges.forEach(function (_ref6) {
        var _optionNode$values;
        var optionNode = _ref6.node;
        if (Array.isArray((_optionNode$values = optionNode.values) == null ? void 0 : _optionNode$values.edges)) {
          optionNode.values.edges.forEach(function (_ref7) {
            var valueNode = _ref7.node;
            filters.forEach(function (_ref8) {
              var name = _ref8.name,
                value = _ref8.value;
              if (strEqual(name, optionNode.displayName) && strEqual(value, valueNode.label)) {
                if (!optionValueIds.find(function (_ref9) {
                  var optionEntityId = _ref9.optionEntityId;
                  return optionEntityId === optionNode.entityId;
                })) {
                  optionValueIds.push({
                    optionEntityId: optionNode.entityId,
                    valueEntityId: valueNode.entityId
                  });
                }
              }
            });
          });
        }
      });
      if (optionValueIds.length > 0) {
        gqlParams.push({
          entityId: node.entityId,
          optionValueIds: optionValueIds
        });
      }
    });
    return gqlParams;
  }

  /**
   * Fetch variant images via GraphQL
   * @param {[{ entityId: number, optionValueIds: [{ optionEntityId: number, valueEntityId: number }]}]} gqlParams GraphQL variables
   * @returns {[{ productId: number, variantId: number, imageUrlTemplate: string }]}
   */;
  _proto.fetchGraphQLVariantImages =
  /*#__PURE__*/
  function () {
    var _fetchGraphQLVariantImages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(gqlParams) {
      var _this3 = this;
      var products, _loop, i, productImages;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            products = [];
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var _gqlParams, resp;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _gqlParams = gqlParams.slice(i, i + 6);
                    _context3.n = 1;
                    return $.ajax({
                      url: '/graphql',
                      method: 'POST',
                      data: JSON.stringify({
                        query: "\n                        query(\n                            " + _gqlParams.map(function (_ref0) {
                          var entityId = _ref0.entityId;
                          return "$optionValueIds" + entityId + ": [OptionValueId!]";
                        }).join(',\n') + "\n                        ) {\n                            site {\n                                " + _gqlParams.map(function (_ref1) {
                          var entityId = _ref1.entityId;
                          return "\n                                    product" + entityId + ": product(entityId: " + entityId + ") {\n                                        entityId\n                                        variants(optionValueIds: $optionValueIds" + entityId + ", first: 1) {\n                                            edges {\n                                                node {\n                                                    entityId\n                                                    defaultImage {\n                                                        urlTemplate\n                                                    }\n                                                    productOptions {\n                                                        edges {\n                                                            node {\n                                                                entityId\n                                                                displayName\n                                                                ... on CheckboxOption {\n                                                                    checkedByDefault\n                                                                }\n                                                                ... on MultipleChoiceOption {\n                                                                    displayStyle\n                                                                    values {\n                                                                        edges {\n                                                                            node {\n                                                                                entityId\n                                                                                isDefault\n                                                                                ... on MultipleChoiceOptionValue {\n                                                                                    label\n                                                                                }\n                                                                            }\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                ";
                        }).join('\n') + "\n                            }\n                        }\n                    ",
                        variables: _gqlParams.reduce(function (acc, _ref10) {
                          var _Object$assign;
                          var entityId = _ref10.entityId,
                            optionValueIds = _ref10.optionValueIds;
                          return Object.assign({}, acc, (_Object$assign = {}, _Object$assign["optionValueIds" + entityId] = optionValueIds, _Object$assign));
                        }, {})
                      }),
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + _this3.config.graphQLToken
                      },
                      xhrFields: {
                        withCredentials: true
                      }
                    });
                  case 1:
                    resp = _context3.v;
                    products = products.concat(_gqlParams.map(function (_ref11) {
                      var entityId = _ref11.entityId;
                      return resp.data.site["product" + entityId];
                    }).filter(function (p) {
                      return p;
                    }));
                  case 2:
                    return _context3.a(2);
                }
              }, _loop);
            });
            i = 0;
          case 1:
            if (!(i < gqlParams.length)) {
              _context4.n = 3;
              break;
            }
            return _context4.d(_regeneratorValues(_loop()), 2);
          case 2:
            i += 6;
            _context4.n = 1;
            break;
          case 3:
            productImages = products.map(function (product) {
              var _product$variants$edg, _product$variants$edg2, _product$variants$edg3;
              return {
                productId: product.entityId,
                variantId: (_product$variants$edg = product.variants.edges[0]) == null ? void 0 : _product$variants$edg.node.entityId,
                imageUrlTemplate: (_product$variants$edg2 = product.variants.edges[0]) == null || (_product$variants$edg2 = _product$variants$edg2.node.defaultImage) == null ? void 0 : _product$variants$edg2.urlTemplate,
                arrayAttributeIdSelect: (_product$variants$edg3 = product.variants.edges[0]) == null || (_product$variants$edg3 = _product$variants$edg3.node.productOptions) == null ? void 0 : _product$variants$edg3.edges
              };
            });
            return _context4.a(2, productImages);
        }
      }, _callee3);
    }));
    function fetchGraphQLVariantImages(_x3) {
      return _fetchGraphQLVariantImages.apply(this, arguments);
    }
    return fetchGraphQLVariantImages;
  }();
  return ProductSwatches;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSwatches);

/***/ },

/***/ "./assets/js/papathemes/compare-products.js"
/*!**************************************************!*\
  !*** ./assets/js/papathemes/compare-products.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareProducts)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var singleton;
var compareListTmpl = "\n    <div class=\"papathemes-compareList-panel-wrapper is-empty\" id=\"papathemesCompareList\">\n        <div class=\"papathemes-compareList-panel\">\n            <button type=\"button\" class=\"button button--close\" data-compare-product-toggle btn-close>\n                <span class=\"is-srOnly\">Close</span>\n                <span class=\"papathemes-compareList-icon\"><svg><use href=\"#icon-arrow-right-to-line\"></use></svg></span>\n                <span class=\"papathemes-compareList-text\">{{compare}}</span>\n            </button>\n            <button type=\"button\" class=\"button button--open\" data-compare-product-toggle btn-open>\n                <span class=\"is-srOnly\">Open</span>\n                <span class=\"papathemes-compareList-icon\"><svg><use href=\"#icon-arrow-left-from-line\"></use></svg></span>\n                <span class=\"papathemes-compareList-text\">{{compare}}</span>\n            </button>\n            <div class=\"papathemes-compareList-panel-body\">\n                <div class=\"papathemes-compareList\" data-compare-product-list>{{{renderItems}}}</div>\n                <div class=\"papathemes-compareList-actions\">\n                    <a role=\"button\" href=\"{{compare_url}}\" class=\"button button--primary button--small button--compare\" data-compare-product-button>{{compare}}</a>\n                    <button type=\"button\" class=\"button button--plain button--small button--clearAll\" data-compare-product-clearall>{{clear_all}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n";
var compareListItemTmpl = "\n    <div class=\"papathemes-compareList-item\" data-compare-product-item=\"{{id}}\">\n        <a href=\"{{url}}\" class=\"quickview\" data-product-id=\"{{id}}\">\n            <img class=\"papathemes-compareList-img quickview\" src=\"{{image}}\" alt=\"{{alt}}\" title=\"{{alt}}\" data-product-id=\"{{id}}\">\n        </a>\n        <button type=\"button\" class=\"papathemes-compareList-remove\" data-compare-product-remove=\"{{id}}\">\n            <span class=\"is-srOnly\">{{remove}}{{alt}}</span>\n            <span><svg class=\"icon\"><use href=\"#icon-close\"></use></svg></span>\n        </button>\n    </div>\n";
var CompareProducts = /*#__PURE__*/function () {
  function CompareProducts(context) {
    var _this = this;
    this.context = context;
    this.animationTime = 300;
    this.$body = $('body');
    this.products = this.loadProductsFromLocalStorage() || [];
    this.$scope = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(compareListTmpl, {
      compare: context.compareAddonLang_compare,
      clear_all: context.compareAddonLang_clear_all,
      renderItems: function renderItems() {
        return _this.products.map(function (product) {
          return _this.renderItem(product);
        }).join('');
      }
    }));
    if (this.products.length === 0) {
      this.$scope.addClass('is-empty').hide();
    } else {
      this.$scope.removeClass('is-empty').show();
    }
    this.$body.find('.body').before(this.$scope);
    this.$productList = this.$scope.find('[data-compare-product-list]');
    this.$compareButton = this.$scope.find('[data-compare-product-button]');
    this.updateCompareUrl();
    this.loadStateToggle();
    this.bindEvents();
  }
  var _proto = CompareProducts.prototype;
  _proto.loadStateToggle = function loadStateToggle() {
    if (!window.sessionStorage) {
      return;
    }
    var s = Number(window.sessionStorage.getItem('papathemes_compare_products_close'));
    if (s && s === 0) {
      this.$scope.remove('is-closed');
    } else if (s && s !== 0) {
      this.$scope.addClass('is-closed');
    }
  };
  _proto.saveToggleToSessionStorage = function saveToggleToSessionStorage(state) {
    if (!window.sessionStorage) {
      return;
    }
    window.sessionStorage.setItem('papathemes_compare_products_close', state);
  };
  _proto.loadProductsFromLocalStorage = function loadProductsFromLocalStorage() {
    if (!window.localStorage) {
      return;
    }
    var s = window.localStorage.getItem('compareProducts');
    if (s) {
      try {
        return JSON.parse(s);
      } catch (e) {
        return null;
      }
    } else {
      return null;
    }
  };
  _proto.saveProductsToLocalStorage = function saveProductsToLocalStorage() {
    if (!window.localStorage) {
      return;
    }
    window.localStorage.setItem('compareProducts', JSON.stringify(this.products));
  };
  _proto.bindEvents = function bindEvents() {
    var _this2 = this;
    this.$body.on('click', '[data-compare-id]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareId'));
      if (_this2.products.filter(function (item) {
        return item.id === id;
      }).length === 0) {
        _this2.addProduct({
          image: $el.data('compareImage'),
          alt: $el.data('compareTitle'),
          url: $el.data('compareUrl'),
          id: id
        });
        $('[data-message-compare]').show();
        setTimeout(function () {
          $('[data-message-compare]').hide();
        }, 3000);
      }
      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.on('click', '[data-compare-product-remove]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareProductRemove'));
      _this2.removeProduct(id);
      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.find('[data-compare-product-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.$scope.toggleClass('is-closed');
    });
    this.$scope.find('[data-compare-product-clearall]').on('click', function (event) {
      event.preventDefault();
      _this2.clearAllProducts();
    });
    this.$scope.find('[btn-close]').on('click', function (event) {
      event.preventDefault();
      _this2.saveToggleToSessionStorage(1);
    });
    this.$scope.find('[btn-open]').on('click', function (event) {
      event.preventDefault();
      _this2.saveToggleToSessionStorage(0);
    });
  };
  _proto.addProduct = function addProduct(product) {
    var _this3 = this;
    this.products.push(product);
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = $(this.renderItem(product)).hide();
    this.$productList.append($el);
    $el.show(this.animationTime, function () {
      _this3.$scope.removeClass('is-empty').fadeIn(_this3.animationTime);
    });
  };
  _proto.removeProduct = function removeProduct(id) {
    var _this4 = this;
    this.products = this.products.filter(function (item) {
      return item.id !== id;
    });
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find("[data-compare-product-item=" + id + "]");
    $el.fadeOut(this.animationTime, function () {
      $el.remove();
      if (_this4.products.length === 0) {
        _this4.$scope.addClass('is-empty').fadeOut(_this4.animationTime);
      }
    });
  };
  _proto.clearAllProducts = function clearAllProducts() {
    var _this5 = this;
    this.products = [];
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find('[data-compare-product-item]');
    $el.fadeOut(this.animationTime, function () {
      $el.remove();
      _this5.$scope.addClass('is-empty').fadeOut(_this5.animationTime);
    });
  };
  _proto.updateCompareUrl = function updateCompareUrl() {
    var path = this.products.map(function (product) {
      return product.id;
    }).join('/');
    this.$compareButton.attr('href', this.context.urls.compare + "/" + path);
  };
  _proto.renderItem = function renderItem(item) {
    return mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(compareListItemTmpl, Object.assign({}, item, {
      quick_view: this.context.compareAddonLang_quick_view,
      remove: this.context.compareAddonLang_remove
    }));
  };
  return CompareProducts;
}();
function compareProducts(context) {
  if (!singleton) {
    singleton = new CompareProducts(context);
  }
  return singleton;
}

/***/ },

/***/ "./assets/js/papathemes/global.async.js"
/*!**********************************************!*\
  !*** ./assets/js/papathemes/global.async.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajax_addtocart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax-addtocart */ "./assets/js/papathemes/ajax-addtocart.js");
/* harmony import */ var _card_swatches_ProductSwatches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-swatches/ProductSwatches */ "./assets/js/papathemes/card-swatches/ProductSwatches.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist */ "./assets/js/papathemes/wishlist.js");
/* harmony import */ var _recently_viewed_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recently-viewed-products */ "./assets/js/papathemes/recently-viewed-products.js");
/* harmony import */ var _cart_suggested_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-suggested-products */ "./assets/js/papathemes/cart-suggested-products.js");
/* harmony import */ var _cart_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-drawer */ "./assets/js/papathemes/cart-drawer.js");
/* harmony import */ var _quick_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-search */ "./assets/js/papathemes/quick-search.js");
/* harmony import */ var _quick_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quick-view */ "./assets/js/papathemes/quick-view.js");
/* harmony import */ var _shipping_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shipping-countdown */ "./assets/js/papathemes/shipping-countdown.js");
/* harmony import */ var _compare_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./compare-products */ "./assets/js/papathemes/compare-products.js");











/**
 * Init product card swatches, qty, and other product card functionalities
 * @param {Object} context
 * @param {Boolean} context.card_show_swatches reference `config.json` & `layout/base.html`
 * @param {Boolean} context.show_cart_action reference `components/products/card-actions.html`
 * @param {Boolean} context.card_show_qty reference `config.json` & `layout/base.html`
 * @param {Boolean} context.card_show_countdown reference `config.json`. Not used in Eyeva theme.
 * @param {Boolean} context.card_show_gallery reference `config.json`.
 * @param {Boolean} context.card_show_video reference `config.json`.
 * @param {Boolean} context.card_show_variantImg reference `config.json`. Not used in Eyeva theme.
 * @param {Boolean} context.card_show_priceCall reference `config.json`. Not used in Eyeva theme.
 * @param {String} context.graphQLToken reference `layout/base.html` & `layout/base.html`
 * @param {String} context.productgallery_size reference `layout/base.html` & `layout/base.html`
 * @param {String} context.card_swatch_name reference `config.json` & `layout/base.html`
 * @param {String} context.txtSaleCountdownJSON reference `config.json`. Not used in Eyeva theme.
 */
function initProductCards(context) {
  var showSwatches = context.card_show_swatches;
  var shouldUpdateMinMaxQty = context.show_cart_action && context.card_show_qty;
  if ((showSwatches || shouldUpdateMinMaxQty || context.card_show_countdown || context.card_show_gallery || context.card_show_video || context.card_show_variantImg || context.card_show_priceCall) && context.graphQLToken) {
    // eslint-disable-next-line no-new
    new _card_swatches_ProductSwatches__WEBPACK_IMPORTED_MODULE_1__["default"]({
      showSwatches: showSwatches,
      shouldUpdateMinMaxQty: shouldUpdateMinMaxQty,
      graphQLToken: context.graphQLToken,
      imageSize: context.productgallery_size,
      zoomSize: context.zoomSize,
      productSize: context.productSize,
      thumbSize: context.thumbSize,
      swatchesLimit: Number(context.card_swatch_limit),
      includeOptions: context.card_swatch_name.split(',').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return s !== '';
      }),
      displayStyles: ['Swatch'],
      showCountdown: context.card_show_countdown,
      showGallery: context.card_show_gallery,
      showHoverVideo: context.card_show_video,
      enableVariantImages: context.card_show_variantImg,
      showPriceCall: context.card_show_priceCall,
      txtSaleCountdownJSON: context.txtSaleCountdownJSON,
      txtVideosLabel: context.txtVideosLabel,
      txtImages360Label: context.txtImages360Label,
      txtImagesLabel: context.txtImagesLabel
    });
  }
}
function initShippingCountdown(context) {
  if (context.shipping_countdown) {
    (0,_shipping_countdown__WEBPACK_IMPORTED_MODULE_8__["default"])({
      graphQLToken: context.graphQLToken,
      storeTZ: context.shipping_tz,
      countdownValues: {
        parcel: '15:00:00',
        LTL: '12:00:00'
      },
      defaultCountdownTime: context.shipping_countdown
    });
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  initProductCards(context);
  (0,_wishlist__WEBPACK_IMPORTED_MODULE_2__["default"])(context); // should load before any ajax products load
  (0,_recently_viewed_products__WEBPACK_IMPORTED_MODULE_3__.initRecentlyViewedProductsSection)(Object.assign({
    ignoreProductViewedEvent: true
  }, context));
  (0,_cart_suggested_products__WEBPACK_IMPORTED_MODULE_4__["default"])(context);
  initShippingCountdown(context);

  // lower priority
  (0,_quick_search__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_cart_drawer__WEBPACK_IMPORTED_MODULE_5__["default"])(context);
  (0,_ajax_addtocart__WEBPACK_IMPORTED_MODULE_0__["default"])(context);
  (0,_quick_view__WEBPACK_IMPORTED_MODULE_7__["default"])(context);
  (0,_compare_products__WEBPACK_IMPORTED_MODULE_9__["default"])(context);
}

/***/ },

/***/ "./assets/js/papathemes/notification.js"
/*!**********************************************!*\
  !*** ./assets/js/papathemes/notification.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ },

/***/ "./assets/js/papathemes/quick-search.js"
/*!**********************************************!*\
  !*** ./assets/js/papathemes/quick-search.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/papathemes/modal.js");
/* harmony import */ var _theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var medium = (0,_theme_common_media_query_list__WEBPACK_IMPORTED_MODULE_3__["default"])('medium');
var QuickSearch = /*#__PURE__*/function () {
  function QuickSearch() {
    if (QuickSearch._instance) return QuickSearch._instance;
    var $template = $('#quickSearchModalTemplate');
    this.$body = $('body');
    this.quickSearchTemplate = $template.text();
    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_2__["default"]({
      modalTitle: $template.data('modalTitle'),
      overlayExtraClass: '_quickSearch',
      modalExtraClass: '_quickSearch',
      closeOnEsc: true,
      stackable: true
    });
    this.bindEvents();
  }
  QuickSearch.getInstance = function getInstance() {
    if (!QuickSearch._instance) QuickSearch._instance = new QuickSearch();
    return QuickSearch._instance;
  };
  var _proto = QuickSearch.prototype;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    var $header = $('[data-sticky-header]');
    $('[data-papathemes-quick-search-toggle]').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.modal.openModal(_this.quickSearchTemplate, false);
      if (medium.matches) {
        var _$header$;
        var headerHeight = $header.outerHeight();
        var headerTop = ((_$header$ = $header[0]) == null ? void 0 : _$header$.getBoundingClientRect().top) || 0;
        _this.modal.$modal.css('top', headerTop + headerHeight);
      }

      // Focus on the search input
      setTimeout(function () {
        _this.modal.$modal.find('[data-search-quick]').focus();
      }, 400);
      _this.bindModalEvents();
    });

    // close quick search modal when clicking on sticky header
    $header.on('click', function () {
      if (!_this.modal.$modal || _this.modal.$modal.is(':hidden')) return;
      _this.modal.closeModal();
    });
  };
  _proto.bindModalEvents = function bindModalEvents() {
    var _this2 = this;
    var $form = this.modal.$modal.find('[data-quick-search-form]');

    // Catch the submission of the quick-search forms
    $form.on('submit', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var searchQuery = $target.find('input').val();
      var searchUrl = $target.data('url');
      if (searchQuery.length === 0) {
        return;
      }
      window.location.href = searchUrl + "?search_query=" + encodeURIComponent(searchQuery);
    });
    var doSearchDebounce = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (searchQuery) {
      return _this2.doSearch(searchQuery);
    }, 1000);
    var $input = $form.find('[data-search-quick]');
    $input.on('input', function (event) {
      var searchQuery = $(event.currentTarget).val();
      if (searchQuery.length < 3) return;
      $form.addClass('_loading');
      doSearchDebounce(searchQuery);
    });
  };
  _proto.doSearch = function doSearch(searchQuery) {
    var _this3 = this;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.search.search(searchQuery, {
      template: 'search/quick-results'
    }, function (err, response) {
      if (!_this3.modal.$modal) return false;
      var $form = _this3.modal.$modal.find('[data-quick-search-form]');
      $form.removeClass('_loading');
      if (err) return false;
      var $quickSearchResults = _this3.modal.$modal.find('.quickSearchResults');
      $quickSearchResults.html(response);
      var $quickSearchResultsCurrent = $quickSearchResults.filter(':visible');
      var $noResultsMessage = $quickSearchResultsCurrent.find('.quickSearchMessage');
      if ($noResultsMessage.length) {
        $noResultsMessage.attr({
          role: 'status',
          'aria-live': 'polite'
        });
      } else {
        var $quickSearchAriaMessage = _this3.modal.$modal.find('[data-search-aria-message-predefined-text]');
        $quickSearchAriaMessage.addClass('u-hidden');
        var predefinedText = $quickSearchAriaMessage.data('search-aria-message-predefined-text');
        var itemsFoundCount = $quickSearchResultsCurrent.find('.product').length;
        $quickSearchAriaMessage.text(itemsFoundCount + " " + predefinedText + " " + searchQuery);
        setTimeout(function () {
          $quickSearchAriaMessage.removeClass('u-hidden');
        }, 100);
      }
    });
  };
  return QuickSearch;
}();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return QuickSearch.getInstance();
}

/***/ },

/***/ "./assets/js/papathemes/quick-view.js"
/*!********************************************!*\
  !*** ./assets/js/papathemes/quick-view.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _eyeva_product_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eyeva/product-details */ "./assets/js/papathemes/eyeva/product-details.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




function quickViewCornerstone(context) {
  var modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_1__.defaultModal)();
  $('body').on('click', '.quickview', function (event) {
    event.preventDefault();
    var productId = $(event.currentTarget).data('productId');
    modal.open({
      size: 'large'
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(productId, {
      template: 'products/quick-view'
    }, function (err, response) {
      if (err) return;
      modal.updateContent(response);
      (0,_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-collapsible]', {
        $context: modal.$content
      });

      /* papathemes fix: STRF-2471 - Multiple Wish Lists - prevents double-firing
      * of foundation.dropdown click.fndtn.dropdown event */
      modal.$content.off('.fndtn.dropdown');
      modal.$content.find('[data-dropdown-content]').off('.fndtn.dropdown');
      modal.$content.foundation({
        dropdown: {
          active_class: 'is-open'
        }
      });
      modal.$content.find('.productView').addClass('productView--quickView');
      return new _eyeva_product_details__WEBPACK_IMPORTED_MODULE_2__["default"](modal.$content.find('.quickView'), context);
    });
  });
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_1__.defaultModal)();
  $('body').on('click', '.quickview', function () {
    modal.$modal.one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_1__.ModalEvents.open, function () {
      return modal.$modal.addClass('modal--quickView');
    });
    modal.$modal.one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_1__.ModalEvents.closed, function () {
      return modal.$modal.removeClass('modal--quickView');
    });
  });

  /* STRF-2471 - Multiple Wish Lists - prevents double-firing
   * of foundation.dropdown click.fndtn.dropdown event */
  // modal.$modal.on('click', '[data-dropdown]', e => e.stopPropagation());

  // papathemes: Track recently viewed products
  modal.$modal.on(_theme_global_modal__WEBPACK_IMPORTED_MODULE_1__.ModalEvents.loaded, function () {
    var $productView = modal.$content.find('.productView');
    var productId = Number($productView.find('input[name="product_id"]').val());
    if (productId) {
      $('body').trigger('productviewed', [productId]);
    }
  });
  return quickViewCornerstone.apply(void 0, arguments);
}

/***/ },

/***/ "./assets/js/papathemes/wishlist.js"
/*!******************************************!*\
  !*** ./assets/js/papathemes/wishlist.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initWishList)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification */ "./assets/js/papathemes/notification.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/papathemes/modal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(typeof e + " is not iterable"); }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var wishlistInstance = null;
var WishList = /*#__PURE__*/function () {
  function WishList(context) {
    /**
     * @type {Object[]} Customer wishlist objects
     * @see fetchCustomerWishlists
     */
    this.customerWishlists = [];
    /**
     * @type {number[]} Product IDs in customer's wishlists
     * @see fetchCustomerWishlists
     */
    this.customerWishlistProductIds = [];
    /**
     * @type {string} Mustache template for add wishlist dropdown item
     *
     * @link templates/components/common/wishlist-dropdown.html
     * @link templates/components/products/card-wishlist-dropdown.html
     */
    this.dropdownItemTemplate = "\n        <li>\n            <button class=\"_action {{#count}}_has-items{{/count}}\"\n                formaction=\"{{url}}&wishlistid={{id}}\"\n                type=\"submit\"\n                data-wishlist-id={{id}}\n            >\n                {{name}}\n                <i aria-hidden=\"true\" class=\"icon _on\"><svg><use href=\"#icon-check\" /></svg></i>\n            </button>\n        </li>\n    ";
    this.infoIconTemplate = "\n        <i aria-hidden=\"true\" class=\"icon\"><svg><use href=\"#icon-heart\" /></svg></i>\n    ";
    this.anonymousWishlistProductsTemplate = "\n        <div>\n            {{#productCards.length}}\n                <div class=\"productGrid\">\n                    {{#productCards}}\n                        <div class=\"product\">\n                            {{&.}}\n                        </div>\n                    {{/productCards}}\n                </div>\n                <div class=\"_buttons\">\n                    <button class=\"button button--outline\" type=\"button\" data-more>{{txtLoadMore}}</button>\n                    <button class=\"button button--outline\" type=\"button\" data-less>{{txtCollapse}}</button>\n                </div>\n            {{/productCards.length}}\n            {{^productCards.length}}\n                {{txtEmptyWishlist}}\n            {{/productCards.length}}\n        </div>\n    ";
    this.context = context;
    this.customerId = context.customerId;
    this.graphQLToken = context.graphQLToken;
    this.txtAddedItemWishlist = context.txtAddedItemWishlist || '{name} has been added to your Wish List';
    this.txtDeletedItemWishlist = context.txtDeletedItemWishlist || '{name} has been removed from your Wish List';
    this.txtEmptyWishlist = context.txtEmptyWishlist || 'Your wishlist is empty';
    this.txtWishlistViewHeading = context.txtWishlistViewHeading || 'My Wish List: {name}';
    this.txtLoadMore = context.txtLoadMore || 'Load more';
    this.txtCollapse = context.txtCollapse || 'Collapse';
    this.genericError = context.genericError || 'Oops! Something went wrong.';
    this.$body = $('body');
    this.notification = (0,_notification__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_2__["default"](); // modal for creating a new wishlist

    this.onClickAddToWishlist = this.onClickAddToWishlist.bind(this);
    this.bindEvents();
    if (this.customerId) {
      this.initCustomerWishlists();
    } else {
      this.initAnonymousWishlists();
    }
  }

  /**
   * Initialize customer's wishlists for all product cards and product view when customer is logged in.
   * - Fetch customer's wishlists from GraphQL
   * - Add products from local storage to customer's wishlist
   * - Update wishlist button's states
   */
  var _proto = WishList.prototype;
  _proto.initCustomerWishlists =
  /*#__PURE__*/
  function () {
    var _initCustomerWishlists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return this.fetchCustomerWishlists();
          case 1:
            _context.n = 2;
            return this.updateCustomerWishlistFromAnonymous();
          case 2:
            this.updateWishlistButtons();
          case 3:
            return _context.a(2);
        }
      }, _callee, this);
    }));
    function initCustomerWishlists() {
      return _initCustomerWishlists.apply(this, arguments);
    }
    return initCustomerWishlists;
  }()
  /**
   * Initialize local storage wishlists for all product cards and product view when customer is not logged in.
   * - Update wishlist button's states
   */
  ;
  _proto.initAnonymousWishlists = function initAnonymousWishlists() {
    this.updateWishlistButtons();
  }

  /**
   * Get wishlist products from local storage when customer is not logged in.
   *
   * @returns {number[]} List of product IDs
   */;
  _proto.getAnonymousProducts = function getAnonymousProducts() {
    var s = window.localStorage.getItem('WISHLIST_PRODUCTS') || '';
    return s.split(',').map(Number).filter(Boolean);
  }

  /**
   * Save wishlist products to local storage when customer is not logged in.
   *
   * @param {number[]} productIds List of product IDs
   */;
  _proto.saveAnonymousProducts = function saveAnonymousProducts(productIds) {
    window.localStorage.setItem('WISHLIST_PRODUCTS', productIds.join(','));
  }

  /**
   * Clear wishlist products from local storage when customer is not logged in.
   */;
  _proto.clearAnonymousProducts = function clearAnonymousProducts() {
    window.localStorage.removeItem('WISHLIST_PRODUCTS');
  }

  /**
   * Bind events (onClick) for add to wishlist buttons.
   * - [data-wishlist-add-anonymous] add wishlist buttons when customer is not logged in
   * - [data-wishlist-add-customer] add wishlist buttons when customer is logged in
   */;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    this.$body.on('click', '[data-wishlist-add-anonymous]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var $form = _this.getForm($el);
      var name = $form.data('productName');
      var productId = $el.closest('[data-wishlist-add]').data('wishlistAdd');
      var $sameBtns = $("[data-wishlist-add=\"" + productId + "\"] [data-wishlist-add-anonymous]");
      if (productId) {
        if ($el.hasClass('is-active')) {
          _this.removeAnonymousProduct(productId);
          $sameBtns.removeClass('is-active');
          _this.notification.info(_this.txtDeletedItemWishlist.replace('{name}', name), _this.infoIconTemplate);
        } else {
          _this.addAnonymousProduct(productId);
          $sameBtns.addClass('is-active');
          _this.notification.info(_this.txtAddedItemWishlist.replace('{name}', name), _this.infoIconTemplate);
        }
      }
    });

    // when click to the add to wishlist button for logged in customer on product cards,
    // need to populate all wishlists to the dropdown because Stencil doesn't support wishlists on products listing
    this.$body.on('click', '[data-wishlist-add-customer]', function (event) {
      _this.populateCustomerWishlistDropdown($(event.currentTarget));
    });

    // update position of the dropdown when opened to prevent hidden by parent elements
    this.$body.on('opened.fndtn.dropdown', '[data-wishlist-dropdown]', function (_event, $dropdown, $target) {
      _this.updateDropdownPosition($dropdown, $target);
    });

    // create a new wishlist
    this.$body.on('click', '[data-wishlist-create]', function (event) {
      event.preventDefault();
      var $form = _this.getForm($(event.currentTarget));
      var productId = $form.data('wishlistAdd');
      var productName = $form.data('productName');
      _this.openCreatingWishlistModal(productId, productName);
    });

    // listen custom event to update wishlist buttons on request
    this.$body.on('update-wishlist-buttons', function (event, $scope) {
      _this.updateWishlistButtons($scope);
    });

    // open wishlist modal display all wishlist products
    $('[data-wishlist-open]').on('click', function (event) {
      event.preventDefault();
      _this.openAnonymousWishlistProductsModal();
    });
  }

  /**
   * Find the form element (`form[data-wishlist-add]`) of the add to wishlist buttons
   * @param {jQuery} $el
   * @returns {jQuery}
   */;
  _proto.getForm = function getForm($el) {
    var $dropdown = $el.is('[data-wishlist-dropdown]') ? $el : $el.closest('[data-wishlist-dropdown]');
    var form = $dropdown.data('formElement') || $dropdown.closest('[data-wishlist-add]')[0] || $el.closest('[data-wishlist-add]')[0];
    return $(form);
  }

  /**
   * Remove a specific product from local storage wishlist.
   *
   * @param {number} productId Product ID to remove
   */;
  _proto.removeAnonymousProduct = function removeAnonymousProduct(productId) {
    var productIds = this.getAnonymousProducts();
    var index = productIds.indexOf(productId);
    if (index !== -1) {
      productIds.splice(index, 1);
      this.saveAnonymousProducts(productIds);
    }
  }

  /**
   * Add a specific product to local storage wishlist.
   *
   * @param {number} productId Product ID to add
   */;
  _proto.addAnonymousProduct = function addAnonymousProduct(productId) {
    var productIds = this.getAnonymousProducts();
    if (!productIds.includes(productId)) {
      productIds.push(productId);
      this.saveAnonymousProducts(productIds);
    }
  }

  /**
   * Update the state of add to wishlist buttons, to determine whether a product is in a wishlist or not.
   */;
  _proto.updateWishlistButtons = function updateWishlistButtons($scope) {
    if ($scope === void 0) {
      $scope = null;
    }
    var productIds = [].concat(this.getAnonymousProducts(), this.customerWishlistProductIds);
    var $allBtns = $();
    var $body = $scope || this.$body;
    $body.find('[data-wishlist-add]').each(function (_i, el) {
      var $el = $(el);
      var productId = $el.data('wishlistAdd');
      var $btn = $el.find('[data-wishlist-add-anonymous], [data-wishlist-add-customer]');
      if (productIds.includes(productId)) {
        $btn.addClass('is-active');
      } else {
        $btn.removeClass('is-active');
      }
      $allBtns = $allBtns.add($btn);
    });

    // do not animate for the first time loaded
    setTimeout(function () {
      return $allBtns.addClass('_animate');
    }, 500);
  }

  /**
   * Fetch customer's wishlists and their items.
   * - Store product IDs in `customerWishlistProductIds`
   * - Store wishlists in `customerWishlists`
   * @see customerWishlistProductIds
   * @see customerWishlists
   * @returns {Promise<void>}
   */;
  _proto.fetchCustomerWishlists =
  /*#__PURE__*/
  function () {
    var _fetchCustomerWishlists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _this2 = this;
      var fetchWishlistItems, _loop, _iterator, _step;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            fetchWishlistItems = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(wishlistIds, afterItemCursor) {
                var filters, cursor, resp;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      if (wishlistIds === void 0) {
                        wishlistIds = [];
                      }
                      if (afterItemCursor === void 0) {
                        afterItemCursor = '';
                      }
                      filters = wishlistIds.length > 0 ? {
                        entityIds: wishlistIds
                      } : null;
                      cursor = afterItemCursor || '';
                      _context2.n = 1;
                      return $.ajax({
                        url: '/graphql',
                        method: 'POST',
                        data: JSON.stringify({
                          query: "\n                        query(\n                            $filters: WishlistFiltersInput\n                            $cursor: String\n                        ) {\n                            customer {\n                                wishlists(\n                                    first: 50\n                                    filters: $filters\n                                ) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            items(\n                                                first: 50\n                                                after: $cursor\n                                            ) {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        productEntityId\n                                                    }\n                                                }\n                                                pageInfo {\n                                                    hasNextPage\n                                                    endCursor\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ",
                          variables: {
                            cursor: cursor,
                            filters: filters
                          }
                        }),
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: "Bearer " + _this2.graphQLToken
                        },
                        xhrFields: {
                          withCredentials: true
                        }
                      });
                    case 1:
                      resp = _context2.v;
                      return _context2.a(2, resp.data.customer.wishlists.edges.map(function (_ref2) {
                        var node = _ref2.node;
                        return Object.assign({}, node, {
                          items: node.items.edges.map(function (_ref3) {
                            var itemNode = _ref3.node;
                            return itemNode;
                          }),
                          endItemCursor: node.items.pageInfo.hasNextPage && node.items.pageInfo.endCursor ? node.items.pageInfo.endCursor : ''
                        });
                      }));
                  }
                }, _callee2);
              }));
              return function fetchWishlistItems(_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }(); // fetch wishlists items
            _context4.n = 1;
            return fetchWishlistItems();
          case 1:
            this.customerWishlists = _context4.v;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var wishlist, endItemCursor, _wishlist$items, wishlist2, _wishlist2$find, items, nextEndItemCursor;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    wishlist = _step.value;
                    endItemCursor = wishlist.endItemCursor;
                  case 1:
                    if (!endItemCursor) {
                      _context3.n = 3;
                      break;
                    }
                    _context3.n = 2;
                    return fetchWishlistItems([wishlist.entityId], endItemCursor);
                  case 2:
                    wishlist2 = _context3.v;
                    _wishlist2$find = wishlist2.find(function (w) {
                      return w.entityId === wishlist.entityId;
                    }), items = _wishlist2$find.items, nextEndItemCursor = _wishlist2$find.endItemCursor;
                    (_wishlist$items = wishlist.items).push.apply(_wishlist$items, items);
                    endItemCursor = nextEndItemCursor;
                    _context3.n = 1;
                    break;
                  case 3:
                    return _context3.a(2);
                }
              }, _loop);
            });
            _iterator = _createForOfIteratorHelperLoose(this.customerWishlists);
          case 2:
            if ((_step = _iterator()).done) {
              _context4.n = 4;
              break;
            }
            return _context4.d(_regeneratorValues(_loop()), 3);
          case 3:
            _context4.n = 2;
            break;
          case 4:
            /**
             * All product IDs in customer's wishlists
             * @type {Set<number>}
             */
            this.customerWishlistProductIds = Array.from(this.customerWishlists.reduce(function (acc, wishlist) {
              wishlist.items.forEach(function (item) {
                return acc.add(item.productEntityId);
              });
              return acc;
            }, new Set()));
          case 5:
            return _context4.a(2);
        }
      }, _callee3, this);
    }));
    function fetchCustomerWishlists() {
      return _fetchCustomerWishlists.apply(this, arguments);
    }
    return fetchCustomerWishlists;
  }()
  /**
   * Add wishlist products from local storage to to customer's wishlist
   */
  ;
  _proto.updateCustomerWishlistFromAnonymous =
  /*#__PURE__*/
  function () {
    var _updateCustomerWishlistFromAnonymous = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _this3 = this,
        _this$customerWishlis;
      var newProductIds;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            /**
             * Product IDs in local storage only
             * @type {number[]}
             */
            newProductIds = this.getAnonymousProducts().filter(function (productId) {
              return !_this3.customerWishlistProductIds.includes(productId);
            }); // add products in local storage to customer's wishlist
            _context5.n = 1;
            return this.addCustomerWishlistItems((_this$customerWishlis = this.customerWishlists[0]) == null ? void 0 : _this$customerWishlis.entityId, newProductIds);
          case 1:
            // clear local storage
            this.clearAnonymousProducts();
          case 2:
            return _context5.a(2);
        }
      }, _callee4, this);
    }));
    function updateCustomerWishlistFromAnonymous() {
      return _updateCustomerWishlistFromAnonymous.apply(this, arguments);
    }
    return updateCustomerWishlistFromAnonymous;
  }()
  /**
   * Add products to wishlist using GraphQL API.
   *
   * Also update:
   * - `customerWishlists`
   * - `customerWishlistProductIds`
   *
   * @param {number} wishlistId Wishlist ID
   * @param {number[]} productIds List of product IDs
   * @see customerWishlists
   * @see customerWishlistProductIds
   */
  ;
  _proto.addCustomerWishlistItems =
  /*#__PURE__*/
  function () {
    var _addCustomerWishlistItems = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(wishlistId, productIds) {
      var _this4 = this;
      var items, _wishlistId, _wishlist, resp, wishlist;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (productIds.length) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            items = productIds.map(function (productId) {
              return {
                productEntityId: productId
              };
            });
            _wishlistId = wishlistId;
            if (_wishlistId) {
              _context6.n = 3;
              break;
            }
            _context6.n = 2;
            return this.createWishlist('My Wish List');
          case 2:
            _wishlist = _context6.v;
            _wishlistId = _wishlist.entityId;
          case 3:
            _context6.n = 4;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                    mutation (\n                        $wishlistId: Int!\n                        $items: [WishlistItemInput!]!\n                    ) {\n                        wishlist {\n                            addWishlistItems(input: {entityId: $wishlistId, items: $items}) {\n                                result {\n                                    entityId\n                                    name\n                                    items(first: 50) {\n                                        edges {\n                                            node {\n                                                entityId\n                                                productEntityId\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                ",
                variables: {
                  wishlistId: _wishlistId,
                  items: items
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 4:
            resp = _context6.v;
            wishlist = this.customerWishlists.find(function (w) {
              return w.entityId === _wishlistId;
            }); // merge newly added items to the existing wishlists objects
            if (!wishlist) {
              wishlist = Object.assign({}, resp.data.wishlist.addWishlistItems.result, {
                items: resp.data.wishlist.addWishlistItems.result.items.edges.map(function (_ref4) {
                  var node = _ref4.node;
                  return node;
                })
              });
              this.customerWishlists.push(wishlist);
            } else {
              resp.data.wishlist.addWishlistItems.result.items.edges.forEach(function (_ref5) {
                var node = _ref5.node;
                var exist = wishlist.items.find(function (item) {
                  return item.entityId === node.entityId;
                });
                if (!exist) {
                  wishlist.items.push(node);
                }
              });
            }

            // merge newly added product ids to the existing product ids
            resp.data.wishlist.addWishlistItems.result.items.edges.forEach(function (_ref6) {
              var node = _ref6.node;
              var exist = _this4.customerWishlistProductIds.includes(node.productEntityId);
              if (!exist) {
                _this4.customerWishlistProductIds.push(node.productEntityId);
              }
            });

            // add product ids to the the existing product ids (in case graphql response is not updated or error)
            productIds.forEach(function (productId) {
              var exist = _this4.customerWishlistProductIds.includes(productId);
              if (!exist) {
                _this4.customerWishlistProductIds.push(productId);
              }
            });
          case 5:
            return _context6.a(2);
        }
      }, _callee5, this);
    }));
    function addCustomerWishlistItems(_x3, _x4) {
      return _addCustomerWishlistItems.apply(this, arguments);
    }
    return addCustomerWishlistItems;
  }()
  /**
   * Add product to wishlist by URL using REST API
   *
   * @deprecated use `addCustomerWishlistItems` instead for better performance
   * @param {string} url Add product to wishlist URL
   * @param {number} productId Product ID
   * @returns {Promise<any>}
   */
  ;
  _proto.addProductToWishlist =
  /*#__PURE__*/
  function () {
    var _addProductToWishlist = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(url, productId) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (!this.customerWishlistProductIds.includes(productId)) {
              this.customerWishlistProductIds.push(productId);
            }
            return _context7.a(2, $.ajax({
              url: url,
              method: 'POST'
            }));
        }
      }, _callee6, this);
    }));
    function addProductToWishlist(_x5, _x6) {
      return _addProductToWishlist.apply(this, arguments);
    }
    return addProductToWishlist;
  }()
  /**
   * Remove product from a wishlist.
   *
   * Also update:
   * - `customerWishlists`
   * - `customerWishlistProductIds`
   *
   * @param {number} wishlistId Wishlist ID
   * @param {number} productId Product ID
   * @see customerWishlists
   * @see customerWishlistProductIds
   * @returns {Promise<any>}
   */
  ;
  _proto.deleteCustomerWishlistItem =
  /*#__PURE__*/
  function () {
    var _deleteCustomerWishlistItem = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(wishlistId, productId) {
      var wishlist, itemEntityIds, resp, exist;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            wishlist = this.customerWishlists.find(function (w) {
              return w.entityId === wishlistId;
            });
            itemEntityIds = wishlist == null ? void 0 : wishlist.items.filter(function (item) {
              return item.productEntityId === productId;
            }).map(function (item) {
              return item.entityId;
            });
            _context8.n = 1;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                    mutation (\n                        $wishlistId: Int!\n                        $itemEntityIds: [Int!]!\n                    ) {\n                        wishlist {\n                            deleteWishlistItems(input: {entityId: $wishlistId, itemEntityIds: $itemEntityIds}) {\n                                result {\n                                    entityId\n                                }\n                            }\n                        }\n                    }\n                ",
                variables: {
                  wishlistId: wishlistId,
                  itemEntityIds: itemEntityIds
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 1:
            resp = _context8.v;
            // remove product from the wishlists objects
            wishlist.items = wishlist.items.filter(function (item) {
              return item.productEntityId !== productId;
            });

            // remove product id from the product ids if not found in any wishlists
            exist = this.customerWishlists.reduce(function (_found, w) {
              return _found || w.items.find(function (item) {
                return item.productEntityId === productId;
              });
            }, false);
            if (!exist && this.customerWishlistProductIds.includes(productId)) {
              this.customerWishlistProductIds = this.customerWishlistProductIds.filter(function (id) {
                return id !== productId;
              });
            }
            return _context8.a(2, resp);
        }
      }, _callee7, this);
    }));
    function deleteCustomerWishlistItem(_x7, _x8) {
      return _deleteCustomerWishlistItem.apply(this, arguments);
    }
    return deleteCustomerWishlistItem;
  }()
  /**
   * Create a new wishlist and add a product to it.
   * - Also update `customerWishlists` and `customerWishlistProductIds`
   *
   * @param {string} name Wishlist name
   * @param {boolean} isPublic Is wishlist public
   * @param {number} productId Product ID
   * @see customerWishlists
   * @see customerWishlistProductIds
   * @returns {Promise<{
   *   entityId: number,
   *   name: string,
   *   items: { entityId: number, productEntityId: number }[]
   * }>}
   */
  ;
  _proto.createWishlist =
  /*#__PURE__*/
  function () {
    var _createWishlist = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(name, isPublic, productId) {
      var resp, wishlist;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (isPublic === void 0) {
              isPublic = false;
            }
            _context9.n = 1;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                    mutation (\n                        $name: String!\n                        $isPublic: Boolean!\n                        $items: [WishlistItemInput!]\n                    ) {\n                        wishlist {\n                            createWishlist(input: { name: $name, isPublic: $isPublic, items: $items }) {\n                                result {\n                                    entityId\n                                    name\n                                    items(first: 50) {\n                                        edges {\n                                            node {\n                                                entityId\n                                                productEntityId\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                ",
                variables: {
                  name: name,
                  isPublic: isPublic,
                  items: productId ? [{
                    productEntityId: productId
                  }] : []
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 1:
            resp = _context9.v;
            wishlist = Object.assign({}, resp.data.wishlist.createWishlist.result, {
              items: resp.data.wishlist.createWishlist.result.items.edges.map(function (_ref7) {
                var node = _ref7.node;
                return node;
              })
            });
            this.customerWishlists.push(wishlist);
            this.customerWishlistProductIds.push(productId);
            return _context9.a(2, wishlist);
        }
      }, _callee8, this);
    }));
    function createWishlist(_x9, _x0, _x1) {
      return _createWishlist.apply(this, arguments);
    }
    return createWishlist;
  }()
  /**
   * Populate all customer's wishlists to the dropdown for product cards.
   * Also update the state of wishlist buttons in the dropdown to determine which wishlists contain the product.
   *
   * @param {jQuery} $dropdownToggle Dropdown toggle button (add to wishlist icon)
   */
  ;
  _proto.populateCustomerWishlistDropdown = function populateCustomerWishlistDropdown($dropdownToggle) {
    var _this5 = this;
    var dropdownId = $dropdownToggle.data('dropdown');
    var $dropdown = $("#" + dropdownId);
    var $default = $dropdown.find('[data-wishlist-add-to-default]');
    var $form = $dropdownToggle.closest('[data-wishlist-add]');
    var url = $form.attr('action');
    var productId = $form.data('wishlistAdd');

    // populate dropdown wishlists
    if ($default.length > 0 && this.customerWishlists.length > 0) {
      this.customerWishlists.forEach(function (wishlist) {
        var html = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_this5.dropdownItemTemplate, {
          url: url,
          id: wishlist.entityId,
          name: wishlist.name,
          count: wishlist.items.length
        });
        $default.before(html);
      });
      $default.remove();
    } else {
      $default.off('click', this.onClickAddToWishlist).on('click', this.onClickAddToWishlist);
    }
    var $buttons = $dropdown.find('[data-wishlist-id]');
    $buttons.each(function (_i, el) {
      var $btn = $(el);
      var wishlistId = $btn.data('wishlistId');
      var wishlist = _this5.customerWishlists.find(function (w) {
        return w.entityId === wishlistId;
      });
      var found = wishlist == null ? void 0 : wishlist.items.find(function (item) {
        return item.productEntityId === productId;
      });
      if (found) {
        $(el).addClass('is-active');
      }
    });
    $buttons.off('click', this.onClickAddToWishlist).on('click', this.onClickAddToWishlist);
  }

  /**
   * Update the position of the dropdown to prevent hidden by parent elements.
   *
   * @param {jQuery} $dropdown Dropdown element
   * @param {jQuery} $target Target element
   */;
  _proto.updateDropdownPosition = function updateDropdownPosition($dropdown, $target) {
    var rect = $target[0].getBoundingClientRect();
    var align = $dropdown.data('dropdownAlign') || 'left';
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var top = Math.round(rect.top + scrollTop + rect.height);
    var left = Math.round(rect.left + scrollLeft);
    var right = Math.round(document.documentElement.clientWidth - (rect.left + scrollLeft + rect.width));

    // move the dropdown to the body to prevent hidden by parent elements
    if (!$dropdown.parent().is('body')) {
      var form = $dropdown.closest('[data-wishlist-add]')[0];
      $dropdown.data('formElement', form).appendTo('body');
    }
    $dropdown.css({
      top: top,
      left: align === 'left' ? left : '',
      right: align === 'right' ? right : '',
      width: '',
      maxWidth: ''
    });
  }

  /**
   * Handle add to wishlist button click event in the dropdown when customer is logged in.
   * - Add or remove product from wishlist.
   * - Update the state of the button in the dropdown.
   * - Show notification message after added or deleted product from wishlist.
   */;
  _proto.onClickAddToWishlist = function onClickAddToWishlist(event) {
    var _this6 = this;
    event.preventDefault();
    var $button = $(event.currentTarget);
    var $form = this.getForm($button);
    var $toggle = $form.find('[data-wishlist-add-customer]');
    var wishlistId = $button.data('wishlistId');
    var productId = $form.data('wishlistAdd');
    var name = $form.data('productName');
    if ($button.hasClass('is-active')) {
      this.deleteCustomerWishlistItem(wishlistId, productId).then(function () {
        $button.removeClass('is-active');

        // de-active the wishlist icon if not found in any wishlists
        if (!_this6.customerWishlistProductIds.includes(productId)) {
          $toggle.removeClass('is-active');
        }
        _this6.notification.info(_this6.txtDeletedItemWishlist.replace('{name}', name), _this6.infoIconTemplate);
      })["catch"](function () {
        _this6.notification.error(_this6.genericError);
      });
    } else {
      this.addCustomerWishlistItems(wishlistId, [productId]).then(function () {
        $button.addClass('is-active');
        $toggle.addClass('is-active');
        _this6.notification.info(_this6.txtAddedItemWishlist.replace('{name}', name), _this6.infoIconTemplate);
      })["catch"](function () {
        _this6.notification.error(_this6.genericError);
      });
    }
  };
  _proto.openCreatingWishlistModal = function openCreatingWishlistModal(productId, productName) {
    var _this7 = this;
    this.modal.openModal($('#creatingWishlistModalContent').html());
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fixFormElementUniqueIds)(this.modal.$modal);
    this.modal.$modal.find('form').on('submit', function (event) {
      event.preventDefault();
      var $form = $(event.currentTarget);
      var name = $form.find('input[name="wishlistname"]').val();
      var share = $form.find('input[name="publicwishlist"]').prop('checked');
      _this7.createWishlist(name, share, productId).then(function (wishlist) {
        _this7.modal.closeModal();
        _this7.notification.info(_this7.txtAddedItemWishlist.replace('{name}', productName), _this7.infoIconTemplate);

        // append the new wishlist to the dropdown of all product cards and product view
        $('[data-wishlist-dropdown]').each(function (_i, el) {
          var $dropdown = $(el);
          var $form2 = _this7.getForm($dropdown);
          var url = $form2.attr('action');
          var $default = $dropdown.find('[data-wishlist-add-to-default]');

          // only append the new wishlist for dropdowns initialized
          if ($default.length > 0) return;
          $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_this7.dropdownItemTemplate, {
            url: url,
            id: wishlist.entityId,
            name: wishlist.name,
            count: wishlist.items.length
          })).insertBefore($dropdown.children().last());
        });
      });
    });
  }

  /**
   * Open wishlist modal display all wishlist products.
   */;
  _proto.openAnonymousWishlistProductsModal =
  /*#__PURE__*/
  function () {
    var _openAnonymousWishlistProductsModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var _this8 = this;
      var modal, context, customerId, hidePriceFromGuests, txtEmptyWishlist, txtLoadMore, txtCollapse, restrictToLogin, productIds, query, limit, currentPage, generateHtml, $moreBtn, $lessBtn, _t;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            modal = new _modal__WEBPACK_IMPORTED_MODULE_2__["default"]({
              modalExtraClass: 'eyeva__wishlist-modal',
              modalTitle: this.txtWishlistViewHeading.replace('{name}', ''),
              closeOnBackgroundClick: true,
              closeOnEsc: true,
              stackable: true
            });
            modal.openModal('', true);
            context = this.context, customerId = this.customerId, hidePriceFromGuests = this.hidePriceFromGuests, txtEmptyWishlist = this.txtEmptyWishlist, txtLoadMore = this.txtLoadMore, txtCollapse = this.txtCollapse;
            restrictToLogin = !customerId && hidePriceFromGuests;
            productIds = this.getAnonymousProducts();
            query = new _utils__WEBPACK_IMPORTED_MODULE_3__.ProductCardsGraphQLQuery(Object.assign({}, context, {
              restrictToLogin: restrictToLogin
            }));
            limit = 12;
            currentPage = 1;
            generateHtml = /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(page) {
                var from, to, products, productCards, html;
                return _regenerator().w(function (_context0) {
                  while (1) switch (_context0.n) {
                    case 0:
                      from = (page - 1) * limit;
                      to = from + limit;
                      _context0.n = 1;
                      return query.load(productIds.slice(from, to));
                    case 1:
                      products = _context0.v;
                      productCards = products.map(function (product) {
                        return mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_utils__WEBPACK_IMPORTED_MODULE_3__.productCardTemplate, product);
                      });
                      html = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(_this8.anonymousWishlistProductsTemplate, {
                        productCards: productCards,
                        txtEmptyWishlist: txtEmptyWishlist,
                        txtLoadMore: txtLoadMore,
                        txtCollapse: txtCollapse
                      });
                      return _context0.a(2, html);
                  }
                }, _callee9);
              }));
              return function generateHtml(_x10) {
                return _ref8.apply(this, arguments);
              };
            }();
            _t = modal;
            _context10.n = 1;
            return generateHtml(currentPage);
          case 1:
            _t.updateContent.call(_t, _context10.v);
            modal.$modal.find('.productGrid').children().attr('data-page', currentPage);
            this.updateWishlistButtons(modal.$modal);
            $moreBtn = modal.$modal.find('[data-more]').hide();
            $lessBtn = modal.$modal.find('[data-less]').hide();
            if (productIds.length > limit) $moreBtn.show();

            // load more products when click on the "Load more" button
            modal.$modal.find('[data-more]').on('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
              var $products, html, $newProducts;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    currentPage += 1;

                    // show products on the current page if already loaded
                    $products = modal.$modal.find('.productGrid').children().filter(function (i, el) {
                      return $(el).data('page') === currentPage;
                    }).show(); // load more products if not loaded
                    if (!($products.length === 0)) {
                      _context1.n = 2;
                      break;
                    }
                    $moreBtn.addClass('_loading').attr('disabled', true);
                    _context1.n = 1;
                    return generateHtml(currentPage);
                  case 1:
                    html = _context1.v;
                    $newProducts = $(html).find('.productGrid').children().attr('data-page', currentPage);
                    modal.$modal.find('.productGrid').append($newProducts);
                    $moreBtn.removeClass('_loading').removeAttr('disabled');
                    _this8.updateWishlistButtons(modal.$modal);
                  case 2:
                    $lessBtn.show();
                    if (productIds.length <= currentPage * limit) $moreBtn.hide();
                  case 3:
                    return _context1.a(2);
                }
              }, _callee0);
            })));

            // collapse products when click on the "Collapse" button
            modal.$modal.find('[data-less]').on('click', function () {
              currentPage = 1;
              modal.$modal.find('.productGrid').children().filter(function (i, el) {
                return $(el).data('page') > 1;
              }).hide();
              $moreBtn.show();
              $lessBtn.hide();
            });

            // close the wishlist products modal when any other modal is opened (quick view, etc.)
            // $('#modal').one(ModalEvents.opened, () => {
            //     if (modal.$modal) modal.closeModal();
            // });
          case 2:
            return _context10.a(2);
        }
      }, _callee1, this);
    }));
    function openAnonymousWishlistProductsModal() {
      return _openAnonymousWishlistProductsModal.apply(this, arguments);
    }
    return openAnonymousWishlistProductsModal;
  }();
  return WishList;
}();
/**
 * Create a singleton instance of the WishList class.
 *
 * @param {Object} context
 * @returns {WishList}
 */
function initWishList(context) {
  if (!wishlistInstance) {
    wishlistInstance = new WishList(context);
  }
  return wishlistInstance;
}

/***/ },

/***/ "./node_modules/lodash/_SetCache.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ },

/***/ "./node_modules/lodash/_arrayIncludes.js"
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ },

/***/ "./node_modules/lodash/_arrayIncludesWith.js"
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
(module) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ },

/***/ "./node_modules/lodash/_baseIndexOf.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
(module) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ },

/***/ "./node_modules/lodash/_baseUniq.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ },

/***/ "./node_modules/lodash/_cacheHas.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ },

/***/ "./node_modules/lodash/_createSet.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
(module) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ },

/***/ "./node_modules/lodash/_setToArray.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dG9jYXJ0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FyZC1zd2F0Y2hlcy9DYXJkLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FyZC1zd2F0Y2hlcy9Qcm9kdWN0U3dhdGNoZXMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZ2xvYmFsLmFzeW5jLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvcXVpY2stc2VhcmNoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvcXVpY2stdmlldy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3dpc2hsaXN0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgZGVmYXVsdE1vZGFsLCBNb2RhbEV2ZW50cywgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyBvcGVuQ2FydFByZXZpZXcgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbi8vIFN1cGVybWFya2V0IC0gT0JQUyBNb2RcclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxuZnVuY3Rpb24gc2hha2UoJGVsLCBzZXR0aW5ncykge1xyXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBzZXR0aW5ncyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuaW50ZXJ2YWwgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuaW50ZXJ2YWwgPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5kaXN0YW5jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBzZXR0aW5ncy5kaXN0YW5jZSA9IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MudGltZXMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgc2V0dGluZ3MudGltZXMgPSA0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuY29tcGxldGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAkZWwuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xyXG5cclxuICAgIGZvciAobGV0IGl0ZXIgPSAwOyBpdGVyIDwgKHNldHRpbmdzLnRpbWVzICsgMSk7IGl0ZXIrKykge1xyXG4gICAgICAgICRlbC5hbmltYXRlKHsgbGVmdDogKChpdGVyICUgMiA9PT0gMCA/IHNldHRpbmdzLmRpc3RhbmNlIDogc2V0dGluZ3MuZGlzdGFuY2UgKiAtMSkpIH0sIHNldHRpbmdzLmludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAkZWwuYW5pbWF0ZSh7IGxlZnQ6IDAgfSwgc2V0dGluZ3MuaW50ZXJ2YWwsIHNldHRpbmdzLmNvbXBsZXRlKTtcclxufVxyXG4vKiBlc2xpbnQtZW5hYmxlICovXHJcblxyXG5mdW5jdGlvbiBvbk1pbmlQcmV2aWV3TW9kYWxPcGVuKCkge1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdoYXMtYWN0aXZlTW9kYWwtLW1pbmlQcmV2aWV3Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTWluaVByZXZpZXdNb2RhbENsb3NlKCkge1xyXG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtYWN0aXZlTW9kYWwtLW1pbmlQcmV2aWV3Jyk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYXV0b0Nsb3NlVGltZXIgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuYXV0b0Nsb3NlVGltZXIpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9DbG9zZVRpbWVyKTtcclxuICAgICAgICB0aGlzLmF1dG9DbG9zZVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlNb2RhbEF1dG9DbG9zZShtb2RhbCkge1xyXG4gICAgY29uc3QgJGF1dG9DbG9zZUVsID0gbW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLWF1dG8tY2xvc2VdJyk7XHJcbiAgICBpZiAoJGF1dG9DbG9zZUVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgc2VjID0gJGF1dG9DbG9zZUVsLmRhdGEoJ2F1dG9DbG9zZScpIHx8IDU7XHJcbiAgICAgICAgY29uc3QgJGNvdW50ID0gJGF1dG9DbG9zZUVsLmZpbmQoJy5jb3VudCcpO1xyXG4gICAgICAgICRjb3VudC5odG1sKHNlYyk7XHJcblxyXG4gICAgICAgIG1vZGFsLmF1dG9DbG9zZVRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICBpZiAoc2VjID4gMSkge1xyXG4gICAgICAgICAgICAgICAgc2VjLS07XHJcbiAgICAgICAgICAgICAgICAkY291bnQuaHRtbChzZWMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobW9kYWwuYXV0b0Nsb3NlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuYXV0b0Nsb3NlVGltZXIgPSBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgVVJMIFBhcmFtZXRlclxyXG4gKlxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFBhcmFtZXRlciBuYW1lXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gVVJMXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuIHN0cmluZyB2YWx1ZSBvciAwIGlmIG5vdCBleGlzdFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VVJMUGFyYW0obmFtZSwgdXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFJlZ0V4cChgW1xcPyZdJHtuYW1lfT0oW14mI10qKWApLmV4ZWModXJsKTtcclxuICAgIHJldHVybiByZXN1bHRzWzFdIHx8IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgY2FydCBjb250ZW50c1xyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1IYXNoXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcclxuICovXHJcbmZ1bmN0aW9uIGdldENhcnRDb250ZW50KGNhcnRJdGVtSGFzaCwgb25Db21wbGV0ZSkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSGFzaCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICBjYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIG9uQ29tcGxldGUpO1xyXG59XHJcblxyXG4vKipcclxuICogVXBkYXRlIGNhcnQgY29udGVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1IYXNoXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1IYXNoKSB7XHJcbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUhhc2gsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcclxuICAgICAgICBhcHBseU1vZGFsQXV0b0Nsb3NlKG1vZGFsKTsgLy8gU3VwZXJtYXJrZXRcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxyXG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcclxuICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcclxuICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydC1xdWFudGl0eScpIHx8IDA7XHJcblxyXG4gICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcclxuICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcclxuXHJcbiAgICAgICAgLy8gU3VwZXJtYXJrZXQgLSBPQlBTIE1vZFxyXG4gICAgICAgIHNoYWtlKCQoJy5uYXZVc2VyLWl0ZW0tLWNhcnQgPiAubmF2VXNlci1hY3Rpb24nKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3aW5kb3cgaXMgYmVpbmcgcnVuIGluc2lkZSBhbiBpZnJhbWVcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1J1bm5pbmdJbklmcmFtZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVkaXJlY3QgdG8gdXJsXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcclxuICovXHJcbmZ1bmN0aW9uIHJlZGlyZWN0VG8odXJsKSB7XHJcbiAgICBpZiAoaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xyXG4gICAgICAgIHdpbmRvdy50b3AubG9jYXRpb24gPSB1cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF07XHJcblxyXG4gICAgbW9kYWwuJG1vZGFsLmFkZENsYXNzKCdwcmV2aWV3LW1vZGFsJykuYWRkQ2xhc3MoYHByZXZpZXctbW9kYWwtLSR7Y29udGV4dC5hZGRfdG9fY2FydF9wb3B1cH1gKTtcclxuICAgIGlmIChjb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwID09PSAnbWluaScpIHtcclxuICAgICAgICAvLyB1bmJpbmQgb3Blbi9jbG9zZSBldmVudCBvZiB0aGUgb3JpZ2luYWwgbW9kYWxcclxuICAgICAgICBtb2RhbC4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLm9wZW4sIG1vZGFsLm9uTW9kYWxPcGVuKTtcclxuICAgICAgICBtb2RhbC4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLmNsb3NlLCBtb2RhbC5vbk1vZGFsQ2xvc2UpO1xyXG5cclxuICAgICAgICAvLyBiaW5kIG9wZW4vY2xhc3MgZXZlbnQgZm9yIG1pbmkgcHJldmlldyBtb2RhbFxyXG4gICAgICAgIG1vZGFsLm9uTW9kYWxPcGVuID0gb25NaW5pUHJldmlld01vZGFsT3Blbi5iaW5kKG1vZGFsKTtcclxuICAgICAgICBtb2RhbC5vbk1vZGFsQ2xvc2UgPSBvbk1pbmlQcmV2aWV3TW9kYWxDbG9zZS5iaW5kKG1vZGFsKTtcclxuICAgICAgICBtb2RhbC4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbiwgbW9kYWwub25Nb2RhbE9wZW4pO1xyXG4gICAgICAgIG1vZGFsLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZSwgbW9kYWwub25Nb2RhbENsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXBhcGF0aGVtZXMtY2FydC1pdGVtLWFkZF0nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxyXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBnZXRVUkxQYXJhbSgncHJvZHVjdF9pZCcsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZik7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9pZCcsIHByb2R1Y3RJZCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnZm9ybSwgLmNhcmQnKTtcclxuICAgICAgICBjb25zdCBxdHkgPSAkcGFyZW50LmZpbmQoYGlucHV0W25hbWU9cXR5XyR7cHJvZHVjdElkfV06dmlzaWJsZWApLnZhbCgpO1xyXG4gICAgICAgIGlmIChxdHkgJiYgcXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHF0eSwgMTApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdxdHlbXScsIHF0eSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJChldmVudC5jdXJyZW50VGFyZ2V0KS5pcygnW2RhdGEtY2hlY2stcXR5XScpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LmFqYXhBZGRUb0NhcnRFbnRlclF0eSB8fCAnUGxlYXNlIGVudGVyIHF1YW50aXR5Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZvcm1EYXRhLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuXHJcbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YSAmJiByZXNwb25zZS5kYXRhLmRhdGEudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UuZGF0YS5kYXRhLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldDogU3VwcG9ydCByZWRpcmVjdCB0byBjYXJ0IHBhZ2UgYWZ0ZXIgYWRkZWQgdG8gY2FydFxyXG4gICAgICAgICAgICBpZiAoY29udGV4dC5yZWRpcmVjdF9jYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IGNvbnRleHQudXJscy5jYXJ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcGFwYXRoZW1lcy1pbmhlYWx0aDogU2hvdyBjYXJ0IHByZXZpZXcgb24gdGhlIHJpZ2h0IHNpZGVcclxuICAgICAgICAgICAgaWYgKGNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgPT09ICdjYXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xvc2UgcXVpY2stdmlldyBtb2RhbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmTW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZk1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignYWpheC1hZGR0b2NhcnQtaXRlbS1hZGRlZCcsIHByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbkNhcnRQcmV2aWV3KHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3VwZXJtYXJrZXQgLSBPQlBTIE1vZFxyXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwICE9PSAnaGlkZScpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oeyBzaXplOiAnbGFyZ2UnIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignYWpheC1hZGR0b2NhcnQtaXRlbS1hZGRlZCcsIHByb2R1Y3RJZCk7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaGFzaCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5pbXBvcnQgU2FsZUNvdW50ZG93biwgeyBwYXJzZUNvdW50ZG93bkRhdGUgfSBmcm9tICcuLi9zYWxlLWNvdW50ZG93bic7XHJcbmltcG9ydCB7IENhcmRJbWFnZUdhbGxlcnlNb2RhbCB9IGZyb20gJy4uL2V5ZXZhL2ltYWdlLWdhbGxlcnknO1xyXG5cclxuY2xhc3MgQ2FyZCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gb3B0aW9ucy4kc2NvcGVcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBvcHRpb25zLiRhdHRyaWJ1dGVzQ29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5wcm9kdWN0SWRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnByb2R1Y3RWaWV3RmlsZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuYXR0cmlidXRlc1RlbXBsYXRlXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gb3B0aW9ucy4kY291bnRkb3duXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5jb3VudGRvd25DdXN0b21GaWVsZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMudGVtcGxhdGVDdXN0b21UYWdzXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5hZGRUb0NhcnRGb3JtU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBvcHRpb25zLiRjYXJkSW1hZ2VcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBvcHRpb25zLiRjYXJkUHJpY2VDb250YWluZXJcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmltYWdlU2l6ZVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMuem9vbVNpemVcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnByb2R1Y3RTaXplXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy50aHVtYlNpemVcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMuaW5wdXRGaW5kZXJGdW5jXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5zd2F0Y2hlc0xpbWl0XHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmltYWdlUmVwbGFjZXJGdW5jXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmluY2x1ZGVPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmRpc3BsYXlTdHlsZXNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5kaXNwbGF5SW5TdG9ja09ubHlcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5hdXRvU2VsZWN0T3B0aW9uVmFsdWVzXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuYXV0b0luaXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmdyYXBoUUxOb2RlXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5ncmFwaFFMVG9rZW5cclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5zaG93U3dhdGNoZXNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5zaG91bGRVcGRhdGVNaW5NYXhRdHlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnZhcmlhbnRJbWFnZVVybFRlbXBsYXRlXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmFycmF5QXR0cmlidXRlU2VsZWN0XHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuc2hvd0NvdW50ZG93blxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLnNob3dHYWxsZXJ5XHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuc2hvd0hvdmVyVmlkZW9cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmltYWdlMzYwQ3VzdG9tRmllbGRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmhvdmVyVmlkZW9DdXN0b21GaWVsZFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IG9wdGlvbnMuY2FyZEltYWdlQ29udGFpbmVyU2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5zaG93UHJpY2VDYWxsXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy50eHRWaWRlb3NMYWJlbFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudHh0SW1hZ2VzMzYwTGFiZWxcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnR4dEltYWdlc0xhYmVsXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICRzY29wZSxcclxuICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcclxuICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgcHJvZHVjdFZpZXdGaWxlLFxyXG4gICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcclxuICAgICAgICAkY291bnRkb3duLFxyXG4gICAgICAgIGNvdW50ZG93bkN1c3RvbUZpZWxkLFxyXG4gICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcclxuICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgJGNhcmRJbWFnZSxcclxuICAgICAgICAkY2FyZFByaWNlQ29udGFpbmVyLFxyXG4gICAgICAgIGltYWdlU2l6ZSxcclxuICAgICAgICB6b29tU2l6ZSxcclxuICAgICAgICBwcm9kdWN0U2l6ZSxcclxuICAgICAgICB0aHVtYlNpemUsXHJcbiAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxyXG4gICAgICAgIHN3YXRjaGVzTGltaXQsXHJcbiAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXHJcbiAgICAgICAgaW5jbHVkZU9wdGlvbnMsXHJcbiAgICAgICAgZGlzcGxheVN0eWxlcyxcclxuICAgICAgICBkaXNwbGF5SW5TdG9ja09ubHksXHJcbiAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcclxuICAgICAgICBhdXRvSW5pdCA9IHRydWUsXHJcbiAgICAgICAgZ3JhcGhRTE5vZGUsXHJcbiAgICAgICAgZ3JhcGhRTFRva2VuLFxyXG4gICAgICAgIHNob3dTd2F0Y2hlcyxcclxuICAgICAgICBzaG91bGRVcGRhdGVNaW5NYXhRdHksXHJcbiAgICAgICAgdmFyaWFudEltYWdlVXJsVGVtcGxhdGUsXHJcbiAgICAgICAgYXJyYXlBdHRyaWJ1dGVTZWxlY3QsXHJcbiAgICAgICAgc2hvd0NvdW50ZG93bixcclxuICAgICAgICBzaG93R2FsbGVyeSxcclxuICAgICAgICBzaG93SG92ZXJWaWRlbyxcclxuICAgICAgICBpbWFnZTM2MEN1c3RvbUZpZWxkLFxyXG4gICAgICAgIGhvdmVyVmlkZW9DdXN0b21GaWVsZCxcclxuICAgICAgICBjYXJkSW1hZ2VDb250YWluZXJTZWxlY3RvcixcclxuICAgICAgICBzaG93UHJpY2VDYWxsLFxyXG4gICAgICAgIHR4dFZpZGVvc0xhYmVsLFxyXG4gICAgICAgIHR4dEltYWdlczM2MExhYmVsLFxyXG4gICAgICAgIHR4dEltYWdlc0xhYmVsLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIgPSAkYXR0cmlidXRlc0NvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLnByb2R1Y3RWaWV3RmlsZSA9IHByb2R1Y3RWaWV3RmlsZTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGF0dHJpYnV0ZXNUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLiRjb3VudGRvd24gPSAkY291bnRkb3duO1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duQ3VzdG9tRmllbGQgPSBjb3VudGRvd25DdXN0b21GaWVsZDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncyA9IHRlbXBsYXRlQ3VzdG9tVGFncztcclxuICAgICAgICB0aGlzLmFkZFRvQ2FydEZvcm1TZWxlY3RvciA9IGFkZFRvQ2FydEZvcm1TZWxlY3RvcjtcclxuICAgICAgICB0aGlzLiRjYXJkSW1hZ2UgPSAkY2FyZEltYWdlO1xyXG4gICAgICAgIHRoaXMuJGNhcmRQcmljZUNvbnRhaW5lciA9ICRjYXJkUHJpY2VDb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNpemUgPSBpbWFnZVNpemU7XHJcbiAgICAgICAgdGhpcy56b29tU2l6ZSA9IHpvb21TaXplO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdFNpemUgPSBwcm9kdWN0U2l6ZTtcclxuICAgICAgICB0aGlzLnRodW1iU2l6ZSA9IHRodW1iU2l6ZTtcclxuICAgICAgICB0aGlzLmlucHV0RmluZGVyRnVuYyA9IGlucHV0RmluZGVyRnVuYztcclxuICAgICAgICB0aGlzLnN3YXRjaGVzTGltaXQgPSBzd2F0Y2hlc0xpbWl0O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmMgPSBpbWFnZVJlcGxhY2VyRnVuYztcclxuICAgICAgICB0aGlzLmluY2x1ZGVPcHRpb25zID0gaW5jbHVkZU9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U3R5bGVzID0gZGlzcGxheVN0eWxlcztcclxuICAgICAgICB0aGlzLmRpc3BsYXlJblN0b2NrT25seSA9IGRpc3BsYXlJblN0b2NrT25seTtcclxuICAgICAgICB0aGlzLmF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgPSBhdXRvU2VsZWN0T3B0aW9uVmFsdWVzO1xyXG4gICAgICAgIHRoaXMuYXV0b0luaXQgPSBhdXRvSW5pdDtcclxuICAgICAgICB0aGlzLmdyYXBoUUxOb2RlID0gZ3JhcGhRTE5vZGU7XHJcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XHJcbiAgICAgICAgdGhpcy5zaG93U3dhdGNoZXMgPSBzaG93U3dhdGNoZXM7XHJcbiAgICAgICAgdGhpcy5zaG91bGRVcGRhdGVNaW5NYXhRdHkgPSBzaG91bGRVcGRhdGVNaW5NYXhRdHk7XHJcbiAgICAgICAgdGhpcy52YXJpYW50SW1hZ2VVcmxUZW1wbGF0ZSA9IHZhcmlhbnRJbWFnZVVybFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMuYXJyYXlBdHRyaWJ1dGVTZWxlY3QgPSBhcnJheUF0dHJpYnV0ZVNlbGVjdDtcclxuICAgICAgICB0aGlzLnNob3dDb3VudGRvd24gPSBzaG93Q291bnRkb3duO1xyXG4gICAgICAgIHRoaXMuc2hvd0dhbGxlcnkgPSBzaG93R2FsbGVyeTtcclxuICAgICAgICB0aGlzLnNob3dIb3ZlclZpZGVvID0gc2hvd0hvdmVyVmlkZW87XHJcbiAgICAgICAgdGhpcy5pbWFnZTM2MEN1c3RvbUZpZWxkID0gaW1hZ2UzNjBDdXN0b21GaWVsZDtcclxuICAgICAgICB0aGlzLmhvdmVyVmlkZW9DdXN0b21GaWVsZCA9IGhvdmVyVmlkZW9DdXN0b21GaWVsZDtcclxuICAgICAgICB0aGlzLmNhcmRJbWFnZUNvbnRhaW5lclNlbGVjdG9yID0gY2FyZEltYWdlQ29udGFpbmVyU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5zaG93UHJpY2VDYWxsID0gc2hvd1ByaWNlQ2FsbDtcclxuICAgICAgICB0aGlzLnR4dFZpZGVvc0xhYmVsID0gdHh0VmlkZW9zTGFiZWw7XHJcbiAgICAgICAgdGhpcy50eHRJbWFnZXMzNjBMYWJlbCA9IHR4dEltYWdlczM2MExhYmVsO1xyXG4gICAgICAgIHRoaXMudHh0SW1hZ2VzTGFiZWwgPSB0eHRJbWFnZXNMYWJlbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0luaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFyaWFudEltYWdlVXJsVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJkSW1hZ2UodGhpcy52YXJpYW50SW1hZ2VVcmxUZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNwbGF5SW5TdG9ja09ubHkgJiYgdGhpcy5zaG93U3dhdGNoZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ3JhcGhRTE5vZGUgJiYgdGhpcy5zaG93U3dhdGNoZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dTd2F0Y2hlcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RQcm9kdWN0T3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSAmJiB0aGlzLnNob3dDb3VudGRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q291bnRkb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlICYmIHRoaXMuc2hvd0dhbGxlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0R2FsbGVyeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSAmJiB0aGlzLnNob3dIb3ZlclZpZGVvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEhvdmVyVmlkZW8oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUgJiYgdGhpcy5zaG93UHJpY2VDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FyZFByaWNlTWVzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVBdHRyaWJ1dGVTZWxlY3QodGhpcy5hcnJheUF0dHJpYnV0ZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVwZGF0ZU1pbk1heFF0eSAmJiB0aGlzLmdyYXBoUUxOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWluTWF4UXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1pbk1heFF0eSgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG1pblB1cmNoYXNlUXVhbnRpdHksXHJcbiAgICAgICAgICAgIG1heFB1cmNoYXNlUXVhbnRpdHksXHJcbiAgICAgICAgfSA9IHRoaXMuZ3JhcGhRTE5vZGU7XHJcblxyXG4gICAgICAgIGNvbnN0ICRpbnB1dCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcmQtcXVhbnRpdHktY2hhbmdlXSBpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0ICRib0lucHV0ID0gdGhpcy4kc2NvcGUuZmluZCgnaW5wdXRbZGF0YS1idWxrb3JkZXItcXR5LWlkXScpO1xyXG4gICAgICAgIGNvbnN0IHF0eSA9IE51bWJlcigkaW5wdXQudmFsKCkpIHx8IDE7XHJcblxyXG4gICAgICAgIGlmIChtaW5QdXJjaGFzZVF1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdtaW4nLCBtaW5QdXJjaGFzZVF1YW50aXR5KS5hdHRyKCdkYXRhLXF1YW50aXR5LW1pbicsIG1pblB1cmNoYXNlUXVhbnRpdHkpO1xyXG4gICAgICAgICAgICBpZiAocXR5IDwgbWluUHVyY2hhc2VRdWFudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChtaW5QdXJjaGFzZVF1YW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkYm9JbnB1dC5hdHRyKCdkYXRhLXF1YW50aXR5LW1pbicsIG1pblB1cmNoYXNlUXVhbnRpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1heFB1cmNoYXNlUXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ21heCcsIG1heFB1cmNoYXNlUXVhbnRpdHkpLmF0dHIoJ2RhdGEtcXVhbnRpdHktbWF4JywgbWF4UHVyY2hhc2VRdWFudGl0eSk7XHJcbiAgICAgICAgICAgIGlmIChxdHkgPiBtYXhQdXJjaGFzZVF1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1heFB1cmNoYXNlUXVhbnRpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRib0lucHV0LmF0dHIoJ2RhdGEtcXVhbnRpdHktbWF4JywgbWF4UHVyY2hhc2VRdWFudGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RJblN0b2NrQXR0cmlidXRlcygpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGAvcmVtb3RlL3YxL3Byb2R1Y3QtYXR0cmlidXRlcy8ke3RoaXMucHJvZHVjdElkfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhZGQnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogdGhpcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdzdGVuY2lsLWNvbmZpZyc6ICd7fScsXHJcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcclxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcC5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyB8fCBhdHRyaWJ1dGVzRGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogYC9wcm9kdWN0cy5waHA/cHJvZHVjdElkPSR7dGhpcy5wcm9kdWN0SWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogJ3t9JyxcclxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiBge1wicmVuZGVyX3dpdGhcIjpcIiR7dGhpcy5wcm9kdWN0Vmlld0ZpbGV9XCJ9YCxcclxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSwgcmVzcCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSA9IHt9LCByZXNwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogW10sXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGxvYWQgYXR0cmlidXRlcyBmcm9tIGdyYXBoUUxcclxuICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzID0gdGhpcy5ncmFwaFFMTm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5yZWR1Y2UoKF9vcHRpb25zLCB7IG5vZGU6IG9wdGlvbk5vZGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5jbHVkZU9wdGlvbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5pbmNsdWRlT3B0aW9ucy5pbmNsdWRlcyhTdHJpbmcob3B0aW9uTm9kZS5kaXNwbGF5TmFtZSkudG9Mb2NhbGVVcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX29wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gb25seSBkaXNwbGF5IHN3YXRjaCBvciByZWN0YW5nbGUgb3B0aW9ucyBpZiBpbmNsdWRlT3B0aW9ucyBpcyBlbXB0eVxyXG4gICAgICAgICAgICAgICAgaWYgKCghdGhpcy5pbmNsdWRlT3B0aW9ucyB8fCB0aGlzLmluY2x1ZGVPcHRpb25zLmxlbmd0aCA9PT0gMCkgJiYgIXRoaXMuZGlzcGxheVN0eWxlcy5pbmNsdWRlcyhvcHRpb25Ob2RlLmRpc3BsYXlTdHlsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX29wdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gb25seSBkaXNwbGF5IHRoZSBmaXJzdCBvcHRpb24gaWYgaW5jbHVkZU9wdGlvbnMgaXMgZW1wdHlcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbmNsdWRlT3B0aW9ucyB8fCBfb3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX3ZhbHVlcywgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMgIT09ICdvYmplY3QnIHx8IGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMuaW5kZXhPZih2YWx1ZU5vZGUuZW50aXR5SWQpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5vZGUuaW1hZ2VVcmwgfHwgdmFsdWVOb2RlLmhleENvbG9ycyB8fCB2YWx1ZU5vZGUubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YWx1ZU5vZGUuaW1hZ2VVcmwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ZhbHVlTm9kZS5pbWFnZVVybH0nKTtcIj48L3NwYW4+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodmFsdWVOb2RlLmhleENvbG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVOb2RlLmhleENvbG9ycy5tYXAoY29sb3IgPT4gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJyB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+YCkuam9pbignJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGA8c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnRcIj4ke3ZhbHVlTm9kZS5sYWJlbH08L3NwYW4+YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZU5vZGUubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHZhbHVlTm9kZS5pbWFnZVVybCB8fCB2YWx1ZU5vZGUuaGV4Q29sb3JzID8gJ3N3YXRjaCcgOiAncmVjdGFuZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQ6IG9wdGlvbk5vZGUuZW50aXR5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IG9wdGlvbk5vZGUuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiB2YWx1ZU5vZGUuZW50aXR5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfb3B0aW9ucy5wdXNoKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vcHRpb25zO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbG9hZCBhdHRyaWJ1dGVzIGZyb20gQUpBWCByZXF1ZXN0XHJcbiAgICAgICAgICAgICQocmVzcCkuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nKS5lYWNoKChpLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHN3YXRjaGVzID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzd2F0Y2hlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICRzd2F0Y2hlcy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nKS5lYWNoKChfaSwgbGFiZWxFbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICQobGFiZWxFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdGhpcy5pbnB1dEZpbmRlckZ1bmMgPyB0aGlzLmlucHV0RmluZGVyRnVuYygkc3dhdGNoZXMsICRsYWJlbCkgOiAkc3dhdGNoZXMuZmluZChgW2lkPVwiJHskbGFiZWwuYXR0cignZm9yJyl9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBOdW1iZXIoJGlucHV0LmF0dHIoJ3ZhbHVlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUlkID0gTnVtYmVyKCRpbnB1dC5hdHRyKCduYW1lJykucmVwbGFjZSgvYXR0cmlidXRlXFxbKFswLTldKylcXF0vLCAnJDEnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyAhPT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZVZhbHVlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJGxhYmVsLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkaW5wdXQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3dhdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcy5wdXNoKHN3YXRjaGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5hdHRyaWJ1dGVzVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IE11c3RhY2hlLnJlbmRlcih0aGlzLmF0dHJpYnV0ZXNUZW1wbGF0ZSwgZGF0YSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpO1xyXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIuYXBwZW5kKGh0bWwpO1xyXG5cclxuICAgICAgICBsZXQgJGZvcm07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGJ1aWxkIEZvcm0gZnJvbSBncmFwaFFMXHJcbiAgICAgICAgICAgICRmb3JtID0gJCgnPGZvcm0gY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtaGlkZGVuRm9ybVwiPjwvZm9ybT4nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYWN0aW9uXCIgdmFsdWU9XCJhZGRcIj4nKTtcclxuICAgICAgICAgICAgJGZvcm0uYXBwZW5kKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwcm9kdWN0X2lkXCIgdmFsdWU9XCIke3RoaXMucHJvZHVjdElkfVwiPmApO1xyXG4gICAgICAgICAgICAkZm9ybS5hcHBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInF0eVtdXCIgdmFsdWU9XCIke3RoaXMuZ3JhcGhRTE5vZGUubWluUHVyY2hhc2VRdWFudGl0eSB8fCAxfVwiPmApO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmZvckVhY2goKHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uTm9kZS52YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSB0aGlzLmF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgJiYgb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMubGVuZ3RoID4gMCA/IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzWzBdLm5vZGUuZW50aXR5SWQgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlcy5yZWR1Y2UoKF9kZWZhdWx0VmFsdWUsIHsgbm9kZTogdmFsdWVOb2RlIH0pID0+ICh2YWx1ZU5vZGUuaXNEZWZhdWx0ID8gdmFsdWVOb2RlLmVudGl0eUlkIDogX2RlZmF1bHRWYWx1ZSksIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWZhdWx0VmFsdWUgJiYgYXR0cmlidXRlc0RhdGEgJiYgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlcy5yZWR1Y2UoKF9kZWZhdWx0VmFsdWUsIHsgbm9kZTogdmFsdWVOb2RlIH0pID0+IF9kZWZhdWx0VmFsdWUgfHwgKGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMuaW5kZXhPZih2YWx1ZU5vZGUuZW50aXR5SWQpID4gLTEgPyB2YWx1ZU5vZGUuZW50aXR5SWQgOiAnJyksICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbk5vZGUuY2hlY2tlZEJ5RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbk5vZGUuZW50aXR5SWR9XVwiIHZhbHVlPVwiJHtkZWZhdWx0VmFsdWV9XCI+YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGNhcmRPcHRpb24gPSAkKCcucHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWl0ZW0nLCB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRyaWJ1dGVTZWxlY3QodGhpcy5hcnJheUF0dHJpYnV0ZVNlbGVjdCwgJGNhcmRPcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGJ1aWxkIEZvcm0gZnJvbSBBSkFYIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc3QgJGZvcm0yID0gJCgnPGRpdj48L2Rpdj4nKS5hcHBlbmQocmVzcCkuZmluZCh0aGlzLmFkZFRvQ2FydEZvcm1TZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncHJvZHVjdFN3YXRjaGVzLWhpZGRlbkZvcm0nKVxyXG4gICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgJ2lkJyB0byBhdm9pZCBkdXBsaWNhdGVkIGxhYmVsLmZvciBpbiBxdWljay12aWV3XHJcbiAgICAgICAgICAgICRmb3JtMi5maW5kKCdbaWRdJykucHJvcCgnaWQnLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIuYXBwZW5kKCRmb3JtKTtcclxuXHJcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5vbignY2xpY2snLCAnW2RhdGEtYXR0cmlidXRlLWlkXScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9ICRhLmRhdGEoJ2F0dHJpYnV0ZUlkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGEuZGF0YSgnYXR0cmlidXRlVmFsdWUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1hdHRyaWJ1dGUtaWQ9JHtpZH1dYCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkYS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbChbdmFsdWVdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UoJGZvcm0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zd2F0Y2hlc0xpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIuZmluZCgnW2RhdGEtbW9yZV0nKS5lYWNoKChpLCBtb3JlRWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRtb3JlID0gJChtb3JlRWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxpc3QgPSAkbW9yZS5jbG9zZXN0KCdbZGF0YS1zd2F0Y2hlc10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsZXNzID0gJGxpc3QuZmluZCgnW2RhdGEtbGVzc10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRsaXN0LmZpbmQoJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGl0ZW1zLmxlbmd0aCA+IHRoaXMuc3dhdGNoZXNMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRoaWRkZW5JdGVtcyA9ICRpdGVtcy5maWx0ZXIoaiA9PiBqID49IHRoaXMuc3dhdGNoZXNMaW1pdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dE1vcmUgPSBgKyR7JGl0ZW1zLmxlbmd0aCAtIHRoaXMuc3dhdGNoZXNMaW1pdH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb3JlLnRleHQodHh0TW9yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vcmUub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaGlkZGVuSXRlbXMuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9yZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXNzLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkbGVzcy5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRoaWRkZW5JdGVtcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRsZXNzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vcmUuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9yZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGxlc3MuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmZpbmQoJ1tkYXRhLW1vcmVdLCBbZGF0YS1sZXNzXScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UoJGZvcm0pIHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5maWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSkpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGAvcmVtb3RlL3YxL3Byb2R1Y3QtYXR0cmlidXRlcy8ke3RoaXMucHJvZHVjdElkfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogJ3t9JyxcclxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiAne30nLFxyXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpbWFnZSwgcHJpY2UgfSA9IHJlc3AuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcmRJbWFnZShpbWFnZT8uZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcmRQcmljZU1lc3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUuYXZhaWxhYmlsaXR5VjIubWVzc2FnZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzUHVyY2hhc2UgPSB0aGlzLmdyYXBoUUxOb2RlLmF2YWlsYWJpbGl0eVYyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmRQcmljZUNvbnRhaW5lci5odG1sKGA8c3BhbiBjbGFzcz1cInByaWNlLS1jYWxsXCI+JHttZXNzUHVyY2hhc2V9PC9zcGFuPmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXJkSW1hZ2UodXJsVGVtcGxhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZVJlcGxhY2VyRnVuYykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSB1cmxUZW1wbGF0ZSA/IHVybFRlbXBsYXRlLmRhdGEucmVwbGFjZSgnezpzaXplfScsIHRoaXMuaW1hZ2VTaXplKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmModGhpcy4kY2FyZEltYWdlLCBpbWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXJsVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gdXJsVGVtcGxhdGUucmVwbGFjZSgnezpzaXplfScsIHRoaXMuaW1hZ2VTaXplKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmMnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3JjJywgdGhpcy4kY2FyZEltYWdlLmF0dHIoJ3NyYycpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyY3NldCcsIHRoaXMuJGNhcmRJbWFnZS5hdHRyKCdzcmNzZXQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1nKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsICcnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgJycpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlcy1pbWFnZS1vcHRpb25DaGFuZ2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmMnKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCB0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmMnKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmNzZXQnKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpKVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3JjJywgbnVsbClcclxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyY3NldCcsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlcy1pbWFnZS1vcHRpb25DaGFuZ2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUF0dHJpYnV0ZVNlbGVjdChhcnJheVNlbGVjdCwgY2FyZE9wdGlvbikge1xyXG4gICAgICAgIGlmICghYXJyYXlTZWxlY3QpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtcmV0dXJuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFycmF5U2VsZWN0LmZvckVhY2goKGl0ZW1TZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWRTZWxlY3QgPSBpdGVtU2VsZWN0Lm5vZGUuZW50aXR5SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkVmFsdWUgPSBpdGVtU2VsZWN0Lm5vZGUudmFsdWVzPy5lZGdlc1swXS5ub2RlLmVudGl0eUlkO1xyXG4gICAgICAgICAgICBjYXJkT3B0aW9uLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZEl0ZW0gPSAkKGl0ZW0pLmRhdGEoJ2F0dHJpYnV0ZUlkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUl0ZW0gPSAkKGl0ZW0pLmRhdGEoJ2F0dHJpYnV0ZVZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlkSXRlbSA9PT0gaWRTZWxlY3QgJiYgaWRWYWx1ZSA9PT0gdmFsdWVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcclxuICAgICAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcclxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gJHNjb3BlXHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcclxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcclxuICAgICAqL1xyXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb3VudGRvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJGNvdW50ZG93bi5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RyRW5kRGF0ZSA9IHRoaXMuZ3JhcGhRTE5vZGUuY3VzdG9tRmllbGRzPy5lZGdlcz8uZmluZCgoeyBub2RlIH0pID0+IG5vZGUubmFtZSA9PT0gdGhpcy5jb3VudGRvd25DdXN0b21GaWVsZCk/Lm5vZGU/LnZhbHVlO1xyXG4gICAgICAgIGlmICghc3RyRW5kRGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VDb3VudGRvd25EYXRlKHN0ckVuZERhdGUpO1xyXG4gICAgICAgIGlmICghZGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBTYWxlQ291bnRkb3duLmFkZCh0aGlzLiRjb3VudGRvd24sIGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRHYWxsZXJ5KCkge1xyXG4gICAgICAgIGNvbnN0IGhhc1ZpZGVvID0gdGhpcy5ncmFwaFFMTm9kZS52aWRlb3M/LmVkZ2VzPy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGNvbnN0IGhhczM2MCA9ICEhdGhpcy5ncmFwaFFMTm9kZS5jdXN0b21GaWVsZHM/LmVkZ2VzPy5maW5kKCh7IG5vZGUgfSkgPT4gbm9kZS5uYW1lID09PSB0aGlzLmltYWdlMzYwQ3VzdG9tRmllbGQpO1xyXG4gICAgICAgIGNvbnN0ICR2aWRlb0J0biA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXZpZGVvLWJ1dHRvbl0nKTtcclxuICAgICAgICBjb25zdCAkMzYwQnRuID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtMzYwLWJ1dHRvbl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc1ZpZGVvIHx8IGhhczM2MCkge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICBncmFwaFFMVG9rZW4sXHJcbiAgICAgICAgICAgICAgICB6b29tU2l6ZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RTaXplLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJTaXplLFxyXG4gICAgICAgICAgICAgICAgdHh0VmlkZW9zTGFiZWwsXHJcbiAgICAgICAgICAgICAgICB0eHRJbWFnZXMzNjBMYWJlbCxcclxuICAgICAgICAgICAgICAgIHR4dEltYWdlc0xhYmVsLFxyXG4gICAgICAgICAgICB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZEltYWdlR2FsbGVyeU1vZGFsID0gbmV3IENhcmRJbWFnZUdhbGxlcnlNb2RhbCh0aGlzLiRzY29wZSwge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxyXG4gICAgICAgICAgICAgICAgem9vbVNpemUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0U2l6ZSxcclxuICAgICAgICAgICAgICAgIHRodW1iU2l6ZSxcclxuICAgICAgICAgICAgICAgIHR4dFZpZGVvc0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWwsXHJcbiAgICAgICAgICAgICAgICB0eHRJbWFnZXNMYWJlbCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzVmlkZW8pIHtcclxuICAgICAgICAgICAgJHZpZGVvQnRuLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRJbWFnZUdhbGxlcnlNb2RhbC5vcGVuTW9kYWwoeyBmaXJzdFZpZGVvOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFzMzYwKSB7XHJcbiAgICAgICAgICAgICQzNjBCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEltYWdlR2FsbGVyeU1vZGFsLm9wZW5Nb2RhbCh7IGZpcnN0MzYwOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRIb3ZlclZpZGVvKCkge1xyXG4gICAgICAgIGNvbnN0IGhvdmVyVmlkZW8gPSB0aGlzLmdyYXBoUUxOb2RlLmN1c3RvbUZpZWxkcz8uZWRnZXM/LmZpbmQoKHsgbm9kZSB9KSA9PiBub2RlLm5hbWUgPT09IHRoaXMuaG92ZXJWaWRlb0N1c3RvbUZpZWxkKT8ubm9kZT8udmFsdWU7XHJcbiAgICAgICAgaWYgKCFob3ZlclZpZGVvKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0ICRjYXJkSW1hZ2VDb250YWluZXIgPSB0aGlzLiRzY29wZS5maW5kKHRoaXMuY2FyZEltYWdlQ29udGFpbmVyU2VsZWN0b3IpLmZpcnN0KCk7XHJcbiAgICAgICAgaWYgKCEkY2FyZEltYWdlQ29udGFpbmVyLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkdmlkZW8gPSAkKCc8dmlkZW8gY2xhc3M9XCJjYXJkLXZpZGVvXCIgbXV0ZWQgbG9vcCBwbGF5c2lubGluZSAvPicpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBob3ZlclZpZGVvKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGNhcmRJbWFnZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvRWwgPSAkdmlkZW8uZ2V0KDApO1xyXG5cclxuICAgICAgICAkY2FyZEltYWdlQ29udGFpbmVyLm9uKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAkdmlkZW8uYWRkQ2xhc3MoJ19wbGF5aW5nJyk7XHJcbiAgICAgICAgICAgIHZpZGVvRWwucGxheSgpLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVmlkZW8gcGxheSBmYWlsZWQ6JywgZXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjYXJkSW1hZ2VDb250YWluZXIub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZpZGVvRWwucGF1c2UoKTtcclxuICAgICAgICAgICAgJHZpZGVvLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUb3VjaCBldmVudCAtIHRvZ2dsZSBwbGF5L3BhdXNlIG9uIHRvdWNoXHJcbiAgICAgICAgJGNhcmRJbWFnZUNvbnRhaW5lci5vbigndG91Y2hzdGFydCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcGF1c2UgYWxsIG90aGVyIHByb2R1Y3QgY2FyZCB2aWRlb3MgdGhhdCBhcmUgY3VycmVudGx5IHBsYXlpbmdcclxuICAgICAgICAgICAgJCh0aGlzLmNhcmRJbWFnZUNvbnRhaW5lclNlbGVjdG9yKS5maW5kKCd2aWRlbycpLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsICE9PSB2aWRlb0VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsKS5yZW1vdmVDbGFzcygnX3BsYXlpbmcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgcGxheS9wYXVzZSB3aXRoIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgICAgIGlmICh2aWRlb0VsLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgJHZpZGVvLmFkZENsYXNzKCdfcGxheWluZycpO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9FbC5wbGF5KCkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVmlkZW8gcGxheSBmYWlsZWQ6JywgZXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgdG8gc3RvcCB2aWRlbyBpZiBub3QgaW4gdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9FbC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZpZGVvLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25PYnNlcnZlci51bm9ic2VydmUoJGNhcmRJbWFnZUNvbnRhaW5lclswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25PYnNlcnZlci5vYnNlcnZlKCRjYXJkSW1hZ2VDb250YWluZXJbMF0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9FbC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgJHZpZGVvLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IFNhbGVDb3VudGRvd24gZnJvbSAnLi4vc2FsZS1jb3VudGRvd24nO1xyXG5cclxuZnVuY3Rpb24gc3RyRXF1YWwoc3RyMSwgc3RyMikge1xyXG4gICAgcmV0dXJuIHN0cjEudG9Mb3dlckNhc2UoKSA9PT0gc3RyMi50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5jbGFzcyBQcm9kdWN0U3dhdGNoZXMge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIHNob3dTd2F0Y2hlcyA9IHRydWUsXHJcbiAgICAgICAgc2hvdWxkVXBkYXRlTWluTWF4UXR5ID0gZmFsc2UsXHJcbiAgICAgICAgY2FyZFNlbGVjdG9yID0gJy5wcm9kdWN0IC5jYXJkLCAucHJvZHVjdENhcm91c2VsLXNsaWRlIC5jYXJkLCAucHJvZHVjdCAubGlzdEl0ZW0nLFxyXG4gICAgICAgIHByb2R1Y3RJZFNlbGVjdG9yID0gJ1tkYXRhLXByb2R1Y3QtaWRdJyxcclxuICAgICAgICBmaW5kUHJvZHVjdElkQnlJbWcgPSBmYWxzZSxcclxuICAgICAgICBzd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yID0gJy5jYXJkLXRleHQtLWNvbG9yc3dhdGNoZXMnLFxyXG4gICAgICAgIGNhcmRJbWFnZVNlbGVjdG9yID0gJy5jYXJkLWltYWdlJyxcclxuICAgICAgICBjYXJkSW1hZ2VDb250YWluZXJTZWxlY3RvciA9ICcuY2FyZC1pbWctY29udGFpbmVyJyxcclxuICAgICAgICBjYXJkVGV4dFByaWNlU2VsZWN0b3IgPSAnLmNhcmQtdGV4dC0tcHJpY2UnLFxyXG4gICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvciA9ICdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLFxyXG4gICAgICAgIHByb2R1Y3RWaWV3RmlsZSA9ICdwcm9kdWN0cy9wcm9kdWN0LXZpZXcnLFxyXG4gICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgICAgICAgICB7eyNhdHRyaWJ1dGVzfX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzXCIgZGF0YS1zd2F0Y2hlcz1cInt7MC5hdHRyaWJ1dGVOYW1lfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjLn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWl0ZW0gcHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWl0ZW0tLXt7dHlwZX19XCIgdGl0bGU9XCJ7e2xhYmVsfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXR0cmlidXRlLWlkPVwie3thdHRyaWJ1dGVJZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0dHJpYnV0ZS12YWx1ZT1cInt7YXR0cmlidXRlVmFsdWV9fVwiPnt7JmNvbnRlbnR9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svLn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLW1vcmVcIiBkYXRhLW1vcmU+KyBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWxlc3NcIiBkYXRhLWxlc3M+LSBMZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ey9hdHRyaWJ1dGVzfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCxcclxuICAgICAgICBjb3VudGRvd25TZWxlY3RvciA9ICcuY2FyZC1jb3VudGRvd24nLFxyXG4gICAgICAgIGNvdW50ZG93bkN1c3RvbUZpZWxkID0gJ19fY291bnRkb3duX2RhdGUnLFxyXG4gICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyA9IG51bGwsXHJcbiAgICAgICAgaW1hZ2VTaXplID0gJzU5MHg1OTAnLFxyXG4gICAgICAgIHpvb21TaXplID0gJzEyODB4MTI4MCcsXHJcbiAgICAgICAgcHJvZHVjdFNpemUgPSAnOTAweDkwMCcsXHJcbiAgICAgICAgdGh1bWJTaXplID0gJzgweDgwJyxcclxuICAgICAgICBpbnB1dEZpbmRlckZ1bmMgPSBudWxsLFxyXG4gICAgICAgIHN3YXRjaGVzTGltaXQgPSAzLFxyXG4gICAgICAgIGltYWdlUmVwbGFjZXJGdW5jID0gbnVsbCxcclxuICAgICAgICBpbmNsdWRlT3B0aW9ucyA9IFtdLFxyXG4gICAgICAgIGRpc3BsYXlTdHlsZXMgPSBbJ1N3YXRjaCcsICdSZWN0YW5nbGVCb3hlcyddLFxyXG4gICAgICAgIGRpc3BsYXlJblN0b2NrT25seSA9IGZhbHNlLFxyXG4gICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgPSB0cnVlLFxyXG4gICAgICAgIGdyYXBoUUxUb2tlbiA9ICcnLFxyXG4gICAgICAgIGVuYWJsZVZhcmlhbnRJbWFnZXMgPSBmYWxzZSxcclxuICAgICAgICBzaG93Q291bnRkb3duID0gdHJ1ZSxcclxuICAgICAgICBzaG93R2FsbGVyeSA9IGZhbHNlLFxyXG4gICAgICAgIHNob3dIb3ZlclZpZGVvID0gZmFsc2UsXHJcbiAgICAgICAgaW1hZ2UzNjBDdXN0b21GaWVsZCA9ICdfX0AzNjAnLFxyXG4gICAgICAgIGhvdmVyVmlkZW9DdXN0b21GaWVsZCA9ICdfX0BjYXJkX3ZpZGVvJyxcclxuICAgICAgICBzaG93UHJpY2VDYWxsID0gdHJ1ZSxcclxuICAgICAgICB0eHRTYWxlQ291bnRkb3duSlNPTixcclxuICAgICAgICB0eHRWaWRlb3NMYWJlbCA9ICdWaWRlb3MnLFxyXG4gICAgICAgIHR4dEltYWdlczM2MExhYmVsID0gJzM2MCBWaWV3cycsXHJcbiAgICAgICAgdHh0SW1hZ2VzTGFiZWwgPSAnUHJvZHVjdCBJbWFnZXMnLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgICAgICAgIHNob3dTd2F0Y2hlcyxcclxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlTWluTWF4UXR5LFxyXG4gICAgICAgICAgICBjYXJkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHByb2R1Y3RJZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmaW5kUHJvZHVjdElkQnlJbWcsXHJcbiAgICAgICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGNhcmRJbWFnZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBjYXJkSW1hZ2VDb250YWluZXJTZWxlY3RvcixcclxuICAgICAgICAgICAgY2FyZFRleHRQcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlLFxyXG4gICAgICAgICAgICBjb3VudGRvd25TZWxlY3RvcixcclxuICAgICAgICAgICAgY291bnRkb3duQ3VzdG9tRmllbGQsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcclxuICAgICAgICAgICAgaW1hZ2VTaXplLFxyXG4gICAgICAgICAgICB6b29tU2l6ZSxcclxuICAgICAgICAgICAgcHJvZHVjdFNpemUsXHJcbiAgICAgICAgICAgIHRodW1iU2l6ZSxcclxuICAgICAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxyXG4gICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxyXG4gICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICAgICAgaW5jbHVkZU9wdGlvbnM6IGluY2x1ZGVPcHRpb25zLm1hcChzID0+IFN0cmluZyhzKS50cmltKCkudG9Mb2NhbGVVcHBlckNhc2UoKSksXHJcbiAgICAgICAgICAgIGRpc3BsYXlTdHlsZXMsXHJcbiAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcclxuICAgICAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcclxuICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxyXG4gICAgICAgICAgICBlbmFibGVWYXJpYW50SW1hZ2VzLFxyXG4gICAgICAgICAgICBzaG93Q291bnRkb3duLFxyXG4gICAgICAgICAgICBzaG93R2FsbGVyeSxcclxuICAgICAgICAgICAgc2hvd0hvdmVyVmlkZW8sXHJcbiAgICAgICAgICAgIGltYWdlMzYwQ3VzdG9tRmllbGQsXHJcbiAgICAgICAgICAgIGhvdmVyVmlkZW9DdXN0b21GaWVsZCxcclxuICAgICAgICAgICAgc2hvd1ByaWNlQ2FsbCxcclxuICAgICAgICAgICAgdHh0VmlkZW9zTGFiZWwsXHJcbiAgICAgICAgICAgIHR4dEltYWdlczM2MExhYmVsLFxyXG4gICAgICAgICAgICB0eHRJbWFnZXNMYWJlbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBTYWxlQ291bnRkb3duLmNvbmZpZ3VyZSh7XHJcbiAgICAgICAgICAgIHR4dFNhbGVDb3VudGRvd25KU09OLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcclxuICAgICAgICBpZiAoTXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIH0sIDIwMCkpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1Njcm9sbCgkYm9keSA9IG51bGwpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7Q2FyZFtdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gW107XHJcblxyXG4gICAgICAgICQodGhpcy5jb25maWcuY2FyZFNlbGVjdG9yLCAkYm9keSkubm90KCcucHJvZHVjdFN3YXRjaGVzTG9hZGVkJykuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHNjb3BlID0gJChlbCkuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlc0xvYWRlZCcpO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEoJ3Byb2R1Y3RTd2F0Y2hlc0NhcmQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdElkID0gTnVtYmVyKCRzY29wZS5kYXRhKCdwcm9kdWN0SWQnKSB8fCAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5wcm9kdWN0SWRTZWxlY3RvcikuZGF0YSgncHJvZHVjdElkJykpO1xyXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGZpbmQgcHJvZHVjdCBJRCBieSBpbWcgc3JjXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmZpbmRQcm9kdWN0SWRCeUltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9ICRzY29wZS5maW5kKCdpbWcnKS5nZXQoKS5yZWR1Y2UoKGlkLCBpbWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gU3RyaW5nKGltZy5zcmMpLm1hdGNoKC9wcm9kdWN0c1xcLyhbMC05XSspXFwvLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0gPyBOdW1iZXIobVsxXSkgOiBpZDtcclxuICAgICAgICAgICAgICAgIH0sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGVzQ29udGFpbmVyID0gJHNjb3BlLmZpbmQodGhpcy5jb25maWcuc3dhdGNoZXNDb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb3VudGRvd24gPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5jb3VudGRvd25TZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjYXJkUHJpY2VDb250YWluZXIgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5jYXJkVGV4dFByaWNlU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNQcmljZUNhbGwgPSAkc2NvcGUuZmluZCgnW2RhdGEtcHJpY2UtY2FsbC1wbGFjZWhvbGRlcl0nKS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5zaG93R2FsbGVyeSAmJiAhdGhpcy5jb25maWcuc2hvd0hvdmVyVmlkZW8gJiYgIXRoaXMuY29uZmlnLnNob3dDb3VudGRvd24gJiYgIXRoaXMuY29uZmlnLnNob3dTd2F0Y2hlcyAmJiAoIXRoaXMuY29uZmlnLnNob3dQcmljZUNhbGwgfHwgIWhhc1ByaWNlQ2FsbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIGNvdW50ZG93bkN1c3RvbUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgem9vbVNpemUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0U2l6ZSxcclxuICAgICAgICAgICAgICAgIHRodW1iU2l6ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcclxuICAgICAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlcyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcclxuICAgICAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBncmFwaFFMVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzaG93U3dhdGNoZXMsXHJcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVNaW5NYXhRdHksXHJcbiAgICAgICAgICAgICAgICBzaG93Q291bnRkb3duLFxyXG4gICAgICAgICAgICAgICAgc2hvd0dhbGxlcnksXHJcbiAgICAgICAgICAgICAgICBzaG93SG92ZXJWaWRlbyxcclxuICAgICAgICAgICAgICAgIGltYWdlMzYwQ3VzdG9tRmllbGQsXHJcbiAgICAgICAgICAgICAgICBob3ZlclZpZGVvQ3VzdG9tRmllbGQsXHJcbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2VDb250YWluZXJTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHNob3dQcmljZUNhbGwsXHJcbiAgICAgICAgICAgICAgICB0eHRWaWRlb3NMYWJlbCxcclxuICAgICAgICAgICAgICAgIHR4dEltYWdlczM2MExhYmVsLFxyXG4gICAgICAgICAgICAgICAgdHh0SW1hZ2VzTGFiZWwsXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRjYXJkSW1hZ2UgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5jYXJkSW1hZ2VTZWxlY3RvcikuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgICRjb3VudGRvd24sXHJcbiAgICAgICAgICAgICAgICBjb3VudGRvd25DdXN0b21GaWVsZCxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICRjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAkY2FyZFByaWNlQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgem9vbVNpemUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0U2l6ZSxcclxuICAgICAgICAgICAgICAgIHRodW1iU2l6ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcclxuICAgICAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlcyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcclxuICAgICAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBhdXRvSW5pdDogIWdyYXBoUUxUb2tlbixcclxuICAgICAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcclxuICAgICAgICAgICAgICAgIHNob3dTd2F0Y2hlcyxcclxuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZU1pbk1heFF0eSxcclxuICAgICAgICAgICAgICAgIHNob3dDb3VudGRvd24sXHJcbiAgICAgICAgICAgICAgICBzaG93R2FsbGVyeSxcclxuICAgICAgICAgICAgICAgIHNob3dIb3ZlclZpZGVvLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UzNjBDdXN0b21GaWVsZCxcclxuICAgICAgICAgICAgICAgIGhvdmVyVmlkZW9DdXN0b21GaWVsZCxcclxuICAgICAgICAgICAgICAgIGNhcmRJbWFnZUNvbnRhaW5lclNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgc2hvd1ByaWNlQ2FsbCxcclxuICAgICAgICAgICAgICAgIHR4dFZpZGVvc0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWwsXHJcbiAgICAgICAgICAgICAgICB0eHRJbWFnZXNMYWJlbCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhcmRzLnB1c2goY2FyZCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSgncHJvZHVjdFN3YXRjaGVzQ2FyZCcsIGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZ3JhcGhRTFRva2VuICYmIGNhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KGNhcmRzLm1hcChjYXJkID0+IGNhcmQucHJvZHVjdElkKSkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmZldGNoR3JhcGhRTFByb2R1Y3RzKGlkcykudGhlbihlZGdlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBlZGdlcy5mb3JFYWNoKGVkZ2UgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQucHJvZHVjdElkID09PSBlZGdlLm5vZGUuZW50aXR5SWQpLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNhcmQuZ3JhcGhRTE5vZGUgPSBlZGdlLm5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2FyZC5pbml0KCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZldGNoR3JhcGhRTFByb2R1Y3RzKGlkcykudGhlbihhc3luYyAoZWRnZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRJbWFnZXMgPSB0aGlzLmNvbmZpZy5lbmFibGVWYXJpYW50SW1hZ2VzID8gYXdhaXQgdGhpcy5mZXRjaEdyYXBoUUxWYXJpYW50SW1hZ2VzKHRoaXMuY3JlYXRlR3JhcGhRTFBhcmFtc0ZvclZhcmlhbnRJbWFnZXMoZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSkpKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgZWRnZXMuZm9yRWFjaChlZGdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLnByb2R1Y3RJZCA9PT0gZWRnZS5ub2RlLmVudGl0eUlkKS5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5ncmFwaFFMTm9kZSA9IGVkZ2Uubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQudmFyaWFudEltYWdlVXJsVGVtcGxhdGUgPSB2YXJpYW50SW1hZ2VzLmZpbmQodiA9PiB2LnByb2R1Y3RJZCA9PT0gY2FyZC5wcm9kdWN0SWQpPy5pbWFnZVVybFRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5hcnJheUF0dHJpYnV0ZVNlbGVjdCA9IHZhcmlhbnRJbWFnZXMuZmluZCh2ID0+IHYucHJvZHVjdElkID09PSBjYXJkLnByb2R1Y3RJZCk/LmFycmF5QXR0cmlidXRlSWRTZWxlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaEdyYXBoUUxQcm9kdWN0cyhpZHMpIHtcclxuICAgICAgICBsZXQgZWRnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkgKz0gNTApIHtcclxuICAgICAgICAgICAgY29uc3QgX2lkcyA9IGlkcy5zbGljZShpLCBpICsgNTApO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkZW50aXR5SWRzOiBbSW50IV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChlbnRpdHlJZHM6ICRlbnRpdHlJZHMsIGZpcnN0OiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblB1cmNoYXNlUXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhQdXJjaGFzZVF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNvbmZpZy5zaG93U3dhdGNoZXMgPyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIENoZWNrYm94T3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRCeURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvblZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5jb25maWcuc2hvd0NvdW50ZG93biB8fCB0aGlzLmNvbmZpZy5zaG93R2FsbGVyeSB8fCB0aGlzLmNvbmZpZy5zaG93SG92ZXJWaWRlbyA/IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzKG5hbWVzOiBbXCIke3RoaXMuY29uZmlnLmNvdW50ZG93bkN1c3RvbUZpZWxkfVwiLCBcIiR7dGhpcy5jb25maWcuaW1hZ2UzNjBDdXN0b21GaWVsZH1cIiwgXCIke3RoaXMuY29uZmlnLmhvdmVyVmlkZW9DdXN0b21GaWVsZH1cIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY29uZmlnLnNob3dHYWxsZXJ5ID8gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3MoZmlyc3Q6IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eVYyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFByb2R1Y3RVbmF2YWlsYWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkczogX2lkcyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb25maWcuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVkZ2VzID0gZWRnZXMuY29uY2F0KHJlc3AuZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVkZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIEdyYXBoUUwgcGFyYW1zIGZvciBmZXRjaGluZyB2YXJpYW50IGltYWdlc1xyXG4gICAgICogQHBhcmFtIHtQcm9kdWN0fSBwcm9kdWN0c1xyXG4gICAgICogQHJldHVybnMge1t7IGVudGl0eUlkOiBudW1iZXIsIG9wdGlvblZhbHVlSWRzOiBbeyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXIgfV19XX1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlR3JhcGhRTFBhcmFtc0ZvclZhcmlhbnRJbWFnZXMocHJvZHVjdHMpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSBzZWFyY2hQYXJhbXMuZ2V0KCdfYmNfZnNuZicpID8gQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMuZW50cmllcygpKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWU6IG5hbWUucmVwbGFjZSgnW10nLCAnJyksIHZhbHVlIH0pKS5maWx0ZXIoKHsgbmFtZSB9KSA9PiBuYW1lICE9PSAnX2JjX2ZzbmYnKSA6IFtdO1xyXG4gICAgICAgIGNvbnN0IGdxbFBhcmFtcyA9IFtdO1xyXG5cclxuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUlkcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5mb3JFYWNoKCh7IG5vZGU6IG9wdGlvbk5vZGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9uTm9kZS52YWx1ZXM/LmVkZ2VzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLmZvckVhY2goKHsgbm9kZTogdmFsdWVOb2RlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJFcXVhbChuYW1lLCBvcHRpb25Ob2RlLmRpc3BsYXlOYW1lKSAmJiBzdHJFcXVhbCh2YWx1ZSwgdmFsdWVOb2RlLmxhYmVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9uVmFsdWVJZHMuZmluZCgoeyBvcHRpb25FbnRpdHlJZCB9KSA9PiBvcHRpb25FbnRpdHlJZCA9PT0gb3B0aW9uTm9kZS5lbnRpdHlJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVJZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbnRpdHlJZDogb3B0aW9uTm9kZS5lbnRpdHlJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRW50aXR5SWQ6IHZhbHVlTm9kZS5lbnRpdHlJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9uVmFsdWVJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3FsUGFyYW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUlkOiBub2RlLmVudGl0eUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlSWRzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdxbFBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHZhcmlhbnQgaW1hZ2VzIHZpYSBHcmFwaFFMXHJcbiAgICAgKiBAcGFyYW0ge1t7IGVudGl0eUlkOiBudW1iZXIsIG9wdGlvblZhbHVlSWRzOiBbeyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXIgfV19XX0gZ3FsUGFyYW1zIEdyYXBoUUwgdmFyaWFibGVzXHJcbiAgICAgKiBAcmV0dXJucyB7W3sgcHJvZHVjdElkOiBudW1iZXIsIHZhcmlhbnRJZDogbnVtYmVyLCBpbWFnZVVybFRlbXBsYXRlOiBzdHJpbmcgfV19XHJcbiAgICAgKi9cclxuXHJcbiAgICBhc3luYyBmZXRjaEdyYXBoUUxWYXJpYW50SW1hZ2VzKGdxbFBhcmFtcykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3FsUGFyYW1zLmxlbmd0aDsgaSArPSA2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9ncWxQYXJhbXMgPSBncWxQYXJhbXMuc2xpY2UoaSwgaSArIDYpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtfZ3FsUGFyYW1zLm1hcCgoeyBlbnRpdHlJZCB9KSA9PiBgJG9wdGlvblZhbHVlSWRzJHtlbnRpdHlJZH06IFtPcHRpb25WYWx1ZUlkIV1gKS5qb2luKCcsXFxuJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtfZ3FsUGFyYW1zLm1hcCgoeyBlbnRpdHlJZCB9KSA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qke2VudGl0eUlkfTogcHJvZHVjdChlbnRpdHlJZDogJHtlbnRpdHlJZH0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cyhvcHRpb25WYWx1ZUlkczogJG9wdGlvblZhbHVlSWRzJHtlbnRpdHlJZH0sIGZpcnN0OiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIENoZWNrYm94T3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkQnlEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uVmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApLmpvaW4oJ1xcbicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IF9ncWxQYXJhbXMucmVkdWNlKChhY2MsIHsgZW50aXR5SWQsIG9wdGlvblZhbHVlSWRzIH0pID0+ICh7IC4uLmFjYywgW2BvcHRpb25WYWx1ZUlkcyR7ZW50aXR5SWR9YF06IG9wdGlvblZhbHVlSWRzIH0pLCB7fSksXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNvbmZpZy5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJvZHVjdHMgPSBwcm9kdWN0cy5jb25jYXQoX2dxbFBhcmFtcy5tYXAoKHsgZW50aXR5SWQgfSkgPT4gcmVzcC5kYXRhLnNpdGVbYHByb2R1Y3Qke2VudGl0eUlkfWBdKS5maWx0ZXIocCA9PiBwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJbWFnZXMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuZW50aXR5SWQsXHJcbiAgICAgICAgICAgIHZhcmlhbnRJZDogcHJvZHVjdC52YXJpYW50cy5lZGdlc1swXT8ubm9kZS5lbnRpdHlJZCxcclxuICAgICAgICAgICAgaW1hZ2VVcmxUZW1wbGF0ZTogcHJvZHVjdC52YXJpYW50cy5lZGdlc1swXT8ubm9kZS5kZWZhdWx0SW1hZ2U/LnVybFRlbXBsYXRlLFxyXG4gICAgICAgICAgICBhcnJheUF0dHJpYnV0ZUlkU2VsZWN0OiBwcm9kdWN0LnZhcmlhbnRzLmVkZ2VzWzBdPy5ub2RlLnByb2R1Y3RPcHRpb25zPy5lZGdlcyxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RJbWFnZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTd2F0Y2hlcztcclxuIiwiaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuXHJcbmxldCBzaW5nbGV0b247XHJcblxyXG5jb25zdCBjb21wYXJlTGlzdFRtcGwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lcy1jb21wYXJlTGlzdC1wYW5lbC13cmFwcGVyIGlzLWVtcHR5XCIgaWQ9XCJwYXBhdGhlbWVzQ29tcGFyZUxpc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lcy1jb21wYXJlTGlzdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWNsb3NlXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlIGJ0bi1jbG9zZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhcGF0aGVtZXMtY29tcGFyZUxpc3QtaWNvblwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctcmlnaHQtdG8tbGluZVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFwYXRoZW1lcy1jb21wYXJlTGlzdC10ZXh0XCI+e3tjb21wYXJlfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLW9wZW5cIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC10b2dnbGUgYnRuLW9wZW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk9wZW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhcGF0aGVtZXMtY29tcGFyZUxpc3QtaWNvblwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1mcm9tLWxpbmVcIj48L3VzZT48L3N2Zz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhcGF0aGVtZXMtY29tcGFyZUxpc3QtdGV4dFwiPnt7Y29tcGFyZX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGF0aGVtZXMtY29tcGFyZUxpc3QtcGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGF0aGVtZXMtY29tcGFyZUxpc3RcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1saXN0Pnt7e3JlbmRlckl0ZW1zfX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lcy1jb21wYXJlTGlzdC1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiIGhyZWY9XCJ7e2NvbXBhcmVfdXJsfX1cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgYnV0dG9uLS1zbWFsbCBidXR0b24tLWNvbXBhcmVcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1idXR0b24+e3tjb21wYXJlfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wbGFpbiBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY2xlYXJBbGxcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbD57e2NsZWFyX2FsbH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IGNvbXBhcmVMaXN0SXRlbVRtcGwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lcy1jb21wYXJlTGlzdC1pdGVtXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbT1cInt7aWR9fVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJ7e3VybH19XCIgY2xhc3M9XCJxdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCJ7e2lkfX1cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBhcGF0aGVtZXMtY29tcGFyZUxpc3QtaW1nIHF1aWNrdmlld1wiIHNyYz1cInt7aW1hZ2V9fVwiIGFsdD1cInt7YWx0fX1cIiB0aXRsZT1cInt7YWx0fX1cIiBkYXRhLXByb2R1Y3QtaWQ9XCJ7e2lkfX1cIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwYXBhdGhlbWVzLWNvbXBhcmVMaXN0LXJlbW92ZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZT1cInt7aWR9fVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPnt7cmVtb3ZlfX17e2FsdH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgaHJlZj1cIiNpY29uLWNsb3NlXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jbGFzcyBDb21wYXJlUHJvZHVjdHMge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmxvYWRQcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkKE11c3RhY2hlLnJlbmRlcihjb21wYXJlTGlzdFRtcGwsIHtcclxuICAgICAgICAgICAgY29tcGFyZTogY29udGV4dC5jb21wYXJlQWRkb25MYW5nX2NvbXBhcmUsXHJcbiAgICAgICAgICAgIGNsZWFyX2FsbDogY29udGV4dC5jb21wYXJlQWRkb25MYW5nX2NsZWFyX2FsbCxcclxuICAgICAgICAgICAgcmVuZGVySXRlbXM6ICgpID0+IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gdGhpcy5yZW5kZXJJdGVtKHByb2R1Y3QpKS5qb2luKCcnKSxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kYm9keS5maW5kKCcuYm9keScpLmJlZm9yZSh0aGlzLiRzY29wZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3RdJyk7XHJcbiAgICAgICAgdGhpcy4kY29tcGFyZUJ1dHRvbiA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1idXR0b25dJyk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRTdGF0ZVRvZ2dsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3RhdGVUb2dnbGUoKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcyA9IE51bWJlcih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncGFwYXRoZW1lc19jb21wYXJlX3Byb2R1Y3RzX2Nsb3NlJykpO1xyXG5cclxuICAgICAgICBpZiAocyAmJiBzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZSgnaXMtY2xvc2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzICYmIHMgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2lzLWNsb3NlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlVG9nZ2xlVG9TZXNzaW9uU3RvcmFnZShzdGF0ZSkge1xyXG4gICAgICAgIGlmICghd2luZG93LnNlc3Npb25TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3BhcGF0aGVtZXNfY29tcGFyZV9wcm9kdWN0c19jbG9zZScsIHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmVQcm9kdWN0cycpO1xyXG4gICAgICAgIGlmIChzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cubG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYXJlUHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVJZCcpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICRlbC5kYXRhKCdjb21wYXJlSW1hZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgICBhbHQ6ICRlbC5kYXRhKCdjb21wYXJlVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICRlbC5kYXRhKCdjb21wYXJlVXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lc3NhZ2UtY29tcGFyZV0nKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVzc2FnZS1jb21wYXJlXScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLXByb2R1Y3QtcmVtb3ZlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVQcm9kdWN0UmVtb3ZlJykpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByb2R1Y3QoaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUudG9nZ2xlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtY2xlYXJhbGxdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWxsUHJvZHVjdHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2J0bi1jbG9zZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVRvZ2dsZVRvU2Vzc2lvblN0b3JhZ2UoMSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tidG4tb3Blbl0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVRvZ2dsZVRvU2Vzc2lvblN0b3JhZ2UoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvZHVjdChwcm9kdWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGVsID0gJCh0aGlzLnJlbmRlckl0ZW0ocHJvZHVjdCkpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3QuYXBwZW5kKCRlbCk7XHJcblxyXG4gICAgICAgICRlbC5zaG93KHRoaXMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKS5mYWRlSW4odGhpcy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9kdWN0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMucHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtY29tcGFyZS1wcm9kdWN0LWl0ZW09JHtpZH1dYCk7XHJcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2lzLWVtcHR5JykuZmFkZU91dCh0aGlzLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBbGxQcm9kdWN0cygpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xyXG5cclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbV0nKTtcclxuICAgICAgICAkZWwuZmFkZU91dCh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgJGVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29tcGFyZVVybCgpIHtcclxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBwcm9kdWN0LmlkKS5qb2luKCcvJyk7XHJcbiAgICAgICAgdGhpcy4kY29tcGFyZUJ1dHRvbi5hdHRyKCdocmVmJywgYCR7dGhpcy5jb250ZXh0LnVybHMuY29tcGFyZX0vJHtwYXRofWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RJdGVtVG1wbCwge1xyXG4gICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICBxdWlja192aWV3OiB0aGlzLmNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19xdWlja192aWV3LFxyXG4gICAgICAgICAgICByZW1vdmU6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3JlbW92ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZVByb2R1Y3RzKGNvbnRleHQpIHtcclxuICAgIGlmICghc2luZ2xldG9uKSB7XHJcbiAgICAgICAgc2luZ2xldG9uID0gbmV3IENvbXBhcmVQcm9kdWN0cyhjb250ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaW5nbGV0b247XHJcbn1cclxuIiwiaW1wb3J0IGFqYXhBZGRUb0NhcnQgZnJvbSAnLi9hamF4LWFkZHRvY2FydCc7XHJcbmltcG9ydCBQcm9kdWN0U3dhdGNoZXMgZnJvbSAnLi9jYXJkLXN3YXRjaGVzL1Byb2R1Y3RTd2F0Y2hlcyc7XHJcbmltcG9ydCBpbml0V2lzaExpc3QgZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB7IGluaXRSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbiB9IGZyb20gJy4vcmVjZW50bHktdmlld2VkLXByb2R1Y3RzJztcclxuaW1wb3J0IGluaXRDYXJ0U3VnZ2VzdGVkUHJvZHVjdHMgZnJvbSAnLi9jYXJ0LXN1Z2dlc3RlZC1wcm9kdWN0cyc7XHJcbmltcG9ydCBpbml0Q2FydERyYXdlciBmcm9tICcuL2NhcnQtZHJhd2VyJztcclxuaW1wb3J0IGluaXRRdWlja1NlYXJjaCBmcm9tICcuL3F1aWNrLXNlYXJjaCc7XHJcbmltcG9ydCBpbml0UXVpY2tWaWV3IGZyb20gJy4vcXVpY2stdmlldyc7XHJcbmltcG9ydCBzaGlwcGluZ0NvdW50ZG93biBmcm9tICcuL3NoaXBwaW5nLWNvdW50ZG93bic7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9jb21wYXJlLXByb2R1Y3RzJztcclxuXHJcbi8qKlxyXG4gKiBJbml0IHByb2R1Y3QgY2FyZCBzd2F0Y2hlcywgcXR5LCBhbmQgb3RoZXIgcHJvZHVjdCBjYXJkIGZ1bmN0aW9uYWxpdGllc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnRleHQuY2FyZF9zaG93X3N3YXRjaGVzIHJlZmVyZW5jZSBgY29uZmlnLmpzb25gICYgYGxheW91dC9iYXNlLmh0bWxgXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udGV4dC5zaG93X2NhcnRfYWN0aW9uIHJlZmVyZW5jZSBgY29tcG9uZW50cy9wcm9kdWN0cy9jYXJkLWFjdGlvbnMuaHRtbGBcclxuICogQHBhcmFtIHtCb29sZWFufSBjb250ZXh0LmNhcmRfc2hvd19xdHkgcmVmZXJlbmNlIGBjb25maWcuanNvbmAgJiBgbGF5b3V0L2Jhc2UuaHRtbGBcclxuICogQHBhcmFtIHtCb29sZWFufSBjb250ZXh0LmNhcmRfc2hvd19jb3VudGRvd24gcmVmZXJlbmNlIGBjb25maWcuanNvbmAuIE5vdCB1c2VkIGluIEV5ZXZhIHRoZW1lLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnRleHQuY2FyZF9zaG93X2dhbGxlcnkgcmVmZXJlbmNlIGBjb25maWcuanNvbmAuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udGV4dC5jYXJkX3Nob3dfdmlkZW8gcmVmZXJlbmNlIGBjb25maWcuanNvbmAuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udGV4dC5jYXJkX3Nob3dfdmFyaWFudEltZyByZWZlcmVuY2UgYGNvbmZpZy5qc29uYC4gTm90IHVzZWQgaW4gRXlldmEgdGhlbWUuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udGV4dC5jYXJkX3Nob3dfcHJpY2VDYWxsIHJlZmVyZW5jZSBgY29uZmlnLmpzb25gLiBOb3QgdXNlZCBpbiBFeWV2YSB0aGVtZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRleHQuZ3JhcGhRTFRva2VuIHJlZmVyZW5jZSBgbGF5b3V0L2Jhc2UuaHRtbGAgJiBgbGF5b3V0L2Jhc2UuaHRtbGBcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRleHQucHJvZHVjdGdhbGxlcnlfc2l6ZSByZWZlcmVuY2UgYGxheW91dC9iYXNlLmh0bWxgICYgYGxheW91dC9iYXNlLmh0bWxgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZXh0LmNhcmRfc3dhdGNoX25hbWUgcmVmZXJlbmNlIGBjb25maWcuanNvbmAgJiBgbGF5b3V0L2Jhc2UuaHRtbGBcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRleHQudHh0U2FsZUNvdW50ZG93bkpTT04gcmVmZXJlbmNlIGBjb25maWcuanNvbmAuIE5vdCB1c2VkIGluIEV5ZXZhIHRoZW1lLlxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdFByb2R1Y3RDYXJkcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBzaG93U3dhdGNoZXMgPSBjb250ZXh0LmNhcmRfc2hvd19zd2F0Y2hlcztcclxuICAgIGNvbnN0IHNob3VsZFVwZGF0ZU1pbk1heFF0eSA9IGNvbnRleHQuc2hvd19jYXJ0X2FjdGlvbiAmJiBjb250ZXh0LmNhcmRfc2hvd19xdHk7XHJcbiAgICBpZiAoKHNob3dTd2F0Y2hlcyB8fCBzaG91bGRVcGRhdGVNaW5NYXhRdHkgfHwgY29udGV4dC5jYXJkX3Nob3dfY291bnRkb3duIHx8IGNvbnRleHQuY2FyZF9zaG93X2dhbGxlcnkgfHwgY29udGV4dC5jYXJkX3Nob3dfdmlkZW8gfHwgY29udGV4dC5jYXJkX3Nob3dfdmFyaWFudEltZyB8fCBjb250ZXh0LmNhcmRfc2hvd19wcmljZUNhbGwpICYmIGNvbnRleHQuZ3JhcGhRTFRva2VuKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xyXG4gICAgICAgIG5ldyBQcm9kdWN0U3dhdGNoZXMoe1xyXG4gICAgICAgICAgICBzaG93U3dhdGNoZXMsXHJcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZU1pbk1heFF0eSxcclxuICAgICAgICAgICAgZ3JhcGhRTFRva2VuOiBjb250ZXh0LmdyYXBoUUxUb2tlbixcclxuICAgICAgICAgICAgaW1hZ2VTaXplOiBjb250ZXh0LnByb2R1Y3RnYWxsZXJ5X3NpemUsXHJcbiAgICAgICAgICAgIHpvb21TaXplOiBjb250ZXh0Lnpvb21TaXplLFxyXG4gICAgICAgICAgICBwcm9kdWN0U2l6ZTogY29udGV4dC5wcm9kdWN0U2l6ZSxcclxuICAgICAgICAgICAgdGh1bWJTaXplOiBjb250ZXh0LnRodW1iU2l6ZSxcclxuICAgICAgICAgICAgc3dhdGNoZXNMaW1pdDogTnVtYmVyKGNvbnRleHQuY2FyZF9zd2F0Y2hfbGltaXQpLFxyXG4gICAgICAgICAgICBpbmNsdWRlT3B0aW9uczogY29udGV4dC5jYXJkX3N3YXRjaF9uYW1lLnNwbGl0KCcsJykubWFwKHMgPT4gcy50cmltKCkpLmZpbHRlcihzID0+IHMgIT09ICcnKSxcclxuICAgICAgICAgICAgZGlzcGxheVN0eWxlczogWydTd2F0Y2gnXSxcclxuICAgICAgICAgICAgc2hvd0NvdW50ZG93bjogY29udGV4dC5jYXJkX3Nob3dfY291bnRkb3duLFxyXG4gICAgICAgICAgICBzaG93R2FsbGVyeTogY29udGV4dC5jYXJkX3Nob3dfZ2FsbGVyeSxcclxuICAgICAgICAgICAgc2hvd0hvdmVyVmlkZW86IGNvbnRleHQuY2FyZF9zaG93X3ZpZGVvLFxyXG4gICAgICAgICAgICBlbmFibGVWYXJpYW50SW1hZ2VzOiBjb250ZXh0LmNhcmRfc2hvd192YXJpYW50SW1nLFxyXG4gICAgICAgICAgICBzaG93UHJpY2VDYWxsOiBjb250ZXh0LmNhcmRfc2hvd19wcmljZUNhbGwsXHJcbiAgICAgICAgICAgIHR4dFNhbGVDb3VudGRvd25KU09OOiBjb250ZXh0LnR4dFNhbGVDb3VudGRvd25KU09OLFxyXG4gICAgICAgICAgICB0eHRWaWRlb3NMYWJlbDogY29udGV4dC50eHRWaWRlb3NMYWJlbCxcclxuICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWw6IGNvbnRleHQudHh0SW1hZ2VzMzYwTGFiZWwsXHJcbiAgICAgICAgICAgIHR4dEltYWdlc0xhYmVsOiBjb250ZXh0LnR4dEltYWdlc0xhYmVsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2hpcHBpbmdDb3VudGRvd24oY29udGV4dCkge1xyXG4gICAgaWYgKGNvbnRleHQuc2hpcHBpbmdfY291bnRkb3duKSB7XHJcbiAgICAgICAgc2hpcHBpbmdDb3VudGRvd24oe1xyXG4gICAgICAgICAgICBncmFwaFFMVG9rZW46IGNvbnRleHQuZ3JhcGhRTFRva2VuLFxyXG4gICAgICAgICAgICBzdG9yZVRaOiBjb250ZXh0LnNoaXBwaW5nX3R6LFxyXG4gICAgICAgICAgICBjb3VudGRvd25WYWx1ZXM6IHtcclxuICAgICAgICAgICAgICAgIHBhcmNlbDogJzE1OjAwOjAwJyxcclxuICAgICAgICAgICAgICAgIExUTDogJzEyOjAwOjAwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVmYXVsdENvdW50ZG93blRpbWU6IGNvbnRleHQuc2hpcHBpbmdfY291bnRkb3duLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgaW5pdFByb2R1Y3RDYXJkcyhjb250ZXh0KTtcclxuICAgIGluaXRXaXNoTGlzdChjb250ZXh0KTsgLy8gc2hvdWxkIGxvYWQgYmVmb3JlIGFueSBhamF4IHByb2R1Y3RzIGxvYWRcclxuICAgIGluaXRSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbih7XHJcbiAgICAgICAgaWdub3JlUHJvZHVjdFZpZXdlZEV2ZW50OiB0cnVlLFxyXG4gICAgICAgIC4uLmNvbnRleHQsXHJcbiAgICB9KTtcclxuICAgIGluaXRDYXJ0U3VnZ2VzdGVkUHJvZHVjdHMoY29udGV4dCk7XHJcbiAgICBpbml0U2hpcHBpbmdDb3VudGRvd24oY29udGV4dCk7XHJcblxyXG4gICAgLy8gbG93ZXIgcHJpb3JpdHlcclxuICAgIGluaXRRdWlja1NlYXJjaCgpO1xyXG4gICAgaW5pdENhcnREcmF3ZXIoY29udGV4dCk7XHJcbiAgICBhamF4QWRkVG9DYXJ0KGNvbnRleHQpO1xyXG4gICAgaW5pdFF1aWNrVmlldyhjb250ZXh0KTtcclxuICAgIGNvbXBhcmVQcm9kdWN0cyhjb250ZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5cclxubGV0IGluc3RhbmNlO1xyXG5cclxuY2xhc3MgTm90aWZpY2F0aW9uIHtcclxuICAgIHRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBhdGhlbWVzX19ub3RpZmljYXRpb25zXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGl0ZW1UZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1pdGVtIHt7Y2xhc3NOYW1lfX1cIj5cclxuICAgICAgICAgICAge3smaWNvbn19XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge3smY29udGVudH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7eyZjbG9zZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNsb3NlVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwYXBhdGhlbWVzX19ub3RpZmljYXRpb25zLWNsb3NlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuJG5vdGlmaWNhdGlvbnMgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLnRlbXBsYXRlKSlcclxuICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJ2JvZHknKTtcclxuXHJcbiAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaW5mbyhjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KGNvbnRlbnQsIGljb24sIHRpbWVvdXQsICdfaW5mbycpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGNvbnRlbnQsIGljb24sIHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLnNob3coY29udGVudCwgaWNvbiwgdGltZW91dCwgJ19lcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coY29udGVudCwgaWNvbiwgdGltZW91dCA9IDUwMDAsIGNsYXNzTmFtZSA9ICcnKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZSA9IG11c3RhY2hlLnJlbmRlcih0aGlzLmNsb3NlVGVtcGxhdGUpO1xyXG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5pdGVtVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgY29udGVudCwgaWNvbiwgY2xvc2UsIGNsYXNzTmFtZSxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuJG5vdGlmaWNhdGlvbnMuYXBwZW5kKCRpdGVtKS5zaG93KCk7XHJcbiAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoJ19zaG93aW5nJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlRm5jID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkaXRlbS5yZW1vdmVDbGFzcygnX3Nob3dpbmcnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTm90aWZpY2F0aW9ucygpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChjbG9zZUZuYywgdGltZW91dCk7XHJcblxyXG4gICAgICAgICRpdGVtLmZpbmQoJy5wYXBhdGhlbWVzX19ub3RpZmljYXRpb25zLWNsb3NlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIGNsb3NlRm5jKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlVGltZW91dCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRub3RpZmljYXRpb25zLmlzKCc6ZW1wdHknKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmhpZGUoKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBOb3RpZmljYXRpb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuLi90aGVtZS9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7XHJcblxyXG5jb25zdCBtZWRpdW0gPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoJ21lZGl1bScpO1xyXG5cclxuY2xhc3MgUXVpY2tTZWFyY2gge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKFF1aWNrU2VhcmNoLl9pbnN0YW5jZSkgcmV0dXJuIFF1aWNrU2VhcmNoLl9pbnN0YW5jZTtcclxuXHJcbiAgICAgICAgY29uc3QgJHRlbXBsYXRlID0gJCgnI3F1aWNrU2VhcmNoTW9kYWxUZW1wbGF0ZScpO1xyXG5cclxuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIHRoaXMucXVpY2tTZWFyY2hUZW1wbGF0ZSA9ICR0ZW1wbGF0ZS50ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbCh7XHJcbiAgICAgICAgICAgIG1vZGFsVGl0bGU6ICR0ZW1wbGF0ZS5kYXRhKCdtb2RhbFRpdGxlJyksXHJcbiAgICAgICAgICAgIG92ZXJsYXlFeHRyYUNsYXNzOiAnX3F1aWNrU2VhcmNoJyxcclxuICAgICAgICAgICAgbW9kYWxFeHRyYUNsYXNzOiAnX3F1aWNrU2VhcmNoJyxcclxuICAgICAgICAgICAgY2xvc2VPbkVzYzogdHJ1ZSxcclxuICAgICAgICAgICAgc3RhY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFRdWlja1NlYXJjaC5faW5zdGFuY2UpIFF1aWNrU2VhcmNoLl9pbnN0YW5jZSA9IG5ldyBRdWlja1NlYXJjaCgpO1xyXG4gICAgICAgIHJldHVybiBRdWlja1NlYXJjaC5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkaGVhZGVyID0gJCgnW2RhdGEtc3RpY2t5LWhlYWRlcl0nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcGFwYXRoZW1lcy1xdWljay1zZWFyY2gtdG9nZ2xlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwub3Blbk1vZGFsKHRoaXMucXVpY2tTZWFyY2hUZW1wbGF0ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lZGl1bS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJUb3AgPSAkaGVhZGVyWzBdPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLiRtb2RhbC5jc3MoJ3RvcCcsIGhlYWRlclRvcCArIGhlYWRlckhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZvY3VzIG9uIHRoZSBzZWFyY2ggaW5wdXRcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLiRtb2RhbC5maW5kKCdbZGF0YS1zZWFyY2gtcXVpY2tdJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmluZE1vZGFsRXZlbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIHF1aWNrIHNlYXJjaCBtb2RhbCB3aGVuIGNsaWNraW5nIG9uIHN0aWNreSBoZWFkZXJcclxuICAgICAgICAkaGVhZGVyLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vZGFsLiRtb2RhbCB8fCB0aGlzLm1vZGFsLiRtb2RhbC5pcygnOmhpZGRlbicpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRNb2RhbEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMubW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLXF1aWNrLXNlYXJjaC1mb3JtXScpO1xyXG5cclxuICAgICAgICAvLyBDYXRjaCB0aGUgc3VibWlzc2lvbiBvZiB0aGUgcXVpY2stc2VhcmNoIGZvcm1zXHJcbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9ICR0YXJnZXQuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoVXJsID0gJHRhcmdldC5kYXRhKCd1cmwnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtzZWFyY2hVcmx9P3NlYXJjaF9xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hRdWVyeSl9YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZG9TZWFyY2hEZWJvdW5jZSA9IGRlYm91bmNlKHNlYXJjaFF1ZXJ5ID0+IHRoaXMuZG9TZWFyY2goc2VhcmNoUXVlcnkpLCAxMDAwKTtcclxuICAgICAgICBjb25zdCAkaW5wdXQgPSAkZm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtcXVpY2tdJyk7XHJcblxyXG4gICAgICAgICRpbnB1dC5vbignaW5wdXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoIDwgMykgcmV0dXJuO1xyXG4gICAgICAgICAgICAkZm9ybS5hZGRDbGFzcygnX2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgZG9TZWFyY2hEZWJvdW5jZShzZWFyY2hRdWVyeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9TZWFyY2goc2VhcmNoUXVlcnkpIHtcclxuICAgICAgICB1dGlscy5hcGkuc2VhcmNoLnNlYXJjaChzZWFyY2hRdWVyeSwgeyB0ZW1wbGF0ZTogJ3NlYXJjaC9xdWljay1yZXN1bHRzJyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubW9kYWwuJG1vZGFsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMubW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLXF1aWNrLXNlYXJjaC1mb3JtXScpO1xyXG4gICAgICAgICAgICAkZm9ybS5yZW1vdmVDbGFzcygnX2xvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRxdWlja1NlYXJjaFJlc3VsdHMgPSB0aGlzLm1vZGFsLiRtb2RhbC5maW5kKCcucXVpY2tTZWFyY2hSZXN1bHRzJyk7XHJcblxyXG4gICAgICAgICAgICAkcXVpY2tTZWFyY2hSZXN1bHRzLmh0bWwocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJHF1aWNrU2VhcmNoUmVzdWx0c0N1cnJlbnQgPSAkcXVpY2tTZWFyY2hSZXN1bHRzLmZpbHRlcignOnZpc2libGUnKTtcclxuICAgICAgICAgICAgY29uc3QgJG5vUmVzdWx0c01lc3NhZ2UgPSAkcXVpY2tTZWFyY2hSZXN1bHRzQ3VycmVudC5maW5kKCcucXVpY2tTZWFyY2hNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJG5vUmVzdWx0c01lc3NhZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkbm9SZXN1bHRzTWVzc2FnZS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAnc3RhdHVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRxdWlja1NlYXJjaEFyaWFNZXNzYWdlID0gdGhpcy5tb2RhbC4kbW9kYWwuZmluZCgnW2RhdGEtc2VhcmNoLWFyaWEtbWVzc2FnZS1wcmVkZWZpbmVkLXRleHRdJyk7XHJcbiAgICAgICAgICAgICAgICAkcXVpY2tTZWFyY2hBcmlhTWVzc2FnZS5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVkZWZpbmVkVGV4dCA9ICRxdWlja1NlYXJjaEFyaWFNZXNzYWdlLmRhdGEoJ3NlYXJjaC1hcmlhLW1lc3NhZ2UtcHJlZGVmaW5lZC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtc0ZvdW5kQ291bnQgPSAkcXVpY2tTZWFyY2hSZXN1bHRzQ3VycmVudC5maW5kKCcucHJvZHVjdCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAkcXVpY2tTZWFyY2hBcmlhTWVzc2FnZS50ZXh0KGAke2l0ZW1zRm91bmRDb3VudH0gJHtwcmVkZWZpbmVkVGV4dH0gJHtzZWFyY2hRdWVyeX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkcXVpY2tTZWFyY2hBcmlhTWVzc2FnZS5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIFF1aWNrU2VhcmNoLmdldEluc3RhbmNlKCk7XHJcbn1cclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2V5ZXZhL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi4vdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlJztcclxuXHJcbmZ1bmN0aW9uIHF1aWNrVmlld0Nvcm5lcnN0b25lKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcucXVpY2t2aWV3JywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdElkJyk7XHJcblxyXG4gICAgICAgIG1vZGFsLm9wZW4oeyBzaXplOiAnbGFyZ2UnIH0pO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgeyB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL3F1aWNrLXZpZXcnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB7ICRjb250ZXh0OiBtb2RhbC4kY29udGVudCB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qIHBhcGF0aGVtZXMgZml4OiBTVFJGLTI0NzEgLSBNdWx0aXBsZSBXaXNoIExpc3RzIC0gcHJldmVudHMgZG91YmxlLWZpcmluZ1xyXG4gICAgICAgICAgICAqIG9mIGZvdW5kYXRpb24uZHJvcGRvd24gY2xpY2suZm5kdG4uZHJvcGRvd24gZXZlbnQgKi9cclxuICAgICAgICAgICAgbW9kYWwuJGNvbnRlbnQub2ZmKCcuZm5kdG4uZHJvcGRvd24nKTtcclxuICAgICAgICAgICAgbW9kYWwuJGNvbnRlbnQuZmluZCgnW2RhdGEtZHJvcGRvd24tY29udGVudF0nKS5vZmYoJy5mbmR0bi5kcm9wZG93bicpO1xyXG4gICAgICAgICAgICBtb2RhbC4kY29udGVudC5mb3VuZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duOiB7IGFjdGl2ZV9jbGFzczogJ2lzLW9wZW4nIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3RWaWV3JykuYWRkQ2xhc3MoJ3Byb2R1Y3RWaWV3LS1xdWlja1ZpZXcnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvZHVjdERldGFpbHMobW9kYWwuJGNvbnRlbnQuZmluZCgnLnF1aWNrVmlldycpLCBjb250ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcucXVpY2t2aWV3JywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMub3BlbiwgKCkgPT4gbW9kYWwuJG1vZGFsLmFkZENsYXNzKCdtb2RhbC0tcXVpY2tWaWV3JykpO1xyXG4gICAgICAgIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMuY2xvc2VkLCAoKSA9PiBtb2RhbC4kbW9kYWwucmVtb3ZlQ2xhc3MoJ21vZGFsLS1xdWlja1ZpZXcnKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBTVFJGLTI0NzEgLSBNdWx0aXBsZSBXaXNoIExpc3RzIC0gcHJldmVudHMgZG91YmxlLWZpcmluZ1xyXG4gICAgICogb2YgZm91bmRhdGlvbi5kcm9wZG93biBjbGljay5mbmR0bi5kcm9wZG93biBldmVudCAqL1xyXG4gICAgLy8gbW9kYWwuJG1vZGFsLm9uKCdjbGljaycsICdbZGF0YS1kcm9wZG93bl0nLCBlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG5cclxuICAgIC8vIHBhcGF0aGVtZXM6IFRyYWNrIHJlY2VudGx5IHZpZXdlZCBwcm9kdWN0c1xyXG4gICAgbW9kYWwuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmxvYWRlZCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0VmlldyA9IG1vZGFsLiRjb250ZW50LmZpbmQoJy5wcm9kdWN0VmlldycpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcigkcHJvZHVjdFZpZXcuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSk7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcigncHJvZHVjdHZpZXdlZCcsIFtwcm9kdWN0SWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcXVpY2tWaWV3Q29ybmVyc3RvbmUoLi4uYXJncyk7XHJcbn1cclxuIiwiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IHsgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMsIFByb2R1Y3RDYXJkc0dyYXBoUUxRdWVyeSwgcHJvZHVjdENhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxubGV0IHdpc2hsaXN0SW5zdGFuY2UgPSBudWxsO1xyXG5cclxuY2xhc3MgV2lzaExpc3Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0W119IEN1c3RvbWVyIHdpc2hsaXN0IG9iamVjdHNcclxuICAgICAqIEBzZWUgZmV0Y2hDdXN0b21lcldpc2hsaXN0c1xyXG4gICAgICovXHJcbiAgICBjdXN0b21lcldpc2hsaXN0cyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge251bWJlcltdfSBQcm9kdWN0IElEcyBpbiBjdXN0b21lcidzIHdpc2hsaXN0c1xyXG4gICAgICogQHNlZSBmZXRjaEN1c3RvbWVyV2lzaGxpc3RzXHJcbiAgICAgKi9cclxuICAgIGN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBNdXN0YWNoZSB0ZW1wbGF0ZSBmb3IgYWRkIHdpc2hsaXN0IGRyb3Bkb3duIGl0ZW1cclxuICAgICAqXHJcbiAgICAgKiBAbGluayB0ZW1wbGF0ZXMvY29tcG9uZW50cy9jb21tb24vd2lzaGxpc3QtZHJvcGRvd24uaHRtbFxyXG4gICAgICogQGxpbmsgdGVtcGxhdGVzL2NvbXBvbmVudHMvcHJvZHVjdHMvY2FyZC13aXNobGlzdC1kcm9wZG93bi5odG1sXHJcbiAgICAgKi9cclxuICAgIGRyb3Bkb3duSXRlbVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIl9hY3Rpb24ge3sjY291bnR9fV9oYXMtaXRlbXN7ey9jb3VudH19XCJcclxuICAgICAgICAgICAgICAgIGZvcm1hY3Rpb249XCJ7e3VybH19Jndpc2hsaXN0aWQ9e3tpZH19XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aXNobGlzdC1pZD17e2lkfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3tuYW1lfX1cclxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBfb25cIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWNoZWNrXCIgLz48L3N2Zz48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgO1xyXG5cclxuICAgIGluZm9JY29uVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1oZWFydFwiIC8+PC9zdmc+PC9pPlxyXG4gICAgYDtcclxuXHJcbiAgICBhbm9ueW1vdXNXaXNobGlzdFByb2R1Y3RzVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3sjcHJvZHVjdENhcmRzLmxlbmd0aH19XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdEdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyNwcm9kdWN0Q2FyZHN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3smLn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt7L3Byb2R1Y3RDYXJkc319XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vdXRsaW5lXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtbW9yZT57e3R4dExvYWRNb3JlfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tb3V0bGluZVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWxlc3M+e3t0eHRDb2xsYXBzZX19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3svcHJvZHVjdENhcmRzLmxlbmd0aH19XHJcbiAgICAgICAgICAgIHt7XnByb2R1Y3RDYXJkcy5sZW5ndGh9fVxyXG4gICAgICAgICAgICAgICAge3t0eHRFbXB0eVdpc2hsaXN0fX1cclxuICAgICAgICAgICAge3svcHJvZHVjdENhcmRzLmxlbmd0aH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJJZCA9IGNvbnRleHQuY3VzdG9tZXJJZDtcclxuICAgICAgICB0aGlzLmdyYXBoUUxUb2tlbiA9IGNvbnRleHQuZ3JhcGhRTFRva2VuO1xyXG4gICAgICAgIHRoaXMudHh0QWRkZWRJdGVtV2lzaGxpc3QgPSBjb250ZXh0LnR4dEFkZGVkSXRlbVdpc2hsaXN0IHx8ICd7bmFtZX0gaGFzIGJlZW4gYWRkZWQgdG8geW91ciBXaXNoIExpc3QnO1xyXG4gICAgICAgIHRoaXMudHh0RGVsZXRlZEl0ZW1XaXNobGlzdCA9IGNvbnRleHQudHh0RGVsZXRlZEl0ZW1XaXNobGlzdCB8fCAne25hbWV9IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB5b3VyIFdpc2ggTGlzdCc7XHJcbiAgICAgICAgdGhpcy50eHRFbXB0eVdpc2hsaXN0ID0gY29udGV4dC50eHRFbXB0eVdpc2hsaXN0IHx8ICdZb3VyIHdpc2hsaXN0IGlzIGVtcHR5JztcclxuICAgICAgICB0aGlzLnR4dFdpc2hsaXN0Vmlld0hlYWRpbmcgPSBjb250ZXh0LnR4dFdpc2hsaXN0Vmlld0hlYWRpbmcgfHwgJ015IFdpc2ggTGlzdDoge25hbWV9JztcclxuICAgICAgICB0aGlzLnR4dExvYWRNb3JlID0gY29udGV4dC50eHRMb2FkTW9yZSB8fCAnTG9hZCBtb3JlJztcclxuICAgICAgICB0aGlzLnR4dENvbGxhcHNlID0gY29udGV4dC50eHRDb2xsYXBzZSB8fCAnQ29sbGFwc2UnO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJpY0Vycm9yID0gY29udGV4dC5nZW5lcmljRXJyb3IgfHwgJ09vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLic7XHJcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoKTsgLy8gbW9kYWwgZm9yIGNyZWF0aW5nIGEgbmV3IHdpc2hsaXN0XHJcblxyXG4gICAgICAgIHRoaXMub25DbGlja0FkZFRvV2lzaGxpc3QgPSB0aGlzLm9uQ2xpY2tBZGRUb1dpc2hsaXN0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXN0b21lcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEN1c3RvbWVyV2lzaGxpc3RzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0QW5vbnltb3VzV2lzaGxpc3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBjdXN0b21lcidzIHdpc2hsaXN0cyBmb3IgYWxsIHByb2R1Y3QgY2FyZHMgYW5kIHByb2R1Y3QgdmlldyB3aGVuIGN1c3RvbWVyIGlzIGxvZ2dlZCBpbi5cclxuICAgICAqIC0gRmV0Y2ggY3VzdG9tZXIncyB3aXNobGlzdHMgZnJvbSBHcmFwaFFMXHJcbiAgICAgKiAtIEFkZCBwcm9kdWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gY3VzdG9tZXIncyB3aXNobGlzdFxyXG4gICAgICogLSBVcGRhdGUgd2lzaGxpc3QgYnV0dG9uJ3Mgc3RhdGVzXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRDdXN0b21lcldpc2hsaXN0cygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ3VzdG9tZXJXaXNobGlzdHMoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUN1c3RvbWVyV2lzaGxpc3RGcm9tQW5vbnltb3VzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaXNobGlzdEJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgbG9jYWwgc3RvcmFnZSB3aXNobGlzdHMgZm9yIGFsbCBwcm9kdWN0IGNhcmRzIGFuZCBwcm9kdWN0IHZpZXcgd2hlbiBjdXN0b21lciBpcyBub3QgbG9nZ2VkIGluLlxyXG4gICAgICogLSBVcGRhdGUgd2lzaGxpc3QgYnV0dG9uJ3Mgc3RhdGVzXHJcbiAgICAgKi9cclxuICAgIGluaXRBbm9ueW1vdXNXaXNobGlzdHMoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaXNobGlzdEJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB3aXNobGlzdCBwcm9kdWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2Ugd2hlbiBjdXN0b21lciBpcyBub3QgbG9nZ2VkIGluLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJbXX0gTGlzdCBvZiBwcm9kdWN0IElEc1xyXG4gICAgICovXHJcbiAgICBnZXRBbm9ueW1vdXNQcm9kdWN0cygpIHtcclxuICAgICAgICBjb25zdCBzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXSVNITElTVF9QUk9EVUNUUycpIHx8ICcnO1xyXG4gICAgICAgIHJldHVybiBzLnNwbGl0KCcsJykubWFwKE51bWJlcikuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZSB3aXNobGlzdCBwcm9kdWN0cyB0byBsb2NhbCBzdG9yYWdlIHdoZW4gY3VzdG9tZXIgaXMgbm90IGxvZ2dlZCBpbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSBwcm9kdWN0SWRzIExpc3Qgb2YgcHJvZHVjdCBJRHNcclxuICAgICAqL1xyXG4gICAgc2F2ZUFub255bW91c1Byb2R1Y3RzKHByb2R1Y3RJZHMpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dJU0hMSVNUX1BST0RVQ1RTJywgcHJvZHVjdElkcy5qb2luKCcsJykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgd2lzaGxpc3QgcHJvZHVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlIHdoZW4gY3VzdG9tZXIgaXMgbm90IGxvZ2dlZCBpbi5cclxuICAgICAqL1xyXG4gICAgY2xlYXJBbm9ueW1vdXNQcm9kdWN0cygpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1dJU0hMSVNUX1BST0RVQ1RTJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kIGV2ZW50cyAob25DbGljaykgZm9yIGFkZCB0byB3aXNobGlzdCBidXR0b25zLlxyXG4gICAgICogLSBbZGF0YS13aXNobGlzdC1hZGQtYW5vbnltb3VzXSBhZGQgd2lzaGxpc3QgYnV0dG9ucyB3aGVuIGN1c3RvbWVyIGlzIG5vdCBsb2dnZWQgaW5cclxuICAgICAqIC0gW2RhdGEtd2lzaGxpc3QtYWRkLWN1c3RvbWVyXSBhZGQgd2lzaGxpc3QgYnV0dG9ucyB3aGVuIGN1c3RvbWVyIGlzIGxvZ2dlZCBpblxyXG4gICAgICovXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWFkZC1hbm9ueW1vdXNdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuZ2V0Rm9ybSgkZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gJGZvcm0uZGF0YSgncHJvZHVjdE5hbWUnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJGVsLmNsb3Nlc3QoJ1tkYXRhLXdpc2hsaXN0LWFkZF0nKS5kYXRhKCd3aXNobGlzdEFkZCcpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2FtZUJ0bnMgPSAkKGBbZGF0YS13aXNobGlzdC1hZGQ9XCIke3Byb2R1Y3RJZH1cIl0gW2RhdGEtd2lzaGxpc3QtYWRkLWFub255bW91c11gKTtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRlbC5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFub255bW91c1Byb2R1Y3QocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2FtZUJ0bnMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmluZm8odGhpcy50eHREZWxldGVkSXRlbVdpc2hsaXN0LnJlcGxhY2UoJ3tuYW1lfScsIG5hbWUpLCB0aGlzLmluZm9JY29uVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEFub255bW91c1Byb2R1Y3QocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2FtZUJ0bnMuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmluZm8odGhpcy50eHRBZGRlZEl0ZW1XaXNobGlzdC5yZXBsYWNlKCd7bmFtZX0nLCBuYW1lKSwgdGhpcy5pbmZvSWNvblRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB3aGVuIGNsaWNrIHRvIHRoZSBhZGQgdG8gd2lzaGxpc3QgYnV0dG9uIGZvciBsb2dnZWQgaW4gY3VzdG9tZXIgb24gcHJvZHVjdCBjYXJkcyxcclxuICAgICAgICAvLyBuZWVkIHRvIHBvcHVsYXRlIGFsbCB3aXNobGlzdHMgdG8gdGhlIGRyb3Bkb3duIGJlY2F1c2UgU3RlbmNpbCBkb2Vzbid0IHN1cHBvcnQgd2lzaGxpc3RzIG9uIHByb2R1Y3RzIGxpc3RpbmdcclxuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjbGljaycsICdbZGF0YS13aXNobGlzdC1hZGQtY3VzdG9tZXJdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlQ3VzdG9tZXJXaXNobGlzdERyb3Bkb3duKCQoZXZlbnQuY3VycmVudFRhcmdldCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duIHdoZW4gb3BlbmVkIHRvIHByZXZlbnQgaGlkZGVuIGJ5IHBhcmVudCBlbGVtZW50c1xyXG4gICAgICAgIHRoaXMuJGJvZHkub24oJ29wZW5lZC5mbmR0bi5kcm9wZG93bicsICdbZGF0YS13aXNobGlzdC1kcm9wZG93bl0nLCAoX2V2ZW50LCAkZHJvcGRvd24sICR0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wZG93blBvc2l0aW9uKCRkcm9wZG93biwgJHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB3aXNobGlzdFxyXG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWNyZWF0ZV0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy5nZXRGb3JtKCQoZXZlbnQuY3VycmVudFRhcmdldCkpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkZm9ybS5kYXRhKCd3aXNobGlzdEFkZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9ICRmb3JtLmRhdGEoJ3Byb2R1Y3ROYW1lJyk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNyZWF0aW5nV2lzaGxpc3RNb2RhbChwcm9kdWN0SWQsIHByb2R1Y3ROYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGlzdGVuIGN1c3RvbSBldmVudCB0byB1cGRhdGUgd2lzaGxpc3QgYnV0dG9ucyBvbiByZXF1ZXN0XHJcbiAgICAgICAgdGhpcy4kYm9keS5vbigndXBkYXRlLXdpc2hsaXN0LWJ1dHRvbnMnLCAoZXZlbnQsICRzY29wZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdpc2hsaXN0QnV0dG9ucygkc2NvcGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBvcGVuIHdpc2hsaXN0IG1vZGFsIGRpc3BsYXkgYWxsIHdpc2hsaXN0IHByb2R1Y3RzXHJcbiAgICAgICAgJCgnW2RhdGEtd2lzaGxpc3Qtb3Blbl0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkFub255bW91c1dpc2hsaXN0UHJvZHVjdHNNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZCB0aGUgZm9ybSBlbGVtZW50IChgZm9ybVtkYXRhLXdpc2hsaXN0LWFkZF1gKSBvZiB0aGUgYWRkIHRvIHdpc2hsaXN0IGJ1dHRvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqIEByZXR1cm5zIHtqUXVlcnl9XHJcbiAgICAgKi9cclxuICAgIGdldEZvcm0oJGVsKSB7XHJcbiAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJGVsLmlzKCdbZGF0YS13aXNobGlzdC1kcm9wZG93bl0nKSA/ICRlbCA6ICRlbC5jbG9zZXN0KCdbZGF0YS13aXNobGlzdC1kcm9wZG93bl0nKTtcclxuICAgICAgICBjb25zdCBmb3JtID0gJGRyb3Bkb3duLmRhdGEoJ2Zvcm1FbGVtZW50JykgfHwgJGRyb3Bkb3duLmNsb3Nlc3QoJ1tkYXRhLXdpc2hsaXN0LWFkZF0nKVswXSB8fCAkZWwuY2xvc2VzdCgnW2RhdGEtd2lzaGxpc3QtYWRkXScpWzBdO1xyXG4gICAgICAgIHJldHVybiAkKGZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc3BlY2lmaWMgcHJvZHVjdCBmcm9tIGxvY2FsIHN0b3JhZ2Ugd2lzaGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCBQcm9kdWN0IElEIHRvIHJlbW92ZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVBbm9ueW1vdXNQcm9kdWN0KHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSB0aGlzLmdldEFub255bW91c1Byb2R1Y3RzKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9kdWN0SWRzLmluZGV4T2YocHJvZHVjdElkKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlQW5vbnltb3VzUHJvZHVjdHMocHJvZHVjdElkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgc3BlY2lmaWMgcHJvZHVjdCB0byBsb2NhbCBzdG9yYWdlIHdpc2hsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQgUHJvZHVjdCBJRCB0byBhZGRcclxuICAgICAqL1xyXG4gICAgYWRkQW5vbnltb3VzUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWRzID0gdGhpcy5nZXRBbm9ueW1vdXNQcm9kdWN0cygpO1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkcy5pbmNsdWRlcyhwcm9kdWN0SWQpKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RJZHMucHVzaChwcm9kdWN0SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVBbm9ueW1vdXNQcm9kdWN0cyhwcm9kdWN0SWRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlIG9mIGFkZCB0byB3aXNobGlzdCBidXR0b25zLCB0byBkZXRlcm1pbmUgd2hldGhlciBhIHByb2R1Y3QgaXMgaW4gYSB3aXNobGlzdCBvciBub3QuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVdpc2hsaXN0QnV0dG9ucygkc2NvcGUgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRBbm9ueW1vdXNQcm9kdWN0cygpLFxyXG4gICAgICAgICAgICAuLi50aGlzLmN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCAkYWxsQnRucyA9ICQoKTtcclxuICAgICAgICBjb25zdCAkYm9keSA9ICRzY29wZSB8fCB0aGlzLiRib2R5O1xyXG5cclxuICAgICAgICAkYm9keS5maW5kKCdbZGF0YS13aXNobGlzdC1hZGRdJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkZWwuZGF0YSgnd2lzaGxpc3RBZGQnKTtcclxuICAgICAgICAgICAgY29uc3QgJGJ0biA9ICRlbC5maW5kKCdbZGF0YS13aXNobGlzdC1hZGQtYW5vbnltb3VzXSwgW2RhdGEtd2lzaGxpc3QtYWRkLWN1c3RvbWVyXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RJZHMuaW5jbHVkZXMocHJvZHVjdElkKSkge1xyXG4gICAgICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGFsbEJ0bnMgPSAkYWxsQnRucy5hZGQoJGJ0bik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRvIG5vdCBhbmltYXRlIGZvciB0aGUgZmlyc3QgdGltZSBsb2FkZWRcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICRhbGxCdG5zLmFkZENsYXNzKCdfYW5pbWF0ZScpLCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggY3VzdG9tZXIncyB3aXNobGlzdHMgYW5kIHRoZWlyIGl0ZW1zLlxyXG4gICAgICogLSBTdG9yZSBwcm9kdWN0IElEcyBpbiBgY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHNgXHJcbiAgICAgKiAtIFN0b3JlIHdpc2hsaXN0cyBpbiBgY3VzdG9tZXJXaXNobGlzdHNgXHJcbiAgICAgKiBAc2VlIGN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzXHJcbiAgICAgKiBAc2VlIGN1c3RvbWVyV2lzaGxpc3RzXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hDdXN0b21lcldpc2hsaXN0cygpIHtcclxuICAgICAgICBjb25zdCBmZXRjaFdpc2hsaXN0SXRlbXMgPSBhc3luYyAod2lzaGxpc3RJZHMgPSBbXSwgYWZ0ZXJJdGVtQ3Vyc29yID0gJycpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVycyA9IHdpc2hsaXN0SWRzLmxlbmd0aCA+IDAgPyB7IGVudGl0eUlkczogd2lzaGxpc3RJZHMgfSA6IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGFmdGVySXRlbUN1cnNvciB8fCAnJztcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRmaWx0ZXJzOiBXaXNobGlzdEZpbHRlcnNJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnNvcjogU3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IDUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6ICRmaWx0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6ICRjdXJzb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlSW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ3Vyc29yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcC5kYXRhLmN1c3RvbWVyLndpc2hsaXN0cy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4ubm9kZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBub2RlLml0ZW1zLmVkZ2VzLm1hcCgoeyBub2RlOiBpdGVtTm9kZSB9KSA9PiBpdGVtTm9kZSksXHJcbiAgICAgICAgICAgICAgICBlbmRJdGVtQ3Vyc29yOiBub2RlLml0ZW1zLnBhZ2VJbmZvLmhhc05leHRQYWdlICYmIG5vZGUuaXRlbXMucGFnZUluZm8uZW5kQ3Vyc29yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBub2RlLml0ZW1zLnBhZ2VJbmZvLmVuZEN1cnNvclxyXG4gICAgICAgICAgICAgICAgICAgIDogJycsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBmZXRjaCB3aXNobGlzdHMgaXRlbXNcclxuICAgICAgICB0aGlzLmN1c3RvbWVyV2lzaGxpc3RzID0gYXdhaXQgZmV0Y2hXaXNobGlzdEl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnRpbnVlIGZldGNoaW5nIGFsbCBpdGVtcyBpbiB3aXNobGlzdHNcclxuICAgICAgICBmb3IgKGNvbnN0IHdpc2hsaXN0IG9mIHRoaXMuY3VzdG9tZXJXaXNobGlzdHMpIHtcclxuICAgICAgICAgICAgbGV0IGVuZEl0ZW1DdXJzb3IgPSB3aXNobGlzdC5lbmRJdGVtQ3Vyc29yO1xyXG4gICAgICAgICAgICB3aGlsZSAoZW5kSXRlbUN1cnNvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lzaGxpc3QyID0gYXdhaXQgZmV0Y2hXaXNobGlzdEl0ZW1zKFt3aXNobGlzdC5lbnRpdHlJZF0sIGVuZEl0ZW1DdXJzb3IpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgZW5kSXRlbUN1cnNvcjogbmV4dEVuZEl0ZW1DdXJzb3IgfSA9IHdpc2hsaXN0Mi5maW5kKHcgPT4gdy5lbnRpdHlJZCA9PT0gd2lzaGxpc3QuZW50aXR5SWQpO1xyXG4gICAgICAgICAgICAgICAgd2lzaGxpc3QuaXRlbXMucHVzaCguLi5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBlbmRJdGVtQ3Vyc29yID0gbmV4dEVuZEl0ZW1DdXJzb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsbCBwcm9kdWN0IElEcyBpbiBjdXN0b21lcidzIHdpc2hsaXN0c1xyXG4gICAgICAgICAqIEB0eXBlIHtTZXQ8bnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzID0gQXJyYXkuZnJvbSh0aGlzLmN1c3RvbWVyV2lzaGxpc3RzLnJlZHVjZSgoYWNjLCB3aXNobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICB3aXNobGlzdC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gYWNjLmFkZChpdGVtLnByb2R1Y3RFbnRpdHlJZCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIG5ldyBTZXQoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHdpc2hsaXN0IHByb2R1Y3RzIGZyb20gbG9jYWwgc3RvcmFnZSB0byB0byBjdXN0b21lcidzIHdpc2hsaXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwZGF0ZUN1c3RvbWVyV2lzaGxpc3RGcm9tQW5vbnltb3VzKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByb2R1Y3QgSURzIGluIGxvY2FsIHN0b3JhZ2Ugb25seVxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0SWRzID0gdGhpcy5nZXRBbm9ueW1vdXNQcm9kdWN0cygpLmZpbHRlcihwcm9kdWN0SWQgPT4gIXRoaXMuY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHMuaW5jbHVkZXMocHJvZHVjdElkKSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBwcm9kdWN0cyBpbiBsb2NhbCBzdG9yYWdlIHRvIGN1c3RvbWVyJ3Mgd2lzaGxpc3RcclxuICAgICAgICBhd2FpdCB0aGlzLmFkZEN1c3RvbWVyV2lzaGxpc3RJdGVtcyh0aGlzLmN1c3RvbWVyV2lzaGxpc3RzWzBdPy5lbnRpdHlJZCwgbmV3UHJvZHVjdElkcyk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICB0aGlzLmNsZWFyQW5vbnltb3VzUHJvZHVjdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBwcm9kdWN0cyB0byB3aXNobGlzdCB1c2luZyBHcmFwaFFMIEFQSS5cclxuICAgICAqXHJcbiAgICAgKiBBbHNvIHVwZGF0ZTpcclxuICAgICAqIC0gYGN1c3RvbWVyV2lzaGxpc3RzYFxyXG4gICAgICogLSBgY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHNgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpc2hsaXN0SWQgV2lzaGxpc3QgSURcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IHByb2R1Y3RJZHMgTGlzdCBvZiBwcm9kdWN0IElEc1xyXG4gICAgICogQHNlZSBjdXN0b21lcldpc2hsaXN0c1xyXG4gICAgICogQHNlZSBjdXN0b21lcldpc2hsaXN0UHJvZHVjdElkc1xyXG4gICAgICovXHJcbiAgICBhc3luYyBhZGRDdXN0b21lcldpc2hsaXN0SXRlbXMod2lzaGxpc3RJZCwgcHJvZHVjdElkcykge1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBwcm9kdWN0SWRzLm1hcChwcm9kdWN0SWQgPT4gKHtcclxuICAgICAgICAgICAgcHJvZHVjdEVudGl0eUlkOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBsZXQgX3dpc2hsaXN0SWQgPSB3aXNobGlzdElkO1xyXG4gICAgICAgIGlmICghX3dpc2hsaXN0SWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgd2lzaGxpc3QgPSBhd2FpdCB0aGlzLmNyZWF0ZVdpc2hsaXN0KCdNeSBXaXNoIExpc3QnKTtcclxuICAgICAgICAgICAgX3dpc2hsaXN0SWQgPSB3aXNobGlzdC5lbnRpdHlJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHdpc2hsaXN0SWQ6IEludCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW1zOiBbV2lzaGxpc3RJdGVtSW5wdXQhXSFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkV2lzaGxpc3RJdGVtcyhpbnB1dDoge2VudGl0eUlkOiAkd2lzaGxpc3RJZCwgaXRlbXM6ICRpdGVtc30pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zKGZpcnN0OiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lzaGxpc3RJZDogX3dpc2hsaXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHdpc2hsaXN0ID0gdGhpcy5jdXN0b21lcldpc2hsaXN0cy5maW5kKHcgPT4gdy5lbnRpdHlJZCA9PT0gX3dpc2hsaXN0SWQpO1xyXG5cclxuICAgICAgICAvLyBtZXJnZSBuZXdseSBhZGRlZCBpdGVtcyB0byB0aGUgZXhpc3Rpbmcgd2lzaGxpc3RzIG9iamVjdHNcclxuICAgICAgICBpZiAoIXdpc2hsaXN0KSB7XHJcbiAgICAgICAgICAgIHdpc2hsaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucmVzcC5kYXRhLndpc2hsaXN0LmFkZFdpc2hsaXN0SXRlbXMucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHJlc3AuZGF0YS53aXNobGlzdC5hZGRXaXNobGlzdEl0ZW1zLnJlc3VsdC5pdGVtcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21lcldpc2hsaXN0cy5wdXNoKHdpc2hsaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNwLmRhdGEud2lzaGxpc3QuYWRkV2lzaGxpc3RJdGVtcy5yZXN1bHQuaXRlbXMuZWRnZXMuZm9yRWFjaCgoeyBub2RlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gd2lzaGxpc3QuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0uZW50aXR5SWQgPT09IG5vZGUuZW50aXR5SWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0Lml0ZW1zLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbWVyZ2UgbmV3bHkgYWRkZWQgcHJvZHVjdCBpZHMgdG8gdGhlIGV4aXN0aW5nIHByb2R1Y3QgaWRzXHJcbiAgICAgICAgcmVzcC5kYXRhLndpc2hsaXN0LmFkZFdpc2hsaXN0SXRlbXMucmVzdWx0Lml0ZW1zLmVkZ2VzLmZvckVhY2goKHsgbm9kZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jdXN0b21lcldpc2hsaXN0UHJvZHVjdElkcy5pbmNsdWRlcyhub2RlLnByb2R1Y3RFbnRpdHlJZCk7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHMucHVzaChub2RlLnByb2R1Y3RFbnRpdHlJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHByb2R1Y3QgaWRzIHRvIHRoZSB0aGUgZXhpc3RpbmcgcHJvZHVjdCBpZHMgKGluIGNhc2UgZ3JhcGhxbCByZXNwb25zZSBpcyBub3QgdXBkYXRlZCBvciBlcnJvcilcclxuICAgICAgICBwcm9kdWN0SWRzLmZvckVhY2gocHJvZHVjdElkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLmN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzLmluY2x1ZGVzKHByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHMucHVzaChwcm9kdWN0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgcHJvZHVjdCB0byB3aXNobGlzdCBieSBVUkwgdXNpbmcgUkVTVCBBUElcclxuICAgICAqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgYGFkZEN1c3RvbWVyV2lzaGxpc3RJdGVtc2AgaW5zdGVhZCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEFkZCBwcm9kdWN0IHRvIHdpc2hsaXN0IFVSTFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCBQcm9kdWN0IElEXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyBhZGRQcm9kdWN0VG9XaXNobGlzdCh1cmwsIHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jdXN0b21lcldpc2hsaXN0UHJvZHVjdElkcy5pbmNsdWRlcyhwcm9kdWN0SWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHMucHVzaChwcm9kdWN0SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgcHJvZHVjdCBmcm9tIGEgd2lzaGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQWxzbyB1cGRhdGU6XHJcbiAgICAgKiAtIGBjdXN0b21lcldpc2hsaXN0c2BcclxuICAgICAqIC0gYGN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aXNobGlzdElkIFdpc2hsaXN0IElEXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIFByb2R1Y3QgSURcclxuICAgICAqIEBzZWUgY3VzdG9tZXJXaXNobGlzdHNcclxuICAgICAqIEBzZWUgY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGRlbGV0ZUN1c3RvbWVyV2lzaGxpc3RJdGVtKHdpc2hsaXN0SWQsIHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHdpc2hsaXN0ID0gdGhpcy5jdXN0b21lcldpc2hsaXN0cy5maW5kKHcgPT4gdy5lbnRpdHlJZCA9PT0gd2lzaGxpc3RJZCk7XHJcbiAgICAgICAgY29uc3QgaXRlbUVudGl0eUlkcyA9IHdpc2hsaXN0Py5pdGVtc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9kdWN0RW50aXR5SWQgPT09IHByb2R1Y3RJZClcclxuICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0uZW50aXR5SWQpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aXNobGlzdElkOiBJbnQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtRW50aXR5SWRzOiBbSW50IV0hXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVdpc2hsaXN0SXRlbXMoaW5wdXQ6IHtlbnRpdHlJZDogJHdpc2hsaXN0SWQsIGl0ZW1FbnRpdHlJZHM6ICRpdGVtRW50aXR5SWRzfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUVudGl0eUlkcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgcHJvZHVjdCBmcm9tIHRoZSB3aXNobGlzdHMgb2JqZWN0c1xyXG4gICAgICAgIHdpc2hsaXN0Lml0ZW1zID0gd2lzaGxpc3QuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcm9kdWN0RW50aXR5SWQgIT09IHByb2R1Y3RJZCk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBwcm9kdWN0IGlkIGZyb20gdGhlIHByb2R1Y3QgaWRzIGlmIG5vdCBmb3VuZCBpbiBhbnkgd2lzaGxpc3RzXHJcbiAgICAgICAgY29uc3QgZXhpc3QgPSB0aGlzLmN1c3RvbWVyV2lzaGxpc3RzLnJlZHVjZSgoX2ZvdW5kLCB3KSA9PiBfZm91bmQgfHwgdy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5wcm9kdWN0RW50aXR5SWQgPT09IHByb2R1Y3RJZCksIGZhbHNlKTtcclxuICAgICAgICBpZiAoIWV4aXN0ICYmIHRoaXMuY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHMuaW5jbHVkZXMocHJvZHVjdElkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzID0gdGhpcy5jdXN0b21lcldpc2hsaXN0UHJvZHVjdElkcy5maWx0ZXIoaWQgPT4gaWQgIT09IHByb2R1Y3RJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyB3aXNobGlzdCBhbmQgYWRkIGEgcHJvZHVjdCB0byBpdC5cclxuICAgICAqIC0gQWxzbyB1cGRhdGUgYGN1c3RvbWVyV2lzaGxpc3RzYCBhbmQgYGN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFdpc2hsaXN0IG5hbWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNQdWJsaWMgSXMgd2lzaGxpc3QgcHVibGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIFByb2R1Y3QgSURcclxuICAgICAqIEBzZWUgY3VzdG9tZXJXaXNobGlzdHNcclxuICAgICAqIEBzZWUgY3VzdG9tZXJXaXNobGlzdFByb2R1Y3RJZHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHtcclxuICAgICAqICAgZW50aXR5SWQ6IG51bWJlcixcclxuICAgICAqICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICBpdGVtczogeyBlbnRpdHlJZDogbnVtYmVyLCBwcm9kdWN0RW50aXR5SWQ6IG51bWJlciB9W11cclxuICAgICAqIH0+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjcmVhdGVXaXNobGlzdChuYW1lLCBpc1B1YmxpYyA9IGZhbHNlLCBwcm9kdWN0SWQpIHtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRuYW1lOiBTdHJpbmchXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpc1B1YmxpYzogQm9vbGVhbiFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW1zOiBbV2lzaGxpc3RJdGVtSW5wdXQhXVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNobGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVXaXNobGlzdChpbnB1dDogeyBuYW1lOiAkbmFtZSwgaXNQdWJsaWM6ICRpc1B1YmxpYywgaXRlbXM6ICRpdGVtcyB9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyhmaXJzdDogNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNQdWJsaWMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHByb2R1Y3RJZCA/IFt7IHByb2R1Y3RFbnRpdHlJZDogcHJvZHVjdElkIH1dIDogW10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lzaGxpc3QgPSB7XHJcbiAgICAgICAgICAgIC4uLnJlc3AuZGF0YS53aXNobGlzdC5jcmVhdGVXaXNobGlzdC5yZXN1bHQsXHJcbiAgICAgICAgICAgIGl0ZW1zOiByZXNwLmRhdGEud2lzaGxpc3QuY3JlYXRlV2lzaGxpc3QucmVzdWx0Lml0ZW1zLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jdXN0b21lcldpc2hsaXN0cy5wdXNoKHdpc2hsaXN0KTtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyV2lzaGxpc3RQcm9kdWN0SWRzLnB1c2gocHJvZHVjdElkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdpc2hsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGUgYWxsIGN1c3RvbWVyJ3Mgd2lzaGxpc3RzIHRvIHRoZSBkcm9wZG93biBmb3IgcHJvZHVjdCBjYXJkcy5cclxuICAgICAqIEFsc28gdXBkYXRlIHRoZSBzdGF0ZSBvZiB3aXNobGlzdCBidXR0b25zIGluIHRoZSBkcm9wZG93biB0byBkZXRlcm1pbmUgd2hpY2ggd2lzaGxpc3RzIGNvbnRhaW4gdGhlIHByb2R1Y3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRkcm9wZG93blRvZ2dsZSBEcm9wZG93biB0b2dnbGUgYnV0dG9uIChhZGQgdG8gd2lzaGxpc3QgaWNvbilcclxuICAgICAqL1xyXG4gICAgcG9wdWxhdGVDdXN0b21lcldpc2hsaXN0RHJvcGRvd24oJGRyb3Bkb3duVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25JZCA9ICRkcm9wZG93blRvZ2dsZS5kYXRhKCdkcm9wZG93bicpO1xyXG4gICAgICAgIGNvbnN0ICRkcm9wZG93biA9ICQoYCMke2Ryb3Bkb3duSWR9YCk7XHJcbiAgICAgICAgY29uc3QgJGRlZmF1bHQgPSAkZHJvcGRvd24uZmluZCgnW2RhdGEtd2lzaGxpc3QtYWRkLXRvLWRlZmF1bHRdJyk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkZHJvcGRvd25Ub2dnbGUuY2xvc2VzdCgnW2RhdGEtd2lzaGxpc3QtYWRkXScpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICRmb3JtLmF0dHIoJ2FjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICRmb3JtLmRhdGEoJ3dpc2hsaXN0QWRkJyk7XHJcblxyXG4gICAgICAgIC8vIHBvcHVsYXRlIGRyb3Bkb3duIHdpc2hsaXN0c1xyXG4gICAgICAgIGlmICgkZGVmYXVsdC5sZW5ndGggPiAwICYmIHRoaXMuY3VzdG9tZXJXaXNobGlzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyV2lzaGxpc3RzLmZvckVhY2god2lzaGxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLmRyb3Bkb3duSXRlbVRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB3aXNobGlzdC5lbnRpdHlJZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aXNobGlzdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB3aXNobGlzdC5pdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICRkZWZhdWx0LmJlZm9yZShodG1sKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRkZWZhdWx0LnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRkZWZhdWx0Lm9mZignY2xpY2snLCB0aGlzLm9uQ2xpY2tBZGRUb1dpc2hsaXN0KS5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tBZGRUb1dpc2hsaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0ICRidXR0b25zID0gJGRyb3Bkb3duLmZpbmQoJ1tkYXRhLXdpc2hsaXN0LWlkXScpO1xyXG5cclxuICAgICAgICAkYnV0dG9ucy5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGJ0biA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCB3aXNobGlzdElkID0gJGJ0bi5kYXRhKCd3aXNobGlzdElkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpc2hsaXN0ID0gdGhpcy5jdXN0b21lcldpc2hsaXN0cy5maW5kKHcgPT4gdy5lbnRpdHlJZCA9PT0gd2lzaGxpc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gd2lzaGxpc3Q/Lml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLnByb2R1Y3RFbnRpdHlJZCA9PT0gcHJvZHVjdElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgJChlbCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRidXR0b25zLm9mZignY2xpY2snLCB0aGlzLm9uQ2xpY2tBZGRUb1dpc2hsaXN0KS5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tBZGRUb1dpc2hsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duIHRvIHByZXZlbnQgaGlkZGVuIGJ5IHBhcmVudCBlbGVtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGRyb3Bkb3duIERyb3Bkb3duIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IFRhcmdldCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZURyb3Bkb3duUG9zaXRpb24oJGRyb3Bkb3duLCAkdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9ICR0YXJnZXRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFsaWduID0gJGRyb3Bkb3duLmRhdGEoJ2Ryb3Bkb3duQWxpZ24nKSB8fCAnbGVmdCc7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wICsgcmVjdC5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5yb3VuZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCArIHJlY3Qud2lkdGgpKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSB0aGUgZHJvcGRvd24gdG8gdGhlIGJvZHkgdG8gcHJldmVudCBoaWRkZW4gYnkgcGFyZW50IGVsZW1lbnRzXHJcbiAgICAgICAgaWYgKCEkZHJvcGRvd24ucGFyZW50KCkuaXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGRyb3Bkb3duLmNsb3Nlc3QoJ1tkYXRhLXdpc2hsaXN0LWFkZF0nKVswXTtcclxuICAgICAgICAgICAgJGRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAuZGF0YSgnZm9ybUVsZW1lbnQnLCBmb3JtKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkZHJvcGRvd24uY3NzKHtcclxuICAgICAgICAgICAgdG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBhbGlnbiA9PT0gJ2xlZnQnID8gbGVmdCA6ICcnLFxyXG4gICAgICAgICAgICByaWdodDogYWxpZ24gPT09ICdyaWdodCcgPyByaWdodCA6ICcnLFxyXG4gICAgICAgICAgICB3aWR0aDogJycsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAnJyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBhZGQgdG8gd2lzaGxpc3QgYnV0dG9uIGNsaWNrIGV2ZW50IGluIHRoZSBkcm9wZG93biB3aGVuIGN1c3RvbWVyIGlzIGxvZ2dlZCBpbi5cclxuICAgICAqIC0gQWRkIG9yIHJlbW92ZSBwcm9kdWN0IGZyb20gd2lzaGxpc3QuXHJcbiAgICAgKiAtIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGJ1dHRvbiBpbiB0aGUgZHJvcGRvd24uXHJcbiAgICAgKiAtIFNob3cgbm90aWZpY2F0aW9uIG1lc3NhZ2UgYWZ0ZXIgYWRkZWQgb3IgZGVsZXRlZCBwcm9kdWN0IGZyb20gd2lzaGxpc3QuXHJcbiAgICAgKi9cclxuICAgIG9uQ2xpY2tBZGRUb1dpc2hsaXN0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuZ2V0Rm9ybSgkYnV0dG9uKTtcclxuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJGZvcm0uZmluZCgnW2RhdGEtd2lzaGxpc3QtYWRkLWN1c3RvbWVyXScpO1xyXG4gICAgICAgIGNvbnN0IHdpc2hsaXN0SWQgPSAkYnV0dG9uLmRhdGEoJ3dpc2hsaXN0SWQnKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkZm9ybS5kYXRhKCd3aXNobGlzdEFkZCcpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAkZm9ybS5kYXRhKCdwcm9kdWN0TmFtZScpO1xyXG5cclxuICAgICAgICBpZiAoJGJ1dHRvbi5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXN0b21lcldpc2hsaXN0SXRlbSh3aXNobGlzdElkLCBwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJ1dHRvbi5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlLWFjdGl2ZSB0aGUgd2lzaGxpc3QgaWNvbiBpZiBub3QgZm91bmQgaW4gYW55IHdpc2hsaXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXN0b21lcldpc2hsaXN0UHJvZHVjdElkcy5pbmNsdWRlcyhwcm9kdWN0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uaW5mbyh0aGlzLnR4dERlbGV0ZWRJdGVtV2lzaGxpc3QucmVwbGFjZSgne25hbWV9JywgbmFtZSksIHRoaXMuaW5mb0ljb25UZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5lcnJvcih0aGlzLmdlbmVyaWNFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEN1c3RvbWVyV2lzaGxpc3RJdGVtcyh3aXNobGlzdElkLCBbcHJvZHVjdElkXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkYnV0dG9uLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uaW5mbyh0aGlzLnR4dEFkZGVkSXRlbVdpc2hsaXN0LnJlcGxhY2UoJ3tuYW1lfScsIG5hbWUpLCB0aGlzLmluZm9JY29uVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uZXJyb3IodGhpcy5nZW5lcmljRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5DcmVhdGluZ1dpc2hsaXN0TW9kYWwocHJvZHVjdElkLCBwcm9kdWN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMubW9kYWwub3Blbk1vZGFsKCQoJyNjcmVhdGluZ1dpc2hsaXN0TW9kYWxDb250ZW50JykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHModGhpcy5tb2RhbC4kbW9kYWwpO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsLiRtb2RhbC5maW5kKCdmb3JtJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9ICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcmUgPSAkZm9ybS5maW5kKCdpbnB1dFtuYW1lPVwicHVibGljd2lzaGxpc3RcIl0nKS5wcm9wKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdpc2hsaXN0KG5hbWUsIHNoYXJlLCBwcm9kdWN0SWQpLnRoZW4oKHdpc2hsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmluZm8odGhpcy50eHRBZGRlZEl0ZW1XaXNobGlzdC5yZXBsYWNlKCd7bmFtZX0nLCBwcm9kdWN0TmFtZSksIHRoaXMuaW5mb0ljb25UZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBuZXcgd2lzaGxpc3QgdG8gdGhlIGRyb3Bkb3duIG9mIGFsbCBwcm9kdWN0IGNhcmRzIGFuZCBwcm9kdWN0IHZpZXdcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXdpc2hsaXN0LWRyb3Bkb3duXScpLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRkcm9wZG93biA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtMiA9IHRoaXMuZ2V0Rm9ybSgkZHJvcGRvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRmb3JtMi5hdHRyKCdhY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZGVmYXVsdCA9ICRkcm9wZG93bi5maW5kKCdbZGF0YS13aXNobGlzdC1hZGQtdG8tZGVmYXVsdF0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBlbmQgdGhlIG5ldyB3aXNobGlzdCBmb3IgZHJvcGRvd25zIGluaXRpYWxpemVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRkZWZhdWx0Lmxlbmd0aCA+IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChtdXN0YWNoZS5yZW5kZXIodGhpcy5kcm9wZG93bkl0ZW1UZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aXNobGlzdC5lbnRpdHlJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogd2lzaGxpc3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHdpc2hsaXN0Lml0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB9KSkuaW5zZXJ0QmVmb3JlKCRkcm9wZG93bi5jaGlsZHJlbigpLmxhc3QoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIHdpc2hsaXN0IG1vZGFsIGRpc3BsYXkgYWxsIHdpc2hsaXN0IHByb2R1Y3RzLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBvcGVuQW5vbnltb3VzV2lzaGxpc3RQcm9kdWN0c01vZGFsKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHtcclxuICAgICAgICAgICAgbW9kYWxFeHRyYUNsYXNzOiAnZXlldmFfX3dpc2hsaXN0LW1vZGFsJyxcclxuICAgICAgICAgICAgbW9kYWxUaXRsZTogdGhpcy50eHRXaXNobGlzdFZpZXdIZWFkaW5nLnJlcGxhY2UoJ3tuYW1lfScsICcnKSxcclxuICAgICAgICAgICAgY2xvc2VPbkJhY2tncm91bmRDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VPbkVzYzogdHJ1ZSxcclxuICAgICAgICAgICAgc3RhY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1vZGFsLm9wZW5Nb2RhbCgnJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgaGlkZVByaWNlRnJvbUd1ZXN0cyxcclxuICAgICAgICAgICAgdHh0RW1wdHlXaXNobGlzdCxcclxuICAgICAgICAgICAgdHh0TG9hZE1vcmUsXHJcbiAgICAgICAgICAgIHR4dENvbGxhcHNlLFxyXG4gICAgICAgIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHJlc3RyaWN0VG9Mb2dpbiA9ICFjdXN0b21lcklkICYmIGhpZGVQcmljZUZyb21HdWVzdHM7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IHRoaXMuZ2V0QW5vbnltb3VzUHJvZHVjdHMoKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnkoe1xyXG4gICAgICAgICAgICAuLi5jb250ZXh0LFxyXG4gICAgICAgICAgICByZXN0cmljdFRvTG9naW4sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gMTI7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gMTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVIdG1sID0gYXN5bmMgKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbSA9IChwYWdlIC0gMSkgKiBsaW1pdDtcclxuICAgICAgICAgICAgY29uc3QgdG8gPSBmcm9tICsgbGltaXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcXVlcnkubG9hZChwcm9kdWN0SWRzLnNsaWNlKGZyb20sIHRvKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RDYXJkcyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IG11c3RhY2hlLnJlbmRlcihwcm9kdWN0Q2FyZFRlbXBsYXRlLCBwcm9kdWN0KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5hbm9ueW1vdXNXaXNobGlzdFByb2R1Y3RzVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDYXJkcyxcclxuICAgICAgICAgICAgICAgIHR4dEVtcHR5V2lzaGxpc3QsXHJcbiAgICAgICAgICAgICAgICB0eHRMb2FkTW9yZSxcclxuICAgICAgICAgICAgICAgIHR4dENvbGxhcHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChhd2FpdCBnZW5lcmF0ZUh0bWwoY3VycmVudFBhZ2UpKTtcclxuICAgICAgICBtb2RhbC4kbW9kYWwuZmluZCgnLnByb2R1Y3RHcmlkJykuY2hpbGRyZW4oKS5hdHRyKCdkYXRhLXBhZ2UnLCBjdXJyZW50UGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2lzaGxpc3RCdXR0b25zKG1vZGFsLiRtb2RhbCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRtb3JlQnRuID0gbW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLW1vcmVdJykuaGlkZSgpO1xyXG4gICAgICAgIGNvbnN0ICRsZXNzQnRuID0gbW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLWxlc3NdJykuaGlkZSgpO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdElkcy5sZW5ndGggPiBsaW1pdCkgJG1vcmVCdG4uc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIG1vcmUgcHJvZHVjdHMgd2hlbiBjbGljayBvbiB0aGUgXCJMb2FkIG1vcmVcIiBidXR0b25cclxuICAgICAgICBtb2RhbC4kbW9kYWwuZmluZCgnW2RhdGEtbW9yZV0nKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlICs9IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBzaG93IHByb2R1Y3RzIG9uIHRoZSBjdXJyZW50IHBhZ2UgaWYgYWxyZWFkeSBsb2FkZWRcclxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gbW9kYWwuJG1vZGFsLmZpbmQoJy5wcm9kdWN0R3JpZCcpLmNoaWxkcmVuKCkuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkuZGF0YSgncGFnZScpID09PSBjdXJyZW50UGFnZSkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gbG9hZCBtb3JlIHByb2R1Y3RzIGlmIG5vdCBsb2FkZWRcclxuICAgICAgICAgICAgaWYgKCRwcm9kdWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICRtb3JlQnRuLmFkZENsYXNzKCdfbG9hZGluZycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IGdlbmVyYXRlSHRtbChjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbmV3UHJvZHVjdHMgPSAkKGh0bWwpLmZpbmQoJy5wcm9kdWN0R3JpZCcpLmNoaWxkcmVuKCkuYXR0cignZGF0YS1wYWdlJywgY3VycmVudFBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vZGFsLiRtb2RhbC5maW5kKCcucHJvZHVjdEdyaWQnKS5hcHBlbmQoJG5ld1Byb2R1Y3RzKTtcclxuICAgICAgICAgICAgICAgICRtb3JlQnRuLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVXaXNobGlzdEJ1dHRvbnMobW9kYWwuJG1vZGFsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGxlc3NCdG4uc2hvdygpO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdElkcy5sZW5ndGggPD0gY3VycmVudFBhZ2UgKiBsaW1pdCkgJG1vcmVCdG4uaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjb2xsYXBzZSBwcm9kdWN0cyB3aGVuIGNsaWNrIG9uIHRoZSBcIkNvbGxhcHNlXCIgYnV0dG9uXHJcbiAgICAgICAgbW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLWxlc3NdJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgIG1vZGFsLiRtb2RhbC5maW5kKCcucHJvZHVjdEdyaWQnKS5jaGlsZHJlbigpLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLmRhdGEoJ3BhZ2UnKSA+IDEpLmhpZGUoKTtcclxuICAgICAgICAgICAgJG1vcmVCdG4uc2hvdygpO1xyXG4gICAgICAgICAgICAkbGVzc0J0bi5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIHRoZSB3aXNobGlzdCBwcm9kdWN0cyBtb2RhbCB3aGVuIGFueSBvdGhlciBtb2RhbCBpcyBvcGVuZWQgKHF1aWNrIHZpZXcsIGV0Yy4pXHJcbiAgICAgICAgLy8gJCgnI21vZGFsJykub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBpZiAobW9kYWwuJG1vZGFsKSBtb2RhbC5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFdpc2hMaXN0IGNsYXNzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxyXG4gKiBAcmV0dXJucyB7V2lzaExpc3R9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0V2lzaExpc3QoY29udGV4dCkge1xyXG4gICAgaWYgKCF3aXNobGlzdEluc3RhbmNlKSB7XHJcbiAgICAgICAgd2lzaGxpc3RJbnN0YW5jZSA9IG5ldyBXaXNoTGlzdChjb250ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aXNobGlzdEluc3RhbmNlO1xyXG59XHJcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XHJcblxyXG4vKipcclxuICogQ2FzdHMgYHZhbHVlYCBhcyBhbiBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDQuNC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBhcnJheS5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy5jYXN0QXJyYXkoMSk7XHJcbiAqIC8vID0+IFsxXVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSh7ICdhJzogMSB9KTtcclxuICogLy8gPT4gW3sgJ2EnOiAxIH1dXHJcbiAqXHJcbiAqIF8uY2FzdEFycmF5KCdhYmMnKTtcclxuICogLy8gPT4gWydhYmMnXVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheShudWxsKTtcclxuICogLy8gPT4gW251bGxdXHJcbiAqXHJcbiAqIF8uY2FzdEFycmF5KHVuZGVmaW5lZCk7XHJcbiAqIC8vID0+IFt1bmRlZmluZWRdXHJcbiAqXHJcbiAqIF8uY2FzdEFycmF5KCk7XHJcbiAqIC8vID0+IFtdXHJcbiAqXHJcbiAqIHZhciBhcnJheSA9IFsxLCAyLCAzXTtcclxuICogY29uc29sZS5sb2coXy5jYXN0QXJyYXkoYXJyYXkpID09PSBhcnJheSk7XHJcbiAqIC8vID0+IHRydWVcclxuICovXHJcbmZ1bmN0aW9uIGNhc3RBcnJheSgpIHtcclxuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdO1xyXG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjYXN0QXJyYXk7XHJcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XHJcblxyXG4vKipcclxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcclxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcclxuICB2YXIgaW5kZXggPSAtMSxcclxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcblxyXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xyXG4iLCIvKipcclxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxyXG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cclxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cclxuICovXHJcbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcclxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxyXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcblxyXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAtMTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xyXG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxyXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcclxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcclxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcclxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxyXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcclxuXHJcbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xyXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xyXG4gIHZhciBpbmRleCA9IC0xLFxyXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXHJcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcclxuICAgICAgaXNDb21tb24gPSB0cnVlLFxyXG4gICAgICByZXN1bHQgPSBbXSxcclxuICAgICAgc2VlbiA9IHJlc3VsdDtcclxuXHJcbiAgaWYgKGNvbXBhcmF0b3IpIHtcclxuICAgIGlzQ29tbW9uID0gZmFsc2U7XHJcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xyXG4gIH1cclxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xyXG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XHJcbiAgICBpZiAoc2V0KSB7XHJcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XHJcbiAgICB9XHJcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xyXG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcclxuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XHJcbiAgfVxyXG4gIG91dGVyOlxyXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXHJcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xyXG5cclxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xyXG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xyXG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XHJcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xyXG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XHJcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XHJcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XHJcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcclxuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcclxuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcclxuXHJcbi8qKlxyXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxyXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xyXG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcclxuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSAyLjMuMFxyXG4gKiBAY2F0ZWdvcnkgVXRpbFxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XHJcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cclxuICovXHJcbmZ1bmN0aW9uIG5vb3AoKSB7XHJcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xyXG4iLCIvKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgNC4xMy4wXHJcbiAqIEBjYXRlZ29yeSBVdGlsXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XHJcbiAqIC8vID0+IFtbXSwgW11dXHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xyXG4iXSwibmFtZXMiOlsiJCIsInV0aWxzIiwibW9kYWxGYWN0b3J5IiwiZGVmYXVsdE1vZGFsIiwiTW9kYWxFdmVudHMiLCJzaG93QWxlcnRNb2RhbCIsIm9wZW5DYXJ0UHJldmlldyIsInNoYWtlIiwiJGVsIiwic2V0dGluZ3MiLCJpbnRlcnZhbCIsImRpc3RhbmNlIiwidGltZXMiLCJjb21wbGV0ZSIsImNzcyIsIml0ZXIiLCJhbmltYXRlIiwibGVmdCIsIm9uTWluaVByZXZpZXdNb2RhbE9wZW4iLCJhZGRDbGFzcyIsIm9uTWluaVByZXZpZXdNb2RhbENsb3NlIiwicmVtb3ZlQ2xhc3MiLCJhdXRvQ2xvc2VUaW1lciIsIndpbmRvdyIsImNsZWFySW50ZXJ2YWwiLCJhcHBseU1vZGFsQXV0b0Nsb3NlIiwibW9kYWwiLCIkYXV0b0Nsb3NlRWwiLCIkbW9kYWwiLCJmaW5kIiwibGVuZ3RoIiwic2VjIiwiZGF0YSIsIiRjb3VudCIsImh0bWwiLCJzZXRJbnRlcnZhbCIsImNsb3NlIiwiZ2V0VVJMUGFyYW0iLCJuYW1lIiwidXJsIiwicmVzdWx0cyIsIlJlZ0V4cCIsImV4ZWMiLCJnZXRDYXJ0Q29udGVudCIsImNhcnRJdGVtSGFzaCIsIm9uQ29tcGxldGUiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJzdWdnZXN0IiwiY29uZmlnIiwiY2FydCIsInN1Z2dlc3Rpb25zIiwibGltaXQiLCJhcGkiLCJnZXRDb250ZW50IiwidXBkYXRlQ2FydENvbnRlbnQiLCJlcnIiLCJyZXNwb25zZSIsInVwZGF0ZUNvbnRlbnQiLCIkYm9keSIsIiRjYXJ0UXVhbnRpdHkiLCIkY29udGVudCIsIiRjYXJ0Q291bnRlciIsInF1YW50aXR5IiwidHJpZ2dlciIsImlzUnVubmluZ0luSWZyYW1lIiwic2VsZiIsInRvcCIsImUiLCJyZWRpcmVjdFRvIiwiaWZyYW1lU2RrIiwibG9jYXRpb24iLCJjb250ZXh0IiwiYWRkX3RvX2NhcnRfcG9wdXAiLCJvZmYiLCJvcGVuIiwib25Nb2RhbE9wZW4iLCJvbk1vZGFsQ2xvc2UiLCJiaW5kIiwib24iLCJldmVudCIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwicHJldmVudERlZmF1bHQiLCJwcm9kdWN0SWQiLCJjdXJyZW50VGFyZ2V0IiwiaHJlZiIsImZvcm1EYXRhIiwiYXBwZW5kIiwiJHBhcmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJxdHkiLCJ2YWwiLCJwYXJzZUludCIsImlzIiwiYWpheEFkZFRvQ2FydEVudGVyUXR5IiwiaXRlbUFkZCIsImVycm9yTWVzc2FnZSIsImVycm9yIiwidG1wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWxlcnQiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsInJlZGlyZWN0X2NhcnQiLCJjYXJ0X2l0ZW0iLCJjYXJ0X3VybCIsInVybHMiLCJkZWZNb2RhbCIsImlkIiwic2l6ZSIsImhhc2giLCJNdXN0YWNoZSIsIlNhbGVDb3VudGRvd24iLCJwYXJzZUNvdW50ZG93bkRhdGUiLCJDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwiLCJDYXJkIiwiX3JlZiIsIiRzY29wZSIsIiRhdHRyaWJ1dGVzQ29udGFpbmVyIiwicHJvZHVjdFZpZXdGaWxlIiwiYXR0cmlidXRlc1RlbXBsYXRlIiwiJGNvdW50ZG93biIsImNvdW50ZG93bkN1c3RvbUZpZWxkIiwidGVtcGxhdGVDdXN0b21UYWdzIiwiYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yIiwiJGNhcmRJbWFnZSIsIiRjYXJkUHJpY2VDb250YWluZXIiLCJpbWFnZVNpemUiLCJ6b29tU2l6ZSIsInByb2R1Y3RTaXplIiwidGh1bWJTaXplIiwiaW5wdXRGaW5kZXJGdW5jIiwic3dhdGNoZXNMaW1pdCIsImltYWdlUmVwbGFjZXJGdW5jIiwiaW5jbHVkZU9wdGlvbnMiLCJkaXNwbGF5U3R5bGVzIiwiZGlzcGxheUluU3RvY2tPbmx5IiwiYXV0b1NlbGVjdE9wdGlvblZhbHVlcyIsIl9yZWYkYXV0b0luaXQiLCJhdXRvSW5pdCIsImdyYXBoUUxOb2RlIiwiZ3JhcGhRTFRva2VuIiwic2hvd1N3YXRjaGVzIiwic2hvdWxkVXBkYXRlTWluTWF4UXR5IiwidmFyaWFudEltYWdlVXJsVGVtcGxhdGUiLCJhcnJheUF0dHJpYnV0ZVNlbGVjdCIsInNob3dDb3VudGRvd24iLCJzaG93R2FsbGVyeSIsInNob3dIb3ZlclZpZGVvIiwiaW1hZ2UzNjBDdXN0b21GaWVsZCIsImhvdmVyVmlkZW9DdXN0b21GaWVsZCIsImNhcmRJbWFnZUNvbnRhaW5lclNlbGVjdG9yIiwic2hvd1ByaWNlQ2FsbCIsInR4dFZpZGVvc0xhYmVsIiwidHh0SW1hZ2VzMzYwTGFiZWwiLCJ0eHRJbWFnZXNMYWJlbCIsImluaXQiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJ1cGRhdGVDYXJkSW1hZ2UiLCJyZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMiLCJidWlsZFByb2R1Y3RPcHRpb25zIiwicmVxdWVzdFByb2R1Y3RPcHRpb25zIiwiaW5pdENvdW50ZG93biIsImluaXRHYWxsZXJ5IiwiaW5pdEhvdmVyVmlkZW8iLCJ1cGRhdGVDYXJkUHJpY2VNZXNzIiwidXBkYXRlTWluTWF4UXR5IiwiX3RoaXMkZ3JhcGhRTE5vZGUiLCJtaW5QdXJjaGFzZVF1YW50aXR5IiwibWF4UHVyY2hhc2VRdWFudGl0eSIsIiRpbnB1dCIsIiRib0lucHV0IiwiTnVtYmVyIiwiYXR0ciIsIl90aGlzIiwiYWpheCIsIm1ldGhvZCIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwIiwiYXR0cmlidXRlc0RhdGEiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwiaW5zdG9jayIsIl90aGlzMiIsIl90aGlzMyIsImF0dHJpYnV0ZXMiLCJwcm9kdWN0T3B0aW9ucyIsImVkZ2VzIiwicmVkdWNlIiwiX29wdGlvbnMiLCJfcmVmMiIsIm9wdGlvbk5vZGUiLCJub2RlIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJkaXNwbGF5TmFtZSIsInRvTG9jYWxlVXBwZXJDYXNlIiwiZGlzcGxheVN0eWxlIiwidmFsdWVzIiwiX3ZhbHVlcyIsIl9yZWYzIiwidmFsdWVOb2RlIiwiaW5kZXhPZiIsImVudGl0eUlkIiwiaW1hZ2VVcmwiLCJoZXhDb2xvcnMiLCJsYWJlbCIsInB1c2giLCJjb250ZW50IiwibWFwIiwiY29sb3IiLCJqb2luIiwidHlwZSIsImF0dHJpYnV0ZUlkIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiZWFjaCIsImkiLCJlbCIsIiRzd2F0Y2hlcyIsInN3YXRjaGVzIiwiX2kiLCJsYWJlbEVsIiwiJGxhYmVsIiwicmVwbGFjZSIsInJlbmRlciIsIiRmb3JtIiwiaGlkZSIsImZvckVhY2giLCJfcmVmNCIsImRlZmF1bHRWYWx1ZSIsIl9kZWZhdWx0VmFsdWUiLCJfcmVmNSIsImlzRGVmYXVsdCIsIl9yZWY2IiwiY2hlY2tlZEJ5RGVmYXVsdCIsIiRjYXJkT3B0aW9uIiwidXBkYXRlQXR0cmlidXRlU2VsZWN0IiwiJGZvcm0yIiwicHJvcCIsIiRhIiwidmFsdWUiLCJyZXF1ZXN0QXR0cmlidXRlc0NoYW5nZSIsIm1vcmVFbCIsIiRtb3JlIiwiJGxpc3QiLCIkbGVzcyIsIiRpdGVtcyIsIiRoaWRkZW5JdGVtcyIsImZpbHRlciIsImoiLCJ0eHRNb3JlIiwidGV4dCIsInNob3ciLCJfdGhpczQiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJnZXQiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwiX3Jlc3AkZGF0YSIsImltYWdlIiwicHJpY2UiLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCJ1cGRhdGVQcmljZVZpZXciLCJhdmFpbGFiaWxpdHlWMiIsIm1lc3NhZ2UiLCJtZXNzUHVyY2hhc2UiLCJ1cmxUZW1wbGF0ZSIsImltZyIsImFycmF5U2VsZWN0IiwiY2FyZE9wdGlvbiIsIml0ZW1TZWxlY3QiLCJfaXRlbVNlbGVjdCRub2RlJHZhbHUiLCJpZFNlbGVjdCIsImlkVmFsdWUiLCJpbmRleCIsIml0ZW0iLCJpZEl0ZW0iLCJ2YWx1ZUl0ZW0iLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJrZXkiLCJGaWxlIiwiY29uc29sZSIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ3aXRoX3RheCIsImZvcm1hdHRlZCIsIndpdGhvdXRfdGF4IiwicnJwX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwic2F2ZWQiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4IiwiX3RoaXMkZ3JhcGhRTE5vZGUkY3VzIiwiX3RoaXM1Iiwic3RyRW5kRGF0ZSIsImN1c3RvbUZpZWxkcyIsIl9yZWY3IiwiZGF0ZSIsImFkZCIsIl90aGlzJGdyYXBoUUxOb2RlJHZpZCIsIl90aGlzJGdyYXBoUUxOb2RlJGN1czIiLCJfdGhpczYiLCJoYXNWaWRlbyIsInZpZGVvcyIsImhhczM2MCIsIl9yZWY4IiwiJHZpZGVvQnRuIiwiJDM2MEJ0biIsImNhcmRJbWFnZUdhbGxlcnlNb2RhbCIsIm9wZW5Nb2RhbCIsImZpcnN0VmlkZW8iLCJmaXJzdDM2MCIsIl90aGlzJGdyYXBoUUxOb2RlJGN1czMiLCJfdGhpczciLCJob3ZlclZpZGVvIiwiX3JlZjkiLCIkY2FyZEltYWdlQ29udGFpbmVyIiwiZmlyc3QiLCIkdmlkZW8iLCJhcHBlbmRUbyIsInZpZGVvRWwiLCJwbGF5Iiwid2FybiIsInBhdXNlIiwicGF1c2VkIiwiaW50ZXJhY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiYyIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInN0ckVxdWFsIiwic3RyMSIsInN0cjIiLCJ0b0xvd2VyQ2FzZSIsIlByb2R1Y3RTd2F0Y2hlcyIsIl90ZW1wIiwiX3JlZiRzaG93U3dhdGNoZXMiLCJfcmVmJHNob3VsZFVwZGF0ZU1pbk0iLCJfcmVmJGNhcmRTZWxlY3RvciIsImNhcmRTZWxlY3RvciIsIl9yZWYkcHJvZHVjdElkU2VsZWN0byIsInByb2R1Y3RJZFNlbGVjdG9yIiwiX3JlZiRmaW5kUHJvZHVjdElkQnlJIiwiZmluZFByb2R1Y3RJZEJ5SW1nIiwiX3JlZiRzd2F0Y2hlc0NvbnRhaW5lIiwic3dhdGNoZXNDb250YWluZXJTZWxlY3RvciIsIl9yZWYkY2FyZEltYWdlU2VsZWN0byIsImNhcmRJbWFnZVNlbGVjdG9yIiwiX3JlZiRjYXJkSW1hZ2VDb250YWluIiwiX3JlZiRjYXJkVGV4dFByaWNlU2VsIiwiY2FyZFRleHRQcmljZVNlbGVjdG9yIiwiX3JlZiRhZGRUb0NhcnRGb3JtU2VsIiwiX3JlZiRwcm9kdWN0Vmlld0ZpbGUiLCJfcmVmJGF0dHJpYnV0ZXNUZW1wbGEiLCJfcmVmJGNvdW50ZG93blNlbGVjdG8iLCJjb3VudGRvd25TZWxlY3RvciIsIl9yZWYkY291bnRkb3duQ3VzdG9tRiIsIl9yZWYkdGVtcGxhdGVDdXN0b21UYSIsIl9yZWYkaW1hZ2VTaXplIiwiX3JlZiR6b29tU2l6ZSIsIl9yZWYkcHJvZHVjdFNpemUiLCJfcmVmJHRodW1iU2l6ZSIsIl9yZWYkaW5wdXRGaW5kZXJGdW5jIiwiX3JlZiRzd2F0Y2hlc0xpbWl0IiwiX3JlZiRpbWFnZVJlcGxhY2VyRnVuIiwiX3JlZiRpbmNsdWRlT3B0aW9ucyIsIl9yZWYkZGlzcGxheVN0eWxlcyIsIl9yZWYkZGlzcGxheUluU3RvY2tPbiIsIl9yZWYkYXV0b1NlbGVjdE9wdGlvbiIsIl9yZWYkZ3JhcGhRTFRva2VuIiwiX3JlZiRlbmFibGVWYXJpYW50SW1hIiwiZW5hYmxlVmFyaWFudEltYWdlcyIsIl9yZWYkc2hvd0NvdW50ZG93biIsIl9yZWYkc2hvd0dhbGxlcnkiLCJfcmVmJHNob3dIb3ZlclZpZGVvIiwiX3JlZiRpbWFnZTM2MEN1c3RvbUZpIiwiX3JlZiRob3ZlclZpZGVvQ3VzdG9tIiwiX3JlZiRzaG93UHJpY2VDYWxsIiwidHh0U2FsZUNvdW50ZG93bkpTT04iLCJfcmVmJHR4dFZpZGVvc0xhYmVsIiwiX3JlZiR0eHRJbWFnZXMzNjBMYWJlIiwiX3JlZiR0eHRJbWFnZXNMYWJlbCIsInMiLCJ0cmltIiwiY29uZmlndXJlIiwiYmluZEV2ZW50cyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25PYnNlcnZlciIsIl9kZWJvdW5jZSIsIm9uV2luZG93U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInVuYmluZEV2ZW50cyIsImNhcmRzIiwibm90Iiwic3JjIiwibWF0Y2giLCJoYXNQcmljZUNhbGwiLCJfdGhpczIkY29uZmlnIiwiY2FyZCIsImlkcyIsIkFycmF5IiwiZnJvbSIsIlNldCIsImZldGNoR3JhcGhRTFByb2R1Y3RzIiwiX2NhbGxlZSIsInZhcmlhbnRJbWFnZXMiLCJfdCIsIl9jb250ZXh0IiwiZmV0Y2hHcmFwaFFMVmFyaWFudEltYWdlcyIsImNyZWF0ZUdyYXBoUUxQYXJhbXNGb3JWYXJpYW50SW1hZ2VzIiwiZWRnZSIsIl92YXJpYW50SW1hZ2VzJGZpbmQiLCJfdmFyaWFudEltYWdlcyRmaW5kMiIsImltYWdlVXJsVGVtcGxhdGUiLCJhcnJheUF0dHJpYnV0ZUlkU2VsZWN0IiwiX3giLCJfZmV0Y2hHcmFwaFFMUHJvZHVjdHMiLCJfY2FsbGVlMiIsIl9pZHMiLCJfY29udGV4dDIiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImVudGl0eUlkcyIsIkF1dGhvcml6YXRpb24iLCJjb25jYXQiLCJzaXRlIiwicHJvZHVjdHMiLCJfeDIiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJmaWx0ZXJzIiwiZ3FsUGFyYW1zIiwib3B0aW9uVmFsdWVJZHMiLCJfb3B0aW9uTm9kZSR2YWx1ZXMiLCJpc0FycmF5Iiwib3B0aW9uRW50aXR5SWQiLCJ2YWx1ZUVudGl0eUlkIiwiX2ZldGNoR3JhcGhRTFZhcmlhbnRJbWFnZXMiLCJfY2FsbGVlMyIsIl9sb29wIiwicHJvZHVjdEltYWdlcyIsIl9jb250ZXh0NCIsIl9ncWxQYXJhbXMiLCJfY29udGV4dDMiLCJfcmVmMCIsIl9yZWYxIiwiYWNjIiwiX3JlZjEwIiwiX09iamVjdCRhc3NpZ24iLCJhc3NpZ24iLCJfcmVmMTEiLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJwcm9kdWN0IiwiX3Byb2R1Y3QkdmFyaWFudHMkZWRnIiwiX3Byb2R1Y3QkdmFyaWFudHMkZWRnMiIsIl9wcm9kdWN0JHZhcmlhbnRzJGVkZzMiLCJ2YXJpYW50SWQiLCJ2YXJpYW50cyIsImRlZmF1bHRJbWFnZSIsIl94MyIsInNpbmdsZXRvbiIsImNvbXBhcmVMaXN0VG1wbCIsImNvbXBhcmVMaXN0SXRlbVRtcGwiLCJDb21wYXJlUHJvZHVjdHMiLCJhbmltYXRpb25UaW1lIiwibG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSIsImNvbXBhcmUiLCJjb21wYXJlQWRkb25MYW5nX2NvbXBhcmUiLCJjbGVhcl9hbGwiLCJjb21wYXJlQWRkb25MYW5nX2NsZWFyX2FsbCIsInJlbmRlckl0ZW1zIiwicmVuZGVySXRlbSIsImJlZm9yZSIsIiRwcm9kdWN0TGlzdCIsIiRjb21wYXJlQnV0dG9uIiwidXBkYXRlQ29tcGFyZVVybCIsImxvYWRTdGF0ZVRvZ2dsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZSIsInNhdmVUb2dnbGVUb1Nlc3Npb25TdG9yYWdlIiwic3RhdGUiLCJzZXRJdGVtIiwibG9jYWxTdG9yYWdlIiwicGFyc2UiLCJzYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSIsImFkZFByb2R1Y3QiLCJhbHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlUHJvZHVjdCIsInRvZ2dsZUNsYXNzIiwiY2xlYXJBbGxQcm9kdWN0cyIsImZhZGVJbiIsImZhZGVPdXQiLCJwYXRoIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiYWpheEFkZFRvQ2FydCIsImluaXRXaXNoTGlzdCIsImluaXRSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbiIsImluaXRDYXJ0U3VnZ2VzdGVkUHJvZHVjdHMiLCJpbml0Q2FydERyYXdlciIsImluaXRRdWlja1NlYXJjaCIsImluaXRRdWlja1ZpZXciLCJzaGlwcGluZ0NvdW50ZG93biIsImluaXRQcm9kdWN0Q2FyZHMiLCJjYXJkX3Nob3dfc3dhdGNoZXMiLCJzaG93X2NhcnRfYWN0aW9uIiwiY2FyZF9zaG93X3F0eSIsImNhcmRfc2hvd19jb3VudGRvd24iLCJjYXJkX3Nob3dfZ2FsbGVyeSIsImNhcmRfc2hvd192aWRlbyIsImNhcmRfc2hvd192YXJpYW50SW1nIiwiY2FyZF9zaG93X3ByaWNlQ2FsbCIsInByb2R1Y3RnYWxsZXJ5X3NpemUiLCJjYXJkX3N3YXRjaF9saW1pdCIsImNhcmRfc3dhdGNoX25hbWUiLCJzcGxpdCIsImluaXRTaGlwcGluZ0NvdW50ZG93biIsInNoaXBwaW5nX2NvdW50ZG93biIsInN0b3JlVFoiLCJzaGlwcGluZ190eiIsImNvdW50ZG93blZhbHVlcyIsInBhcmNlbCIsIkxUTCIsImRlZmF1bHRDb3VudGRvd25UaW1lIiwiaWdub3JlUHJvZHVjdFZpZXdlZEV2ZW50IiwibXVzdGFjaGUiLCJpbnN0YW5jZSIsIk5vdGlmaWNhdGlvbiIsIml0ZW1UZW1wbGF0ZSIsImNsb3NlVGVtcGxhdGUiLCIkbm90aWZpY2F0aW9ucyIsImhpZGVUaW1lb3V0IiwiaW5mbyIsImljb24iLCJ0aW1lb3V0IiwiY2xhc3NOYW1lIiwiY2xlYXJUaW1lb3V0IiwiJGl0ZW0iLCJjbG9zZUZuYyIsInVwZGF0ZU5vdGlmaWNhdGlvbnMiLCJ0aW1lciIsIk1vZGFsIiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwibWVkaXVtIiwiUXVpY2tTZWFyY2giLCJfaW5zdGFuY2UiLCIkdGVtcGxhdGUiLCJxdWlja1NlYXJjaFRlbXBsYXRlIiwibW9kYWxUaXRsZSIsIm92ZXJsYXlFeHRyYUNsYXNzIiwibW9kYWxFeHRyYUNsYXNzIiwiY2xvc2VPbkVzYyIsInN0YWNrYWJsZSIsImdldEluc3RhbmNlIiwiJGhlYWRlciIsInN0b3BQcm9wYWdhdGlvbiIsIm1hdGNoZXMiLCJfJGhlYWRlciQiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImhlYWRlclRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZvY3VzIiwiYmluZE1vZGFsRXZlbnRzIiwiY2xvc2VNb2RhbCIsIiR0YXJnZXQiLCJzZWFyY2hRdWVyeSIsInNlYXJjaFVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRvU2VhcmNoRGVib3VuY2UiLCJkb1NlYXJjaCIsIiRxdWlja1NlYXJjaFJlc3VsdHMiLCIkcXVpY2tTZWFyY2hSZXN1bHRzQ3VycmVudCIsIiRub1Jlc3VsdHNNZXNzYWdlIiwicm9sZSIsIiRxdWlja1NlYXJjaEFyaWFNZXNzYWdlIiwicHJlZGVmaW5lZFRleHQiLCJpdGVtc0ZvdW5kQ291bnQiLCJQcm9kdWN0RGV0YWlscyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInF1aWNrVmlld0Nvcm5lcnN0b25lIiwiZ2V0QnlJZCIsIiRjb250ZXh0IiwiZm91bmRhdGlvbiIsImRyb3Bkb3duIiwiYWN0aXZlX2NsYXNzIiwib25lIiwiY2xvc2VkIiwibG9hZGVkIiwiJHByb2R1Y3RWaWV3Iiwibm90aWZpY2F0aW9uIiwiZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMiLCJQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnkiLCJwcm9kdWN0Q2FyZFRlbXBsYXRlIiwid2lzaGxpc3RJbnN0YW5jZSIsIldpc2hMaXN0IiwiY3VzdG9tZXJXaXNobGlzdHMiLCJjdXN0b21lcldpc2hsaXN0UHJvZHVjdElkcyIsImRyb3Bkb3duSXRlbVRlbXBsYXRlIiwiaW5mb0ljb25UZW1wbGF0ZSIsImFub255bW91c1dpc2hsaXN0UHJvZHVjdHNUZW1wbGF0ZSIsImN1c3RvbWVySWQiLCJ0eHRBZGRlZEl0ZW1XaXNobGlzdCIsInR4dERlbGV0ZWRJdGVtV2lzaGxpc3QiLCJ0eHRFbXB0eVdpc2hsaXN0IiwidHh0V2lzaGxpc3RWaWV3SGVhZGluZyIsInR4dExvYWRNb3JlIiwidHh0Q29sbGFwc2UiLCJnZW5lcmljRXJyb3IiLCJvbkNsaWNrQWRkVG9XaXNobGlzdCIsImluaXRDdXN0b21lcldpc2hsaXN0cyIsImluaXRBbm9ueW1vdXNXaXNobGlzdHMiLCJfaW5pdEN1c3RvbWVyV2lzaGxpc3RzIiwiZmV0Y2hDdXN0b21lcldpc2hsaXN0cyIsInVwZGF0ZUN1c3RvbWVyV2lzaGxpc3RGcm9tQW5vbnltb3VzIiwidXBkYXRlV2lzaGxpc3RCdXR0b25zIiwiZ2V0QW5vbnltb3VzUHJvZHVjdHMiLCJCb29sZWFuIiwic2F2ZUFub255bW91c1Byb2R1Y3RzIiwicHJvZHVjdElkcyIsImNsZWFyQW5vbnltb3VzUHJvZHVjdHMiLCJyZW1vdmVJdGVtIiwiZ2V0Rm9ybSIsIiRzYW1lQnRucyIsImhhc0NsYXNzIiwicmVtb3ZlQW5vbnltb3VzUHJvZHVjdCIsImFkZEFub255bW91c1Byb2R1Y3QiLCJwb3B1bGF0ZUN1c3RvbWVyV2lzaGxpc3REcm9wZG93biIsIl9ldmVudCIsIiRkcm9wZG93biIsInVwZGF0ZURyb3Bkb3duUG9zaXRpb24iLCJwcm9kdWN0TmFtZSIsIm9wZW5DcmVhdGluZ1dpc2hsaXN0TW9kYWwiLCJvcGVuQW5vbnltb3VzV2lzaGxpc3RQcm9kdWN0c01vZGFsIiwiZm9ybSIsInNwbGljZSIsIiRhbGxCdG5zIiwiJGJ0biIsIl9mZXRjaEN1c3RvbWVyV2lzaGxpc3RzIiwiZmV0Y2hXaXNobGlzdEl0ZW1zIiwid2lzaGxpc3RJZHMiLCJhZnRlckl0ZW1DdXJzb3IiLCJjdXJzb3IiLCJjdXN0b21lciIsIndpc2hsaXN0cyIsIml0ZW1zIiwiaXRlbU5vZGUiLCJlbmRJdGVtQ3Vyc29yIiwicGFnZUluZm8iLCJoYXNOZXh0UGFnZSIsImVuZEN1cnNvciIsIndpc2hsaXN0IiwiX3dpc2hsaXN0JGl0ZW1zIiwid2lzaGxpc3QyIiwiX3dpc2hsaXN0MiRmaW5kIiwibmV4dEVuZEl0ZW1DdXJzb3IiLCJwcm9kdWN0RW50aXR5SWQiLCJfdXBkYXRlQ3VzdG9tZXJXaXNobGlzdEZyb21Bbm9ueW1vdXMiLCJfY2FsbGVlNCIsIl90aGlzJGN1c3RvbWVyV2lzaGxpcyIsIm5ld1Byb2R1Y3RJZHMiLCJfY29udGV4dDUiLCJhZGRDdXN0b21lcldpc2hsaXN0SXRlbXMiLCJfYWRkQ3VzdG9tZXJXaXNobGlzdEl0ZW1zIiwiX2NhbGxlZTUiLCJ3aXNobGlzdElkIiwiX3dpc2hsaXN0SWQiLCJfd2lzaGxpc3QiLCJfY29udGV4dDYiLCJjcmVhdGVXaXNobGlzdCIsImFkZFdpc2hsaXN0SXRlbXMiLCJyZXN1bHQiLCJleGlzdCIsIl94NCIsImFkZFByb2R1Y3RUb1dpc2hsaXN0IiwiX2FkZFByb2R1Y3RUb1dpc2hsaXN0IiwiX2NhbGxlZTYiLCJfY29udGV4dDciLCJfeDUiLCJfeDYiLCJkZWxldGVDdXN0b21lcldpc2hsaXN0SXRlbSIsIl9kZWxldGVDdXN0b21lcldpc2hsaXN0SXRlbSIsIl9jYWxsZWU3IiwiaXRlbUVudGl0eUlkcyIsIl9jb250ZXh0OCIsIl9mb3VuZCIsIl94NyIsIl94OCIsIl9jcmVhdGVXaXNobGlzdCIsIl9jYWxsZWU4IiwiaXNQdWJsaWMiLCJfY29udGV4dDkiLCJfeDkiLCJfeDAiLCJfeDEiLCIkZHJvcGRvd25Ub2dnbGUiLCJkcm9wZG93bklkIiwiJGRlZmF1bHQiLCJjb3VudCIsIiRidXR0b25zIiwiZm91bmQiLCJyZWN0IiwiYWxpZ24iLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsIk1hdGgiLCJyb3VuZCIsImhlaWdodCIsInJpZ2h0IiwiY2xpZW50V2lkdGgiLCJ3aWR0aCIsInBhcmVudCIsIm1heFdpZHRoIiwiJGJ1dHRvbiIsIiR0b2dnbGUiLCJzaGFyZSIsImluc2VydEJlZm9yZSIsImNoaWxkcmVuIiwibGFzdCIsIl9vcGVuQW5vbnltb3VzV2lzaGxpc3RQcm9kdWN0c01vZGFsIiwiX2NhbGxlZTEiLCJfdGhpczgiLCJoaWRlUHJpY2VGcm9tR3Vlc3RzIiwicmVzdHJpY3RUb0xvZ2luIiwiY3VycmVudFBhZ2UiLCJnZW5lcmF0ZUh0bWwiLCIkbW9yZUJ0biIsIiRsZXNzQnRuIiwiX2NvbnRleHQxMCIsImNsb3NlT25CYWNrZ3JvdW5kQ2xpY2siLCJfY2FsbGVlOSIsInBhZ2UiLCJ0byIsInByb2R1Y3RDYXJkcyIsIl9jb250ZXh0MCIsImxvYWQiLCJfeDEwIiwiX2NhbGxlZTAiLCIkcHJvZHVjdHMiLCIkbmV3UHJvZHVjdHMiLCJfY29udGV4dDEiLCJyZW1vdmVBdHRyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=