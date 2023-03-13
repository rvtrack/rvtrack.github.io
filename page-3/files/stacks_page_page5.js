//
// jarallax js
//

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.2
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

    module.exports = function (callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
          // Already ready or interactive, execute callback
          callback.call();
        } else if (document.attachEvent) {
          // Old browsers
          document.attachEvent('onreadystatechange', function () {
            if (document.readyState === 'interactive') callback.call();
          });
        } else if (document.addEventListener) {
          // Modern browsers
          document.addEventListener('DOMContentLoaded', callback);
        }
      };
      
      /***/ }),
      /* 3 */
      /***/ (function(module, exports, __webpack_require__) {
      
      /* WEBPACK VAR INJECTION */(function(global) {var win;
      
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      
      module.exports = win;
      /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))
      
      /***/ }),
      /* 4 */
      /***/ (function(module, exports) {
      
      function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
      
      var g; // This works in non-strict mode
      
      g = function () {
        return this;
      }();
      
      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
      } catch (e) {
        // This works if the window reference is available
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
      } // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}
      
      
      module.exports = g;
      
      /***/ }),
      /* 5 */,
      /* 6 */,
      /* 7 */,
      /* 8 */,
      /* 9 */,
      /* 10 */
      /***/ (function(module, exports, __webpack_require__) {
      
      module.exports = __webpack_require__(11);
      
      
      /***/ }),
      /* 11 */
      /***/ (function(module, __webpack_exports__, __webpack_require__) {
      
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
      /* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
      /* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
      function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
      
      
      
       // no conflict
      
      var oldPlugin = global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax;
      global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"];
      
      global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax.noConflict = function () {
        global__WEBPACK_IMPORTED_MODULE_1__["window"].jarallax = oldPlugin;
        return this;
      }; // jQuery support
      
      
      if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_1__["jQuery"]) {
        var jQueryPlugin = function jQueryPlugin() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
      
          Array.prototype.unshift.call(args, this);
          var res = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].apply(global__WEBPACK_IMPORTED_MODULE_1__["window"], args);
          return 'object' !== _typeof(res) ? res : this;
        };
      
        jQueryPlugin.constructor = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].constructor; // no conflict
      
        var oldJqPlugin = global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax;
        global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax = jQueryPlugin;
      
        global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax.noConflict = function () {
          global__WEBPACK_IMPORTED_MODULE_1__["jQuery"].fn.jarallax = oldJqPlugin;
          return this;
        };
      } // data-jarallax initialization
      
      
      lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        Object(_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelectorAll('[data-jarallax]'));
      });
      
      /***/ }),
      /* 12 */
      /***/ (function(module, __webpack_exports__, __webpack_require__) {
      
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
      /* harmony import */ var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
      /* harmony import */ var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
      function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
      
      function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
      
      function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
      
      function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
      
      function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
      
      function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
      
      function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
      
      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
      
      function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
      
      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
      
      
      
      var navigator = global__WEBPACK_IMPORTED_MODULE_1__["window"].navigator;
      var isIE = -1 < navigator.userAgent.indexOf('MSIE ') || -1 < navigator.userAgent.indexOf('Trident/') || -1 < navigator.userAgent.indexOf('Edge/');
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      var supportTransform = function () {
        var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
        var div = document.createElement('div');
      
        for (var i = 0; i < prefixes.length; i += 1) {
          if (div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
          }
        }
      
        return false;
      }();
      
      var $deviceHelper;
      /**
       * The most popular mobile browsers changes height after page scroll and this generates image jumping.
       * We can fix it using this workaround with vh units.
       */
      
      function getDeviceHeight() {
        if (!$deviceHelper && document.body) {
          $deviceHelper = document.createElement('div');
          $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
          document.body.appendChild($deviceHelper);
        }
      
        return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight || document.documentElement.clientHeight;
      } // Window height data
      
      
      var wndH;
      
      function updateWndVars() {
        if (isMobile) {
          wndH = getDeviceHeight();
        } else {
          wndH = global__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight || document.documentElement.clientHeight;
        }
      }
      
      updateWndVars();
      global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', updateWndVars);
      global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', updateWndVars);
      global__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('load', updateWndVars);
      lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        updateWndVars({
          type: 'dom-loaded'
        });
      }); // list with all jarallax instances
      // need to render all in one scroll/resize event
      
      var jarallaxList = []; // get all parents of the element.
      
      function getParents(elem) {
        var parents = [];
      
        while (null !== elem.parentElement) {
          elem = elem.parentElement;
      
          if (1 === elem.nodeType) {
            parents.push(elem);
          }
        }
      
        return parents;
      }
      
      function updateParallax() {
        if (!jarallaxList.length) {
          return;
        }
      
        jarallaxList.forEach(function (data, k) {
          var instance = data.instance,
              oldData = data.oldData;
          var clientRect = instance.$item.getBoundingClientRect();
          var newData = {
            width: clientRect.width,
            height: clientRect.height,
            top: clientRect.top,
            bottom: clientRect.bottom,
            wndW: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth,
            wndH: wndH
          };
          var isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
          var isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
          jarallaxList[k].oldData = newData;
      
          if (isResized) {
            instance.onResize();
          }
      
          if (isScrolled) {
            instance.onScroll();
          }
        });
        global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
      }
      
      var instanceID = 0; // Jarallax class
      
      var Jarallax = /*#__PURE__*/function () {
        function Jarallax(item, userOptions) {
          _classCallCheck(this, Jarallax);
      
          var self = this;
          self.instanceID = instanceID;
          instanceID += 1;
          self.$item = item;
          self.defaults = {
            type: 'scroll',
            // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
            speed: 0.5,
            // supported value from -1 to 2
            imgSrc: null,
            imgElement: '.jarallax-img',
            imgSize: 'cover',
            imgPosition: '50% 50%',
            imgRepeat: 'no-repeat',
            // supported only for background, not for <img> tag
            keepImg: false,
            // keep <img> tag in it's default place
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            // video
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            videoLazyLoading: true,
            // events
            onScroll: null,
            // function(calculations) {}
            onInit: null,
            // function() {}
            onDestroy: null,
            // function() {}
            onCoverImage: null // function() {}
      
          }; // prepare data-options
      
          var dataOptions = self.$item.dataset || {};
          var pureDataOptions = {};
          Object.keys(dataOptions).forEach(function (key) {
            var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
      
            if (loweCaseOption && 'undefined' !== typeof self.defaults[loweCaseOption]) {
              pureDataOptions[loweCaseOption] = dataOptions[key];
            }
          });
          self.options = self.extend({}, self.defaults, pureDataOptions, userOptions);
          self.pureOptions = self.extend({}, self.options); // prepare 'true' and 'false' strings to boolean
      
          Object.keys(self.options).forEach(function (key) {
            if ('true' === self.options[key]) {
              self.options[key] = true;
            } else if ('false' === self.options[key]) {
              self.options[key] = false;
            }
          }); // fix speed option [-1.0, 2.0]
      
          self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed))); // prepare disableParallax callback
      
          if ('string' === typeof self.options.disableParallax) {
            self.options.disableParallax = new RegExp(self.options.disableParallax);
          }
      
          if (self.options.disableParallax instanceof RegExp) {
            var disableParallaxRegexp = self.options.disableParallax;
      
            self.options.disableParallax = function () {
              return disableParallaxRegexp.test(navigator.userAgent);
            };
          }
      
          if ('function' !== typeof self.options.disableParallax) {
            self.options.disableParallax = function () {
              return false;
            };
          } // prepare disableVideo callback
      
      
          if ('string' === typeof self.options.disableVideo) {
            self.options.disableVideo = new RegExp(self.options.disableVideo);
          }
      
          if (self.options.disableVideo instanceof RegExp) {
            var disableVideoRegexp = self.options.disableVideo;
      
            self.options.disableVideo = function () {
              return disableVideoRegexp.test(navigator.userAgent);
            };
          }
      
          if ('function' !== typeof self.options.disableVideo) {
            self.options.disableVideo = function () {
              return false;
            };
          } // custom element to check if parallax in viewport
      
      
          var elementInVP = self.options.elementInViewport; // get first item from array
      
          if (elementInVP && 'object' === _typeof(elementInVP) && 'undefined' !== typeof elementInVP.length) {
            var _elementInVP = elementInVP;
      
            var _elementInVP2 = _slicedToArray(_elementInVP, 1);
      
            elementInVP = _elementInVP2[0];
          } // check if dom element
      
      
          if (!(elementInVP instanceof Element)) {
            elementInVP = null;
          }
      
          var nVer = navigator.appVersion;
          var nAgt = navigator.userAgent;
          var browserName  = navigator.appName;
          var fullVersion  = ''+parseFloat(navigator.appVersion); 
          var majorVersion = parseInt(navigator.appVersion,10);
          var nameOffset,verOffset,ix;
          
          // In Opera, the true version is after "Opera" or after "Version"
          if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
           browserName = "Opera";
           fullVersion = nAgt.substring(verOffset+6);
           if ((verOffset=nAgt.indexOf("Version"))!=-1) 
             fullVersion = nAgt.substring(verOffset+8);
          }
          // In MSIE, the true version is after "MSIE" in userAgent
          else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
           browserName = "Microsoft Internet Explorer";
           fullVersion = nAgt.substring(verOffset+5);
          }
          // In Chrome, the true version is after "Chrome" 
          else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
           browserName = "Chrome";
           fullVersion = nAgt.substring(verOffset+7);
          }
          // In Safari, the true version is after "Safari" or after "Version" 
          else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
           browserName = "Safari";
           fullVersion = nAgt.substring(verOffset+7);
           if ((verOffset=nAgt.indexOf("Version"))!=-1) 
             fullVersion = nAgt.substring(verOffset+8);
          }
          // In Firefox, the true version is after "Firefox" 
          else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
           browserName = "Firefox";
           fullVersion = nAgt.substring(verOffset+8);
          }
          // In most other browsers, "name/version" is at the end of userAgent 
          else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
                    (verOffset=nAgt.lastIndexOf('/')) ) 
          {
           browserName = nAgt.substring(nameOffset,verOffset);
           fullVersion = nAgt.substring(verOffset+1);
           if (browserName.toLowerCase()==browserName.toUpperCase()) {
            browserName = navigator.appName;
           }
          }
          // trim the fullVersion string at semicolon/space if present
          if ((ix=fullVersion.indexOf(";"))!=-1)
             fullVersion=fullVersion.substring(0,ix);
          if ((ix=fullVersion.indexOf(" "))!=-1)
             fullVersion=fullVersion.substring(0,ix);
          
          majorVersion = parseInt(''+fullVersion,10);
          if (isNaN(majorVersion)) {
           fullVersion  = ''+parseFloat(navigator.appVersion); 
           majorVersion = parseInt(navigator.appVersion,10);
          }

        if (browserName == "Safari") {
            if (majorVersion < 14) {
                var posType = 'fixed';    
            } else {
                var posType = 'absolute';
            }
        } else if ((navigator.userAgent == "iPad") || (navigator.userAgent == "Android") || (navigator.userAgent == "iPhone")) {
            var posType = 'absolute';
        } else {
            var posType = 'fixed';
        }

          
          self.options.elementInViewport = elementInVP;
          self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,
            // position fixed is needed for the most of browsers because absolute position have glitches
            // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
            // on mobile devices better scrolled with absolute position
            position: posType
          };
      
          if (self.initImg() && self.canInitParallax()) {
            self.init();
          }
        } // add styles to element
        // eslint-disable-next-line class-methods-use-this
      
      
        _createClass(Jarallax, [{
          key: "css",
          value: function css(el, styles) {
            if ('string' === typeof styles) {
              return global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el).getPropertyValue(styles);
            } // add transform property with vendor prefix
      
      
            if (styles.transform && supportTransform) {
              styles[supportTransform] = styles.transform;
            }
      
            Object.keys(styles).forEach(function (key) {
              el.style[key] = styles[key];
            });
            return el;
          } // Extend like jQuery.extend
          // eslint-disable-next-line class-methods-use-this
      
        }, {
          key: "extend",
          value: function extend(out) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
      
            out = out || {};
            Object.keys(args).forEach(function (i) {
              if (!args[i]) {
                return;
              }
      
              Object.keys(args[i]).forEach(function (key) {
                out[key] = args[i][key];
              });
            });
            return out;
          } // get window size and scroll position. Useful for extensions
          // eslint-disable-next-line class-methods-use-this
      
        }, {
          key: "getWindowData",
          value: function getWindowData() {
            return {
              width: global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth || document.documentElement.clientWidth,
              height: wndH,
              y: document.documentElement.scrollTop
            };
          } // Jarallax functions
      
        }, {
          key: "initImg",
          value: function initImg() {
            var self = this; // find image element
      
            var $imgElement = self.options.imgElement;
      
            if ($imgElement && 'string' === typeof $imgElement) {
              $imgElement = self.$item.querySelector($imgElement);
            } // check if dom element
      
      
            if (!($imgElement instanceof Element)) {
              if (self.options.imgSrc) {
                $imgElement = new Image();
                $imgElement.src = self.options.imgSrc;
              } else {
                $imgElement = null;
              }
            }
      
            if ($imgElement) {
              if (self.options.keepImg) {
                self.image.$item = $imgElement.cloneNode(true);
              } else {
                self.image.$item = $imgElement;
                self.image.$itemParent = $imgElement.parentNode;
              }
      
              self.image.useImgTag = true;
            } // true if there is img tag
      
      
            if (self.image.$item) {
              return true;
            } // get image src
      
      
            if (null === self.image.src) {
              self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
              self.image.bgImage = self.css(self.$item, 'background-image');
            }
      
            return !(!self.image.bgImage || 'none' === self.image.bgImage);
          }
        }, {
          key: "canInitParallax",
          value: function canInitParallax() {
            return supportTransform && !this.options.disableParallax();
          }
        }, {
          key: "init",
          value: function init() {
            var self = this;
            var containerStyles = {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            };
            var imageStyles = {
              pointerEvents: 'none',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              willChange: 'transform,opacity'
            };
      
            if (!self.options.keepImg) {
              // save default user styles
              var curStyle = self.$item.getAttribute('style');
      
              if (curStyle) {
                self.$item.setAttribute('data-jarallax-original-styles', curStyle);
              }
      
              if (self.image.useImgTag) {
                var curImgStyle = self.image.$item.getAttribute('style');
      
                if (curImgStyle) {
                  self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                }
              }
            } // set relative position and z-index to the parent
      
      
            if ('static' === self.css(self.$item, 'position')) {
              self.css(self.$item, {
                position: 'relative'
              });
            }
      
            if ('auto' === self.css(self.$item, 'z-index')) {
              self.css(self.$item, {
                zIndex: 0
              });
            } // container for parallax image
      
      
            self.image.$container = document.createElement('div');
            self.css(self.image.$container, containerStyles);
            self.css(self.image.$container, {
              'z-index': self.options.zIndex
            }); // fix for IE https://github.com/nk-o/jarallax/issues/110
      
            if (isIE) {
              self.css(self.image.$container, {
                opacity: 0.9999
              });
            }
      
            self.image.$container.setAttribute('id', "jarallax-container-".concat(self.instanceID));
            self.$item.appendChild(self.image.$container); // use img tag
      
            if (self.image.useImgTag) {
              imageStyles = self.extend({
                'object-fit': self.options.imgSize,
                'object-position': self.options.imgPosition,
                // support for plugin https://github.com/bfred-it/object-fit-images
                'font-family': "object-fit: ".concat(self.options.imgSize, "; object-position: ").concat(self.options.imgPosition, ";"),
                'max-width': 'none'
              }, containerStyles, imageStyles); // use div with background image
            } else {
              self.image.$item = document.createElement('div');
      
              if (self.image.src) {
                imageStyles = self.extend({
                  'background-position': self.options.imgPosition,
                  'background-size': self.options.imgSize,
                  'background-repeat': self.options.imgRepeat,
                  'background-image': self.image.bgImage || "url(\"".concat(self.image.src, "\")")
                }, containerStyles, imageStyles);
              }
            }
      
            if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) {
              self.image.position = 'absolute';
            } // 1. Check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
            //    discussion - https://github.com/nk-o/jarallax/issues/9
            // 2. Check if parents have overflow scroll
      
      
            if ('fixed' === self.image.position) {
              var $parents = getParents(self.$item).filter(function (el) {
                var styles = global__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el);
                var parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
                var overflowRegex = /(auto|scroll)/;
                return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x']);
              });
              self.image.position = $parents.length ? 'absolute' : 'fixed';
            } // add position to parallax block
      
      
            imageStyles.position = self.image.position; // insert parallax image
      
            self.css(self.image.$item, imageStyles);
            self.image.$container.appendChild(self.image.$item); // set initial position and size
      
            self.onResize();
            self.onScroll(true); // call onInit event
      
            if (self.options.onInit) {
              self.options.onInit.call(self);
            } // remove default user background
      
      
            if ('none' !== self.css(self.$item, 'background-image')) {
              self.css(self.$item, {
                'background-image': 'none'
              });
            }
      
            self.addToParallaxList();
          } // add to parallax instances list
      
        }, {
          key: "addToParallaxList",
          value: function addToParallaxList() {
            jarallaxList.push({
              instance: this
            });
      
            if (1 === jarallaxList.length) {
              global__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(updateParallax);
            }
          } // remove from parallax instances list
      
        }, {
          key: "removeFromParallaxList",
          value: function removeFromParallaxList() {
            var self = this;
            jarallaxList.forEach(function (data, key) {
              if (data.instance.instanceID === self.instanceID) {
                jarallaxList.splice(key, 1);
              }
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var self = this;
            self.removeFromParallaxList(); // return styles on container as before jarallax init
      
            var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
            self.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init
      
            if (!originalStylesTag) {
              self.$item.removeAttribute('style');
            } else {
              self.$item.setAttribute('style', originalStylesTag);
            }
      
            if (self.image.useImgTag) {
              // return styles on img tag as before jarallax init
              var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
              self.image.$item.removeAttribute('data-jarallax-original-styles'); // null occurs if there is no style tag before jarallax init
      
              if (!originalStylesImgTag) {
                self.image.$item.removeAttribute('style');
              } else {
                self.image.$item.setAttribute('style', originalStylesTag);
              } // move img tag to its default position
      
      
              if (self.image.$itemParent) {
                self.image.$itemParent.appendChild(self.image.$item);
              }
            } // remove additional dom elements
      
      
            if (self.$clipStyles) {
              self.$clipStyles.parentNode.removeChild(self.$clipStyles);
            }
      
            if (self.image.$container) {
              self.image.$container.parentNode.removeChild(self.image.$container);
            } // call onDestroy event
      
      
            if (self.options.onDestroy) {
              self.options.onDestroy.call(self);
            } // delete jarallax from item
      
      
            delete self.$item.jarallax;
          } // it will remove some image overlapping
          // overlapping occur due to an image position fixed inside absolute position element
      
        }, {
          key: "clipContainer",
          value: function clipContainer() {
            // needed only when background in fixed position
            if ('fixed' !== this.image.position) {
              return;
            }
      
            var self = this;
            var rect = self.image.$container.getBoundingClientRect();
            var width = rect.width,
                height = rect.height;
      
            if (!self.$clipStyles) {
              self.$clipStyles = document.createElement('style');
              self.$clipStyles.setAttribute('type', 'text/css');
              self.$clipStyles.setAttribute('id', "jarallax-clip-".concat(self.instanceID));
              var head = document.head || document.getElementsByTagName('head')[0];
              head.appendChild(self.$clipStyles);
            }
      
            var styles = "#jarallax-container-".concat(self.instanceID, " {\n           clip: rect(0 ").concat(width, "px ").concat(height, "px 0);\n           clip: rect(0, ").concat(width, "px, ").concat(height, "px, 0);\n        }"); // add clip styles inline (this method need for support IE8 and less browsers)
      
            if (self.$clipStyles.styleSheet) {
              self.$clipStyles.styleSheet.cssText = styles;
            } else {
              self.$clipStyles.innerHTML = styles;
            }
          }
        }, {
          key: "coverImage",
          value: function coverImage() {
            var self = this;
            var rect = self.image.$container.getBoundingClientRect();
            var contH = rect.height;
            var speed = self.options.speed;
            var isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
            var scrollDist = 0;
            var resultH = contH;
            var resultMT = 0; // scroll parallax
      
            if (isScroll) {
              // scroll distance and height for image
              if (0 > speed) {
                scrollDist = speed * Math.max(contH, wndH);
      
                if (wndH < contH) {
                  scrollDist -= speed * (contH - wndH);
                }
              } else {
                scrollDist = speed * (contH + wndH);
              } // size for scroll parallax
      
      
              if (1 < speed) {
                resultH = Math.abs(scrollDist - wndH);
              } else if (0 > speed) {
                resultH = scrollDist / speed + Math.abs(scrollDist);
              } else {
                resultH += (wndH - contH) * (1 - speed);
              }
      
              scrollDist /= 2;
            } // store scroll distance
      
      
            self.parallaxScrollDistance = scrollDist; // vertical center
      
            if (isScroll) {
              resultMT = (wndH - resultH) / 2;
            } else {
              resultMT = (contH - resultH) / 2;
            } // apply result to item
      
      
            self.css(self.image.$item, {
              height: "".concat(resultH, "px"),
              marginTop: "".concat(resultMT, "px"),
              left: 'fixed' === self.image.position ? "".concat(rect.left, "px") : '0',
              width: "".concat(rect.width, "px")
            }); // call onCoverImage event
      
            if (self.options.onCoverImage) {
              self.options.onCoverImage.call(self);
            } // return some useful data. Used in the video cover function
      
      
            return {
              image: {
                height: resultH,
                marginTop: resultMT
              },
              container: rect
            };
          }
        }, {
          key: "isVisible",
          value: function isVisible() {
            return this.isElementInViewport || false;
          }
        }, {
          key: "onScroll",
          value: function onScroll(force) {
            var self = this;
            var rect = self.$item.getBoundingClientRect();
            var contT = rect.top;
            var contH = rect.height;
            var styles = {}; // check if in viewport
      
            var viewportRect = rect;
      
            if (self.options.elementInViewport) {
              viewportRect = self.options.elementInViewport.getBoundingClientRect();
            }
      
            self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= global__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth; // stop calculations if item is not in viewport
      
            if (force ? false : !self.isElementInViewport) {
              return;
            } // calculate parallax helping variables
      
      
            var beforeTop = Math.max(0, contT);
            var beforeTopEnd = Math.max(0, contH + contT);
            var afterTop = Math.max(0, -contT);
            var beforeBottom = Math.max(0, contT + contH - wndH);
            var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
            var afterBottom = Math.max(0, -contT + wndH - contH);
            var fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH)); // calculate on how percent of section is visible
      
            var visiblePercent = 1;
      
            if (contH < wndH) {
              visiblePercent = 1 - (afterTop || beforeBottom) / contH;
            } else if (beforeTopEnd <= wndH) {
              visiblePercent = beforeTopEnd / wndH;
            } else if (beforeBottomEnd <= wndH) {
              visiblePercent = beforeBottomEnd / wndH;
            } // opacity
      
      
            if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
              styles.transform = 'translate3d(0,0,0)';
              styles.opacity = visiblePercent;
            } // scale
      
      
            if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
              var scale = 1;
      
              if (0 > self.options.speed) {
                scale -= self.options.speed * visiblePercent;
              } else {
                scale += self.options.speed * (1 - visiblePercent);
              }
      
              styles.transform = "scale(".concat(scale, ") translate3d(0,0,0)");
            } // scroll
      
      
            if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
              var positionY = self.parallaxScrollDistance * fromViewportCenter; // fix if parallax block in absolute position
      
              if ('absolute' === self.image.position) {
                positionY -= contT;
              }
      
              styles.transform = "translate3d(0,".concat(positionY, "px,0)");
            }
      
            self.css(self.image.$item, styles); // call onScroll event
      
            if (self.options.onScroll) {
              self.options.onScroll.call(self, {
                section: rect,
                beforeTop: beforeTop,
                beforeTopEnd: beforeTopEnd,
                afterTop: afterTop,
                beforeBottom: beforeBottom,
                beforeBottomEnd: beforeBottomEnd,
                afterBottom: afterBottom,
                visiblePercent: visiblePercent,
                fromViewportCenter: fromViewportCenter
              });
            }
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.coverImage();
            this.clipContainer();
          }
        }]);
      
        return Jarallax;
      }(); // global definition
      
      
      var plugin = function plugin(items, options) {
        // check for dom element
        // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        if ('object' === (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? items instanceof HTMLElement : items && 'object' === _typeof(items) && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) {
          items = [items];
        }
      
        var len = items.length;
        var k = 0;
        var ret;
      
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
      
        for (k; k < len; k += 1) {
          if ('object' === _typeof(options) || 'undefined' === typeof options) {
            if (!items[k].jarallax) {
              items[k].jarallax = new Jarallax(items[k], options);
            }
          } else if (items[k].jarallax) {
            // eslint-disable-next-line prefer-spread
            ret = items[k].jarallax[options].apply(items[k].jarallax, args);
          }
      
          if ('undefined' !== typeof ret) {
            return ret;
          }
        }
      
        return items;
      };
      
      plugin.constructor = Jarallax;
      /* harmony default export */ __webpack_exports__["default"] = (plugin);
      
      /***/ })
      /******/ ]);

//
// tablesorter
//


(function($){$.extend({tablesorter:new
function(){var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:'/\.|\,/g',onRenderHeader:null,selectorHeaders:'thead th',debug:false};function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);}else{alert(s);}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}if(table.tBodies.length==0)return;var rows=table.tBodies[0].rows;if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);}else if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}if(!p){p=detectParserForColumn(table,rows,-1,i);}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}list.push(p);}}if(table.config.debug){log(parsersDebug);}return list;};function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;while(nodeValue==''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);if(table.config.debug){log('Checking if value was empty on row:'+rowIndex);}}else{keepLooking=false;}}for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];}}return parsers[0];}function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));}function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}return false;}function buildCache(table){if(table.config.debug){var cacheTime=new Date();}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);continue;}cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));}cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;};if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);}return cache;};function getElementText(config,node){var text="";if(!node)return"";if(!config.supportsTextContent)config.supportsTextContent=node.textContent||false;if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}return text;}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);}}}if(table.config.appender){table.config.appender(table,rows);}rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}applyWidget(table);setTimeout(function(){$(table).trigger("sortEnd");},0);};function buildHeaders(table){if(table.config.debug){var time=new Date();}var meta=($.metadata)?true:false;var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(table,index))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);if(table.config.onRenderHeader)table.config.onRenderHeader.apply($th);}table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);log($tableHeaders);}return $tableHeaders;};function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName('THEAD')[0];var trs=thead.getElementsByTagName('TR');for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1
var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];}for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}lookup[cellId]=firstAvailCol;for(var k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";}}}}return lookup;}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}return arr;};function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;};return false;}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;};return false;}function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder))return table.config.headers[i].lockedOrder;return false;}function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}function getWidgetById(name){var l=widgets.length;for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}};function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;}else{return(v==1)?1:0;}}function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}return false;}function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);}}function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$('<colgroup>');$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($('<col>').css('width',$(this).width()));});$(table).prepend(colgroup);};}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];o.count=s[1];o.count++;}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);}return cache;};function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=='text'&&direction=='asc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";}else if(type=='text'&&direction=='desc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";}else if(type=='numeric'&&direction=='asc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";}else if(type=='numeric'&&direction=='desc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";}};function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";};function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";};function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";};function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";};function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return((a<b)?-1:((a>b)?1:0));};function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return((b<a)?-1:((b>a)?1:0));};function sortNumeric(a,b){return a-b;};function sortNumericDesc(a,b){return b-a;};function getCachedSortType(parsers,i){return parsers[i].type;};this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies)return;var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!e[config.sortMultiSortKey]){config.sortList=[];if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}config.sortList.push([i,this.order]);}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}};setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}if(a){parsers.push(parser);};};this.addWidget=function(widget){widgets.push(widget);};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return/^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,'')));};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild)this.removeChild(this.firstChild);}empty.apply(table.tBodies[0]);}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return/^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s);},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),''));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s));},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");}else if (c.dateFormat == "pt") {s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");} else if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");}return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);if(!$tr.hasClass(table.config.cssChildRow))row++;odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);


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
stacks.stacks_in_4483472 = {};
stacks.stacks_in_4483472 = (function(stack) {
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

return stack;})(stacks.stacks_in_4483472);
stacks.stacks_in_4483473 = {};
stacks.stacks_in_4483473 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;function foundry_navigation_bar() {
	// Removes overflow hidden so dropdowns can show as they should.
	$('#stacks_in_4483473 .navigation_bar ').parentsUntil('.stacks_top').css({'overflow' : 'visible'});
	$('.stacks_top').css({'overflow' : 'visible'});

	// Unwraps the link from dividers and small subheaders
	$('#stacks_in_4483473 .navigation_bar div.nav_divider, #stacks_in_4483473 .navigation_bar .small_hdr').unwrap();



	// Removes href attributes from parent navigation links.
	// This could be offered as an option possibly.
	// $('#stacks_in_4483473 .navigation_bar .navigation_container > ul > li > a.parent').removeAttr("href").addClass('closed');
	$('#stacks_in_4483473 .navigation_bar .navigation_container > ul > li > a.parent').attr("href", "#").addClass('closed');

	//
	// Handles displaying drop down navigation.
	//
	$('#stacks_in_4483473 .navigation_bar .navigation_container ul').find("li").each(function() {
			if ($(this).find("ul:first").length > 0) {

					$(this).find('a.parent').click(function() {

						event.preventDefault();

							
							//
							// Close all navigation drop downs when another is opened.
							//
							$("#stacks_in_4483473 .navigation_bar .navigation_container ul li").removeClass('clicked');

							$(this).parent().addClass('clicked');

							$("#stacks_in_4483473 .navigation_bar .navigation_container ul li:not(.clicked) a.open").parent().find('ul:first').stop(true, true).slideUp(200);


							$("#stacks_in_4483473 .navigation_bar .navigation_container ul li").find("> a").addClass('closed').removeClass('open');
							

							//
							// Show child-level menu items
							//
							$(this).parent().find("ul:first").stop(true, true).animate({height: 'toggle' , opacity: 'toggle'}, 200);

							$(this).parent().find("> a").toggleClass('closed').toggleClass('open');
					});
			}
	});


	//
	// Handles showing and hiding the navigation when the navigation toggle is clicked or tapped.
	//
	$('#stacks_in_4483473_mobile_navigation_toggle').click(function(){
		$('#stacks_in_4483473 .navigation_bar .navigation_container > ul').slideToggle(175, function(){});
	});

	//
	// Handles pairing navigation with parent banner
	//
	
}




	$(document).ready(function(){
		foundry_navigation_bar();
	});



return stack;})(stacks.stacks_in_4483473);
stacks.stacks_in_4483474 = {};
stacks.stacks_in_4483474 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){






	// Load parallax effect
	

});


// $(window).load(function(){
// });

return stack;})(stacks.stacks_in_4483474);
stacks.stacks_in_4485331 = {};
stacks.stacks_in_4485331 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485331 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485331);
stacks.stacks_in_4485354 = {};
stacks.stacks_in_4485354 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function() {
  
    $("#stacks_in_4485354_table").tablesorter({
      
    });
  
});

return stack;})(stacks.stacks_in_4485354);
stacks.stacks_in_4483650 = {};
stacks.stacks_in_4483650 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4483650 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4483650);
stacks.stacks_in_4483649 = {};
stacks.stacks_in_4483649 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function() {

	

	

	

	


});

return stack;})(stacks.stacks_in_4483649);