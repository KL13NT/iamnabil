module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.mdx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SEO.jsx":
/*!****************************!*\
  !*** ./components/SEO.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\components\\SEO.jsx";


const hostname = 'https://iamnabil.netlify.app';
const defaultTitle = 'Blog';
const defaultDescription = 'Frontend Software Engineer, Blogger, Mentor';
const defaultOGImagePath = '/og.png';
const defaultPath = '/';

function SEO({
  title = defaultTitle,
  description = defaultDescription,
  path = defaultPath
}) {
  const ogImageUrl = `${hostname}${defaultOGImagePath}`;
  const url = `${hostname}${path}`;
  const finalTitle = title + ' | Nabil Tharwat';
  const fullDescription = `${description}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: finalTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: finalTitle,
      property: "og:title"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: "website",
      property: "og:type"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: fullDescription,
      name: "description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: fullDescription,
      property: "og:description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: url,
      property: "og:url"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: "Nabil Tharwat",
      property: "og:site_name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: ogImageUrl,
      property: "og:image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: 'image/jpeg',
      property: "og:image:type"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: ogImageUrl,
      property: "og:image:url"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: ogImageUrl,
      property: "og:image:secure_url"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: "summary_large_image",
      name: "twitter:card"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: finalTitle,
      property: "twitter:title"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: fullDescription,
      property: "twitter:description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: "@Nabil_Tharwat",
      property: "twitter:creator"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: "@Nabil_Tharwat16",
      property: "twitter:site"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      content: ogImageUrl,
      property: "twitter:image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("html", {
      lang: "en-GB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/apple-touch-icon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicon-32x32.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicon-16x16.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "manifest",
      href: "/icons/site.webmanifest"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "mask-icon",
      href: "/icons/safari-pinned-tab.svg",
      color: "#5bbad5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "shortcut icon",
      href: "/icons/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-TileColor",
      content: "#f3f7f9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-TileImage",
      content: "/icons/mstile-144x144.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "msapplication-config",
      content: "/icons/browserconfig.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "theme-color",
      content: "#ffffff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "@mdx-js/react");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SEO */ "./components/SEO.jsx");
var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\index.mdx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* @jsxRuntime classic */

/* @jsx mdx */


const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("script", {
    src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
    description: "Learn more about me",
    title: "About",
    mdxType: "SEO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    },
    __self: this
  }, `Hi there 👋`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    },
    __self: this
  }, `I'm Nabil Tharwat, a software engineer, content creator, and mentor based in Cairo, Egypt. I started coding when I was 12 with VB, and now
living in JS land. I love contributing to open source and lifting others up. Accessibility and performance are part of my eternal quest.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    },
    __self: this
  }, `Get in touch`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "mailto:nabil.tharwat@outlook.com"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    },
    __self: this
  }), `Email`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://twitter.com/Nabil_Tharwat16"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 32
    },
    __self: this
  }), `Twitter`), ` are your best channels. You can also find me on `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.linkedin.com/in/i-am-nabil"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 78
    },
    __self: this
  }), `LinkedIn`), ` and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://github.com/KL13NT"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 35
    },
    __self: this
  }), `GitHub`), `. I also have a YouTube `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.youtube.com/channel/ucdgkzbiqkepzsqff7hbrspg"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 52
    },
    __self: this
  }), `channel`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    },
    __self: this
  }, `Beyond work`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    },
    __self: this
  }, `When I'm not coding some frontend stuff I'm usually found experimenting, mentoring people new to the field, trying out new utilities on the market, blogging, going live, making videos and devlogs, or contributing to Valarium.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    className: "text-center mt-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    },
    __self: this
  }, "Made with", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", {
    "aria-label": "Heart emoji",
    role: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 2
    },
    __self: this
  }, ' ', "\u2764\uFE0F", ' '), "and Gatsby"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1keCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJob3N0bmFtZSIsImRlZmF1bHRUaXRsZSIsImRlZmF1bHREZXNjcmlwdGlvbiIsImRlZmF1bHRPR0ltYWdlUGF0aCIsImRlZmF1bHRQYXRoIiwiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJvZ0ltYWdlVXJsIiwidXJsIiwiZmluYWxUaXRsZSIsImZ1bGxEZXNjcmlwdGlvbiIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FB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Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5tZHhcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IGhvc3RuYW1lID0gJ2h0dHBzOi8vaWFtbmFiaWwubmV0bGlmeS5hcHAnXHJcblxyXG5jb25zdCBkZWZhdWx0VGl0bGUgPSAnQmxvZydcclxuY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gJ0Zyb250ZW5kIFNvZnR3YXJlIEVuZ2luZWVyLCBCbG9nZ2VyLCBNZW50b3InXHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlUGF0aCA9ICcvb2cucG5nJ1xyXG5jb25zdCBkZWZhdWx0UGF0aCA9ICcvJ1xyXG5cclxuZnVuY3Rpb24gU0VPKHtcclxuXHR0aXRsZSA9IGRlZmF1bHRUaXRsZSxcclxuXHRkZXNjcmlwdGlvbiA9IGRlZmF1bHREZXNjcmlwdGlvbixcclxuXHRwYXRoID0gZGVmYXVsdFBhdGhcclxufSkge1xyXG5cdGNvbnN0IG9nSW1hZ2VVcmwgPSBgJHtob3N0bmFtZX0ke2RlZmF1bHRPR0ltYWdlUGF0aH1gXHJcblx0Y29uc3QgdXJsID0gYCR7aG9zdG5hbWV9JHtwYXRofWBcclxuXHRjb25zdCBmaW5hbFRpdGxlID0gdGl0bGUgKyAnIHwgTmFiaWwgVGhhcndhdCdcclxuXHRjb25zdCBmdWxsRGVzY3JpcHRpb24gPSBgJHtkZXNjcmlwdGlvbn1gXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPntmaW5hbFRpdGxlfTwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2ZpbmFsVGl0bGV9IHByb3BlcnR5PSdvZzp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nd2Vic2l0ZScgcHJvcGVydHk9J29nOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gbmFtZT0nZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXt1cmx9IHByb3BlcnR5PSdvZzp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J05hYmlsIFRoYXJ3YXQnIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17J2ltYWdlL2pwZWcnfSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnVybCcgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIG5hbWU9J3R3aXR0ZXI6Y2FyZCc+PC9tZXRhPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0ndHdpdHRlcjp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZnVsbERlc2NyaXB0aW9ufSBwcm9wZXJ0eT0ndHdpdHRlcjpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nQE5hYmlsX1RoYXJ3YXQnIHByb3BlcnR5PSd0d2l0dGVyOmNyZWF0b3InIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0MTYnIHByb3BlcnR5PSd0d2l0dGVyOnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSd0d2l0dGVyOmltYWdlJyAvPlxyXG5cdFx0XHQ8aHRtbCBsYW5nPSdlbi1HQicgLz5cclxuXHJcblx0XHRcdHsvKiBJQ09OUyAqL31cclxuXHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPSdhcHBsZS10b3VjaC1pY29uJ1xyXG5cdFx0XHRcdHNpemVzPScxODB4MTgwJ1xyXG5cdFx0XHRcdGhyZWY9Jy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZydcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9J2ljb24nXHJcblx0XHRcdFx0dHlwZT0naW1hZ2UvcG5nJ1xyXG5cdFx0XHRcdHNpemVzPSczMngzMidcclxuXHRcdFx0XHRocmVmPScvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPSdpY29uJ1xyXG5cdFx0XHRcdHR5cGU9J2ltYWdlL3BuZydcclxuXHRcdFx0XHRzaXplcz0nMTZ4MTYnXHJcblx0XHRcdFx0aHJlZj0nL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nJ1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvaWNvbnMvc2l0ZS53ZWJtYW5pZmVzdCcgLz5cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9J21hc2staWNvbidcclxuXHRcdFx0XHRocmVmPScvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ1xyXG5cdFx0XHRcdGNvbG9yPScjNWJiYWQ1J1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9pY29ucy9mYXZpY29uLmljbycgLz5cclxuXHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyNmM2Y3ZjknIC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0bmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD0nL2ljb25zL21zdGlsZS0xNDR4MTQ0LnBuZydcclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1jb25maWcnIGNvbnRlbnQ9Jy9pY29ucy9icm93c2VyY29uZmlnLnhtbCcgLz5cclxuXHRcdFx0PG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZmZmZmYnIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU9cclxuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IFNFTyBmcm9tICcuLi9jb21wb25lbnRzL1NFTydcblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vaWRlbnRpdHkubmV0bGlmeS5jb20vdjEvbmV0bGlmeS1pZGVudGl0eS13aWRnZXQuanMnPjwvc2NyaXB0PlxuICAgIDxTRU8gZGVzY3JpcHRpb249J0xlYXJuIG1vcmUgYWJvdXQgbWUnIHRpdGxlPSdBYm91dCcgbWR4VHlwZT1cIlNFT1wiIC8+XG4gICAgPGgxPntgSGkgdGhlcmUg8J+Ri2B9PC9oMT5cbiAgICA8cD57YEknbSBOYWJpbCBUaGFyd2F0LCBhIHNvZnR3YXJlIGVuZ2luZWVyLCBjb250ZW50IGNyZWF0b3IsIGFuZCBtZW50b3IgYmFzZWQgaW4gQ2Fpcm8sIEVneXB0LiBJIHN0YXJ0ZWQgY29kaW5nIHdoZW4gSSB3YXMgMTIgd2l0aCBWQiwgYW5kIG5vd1xubGl2aW5nIGluIEpTIGxhbmQuIEkgbG92ZSBjb250cmlidXRpbmcgdG8gb3BlbiBzb3VyY2UgYW5kIGxpZnRpbmcgb3RoZXJzIHVwLiBBY2Nlc3NpYmlsaXR5IGFuZCBwZXJmb3JtYW5jZSBhcmUgcGFydCBvZiBteSBldGVybmFsIHF1ZXN0LmB9PC9wPlxuICAgIDxoMz57YEdldCBpbiB0b3VjaGB9PC9oMz5cbiAgICA8cD48YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIm1haWx0bzpuYWJpbC50aGFyd2F0QG91dGxvb2suY29tXCJcbiAgICAgIH19PntgRW1haWxgfTwvYT57YCBhbmQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vdHdpdHRlci5jb20vTmFiaWxfVGhhcndhdDE2XCJcbiAgICAgIH19PntgVHdpdHRlcmB9PC9hPntgIGFyZSB5b3VyIGJlc3QgY2hhbm5lbHMuIFlvdSBjYW4gYWxzbyBmaW5kIG1lIG9uIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaS1hbS1uYWJpbFwiXG4gICAgICB9fT57YExpbmtlZEluYH08L2E+e2AgYW5kIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vS0wxM05UXCJcbiAgICAgIH19PntgR2l0SHViYH08L2E+e2AuIEkgYWxzbyBoYXZlIGEgWW91VHViZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC91Y2Rna3piaXFrZXB6c3FmZjdoYnJzcGdcIlxuICAgICAgfX0+e2BjaGFubmVsYH08L2E+e2AuYH08L3A+XG4gICAgPGgzPntgQmV5b25kIHdvcmtgfTwvaDM+XG4gICAgPHA+e2BXaGVuIEknbSBub3QgY29kaW5nIHNvbWUgZnJvbnRlbmQgc3R1ZmYgSSdtIHVzdWFsbHkgZm91bmQgZXhwZXJpbWVudGluZywgbWVudG9yaW5nIHBlb3BsZSBuZXcgdG8gdGhlIGZpZWxkLCB0cnlpbmcgb3V0IG5ldyB1dGlsaXRpZXMgb24gdGhlIG1hcmtldCwgYmxvZ2dpbmcsIGdvaW5nIGxpdmUsIG1ha2luZyB2aWRlb3MgYW5kIGRldmxvZ3MsIG9yIGNvbnRyaWJ1dGluZyB0byBWYWxhcml1bS5gfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyIG10LTEyJz5cblx0TWFkZSB3aXRoXG5cdDxzcGFuIGFyaWEtbGFiZWw9J0hlYXJ0IGVtb2ppJyByb2xlPSdpbWcnPlxuXHRcdHsnICd9XG5cdFx04p2k77iPeycgJ31cblx0PC9zcGFuPlxuXHRhbmQgR2F0c2J5XG4gICAgPC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=