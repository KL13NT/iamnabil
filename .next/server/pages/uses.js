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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXMubWR4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtZHgtanMvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImhvc3RuYW1lIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdE9HSW1hZ2VQYXRoIiwiZGVmYXVsdFBhdGgiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGF0aCIsIm9nSW1hZ2VVcmwiLCJ1cmwiLCJmaW5hbFRpdGxlIiwiZnVsbERlc2NyaXB0aW9uIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBdUI7QUFDdkMsWUFBUTtBQUQrQixHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRWIsUUFGYSxDQUFwQixFQUVxQiwwQkFGckIsQ0FKRixFQU9FO0FBQUksY0FBVSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQixnRUFBdEIsRUFBc0Y7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUF1QjtBQUN6RyxZQUFRO0FBRGlHLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFL0UsWUFGK0UsQ0FBdEYsRUFFeUIsR0FGekIsQ0FQRixDQXBESyxFQStETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUsseURBQUwsQ0EvREssRUFnRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLHdCQUFOLENBaEVLLEVBaUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSywwUEFBTCxDQWpFSyxDQUFQO0FBbUVEO0FBRUQ7QUFDQUQsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCLEM7Ozs7Ozs7Ozs7O0FDdkZBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3VzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3VzZXMubWR4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBob3N0bmFtZSA9ICdodHRwczovL2lhbW5hYmlsLm5ldGxpZnkuYXBwJ1xyXG5cclxuY29uc3QgZGVmYXVsdFRpdGxlID0gJ0Jsb2cnXHJcbmNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9ICdGcm9udC1FbmQgRW5naW5lZXIsIEJsb2dnZXIsIE1lbnRvcidcclxuY29uc3QgZGVmYXVsdE9HSW1hZ2VQYXRoID0gJy9vZ2dlbmVyYWwucG5nJ1xyXG5jb25zdCBkZWZhdWx0UGF0aCA9ICcvJ1xyXG5cclxuZnVuY3Rpb24gU0VPKHtcclxuXHR0aXRsZSA9IGRlZmF1bHRUaXRsZSxcclxuXHRkZXNjcmlwdGlvbiA9IGRlZmF1bHREZXNjcmlwdGlvbixcclxuXHRwYXRoID0gZGVmYXVsdFBhdGhcclxufSkge1xyXG5cdGNvbnN0IG9nSW1hZ2VVcmwgPSBgJHtob3N0bmFtZX0ke2RlZmF1bHRPR0ltYWdlUGF0aH1gXHJcblx0Y29uc3QgdXJsID0gYCR7aG9zdG5hbWV9JHtwYXRofWBcclxuXHRjb25zdCBmaW5hbFRpdGxlID0gdGl0bGUgKyAnIHwgTmFiaWwgVGhhcndhdCdcclxuXHRjb25zdCBmdWxsRGVzY3JpcHRpb24gPSBgJHtkZXNjcmlwdGlvbn1gXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPntmaW5hbFRpdGxlfTwvdGl0bGU+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2ZpbmFsVGl0bGV9IHByb3BlcnR5PSdvZzp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nd2Vic2l0ZScgcHJvcGVydHk9J29nOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gbmFtZT0nZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXt1cmx9IHByb3BlcnR5PSdvZzp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J05hYmlsIFRoYXJ3YXQnIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17J2ltYWdlL2pwZWcnfSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnVybCcgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17b2dJbWFnZVVybH0gcHJvcGVydHk9J29nOmltYWdlOnNlY3VyZV91cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3N1bW1hcnlfbGFyZ2VfaW1hZ2UnIG5hbWU9J3R3aXR0ZXI6Y2FyZCc+PC9tZXRhPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0ndHdpdHRlcjp0aXRsZScgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZnVsbERlc2NyaXB0aW9ufSBwcm9wZXJ0eT0ndHdpdHRlcjpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD0nQE5hYmlsX1RoYXJ3YXQnIHByb3BlcnR5PSd0d2l0dGVyOmNyZWF0b3InIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0MTYnIHByb3BlcnR5PSd0d2l0dGVyOnNpdGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSd0d2l0dGVyOmltYWdlJyAvPlxyXG5cdFx0XHQ8aHRtbCBsYW5nPSdlbi1HQicgLz5cclxuXHRcdDwvSGVhZD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNFT1xyXG4iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgU0VPIGZyb20gJy4uL2NvbXBvbmVudHMvU0VPJ1xuXG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8U0VPIHBhdGg9Jy90b29sc2V0JyB0aXRsZT0nVG9vbHNldCcgbWR4VHlwZT1cIlNFT1wiIC8+XG4gICAgPGgxPntgV29yayBhbmQgRXhwZXJpbWVudHNgfTwvaDE+XG4gICAgPHA+e2BUaGlzIGlzIGEgbGlzdCBvZiBhbGwgdGhlIHRvb2xzIEknbSBhY3RpdmVseSB1c2luZywgaGF2ZSB1c2VkIGJlZm9yZSwgb3IgaGF2ZSBsZWFybmVkIGJ1dCBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIHVzZSBpbiBhIHJlYWwgd29ybGQgcHJvamVjdCB5ZXQuIEkgY3VycmVudGx5IGhhdmUgYSB0aGluZyBmb3IgVHlwZVNjcmlwdCDwn5iALmB9PC9wPlxuICAgIDxoND57YEphdmFTY3JpcHQgVXRpbGl0aWVzYH08L2g0PlxuICAgIDxwPntgTG9kYXNoLCBVbmRlcnNjb3JlLCBhbmQgalF1ZXJ5LiBEb24ndCB1c2UgdGhlbSBhbnltb3JlLCB0aGUgbGFuZ3VhZ2UgaGFzIGdyb3duIGVub3VnaC5gfTwvcD5cbiAgICA8aDQ+e2BDU1MgRnJhbWV3b3Jrcy9MaWJyYXJpZXNgfTwvaDQ+XG4gICAgPHA+e2BTa2VsZXRvbiwgU2VtYW50aWMgVUksIEJvb3RzdHJhcCA0LCBGb3VuZGF0aW9uLCBhbmQgTWF0ZXJpYWxpemUuIEhhdmVuJ3QgcmVhbGx5IHVzZWQgdGhlbSBtdWNoLmB9PC9wPlxuICAgIDxoND57YFRlbXBsYXRpbmcgRW5naW5lc2B9PC9oND5cbiAgICA8cD57YFB1ZyDinaTvuI8sIFNsaW0sIGFuZCBIYW5kbGViYXJzLiBNYWlubHkgZm9yIHNtYWxsIHByb2plY3RzLmB9PC9wPlxuICAgIDxoND57YFByZXByb2Nlc3NvcnNgfTwvaDQ+XG4gICAgPHA+e2BTYXNzLCBTQ1NTLCBTdHlsdXMsIGFuZCBQb3N0Q1NTLiBJIGRvbid0IGtub3cgd2hlcmUgdG8gcHV0IENTU01vZHVsZXMgYnV0IEkgdXNlIGl0IGFsbCB0aGUgdGltZSBzbyDwn6S34oCN4pmCLmB9PC9wPlxuICAgIDxoND57YFVJIEZyYW1ld29ya3MgYW5kIFN0YXRlIE1hbmFnZW1lbnRgfTwvaDQ+XG4gICAgPHA+e2BSZWFjdCDinaTvuI8sIFJlZHV4LCBhbmQgbWVzc2VkIGFyb3VuZCB3aXRoIFZ1ZSBqdXN0IGEgdGFkIGJpdC5gfTwvcD5cbiAgICA8aDQ+e2BDU1MtaW4tSlNgfTwvaDQ+XG4gICAgPHA+e2BHbGFtb3JvdXMvRW1vdGlvbiwgYW5kIFN0eWxlZCBDb21wb25lbnRzLiBOb3QgYSBmYW4gb2YgQ1NTLWluLUpTXG50aG91Z2gu8J+ZhWB9PC9wPlxuICAgIDxoND57YEJ1aWxkIFRvb2xzIGFuZCBUcmFuc3BpbGVyc2B9PC9oND5cbiAgICA8cD57YEJhYmVsLCBXZWJwYWNrIOKdpO+4jywgR3VscC5gfTwvcD5cbiAgICA8aDQ+e2BEYXRhYmFzZXMgYW5kIENhY2hlYH08L2g0PlxuICAgIDxwPntgTW9uZ29EQiDinaTvuI8sIEZpcmViYXNlIEZpcmVzdG9yZSwgUmVkaXMuYH08L3A+XG4gICAgPGg0PntgU2VydmVyLVNpZGUgYW5kIFNlcnZlcmxlc3MgVGVjaG5vbG9naWVzYH08L2g0PlxuICAgIDxwPntgTW9uZ29vc2UsIE5vZGVKUywgRXhwcmVzcywgR3JhcGhRTCwgRmlyZWJhc2UgRnVuY3Rpb25zLCBhbmQgU29ja2V0SU8uYH08L3A+XG4gICAgPGg0PntgU3RhdGljIFNpdGUgR2VuZXJhdG9ycyBhbmQgQ01TYH08L2g0PlxuICAgIDxwPntgR2F0c2J5SlMsIE5ldGxpZnlDTVNgfTwvcD5cbiAgICA8aDQ+e2BEZXBsb3ltZW50LCBhbmQgQ0kvQ0RgfTwvaDQ+XG4gICAgPHA+e2BHYXRzYnlKUywgSGVyb2t1LCBOZXRsaWZ5IOKdpO+4jywgRmlyZWJhc2UsIEdpdC9HaXRIdWIsIGFuZCBUcmF2aXNDSS5gfTwvcD5cbiAgICA8aDQ+e2BUZXN0aW5nYH08L2g0PlxuICAgIDxwPntgSmVzdCDinaTvuI8sIEVuenltZSwgYW5kIEN5cHJlc3MuYH08L3A+XG4gICAgPGg0PntgRGVzaWduIGFuZCBVSS9VWCBUb29sc2B9PC9oND5cbiAgICA8cD57YEFkb2JlIElsbHVzdHJhdG9yLCBBZG9iZSBQaG90b3Nob3AsIEFkb2JlIFhELCBGaWdtYSDinaTvuI8sIGFuZCBaZXBsaW4uYH08L3A+XG4gICAgPGgxPntgRGV2ZWxvcG1lbnQgRW52aXJvbm1lbnRgfTwvaDE+XG4gICAgPHA+e2BUaGlzIGlzIG15IGRldmVsb3BtZW50IGVudmlyb25tZW50IHNldHVwLiBUb29scyBJIHVzZSB0byBiZSBwcm9kdWN0aXZlLCBhbGwgYXJvdW5kLmB9PC9wPlxuICAgIDxoND57YEVkaXRvciArIFRlcm1pbmFsIPCfkajigI3wn5K7YH08L2g0PlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vY29kZS52aXN1YWxzdHVkaW8uY29tL1wiXG4gICAgICAgIH19PntgVmlzdWFsIFN0dWRpbyBDb2RlYH08L2E+e2AgaXMgbXkgY3VycmVudCBlZGl0b3IuIEkgc3dpdGNoZWQgdG8gaXQgYmFjayBpbiAyMDE4LmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEknbSB1c2luZyBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9tYXJrZXRwbGFjZS52aXN1YWxzdHVkaW8uY29tL2l0ZW1zP2l0ZW1OYW1lPWFobWFkYXdhaXMuc2hhZGVzLW9mLXB1cnBsZVwiXG4gICAgICAgIH19PntgU2hhZGVzIG9mIFB1cnBsZWB9PC9hPntgIGFzIG15IG1haW4gdGhlbWUgYW5kIHNvbWV0aW1lcyBzd2l0Y2ggdG8gYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbWFya2V0cGxhY2UudmlzdWFsc3R1ZGlvLmNvbS9pdGVtcz9pdGVtTmFtZT1IeXpldGEudnNjb2RlLXRoZW1lLWdpdGh1Yi1saWdodFwiXG4gICAgICAgIH19PntgR2l0SHViIExpZ2h0YH08L2E+e2AuIE15IGZhdm91cml0ZSBmb250cyBhcmUgU3BhY2UgTW9ubyBhbmQgRmlyYUNvZGUsIGN1cnJlbnRseSB1c2luZyB0aGUgZm9ybWVyLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEZpcmVmb3ggaXMgbXkgbWFpbiwgYW5kIEkgdXNlIENocm9tZSBmb3IgdGVzdGluZyBzb21ldGltZXMuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9jbWRlci5uZXQvXCJcbiAgICAgICAgfX0+e2BDbWRlcmB9PC9hPntgIGlzIG15IHRlcm1pbmFsIG9mIGNob2ljZSB3aXRoIGN1c3RvbSB0aGVtZSBhbmQgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbXJFbGRpYi9jbWRlci1wb3dlcmxpbmUtcHJvbXB0XCJcbiAgICAgICAgfX0+e2BpbnRlZ3JhdGlvbnNgfTwvYT57YC5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDQ+e2BQcm9kdWN0aXZpdHkg8J+SqmB9PC9oND5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5ub3Rpb24uc28vXCJcbiAgICAgICAgfX0+e2BOb3Rpb25gfTwvYT57YCBpcyBteSBtYWluIGVkaXRvcmlhbCBhcHAuIEJsb2cgcG9zdCBkcmFmdHMsIHRvLWRvLCBhbmQgY2hhbm5lbC1yZWxhdGVkIHN0dWZmLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbS9cIlxuICAgICAgICB9fT57YFRyZWxsb2B9PC9hPntgIGZvciBwcm9qZWN0IG1hbmFnZW1lbnQuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgQXMgZm9yIHRpbWUtdHJhY2tpbmcsIEkgdXNlIGEgdG9vbCB0aGF0IEkgYnVpbHQgbXlzZWxmIGNhbGxlZCBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9hdWRpdG15ZGF5Lm5ldGxpZnkuYXBwL1wiXG4gICAgICAgIH19PntgQXVkaXRNeURheWB9PC9hPntgLmB9PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPntgQW55dGhpbmcgZWxzZT8gUHJvYmFibHkgaGF2ZSBhIGJhc2gvbm9kZSBzY3JpcHQgZm9yIGl0LmB9PC9wPlxuICAgIDxoND57YFJlY29yZGluZyArIEVkaXRpbmcg8J+TuWB9PC9oND5cbiAgICA8cD57YEkgbWFpbmx5IHVzZSBPQlMgdG8gcmVjb3JkIGFueSBhbmQgYWxsIHZpZGVvcywgVmVnYXMgUHJvIDE3IGFzIG15IG1haW4gdmlkZW8gZWRpdGluZyBzb2Z0d2FyZSwgYW5kIHNvbWV0aW1lcyBkYWJibGUgd2l0aCBLZGVubGl2ZSwgYW4gb3BlbiBzb3VyY2UgZWRpdGluZyBzb2Z0d2FyZS4gSSBhbHNvIHVzZSBGaWdtYSBhcyBteSBtYWluIHdlYnNpdGUgcHJvdG90eXBlIGRlc2lnbiB0b29sIGFuZCBQaG90b3Nob3Agb24gdGhlIHNpZGUuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWR4LWpzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==