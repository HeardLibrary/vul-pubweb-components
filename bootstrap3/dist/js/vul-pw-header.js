/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vul-banner.js":
/*!******************************!*\
  !*** ./src/js/vul-banner.js ***!
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

var VulBanner = /*#__PURE__*/function (_HTMLElement) {
  _inherits(VulBanner, _HTMLElement);

  var _super = _createSuper(VulBanner);

  function VulBanner() {
    var _this;

    _classCallCheck(this, VulBanner);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  _createClass(VulBanner, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadowRoot = this.shadowRoot;
      var stylesheet = document.querySelector('link[href*="vul-pw-header.css"]').href;
      var division = this.hasAttribute('division') ? this.getAttribute('division') : 'Jean &amp; Alexander Heard Libraries';
      var url = this.hasAttribute('url') ? this.getAttribute('url') : 'https://www.library.vanderbilt.edu';
      var banner = document.createElement('div');
      banner.classList.add('img-banner', 'header-background');
      banner.innerHTML = "\n            <div class=\"img-banner header-background\" data-div=\"".concat(division, "\">\n                <div class=\"container container--banner\">\n                    <a href=\"").concat(url, "\">\n                        <h1 class=\"graphic-header__title livetextheader\">\n                            <slot name=\"banner-text\">\n                                Jean &amp; Alexander Heard <b>Libraries</b>\n                            </slot>\n                        </h1>\n                        <span class=\"sr-only\">Home</span>\n                    </a>\n                </div>\n            </div>\n        ");
      shadowRoot.appendChild(banner);
      var link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', stylesheet);
      shadowRoot.appendChild(link);
    }
  }]);

  return VulBanner;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('vul-banner', VulBanner);

/***/ }),

/***/ "./src/js/vul-brandbar.js":
/*!********************************!*\
  !*** ./src/js/vul-brandbar.js ***!
  \********************************/
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

var VulBrandbar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(VulBrandbar, _HTMLElement);

  var _super = _createSuper(VulBrandbar);

  function VulBrandbar() {
    _classCallCheck(this, VulBrandbar);

    return _super.call(this);
  }

  _createClass(VulBrandbar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var brandbar = document.createElement('nav');
      brandbar.classList.add('vu-navbar', 'vu-navbar-inverse');
      brandbar.id = 'main_navbar';
      brandbar.setAttribute('role', 'navigation');
      brandbar.setAttribute('aria-label', 'Vanderbilt University');
      brandbar.innerHTML = "\n            <div class=\"container\">\n                <div class=\"vu-navbar-header\">\n                    <button type=\"button\" class=\"vu-navbar-toggle\" data-toggle=\"collapse\" data-target=\".vu-navbar-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"vu-navbar-brand\" href=\"http://www.vanderbilt.edu\">\n                        <img class=\"hidden-xs hidden-sm hidden-md\" src=\"https://www.library.vanderbilt.edu/images/vanderbilt2022.svg\" alt=\"Vanderbilt University\">\n                        <img class=\"visible-xs visible-sm visible-md\" src=\"https://www.library.vanderbilt.edu/images/vanderbilt2022.svg\" alt=\"Vanderbilt University\">\n                    </a>\n                </div>\n                <div class=\"vubrandbar collapse vu-navbar-collapse\">\n                    <ul class=\"vu-nav vu-navbar-nav vu-navbar-right vu-toolbar\">\n                        <!-- Logins -->\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"vubrandbar__icon glyphicon glyphicon-lock\"></i>&nbsp; Logins <span class=\"caret\"></span>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui\">My Account</a></li>\n                                <li><a href=\"http://gmail.vanderbilt.edu\">VUGmail</a></li>\n                                <li><a href=\"https://outlook.office.com/vanderbilt.edu\">VMail</a></li>\n                                <li><a href=\"http://yes.vanderbilt.edu/\">YES</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/brightspace/\">Brightspace</a></li>\n                                <li><a href=\"https://oraclecloud.vanderbilt.edu/\">SkyVU</a></li>\n                                <li><a href=\"https://anchorlink.vanderbilt.edu/account/logon\">Anchor Link</a></li>\n                            </ul>\n                        </li>\n\n                        <!-- Resources -->\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"vubrandbar__icon glyphicon glyphicon-cog\"></i>&nbsp; Resources <span class=\"caret\"></span>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"http://vu.edu/peoplefinder\">PeopleFinder</a></li>\n                                <li><a href=\"http://www.library.vanderbilt.edu/\">Libraries</a></li>\n                                <li><a href=\"http://news.vanderbilt.edu\">News</a></li>\n                                <li><a href=\"http://events.vanderbilt.edu\">Calendar</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/map/\">Maps</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/atoz/letter/A\">A-Z</a></li>\n                                <li><a href=\"https://social.vanderbilt.edu\">Get Social</a></li>\n                            </ul>\n                        </li>\n\n                        <!-- Explore VU -->\n                        <li class=\"dropdown\">\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"vubrandbar__icon glyphicon glyphicon-th\"></i>&nbsp; Explore VU <span class=\"caret\"></span>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"http://www.vanderbilt.edu/about/\">About</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/prospective/\">Admissions</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/academics/\">Academics</a></li>\n                                <li><a href=\"http://research.vanderbilt.edu/\">Research</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/student/\">Students</a></li>\n                                <li><a href=\"http://www.vanderbilt.edu/faculty-staff/\">Faculty &amp; Staff</a></li>\n                                <li><a href=\"http://www.vucommodores.com/\">Athletics</a></li>\n                                <li class=\"last\"><a href=\"http://www.mc.vanderbilt.edu/\">Medical Center</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        ";
      this.appendChild(brandbar);
    }
  }]);

  return VulBrandbar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('vul-brandbar', VulBrandbar);

/***/ }),

/***/ "./src/js/vul-header.js":
/*!******************************!*\
  !*** ./src/js/vul-header.js ***!
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

var VulHeader = /*#__PURE__*/function (_HTMLElement) {
  _inherits(VulHeader, _HTMLElement);

  var _super = _createSuper(VulHeader);

  function VulHeader() {
    var _this;

    _classCallCheck(this, VulHeader);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  _createClass(VulHeader, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadowRoot = this.shadowRoot;
      var header = document.createElement('header');
      var stylesheet = document.querySelector('link[href*="vul-pw-header.css"]').href;
      header.classList.add('vu-header');
      header.innerHTML = "\n            <a class=\"sr-only sr-only-focusable\" href=\"#maincontent\">Skip to main content</a>\n            <slot></slot>\n        ";
      shadowRoot.appendChild(header);
      var link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', stylesheet);
      shadowRoot.appendChild(link);
    }
  }]);

  return VulHeader;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('vul-header', VulHeader);

/***/ }),

/***/ "./src/js/vul-navigation.js":
/*!**********************************!*\
  !*** ./src/js/vul-navigation.js ***!
  \**********************************/
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

var VulNavigation = /*#__PURE__*/function (_HTMLElement) {
  _inherits(VulNavigation, _HTMLElement);

  var _super = _createSuper(VulNavigation);

  function VulNavigation() {
    _classCallCheck(this, VulNavigation);

    return _super.call(this);
  }

  _createClass(VulNavigation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var vuNav = document.createElement('div');
      vuNav.classList.add('vu-navbar', 'vu-navbar-inverse', 'no-border-radius');
      vuNav.innerHTML = "\n            <div class=\"container\">\n                <nav class=\"vumainmenu vu-navbar-collapse collapse\" aria-label=\"Library\" aria-expanded=\"false\">\n                    <ul id=\"sitenav\" class=\"vu-nav vu-navbar-nav vu-navbar-left vunavigation\">\n                        <li class=\"home\">\n                            <a href=\"/\" aria-label=\"Jean &amp; Alexander Heard Libraries Home\">Home</a>\n                        </li>\n\n                        <li class=\"about dropdown\">\n                            <a href=\"#\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"dropdown\" class=\"vumainmenu__dropdown dropdown-toggle\">\n                                About <span class=\"vumainmenu__text--gold fas fa-caret-down\"></span>\n                            </a>\n                            <ul class=\"dropdown-pane dropdown-menu\">\n                                <li><a href=\"https://www.library.vanderbilt.edu/about\">About the Heard Libraries</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/about/accessanduse.php\">Access and Use</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/about/guidetolibraries.php\">Guide to Libraries</a></li>\n                                <li><a href=\"https://events.vanderbilt.edu/view/month/tags/library\">Library Events Calendar</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/policies\">Library Policies</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/about/programs.php\">Library Programs</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/staff\">Staff and Departments</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/giving\">Support the Libraries</a></li>\n                                <li><a href=\"https://www.vanderbilt.edu/coronavirus/fall-2020/fall-2020-visitors-and-suppliers/\">Visitor Information</a></li>\n                            </ul>\n                        </li>\n\n                        <li class=\"services dropdown\">\n                            <a href=\"#\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"dropdown\" class=\"vumainmenu__dropdown dropdown-toggle\">\n                                Services <span class=\"vumainmenu__text--gold fas fa-caret-down\"></span>\n                            </a>\n                            <ul class=\"dropdown-pane dropdown-menu\">\n                                <li><a href=\"https://www.library.vanderbilt.edu/services/reserves.php\">Course Reserves</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/disc\">Digital Scholarship</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/alumni\">For Alumni</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/faculty-staff\">For Faculty and Staff</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/students\">For Students</a></li>\n                                <li><a href=\"https://illiad.library.vanderbilt.edu/illiad/logon/\">Interlibrary Loan</a></li>\n                                <li><a href=\"https://catalog.library.vanderbilt.edu/discovery/account?vid=01VAN_INST:vanui\">My Account</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/services/studyrooms.php\">Study Rooms and Carrels</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/technology\">Technology</a></li>\n                            </ul>\n                        </li>\n\n                        <li class=\"research dropdown\">\n                            <a href=\"#\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"dropdown\" class=\"vumainmenu__dropdown dropdown-toggle\">\n                                Research <span class=\"vumainmenu__text--gold fas fa-caret-down\"></span>\n                            </a>\n                            <ul class=\"dropdown-pane dropdown-menu\">\n                                <li><a href=\"https://www.library.vanderbilt.edu/about/fellows\">Buchanan Library Fellows</a></li>\n                                <li><a href=\"https://researchguides.library.vanderbilt.edu/az.php\">Databases A-Z</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/exhibits\">Exhibitions</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/immersion.php\">Immersion Resources</a></li>\n                                <li><a href=\"https://ir.vanderbilt.edu\">Institutional Repository</a></li>\n                                <li><a href=\"https://catalog.library.vanderbilt.edu/discovery/jsearch?vid=01VAN_INST:vanui\">Journals</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/subject-specialists.php\">Librarians by Subject</a></li>\n                                <li><a href=\"https://catalog.library.vanderbilt.edu/discovery/search?vid=01VAN_INST:vanui\">Library Catalog</a></li>\n                                <li><a href=\"https://researchguides.library.vanderbilt.edu\">Research and Course Guides</a></li>\n                                <li><a href=\"https://tvnews.vanderbilt.edu\">Television News Archive</a></li>\n                            </ul>\n                        </li>\n\n                        <li class=\"help dropdown\">\n                            <a href=\"#\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"dropdown\" class=\"vumainmenu__dropdown dropdown-toggle\">\n                                Help <span class=\"vumainmenu__text--gold fas fa-caret-down\"></span>\n                            </a>\n                            <ul class=\"dropdown-pane dropdown-menu\">\n                                <li><a href=\"https://www.library.vanderbilt.edu/about/accessibility.php\">Accessibility Services</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/ask-librarian.php\">Ask a Librarian</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/about/contact.php\">Contact Us</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/disc/copyright.php\">Copyright</a></li>\n                                <li><a href=\"https://researchguides.library.vanderbilt.edu/search/searching_the_library_catalog\">How to Search the Catalog</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/subject-specialists.php\">Librarians by Subject</a></li>\n                                <li><a href=\"https://researchguides.library.vanderbilt.edu\">Research and Course Guides</a></li>\n                            </ul>\n                        </li>\n\n                        <li class=\"campus-libraries dropdown\">\n                            <a href=\"#\" role=\"button\" aria-haspopup=\"true\" data-toggle=\"dropdown\" class=\"vumainmenu__dropdown dropdown-toggle\">\n                                Locations <span class=\"vumainmenu__text--gold fas fa-caret-down\"></span>\n                            </a>\n                            <ul class=\"dropdown-pane dropdown-menu\">\n                                <li><a href=\"https://www.library.vanderbilt.edu/biomedical/\">Biomedical</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/central/\">Central</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/divinity/\">Divinity</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/gallery/\">Fine Arts Gallery</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/law/\">Law</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/management/\">Management</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/music/\">Music</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/peabody/\">Peabody</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/science/\">Science &amp; Engineering</a></li>\n                                <li><a href=\"https://www.library.vanderbilt.edu/specialcollections/\">Special Collections</a></li>\n                            </ul>\n                        </li>\n\n                        <li class=\"hours\">\n                            <a href=\"https://www.library.vanderbilt.edu/hours.php\">Hours</a>\n                        </li>\n\n                        <li>\n                            <a href=\"https://www.library.vanderbilt.edu/ask-librarian.php\">Ask a Librarian</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        ";
      this.appendChild(vuNav);
    }
  }]);

  return VulNavigation;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('vul-navigation', VulNavigation);

/***/ }),

/***/ "./src/css/vu-brandbar.css":
/*!*********************************!*\
  !*** ./src/css/vu-brandbar.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/vu-main-2019-header.css":
/*!*****************************************!*\
  !*** ./src/css/vu-main-2019-header.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/vul-header.css":
/*!********************************!*\
  !*** ./src/css/vul-header.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/vu-main-2019-footer.css":
/*!*****************************************!*\
  !*** ./src/css/vu-main-2019-footer.css ***!
  \*****************************************/
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

/***/ "./src/fontawesome-free-5.15.4/less/solid.less":
/*!*****************************************************!*\
  !*** ./src/fontawesome-free-5.15.4/less/solid.less ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fontawesome-free-5.15.4/less/brands.less":
/*!******************************************************!*\
  !*** ./src/fontawesome-free-5.15.4/less/brands.less ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fontawesome-free-5.15.4/less/v4-shims.less":
/*!********************************************************!*\
  !*** ./src/fontawesome-free-5.15.4/less/v4-shims.less ***!
  \********************************************************/
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
/******/ 			"/js/vul-pw-header": 0,
/******/ 			"postcss/v4-shims": 0,
/******/ 			"postcss/brands": 0,
/******/ 			"postcss/solid": 0,
/******/ 			"postcss/fontawesome": 0,
/******/ 			"postcss/bootstrap": 0,
/******/ 			"postcss/vul-footer": 0,
/******/ 			"postcss/vu-main-2019-footer": 0,
/******/ 			"postcss/vul-header": 0,
/******/ 			"postcss/vu-main-2019-header": 0,
/******/ 			"postcss/vu-brandbar": 0
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
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/js/vul-brandbar.js")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/js/vul-header.js")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/js/vul-banner.js")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/js/vul-navigation.js")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/bootstrap-3.4.1/less/bootstrap.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/fontawesome-free-5.15.4/less/fontawesome.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/fontawesome-free-5.15.4/less/solid.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/fontawesome-free-5.15.4/less/brands.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/fontawesome-free-5.15.4/less/v4-shims.less")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/css/vu-brandbar.css")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/css/vu-main-2019-header.css")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/css/vul-header.css")))
/******/ 	__webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/css/vu-main-2019-footer.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["postcss/v4-shims","postcss/brands","postcss/solid","postcss/fontawesome","postcss/bootstrap","postcss/vul-footer","postcss/vu-main-2019-footer","postcss/vul-header","postcss/vu-main-2019-header","postcss/vu-brandbar"], () => (__webpack_require__("./src/css/vul-footer.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;