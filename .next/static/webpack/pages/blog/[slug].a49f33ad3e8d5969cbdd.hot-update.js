webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostTemplate; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SEO */ "./components/SEO.jsx");




var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\blog\\[slug].js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var renderers = {
  code: function code(_ref) {
    var language = _ref.language,
        value = _ref.value;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__["Prism"], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__["a11yDark"],
      language: language,
      children: value,
      showLineNumbers: true,
      useInlineStyles: false
    }, "children", value), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this);
  }
};
var __N_SSG = true;
function PostTemplate(_ref2) {
  var html = _ref2.html,
      frontmatter = _ref2.frontmatter;
  var lang = frontmatter.lang,
      date = frontmatter.date,
      tags = frontmatter.tags,
      title = frontmatter.title,
      path = frontmatter.path; // const languageClass = lang === 'ar' ? 'rtl' : null

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_SEO__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, frontmatter), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: " \u2014 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://twitter.com/intent/tweet?text=".concat(title, "&url=https://iamnabil.netlify.app").concat(path, "&hashtags=").concat(tags),
          children: "Tweet This"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "mt-0 mb-4",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3___default.a, {
        renderers: renderers,
        allowDangerousHtml: true,
        children: html
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
_c = PostTemplate;

var _c;

$RefreshReg$(_c, "PostTemplate");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOlsicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJhMTF5RGFyayIsIlBvc3RUZW1wbGF0ZSIsImh0bWwiLCJmcm9udG1hdHRlciIsImxhbmciLCJkYXRlIiwidGFncyIsInRpdGxlIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EsSUFBTUEsU0FBUyxHQUFHO0FBQ2pCQyxNQUFJLEVBQUUsb0JBQXlCO0FBQUEsUUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLFFBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM5Qix3QkFDQyxxRUFBQyw4REFBRDtBQUNDLFdBQUssRUFBRUMsc0ZBRFI7QUFFQyxjQUFRLEVBQUVGLFFBRlg7QUFHQyxjQUFRLEVBQUVDLEtBSFg7QUFJQyxxQkFBZSxNQUpoQjtBQUtDLHFCQUFlLEVBQUU7QUFMbEIsbUJBTVdBLEtBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBVUE7QUFaZ0IsQ0FBbEI7O0FBZWUsU0FBU0UsWUFBVCxRQUE2QztBQUFBLE1BQXJCQyxJQUFxQixTQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxXQUFlLFNBQWZBLFdBQWU7QUFBQSxNQUNuREMsSUFEbUQsR0FDakJELFdBRGlCLENBQ25EQyxJQURtRDtBQUFBLE1BQzdDQyxJQUQ2QyxHQUNqQkYsV0FEaUIsQ0FDN0NFLElBRDZDO0FBQUEsTUFDdkNDLElBRHVDLEdBQ2pCSCxXQURpQixDQUN2Q0csSUFEdUM7QUFBQSxNQUNqQ0MsS0FEaUMsR0FDakJKLFdBRGlCLENBQ2pDSSxLQURpQztBQUFBLE1BQzFCQyxJQUQwQixHQUNqQkwsV0FEaUIsQ0FDMUJLLElBRDBCLEVBRTNEOztBQUVBLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsdURBQUQsb0JBQVNMLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQSw4QkFDQztBQUFBLGtCQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFBLCtCQUNDO0FBQ0MsY0FBSSxrREFBMkNFLEtBQTNDLDhDQUFvRkMsSUFBcEYsdUJBQXFHRixJQUFyRyxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhELGVBVUM7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQSxrQkFBMkJDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQWVDO0FBQUEsNkJBQ0MscUVBQUMsK0RBQUQ7QUFBZSxpQkFBUyxFQUFFWCxTQUExQjtBQUFxQywwQkFBa0IsTUFBdkQ7QUFBQSxrQkFDRU07QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZEO0FBQUEsa0JBREQ7QUF1QkE7S0EzQnVCRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvW3NsdWddLmE0OWYzM2FkM2U4ZDU5NjljYmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bi93aXRoLWh0bWwnXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcidcbmltcG9ydCB7IGExMXlEYXJrIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzJ1xuXG5pbXBvcnQgU0VPIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU0VPJ1xuXG5pbXBvcnQgeyBnZXRBbGxTbHVncywgZ2V0UG9zdEJ5U2x1ZyB9IGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgcmVuZGVyZXJzID0ge1xuXHRjb2RlOiAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8U3ludGF4SGlnaGxpZ2h0ZXJcblx0XHRcdFx0c3R5bGU9e2ExMXlEYXJrfVxuXHRcdFx0XHRsYW5ndWFnZT17bGFuZ3VhZ2V9XG5cdFx0XHRcdGNoaWxkcmVuPXt2YWx1ZX1cblx0XHRcdFx0c2hvd0xpbmVOdW1iZXJzXG5cdFx0XHRcdHVzZUlubGluZVN0eWxlcz17ZmFsc2V9XG5cdFx0XHRcdGNoaWxkcmVuPXt2YWx1ZX1cblx0XHRcdC8+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RUZW1wbGF0ZSh7IGh0bWwsIGZyb250bWF0dGVyIH0pIHtcblx0Y29uc3QgeyBsYW5nLCBkYXRlLCB0YWdzLCB0aXRsZSwgcGF0aCB9ID0gZnJvbnRtYXR0ZXJcblx0Ly8gY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmcgPT09ICdhcicgPyAncnRsJyA6IG51bGxcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U0VPIHsuLi5mcm9udG1hdHRlcn0gLz5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzcGFuPntkYXRlfTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+IOKAlCA8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke3RpdGxlfSZ1cmw9aHR0cHM6Ly9pYW1uYWJpbC5uZXRsaWZ5LmFwcCR7cGF0aH0maGFzaHRhZ3M9JHt0YWdzfWB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0VHdlZXQgVGhpc1xuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdtdC0wIG1iLTQnPnt0aXRsZX08L2gxPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHQ8UmVhY3RNYXJrZG93biByZW5kZXJlcnM9e3JlbmRlcmVyc30gYWxsb3dEYW5nZXJvdXNIdG1sPlxuXHRcdFx0XHRcdHtodG1sfVxuXHRcdFx0XHQ8L1JlYWN0TWFya2Rvd24+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XG5cdGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHNsdWcpXG5cblx0cG9zdC5mcm9udG1hdHRlci5kYXRlID0gZm9ybWF0RGF0ZShcblx0XHRwb3N0LmZyb250bWF0dGVyLmRhdGUsXG5cdFx0cG9zdC5mcm9udG1hdHRlci5sYW5nXG5cdClcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHQuLi5wb3N0XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblx0Y29uc3QgcGF0aHMgPSBnZXRBbGxTbHVncygpLm1hcChzbHVnID0+ICh7XG5cdFx0cGFyYW1zOiB7IHNsdWc6IHNsdWcucmVwbGFjZSgnLm1kJywgJycpIH1cblx0fSkpXG5cblx0cmV0dXJuIHtcblx0XHRwYXRocyxcblx0XHRmYWxsYmFjazogZmFsc2Vcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==