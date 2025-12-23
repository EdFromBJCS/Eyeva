<<<<<<< HEAD
/*! For license information please see theme-bundle.chunk.product.js.LICENSE.txt */
<<<<<<< HEAD
<<<<<<< HEAD
(self.webpackChunkEyeva=self.webpackChunkEyeva||[]).push([[964],{3656(t){t.exports=function(){return!1}},5861(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},11331(t,e,i){var o=i(72552),r=i(28879),n=i(40346),s=Function.prototype,a=Object.prototype,c=s.toString,h=a.hasOwnProperty,u=c.call(Object);t.exports=function(t){if(!n(t)||"[object Object]"!=o(t))return!1;var e=r(t);if(null===e)return!0;var i=h.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&c.call(i)==u}},19003(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(95660),r=i(33270);function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var s=function(t){function e(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,n(i,o),e.prototype.onReady=function(){t.prototype.onReady.call(this);var e=Number(r(".productView").find('input[name="product_id"]').val());r("body").trigger("productviewed",[e])},e}(o.default)},24456(t,e,i){var o,r;!function(){"use strict";o=[i(33270)],void 0===(r=function(t){!function(t){var e,i,o,r,n,s,a={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:t.noop,beforeHide:t.noop,onShow:t.noop,onHide:t.noop,onMove:t.noop};function c(e,i){this.$target=t(e),this.opts=t.extend({},a,i,this.$target.data()),void 0===this.isOpen&&this._init()}c.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=t('<div class="easyzoom-flyout" />'),this.$notice=t('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":t.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":t.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":t.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(t){t.preventDefault()})},c.prototype.show=function(t,n){var s=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),function(){!s.isMouseOver&&n||s.show(t)});this.$target.append(this.$flyout);var a=this.$target.outerWidth(),c=this.$target.outerHeight(),h=this.$flyout.width(),u=this.$flyout.height(),l=this.$zoom.width(),d=this.$zoom.height();e=Math.ceil(l-h),i=Math.ceil(d-u),o=(e=e<0?0:e)/a,r=(i=i<0?0:i)/c,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},c.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},c.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},c.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},c.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},c.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},c.prototype._loadImage=function(e,i){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=t(o).on("error",t.proxy(this._onError,this)).on("load",i,t.proxy(this._onLoad,this)),o.style.position="absolute",o.src=e},c.prototype._move=function(t){s=0===t.type.indexOf("touch")?(a=t.touches||t.originalEvent.touches,n=a[0].pageX,a[0].pageY):(n=t.pageX||n,t.pageY||s);var a=this.$target.offset();t=n-a.left,a=s-a.top,t=Math.ceil(t*o),a=Math.ceil(a*r),t<0||a<0||e<t||i<a?this.hide():(a*=-1,t*=-1,"transform"in document.body.style?this.$zoom.css({transform:"translate("+t+"px, "+a+"px)"}):this.$zoom.css({top:a,left:t}),this.opts.onMove.call(this,a,t))},c.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},c.prototype.swap=function(e,i,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:e,srcset:t.isArray(o)?o.join():o}),this.$link.attr(this.opts.linkAttribute,i)},c.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},t.fn.easyZoom=function(e){return this.each(function(){var i=t.data(this,"easyZoom");i?void 0===i.isOpen&&i._init():t.data(this,"easyZoom",new c(this,e))})}}(t)}.apply(e,o))||(t.exports=r)}()},28879(t,e,i){var o=i(74335)(Object.getPrototypeOf,Object);t.exports=o},37167(t){t.exports=function(){return!1}},55527(t){t.exports=function(){return!1}},62193(t,e,i){var o=i(88984),r=i(5861),n=i(72428),s=i(56449),a=i(64894),c=i(3656),h=i(55527),u=i(37167),l=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(a(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||u(t)||n(t)))return!t.length;var e=r(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(h(t))return!o(t).length;for(var i in t)if(l.call(t,i))return!1;return!0}},74335(t){t.exports=function(t,e){return function(i){return t(e(i))}}},88984(t,e,i){var o=i(74335)(Object.keys,Object);t.exports=o},95660(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>g});var o=i(91238),r=i(41582),n=i(65117),s=i(61579),a=function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent},c=i(96609),h=i(33270);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var l=function(t){function e(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,u(i,o),e.prototype.setupReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&0===this.$reviewsContent.parents(".quickView").length&&this.expandReviews()},e}(function(){function t(t){var e=t.$reviewForm,i=t.$context;e&&e.length&&(this.validator=(0,r.A)({submit:e.find('input[type="submit"]'),tap:c.dN})),this.$context=i,this.$reviewTabLink=h(".productView-reviewTabLink",this.$context),this.$reviewsContent=h("#product-reviews",this.$context),this.$reviewsContentList=h("#productReviews-content",this.$reviewsContent),this.$collapsible=h("[data-collapsible]",this.$reviewsContent),this.$context?(0,n.Ay)("[data-collapsible]",{$context:i}):this.initLinkBind(),this.injectPaginationLink(),this.setupReviews()}var e=t.prototype;return e.initLinkBind=function(){var t=this,e=h("#productReview_link");e.attr("href",""+e.attr("href")+window.location.search+"#product-reviews").on("click",function(){return t.expandReviews()})},e.setupReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&0===this.$reviewsContent.parents(".quickView").length?this.expandReviews():this.$collapsible.trigger(n.gQ.click)},e.expandReviews=function(){this.$reviewTabLink.trigger("click"),this.$reviewsContentList.hasClass("is-open")||this.$collapsible.trigger(n.gQ.click)},e.injectPaginationLink=function(){var t=h(".pagination-item--next .pagination-link",this.$reviewsContent),e=h(".pagination-item--previous .pagination-link",this.$reviewsContent);t.length&&t.attr("href",t.attr("href")+" #product-reviews"),e.length&&e.attr("href",e.attr("href")+" #product-reviews")},e.registerValidation=function(t){return this.context=t,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:a(this.context.reviewRating)},{selector:'[name="revtitle"]',validate:"presence",errorMessage:a(this.context.reviewSubject)},{selector:'[name="revfromname"]',validate:"presence",errorMessage:a(this.context.reviewName)},{selector:'[name="revtext"]',validate:"presence",errorMessage:a(this.context.reviewComment)},{selector:'.writeReview-form [name="email"]',validate:function(t,e){t(s.A.email(e))},errorMessage:this.context.reviewEmail}]),this.validator},e.validate=function(){return this.validator.performCheck()},t}()),d=i(99074),p=i(33270),v=function(){function t(t){this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var e=t.prototype;return e.selectNewVideo=function(t){t.preventDefault();var e=p(t.currentTarget);this.currentVideo={id:e.data("videoId"),$selectedThumb:e},this.setMainVideo(),this.setActiveThumb()},e.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},e.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},e.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},t}(),f=i(87838),y=i(33270);function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}var g=function(t){function e(e){var i;return(i=t.call(this,e)||this).url=window.location.href,i.$reviewLink=y('[data-reveal-id="modal-review-form"]'),i.$bulkPricingLink=y('[data-reveal-id="modal-bulk-pricing"]'),i.reviewModal=(0,f.Ay)("#modal-review-form")[0],i}var i,o;o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,w(i,o);var r=e.prototype;return r.onReady=function(){var t,e,i=this;y(document).on("close.fndtn.reveal",function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)}),(0,n.Ay)(),this.productDetails=new d.A(y(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),p("[data-"+(e="video-gallery")+"]").each(function(t,i){var o=p(i);o.data(e)instanceof v||o.data(e,new v(o))}),this.bulkPricingHandler();var o=(0,c.J6)(".writeReview-form");if(0!==o.length){var r=new l({$reviewForm:o});y("body").on("click",'[data-reveal-id="modal-review-form"]',function(){t=r.registerValidation(i.context),i.ariaDescribeReviewInputs(o)}),o.on("submit",function(){return!!t&&(t.performCheck(),t.areAll("valid"))}),this.productReviewHandler()}},r.ariaDescribeReviewInputs=function(t){t.find("[data-input]").each(function(t,e){var i=y(e),o=i.attr("name")+"-msg";i.siblings("span").attr("id",o),i.attr("aria-describedby",o)})},r.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},r.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},e}(o.A)}}]);
=======
(self.webpackChunkEyeva=self.webpackChunkEyeva||[]).push([[964],{3656(t){t.exports=function(){return!1}},5861(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},11331(t,e,i){var o=i(72552),n=i(28879),r=i(40346),a=Function.prototype,s=Object.prototype,c=a.toString,h=s.hasOwnProperty,u=c.call(Object);t.exports=function(t){if(!r(t)||"[object Object]"!=o(t))return!1;var e=n(t);if(null===e)return!0;var i=h.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&c.call(i)==u}},19003(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>a});var o=i(95660),n=i(33270);function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var a=function(t){function e(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,r(i,o),e.prototype.onReady=function(){t.prototype.onReady.call(this);var e=Number(n(".productView").find('input[name="product_id"]').val());n("body").trigger("productviewed",[e])},e}(o.default)},24456(t,e,i){var o,n;!function(){"use strict";o=[i(33270)],void 0===(n=function(t){!function(t){var e,i,o,n,r,a,s={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:t.noop,beforeHide:t.noop,onShow:t.noop,onHide:t.noop,onMove:t.noop};function c(e,i){this.$target=t(e),this.opts=t.extend({},s,i,this.$target.data()),void 0===this.isOpen&&this._init()}c.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=t('<div class="easyzoom-flyout" />'),this.$notice=t('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":t.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":t.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":t.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(t){t.preventDefault()})},c.prototype.show=function(t,r){var a=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),function(){!a.isMouseOver&&r||a.show(t)});this.$target.append(this.$flyout);var s=this.$target.outerWidth(),c=this.$target.outerHeight(),h=this.$flyout.width(),u=this.$flyout.height(),l=this.$zoom.width(),d=this.$zoom.height();e=Math.ceil(l-h),i=Math.ceil(d-u),o=(e=e<0?0:e)/s,n=(i=i<0?0:i)/c,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},c.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},c.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},c.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},c.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},c.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},c.prototype._loadImage=function(e,i){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=t(o).on("error",t.proxy(this._onError,this)).on("load",i,t.proxy(this._onLoad,this)),o.style.position="absolute",o.src=e},c.prototype._move=function(t){a=0===t.type.indexOf("touch")?(s=t.touches||t.originalEvent.touches,r=s[0].pageX,s[0].pageY):(r=t.pageX||r,t.pageY||a);var s=this.$target.offset();t=r-s.left,s=a-s.top,t=Math.ceil(t*o),s=Math.ceil(s*n),t<0||s<0||e<t||i<s?this.hide():(s*=-1,t*=-1,"transform"in document.body.style?this.$zoom.css({transform:"translate("+t+"px, "+s+"px)"}):this.$zoom.css({top:s,left:t}),this.opts.onMove.call(this,s,t))},c.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},c.prototype.swap=function(e,i,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:e,srcset:t.isArray(o)?o.join():o}),this.$link.attr(this.opts.linkAttribute,i)},c.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},t.fn.easyZoom=function(e){return this.each(function(){var i=t.data(this,"easyZoom");i?void 0===i.isOpen&&i._init():t.data(this,"easyZoom",new c(this,e))})}}(t)}.apply(e,o))||(t.exports=n)}()},28879(t,e,i){var o=i(74335)(Object.getPrototypeOf,Object);t.exports=o},37167(t){t.exports=function(){return!1}},55527(t){t.exports=function(){return!1}},62193(t,e,i){var o=i(88984),n=i(5861),r=i(72428),a=i(56449),s=i(64894),c=i(3656),h=i(55527),u=i(37167),l=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(s(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||u(t)||r(t)))return!t.length;var e=n(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(h(t))return!o(t).length;for(var i in t)if(l.call(t,i))return!1;return!0}},74335(t){t.exports=function(t,e){return function(i){return t(e(i))}}},88984(t,e,i){var o=i(74335)(Object.keys,Object);t.exports=o},95660(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>w});var o=i(91238),n=i(41582),r=i(65117),a=i(61579),s=function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent},c=i(96609),h=i(33270);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var l=function(t){function e(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,u(i,o),e.prototype.setupReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&0===this.$reviewsContent.parents(".quickView").length&&this.expandReviews()},e}(function(){function t(t){var e=t.$reviewForm,i=t.$context;e&&e.length&&(this.validator=(0,n.A)({submit:e.find('input[type="submit"]'),tap:c.dN})),this.$context=i,this.$reviewTabLink=h(".productView-reviewTabLink",this.$context),this.$reviewsContent=h("#product-reviews",this.$context),this.$reviewsContentList=h("#productReviews-content",this.$reviewsContent),this.$collapsible=h("[data-collapsible]",this.$reviewsContent),this.$context?(0,r.Ay)("[data-collapsible]",{$context:i}):this.initLinkBind(),this.injectPaginationLink(),this.setupReviews()}var e=t.prototype;return e.initLinkBind=function(){var t=this,e=h("#productReview_link");e.attr("href",""+e.attr("href")+window.location.search+"#product-reviews").on("click",function(){return t.expandReviews()})},e.setupReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&0===this.$reviewsContent.parents(".quickView").length?this.expandReviews():this.$collapsible.trigger(r.gQ.click)},e.expandReviews=function(){this.$reviewTabLink.trigger("click"),this.$reviewsContentList.hasClass("is-open")||this.$collapsible.trigger(r.gQ.click)},e.injectPaginationLink=function(){var t=h(".pagination-item--next .pagination-link",this.$reviewsContent),e=h(".pagination-item--previous .pagination-link",this.$reviewsContent);t.length&&t.attr("href",t.attr("href")+" #product-reviews"),e.length&&e.attr("href",e.attr("href")+" #product-reviews")},e.registerValidation=function(t){return this.context=t,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:s(this.context.reviewRating)},{selector:'[name="revtitle"]',validate:"presence",errorMessage:s(this.context.reviewSubject)},{selector:'[name="revfromname"]',validate:"presence",errorMessage:s(this.context.reviewName)},{selector:'[name="revtext"]',validate:"presence",errorMessage:s(this.context.reviewComment)},{selector:'.writeReview-form [name="email"]',validate:function(t,e){t(a.A.email(e))},errorMessage:this.context.reviewEmail}]),this.validator},e.validate=function(){return this.validator.performCheck()},t}()),d=i(99074),p=i(33270),v=function(){function t(t){this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var e=t.prototype;return e.selectNewVideo=function(t){t.preventDefault();var e=p(t.currentTarget);this.currentVideo={id:e.data("videoId"),$selectedThumb:e},this.setMainVideo(),this.setActiveThumb()},e.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},e.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},e.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},t}(),f=i(87838),y=i(33270);function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}var w=function(t){function e(e){var i;return(i=t.call(this,e)||this).url=window.location.href,i.$reviewLink=y('[data-reveal-id="modal-review-form"]'),i.$bulkPricingLink=y('[data-reveal-id="modal-bulk-pricing"]'),i.reviewModal=(0,f.Ay)("#modal-review-form")[0],i}var i,o;o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,m(i,o);var n=e.prototype;return n.onReady=function(){var t,e=this;y(document).on("close.fndtn.reveal",function(){-1!==e.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)}),(0,r.Ay)(),this.productDetails=new d.A(y(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),y("body").on("click","#mobileAddToCartBtn",function(t){t.preventDefault(),y(".productView form[data-cart-item-add]").submit()});var i,o=y('.productView form[data-cart-item-add] [name="qty[]"]'),n=y('#mobileStickyBar [name="mobile-qty"]');o.length&&n.length&&(o.on("input change",function(){n.val(o.val())}),n.on("input change",function(){o.val(n.val())})),y("body").on("click","#mobileStickyBar [data-quantity-change] button",function(t){t.preventDefault();var e=y(t.currentTarget),i=y('#mobileStickyBar [name="mobile-qty"]'),n=parseInt(i.data("quantityMin"),10)||1,r=parseInt(i.data("quantityMax"),10)||999,a=parseInt(i.val(),10)||n;"inc"===e.data("action")?a=Math.min(a+1,r):a>n&&(a=Math.max(a-1,n)),i.val(a),o.val(a)}),p("[data-"+(i="video-gallery")+"]").each(function(t,e){var o=p(e);o.data(i)instanceof v||o.data(i,new v(o))}),this.bulkPricingHandler();var a=(0,c.J6)(".writeReview-form");if(0!==a.length){var s=new l({$reviewForm:a});y("body").on("click",'[data-reveal-id="modal-review-form"]',function(){t=s.registerValidation(e.context),e.ariaDescribeReviewInputs(a)}),a.on("submit",function(){return!!t&&(t.performCheck(),t.areAll("valid"))}),this.productReviewHandler()}},n.ariaDescribeReviewInputs=function(t){t.find("[data-input]").each(function(t,e){var i=y(e),o=i.attr("name")+"-msg";i.siblings("span").attr("id",o),i.attr("aria-describedby",o)})},n.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},n.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},e}(o.A)}}]);
>>>>>>> fe8fd695 (Bigcommerce/Stenicl updates)
=======
(self.webpackChunkEyeva=self.webpackChunkEyeva||[]).push([[964],{3656(t){t.exports=function(){return!1}},5861(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},11331(t,e,i){var o=i(72552),r=i(28879),n=i(40346),s=Function.prototype,a=Object.prototype,c=s.toString,h=a.hasOwnProperty,u=c.call(Object);t.exports=function(t){if(!n(t)||"[object Object]"!=o(t))return!1;var e=r(t);if(null===e)return!0;var i=h.call(e,"constructor")&&e.constructor;return"function"==typeof i&&i instanceof i&&c.call(i)==u}},19003(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>s});var o=i(95660),r=i(33270);function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var s=function(t){function e(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,n(i,o),e.prototype.onReady=function(){t.prototype.onReady.call(this);var e=Number(r(".productView").find('input[name="product_id"]').val());r("body").trigger("productviewed",[e])},e}(o.default)},24456(t,e,i){var o,r;!function(){"use strict";o=[i(33270)],void 0===(r=function(t){!function(t){var e,i,o,r,n,s,a={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:t.noop,beforeHide:t.noop,onShow:t.noop,onHide:t.noop,onMove:t.noop};function c(e,i){this.$target=t(e),this.opts=t.extend({},a,i,this.$target.data()),void 0===this.isOpen&&this._init()}c.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=t('<div class="easyzoom-flyout" />'),this.$notice=t('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":t.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":t.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":t.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(t){t.preventDefault()})},c.prototype.show=function(t,n){var s=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),function(){!s.isMouseOver&&n||s.show(t)});this.$target.append(this.$flyout);var a=this.$target.outerWidth(),c=this.$target.outerHeight(),h=this.$flyout.width(),u=this.$flyout.height(),l=this.$zoom.width(),d=this.$zoom.height();e=Math.ceil(l-h),i=Math.ceil(d-u),o=(e=e<0?0:e)/a,r=(i=i<0?0:i)/c,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},c.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},c.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},c.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},c.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},c.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},c.prototype._loadImage=function(e,i){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=t(o).on("error",t.proxy(this._onError,this)).on("load",i,t.proxy(this._onLoad,this)),o.style.position="absolute",o.src=e},c.prototype._move=function(t){s=0===t.type.indexOf("touch")?(a=t.touches||t.originalEvent.touches,n=a[0].pageX,a[0].pageY):(n=t.pageX||n,t.pageY||s);var a=this.$target.offset();t=n-a.left,a=s-a.top,t=Math.ceil(t*o),a=Math.ceil(a*r),t<0||a<0||e<t||i<a?this.hide():(a*=-1,t*=-1,"transform"in document.body.style?this.$zoom.css({transform:"translate("+t+"px, "+a+"px)"}):this.$zoom.css({top:a,left:t}),this.opts.onMove.call(this,a,t))},c.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},c.prototype.swap=function(e,i,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:e,srcset:t.isArray(o)?o.join():o}),this.$link.attr(this.opts.linkAttribute,i)},c.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},t.fn.easyZoom=function(e){return this.each(function(){var i=t.data(this,"easyZoom");i?void 0===i.isOpen&&i._init():t.data(this,"easyZoom",new c(this,e))})}}(t)}.apply(e,o))||(t.exports=r)}()},28879(t,e,i){var o=i(74335)(Object.getPrototypeOf,Object);t.exports=o},37167(t){t.exports=function(){return!1}},55527(t){t.exports=function(){return!1}},62193(t,e,i){var o=i(88984),r=i(5861),n=i(72428),s=i(56449),a=i(64894),c=i(3656),h=i(55527),u=i(37167),l=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(a(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||u(t)||n(t)))return!t.length;var e=r(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(h(t))return!o(t).length;for(var i in t)if(l.call(t,i))return!1;return!0}},74335(t){t.exports=function(t,e){return function(i){return t(e(i))}}},88984(t,e,i){var o=i(74335)(Object.keys,Object);t.exports=o},95660(t,e,i){"use strict";i.r(e),i.d(e,{default:()=>g});var o=i(91238),r=i(41582),n=i(65117),s=i(61579),a=function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent},c=i(96609),h=i(33270);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var l=function(t){function e(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,u(i,o),e.prototype.setupReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&0===this.$reviewsContent.parents(".quickView").length&&this.expandReviews()},e}(function(){function t(t){var e=t.$reviewForm,i=t.$context;e&&e.length&&(this.validator=(0,r.A)({submit:e.find('input[type="submit"]'),tap:c.dN})),this.$context=i,this.$reviewTabLink=h(".productView-reviewTabLink",this.$context),this.$reviewsContent=h("#product-reviews",this.$context),this.$reviewsContentList=h("#productReviews-content",this.$reviewsContent),this.$collapsible=h("[data-collapsible]",this.$reviewsContent),this.$context?(0,n.Ay)("[data-collapsible]",{$context:i}):this.initLinkBind(),this.injectPaginationLink(),this.setupReviews()}var e=t.prototype;return e.initLinkBind=function(){var t=this,e=h("#productReview_link");e.attr("href",""+e.attr("href")+window.location.search+"#product-reviews").on("click",function(){return t.expandReviews()})},e.setupReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")&&0===this.$reviewsContent.parents(".quickView").length?this.expandReviews():this.$collapsible.trigger(n.gQ.click)},e.expandReviews=function(){this.$reviewTabLink.trigger("click"),this.$reviewsContentList.hasClass("is-open")||this.$collapsible.trigger(n.gQ.click)},e.injectPaginationLink=function(){var t=h(".pagination-item--next .pagination-link",this.$reviewsContent),e=h(".pagination-item--previous .pagination-link",this.$reviewsContent);t.length&&t.attr("href",t.attr("href")+" #product-reviews"),e.length&&e.attr("href",e.attr("href")+" #product-reviews")},e.registerValidation=function(t){return this.context=t,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:a(this.context.reviewRating)},{selector:'[name="revtitle"]',validate:"presence",errorMessage:a(this.context.reviewSubject)},{selector:'[name="revfromname"]',validate:"presence",errorMessage:a(this.context.reviewName)},{selector:'[name="revtext"]',validate:"presence",errorMessage:a(this.context.reviewComment)},{selector:'.writeReview-form [name="email"]',validate:function(t,e){t(s.A.email(e))},errorMessage:this.context.reviewEmail}]),this.validator},e.validate=function(){return this.validator.performCheck()},t}()),d=i(99074),p=i(33270),v=function(){function t(t){this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var e=t.prototype;return e.selectNewVideo=function(t){t.preventDefault();var e=p(t.currentTarget);this.currentVideo={id:e.data("videoId"),$selectedThumb:e},this.setMainVideo(),this.setActiveThumb()},e.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},e.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},e.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},t}(),f=i(87838),y=i(33270);function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}var g=function(t){function e(e){var i;return(i=t.call(this,e)||this).url=window.location.href,i.$reviewLink=y('[data-reveal-id="modal-review-form"]'),i.$bulkPricingLink=y('[data-reveal-id="modal-bulk-pricing"]'),i.reviewModal=(0,f.Ay)("#modal-review-form")[0],i}var i,o;o=t,(i=e).prototype=Object.create(o.prototype),i.prototype.constructor=i,w(i,o);var r=e.prototype;return r.onReady=function(){var t,e,i=this;y(document).on("close.fndtn.reveal",function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)}),(0,n.Ay)(),this.productDetails=new d.A(y(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),p("[data-"+(e="video-gallery")+"]").each(function(t,i){var o=p(i);o.data(e)instanceof v||o.data(e,new v(o))}),this.bulkPricingHandler();var o=(0,c.J6)(".writeReview-form");if(0!==o.length){var r=new l({$reviewForm:o});y("body").on("click",'[data-reveal-id="modal-review-form"]',function(){t=r.registerValidation(i.context),i.ariaDescribeReviewInputs(o)}),o.on("submit",function(){return!!t&&(t.performCheck(),t.areAll("valid"))}),this.productReviewHandler()}},r.ariaDescribeReviewInputs=function(t){t.find("[data-input]").each(function(t,e){var i=y(e),o=i.attr("name")+"-msg";i.siblings("span").attr("id",o),i.attr("aria-describedby",o)})},r.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},r.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},e}(o.A)}}]);
>>>>>>> b710363b (Push from stencil to big commerce)
//# sourceMappingURL=theme-bundle.chunk.product.js.map
=======
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["product"],{

/***/ "./assets/js/papathemes/eyeva/reviews.js"
/*!***********************************************!*\
  !*** ./assets/js/papathemes/eyeva/reviews.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var _theme_product_reviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/product/reviews */ "./assets/js/theme/product/reviews.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Override the default Cornerstone Reviews class to disable collapse on page load
 */

var Reviews = /*#__PURE__*/function (_CornerstoneReviews) {
  function Reviews() {
    return _CornerstoneReviews.apply(this, arguments) || this;
  }
  _inheritsLoose(Reviews, _CornerstoneReviews);
  var _proto = Reviews.prototype;
  _proto.setupReviews = function setupReviews() {
    // We're in paginating state, reviews should be visible
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0 && this.$reviewsContent.parents('.quickView').length === 0) {
      this.expandReviews();
    }
  };
  return Reviews;
}(_theme_product_reviews__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/papathemes/product.js"
/*!*****************************************!*\
  !*** ./assets/js/papathemes/product.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _theme_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/product */ "./assets/js/theme/product.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Product = /*#__PURE__*/function (_CornerstoneProduct) {
  function Product() {
    return _CornerstoneProduct.apply(this, arguments) || this;
  }
  _inheritsLoose(Product, _CornerstoneProduct);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    _CornerstoneProduct.prototype.onReady.call(this);

    // papathemes: Track recently viewed products
    var productId = Number($('.productView').find('input[name="product_id"]').val());
    $('body').trigger('productviewed', [productId]);
  };
  return Product;
}(_theme_product__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/common/utils/safe-string.js"
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeString: () => (/* binding */ safeString)
/* harmony export */ });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ },

/***/ "./assets/js/theme/product.js"
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _papathemes_eyeva_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../papathemes/eyeva/reviews */ "./assets/js/papathemes/eyeva/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _papathemes_eyeva_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../papathemes/eyeva/product-details */ "./assets/js/papathemes/eyeva/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */

 // papathemes-eyeva edited

 // papathemes-eyeva edited



var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _papathemes_eyeva_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _papathemes_eyeva_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/product/reviews.js"
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var _default = /*#__PURE__*/function () {
  function _default(_ref) {
    var $reviewForm = _ref.$reviewForm,
      $context = _ref.$context;
    if ($reviewForm && $reviewForm.length) {
      this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
        submit: $reviewForm.find('input[type="submit"]'),
        tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.announceInputErrorMessage
      });
    }
    this.$context = $context;
    this.$reviewTabLink = $('.productView-reviewTabLink', this.$context);
    this.$reviewsContent = $('#product-reviews', this.$context);
    this.$reviewsContentList = $('#productReviews-content', this.$reviewsContent);
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    if (this.$context) {
      (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-collapsible]', {
        $context: $context
      });
    } else {
      this.initLinkBind();
    }
    this.injectPaginationLink();
    this.setupReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $productReviewLink = $('#productReview_link');
    $productReviewLink.attr('href', "" + $productReviewLink.attr('href') + window.location.search + "#product-reviews").on('click', function () {
      return _this.expandReviews();
    });
  };
  _proto.setupReviews = function setupReviews() {
    // We're in paginating state, reviews should be visible
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0 && this.$reviewsContent.parents('.quickView').length === 0) {
      this.expandReviews();
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  };
  _proto.expandReviews = function expandReviews() {
    this.$reviewTabLink.trigger('click');
    if (!this.$reviewsContentList.hasClass('is-open')) {
      this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
    }
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewSubject)
    }, {
      selector: '[name="revfromname"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewName)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ },

/***/ "./assets/js/theme/product/video-gallery.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ },

/***/ "./node_modules/easyzoom/dist/easyzoom.js"
/*!************************************************!*\
  !*** ./node_modules/easyzoom/dist/easyzoom.js ***!
  \************************************************/
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @name        easyzoom
 * @author      Matt Hinchliffe
 * @modified    Friday, December 30th, 2022
 * @version     2.6.0
 */
!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(i){"use strict";var c,d,l,p,o,s,h={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:i.noop,beforeHide:i.noop,onShow:i.noop,onHide:i.noop,onMove:i.noop};function n(t,e){this.$target=i(t),this.opts=i.extend({},h,e,this.$target.data()),void 0===this.isOpen&&this._init()}return n.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=i('<div class="easyzoom-flyout" />'),this.$notice=i('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":i.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":i.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":i.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(t){t.preventDefault()})},n.prototype.show=function(t,e){var o=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),function(){!o.isMouseOver&&e||o.show(t)});this.$target.append(this.$flyout);var i=this.$target.outerWidth(),s=this.$target.outerHeight(),h=this.$flyout.width(),n=this.$flyout.height(),a=this.$zoom.width(),r=this.$zoom.height();c=Math.ceil(a-h),d=Math.ceil(r-n),l=(c=c<0?0:c)/i,p=(d=d<0?0:d)/s,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},n.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},n.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},n.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},n.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},n.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},n.prototype._loadImage=function(t,e){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=i(o).on("error",i.proxy(this._onError,this)).on("load",e,i.proxy(this._onLoad,this)),o.style.position="absolute",o.src=t},n.prototype._move=function(t){s=0===t.type.indexOf("touch")?(e=t.touches||t.originalEvent.touches,o=e[0].pageX,e[0].pageY):(o=t.pageX||o,t.pageY||s);var e=this.$target.offset(),t=o-e.left,e=s-e.top,t=Math.ceil(t*l),e=Math.ceil(e*p);t<0||e<0||c<t||d<e?this.hide():(e=-1*e,t=-1*t,"transform"in document.body.style?this.$zoom.css({transform:"translate("+t+"px, "+e+"px)"}):this.$zoom.css({top:e,left:t}),this.opts.onMove.call(this,e,t))},n.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},n.prototype.swap=function(t,e,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:t,srcset:i.isArray(o)?o.join():o}),this.$link.attr(this.opts.linkAttribute,e)},n.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},i.fn.easyZoom=function(e){return this.each(function(){var t=i.data(this,"easyZoom");t?void 0===t.isOpen&&t._init():i.data(this,"easyZoom",new n(this,e))})},n});

/***/ },

/***/ "./node_modules/lodash/_baseKeys.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ },

/***/ "./node_modules/lodash/_getPrototype.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ },

/***/ "./node_modules/lodash/_getTag.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
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

/***/ "./node_modules/lodash/_isPrototype.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
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

/***/ "./node_modules/lodash/_overArg.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ },

/***/ "./node_modules/lodash/isBuffer.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
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

/***/ "./node_modules/lodash/isEmpty.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ },

/***/ "./node_modules/lodash/isPlainObject.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ },

/***/ "./node_modules/lodash/isTypedArray.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
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


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9yZXZpZXdzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2Vhc3l6b29tL2Rpc3QvZWFzeXpvb20uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IENvcm5lcnN0b25lIFJldmlld3MgY2xhc3MgdG8gZGlzYWJsZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAqL1xuaW1wb3J0IENvcm5lcnN0b25lUmV2aWV3cyBmcm9tICcuLi8uLi90aGVtZS9wcm9kdWN0L3Jldmlld3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZpZXdzIGV4dGVuZHMgQ29ybmVyc3RvbmVSZXZpZXdzIHtcbiAgICBzZXR1cFJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIHJldmlld3Mgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2hcbiAgICAgICAgICAgICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMFxuICAgICAgICAgICAgJiYgdGhpcy4kcmV2aWV3c0NvbnRlbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kUmV2aWV3cygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvcm5lcnN0b25lUHJvZHVjdCBmcm9tICcuLi90aGVtZS9wcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvcm5lcnN0b25lUHJvZHVjdCB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgc3VwZXIub25SZWFkeSgpO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXM6IFRyYWNrIHJlY2VudGx5IHZpZXdlZCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBOdW1iZXIoJCgnLnByb2R1Y3RWaWV3JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdwcm9kdWN0dmlld2VkJywgW3Byb2R1Y3RJZF0pO1xuICAgIH1cbn1cblxuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhcnNlcyBIVE1MIGVudGl0aWVzIGluIHN0cmluZ3NcbiAqIEBwYXJhbSBzdHI6IFN0cmluZ1xuICogQHJldHVybnMgU3RyaW5nXG4qL1xuZXhwb3J0IGNvbnN0IHNhZmVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBET01QYXJzZXIoKTtcbiAgICByZXR1cm4gZC5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJykuYm9keS50ZXh0Q29udGVudDtcbn07XG4iLCIvKlxyXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXHJcbiAqL1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL3BhcGF0aGVtZXMvZXlldmEvcmV2aWV3cyc7IC8vIHBhcGF0aGVtZXMtZXlldmEgZWRpdGVkXHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMnOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxyXG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcclxuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xyXG4gICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLWJ1bGstcHJpY2luZ1wiXScpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuXHJcbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xyXG5cclxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcclxuICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS1pbnB1dF0nKS5lYWNoKChfLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcclxuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcclxuXHJcbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncygnc3BhbicpLmF0dHIoJ2lkJywgbXNnU3BhbklkKTtcclxuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSwgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBzYWZlU3RyaW5nIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih7ICRyZXZpZXdGb3JtLCAkY29udGV4dCB9KSB7XG4gICAgICAgIGlmICgkcmV2aWV3Rm9ybSAmJiAkcmV2aWV3Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGNvbnRleHQgPSAkY29udGV4dDtcbiAgICAgICAgdGhpcy4kcmV2aWV3VGFiTGluayA9ICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJywgdGhpcy4kY29udGV4dCk7XG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycsIHRoaXMuJGNvbnRleHQpO1xuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudExpc3QgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgnW2RhdGEtY29sbGFwc2libGVdJywgeyAkY29udGV4dCB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuc2V0dXBSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RSZXZpZXdMaW5rID0gJCgnI3Byb2R1Y3RSZXZpZXdfbGluaycpO1xuICAgICAgICAkcHJvZHVjdFJldmlld0xpbmtcbiAgICAgICAgICAgIC5hdHRyKCdocmVmJywgYCR7JHByb2R1Y3RSZXZpZXdMaW5rLmF0dHIoJ2hyZWYnKX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9I3Byb2R1Y3QtcmV2aWV3c2ApXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5leHBhbmRSZXZpZXdzKCkpO1xuICAgIH1cblxuICAgIHNldHVwUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgcmV2aWV3cyBzaG91bGQgYmUgdmlzaWJsZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaFxuICAgICAgICAgICAgJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwXG4gICAgICAgICAgICAmJiB0aGlzLiRyZXZpZXdzQ29udGVudC5wYXJlbnRzKCcucXVpY2tWaWV3JykubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRSZXZpZXdzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgZXhwYW5kUmV2aWV3cygpIHtcbiAgICAgICAgdGhpcy4kcmV2aWV3VGFiTGluay50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgIGlmICghdGhpcy4kcmV2aWV3c0NvbnRlbnRMaXN0Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2ZnJvbW5hbWVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld05hbWUpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiIsIi8qIVxuICogQG5hbWUgICAgICAgIGVhc3l6b29tXG4gKiBAYXV0aG9yICAgICAgTWF0dCBIaW5jaGxpZmZlXG4gKiBAbW9kaWZpZWQgICAgRnJpZGF5LCBEZWNlbWJlciAzMHRoLCAyMDIyXG4gKiBAdmVyc2lvbiAgICAgMi42LjBcbiAqL1xuIWZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24odCl7ZSh0KX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXQuRWFzeVpvb209ZShyZXF1aXJlKFwianF1ZXJ5XCIpKTp0LkVhc3lab29tPWUodC5qUXVlcnkpfSh0aGlzLGZ1bmN0aW9uKGkpe1widXNlIHN0cmljdFwiO3ZhciBjLGQsbCxwLG8scyxoPXtsb2FkaW5nTm90aWNlOlwiTG9hZGluZyBpbWFnZVwiLGVycm9yTm90aWNlOlwiVGhlIGltYWdlIGNvdWxkIG5vdCBiZSBsb2FkZWRcIixlcnJvckR1cmF0aW9uOjI1MDAsbGlua0F0dHJpYnV0ZTpcImhyZWZcIixwcmV2ZW50Q2xpY2tzOiEwLGJlZm9yZVNob3c6aS5ub29wLGJlZm9yZUhpZGU6aS5ub29wLG9uU2hvdzppLm5vb3Asb25IaWRlOmkubm9vcCxvbk1vdmU6aS5ub29wfTtmdW5jdGlvbiBuKHQsZSl7dGhpcy4kdGFyZ2V0PWkodCksdGhpcy5vcHRzPWkuZXh0ZW5kKHt9LGgsZSx0aGlzLiR0YXJnZXQuZGF0YSgpKSx2b2lkIDA9PT10aGlzLmlzT3BlbiYmdGhpcy5faW5pdCgpfXJldHVybiBuLnByb3RvdHlwZS5faW5pdD1mdW5jdGlvbigpe3RoaXMuJGxpbms9dGhpcy4kdGFyZ2V0LmZpbmQoXCJhXCIpLHRoaXMuJGltYWdlPXRoaXMuJHRhcmdldC5maW5kKFwiaW1nXCIpLHRoaXMuJGZseW91dD1pKCc8ZGl2IGNsYXNzPVwiZWFzeXpvb20tZmx5b3V0XCIgLz4nKSx0aGlzLiRub3RpY2U9aSgnPGRpdiBjbGFzcz1cImVhc3l6b29tLW5vdGljZVwiIC8+JyksdGhpcy4kdGFyZ2V0Lm9uKHtcIm1vdXNlbW92ZS5lYXN5em9vbSB0b3VjaG1vdmUuZWFzeXpvb21cIjppLnByb3h5KHRoaXMuX29uTW92ZSx0aGlzKSxcIm1vdXNlbGVhdmUuZWFzeXpvb20gdG91Y2hlbmQuZWFzeXpvb21cIjppLnByb3h5KHRoaXMuX29uTGVhdmUsdGhpcyksXCJtb3VzZWVudGVyLmVhc3l6b29tIHRvdWNoc3RhcnQuZWFzeXpvb21cIjppLnByb3h5KHRoaXMuX29uRW50ZXIsdGhpcyl9KSx0aGlzLm9wdHMucHJldmVudENsaWNrcyYmdGhpcy4kdGFyZ2V0Lm9uKFwiY2xpY2suZWFzeXpvb21cIixmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCl9KX0sbi5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbih0LGUpe3ZhciBvPXRoaXM7aWYoITEhPT10aGlzLm9wdHMuYmVmb3JlU2hvdy5jYWxsKHRoaXMpKXtpZighdGhpcy5pc1JlYWR5KXJldHVybiB0aGlzLl9sb2FkSW1hZ2UodGhpcy4kbGluay5hdHRyKHRoaXMub3B0cy5saW5rQXR0cmlidXRlKSxmdW5jdGlvbigpeyFvLmlzTW91c2VPdmVyJiZlfHxvLnNob3codCl9KTt0aGlzLiR0YXJnZXQuYXBwZW5kKHRoaXMuJGZseW91dCk7dmFyIGk9dGhpcy4kdGFyZ2V0Lm91dGVyV2lkdGgoKSxzPXRoaXMuJHRhcmdldC5vdXRlckhlaWdodCgpLGg9dGhpcy4kZmx5b3V0LndpZHRoKCksbj10aGlzLiRmbHlvdXQuaGVpZ2h0KCksYT10aGlzLiR6b29tLndpZHRoKCkscj10aGlzLiR6b29tLmhlaWdodCgpO2M9TWF0aC5jZWlsKGEtaCksZD1NYXRoLmNlaWwoci1uKSxsPShjPWM8MD8wOmMpL2kscD0oZD1kPDA/MDpkKS9zLHRoaXMuaXNPcGVuPSEwLHRoaXMub3B0cy5vblNob3cuY2FsbCh0aGlzKSx0JiZ0aGlzLl9tb3ZlKHQpfX0sbi5wcm90b3R5cGUuX29uRW50ZXI9ZnVuY3Rpb24odCl7dmFyIGU9dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXM7dGhpcy5pc01vdXNlT3Zlcj0hMCxlJiYxIT1lLmxlbmd0aHx8KHQucHJldmVudERlZmF1bHQoKSx0aGlzLnNob3codCwhMCkpfSxuLnByb3RvdHlwZS5fb25Nb3ZlPWZ1bmN0aW9uKHQpe3RoaXMuaXNPcGVuJiYodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX21vdmUodCkpfSxuLnByb3RvdHlwZS5fb25MZWF2ZT1mdW5jdGlvbigpe3RoaXMuaXNNb3VzZU92ZXI9ITEsdGhpcy5pc09wZW4mJnRoaXMuaGlkZSgpfSxuLnByb3RvdHlwZS5fb25Mb2FkPWZ1bmN0aW9uKHQpe3QuY3VycmVudFRhcmdldC53aWR0aCYmKHRoaXMuaXNSZWFkeT0hMCx0aGlzLiRub3RpY2UuZGV0YWNoKCksdGhpcy4kZmx5b3V0Lmh0bWwodGhpcy4kem9vbSksdGhpcy4kdGFyZ2V0LnJlbW92ZUNsYXNzKFwiaXMtbG9hZGluZ1wiKS5hZGRDbGFzcyhcImlzLXJlYWR5XCIpLHQuZGF0YS5jYWxsJiZ0LmRhdGEoKSl9LG4ucHJvdG90eXBlLl9vbkVycm9yPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLiRub3RpY2UudGV4dCh0aGlzLm9wdHMuZXJyb3JOb3RpY2UpLHRoaXMuJHRhcmdldC5yZW1vdmVDbGFzcyhcImlzLWxvYWRpbmdcIikuYWRkQ2xhc3MoXCJpcy1lcnJvclwiKSx0aGlzLmRldGFjaE5vdGljZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC4kbm90aWNlLmRldGFjaCgpLHQuZGV0YWNoTm90aWNlPW51bGx9LHRoaXMub3B0cy5lcnJvckR1cmF0aW9uKX0sbi5wcm90b3R5cGUuX2xvYWRJbWFnZT1mdW5jdGlvbih0LGUpe3ZhciBvPW5ldyBJbWFnZTt0aGlzLiR0YXJnZXQuYWRkQ2xhc3MoXCJpcy1sb2FkaW5nXCIpLmFwcGVuZCh0aGlzLiRub3RpY2UudGV4dCh0aGlzLm9wdHMubG9hZGluZ05vdGljZSkpLHRoaXMuJHpvb209aShvKS5vbihcImVycm9yXCIsaS5wcm94eSh0aGlzLl9vbkVycm9yLHRoaXMpKS5vbihcImxvYWRcIixlLGkucHJveHkodGhpcy5fb25Mb2FkLHRoaXMpKSxvLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixvLnNyYz10fSxuLnByb3RvdHlwZS5fbW92ZT1mdW5jdGlvbih0KXtzPTA9PT10LnR5cGUuaW5kZXhPZihcInRvdWNoXCIpPyhlPXQudG91Y2hlc3x8dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMsbz1lWzBdLnBhZ2VYLGVbMF0ucGFnZVkpOihvPXQucGFnZVh8fG8sdC5wYWdlWXx8cyk7dmFyIGU9dGhpcy4kdGFyZ2V0Lm9mZnNldCgpLHQ9by1lLmxlZnQsZT1zLWUudG9wLHQ9TWF0aC5jZWlsKHQqbCksZT1NYXRoLmNlaWwoZSpwKTt0PDB8fGU8MHx8Yzx0fHxkPGU/dGhpcy5oaWRlKCk6KGU9LTEqZSx0PS0xKnQsXCJ0cmFuc2Zvcm1cImluIGRvY3VtZW50LmJvZHkuc3R5bGU/dGhpcy4kem9vbS5jc3Moe3RyYW5zZm9ybTpcInRyYW5zbGF0ZShcIit0K1wicHgsIFwiK2UrXCJweClcIn0pOnRoaXMuJHpvb20uY3NzKHt0b3A6ZSxsZWZ0OnR9KSx0aGlzLm9wdHMub25Nb3ZlLmNhbGwodGhpcyxlLHQpKX0sbi5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbigpe3RoaXMuaXNPcGVuJiYhMSE9PXRoaXMub3B0cy5iZWZvcmVIaWRlLmNhbGwodGhpcykmJih0aGlzLiRmbHlvdXQuZGV0YWNoKCksdGhpcy5pc09wZW49ITEsdGhpcy5vcHRzLm9uSGlkZS5jYWxsKHRoaXMpKX0sbi5wcm90b3R5cGUuc3dhcD1mdW5jdGlvbih0LGUsbyl7dGhpcy5oaWRlKCksdGhpcy5pc1JlYWR5PSExLHRoaXMuZGV0YWNoTm90aWNlJiZjbGVhclRpbWVvdXQodGhpcy5kZXRhY2hOb3RpY2UpLHRoaXMuJG5vdGljZS5wYXJlbnQoKS5sZW5ndGgmJnRoaXMuJG5vdGljZS5kZXRhY2goKSx0aGlzLiR0YXJnZXQucmVtb3ZlQ2xhc3MoXCJpcy1sb2FkaW5nIGlzLXJlYWR5IGlzLWVycm9yXCIpLHRoaXMuJGltYWdlLmF0dHIoe3NyYzp0LHNyY3NldDppLmlzQXJyYXkobyk/by5qb2luKCk6b30pLHRoaXMuJGxpbmsuYXR0cih0aGlzLm9wdHMubGlua0F0dHJpYnV0ZSxlKX0sbi5wcm90b3R5cGUudGVhcmRvd249ZnVuY3Rpb24oKXt0aGlzLmhpZGUoKSx0aGlzLiR0YXJnZXQub2ZmKFwiLmVhc3l6b29tXCIpLnJlbW92ZUNsYXNzKFwiaXMtbG9hZGluZyBpcy1yZWFkeSBpcy1lcnJvclwiKSx0aGlzLmRldGFjaE5vdGljZSYmY2xlYXJUaW1lb3V0KHRoaXMuZGV0YWNoTm90aWNlKSxkZWxldGUgdGhpcy4kbGluayxkZWxldGUgdGhpcy4kem9vbSxkZWxldGUgdGhpcy4kaW1hZ2UsZGVsZXRlIHRoaXMuJG5vdGljZSxkZWxldGUgdGhpcy4kZmx5b3V0LGRlbGV0ZSB0aGlzLmlzT3BlbixkZWxldGUgdGhpcy5pc1JlYWR5fSxpLmZuLmVhc3lab29tPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD1pLmRhdGEodGhpcyxcImVhc3lab29tXCIpO3Q/dm9pZCAwPT09dC5pc09wZW4mJnQuX2luaXQoKTppLmRhdGEodGhpcyxcImVhc3lab29tXCIsbmV3IG4odGhpcyxlKSl9KX0sbn0pOyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgb2JqZWN0LCBjb2xsZWN0aW9uLCBtYXAsIG9yIHNldC5cbiAqXG4gKiBPYmplY3RzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBubyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWRcbiAqIHByb3BlcnRpZXMuXG4gKlxuICogQXJyYXktbGlrZSB2YWx1ZXMgc3VjaCBhcyBgYXJndW1lbnRzYCBvYmplY3RzLCBhcnJheXMsIGJ1ZmZlcnMsIHN0cmluZ3MsIG9yXG4gKiBqUXVlcnktbGlrZSBjb2xsZWN0aW9ucyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgbGVuZ3RoYCBvZiBgMGAuXG4gKiBTaW1pbGFybHksIG1hcHMgYW5kIHNldHMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYHNpemVgIG9mIGAwYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRW1wdHkobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KHRydWUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eSgxKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0VtcHR5KHsgJ2EnOiAxIH0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICAgIChpc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlLnNwbGljZSA9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIGlzQnVmZmVyKHZhbHVlKSB8fCBpc1R5cGVkQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICByZXR1cm4gIXZhbHVlLmxlbmd0aDtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgaWYgKHRhZyA9PSBtYXBUYWcgfHwgdGFnID09IHNldFRhZykge1xuICAgIHJldHVybiAhdmFsdWUuc2l6ZTtcbiAgfVxuICBpZiAoaXNQcm90b3R5cGUodmFsdWUpKSB7XG4gICAgcmV0dXJuICFiYXNlS2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRW1wdHk7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iXSwibmFtZXMiOlsiQ29ybmVyc3RvbmVSZXZpZXdzIiwiUmV2aWV3cyIsIl9Db3JuZXJzdG9uZVJldmlld3MiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0dXBSZXZpZXdzIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiaW5kZXhPZiIsIiRyZXZpZXdzQ29udGVudCIsInBhcmVudHMiLCJsZW5ndGgiLCJleHBhbmRSZXZpZXdzIiwiZGVmYXVsdCIsIkNvcm5lcnN0b25lUHJvZHVjdCIsIlByb2R1Y3QiLCJfQ29ybmVyc3RvbmVQcm9kdWN0Iiwib25SZWFkeSIsImNhbGwiLCJwcm9kdWN0SWQiLCJOdW1iZXIiLCIkIiwiZmluZCIsInZhbCIsInRyaWdnZXIiLCJzYWZlU3RyaW5nIiwic3RyIiwiZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJ0ZXh0Q29udGVudCIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJtb2RhbEZhY3RvcnkiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJ1cmwiLCJocmVmIiwiJHJldmlld0xpbmsiLCIkYnVsa1ByaWNpbmdMaW5rIiwicmV2aWV3TW9kYWwiLCJfdGhpczIiLCJkb2N1bWVudCIsIm9uIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiJHJldmlld0Zvcm0iLCJyZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsIiRmb3JtIiwiZWFjaCIsIl8iLCJpbnB1dCIsIiRpbnB1dCIsIm1zZ1NwYW5JZCIsImF0dHIiLCJzaWJsaW5ncyIsIm5vZCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiZm9ybXMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiX2RlZmF1bHQiLCJfcmVmIiwiJGNvbnRleHQiLCJzdWJtaXQiLCJ0YXAiLCIkcmV2aWV3VGFiTGluayIsIiRyZXZpZXdzQ29udGVudExpc3QiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsIiRwcm9kdWN0UmV2aWV3TGluayIsInNlYXJjaCIsImNsaWNrIiwiaGFzQ2xhc3MiLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld05hbWUiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJyZXN1bHQiLCJlbWFpbCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJkYXRhIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImluZGV4IiwiZWxlbWVudCIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> da12f91d (Bigcommerce Import with PapaThemes widgets)
