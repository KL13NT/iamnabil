module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: getAllSlugs, getPostBySlug, getAllPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSlugs", function() { return getAllSlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const postsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(process.cwd(), 'blog');
function getAllSlugs() {
  return Object(fs__WEBPACK_IMPORTED_MODULE_0__["readdirSync"])(postsDirectory).filter(path => path.endsWith('.md'));
}
function getPostBySlug(slug) {
  const filename = slug.replace(/\.md$/, '');
  const path = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(postsDirectory, `${filename}.md`);
  const text = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(path, 'utf-8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);
  return {
    frontmatter: _objectSpread(_objectSpread({}, data), {}, {
      date: new Date(data.date).toJSON()
    }),
    html: content,
    slug
  };
}
function getAllPosts() {
  const slugs = getAllSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug)).sort((post1, post2) => post1.date > post2.date ? '-1' : '1');
  return posts;
}

/***/ }),

/***/ "./components/Article.jsx":
/*!********************************!*\
  !*** ./components/Article.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ "react-markdown/with-html");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\components\\Article.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ArticleHeader = ({
  title,
  date,
  path,
  tags
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: `https://twitter.com/intent/tweet?text=${title}&url=https://iamnabil.netlify.app${path}&hashtags=${tags}`,
      children: "Tweet This"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 2
}, undefined);

const ArticleBody = ({
  frontmatter,
  html,
  fields
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ArticleHeader, _objectSpread(_objectSpread({}, frontmatter), fields), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {
    allowDangerousHtml: true,
    children: html
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ArticleBody);

/***/ }),

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

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SEO */ "./components/SEO.jsx");
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Article */ "./components/Article.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./api.js");


var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\blog\\[slug].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function PostTemplate({
  html,
  frontmatter
}) {
  const {
    lang
  } = frontmatter;
  const languageClass = lang === 'ar' ? 'u-rightToLeft' : null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, frontmatter), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
      frontmatter: frontmatter,
      html: html,
      languageClass: languageClass
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

async function getStaticProps({
  params: {
    slug
  }
}) {
  const post = Object(_api__WEBPACK_IMPORTED_MODULE_4__["getPostBySlug"])(slug);
  return {
    props: _objectSpread({}, post)
  };
}
async function getStaticPaths() {
  const paths = Object(_api__WEBPACK_IMPORTED_MODULE_4__["getAllSlugs"])().map(slug => ({
    params: {
      slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown/with-html":
/*!*******************************************!*\
  !*** external "react-markdown/with-html" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXJ0aWNsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TRU8uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwb3N0c0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0QWxsU2x1Z3MiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsInBhdGgiLCJlbmRzV2l0aCIsImdldFBvc3RCeVNsdWciLCJzbHVnIiwiZmlsZW5hbWUiLCJyZXBsYWNlIiwidGV4dCIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJjb250ZW50IiwibWF0dGVyIiwiZnJvbnRtYXR0ZXIiLCJkYXRlIiwiRGF0ZSIsInRvSlNPTiIsImh0bWwiLCJnZXRBbGxQb3N0cyIsInNsdWdzIiwicG9zdHMiLCJtYXAiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsIkFydGljbGVIZWFkZXIiLCJ0aXRsZSIsInRhZ3MiLCJBcnRpY2xlQm9keSIsImZpZWxkcyIsImhvc3RuYW1lIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiZGVmYXVsdE9HSW1hZ2VQYXRoIiwiZGVmYXVsdFBhdGgiLCJTRU8iLCJkZXNjcmlwdGlvbiIsIm9nSW1hZ2VVcmwiLCJ1cmwiLCJmaW5hbFRpdGxlIiwiZnVsbERlc2NyaXB0aW9uIiwiUG9zdFRlbXBsYXRlIiwibGFuZyIsImxhbmd1YWdlQ2xhc3MiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBvc3QiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxpREFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQVIsRUFBRCxFQUFnQixNQUFoQixDQUEzQjtBQUVPLFNBQVNDLFdBQVQsR0FBdUI7QUFDN0IsU0FBT0Msc0RBQVcsQ0FBQ0wsY0FBRCxDQUFYLENBQTRCTSxNQUE1QixDQUFtQ0MsSUFBSSxJQUFJ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O0FBQUEsWUFGRDtBQUFBLGtCQUREO0FBVUE7O0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFQyxRQUFNLEVBQUU7QUFBRXhDO0FBQUY7QUFBVixDQUE5QixFQUFvRDtBQUMxRCxRQUFNeUMsSUFBSSxHQUFHMUMsMERBQWEsQ0FBQ0MsSUFBRCxDQUExQjtBQUVBLFNBQU87QUFDTjBDLFNBQUssb0JBQ0RELElBREM7QUFEQyxHQUFQO0FBS0E7QUFFTSxlQUFlRSxjQUFmLEdBQWdDO0FBQ3RDLFFBQU1DLEtBQUssR0FBR2xELHdEQUFXLEdBQUdzQixHQUFkLENBQWtCaEIsSUFBSSxLQUFLO0FBQUV3QyxVQUFNLEVBQUU7QUFBRXhDO0FBQUY7QUFBVixHQUFMLENBQXRCLENBQWQ7QUFFQSxTQUFPO0FBQ040QyxTQURNO0FBRU5DLFlBQVEsRUFBRTtBQUZKLEdBQVA7QUFJQTtBQUVjVCwyRUFBZixFOzs7Ozs7Ozs7OztBQzFDQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ibG9nL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmxvZy9bc2x1Z10uanNcIik7XG4iLCJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcblxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcblxuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBqb2luKHByb2Nlc3MuY3dkKCksICdibG9nJylcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFNsdWdzKCkge1xuXHRyZXR1cm4gcmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpLmZpbHRlcihwYXRoID0+IHBhdGguZW5kc1dpdGgoJy5tZCcpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnKSB7XG5cdGNvbnN0IGZpbGVuYW1lID0gc2x1Zy5yZXBsYWNlKC9cXC5tZCQvLCAnJylcblx0Y29uc3QgcGF0aCA9IGpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2ZpbGVuYW1lfS5tZGApXG5cdGNvbnN0IHRleHQgPSByZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JylcblxuXHRjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcih0ZXh0KVxuXG5cdHJldHVybiB7XG5cdFx0ZnJvbnRtYXR0ZXI6IHtcblx0XHRcdC4uLmRhdGEsXG5cdFx0XHRkYXRlOiBuZXcgRGF0ZShkYXRhLmRhdGUpLnRvSlNPTigpXG5cdFx0fSxcblx0XHRodG1sOiBjb250ZW50LFxuXHRcdHNsdWdcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG5cdGNvbnN0IHNsdWdzID0gZ2V0QWxsU2x1Z3MoKVxuXHRjb25zdCBwb3N0cyA9IHNsdWdzXG5cdFx0Lm1hcChzbHVnID0+IGdldFBvc3RCeVNsdWcoc2x1ZykpXG5cdFx0LnNvcnQoKHBvc3QxLCBwb3N0MikgPT4gKHBvc3QxLmRhdGUgPiBwb3N0Mi5kYXRlID8gJy0xJyA6ICcxJykpXG5cblx0cmV0dXJuIHBvc3RzXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCdcclxuXHJcbmNvbnN0IEFydGljbGVIZWFkZXIgPSAoeyB0aXRsZSwgZGF0ZSwgcGF0aCwgdGFncyB9KSA9PiAoXHJcblx0PGRpdj5cclxuXHRcdDxoMT57dGl0bGV9PC9oMT5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxwPntkYXRlfTwvcD5cclxuXHRcdFx0PGFcclxuXHRcdFx0XHRocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3RpdGxlfSZ1cmw9aHR0cHM6Ly9pYW1uYWJpbC5uZXRsaWZ5LmFwcCR7cGF0aH0maGFzaHRhZ3M9JHt0YWdzfWB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRUd2VldCBUaGlzXHJcblx0XHRcdDwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBBcnRpY2xlQm9keSA9ICh7IGZyb250bWF0dGVyLCBodG1sLCBmaWVsZHMgfSkgPT4gKFxyXG5cdDxhcnRpY2xlPlxyXG5cdFx0PEFydGljbGVIZWFkZXIgey4uLmZyb250bWF0dGVyfSB7Li4uZmllbGRzfSAvPlxyXG5cdFx0PFJlYWN0TWFya2Rvd24gYWxsb3dEYW5nZXJvdXNIdG1sPntodG1sfTwvUmVhY3RNYXJrZG93bj5cclxuXHQ8L2FydGljbGU+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVCb2R5XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgaG9zdG5hbWUgPSAnaHR0cHM6Ly9pYW1uYWJpbC5uZXRsaWZ5LmFwcCdcclxuXHJcbmNvbnN0IGRlZmF1bHRUaXRsZSA9ICdCbG9nJ1xyXG5jb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnRnJvbnQtRW5kIEVuZ2luZWVyLCBCbG9nZ2VyLCBNZW50b3InXHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlUGF0aCA9ICcvb2dnZW5lcmFsLnBuZydcclxuY29uc3QgZGVmYXVsdFBhdGggPSAnLydcclxuXHJcbmZ1bmN0aW9uIFNFTyh7XHJcblx0dGl0bGUgPSBkZWZhdWx0VGl0bGUsXHJcblx0ZGVzY3JpcHRpb24gPSBkZWZhdWx0RGVzY3JpcHRpb24sXHJcblx0cGF0aCA9IGRlZmF1bHRQYXRoXHJcbn0pIHtcclxuXHRjb25zdCBvZ0ltYWdlVXJsID0gYCR7aG9zdG5hbWV9JHtkZWZhdWx0T0dJbWFnZVBhdGh9YFxyXG5cdGNvbnN0IHVybCA9IGAke2hvc3RuYW1lfSR7cGF0aH1gXHJcblx0Y29uc3QgZmluYWxUaXRsZSA9IHRpdGxlICsgJyB8IE5hYmlsIFRoYXJ3YXQnXHJcblx0Y29uc3QgZnVsbERlc2NyaXB0aW9uID0gYCR7ZGVzY3JpcHRpb259YFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT57ZmluYWxUaXRsZX08L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0nb2c6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3dlYnNpdGUnIHByb3BlcnR5PSdvZzp0eXBlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IG5hbWU9J2Rlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17dXJsfSBwcm9wZXJ0eT0nb2c6dXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdOYWJpbCBUaGFyd2F0JyBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9eydpbWFnZS9qcGVnJ30gcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyBuYW1lPSd0d2l0dGVyOmNhcmQnPjwvbWV0YT5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZmluYWxUaXRsZX0gcHJvcGVydHk9J3R3aXR0ZXI6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0JyBwcm9wZXJ0eT0ndHdpdHRlcjpjcmVhdG9yJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdATmFiaWxfVGhhcndhdDE2JyBwcm9wZXJ0eT0ndHdpdHRlcjpzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0ndHdpdHRlcjppbWFnZScgLz5cclxuXHRcdFx0PGh0bWwgbGFuZz0nZW4tR0InIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU0VPIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU0VPJ1xuaW1wb3J0IEFydGljbGVCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXJ0aWNsZSdcblxuaW1wb3J0IHsgZ2V0QWxsU2x1Z3MsIGdldFBvc3RCeVNsdWcgfSBmcm9tICcuLi8uLi9hcGknXG5cbmZ1bmN0aW9uIFBvc3RUZW1wbGF0ZSh7IGh0bWwsIGZyb250bWF0dGVyIH0pIHtcblx0Y29uc3QgeyBsYW5nIH0gPSBmcm9udG1hdHRlclxuXHRjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZyA9PT0gJ2FyJyA/ICd1LXJpZ2h0VG9MZWZ0JyA6IG51bGxcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U0VPIHsuLi5mcm9udG1hdHRlcn0gLz5cblx0XHRcdDxBcnRpY2xlQm9keVxuXHRcdFx0XHRmcm9udG1hdHRlcj17ZnJvbnRtYXR0ZXJ9XG5cdFx0XHRcdGh0bWw9e2h0bWx9XG5cdFx0XHRcdGxhbmd1YWdlQ2xhc3M9e2xhbmd1YWdlQ2xhc3N9XG5cdFx0XHQvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xuXHRjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhzbHVnKVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdC4uLnBvc3Rcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXHRjb25zdCBwYXRocyA9IGdldEFsbFNsdWdzKCkubWFwKHNsdWcgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSlcblxuXHRyZXR1cm4ge1xuXHRcdHBhdGhzLFxuXHRcdGZhbGxiYWNrOiBmYWxzZVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RUZW1wbGF0ZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9