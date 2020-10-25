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
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const postsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(process.cwd(), 'blog');
function getAllSlugs() {
  return Object(fs__WEBPACK_IMPORTED_MODULE_1__["readdirSync"])(postsDirectory).filter(path => path.endsWith('.md'));
}
function getPostBySlug(slug) {
  const filename = slug.replace(/\.md$/, '');
  const path = Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(postsDirectory, `${filename}.md`);
  const text = Object(fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"])(path, 'utf-8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(text);
  return {
    frontmatter: _objectSpread(_objectSpread({}, data), {}, {
      date: new Date(data.date).toJSON()
    }),
    html: content,
    slug: filename
  };
}
function getAllPosts(sorter) {
  const slugs = getAllSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug)).sort(sorter || _utils__WEBPACK_IMPORTED_MODULE_3__["sortByDate"]);
  return posts;
}

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
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ "react-markdown/with-html");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "react-syntax-highlighter/dist/cjs/styles/hljs");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SEO */ "./components/SEO.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./utils.js");


var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\blog\\[slug].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const renderers = {
  code: ({
    language,
    value
  }) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["LightAsync"], {
      style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_4__["shadesOfPurple"],
      language: language,
      children: value,
      showLineNumbers: true,
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined);
  },
  pre: ({
    language,
    value
  }) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["LightAsync"], {
      style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_4__["shadesOfPurple"],
      language: language,
      children: value,
      showLineNumbers: true,
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined);
  }
};
function PostTemplate({
  html,
  frontmatter
}) {
  const {
    lang,
    date,
    tags,
    title,
    path
  } = frontmatter;
  const dir = lang === 'ar' ? 'rtl' : null;
  console.log(html);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SEO__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, frontmatter), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dir: dir,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [date, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: " \u2014 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: `https://twitter.com/intent/tweet?text=${title}&url=https://iamnabil.netlify.app${path}&hashtags=${tags}`,
          children: lang === 'ar' ? 'غرد هذه المقالة' : 'Tweet This'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "mt-0 mb-4",
        children: ["# ", title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
      dir: dir,
      className: "mt-24",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {
        renderers: renderers,
        allowDangerousHtml: true,
        children: html
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
async function getStaticProps({
  params: {
    slug
  }
}) {
  const post = Object(_api__WEBPACK_IMPORTED_MODULE_6__["getPostBySlug"])(slug);
  post.frontmatter.date = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(post.frontmatter.date, post.frontmatter.lang);
  return {
    props: _objectSpread({}, post)
  };
}
async function getStaticPaths() {
  const paths = Object(_api__WEBPACK_IMPORTED_MODULE_6__["getAllSlugs"])().map(slug => ({
    params: {
      slug: slug.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: formatDate, sortByDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
function formatDate(date, lang) {
  return new Date(date).toLocaleDateString(lang, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
function sortByDate(post1, post2) {
  return post1.date > post2.date ? '-1' : '1';
}

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

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/dist/cjs/styles/hljs":
/*!****************************************************************!*\
  !*** external "react-syntax-highlighter/dist/cjs/styles/hljs" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU0VPLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldEFsbFNsdWdzIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJwYXRoIiwiZW5kc1dpdGgiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsImZpbGVuYW1lIiwicmVwbGFjZSIsInRleHQiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiY29udGVudCIsIm1hdHRlciIsImZyb250bWF0dGVyIiwiZGF0ZSIsIkRhdGUiLCJ0b0pTT04iLCJodG1sIiwiZ2V0QWxsUG9zdHMiLCJzb3J0ZXIiLCJzbHVncyIsInBvc3RzIiwibWFwIiwic29ydCIsInNvcnRCeURhdGUiLCJob3N0bmFtZSIsImRlZmF1bHRUaXRsZSIsImRlZmF1bHREZXNjcmlwdGlvbiIsImRlZmF1bHRPR0ltYWdlUGF0aCIsImRlZmF1bHRQYXRoIiwiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9nSW1hZ2VVcmwiLCJ1cmwiLCJmaW5hbFRpdGxlIiwiZnVsbERlc2NyaXB0aW9uIiwicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJzaGFkZXNPZlB1cnBsZSIsInByZSIsIlBvc3RUZW1wbGF0ZSIsImxhbmciLCJ0YWdzIiwiZGlyIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicG9zdCIsImZvcm1hdERhdGUiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJwb3N0MSIsInBvc3QyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztR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R0FBZ0M7QUFDdEMsUUFBTUMsS0FBSyxHQUFHeEQsd0RBQVcsR0FBR3VCLEdBQWQsQ0FBa0JqQixJQUFJLEtBQUs7QUFDeEM2QyxVQUFNLEVBQUU7QUFBRTdDLFVBQUksRUFBRUEsSUFBSSxDQUFDRSxPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQjtBQUFSO0FBRGdDLEdBQUwsQ0FBdEIsQ0FBZDtBQUlBLFNBQU87QUFDTmdELFNBRE07QUFFTkMsWUFBUSxFQUFFO0FBRkosR0FBUDtBQUlBLEM7Ozs7Ozs7Ozs7OztBQzNGRDtBQUFBO0FBQUE7QUFBTyxTQUFTSixVQUFULENBQW9CdEMsSUFBcEIsRUFBMEI4QixJQUExQixFQUFnQztBQUN0QyxTQUFPLElBQUk3QixJQUFKLENBQVNELElBQVQsRUFBZTJDLGtCQUFmLENBQWtDYixJQUFsQyxFQUF3QztBQUM5Q2MsV0FBTyxFQUFFLE1BRHFDO0FBRTlDQyxRQUFJLEVBQUUsU0FGd0M7QUFHOUNDLFNBQUssRUFBRSxNQUh1QztBQUk5Q0MsT0FBRyxFQUFFO0FBSnlDLEdBQXhDLENBQVA7QUFNQTtBQUVNLFNBQVNyQyxVQUFULENBQW9Cc0MsS0FBcEIsRUFBMkJDLEtBQTNCLEVBQWtDO0FBQ3hDLFNBQU9ELEtBQUssQ0FBQ2hELElBQU4sR0FBYWlELEtBQUssQ0FBQ2pELElBQW5CLEdBQTBCLElBQTFCLEdBQWlDLEdBQXhDO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNYRCwrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9ibG9nL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmxvZy9bc2x1Z10uanNcIik7XG4iLCJpbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgc29ydEJ5RGF0ZSB9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCAnYmxvZycpXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxTbHVncygpIHtcblx0cmV0dXJuIHJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KS5maWx0ZXIocGF0aCA9PiBwYXRoLmVuZHNXaXRoKCcubWQnKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1Zykge1xuXHRjb25zdCBmaWxlbmFtZSA9IHNsdWcucmVwbGFjZSgvXFwubWQkLywgJycpXG5cdGNvbnN0IHBhdGggPSBqb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtmaWxlbmFtZX0ubWRgKVxuXHRjb25zdCB0ZXh0ID0gcmVhZEZpbGVTeW5jKHBhdGgsICd1dGYtOCcpXG5cblx0Y29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIodGV4dClcblxuXHRyZXR1cm4ge1xuXHRcdGZyb250bWF0dGVyOiB7XG5cdFx0XHQuLi5kYXRhLFxuXHRcdFx0ZGF0ZTogbmV3IERhdGUoZGF0YS5kYXRlKS50b0pTT04oKVxuXHRcdH0sXG5cdFx0aHRtbDogY29udGVudCxcblx0XHRzbHVnOiBmaWxlbmFtZVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhzb3J0ZXIpIHtcblx0Y29uc3Qgc2x1Z3MgPSBnZXRBbGxTbHVncygpXG5cdGNvbnN0IHBvc3RzID0gc2x1Z3Ncblx0XHQubWFwKHNsdWcgPT4gZ2V0UG9zdEJ5U2x1ZyhzbHVnKSlcblx0XHQuc29ydChzb3J0ZXIgfHwgc29ydEJ5RGF0ZSlcblxuXHRyZXR1cm4gcG9zdHNcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgaG9zdG5hbWUgPSAnaHR0cHM6Ly9pYW1uYWJpbC5uZXRsaWZ5LmFwcCdcclxuXHJcbmNvbnN0IGRlZmF1bHRUaXRsZSA9ICdCbG9nJ1xyXG5jb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSAnRnJvbnQtRW5kIEVuZ2luZWVyLCBCbG9nZ2VyLCBNZW50b3InXHJcbmNvbnN0IGRlZmF1bHRPR0ltYWdlUGF0aCA9ICcvb2dnZW5lcmFsLnBuZydcclxuY29uc3QgZGVmYXVsdFBhdGggPSAnLydcclxuXHJcbmZ1bmN0aW9uIFNFTyh7XHJcblx0dGl0bGUgPSBkZWZhdWx0VGl0bGUsXHJcblx0ZGVzY3JpcHRpb24gPSBkZWZhdWx0RGVzY3JpcHRpb24sXHJcblx0cGF0aCA9IGRlZmF1bHRQYXRoXHJcbn0pIHtcclxuXHRjb25zdCBvZ0ltYWdlVXJsID0gYCR7aG9zdG5hbWV9JHtkZWZhdWx0T0dJbWFnZVBhdGh9YFxyXG5cdGNvbnN0IHVybCA9IGAke2hvc3RuYW1lfSR7cGF0aH1gXHJcblx0Y29uc3QgZmluYWxUaXRsZSA9IHRpdGxlICsgJyB8IE5hYmlsIFRoYXJ3YXQnXHJcblx0Y29uc3QgZnVsbERlc2NyaXB0aW9uID0gYCR7ZGVzY3JpcHRpb259YFxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT57ZmluYWxUaXRsZX08L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmaW5hbFRpdGxlfSBwcm9wZXJ0eT0nb2c6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J3dlYnNpdGUnIHByb3BlcnR5PSdvZzp0eXBlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IG5hbWU9J2Rlc2NyaXB0aW9uJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtmdWxsRGVzY3JpcHRpb259IHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgLz5cclxuXHRcdFx0PG1ldGEgY29udGVudD17dXJsfSBwcm9wZXJ0eT0nb2c6dXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdOYWJpbCBUaGFyd2F0JyBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0nb2c6aW1hZ2UnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9eydpbWFnZS9qcGVnJ30gcHJvcGVydHk9J29nOmltYWdlOnR5cGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTp1cmwnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IHByb3BlcnR5PSdvZzppbWFnZTpzZWN1cmVfdXJsJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyBuYW1lPSd0d2l0dGVyOmNhcmQnPjwvbWV0YT5cclxuXHRcdFx0PG1ldGEgY29udGVudD17ZmluYWxUaXRsZX0gcHJvcGVydHk9J3R3aXR0ZXI6dGl0bGUnIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9e2Z1bGxEZXNjcmlwdGlvbn0gcHJvcGVydHk9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIC8+XHJcblx0XHRcdDxtZXRhIGNvbnRlbnQ9J0BOYWJpbF9UaGFyd2F0JyBwcm9wZXJ0eT0ndHdpdHRlcjpjcmVhdG9yJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PSdATmFiaWxfVGhhcndhdDE2JyBwcm9wZXJ0eT0ndHdpdHRlcjpzaXRlJyAvPlxyXG5cdFx0XHQ8bWV0YSBjb250ZW50PXtvZ0ltYWdlVXJsfSBwcm9wZXJ0eT0ndHdpdHRlcjppbWFnZScgLz5cclxuXHRcdFx0PGh0bWwgbGFuZz0nZW4tR0InIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTRU9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJ1xuXG5pbXBvcnQgeyBMaWdodEFzeW5jIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJ1xuaW1wb3J0IHsgc2hhZGVzT2ZQdXJwbGUgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanMnXG5cbmltcG9ydCBTRU8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TRU8nXG5cbmltcG9ydCB7IGdldEFsbFNsdWdzLCBnZXRQb3N0QnlTbHVnIH0gZnJvbSAnLi4vLi4vYXBpJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCByZW5kZXJlcnMgPSB7XG5cdGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxTeW50YXhIaWdobGlnaHRlclxuXHRcdFx0XHRzdHlsZT17c2hhZGVzT2ZQdXJwbGV9XG5cdFx0XHRcdGxhbmd1YWdlPXtsYW5ndWFnZX1cblx0XHRcdFx0Y2hpbGRyZW49e3ZhbHVlfVxuXHRcdFx0XHRzaG93TGluZU51bWJlcnNcblx0XHRcdFx0Y2hpbGRyZW49e3ZhbHVlfVxuXHRcdFx0Lz5cblx0XHQpXG5cdH0sXG5cdHByZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN5bnRheEhpZ2hsaWdodGVyXG5cdFx0XHRcdHN0eWxlPXtzaGFkZXNPZlB1cnBsZX1cblx0XHRcdFx0bGFuZ3VhZ2U9e2xhbmd1YWdlfVxuXHRcdFx0XHRjaGlsZHJlbj17dmFsdWV9XG5cdFx0XHRcdHNob3dMaW5lTnVtYmVyc1xuXHRcdFx0XHRjaGlsZHJlbj17dmFsdWV9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGVtcGxhdGUoeyBodG1sLCBmcm9udG1hdHRlciB9KSB7XG5cdGNvbnN0IHsgbGFuZywgZGF0ZSwgdGFncywgdGl0bGUsIHBhdGggfSA9IGZyb250bWF0dGVyXG5cdGNvbnN0IGRpciA9IGxhbmcgPT09ICdhcicgPyAncnRsJyA6IG51bGxcblxuXHRjb25zb2xlLmxvZyhodG1sKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTRU8gey4uLmZyb250bWF0dGVyfSAvPlxuXHRcdFx0PGRpdiBkaXI9e2Rpcn0+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdHtkYXRlfVxuXHRcdFx0XHRcdDxzcGFuPiDigJQgPC9zcGFuPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3RpdGxlfSZ1cmw9aHR0cHM6Ly9pYW1uYWJpbC5uZXRsaWZ5LmFwcCR7cGF0aH0maGFzaHRhZ3M9JHt0YWdzfWB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2xhbmcgPT09ICdhcicgPyAn2LrYsdivINmH2LDZhyDYp9mE2YXZgtin2YTYqScgOiAnVHdlZXQgVGhpcyd9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J210LTAgbWItNCc+IyB7dGl0bGV9PC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGhyIC8+XG5cdFx0XHQ8YXJ0aWNsZSBkaXI9e2Rpcn0gY2xhc3NOYW1lPSdtdC0yNCc+XG5cdFx0XHRcdDxSZWFjdE1hcmtkb3duIHJlbmRlcmVycz17cmVuZGVyZXJzfSBhbGxvd0Rhbmdlcm91c0h0bWw+XG5cdFx0XHRcdFx0e2h0bWx9XG5cdFx0XHRcdDwvUmVhY3RNYXJrZG93bj5cblx0XHRcdDwvYXJ0aWNsZT5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcblx0Y29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcoc2x1ZylcblxuXHRwb3N0LmZyb250bWF0dGVyLmRhdGUgPSBmb3JtYXREYXRlKFxuXHRcdHBvc3QuZnJvbnRtYXR0ZXIuZGF0ZSxcblx0XHRwb3N0LmZyb250bWF0dGVyLmxhbmdcblx0KVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdC4uLnBvc3Rcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXHRjb25zdCBwYXRocyA9IGdldEFsbFNsdWdzKCkubWFwKHNsdWcgPT4gKHtcblx0XHRwYXJhbXM6IHsgc2x1Zzogc2x1Zy5yZXBsYWNlKCcubWQnLCAnJykgfVxuXHR9KSlcblxuXHRyZXR1cm4ge1xuXHRcdHBhdGhzLFxuXHRcdGZhbGxiYWNrOiBmYWxzZVxuXHR9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBsYW5nKSB7XG5cdHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcobGFuZywge1xuXHRcdHdlZWtkYXk6ICdsb25nJyxcblx0XHR5ZWFyOiAnbnVtZXJpYycsXG5cdFx0bW9udGg6ICdsb25nJyxcblx0XHRkYXk6ICdudW1lcmljJ1xuXHR9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEJ5RGF0ZShwb3N0MSwgcG9zdDIpIHtcblx0cmV0dXJuIHBvc3QxLmRhdGUgPiBwb3N0Mi5kYXRlID8gJy0xJyA6ICcxJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=