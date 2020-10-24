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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects.mdx");
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
const defaultDescription = 'Front-End Engineer, Blogger, Mentor';
const defaultOGImagePath = '/oggeneral.png';
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
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./pages/projects.mdx":
/*!****************************!*\
  !*** ./pages/projects.mdx ***!
  \****************************/
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
var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\projects.mdx";

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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
    description: "My fun projects",
    path: "/projects",
    title: "Projects",
    mdxType: "SEO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    },
    __self: this
  }, `Useless is not worthless 🚀`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    },
    __self: this
  }, `Most of my projects are open source and free to use. Some of these don't
have any other purpose than exploration and experimenting.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://pollu.vercel.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 2
    },
    __self: this
  }, "Pollu")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    },
    __self: this
  }, `An open-source anonymous straw poll platform with privacy in mind.
Built with StorybookJS, NextJS, TailwindCSS, Vercel Serverless
Functions, ExpressJS, Mongoose, and Mongo Cloud over the weekend.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 2
    },
    __self: this
  }, "My Blog")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    },
    __self: this
  }, `This very website. Built with GatsbyJS, React, and Sass. I don't have much to say about it except that I designed and developed it all from the ground up, and maintain it from time to time. Oh, I hooked it up to NetlifyCMS recently too! A much better blogging workflow if you ask me. 😄`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    },
    __self: this
  }, "ValariumBot"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    },
    __self: this
  }, `A discord bot built using TypeScript, NodeJS, MongoDB, and Redis.
Deployed on Heroku and connected to Mongo Cloud. Uses `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://github.com/tensorflow/tfjs-models/tree/master/toxicity"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 57
    },
    __self: this
  }), `TensorFlow's Toxicity Classifier`), ` to prevent toxic behaviour, and has a fully functional levels system based on Voice and Text activity.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://github.com/KL13NT/discord-utils",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 2
    },
    __self: this
  }, "Discord Utils")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    },
    __self: this
  }, `A useful collection of utilities that acceelerate NodeJS discord bot development. Built with TypeScript, versioned with `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://github.com/conventional-changelog/standard-version"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 132
    },
    __self: this
  }), `standard version`), `. This is extracted from ValariumBot and currently the bot depends on it.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://auditmyday.netlify.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 2
    },
    __self: this
  }, "AuditMyDay")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    },
    __self: this
  }, `A simple and efficient time audit with cloud sync support. Allows you to create audits and records without having to worry about organising or moving stuff around. Built with React, Firebase Auth, and Firestore. For the full list of technologies used refer to this `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.facebook.com/groups/egyptian.geeks/permalink/3130397693666584"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 277
    },
    __self: this
  }), `Facebook post`), `.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://valarium.netlify.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 2
    },
    __self: this
  }, "Valarium")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    },
    __self: this
  }, `The official website for the online community that I founded. Has a blog built with GatsbyJS and Sass, and hooked up to NetlifyCMS.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://KL13NT.github.io/ally-reads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 2
    },
    __self: this
  }, "Ally Reads!")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    },
    __self: this
  }, `An accessibility browser extension made just for you. Allows you to change how text is displayed in articles and social media posts to make them more accessible, and every thing it does is 100% customisable.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", {
    href: "https://nabdjs.netlify.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 2
    },
    __self: this
  }, "NabdJS")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    },
    __self: this
  }, `An Arabic programming language created using JavaScript following the principles of BASIC. AST-based and has support for simple types such as numbers and strings, as well as variables, globals and scoped. Supports functions in BASIC syntax and passes-by-reference, and them delicious # code comments.`));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2plY3RzLm1keCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJob3N0bmFtZSIsImRlZmF1bHRUaXRsZSIsImRlZmF1bHREZXNjcmlwdGlvbiIsImRlZmF1bHRPR0ltYWdlUGF0aCIsImRlZmF1bHRQYXRoIiwiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJvZ0ltYWdlVXJsIiwidXJsIiwiZmluYWxUaXRsZSIsImZ1bGxEZXNjcmlwdGlvbiIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUcsOEJBQWpCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLE1BQXJCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcscUNBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsZ0JBQTNCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCOztBQUVBLFNBQVNDLEdBQVQsQ0FBYTtBQUNaQyxPQUFLLEdBQUdMLFlBREk7QUFFWk0sYUFBVyxHQUFHTCxrQkFGRjtBQUdaTSxNQUFJLEdBQUdKO0FBSEssQ0FBYixFQUlHO0FBQ0YsUUFBTUssVUFBVSxHQUFJLEdBQUVULFFBQVMsR0FBRUcsa0JBQW1CLEVBQXBEO0FBQ0EsUUFBTU8sR0FBRyxHQUFJLEdBQUVWLFFBQVMsR0FBRVEsSUFBSyxFQUEvQjtBQUNBLFFBQU1HLFVBQVUsR0FBR0wsS0FBSyxHQUFHLGtCQUEzQjtBQUNBLFFBQU1NLGVBQWUsR0FBSSxHQUFFTCxXQUFZLEVBQXZDO0FBRUEsc0JBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDQztBQUFBLGdCQUFRSTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQU0sYUFBTyxFQUFFQSxVQUFmO0FBQTJCLGNBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFHQztBQUFNLGFBQU8sRUFBQyxTQUFkO0FBQXdCLGNBQVEsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQsZUFJQztBQUFNLGFBQU8sRUFBRUMsZUFBZjtBQUFnQyxVQUFJLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBS0M7QUFBTSxhQUFPLEVBQUVBLGVBQWY7QUFBZ0MsY0FBUSxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQU0sYUFBTyxFQUFFRixHQUFmO0FBQW9CLGNBQVEsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPQztBQUFNLGFBQU8sRUFBQyxlQUFkO0FBQThCLGNBQVEsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFNLGFBQU8sRUFBRUQsVUFBZjtBQUEyQixjQUFRLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBTSxhQUFPLEVBQUUsWUFBZjtBQUE2QixjQUFRLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBVUM7QUFBTSxhQUFPLEVBQUVBLFVBQWY7QUFBMkIsY0FBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRCxlQVdDO0FBQU0sYUFBTyxFQUFFQSxVQUFmO0FBQTJCLGNBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEQsZUFZQztBQUFNLGFBQU8sRUFBQyxxQkFBZDtBQUFvQyxVQUFJLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpELGVBYUM7QUFBTSxhQUFPLEVBQUVFLFVBQWY7QUFBMkIsY0FBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRCxlQWNDO0FBQU0sYUFBTyxFQUFFQyxlQUFmO0FBQWdDLGNBQVEsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQsZUFlQztBQUFNLGFBQU8sRUFBQyxnQkFBZDtBQUErQixjQUFRLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZELGVBZ0JDO0FBQU0sYUFBTyxFQUFDLGtCQUFkO0FBQWlDLGNBQVEsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJELGVBaUJDO0FBQU0sYUFBTyxFQUFFSCxVQUFmO0FBQTJCLGNBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJELGVBa0JDO0FBQU0sVUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNCQTs7QUFFY0osa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFHQSxNQUFNUSxXQUFXLEdBQUcsRUFBcEI7QUFHQSxNQUFNQyxTQUFTLEdBQUcsU0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUhnQztBQUNqQ0M7QUFEaUMsR0FHaEM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxnREFBZUosV0FBZixHQUFnQ0ksS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVMLDBEQUFDLHVEQUFEO0FBQUssZUFBVyxFQUFDLGlCQUFqQjtBQUFtQyxRQUFJLEVBQUMsV0FBeEM7QUFBb0QsU0FBSyxFQUFDLFVBQTFEO0FBQXFFLFdBQU8sRUFBQyxLQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkssRUFHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sNkJBQU4sQ0FISyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUNULDJEQURJLENBSkssRUFNTDtBQUFHLFFBQUksRUFBQywwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURHLENBTkssRUFTTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFDVDtBQUNBLGtFQUZJLENBVEssRUFZTDtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREcsQ0FaSyxFQWVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxnU0FBTCxDQWZLLEVBZ0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJLLEVBaUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUNULHVEQURJLEVBQ29EO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDdEUsWUFBUTtBQUQ4RCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRTdDLGtDQUY2QyxDQURwRCxFQUcrQyx5R0FIL0MsQ0FqQkssRUFxQkw7QUFBRyxRQUFJLEVBQUMseUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREcsQ0FyQkssRUF3Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLDBIQUFMLEVBQStIO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDakosWUFBUTtBQUR5SSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRXhILGtCQUZ3SCxDQUEvSCxFQUUrQiwyRUFGL0IsQ0F4QkssRUEyQkw7QUFBRyxRQUFJLEVBQUMsZ0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREcsQ0EzQkssRUE4Qkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLDJRQUFMLEVBQWdSO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDbFMsWUFBUTtBQUQwUixHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRXpRLGVBRnlRLENBQWhSLEVBRTRCLEdBRjVCLENBOUJLLEVBaUNMO0FBQUcsUUFBSSxFQUFDLDhCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURHLENBakNLLEVBb0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxxSUFBTCxDQXBDSyxFQXFDTDtBQUFHLFFBQUksRUFBQyxxQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxDQXJDSyxFQXdDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssaU5BQUwsQ0F4Q0ssRUF5Q0w7QUFBRyxRQUFJLEVBQUMsNEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERyxDQXpDSyxFQTRDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssOFNBQUwsQ0E1Q0ssQ0FBUDtBQThDRDtBQUVEO0FBQ0FELFVBQVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1QixDOzs7Ozs7Ozs7OztBQ2xFQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvamVjdHMubWR4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBob3N0bmFtZSA9ICdodHRwczovL2lhbW5hYmlsLm5ldGxpZnkuYXBwJ1xyXG5cclxuY29uc3QgZGVmYXVsdFRpdGxlID0gJ0Jsb2cnXHJcbmNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9ICdGcm9udC1FbmQgRW5naW5lZXIsIEJsb2dnZXIsIE1lbnRvcidcclxuY29uc3QgZGVmYXVsdE9HSW1hZ2VQYXRoID0gJy9vZ2dlbmVyYWwucG5nJ1xyXG5jb25zdCBkZWZhdWx0UGF0aCA9ICcvJ1xyXG5cclxuZnVuY3Rpb24gU0VPKHtcclxuXHR0aXRsZSA9IGRlZmF1bHRUaXRsZSxcclxuXHRkZXNjcmlwdGlvbiA9IGRlZmF1bHREZXNjcmlwdGlvbixcclxuXHRwYXRoID0gZGVmYXVsdFBhdGhcclxufSkge1xyXG5cdGNvbnN0IG9nSW1hZ2VVcmwgPSBgJHtob3N0bmFtZX0ke2RlZmF1bHRPR0ltYWdlUGF0aH1gXHJcblx0Y29uc3QgdXJsID0gYCR7aG9zdG5hbWV9JHtwYXRofWBcclxuXHRjb25zdCBmaW5hbFRpdGxlID0gdGl0bGUgKyAnIHwgTmFiaWwgVGhhcndhdCdcclxuXHRjb25zdCBmdWxsRGVzY3JpcHRpb24gPSBgJHtkZXNjcmlwdGlvbn1gXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPntmaW5hbFRpdGxlfTwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2ZpbmFsVGl0bGV9IHByb3BlcnR5PSdvZzp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nd2Vic2l0ZScgcHJvcGVydHk9J29nOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gbmFtZT0nZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXt1cmx9IHByb3BlcnR5PSdvZzp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J05hYmlsIFRoYXJ3YXQnIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17J2ltYWdlL2pwZWcnfSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnVybCcgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIG5hbWU9J3R3aXR0ZXI6Y2FyZCc+PC9tZXRhPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0ndHdpdHRlcjp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZnVsbERlc2NyaXB0aW9ufSBwcm9wZXJ0eT0ndHdpdHRlcjpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nQE5hYmlsX1RoYXJ3YXQnIHByb3BlcnR5PSd0d2l0dGVyOmNyZWF0b3InIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0MTYnIHByb3BlcnR5PSd0d2l0dGVyOnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSd0d2l0dGVyOmltYWdlJyAvPlxyXG5cdFx0XHQ8aHRtbCBsYW5nPSdlbi1HQicgLz5cclxuXHRcdDwvSGVhZD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNFT1xyXG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgU0VPIGZyb20gJy4uL2NvbXBvbmVudHMvU0VPJ1xuXG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8U0VPIGRlc2NyaXB0aW9uPSdNeSBmdW4gcHJvamVjdHMnIHBhdGg9Jy9wcm9qZWN0cycgdGl0bGU9J1Byb2plY3RzJyBtZHhUeXBlPVwiU0VPXCIgLz5cbiAgICA8aDE+e2BVc2VsZXNzIGlzIG5vdCB3b3J0aGxlc3Mg8J+agGB9PC9oMT5cbiAgICA8cD57YE1vc3Qgb2YgbXkgcHJvamVjdHMgYXJlIG9wZW4gc291cmNlIGFuZCBmcmVlIHRvIHVzZS4gU29tZSBvZiB0aGVzZSBkb24ndFxuaGF2ZSBhbnkgb3RoZXIgcHVycG9zZSB0aGFuIGV4cGxvcmF0aW9uIGFuZCBleHBlcmltZW50aW5nLmB9PC9wPlxuICAgIDxhIGhyZWY9J2h0dHBzOi8vcG9sbHUudmVyY2VsLmFwcCc+XG5cdDxoND5Qb2xsdTwvaDQ+XG4gICAgPC9hPlxuICAgIDxwPntgQW4gb3Blbi1zb3VyY2UgYW5vbnltb3VzIHN0cmF3IHBvbGwgcGxhdGZvcm0gd2l0aCBwcml2YWN5IGluIG1pbmQuXG5CdWlsdCB3aXRoIFN0b3J5Ym9va0pTLCBOZXh0SlMsIFRhaWx3aW5kQ1NTLCBWZXJjZWwgU2VydmVybGVzc1xuRnVuY3Rpb25zLCBFeHByZXNzSlMsIE1vbmdvb3NlLCBhbmQgTW9uZ28gQ2xvdWQgb3ZlciB0aGUgd2Vla2VuZC5gfTwvcD5cbiAgICA8YSBocmVmPScvJz5cblx0PGg0Pk15IEJsb2c8L2g0PlxuICAgIDwvYT5cbiAgICA8cD57YFRoaXMgdmVyeSB3ZWJzaXRlLiBCdWlsdCB3aXRoIEdhdHNieUpTLCBSZWFjdCwgYW5kIFNhc3MuIEkgZG9uJ3QgaGF2ZSBtdWNoIHRvIHNheSBhYm91dCBpdCBleGNlcHQgdGhhdCBJIGRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgaXQgYWxsIGZyb20gdGhlIGdyb3VuZCB1cCwgYW5kIG1haW50YWluIGl0IGZyb20gdGltZSB0byB0aW1lLiBPaCwgSSBob29rZWQgaXQgdXAgdG8gTmV0bGlmeUNNUyByZWNlbnRseSB0b28hIEEgbXVjaCBiZXR0ZXIgYmxvZ2dpbmcgd29ya2Zsb3cgaWYgeW91IGFzayBtZS4g8J+YhGB9PC9wPlxuICAgIDxoND5WYWxhcml1bUJvdDwvaDQ+XG4gICAgPHA+e2BBIGRpc2NvcmQgYm90IGJ1aWx0IHVzaW5nIFR5cGVTY3JpcHQsIE5vZGVKUywgTW9uZ29EQiwgYW5kIFJlZGlzLlxuRGVwbG95ZWQgb24gSGVyb2t1IGFuZCBjb25uZWN0ZWQgdG8gTW9uZ28gQ2xvdWQuIFVzZXMgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMtbW9kZWxzL3RyZWUvbWFzdGVyL3RveGljaXR5XCJcbiAgICAgIH19PntgVGVuc29yRmxvdydzIFRveGljaXR5IENsYXNzaWZpZXJgfTwvYT57YCB0byBwcmV2ZW50IHRveGljIGJlaGF2aW91ciwgYW5kIGhhcyBhIGZ1bGx5IGZ1bmN0aW9uYWwgbGV2ZWxzIHN5c3RlbSBiYXNlZCBvbiBWb2ljZSBhbmQgVGV4dCBhY3Rpdml0eS5gfTwvcD5cbiAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vS0wxM05UL2Rpc2NvcmQtdXRpbHMnPlxuXHQ8aDQ+RGlzY29yZCBVdGlsczwvaDQ+XG4gICAgPC9hPlxuICAgIDxwPntgQSB1c2VmdWwgY29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdGhhdCBhY2NlZWxlcmF0ZSBOb2RlSlMgZGlzY29yZCBib3QgZGV2ZWxvcG1lbnQuIEJ1aWx0IHdpdGggVHlwZVNjcmlwdCwgdmVyc2lvbmVkIHdpdGggYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb252ZW50aW9uYWwtY2hhbmdlbG9nL3N0YW5kYXJkLXZlcnNpb25cIlxuICAgICAgfX0+e2BzdGFuZGFyZCB2ZXJzaW9uYH08L2E+e2AuIFRoaXMgaXMgZXh0cmFjdGVkIGZyb20gVmFsYXJpdW1Cb3QgYW5kIGN1cnJlbnRseSB0aGUgYm90IGRlcGVuZHMgb24gaXQuYH08L3A+XG4gICAgPGEgaHJlZj0naHR0cHM6Ly9hdWRpdG15ZGF5Lm5ldGxpZnkuYXBwJz5cblx0PGg0PkF1ZGl0TXlEYXk8L2g0PlxuICAgIDwvYT5cbiAgICA8cD57YEEgc2ltcGxlIGFuZCBlZmZpY2llbnQgdGltZSBhdWRpdCB3aXRoIGNsb3VkIHN5bmMgc3VwcG9ydC4gQWxsb3dzIHlvdSB0byBjcmVhdGUgYXVkaXRzIGFuZCByZWNvcmRzIHdpdGhvdXQgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IG9yZ2FuaXNpbmcgb3IgbW92aW5nIHN0dWZmIGFyb3VuZC4gQnVpbHQgd2l0aCBSZWFjdCwgRmlyZWJhc2UgQXV0aCwgYW5kIEZpcmVzdG9yZS4gRm9yIHRoZSBmdWxsIGxpc3Qgb2YgdGVjaG5vbG9naWVzIHVzZWQgcmVmZXIgdG8gdGhpcyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy9lZ3lwdGlhbi5nZWVrcy9wZXJtYWxpbmsvMzEzMDM5NzY5MzY2NjU4NFwiXG4gICAgICB9fT57YEZhY2Vib29rIHBvc3RgfTwvYT57YC5gfTwvcD5cbiAgICA8YSBocmVmPSdodHRwczovL3ZhbGFyaXVtLm5ldGxpZnkuYXBwJz5cblx0PGg0PlZhbGFyaXVtPC9oND5cbiAgICA8L2E+XG4gICAgPHA+e2BUaGUgb2ZmaWNpYWwgd2Vic2l0ZSBmb3IgdGhlIG9ubGluZSBjb21tdW5pdHkgdGhhdCBJIGZvdW5kZWQuIEhhcyBhIGJsb2cgYnVpbHQgd2l0aCBHYXRzYnlKUyBhbmQgU2FzcywgYW5kIGhvb2tlZCB1cCB0byBOZXRsaWZ5Q01TLmB9PC9wPlxuICAgIDxhIGhyZWY9J2h0dHBzOi8vS0wxM05ULmdpdGh1Yi5pby9hbGx5LXJlYWRzJz5cblx0PGg0PkFsbHkgUmVhZHMhPC9oND5cbiAgICA8L2E+XG4gICAgPHA+e2BBbiBhY2Nlc3NpYmlsaXR5IGJyb3dzZXIgZXh0ZW5zaW9uIG1hZGUganVzdCBmb3IgeW91LiBBbGxvd3MgeW91IHRvIGNoYW5nZSBob3cgdGV4dCBpcyBkaXNwbGF5ZWQgaW4gYXJ0aWNsZXMgYW5kIHNvY2lhbCBtZWRpYSBwb3N0cyB0byBtYWtlIHRoZW0gbW9yZSBhY2Nlc3NpYmxlLCBhbmQgZXZlcnkgdGhpbmcgaXQgZG9lcyBpcyAxMDAlIGN1c3RvbWlzYWJsZS5gfTwvcD5cbiAgICA8YSBocmVmPSdodHRwczovL25hYmRqcy5uZXRsaWZ5LmFwcCc+XG5cdDxoND5OYWJkSlM8L2g0PlxuICAgIDwvYT5cbiAgICA8cD57YEFuIEFyYWJpYyBwcm9ncmFtbWluZyBsYW5ndWFnZSBjcmVhdGVkIHVzaW5nIEphdmFTY3JpcHQgZm9sbG93aW5nIHRoZSBwcmluY2lwbGVzIG9mIEJBU0lDLiBBU1QtYmFzZWQgYW5kIGhhcyBzdXBwb3J0IGZvciBzaW1wbGUgdHlwZXMgc3VjaCBhcyBudW1iZXJzIGFuZCBzdHJpbmdzLCBhcyB3ZWxsIGFzIHZhcmlhYmxlcywgZ2xvYmFscyBhbmQgc2NvcGVkLiBTdXBwb3J0cyBmdW5jdGlvbnMgaW4gQkFTSUMgc3ludGF4IGFuZCBwYXNzZXMtYnktcmVmZXJlbmNlLCBhbmQgdGhlbSBkZWxpY2lvdXMgIyBjb2RlIGNvbW1lbnRzLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=