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
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://code.visualstudio.com/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 28
    },
    __self: this
  }), `Visual Studio Code`), ` is my current editor. I switched to it back in 2018.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    },
    __self: this
  }, `I'm using `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 42
    },
    __self: this
  }), `Shades of Purple`), ` as my main theme and sometimes switch to `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://marketplace.visualstudio.com/items?itemName=Hyzeta.vscode-theme-github-light"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 84
    },
    __self: this
  }), `GitHub Light`), `. My favourite fonts are Space Mono and FiraCode, currently using the former.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    },
    __self: this
  }, `Firefox is my main, and I use Chrome for testing sometimes.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://cmder.net/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 28
    },
    __self: this
  }), `Cmder`), ` is my terminal of choice with custom theme and `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://github.com/AmrEldib/cmder-powerline-prompt"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 79
    },
    __self: this
  }), `integrations`), `.`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    },
    __self: this
  }, `Productivity 💪`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://www.notion.so/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 28
    },
    __self: this
  }), `Notion`), ` is my main editorial app. Blog post drafts, to-do, and channel-related stuff.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://trello.com/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 28
    },
    __self: this
  }), `Trello`), ` for project management.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    },
    __self: this
  }, `As for time-tracking, I use a tool that I built myself called `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("a", _objectSpread(_objectSpread({
    parentName: "p"
  }, {
    "href": "https://auditmyday.netlify.app/"
  }), {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 94
    },
    __self: this
  }), `AuditMyDay`), `.`))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    },
    __self: this
  }, `Anything else? Probably have a bash/node script for it.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    },
    __self: this
  }, `Recording + Editing 📹`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXMubWR4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtZHgtanMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhvc3RuYW1lIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdE9HSW1hZ2VQYXRoIiwiZGVmYXVsdFBhdGgiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGF0aCIsIm9nSW1hZ2VVcmwiLCJ1cmwiLCJmaW5hbFRpdGxlIiwiZnVsbERlc2NyaXB0aW9uIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFD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QUFBQTtBQUFBO0FBQUEsS0FBTSx3QkFBTixDQTlFSyxFQStFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssMFBBQUwsQ0EvRUssQ0FBUDtBQWlGRDtBQUVEO0FBQ0FELFVBQVUsQ0FBQ0csY0FBWCxHQUE0QixJQUE1QixDOzs7Ozs7Ozs7OztBQ3JHQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy91c2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VzLm1keFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgaG9zdG5hbWUgPSAnaHR0cHM6Ly9pYW1uYWJpbC5uZXRsaWZ5LmFwcCdcclxuXHJcbmNvbnN0IGRlZmF1bHRUaXRsZSA9ICdCbG9nJ1xyXG5jb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnRnJvbnQtRW5kIEVuZ2luZWVyLCBCbG9nZ2VyLCBNZW50b3InXHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlUGF0aCA9ICcvb2dnZW5lcmFsLnBuZydcclxuY29uc3QgZGVmYXVsdFBhdGggPSAnLydcclxuXHJcbmZ1bmN0aW9uIFNFTyh7XHJcblx0dGl0bGUgPSBkZWZhdWx0VGl0bGUsXHJcblx0ZGVzY3JpcHRpb24gPSBkZWZhdWx0RGVzY3JpcHRpb24sXHJcblx0cGF0aCA9IGRlZmF1bHRQYXRoXHJcbn0pIHtcclxuXHRjb25zdCBvZ0ltYWdlVXJsID0gYCR7aG9zdG5hbWV9JHtkZWZhdWx0T0dJbWFnZVBhdGh9YFxyXG5cdGNvbnN0IHVybCA9IGAke2hvc3RuYW1lfSR7cGF0aH1gXHJcblx0Y29uc3QgZmluYWxUaXRsZSA9IHRpdGxlICsgJyB8IE5hYmlsIFRoYXJ3YXQnXHJcblx0Y29uc3QgZnVsbERlc2NyaXB0aW9uID0gYCR7ZGVzY3JpcHRpb259YFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT57ZmluYWxUaXRsZX08L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0nb2c6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3dlYnNpdGUnIHByb3BlcnR5PSdvZzp0eXBlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IG5hbWU9J2Rlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17dXJsfSBwcm9wZXJ0eT0nb2c6dXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdOYWJpbCBUaGFyd2F0JyBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9eydpbWFnZS9qcGVnJ30gcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyBuYW1lPSd0d2l0dGVyOmNhcmQnPjwvbWV0YT5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZmluYWxUaXRsZX0gcHJvcGVydHk9J3R3aXR0ZXI6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0JyBwcm9wZXJ0eT0ndHdpdHRlcjpjcmVhdG9yJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdATmFiaWxfVGhhcndhdDE2JyBwcm9wZXJ0eT0ndHdpdHRlcjpzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0ndHdpdHRlcjppbWFnZScgLz5cclxuXHRcdFx0PGh0bWwgbGFuZz0nZW4tR0InIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU9cclxuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IFNFTyBmcm9tICcuLi9jb21wb25lbnRzL1NFTydcblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPFNFTyBwYXRoPScvdG9vbHNldCcgdGl0bGU9J1Rvb2xzZXQnIG1keFR5cGU9XCJTRU9cIiAvPlxuICAgIDxoMT57YFdvcmsgYW5kIEV4cGVyaW1lbnRzYH08L2gxPlxuICAgIDxwPntgVGhpcyBpcyBhIGxpc3Qgb2YgYWxsIHRoZSB0b29scyBJJ20gYWN0aXZlbHkgdXNpbmcsIGhhdmUgdXNlZCBiZWZvcmUsIG9yIGhhdmUgbGVhcm5lZCBidXQgaGF2ZW4ndCBoYWQgdGhlIGNoYW5jZSB0byB1c2UgaW4gYSByZWFsIHdvcmxkIHByb2plY3QgeWV0LiBJIGN1cnJlbnRseSBoYXZlIGEgdGhpbmcgZm9yIFR5cGVTY3JpcHQg8J+YgC5gfTwvcD5cbiAgICA8aDQ+e2BKYXZhU2NyaXB0IFV0aWxpdGllc2B9PC9oND5cbiAgICA8cD57YExvZGFzaCwgVW5kZXJzY29yZSwgYW5kIGpRdWVyeS4gRG9uJ3QgdXNlIHRoZW0gYW55bW9yZSwgdGhlIGxhbmd1YWdlIGhhcyBncm93biBlbm91Z2guYH08L3A+XG4gICAgPGg0PntgQ1NTIEZyYW1ld29ya3MvTGlicmFyaWVzYH08L2g0PlxuICAgIDxwPntgU2tlbGV0b24sIFNlbWFudGljIFVJLCBCb290c3RyYXAgNCwgRm91bmRhdGlvbiwgYW5kIE1hdGVyaWFsaXplLiBIYXZlbid0IHJlYWxseSB1c2VkIHRoZW0gbXVjaC5gfTwvcD5cbiAgICA8aDQ+e2BUZW1wbGF0aW5nIEVuZ2luZXNgfTwvaDQ+XG4gICAgPHA+e2BQdWcg4p2k77iPLCBTbGltLCBhbmQgSGFuZGxlYmFycy4gTWFpbmx5IGZvciBzbWFsbCBwcm9qZWN0cy5gfTwvcD5cbiAgICA8aDQ+e2BQcmVwcm9jZXNzb3JzYH08L2g0PlxuICAgIDxwPntgU2FzcywgU0NTUywgU3R5bHVzLCBhbmQgUG9zdENTUy4gSSBkb24ndCBrbm93IHdoZXJlIHRvIHB1dCBDU1NNb2R1bGVzIGJ1dCBJIHVzZSBpdCBhbGwgdGhlIHRpbWUgc28g8J+kt+KAjeKZgi5gfTwvcD5cbiAgICA8aDQ+e2BVSSBGcmFtZXdvcmtzIGFuZCBTdGF0ZSBNYW5hZ2VtZW50YH08L2g0PlxuICAgIDxwPntgUmVhY3Qg4p2k77iPLCBSZWR1eCwgYW5kIG1lc3NlZCBhcm91bmQgd2l0aCBWdWUganVzdCBhIHRhZCBiaXQuYH08L3A+XG4gICAgPGg0PntgQ1NTLWluLUpTYH08L2g0PlxuICAgIDxwPntgR2xhbW9yb3VzL0Vtb3Rpb24sIGFuZCBTdHlsZWQgQ29tcG9uZW50cy4gTm90IGEgZmFuIG9mIENTUy1pbi1KU1xudGhvdWdoLvCfmYVgfTwvcD5cbiAgICA8aDQ+e2BCdWlsZCBUb29scyBhbmQgVHJhbnNwaWxlcnNgfTwvaDQ+XG4gICAgPHA+e2BCYWJlbCwgV2VicGFjayDinaTvuI8sIEd1bHAuYH08L3A+XG4gICAgPGg0PntgRGF0YWJhc2VzIGFuZCBDYWNoZWB9PC9oND5cbiAgICA8cD57YE1vbmdvREIg4p2k77iPLCBGaXJlYmFzZSBGaXJlc3RvcmUsIFJlZGlzLmB9PC9wPlxuICAgIDxoND57YFNlcnZlci1TaWRlIGFuZCBTZXJ2ZXJsZXNzIFRlY2hub2xvZ2llc2B9PC9oND5cbiAgICA8cD57YE1vbmdvb3NlLCBOb2RlSlMsIEV4cHJlc3MsIEdyYXBoUUwsIEZpcmViYXNlIEZ1bmN0aW9ucywgYW5kIFNvY2tldElPLmB9PC9wPlxuICAgIDxoND57YFN0YXRpYyBTaXRlIEdlbmVyYXRvcnMgYW5kIENNU2B9PC9oND5cbiAgICA8cD57YEdhdHNieUpTLCBOZXRsaWZ5Q01TYH08L3A+XG4gICAgPGg0PntgRGVwbG95bWVudCwgYW5kIENJL0NEYH08L2g0PlxuICAgIDxwPntgR2F0c2J5SlMsIEhlcm9rdSwgTmV0bGlmeSDinaTvuI8sIEZpcmViYXNlLCBHaXQvR2l0SHViLCBhbmQgVHJhdmlzQ0kuYH08L3A+XG4gICAgPGg0PntgVGVzdGluZ2B9PC9oND5cbiAgICA8cD57YEplc3Qg4p2k77iPLCBFbnp5bWUsIGFuZCBDeXByZXNzLmB9PC9wPlxuICAgIDxoND57YERlc2lnbiBhbmQgVUkvVVggVG9vbHNgfTwvaDQ+XG4gICAgPHA+e2BBZG9iZSBJbGx1c3RyYXRvciwgQWRvYmUgUGhvdG9zaG9wLCBBZG9iZSBYRCwgRmlnbWEg4p2k77iPLCBhbmQgWmVwbGluLmB9PC9wPlxuICAgIDxoMT57YERldmVsb3BtZW50IEVudmlyb25tZW50YH08L2gxPlxuICAgIDxwPntgVGhpcyBpcyBteSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBzZXR1cC4gVG9vbHMgSSB1c2UgdG8gYmUgcHJvZHVjdGl2ZSwgYWxsIGFyb3VuZC5gfTwvcD5cbiAgICA8aDQ+e2BFZGl0b3IgKyBUZXJtaW5hbCDwn5Go4oCN8J+Su2B9PC9oND5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+XG4gICAgICAgIDxwIHBhcmVudE5hbWU9XCJsaVwiPjxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY29kZS52aXN1YWxzdHVkaW8uY29tL1wiXG4gICAgICAgICAgfX0+e2BWaXN1YWwgU3R1ZGlvIENvZGVgfTwvYT57YCBpcyBteSBjdXJyZW50IGVkaXRvci4gSSBzd2l0Y2hlZCB0byBpdCBiYWNrIGluIDIwMTguYH08L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPlxuICAgICAgICA8cCBwYXJlbnROYW1lPVwibGlcIj57YEknbSB1c2luZyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbWFya2V0cGxhY2UudmlzdWFsc3R1ZGlvLmNvbS9pdGVtcz9pdGVtTmFtZT1haG1hZGF3YWlzLnNoYWRlcy1vZi1wdXJwbGVcIlxuICAgICAgICAgIH19PntgU2hhZGVzIG9mIFB1cnBsZWB9PC9hPntgIGFzIG15IG1haW4gdGhlbWUgYW5kIHNvbWV0aW1lcyBzd2l0Y2ggdG8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL21hcmtldHBsYWNlLnZpc3VhbHN0dWRpby5jb20vaXRlbXM/aXRlbU5hbWU9SHl6ZXRhLnZzY29kZS10aGVtZS1naXRodWItbGlnaHRcIlxuICAgICAgICAgIH19PntgR2l0SHViIExpZ2h0YH08L2E+e2AuIE15IGZhdm91cml0ZSBmb250cyBhcmUgU3BhY2UgTW9ubyBhbmQgRmlyYUNvZGUsIGN1cnJlbnRseSB1c2luZyB0aGUgZm9ybWVyLmB9PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2BGaXJlZm94IGlzIG15IG1haW4sIGFuZCBJIHVzZSBDaHJvbWUgZm9yIHRlc3Rpbmcgc29tZXRpbWVzLmB9PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9jbWRlci5uZXQvXCJcbiAgICAgICAgICB9fT57YENtZGVyYH08L2E+e2AgaXMgbXkgdGVybWluYWwgb2YgY2hvaWNlIHdpdGggY3VzdG9tIHRoZW1lIGFuZCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbXJFbGRpYi9jbWRlci1wb3dlcmxpbmUtcHJvbXB0XCJcbiAgICAgICAgICB9fT57YGludGVncmF0aW9uc2B9PC9hPntgLmB9PC9wPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxoND57YFByb2R1Y3Rpdml0eSDwn5KqYH08L2g0PlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cubm90aW9uLnNvL1wiXG4gICAgICAgICAgfX0+e2BOb3Rpb25gfTwvYT57YCBpcyBteSBtYWluIGVkaXRvcmlhbCBhcHAuIEJsb2cgcG9zdCBkcmFmdHMsIHRvLWRvLCBhbmQgY2hhbm5lbC1yZWxhdGVkIHN0dWZmLmB9PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tL1wiXG4gICAgICAgICAgfX0+e2BUcmVsbG9gfTwvYT57YCBmb3IgcHJvamVjdCBtYW5hZ2VtZW50LmB9PC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj5cbiAgICAgICAgPHAgcGFyZW50TmFtZT1cImxpXCI+e2BBcyBmb3IgdGltZS10cmFja2luZywgSSB1c2UgYSB0b29sIHRoYXQgSSBidWlsdCBteXNlbGYgY2FsbGVkIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hdWRpdG15ZGF5Lm5ldGxpZnkuYXBwL1wiXG4gICAgICAgICAgfX0+e2BBdWRpdE15RGF5YH08L2E+e2AuYH08L3A+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+e2BBbnl0aGluZyBlbHNlPyBQcm9iYWJseSBoYXZlIGEgYmFzaC9ub2RlIHNjcmlwdCBmb3IgaXQuYH08L3A+XG4gICAgPGg0PntgUmVjb3JkaW5nICsgRWRpdGluZyDwn5O5YH08L2g0PlxuICAgIDxwPntgSSBtYWlubHkgdXNlIE9CUyB0byByZWNvcmQgYW55IGFuZCBhbGwgdmlkZW9zLCBWZWdhcyBQcm8gMTcgYXMgbXkgbWFpbiB2aWRlbyBlZGl0aW5nIHNvZnR3YXJlLCBhbmQgc29tZXRpbWVzIGRhYmJsZSB3aXRoIEtkZW5saXZlLCBhbiBvcGVuIHNvdXJjZSBlZGl0aW5nIHNvZnR3YXJlLiBJIGFsc28gdXNlIEZpZ21hIGFzIG15IG1haW4gd2Vic2l0ZSBwcm90b3R5cGUgZGVzaWduIHRvb2wgYW5kIFBob3Rvc2hvcCBvbiB0aGUgc2lkZS5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtZHgtanMvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9