/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vul-footer.js":
/*!******************************!*\
  !*** ./src/js/vul-footer.js ***!
  \******************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VulFooter = /*#__PURE__*/function (_HTMLElement) {
  _inherits(VulFooter, _HTMLElement);

  var _super = _createSuper(VulFooter);

  function VulFooter() {
    var _this;

    _classCallCheck(this, VulFooter);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  _createClass(VulFooter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadowRoot = this.shadowRoot;
      var footer = document.createElement('footer');
      footer.id = 'vu-footer';
      footer.classList.add('vu-footer', 'fresh');
      footer.innerHTML = "\n            <div id=\"vu-social\" class=\"vu-social\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <section class=\"vu-footer__social text-center center-block\"><h4 class=\"vu-footer__title\"><a href=\"http://social.vanderbilt.edu\">Connect with Vanderbilt Libraries</a></h4>\n                            <ul class=\"social-icons h2\">\n                                <li class=\"facebook\">\n                                    <a href=\"https://www.facebook.com/vandylibraries\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"follow us on facebook\" class=\"fab fa-facebook-f fa-fw\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"twitter\">\n                                    <a href=\"https://twitter.com/vandylibraries\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"follow us on twitter\" class=\"fab fa-twitter fa-fw\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"instagram\">\n                                    <a href=\"https://www.instagram.com/vandylibraries/\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"follow us on instagram\" class=\"fab fa-instagram fa-fw\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"youtube\">\n                                    <a href=\"https://www.youtube.com/playlist?list=PLB1EPeYUwa4n_I0CyMrQidztwO-SdENRm\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"watch our youtube videos\" class=\"fab fa-youtube fa-fw\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"flickr\">\n                                    <a href=\"https://www.flickr.com/photos/vulibrary/\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"view our photo album\" class=\"fab fa-flickr fa-fw\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"rss\">\n                                    <a href=\"https://newsonline.library.vanderbilt.edu/?feed=rss2\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"subscribe to our news rss feed\" class=\"fas fa-rss fa-fw\"></i>\n                                    </a>\n                                </li>\n                                <li class=\"linkedin\">\n                                    <a href=\"https://www.linkedin.com/company/jean-and-alexander-heard-libraries\" target=\"_blank\" rel=\"noopener\">\n                                        <i title=\"follow us on linkedin\" class=\"fab fa-linkedin-in fa-fw\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </section>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <section class=\"vu-footer__yourvu col-sm-3 clearfix\"><h4 class=\"vu-footer__title\">Your Vanderbilt</h4>\n                        <ul>\n                            <li><a href=\"https://www.vanderbilt.edu/alumni/\">Alumni</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/student/\">Current Students</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/faculty-staff/\">Faculty &amp; Staff</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/isss/\">International Students</a></li>\n                            <li><a href=\"https://news.vanderbilt.edu/for-media/\">Media</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/families/\">Parents &amp; Family</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/prospective/\">Prospective Students</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/academics/research/\">Researchers</a></li>\n                            <li><a href=\"https://www.vucommodores.com\">Sports Fans</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu/community/\">Visitors &amp; Neighbors</a></li>\n                        </ul>\n                    </section>\n                    <section class=\"vu-footer__map col-sm-6 clearfix\">\n                        <div class=\"embed-responsive embed-responsive-16by9\"><!--<p><iframe src=\"https://www.youtube.com/embed/videoseries?list=PLB1EPeYUwa4kR8T8GEPHayPR7sDTo85X0&amp;rel=0&amp;controls=0&amp;showinfo=0\" width=\"300\" height=\"150\" frameborder=\"0\"></iframe></p>-->\n\n                        <h4 class=\"vu-footer__title\">Support the Jean and Alexander Heard Libraries</h4>\n                        <div class=\"row\">\n                            <div class=\"col-xs-3 col-sm-4 col-lg-3\">\n                                <a href=\"https://webapp.mis.vanderbilt.edu/olga/pub/landing?appealCode=Q13A8\" class=\"give-now\"><img src=\"https://www.library.vanderbilt.edu/images/giveNow-ccc.png\" alt=\"Support the Library...Give Now\" title=\"Support the Library...Give Now\"></a>\n                            </div>\n                            <p class=\"col-xs-12 col-sm-8 col-lg-9\">\n                                Gifts to the Libraries support the learning and research needs of the entire Vanderbilt community. <a href=\"https://www.library.vanderbilt.edu/giving/\">Learn more about giving to the Libraries.</a>\n                            </p>\n                        </div>\n                                <div class=\"friend\">\n                                    <a href=\"https://www.library.vanderbilt.edu/friends/\" class=\"btn btn-primary\" style=\"color: #333;\">\n                                        <i class=\"fas fa-heart fa-fw\" style=\"margin-right: 5px;\"></i>Become a Friend of the Libraries\n                                    </a>\n                                </div>\n                            </div>\n                    </section>\n                    <section class=\"vu-footer__popular col-sm-3 clearfix\"><h4 class=\"vu-footer__title\">Quick Links</h4>\n                        <ul>\n                            <li><a href=\"https://www.library.vanderbilt.edu/hours.php\">Hours</a></li>\n                            <li><a href=\"https://www.library.vanderbilt.edu/about\">About</a></li>\n                            <li><a href=\"https://www.library.vanderbilt.edu/about/employment.php\">Employment</a></li>\n                            <li><a href=\"https://www.library.vanderbilt.edu/staff\">Staff Directory</a></li>\n                            <li><a href=\"https://www.library.vanderbilt.edu/about/accessibility.php\">Accessibility Services</a></li>\n                            <li><a href=\"https://www.library.vanderbilt.edu/about/contact.php\">Contact</a></li>\n                            <li><a href=\"https://www.vanderbilt.edu\">Vanderbilt University</a></li>\n                        </ul>\n                    </section>\n                </div>\n            </div>\n            <section class=\"credits\">\n                <div class=\"container\">\n                    <div class=\"col-lg-12 text-center\">\n                        <p id=\"library-address\">\n                            <a href=\"https://www.library.vanderbilt.edu\">Jean and Alexander Heard Libraries</a> &middot; 419 21st Avenue South &middot; Nashville, TN 37203 &middot; <a href=\"https://www.library.vanderbilt.edu/about/contact.php\">Phone</a>&nbsp;&nbsp;<img src=\"https://www.library.vanderbilt.edu/images/USA_Federal_depository_library_logo.svg.png\" title=\"Vanderbilt is a US Federal Depository Library\" alt=\"Vanderbilt is a US Federal Depository Library\" class=\"depository-logo\">\n                        </p>            \n                        <p>\n                            <small>\n                                <span>&copy;</span>&nbsp;Vanderbilt University &middot; All rights reserved. Site Development: <a href=\"https://web.vanderbilt.edu/\">Digital Strategies (Division of Communications)</a> &amp; <a href=\"https://ltds.library.vanderbilt.edu/\">Library Technology and Digital Services</a>.\n                                <br>\n                                Vanderbilt University is committed to principles of equal opportunity and affirmative action. <a class=\"credits__link\" href=\"https://www.vanderbilt.edu/about/accessibility/\">Accessibility information</a>. <a class=\"credits__link\" href=\"https://www.vanderbilt.edu/about/privacy\">Privacy Policy</a>. <br>Vanderbilt&reg;, Vanderbilt University&reg;, V Oak Leaf Design&reg;, Star V Design&reg; and Anchor Down&reg; are trademarks of The Vanderbilt University\n                            </small>\n                        </p>\n                        <slot></slot>\n                    </div>\n                </div>\n            </section>\n        ";
      shadowRoot.appendChild(footer);
      var stylesheet = document.querySelector('script[src*="vul-pw-footer.js"]').src.replaceAll('js', 'css');
      var link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', stylesheet);
      shadowRoot.appendChild(link);
    }
  }]);

  return VulFooter;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('vul-footer', VulFooter);

/***/ }),

/***/ "./src/bootstrap-3.4.1/less/bootstrap.less":
/*!*************************************************!*\
  !*** ./src/bootstrap-3.4.1/less/bootstrap.less ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fontawesome-free-5.15.4/less/fontawesome.less":
/*!***********************************************************!*\
  !*** ./src/fontawesome-free-5.15.4/less/fontawesome.less ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/vu-main-2019.css":
/*!**********************************!*\
  !*** ./src/css/vu-main-2019.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/vul-footer.css":
/*!********************************!*\
  !*** ./src/css/vul-footer.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/vul-pw-footer": 0,
/******/ 			"postcss/vul-footer": 0,
/******/ 			"postcss/vu-main-2019": 0,
/******/ 			"postcss/fontawesome": 0,
/******/ 			"postcss/bootstrap": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvul_public_web_components"] = self["webpackChunkvul_public_web_components"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["postcss/vul-footer","postcss/vu-main-2019","postcss/fontawesome","postcss/bootstrap"], () => (__webpack_require__("./src/js/vul-footer.js")))
/******/ 	__webpack_require__.O(undefined, ["postcss/vul-footer","postcss/vu-main-2019","postcss/fontawesome","postcss/bootstrap"], () => (__webpack_require__("./src/bootstrap-3.4.1/less/bootstrap.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/vul-footer","postcss/vu-main-2019","postcss/fontawesome","postcss/bootstrap"], () => (__webpack_require__("./src/fontawesome-free-5.15.4/less/fontawesome.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/vul-footer","postcss/vu-main-2019","postcss/fontawesome","postcss/bootstrap"], () => (__webpack_require__("./src/css/vu-main-2019.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["postcss/vul-footer","postcss/vu-main-2019","postcss/fontawesome","postcss/bootstrap"], () => (__webpack_require__("./src/css/vul-footer.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;