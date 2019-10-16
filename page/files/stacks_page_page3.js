//
// jarallax js
//

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(o,e,t){"use strict";(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o.exports=t}).call(e,t(2))},function(e,t,o){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(e,t,o){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":i(window))&&(n=window)}e.exports=n},,,,,,,,,function(e,t,o){e.exports=o(12)},function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=l(o(1)),a=o(0),r=l(o(13));function l(e){return e&&e.__esModule?e:{default:e}}var s=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=s,this},void 0!==a.jQuery){var c=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=r.default.apply(a.window,e);return"object"!==(void 0===t?"undefined":n(t))?t:this};c.constructor=r.default.constructor;var u=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=c,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=u,this}}(0,i.default)(function(){(0,r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,$,j){"use strict";(function(e){Object.defineProperty($,"__esModule",{value:!0});var d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(i)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=a(j(1)),n=a(j(14)),i=j(0);function a(e){return e&&e.__esModule?e:{default:e}}var r=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),o=0;o<e.length;o++)if(t&&void 0!==t.style[e[o]])return e[o];return!1}(),b=void 0,v=void 0,l=void 0,s=!1,c=!1;function u(e){b=i.window.innerWidth||document.documentElement.clientWidth,v=i.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":p(e))||"load"!==e.type&&"dom-loaded"!==e.type||(s=!0)}u(),i.window.addEventListener("resize",u),i.window.addEventListener("orientationchange",u),i.window.addEventListener("load",u),(0,o.default)(function(){u({type:"dom-loaded"})});var m=[],f=!1;function y(){if(m.length){l=void 0!==i.window.pageYOffset?i.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=s||!f||f.width!==b||f.height!==v,o=c||t||!f||f.y!==l;c=s=!1,(t||o)&&(m.forEach(function(e){t&&e.onResize(),o&&e.onScroll()}),f={width:b,height:v,y:l}),(0,n.default)(y)}}var g=!!e.ResizeObserver&&new e.ResizeObserver(function(e){e&&e.length&&(0,n.default)(function(){e.forEach(function(e){e.target&&e.target.jarallax&&(s||e.target.jarallax.onResize(),c=!0)})})}),h=0,x=function(){function u(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var o=this;o.instanceID=h++,o.$item=e,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var n=o.$item.getAttribute("data-jarallax"),i=JSON.parse(n||"{}");n&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var a=o.$item.dataset||{},r={};if(Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==o.defaults[t]&&(r[t]=a[e])}),o.options=o.extend({},o.defaults,i,r,t),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach(function(e){"true"===o.options[e]?o.options[e]=!0:"false"===o.options[e]&&(o.options[e]=!1)}),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),(o.options.noAndroid||o.options.noIos)&&(console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),o.options.disableParallax||(o.options.noIos&&o.options.noAndroid?o.options.disableParallax=/iPad|iPhone|iPod|Android/:o.options.noIos?o.options.disableParallax=/iPad|iPhone|iPod/:o.options.noAndroid&&(o.options.disableParallax=/Android/))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp){var l=o.options.disableParallax;o.options.disableParallax=function(){return l.test(navigator.userAgent)}}if("function"!=typeof o.options.disableParallax&&(o.options.disableParallax=function(){return!1}),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp){var s=o.options.disableVideo;o.options.disableVideo=function(){return s.test(navigator.userAgent)}}"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=function(){return!1});var c=o.options.elementInViewport;c&&"object"===(void 0===c?"undefined":p(c))&&void 0!==c.length&&(c=d(c,1)[0]);c instanceof Element||(c=null),o.options.elementInViewport=c,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},o.initImg()&&o.canInitParallax()&&o.init()}return t(u,[{key:"css",value:function(t,o){return"string"==typeof o?i.window.getComputedStyle(t).getPropertyValue(o):(o.transform&&r&&(o[r]=o.transform),Object.keys(o).forEach(function(e){t.style[e]=o[e]}),t)}},{key:"extend",value:function(o){var n=arguments;return o=o||{},Object.keys(arguments).forEach(function(t){n[t]&&Object.keys(n[t]).forEach(function(e){o[e]=n[t][e]})}),o}},{key:"getWindowData",value:function(){return{width:b,height:v,y:l}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!e.image.src||"none"===e.image.src))}},{key:"canInitParallax",value:function(){return r&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},o={};if(!e.options.keepImg){var n=e.$item.getAttribute("style");if(n&&e.$item.setAttribute("data-jarallax-original-styles",n),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),e.image.useImgTag?o=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: "+e.options.imgSize+"; object-position: "+e.options.imgPosition+";","max-width":"none"},t,o):(e.image.$item=document.createElement("div"),e.image.src&&(o=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":'url("'+e.image.src+'")'},t,o))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position)for(var a=0,r=e.$item;null!==r&&r!==document&&0===a;){var l=e.css(r,"-webkit-transform")||e.css(r,"-moz-transform")||e.css(r,"transform");l&&"none"!==l&&(a=1,e.image.position="absolute"),r=r.parentNode}o.position=e.image.position,e.css(e.image.$item,o),e.image.$container.appendChild(e.image.$item),e.coverImage(),e.clipContainer(),e.onScroll(!0),e.options.automaticResize&&g&&g.observe(e.$item),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}},{key:"addToParallaxList",value:function(){m.push(this),1===m.length&&y()}},{key:"removeFromParallaxList",value:function(){var o=this;m.forEach(function(e,t){e.instanceID===o.instanceID&&m.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var o=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),o?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),o=t.width,n=t.height;if(!e.$clipStyles)e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);var i="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+o+"px "+n+"px 0);\n           clip: rect(0, "+o+"px, "+n+"px, 0);\n        }";e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),o=t.height,n=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=o,l=0;return i&&(a=n<0?n*Math.max(o,v):n*(o+v),1<n?r=Math.abs(a-v):n<0?r=a/n+Math.abs(a):r+=Math.abs(v-o)*(1-n),a/=2),e.parallaxScrollDistance=a,l=i?(v-r)/2:(o-r)/2,e.css(e.image.$item,{height:r+"px",marginTop:l+"px",left:"fixed"===e.image.position?t.left+"px":"0",width:t.width+"px"}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,o=t.$item.getBoundingClientRect(),n=o.top,i=o.height,a={},r=o;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=v&&r.left<=b,e||t.isElementInViewport){var l=Math.max(0,n),s=Math.max(0,i+n),c=Math.max(0,-n),u=Math.max(0,n+i-v),d=Math.max(0,i-(n+i-v)),p=Math.max(0,-n+v-i),m=1-2*(v-n)/(v+i),f=1;if(i<v?f=1-(c||u)/i:s<=v?f=s/v:d<=v&&(f=d/v),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(a.transform="translate3d(0,0,0)",a.opacity=f),"scale"===t.options.type||"scale-opacity"===t.options.type){var y=1;t.options.speed<0?y-=t.options.speed*f:y+=t.options.speed*(1-f),a.transform="scale("+y+") translate3d(0,0,0)"}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var g=t.parallaxScrollDistance*m;"absolute"===t.image.position&&(g-=n),a.transform="translate3d(0,"+g+"px,0)"}t.css(t.image.$item,a),t.options.onScroll&&t.options.onScroll.call(t,{section:o,beforeTop:l,beforeTopEnd:s,afterTop:c,beforeBottom:u,beforeBottomEnd:d,afterBottom:p,visiblePercent:f,fromViewportCenter:m})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),u}(),w=function(e){("object"===("undefined"==typeof HTMLElement?"undefined":p(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":p(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t=arguments[1],o=Array.prototype.slice.call(arguments,2),n=e.length,i=0,a=void 0;i<n;i++)if("object"===(void 0===t?"undefined":p(t))||void 0===t?e[i].jarallax||(e[i].jarallax=new x(e[i],t)):e[i].jarallax&&(a=e[i].jarallax[t].apply(e[i].jarallax,o)),void 0!==a)return a;return e};w.constructor=x,$.default=w}).call($,j(2))},function(e,t,o){"use strict";var n=o(0),i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(0,16-(t-a)),n=setTimeout(e,o);return a=t,n},a=+new Date;var r=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(n),r=r.bind(n)),(e.exports=i).cancel=r}]);
//# sourceMappingURL=jarallax.min.js.map


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.com_elixir_stacks_foundryBanner = {};
stacks.com_elixir_stacks_foundryBanner = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*
 * jQuery Easing v1.3.2 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/
(function(h){h.easing.jswing=h.easing.swing;h.extend(h.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return h.easing[h.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>
(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,
c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*
(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*--a)*Math.sin(2*(a*d-e)*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==
a)return c;if(1==(a/=d))return c+b;f||(f=.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-e)*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=.3*d*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-.5*g*Math.pow(2,10*--a)*Math.sin(2*(a*d-e)*Math.PI/f)+c:g*Math.pow(2,-10*--a)*Math.sin(2*(a*d-e)*Math.PI/f)*.5+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-h.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+.75)+c:a<2.5/2.75?b*(7.5625*
(a-=2.25/2.75)*a+.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?.5*h.easing.easeInBounce(e,2*a,0,b,d)+c:.5*h.easing.easeOutBounce(e,2*a-d,0,b,d)+.5*b+c}})})(jQuery);
return stack;})(stacks.com_elixir_stacks_foundryBanner);
stacks.com_elixir_stacks_foundryGallery = {};
stacks.com_elixir_stacks_foundryGallery = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.9.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(this,function(){"use strict";function t(t,e){var n=document.querySelectorAll(t),o={galleries:[],nodeList:n};D[t]=o,[].forEach.call(n,function(t){e&&e.filter&&(z=e.filter);var n=[];if(n="A"===t.tagName?[t]:t.getElementsByTagName("a"),0!==(n=[].filter.call(n,function(t){if(-1===t.className.indexOf(e&&e.ignoreClass))return z.test(t.href)})).length){var i=[];[].forEach.call(n,function(t,n){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,r(i,e),u(n)},a={eventHandler:o,imageElement:t};x(t,"click",o),i.push(a)}),o.galleries.push(i)}})}function e(){for(var t in D)D.hasOwnProperty(t)&&n(t)}function n(t){if(D.hasOwnProperty(t)){var e=D[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){E(t.imageElement,"click",t.eventHandler)}),X===t&&(X=[])}),delete D[t]}}function o(){if(N=B("baguetteBox-overlay"))return A=B("baguetteBox-slider"),L=B("previous-button"),S=B("next-button"),void(P=B("close-button"));(N=T("div")).setAttribute("role","dialog"),N.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(N),(A=T("div")).id="baguetteBox-slider",N.appendChild(A),(L=T("button")).setAttribute("type","button"),L.id="previous-button",L.setAttribute("aria-label","Previous"),L.innerHTML=j.svg?F:"&lt;",N.appendChild(L),(S=T("button")).setAttribute("type","button"),S.id="next-button",S.setAttribute("aria-label","Next"),S.innerHTML=j.svg?H:"&gt;",N.appendChild(S),(P=T("button")).setAttribute("type","button"),P.id="close-button",P.setAttribute("aria-label","Close"),P.innerHTML=j.svg?I:"&times;",N.appendChild(P),L.className=S.className=P.className="baguetteBox-button",a()}function i(t){switch(t.keyCode){case 37:h();break;case 39:p();break;case 27:g()}}function a(){x(N,"click",W),x(L,"click",G),x(S,"click",J),x(P,"click",K),x(A,"contextmenu",_),x(N,"touchstart",Q),x(N,"touchmove",Z),x(N,"touchend",$),x(document,"focus",tt,!0)}function l(){E(N,"click",W),E(L,"click",G),E(S,"click",J),E(P,"click",K),E(A,"contextmenu",_),E(N,"touchstart",Q),E(N,"touchmove",Z),E(N,"touchend",$),E(document,"focus",tt,!0)}function r(t,e){if(X!==t){for(X=t,s(e);A.firstChild;)A.removeChild(A.firstChild);V.length=0;for(var n,o=[],i=[],a=0;a<t.length;a++)(n=T("div")).className="full-image",n.id="baguette-img-"+a,V.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),A.appendChild(V[a]);N.setAttribute("aria-labelledby",o.join(" ")),N.setAttribute("aria-describedby",i.join(" "))}}function s(t){t||(t={});for(var e in q)Y[e]=q[e],"undefined"!=typeof t[e]&&(Y[e]=t[e]);A.style.transition=A.style.webkitTransition="fadeIn"===Y.animation?"opacity .4s ease":"slideIn"===Y.animation?"":"none","auto"===Y.buttons&&("ontouchstart"in window||1===X.length)&&(Y.buttons=!1),L.style.display=S.style.display=Y.buttons?"":"none";try{N.style.backgroundColor=Y.overlayBackgroundColor}catch(n){}}function u(t){Y.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==N.style.display&&(x(document,"keydown",i),R={count:0,startX:null,startY:null},m(M=t,function(){k(M),C(M)}),y(),N.style.display="block",Y.fullScreen&&d(),setTimeout(function(){N.className="visible",Y.bodyClass&&document.body.classList&&document.body.classList.add(Y.bodyClass),Y.afterShow&&Y.afterShow()},50),Y.onChange&&Y.onChange(M,V.length),U=document.activeElement,c())}function c(){Y.buttons?L.focus():P.focus()}function d(){N.requestFullscreen?N.requestFullscreen():N.webkitRequestFullscreen?N.webkitRequestFullscreen():N.mozRequestFullScreen&&N.mozRequestFullScreen()}function f(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function g(){Y.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==N.style.display&&(E(document,"keydown",i),N.className="",setTimeout(function(){N.style.display="none",f(),Y.bodyClass&&document.body.classList&&document.body.classList.remove(Y.bodyClass),Y.afterHide&&Y.afterHide(),U&&U.focus()},500))}function m(t,e){var n=V[t],o=X[t];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])e&&e();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],l="function"==typeof Y.captions?Y.captions.call(X,i):i.getAttribute("data-caption")||i.title,r=b(i),s=T("figure");if(s.id="baguetteBox-figure-"+t,s.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',Y.captions&&l){var u=T("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=l,s.appendChild(u)}n.appendChild(s);var c=T("img");c.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");s.removeChild(n),!Y.async&&e&&e()},c.setAttribute("src",r),c.alt=a?a.alt||"":"",Y.titleTag&&l&&(c.title=l),s.appendChild(c),Y.async&&e&&e()}}function b(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,l=0;l<i.length-1&&i[l]<a;)l++;e=n[i[l]]||e}return e}function p(){var t;return M<=V.length-2?(M++,y(),k(M),t=!0):Y.animation&&(A.className="bounce-from-right",setTimeout(function(){A.className=""},400),t=!1),Y.onChange&&Y.onChange(M,V.length),t}function h(){var t;return M>=1?(M--,y(),C(M),t=!0):Y.animation&&(A.className="bounce-from-left",setTimeout(function(){A.className=""},400),t=!1),Y.onChange&&Y.onChange(M,V.length),t}function y(){var t=100*-M+"%";"fadeIn"===Y.animation?(A.style.opacity=0,setTimeout(function(){j.transforms?A.style.transform=A.style.webkitTransform="translate3d("+t+",0,0)":A.style.left=t,A.style.opacity=1},400)):j.transforms?A.style.transform=A.style.webkitTransform="translate3d("+t+",0,0)":A.style.left=t}function v(){var t=T("div");return"undefined"!=typeof t.style.perspective||"undefined"!=typeof t.style.webkitPerspective}function w(){var t=T("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}function k(t){t-M>=Y.preload||m(t+1,function(){k(t+1)})}function C(t){M-t>=Y.preload||m(t-1,function(){C(t-1)})}function x(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,function(t){(t=t||window.event).target=t.target||t.srcElement,n(t)})}function E(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function B(t){return document.getElementById(t)}function T(t){return document.createElement(t)}var N,A,L,S,P,F='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',H='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',I='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',Y={},q={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},j={},X=[],M=0,R={},O=!1,z=/.+\.(gif|jpe?g|png|webp)/i,D={},V=[],U=null,W=function(t){-1!==t.target.id.indexOf("baguette-img")&&g()},G=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,h()},J=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,p()},K=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,g()},Q=function(t){R.count++,R.count>1&&(R.multitouch=!0),R.startX=t.changedTouches[0].pageX,R.startY=t.changedTouches[0].pageY},Z=function(t){if(!O&&!R.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-R.startX>40?(O=!0,h()):e.pageX-R.startX<-40?(O=!0,p()):R.startY-e.pageY>100&&g()}},$=function(){R.count--,R.count<=0&&(R.multitouch=!1),O=!1},_=function(){$()},tt=function(t){"block"===N.style.display&&N.contains&&!N.contains(t.target)&&(t.stopPropagation(),c())};return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:function(e,i){j.transforms=v(),j.svg=w(),o(),n(e),t(e,i)},showNext:p,showPrevious:h,destroy:function(){l(),e(),E(document,"keydown",i),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),D={},X=[],M=0}}});

return stack;})(stacks.com_elixir_stacks_foundryGallery);
stacks.com_elixir_stacks_foundryNavigationBar = {};
stacks.com_elixir_stacks_foundryNavigationBar = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'auto'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());
        s.stickyElement.css('transform', 'translate3d(0px, 0px, 0px)');

        if (scrollTop < etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'left': '',
                'right': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('left', '0')
              .css('right', '0')
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);


          if( unstick ) {
            s.stickyElement
              .css('position', 'relative')
              .css('top', '')
              .css('left', '')
              .css('right', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('left', '0')
              .css('right', '0')
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }

      scroller();

    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'left': '',
                'right': '',
                'float': '',
                'z-index': ''
              });
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

return stack;})(stacks.com_elixir_stacks_foundryNavigationBar);
stacks.stacks_in_4483472_page3 = {};
stacks.stacks_in_4483472_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Set Language for Document
document.documentElement.lang = "en";

$(document).ready(function(){
  

  
});

$.fn.elementRealHeight = function () {
   $clone = this.clone()
       .css("visibility","hidden")
       .appendTo($('body'));
   var $height = $clone.outerHeight();
   $clone.remove();
   return $height;
 };

 $.fn.elementRealWidth = function () {
    $clone = this.clone()
        .css("visibility","hidden")
        .appendTo($('body'));
    var $width = $clone.outerWidth();
    $clone.remove();
    return $width;
  };


  // Handles offsets for anchor tags
  // (function(document, history, location) {
  //   var HISTORY_SUPPORT = !!(history && history.pushState);
  //
  //   var anchorScrolls = {
  //     ANCHOR_REGEX: /^#[^ ]+$/,
  //     OFFSET_HEIGHT_PX: 0,
  //
  //     /**
  //      * Establish events, and fix initial scroll position if a hash is provided.
  //      */
  //     init: function() {
  //       this.scrollToCurrent();
  //       window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
  //       document.body.addEventListener('click', this.delegateAnchors.bind(this));
  //     },
  //
  //     /**
  //      * Return the offset amount to deduct from the normal scroll position.
  //      * Modify as appropriate to allow for dynamic calculations
  //      */
  //     getFixedOffset: function() {
  //       return this.OFFSET_HEIGHT_PX;
  //     },
  //
  //     /**
  //      * If the provided href is an anchor which resolves to an element on the
  //      * page, scroll to it.
  //      * @param  {String} href
  //      * @return {Boolean} - Was the href an anchor.
  //      */
  //     scrollIfAnchor: function(href, pushToHistory) {
  //       var match, rect, anchorOffset;
  //
  //       if(!this.ANCHOR_REGEX.test(href)) {
  //         return false;
  //       }
  //
  //       match = document.getElementById(href.slice(1));
  //
  //       if(match) {
  //         rect = match.getBoundingClientRect();
  //         anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
  //         window.scrollTo(window.pageXOffset, anchorOffset);
  //
  //         // Add the state to history as-per normal anchor links
  //         if(HISTORY_SUPPORT && pushToHistory) {
  //           history.pushState({}, document.title, location.pathname + href);
  //         }
  //       }
  //
  //       return !!match;
  //     },
  //
  //     /**
  //      * Attempt to scroll to the current location's hash.
  //      */
  //     scrollToCurrent: function() {
  //       this.scrollIfAnchor(window.location.hash);
  //     },
  //
  //     /**
  //      * If the click event's target was an anchor, fix the scroll position.
  //      */
  //     delegateAnchors: function(e) {
  //       var elem = e.target;
  //
  //       if(
  //         elem.nodeName === 'A' &&
  //         this.scrollIfAnchor(elem.getAttribute('href'), true)
  //       ) {
  //         e.preventDefault();
  //       }
  //     }
  //   };
  //
  //   window.addEventListener(
  //     'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  //   );
  // })(window.document, window.history, window.location);

return stack;})(stacks.stacks_in_4483472_page3);
stacks.stacks_in_4483473_page3 = {};
stacks.stacks_in_4483473_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;function foundry_navigation_bar() {
	// Removes overflow hidden so dropdowns can show as they should.
	$('#stacks_in_4483473_page3 .navigation_bar ').parentsUntil('.stacks_top').css({'overflow' : 'visible'});
	$('.stacks_top').css({'overflow' : 'visible'});

	// Unwraps the link from dividers and small subheaders
	$('#stacks_in_4483473_page3 .navigation_bar div.nav_divider, #stacks_in_4483473_page3 .navigation_bar .small_hdr').unwrap();



	// Removes href attributes from parent navigation links.
	// This could be offered as an option possibly.
	$('#stacks_in_4483473_page3 .navigation_bar .navigation_container > ul > li > a.parent').removeAttr("href").addClass('closed');

	//
	// Handles displaying drop down navigation.
	//
	$('#stacks_in_4483473_page3 .navigation_bar .navigation_container ul').find("li").each(function() {
			if ($(this).find("ul:first").length > 0) {

					$(this).click(function() {

							
							//
							// Close all navigation drop downs when another is opened.
							//
							$("#stacks_in_4483473_page3 .navigation_bar .navigation_container ul li").removeClass('clicked');

							$(this).addClass('clicked');

							$("#stacks_in_4483473_page3 .navigation_bar .navigation_container ul li:not(.clicked) a.open").parent().find('ul:first').stop(true, true).slideUp(200);


							$("#stacks_in_4483473_page3 .navigation_bar .navigation_container ul li").find("> a").addClass('closed').removeClass('open');
							

							//
							// Show child-level menu items
							//
							$(this).find("ul:first").stop(true, true).animate({height: 'toggle' , opacity: 'toggle'}, 200);

							$(this).find("> a").toggleClass('closed').toggleClass('open');
					});
			}
	});


	//
	// Handles showing and hiding the navigation when the navigation toggle is clicked or tapped.
	//
	$('#stacks_in_4483473_page3_mobile_navigation_toggle').click(function(){
		$('#stacks_in_4483473_page3 .navigation_bar .navigation_container > ul').slideToggle(175, function(){});
	});

	//
	// Handles pairing navigation with parent banner
	//
	
}




	$(document).ready(function(){
		foundry_navigation_bar();
	});



return stack;})(stacks.stacks_in_4483473_page3);
stacks.stacks_in_4483474_page3 = {};
stacks.stacks_in_4483474_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){






	// Load parallax effect
	

});


// $(window).load(function(){
// });

return stack;})(stacks.stacks_in_4483474_page3);
stacks.stacks_in_4484626_page3 = {};
stacks.stacks_in_4484626_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4484626_page3 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4484626_page3);
stacks.stacks_in_4485395_page3 = {};
stacks.stacks_in_4485395_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){

	var gal_col = $('#stacks_in_4485395_page3 .gallery_column');

	// LARGE
	

	
		gal_col.addClass('col-lg-3');
	

	

	


	// MEDIUM
	

	

	
		gal_col.addClass('col-md-4');
	

	

	


	// SMALL
	

	

	

	

	
		gal_col.addClass('col-xs-12');
	


	baguetteBox.run('#stacks_in_4485395_page3 .gallery_wrapper', {
		  captions: true,       // true|false|callback(element) - Display image captions
		  buttons: 'auto',      // 'auto'|true|false - Display buttons
		  async: false,         // true|false - Load files asynchronously
		  preload: 2,           // [number] - How many files should be preloaded from current image
		  animation: 'slideIn', // 'slideIn'|'fadeIn'|false - Animation type
			overlayBackgroundColor: 'rgba(0, 0, 0, 0.80)',
			fullScreen: false,
	});


});

return stack;})(stacks.stacks_in_4485395_page3);
stacks.stacks_in_4485415_page3 = {};
stacks.stacks_in_4485415_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485415_page3 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485415_page3);
stacks.stacks_in_4485409_page3 = {};
stacks.stacks_in_4485409_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){

	var gal_col = $('#stacks_in_4485409_page3 .gallery_column');

	// LARGE
	

	
		gal_col.addClass('col-lg-3');
	

	

	


	// MEDIUM
	

	

	
		gal_col.addClass('col-md-4');
	

	

	


	// SMALL
	

	

	

	

	
		gal_col.addClass('col-xs-12');
	


	baguetteBox.run('#stacks_in_4485409_page3 .gallery_wrapper', {
		  captions: true,       // true|false|callback(element) - Display image captions
		  buttons: 'auto',      // 'auto'|true|false - Display buttons
		  async: false,         // true|false - Load files asynchronously
		  preload: 2,           // [number] - How many files should be preloaded from current image
		  animation: 'slideIn', // 'slideIn'|'fadeIn'|false - Animation type
			overlayBackgroundColor: 'rgba(0, 0, 0, 0.80)',
			fullScreen: false,
	});


});

return stack;})(stacks.stacks_in_4485409_page3);
stacks.stacks_in_4483650_page3 = {};
stacks.stacks_in_4483650_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4483650_page3 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4483650_page3);
stacks.stacks_in_4483649_page3 = {};
stacks.stacks_in_4483649_page3 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function() {

	

	

	

	


});

return stack;})(stacks.stacks_in_4483649_page3);