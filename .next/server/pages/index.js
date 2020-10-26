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
  }, `I'm Nabil Tharwat, a software engineer, content creator, and mentor based in Cairo, Egypt. I started coding when I was 12 with VB, and now living in JS land. I love contributing to open source. Accessibility and performance are part of my eternal quest.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    },
    __self: this
  }, `Get in touch`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 25,
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
      lineNumber: 27,
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
      lineNumber: 29,
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
      lineNumber: 31,
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
      lineNumber: 33,
      columnNumber: 52
    },
    __self: this
  }), `channel`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    },
    __self: this
  }, `Beyond work`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    },
    __self: this
  }, `When I'm not coding some frontend stuff I'm usually found experimenting, mentoring people new to the field, trying out new utilities on the market, blogging, going live, making videos and devlogs, or contributing to Valarium.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    className: "text-center mt-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    },
    __self: this
  }, "Made with", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("span", {
    "aria-label": "Heart emoji",
    role: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1keCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJob3N0bmFtZSIsImRlZmF1bHRUaXRsZSIsImRlZmF1bHREZXNjcmlwdGlvbiIsImRlZmF1bHRPR0ltYWdlUGF0aCIsImRlZmF1bHRQYXRoIiwiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJvZ0ltYWdlVXJsIiwidXJsIiwiZmluYWxUaXRsZSIsImZ1bGxEZXNjcmlwdGlvbiIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FB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QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgubWR4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBob3N0bmFtZSA9ICdodHRwczovL2lhbW5hYmlsLm5ldGxpZnkuYXBwJ1xyXG5cclxuY29uc3QgZGVmYXVsdFRpdGxlID0gJ0Jsb2cnXHJcbmNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9ICdGcm9udGVuZCBTb2Z0d2FyZSBFbmdpbmVlciwgQmxvZ2dlciwgTWVudG9yJ1xyXG5jb25zdCBkZWZhdWx0T0dJbWFnZVBhdGggPSAnL29nLnBuZydcclxuY29uc3QgZGVmYXVsdFBhdGggPSAnLydcclxuXHJcbmZ1bmN0aW9uIFNFTyh7XHJcblx0dGl0bGUgPSBkZWZhdWx0VGl0bGUsXHJcblx0ZGVzY3JpcHRpb24gPSBkZWZhdWx0RGVzY3JpcHRpb24sXHJcblx0cGF0aCA9IGRlZmF1bHRQYXRoXHJcbn0pIHtcclxuXHRjb25zdCBvZ0ltYWdlVXJsID0gYCR7aG9zdG5hbWV9JHtkZWZhdWx0T0dJbWFnZVBhdGh9YFxyXG5cdGNvbnN0IHVybCA9IGAke2hvc3RuYW1lfSR7cGF0aH1gXHJcblx0Y29uc3QgZmluYWxUaXRsZSA9IHRpdGxlICsgJyB8IE5hYmlsIFRoYXJ3YXQnXHJcblx0Y29uc3QgZnVsbERlc2NyaXB0aW9uID0gYCR7ZGVzY3JpcHRpb259YFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT57ZmluYWxUaXRsZX08L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0nb2c6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3dlYnNpdGUnIHByb3BlcnR5PSdvZzp0eXBlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IG5hbWU9J2Rlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17dXJsfSBwcm9wZXJ0eT0nb2c6dXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdOYWJpbCBUaGFyd2F0JyBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9eydpbWFnZS9qcGVnJ30gcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyBuYW1lPSd0d2l0dGVyOmNhcmQnPjwvbWV0YT5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZmluYWxUaXRsZX0gcHJvcGVydHk9J3R3aXR0ZXI6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0JyBwcm9wZXJ0eT0ndHdpdHRlcjpjcmVhdG9yJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdATmFiaWxfVGhhcndhdDE2JyBwcm9wZXJ0eT0ndHdpdHRlcjpzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0ndHdpdHRlcjppbWFnZScgLz5cclxuXHRcdFx0PGh0bWwgbGFuZz0nZW4tR0InIC8+XHJcblxyXG5cdFx0XHR7LyogSUNPTlMgKi99XHJcblxyXG5cdFx0XHQ8bGlua1xyXG5cdFx0XHRcdHJlbD0nYXBwbGUtdG91Y2gtaWNvbidcclxuXHRcdFx0XHRzaXplcz0nMTgweDE4MCdcclxuXHRcdFx0XHRocmVmPScvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPSdpY29uJ1xyXG5cdFx0XHRcdHR5cGU9J2ltYWdlL3BuZydcclxuXHRcdFx0XHRzaXplcz0nMzJ4MzInXHJcblx0XHRcdFx0aHJlZj0nL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nJ1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bGlua1xyXG5cdFx0XHRcdHJlbD0naWNvbidcclxuXHRcdFx0XHR0eXBlPSdpbWFnZS9wbmcnXHJcblx0XHRcdFx0c2l6ZXM9JzE2eDE2J1xyXG5cdFx0XHRcdGhyZWY9Jy9pY29ucy9mYXZpY29uLTE2eDE2LnBuZydcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL2ljb25zL3NpdGUud2VibWFuaWZlc3QnIC8+XHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPSdtYXNrLWljb24nXHJcblx0XHRcdFx0aHJlZj0nL2ljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2ZydcclxuXHRcdFx0XHRjb2xvcj0nIzViYmFkNSdcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGxpbmsgcmVsPSdzaG9ydGN1dCBpY29uJyBocmVmPScvaWNvbnMvZmF2aWNvbi5pY28nIC8+XHJcblx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUNvbG9yJyBjb250ZW50PScjZjNmN2Y5JyAvPlxyXG5cdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdG5hbWU9J21zYXBwbGljYXRpb24tVGlsZUltYWdlJ1xyXG5cdFx0XHRcdGNvbnRlbnQ9Jy9pY29ucy9tc3RpbGUtMTQ0eDE0NC5wbmcnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxtZXRhIG5hbWU9J21zYXBwbGljYXRpb24tY29uZmlnJyBjb250ZW50PScvaWNvbnMvYnJvd3NlcmNvbmZpZy54bWwnIC8+XHJcblx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxyXG5cdFx0PC9IZWFkPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU0VPXHJcbiIsIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBTRU8gZnJvbSAnLi4vY29tcG9uZW50cy9TRU8nXG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxzY3JpcHQgc3JjPSdodHRwczovL2lkZW50aXR5Lm5ldGxpZnkuY29tL3YxL25ldGxpZnktaWRlbnRpdHktd2lkZ2V0LmpzJz48L3NjcmlwdD5cbiAgICA8U0VPIGRlc2NyaXB0aW9uPSdMZWFybiBtb3JlIGFib3V0IG1lJyB0aXRsZT0nQWJvdXQnIG1keFR5cGU9XCJTRU9cIiAvPlxuICAgIDxoMT57YEhpIHRoZXJlIPCfkYtgfTwvaDE+XG4gICAgPHA+e2BJJ20gTmFiaWwgVGhhcndhdCwgYSBzb2Z0d2FyZSBlbmdpbmVlciwgY29udGVudCBjcmVhdG9yLCBhbmQgbWVudG9yIGJhc2VkIGluIENhaXJvLCBFZ3lwdC4gSSBzdGFydGVkIGNvZGluZyB3aGVuIEkgd2FzIDEyIHdpdGggVkIsIGFuZCBub3cgbGl2aW5nIGluIEpTIGxhbmQuIEkgbG92ZSBjb250cmlidXRpbmcgdG8gb3BlbiBzb3VyY2UuIEFjY2Vzc2liaWxpdHkgYW5kIHBlcmZvcm1hbmNlIGFyZSBwYXJ0IG9mIG15IGV0ZXJuYWwgcXVlc3QuYH08L3A+XG4gICAgPGgzPntgR2V0IGluIHRvdWNoYH08L2gzPlxuICAgIDxwPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwibWFpbHRvOm5hYmlsLnRoYXJ3YXRAb3V0bG9vay5jb21cIlxuICAgICAgfX0+e2BFbWFpbGB9PC9hPntgIGFuZCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9OYWJpbF9UaGFyd2F0MTZcIlxuICAgICAgfX0+e2BUd2l0dGVyYH08L2E+e2AgYXJlIHlvdXIgYmVzdCBjaGFubmVscy4gWW91IGNhbiBhbHNvIGZpbmQgbWUgb24gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pLWFtLW5hYmlsXCJcbiAgICAgIH19PntgTGlua2VkSW5gfTwvYT57YCBhbmQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LTDEzTlRcIlxuICAgICAgfX0+e2BHaXRIdWJgfTwvYT57YC4gSSBhbHNvIGhhdmUgYSBZb3VUdWJlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL3VjZGdremJpcWtlcHpzcWZmN2hicnNwZ1wiXG4gICAgICB9fT57YGNoYW5uZWxgfTwvYT57YC5gfTwvcD5cbiAgICA8aDM+e2BCZXlvbmQgd29ya2B9PC9oMz5cbiAgICA8cD57YFdoZW4gSSdtIG5vdCBjb2Rpbmcgc29tZSBmcm9udGVuZCBzdHVmZiBJJ20gdXN1YWxseSBmb3VuZCBleHBlcmltZW50aW5nLCBtZW50b3JpbmcgcGVvcGxlIG5ldyB0byB0aGUgZmllbGQsIHRyeWluZyBvdXQgbmV3IHV0aWxpdGllcyBvbiB0aGUgbWFya2V0LCBibG9nZ2luZywgZ29pbmcgbGl2ZSwgbWFraW5nIHZpZGVvcyBhbmQgZGV2bG9ncywgb3IgY29udHJpYnV0aW5nIHRvIFZhbGFyaXVtLmB9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXQtMTInPlxuXHRNYWRlIHdpdGhcblx0PHNwYW4gYXJpYS1sYWJlbD0nSGVhcnQgZW1vamknIHJvbGU9J2ltZyc+XG5cdFx0eycgJ31cblx0XHTinaTvuI97JyAnfVxuXHQ8L3NwYW4+XG5cdGFuZCBHYXRzYnlcbiAgICA8L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWR4LWpzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==