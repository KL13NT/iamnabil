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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/uses.mdx");
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

/***/ "./pages/uses.mdx":
/*!************************!*\
  !*** ./pages/uses.mdx ***!
  \************************/
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
var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\uses.mdx";

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
    path: "/toolset",
    title: "Toolset",
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
  }, `Work and Experiments`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    },
    __self: this
  }, `This is a list of all the tools I'm actively using, have used before, or have learned but haven't had the chance to use in a real world project yet. I currently have a thing for TypeScript 😀.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    },
    __self: this
  }, `JavaScript Utilities`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    },
    __self: this
  }, `Lodash, Underscore, and jQuery. Don't use them anymore, the language has grown enough.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    },
    __self: this
  }, `CSS Frameworks/Libraries`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    },
    __self: this
  }, `Skeleton, Semantic UI, Bootstrap 4, Foundation, and Materialize. Haven't really used them much.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    },
    __self: this
  }, `Templating Engines`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    },
    __self: this
  }, `Pug ❤️, Slim, and Handlebars. Mainly for small projects.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    },
    __self: this
  }, `Preprocessors`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    },
    __self: this
  }, `Sass, SCSS, Stylus, and PostCSS. I don't know where to put CSSModules but I use it all the time so 🤷‍♂.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    },
    __self: this
  }, `UI Frameworks and State Management`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    },
    __self: this
  }, `React ❤️, Redux, and messed around with Vue just a tad bit.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    },
    __self: this
  }, `CSS-in-JS`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    },
    __self: this
  }, `Glamorous/Emotion, and Styled Components. Not a fan of CSS-in-JS
though.🙅`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    },
    __self: this
  }, `Build Tools and Transpilers`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    },
    __self: this
  }, `Babel, Webpack ❤️, Gulp.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    },
    __self: this
  }, `Databases and Cache`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    },
    __self: this
  }, `MongoDB ❤️, Firebase Firestore, Redis.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    },
    __self: this
  }, `Server-Side and Serverless Technologies`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    },
    __self: this
  }, `Mongoose, NodeJS, Express, GraphQL, Firebase Functions, and SocketIO.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    },
    __self: this
  }, `Static Site Generators and CMS`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    },
    __self: this
  }, `GatsbyJS, NetlifyCMS`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    },
    __self: this
  }, `Deployment, and CI/CD`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    },
    __self: this
  }, `GatsbyJS, Heroku, Netlify ❤️, Firebase, Git/GitHub, and TravisCI.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    },
    __self: this
  }, `Testing`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    },
    __self: this
  }, `Jest ❤️, Enzyme, and Cypress.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    },
    __self: this
  }, `Design and UI/UX Tools`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    },
    __self: this
  }, `Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma ❤️, and Zeplin.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    },
    __self: this
  }, `Development Environment`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    },
    __self: this
  }, `This is my development environment setup. Tools I use to be productive, all around.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    },
    __self: this
  }, `Editor + Terminal 👨‍💻`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://code.visualstudio.com/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 27
    },
    __self: this
  }), `Visual Studio Code`), ` is my current editor. I switched to it back in 2018.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    },
    __self: this
  }, `I'm using `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 41
    },
    __self: this
  }), `Shades of Purple`), ` as my main theme and sometimes switch to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://marketplace.visualstudio.com/items?itemName=Hyzeta.vscode-theme-github-light"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 82
    },
    __self: this
  }), `GitHub Light`), `. My favourite fonts are Space Mono and FiraCode, currently using the former.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    },
    __self: this
  }, `Firefox is my main, and I use Chrome for testing sometimes.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://cmder.net/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    },
    __self: this
  }), `Cmder`), ` is my terminal of choice with custom theme and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://github.com/AmrEldib/cmder-powerline-prompt"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 77
    },
    __self: this
  }), `integrations`), `.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    },
    __self: this
  }, `Productivity 💪`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://www.notion.so/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 27
    },
    __self: this
  }), `Notion`), ` is my main editorial app. Blog post drafts, to-do, and channel-related stuff.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://trello.com/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 27
    },
    __self: this
  }), `Trello`), ` for project management.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    },
    __self: this
  }, `As for time-tracking, I use a tool that I built myself called `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "li"
  }, {
    "href": "https://auditmyday.netlify.app/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 93
    },
    __self: this
  }), `AuditMyDay`), `.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    },
    __self: this
  }, `Anything else? Probably have a bash/node script for it.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    },
    __self: this
  }, `Recording + Editing 📹`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    },
    __self: this
  }, `I mainly use OBS to record any and all videos, Vegas Pro 17 as my main video editing software, and sometimes dabble with Kdenlive, an open source editing software. I also use Figma as my main website prototype design tool and Photoshop on the side.`));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXMubWR4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtZHgtanMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhvc3RuYW1lIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdE9HSW1hZ2VQYXRoIiwiZGVmYXVsdFBhdGgiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGF0aCIsIm9nSW1hZ2VVcmwiLCJ1cmwiLCJmaW5hbFRpdGxlIiwiZnVsbERlc2NyaXB0aW9uIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFD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LEVBQUM7QUFBZCxLQUF1QjtBQUN2QyxZQUFRO0FBRCtCLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFYixRQUZhLENBQXBCLEVBRXFCLDBCQUZyQixDQUpGLEVBT0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCLGdFQUF0QixFQUFzRjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXVCO0FBQ3pHLFlBQVE7QUFEaUcsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUUvRSxZQUYrRSxDQUF0RixFQUV5QixHQUZ6QixDQVBGLENBcERLLEVBK0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyx5REFBTCxDQS9ESyxFQWdFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sd0JBQU4sQ0FoRUssRUFpRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLDBQQUFMLENBakVLLENBQVA7QUFtRUQ7QUFFRDtBQUNBRCxVQUFVLENBQUNHLGNBQVgsR0FBNEIsSUFBNUIsQzs7Ozs7Ozs7Ozs7QUN2RkEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvdXNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlcy5tZHhcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IGhvc3RuYW1lID0gJ2h0dHBzOi8vaWFtbmFiaWwubmV0bGlmeS5hcHAnXHJcblxyXG5jb25zdCBkZWZhdWx0VGl0bGUgPSAnQmxvZydcclxuY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gJ0Zyb250ZW5kIFNvZnR3YXJlIEVuZ2luZWVyLCBCbG9nZ2VyLCBNZW50b3InXHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlUGF0aCA9ICcvb2cucG5nJ1xyXG5jb25zdCBkZWZhdWx0UGF0aCA9ICcvJ1xyXG5cclxuZnVuY3Rpb24gU0VPKHtcclxuXHR0aXRsZSA9IGRlZmF1bHRUaXRsZSxcclxuXHRkZXNjcmlwdGlvbiA9IGRlZmF1bHREZXNjcmlwdGlvbixcclxuXHRwYXRoID0gZGVmYXVsdFBhdGhcclxufSkge1xyXG5cdGNvbnN0IG9nSW1hZ2VVcmwgPSBgJHtob3N0bmFtZX0ke2RlZmF1bHRPR0ltYWdlUGF0aH1gXHJcblx0Y29uc3QgdXJsID0gYCR7aG9zdG5hbWV9JHtwYXRofWBcclxuXHRjb25zdCBmaW5hbFRpdGxlID0gdGl0bGUgKyAnIHwgTmFiaWwgVGhhcndhdCdcclxuXHRjb25zdCBmdWxsRGVzY3JpcHRpb24gPSBgJHtkZXNjcmlwdGlvbn1gXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPntmaW5hbFRpdGxlfTwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2ZpbmFsVGl0bGV9IHByb3BlcnR5PSdvZzp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nd2Vic2l0ZScgcHJvcGVydHk9J29nOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gbmFtZT0nZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXt1cmx9IHByb3BlcnR5PSdvZzp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J05hYmlsIFRoYXJ3YXQnIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17J2ltYWdlL2pwZWcnfSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnVybCcgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIG5hbWU9J3R3aXR0ZXI6Y2FyZCc+PC9tZXRhPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0ndHdpdHRlcjp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZnVsbERlc2NyaXB0aW9ufSBwcm9wZXJ0eT0ndHdpdHRlcjpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nQE5hYmlsX1RoYXJ3YXQnIHByb3BlcnR5PSd0d2l0dGVyOmNyZWF0b3InIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0MTYnIHByb3BlcnR5PSd0d2l0dGVyOnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSd0d2l0dGVyOmltYWdlJyAvPlxyXG5cdFx0XHQ8aHRtbCBsYW5nPSdlbi1HQicgLz5cclxuXHJcblx0XHRcdHsvKiBJQ09OUyAqL31cclxuXHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPSdhcHBsZS10b3VjaC1pY29uJ1xyXG5cdFx0XHRcdHNpemVzPScxODB4MTgwJ1xyXG5cdFx0XHRcdGhyZWY9Jy9pY29ucy9hcHBsZS10b3VjaC1pY29uLnBuZydcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9J2ljb24nXHJcblx0XHRcdFx0dHlwZT0naW1hZ2UvcG5nJ1xyXG5cdFx0XHRcdHNpemVzPSczMngzMidcclxuXHRcdFx0XHRocmVmPScvaWNvbnMvZmF2aWNvbi0zMngzMi5wbmcnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxsaW5rXHJcblx0XHRcdFx0cmVsPSdpY29uJ1xyXG5cdFx0XHRcdHR5cGU9J2ltYWdlL3BuZydcclxuXHRcdFx0XHRzaXplcz0nMTZ4MTYnXHJcblx0XHRcdFx0aHJlZj0nL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nJ1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bGluayByZWw9J21hbmlmZXN0JyBocmVmPScvaWNvbnMvc2l0ZS53ZWJtYW5pZmVzdCcgLz5cclxuXHRcdFx0PGxpbmtcclxuXHRcdFx0XHRyZWw9J21hc2staWNvbidcclxuXHRcdFx0XHRocmVmPScvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ1xyXG5cdFx0XHRcdGNvbG9yPScjNWJiYWQ1J1xyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9pY29ucy9mYXZpY29uLmljbycgLz5cclxuXHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyNmM2Y3ZjknIC8+XHJcblx0XHRcdDxtZXRhXHJcblx0XHRcdFx0bmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UnXHJcblx0XHRcdFx0Y29udGVudD0nL2ljb25zL21zdGlsZS0xNDR4MTQ0LnBuZydcclxuXHRcdFx0Lz5cclxuXHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1jb25maWcnIGNvbnRlbnQ9Jy9pY29ucy9icm93c2VyY29uZmlnLnhtbCcgLz5cclxuXHRcdFx0PG1ldGEgbmFtZT0ndGhlbWUtY29sb3InIGNvbnRlbnQ9JyNmZmZmZmYnIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU9cclxuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IFNFTyBmcm9tICcuLi9jb21wb25lbnRzL1NFTydcblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPFNFTyBwYXRoPScvdG9vbHNldCcgdGl0bGU9J1Rvb2xzZXQnIG1keFR5cGU9XCJTRU9cIiAvPlxuICAgIDxoMT57YFdvcmsgYW5kIEV4cGVyaW1lbnRzYH08L2gxPlxuICAgIDxwPntgVGhpcyBpcyBhIGxpc3Qgb2YgYWxsIHRoZSB0b29scyBJJ20gYWN0aXZlbHkgdXNpbmcsIGhhdmUgdXNlZCBiZWZvcmUsIG9yIGhhdmUgbGVhcm5lZCBidXQgaGF2ZW4ndCBoYWQgdGhlIGNoYW5jZSB0byB1c2UgaW4gYSByZWFsIHdvcmxkIHByb2plY3QgeWV0LiBJIGN1cnJlbnRseSBoYXZlIGEgdGhpbmcgZm9yIFR5cGVTY3JpcHQg8J+YgC5gfTwvcD5cbiAgICA8aDQ+e2BKYXZhU2NyaXB0IFV0aWxpdGllc2B9PC9oND5cbiAgICA8cD57YExvZGFzaCwgVW5kZXJzY29yZSwgYW5kIGpRdWVyeS4gRG9uJ3QgdXNlIHRoZW0gYW55bW9yZSwgdGhlIGxhbmd1YWdlIGhhcyBncm93biBlbm91Z2guYH08L3A+XG4gICAgPGg0PntgQ1NTIEZyYW1ld29ya3MvTGlicmFyaWVzYH08L2g0PlxuICAgIDxwPntgU2tlbGV0b24sIFNlbWFudGljIFVJLCBCb290c3RyYXAgNCwgRm91bmRhdGlvbiwgYW5kIE1hdGVyaWFsaXplLiBIYXZlbid0IHJlYWxseSB1c2VkIHRoZW0gbXVjaC5gfTwvcD5cbiAgICA8aDQ+e2BUZW1wbGF0aW5nIEVuZ2luZXNgfTwvaDQ+XG4gICAgPHA+e2BQdWcg4p2k77iPLCBTbGltLCBhbmQgSGFuZGxlYmFycy4gTWFpbmx5IGZvciBzbWFsbCBwcm9qZWN0cy5gfTwvcD5cbiAgICA8aDQ+e2BQcmVwcm9jZXNzb3JzYH08L2g0PlxuICAgIDxwPntgU2FzcywgU0NTUywgU3R5bHVzLCBhbmQgUG9zdENTUy4gSSBkb24ndCBrbm93IHdoZXJlIHRvIHB1dCBDU1NNb2R1bGVzIGJ1dCBJIHVzZSBpdCBhbGwgdGhlIHRpbWUgc28g8J+kt+KAjeKZgi5gfTwvcD5cbiAgICA8aDQ+e2BVSSBGcmFtZXdvcmtzIGFuZCBTdGF0ZSBNYW5hZ2VtZW50YH08L2g0PlxuICAgIDxwPntgUmVhY3Qg4p2k77iPLCBSZWR1eCwgYW5kIG1lc3NlZCBhcm91bmQgd2l0aCBWdWUganVzdCBhIHRhZCBiaXQuYH08L3A+XG4gICAgPGg0PntgQ1NTLWluLUpTYH08L2g0PlxuICAgIDxwPntgR2xhbW9yb3VzL0Vtb3Rpb24sIGFuZCBTdHlsZWQgQ29tcG9uZW50cy4gTm90IGEgZmFuIG9mIENTUy1pbi1KU1xudGhvdWdoLvCfmYVgfTwvcD5cbiAgICA8aDQ+e2BCdWlsZCBUb29scyBhbmQgVHJhbnNwaWxlcnNgfTwvaDQ+XG4gICAgPHA+e2BCYWJlbCwgV2VicGFjayDinaTvuI8sIEd1bHAuYH08L3A+XG4gICAgPGg0PntgRGF0YWJhc2VzIGFuZCBDYWNoZWB9PC9oND5cbiAgICA8cD57YE1vbmdvREIg4p2k77iPLCBGaXJlYmFzZSBGaXJlc3RvcmUsIFJlZGlzLmB9PC9wPlxuICAgIDxoND57YFNlcnZlci1TaWRlIGFuZCBTZXJ2ZXJsZXNzIFRlY2hub2xvZ2llc2B9PC9oND5cbiAgICA8cD57YE1vbmdvb3NlLCBOb2RlSlMsIEV4cHJlc3MsIEdyYXBoUUwsIEZpcmViYXNlIEZ1bmN0aW9ucywgYW5kIFNvY2tldElPLmB9PC9wPlxuICAgIDxoND57YFN0YXRpYyBTaXRlIEdlbmVyYXRvcnMgYW5kIENNU2B9PC9oND5cbiAgICA8cD57YEdhdHNieUpTLCBOZXRsaWZ5Q01TYH08L3A+XG4gICAgPGg0PntgRGVwbG95bWVudCwgYW5kIENJL0NEYH08L2g0PlxuICAgIDxwPntgR2F0c2J5SlMsIEhlcm9rdSwgTmV0bGlmeSDinaTvuI8sIEZpcmViYXNlLCBHaXQvR2l0SHViLCBhbmQgVHJhdmlzQ0kuYH08L3A+XG4gICAgPGg0PntgVGVzdGluZ2B9PC9oND5cbiAgICA8cD57YEplc3Qg4p2k77iPLCBFbnp5bWUsIGFuZCBDeXByZXNzLmB9PC9wPlxuICAgIDxoND57YERlc2lnbiBhbmQgVUkvVVggVG9vbHNgfTwvaDQ+XG4gICAgPHA+e2BBZG9iZSBJbGx1c3RyYXRvciwgQWRvYmUgUGhvdG9zaG9wLCBBZG9iZSBYRCwgRmlnbWEg4p2k77iPLCBhbmQgWmVwbGluLmB9PC9wPlxuICAgIDxoMT57YERldmVsb3BtZW50IEVudmlyb25tZW50YH08L2gxPlxuICAgIDxwPntgVGhpcyBpcyBteSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBzZXR1cC4gVG9vbHMgSSB1c2UgdG8gYmUgcHJvZHVjdGl2ZSwgYWxsIGFyb3VuZC5gfTwvcD5cbiAgICA8aDQ+e2BFZGl0b3IgKyBUZXJtaW5hbCDwn5Go4oCN8J+Su2B9PC9oND5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2NvZGUudmlzdWFsc3R1ZGlvLmNvbS9cIlxuICAgICAgICB9fT57YFZpc3VhbCBTdHVkaW8gQ29kZWB9PC9hPntgIGlzIG15IGN1cnJlbnQgZWRpdG9yLiBJIHN3aXRjaGVkIHRvIGl0IGJhY2sgaW4gMjAxOC5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BJJ20gdXNpbmcgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbWFya2V0cGxhY2UudmlzdWFsc3R1ZGlvLmNvbS9pdGVtcz9pdGVtTmFtZT1haG1hZGF3YWlzLnNoYWRlcy1vZi1wdXJwbGVcIlxuICAgICAgICB9fT57YFNoYWRlcyBvZiBQdXJwbGVgfTwvYT57YCBhcyBteSBtYWluIHRoZW1lIGFuZCBzb21ldGltZXMgc3dpdGNoIHRvIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL21hcmtldHBsYWNlLnZpc3VhbHN0dWRpby5jb20vaXRlbXM/aXRlbU5hbWU9SHl6ZXRhLnZzY29kZS10aGVtZS1naXRodWItbGlnaHRcIlxuICAgICAgICB9fT57YEdpdEh1YiBMaWdodGB9PC9hPntgLiBNeSBmYXZvdXJpdGUgZm9udHMgYXJlIFNwYWNlIE1vbm8gYW5kIEZpcmFDb2RlLCBjdXJyZW50bHkgdXNpbmcgdGhlIGZvcm1lci5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BGaXJlZm94IGlzIG15IG1haW4sIGFuZCBJIHVzZSBDaHJvbWUgZm9yIHRlc3Rpbmcgc29tZXRpbWVzLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY21kZXIubmV0L1wiXG4gICAgICAgIH19PntgQ21kZXJgfTwvYT57YCBpcyBteSB0ZXJtaW5hbCBvZiBjaG9pY2Ugd2l0aCBjdXN0b20gdGhlbWUgYW5kIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQW1yRWxkaWIvY21kZXItcG93ZXJsaW5lLXByb21wdFwiXG4gICAgICAgIH19PntgaW50ZWdyYXRpb25zYH08L2E+e2AuYH08L2xpPlxuICAgIDwvdWw+XG4gICAgPGg0PntgUHJvZHVjdGl2aXR5IPCfkqpgfTwvaDQ+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cubm90aW9uLnNvL1wiXG4gICAgICAgIH19PntgTm90aW9uYH08L2E+e2AgaXMgbXkgbWFpbiBlZGl0b3JpYWwgYXBwLiBCbG9nIHBvc3QgZHJhZnRzLCB0by1kbywgYW5kIGNoYW5uZWwtcmVsYXRlZCBzdHVmZi5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3RyZWxsby5jb20vXCJcbiAgICAgICAgfX0+e2BUcmVsbG9gfTwvYT57YCBmb3IgcHJvamVjdCBtYW5hZ2VtZW50LmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEFzIGZvciB0aW1lLXRyYWNraW5nLCBJIHVzZSBhIHRvb2wgdGhhdCBJIGJ1aWx0IG15c2VsZiBjYWxsZWQgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vYXVkaXRteWRheS5uZXRsaWZ5LmFwcC9cIlxuICAgICAgICB9fT57YEF1ZGl0TXlEYXlgfTwvYT57YC5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8cD57YEFueXRoaW5nIGVsc2U/IFByb2JhYmx5IGhhdmUgYSBiYXNoL25vZGUgc2NyaXB0IGZvciBpdC5gfTwvcD5cbiAgICA8aDQ+e2BSZWNvcmRpbmcgKyBFZGl0aW5nIPCfk7lgfTwvaDQ+XG4gICAgPHA+e2BJIG1haW5seSB1c2UgT0JTIHRvIHJlY29yZCBhbnkgYW5kIGFsbCB2aWRlb3MsIFZlZ2FzIFBybyAxNyBhcyBteSBtYWluIHZpZGVvIGVkaXRpbmcgc29mdHdhcmUsIGFuZCBzb21ldGltZXMgZGFiYmxlIHdpdGggS2RlbmxpdmUsIGFuIG9wZW4gc291cmNlIGVkaXRpbmcgc29mdHdhcmUuIEkgYWxzbyB1c2UgRmlnbWEgYXMgbXkgbWFpbiB3ZWJzaXRlIHByb3RvdHlwZSBkZXNpZ24gdG9vbCBhbmQgUGhvdG9zaG9wIG9uIHRoZSBzaWRlLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=