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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__["LightAsync"], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__["shadesOfPurple"],
      language: language,
      children: value,
      showLineNumbers: true
    }, "children", value), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this);
  },
  pre: function pre(_ref2) {
    var language = _ref2.language,
        value = _ref2.value;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__["LightAsync"], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__["shadesOfPurple"],
      language: language,
      children: value,
      showLineNumbers: true
    }, "children", value), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this);
  }
};
var __N_SSG = true;
function PostTemplate(_ref3) {
  var html = _ref3.html,
      frontmatter = _ref3.frontmatter;
  var lang = frontmatter.lang,
      date = frontmatter.date,
      tags = frontmatter.tags,
      title = frontmatter.title,
      path = frontmatter.path;
  var dir = lang === 'ar' ? 'rtl' : null;
  console.log(html);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_SEO__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, frontmatter), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      dir: dir,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: " \u2014 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://twitter.com/intent/tweet?text=".concat(title, "&url=https://iamnabil.netlify.app").concat(path, "&hashtags=").concat(tags),
          children: lang === 'ar' ? 'غرد هذه المقالة' : 'Tweet This'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "mt-0 mb-4",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
      dir: dir,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3___default.a, {
        renderers: renderers,
        allowDangerousHtml: true,
        children: html
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOlsicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJzaGFkZXNPZlB1cnBsZSIsInByZSIsIlBvc3RUZW1wbGF0ZSIsImh0bWwiLCJmcm9udG1hdHRlciIsImxhbmciLCJkYXRlIiwidGFncyIsInRpdGxlIiwicGF0aCIsImRpciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBLElBQU1BLFNBQVMsR0FBRztBQUNqQkMsTUFBSSxFQUFFLG9CQUF5QjtBQUFBLFFBQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxRQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDOUIsd0JBQ0MscUVBQUMsbUVBQUQ7QUFDQyxXQUFLLEVBQUVDLDRGQURSO0FBRUMsY0FBUSxFQUFFRixRQUZYO0FBR0MsY0FBUSxFQUFFQyxLQUhYO0FBSUMscUJBQWU7QUFKaEIsbUJBS1dBLEtBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBU0EsR0FYZ0I7QUFZakJFLEtBQUcsRUFBRSxvQkFBeUI7QUFBQSxRQUF0QkgsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsUUFBWkMsS0FBWSxTQUFaQSxLQUFZO0FBQzdCLHdCQUNDLHFFQUFDLG1FQUFEO0FBQ0MsV0FBSyxFQUFFQyw0RkFEUjtBQUVDLGNBQVEsRUFBRUYsUUFGWDtBQUdDLGNBQVEsRUFBRUMsS0FIWDtBQUlDLHFCQUFlO0FBSmhCLG1CQUtXQSxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQVNBO0FBdEJnQixDQUFsQjs7QUF5QmUsU0FBU0csWUFBVCxRQUE2QztBQUFBLE1BQXJCQyxJQUFxQixTQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxXQUFlLFNBQWZBLFdBQWU7QUFBQSxNQUNuREMsSUFEbUQsR0FDakJELFdBRGlCLENBQ25EQyxJQURtRDtBQUFBLE1BQzdDQyxJQUQ2QyxHQUNqQkYsV0FEaUIsQ0FDN0NFLElBRDZDO0FBQUEsTUFDdkNDLElBRHVDLEdBQ2pCSCxXQURpQixDQUN2Q0csSUFEdUM7QUFBQSxNQUNqQ0MsS0FEaUMsR0FDakJKLFdBRGlCLENBQ2pDSSxLQURpQztBQUFBLE1BQzFCQyxJQUQwQixHQUNqQkwsV0FEaUIsQ0FDMUJLLElBRDBCO0FBRTNELE1BQU1DLEdBQUcsR0FBR0wsSUFBSSxLQUFLLElBQVQsR0FBZ0IsS0FBaEIsR0FBd0IsSUFBcEM7QUFFQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7QUFFQSxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFELG9CQUFTQyxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUssU0FBRyxFQUFFTSxHQUFWO0FBQUEsOEJBQ0M7QUFBQSxrQkFBT0o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBR0M7QUFBQSwrQkFDQztBQUNDLGNBQUksa0RBQTJDRSxLQUEzQyw4Q0FBb0ZDLElBQXBGLHVCQUFxR0YsSUFBckcsQ0FETDtBQUFBLG9CQUdFRixJQUFJLEtBQUssSUFBVCxHQUFnQixpQkFBaEIsR0FBb0M7QUFIdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQVVDO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsa0JBQTJCRztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFlQztBQUFTLFNBQUcsRUFBRUUsR0FBZDtBQUFBLDZCQUNDLHFFQUFDLCtEQUFEO0FBQWUsaUJBQVMsRUFBRWQsU0FBMUI7QUFBcUMsMEJBQWtCLE1BQXZEO0FBQUEsa0JBQ0VPO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRDtBQUFBLGtCQUREO0FBdUJBO0tBN0J1QkQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tzbHVnXS5hYWUxYjljYThiMzNiZjE0MzY4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJ1xuaW1wb3J0IHsgTGlnaHRBc3luYyBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcidcbmltcG9ydCB7IHNoYWRlc09mUHVycGxlIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzJ1xuXG5pbXBvcnQgU0VPIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU0VPJ1xuXG5pbXBvcnQgeyBnZXRBbGxTbHVncywgZ2V0UG9zdEJ5U2x1ZyB9IGZyb20gJy4uLy4uL2FwaSdcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgcmVuZGVyZXJzID0ge1xuXHRjb2RlOiAoeyBsYW5ndWFnZSwgdmFsdWUgfSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8U3ludGF4SGlnaGxpZ2h0ZXJcblx0XHRcdFx0c3R5bGU9e3NoYWRlc09mUHVycGxlfVxuXHRcdFx0XHRsYW5ndWFnZT17bGFuZ3VhZ2V9XG5cdFx0XHRcdGNoaWxkcmVuPXt2YWx1ZX1cblx0XHRcdFx0c2hvd0xpbmVOdW1iZXJzXG5cdFx0XHRcdGNoaWxkcmVuPXt2YWx1ZX1cblx0XHRcdC8+XG5cdFx0KVxuXHR9LFxuXHRwcmU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxTeW50YXhIaWdobGlnaHRlclxuXHRcdFx0XHRzdHlsZT17c2hhZGVzT2ZQdXJwbGV9XG5cdFx0XHRcdGxhbmd1YWdlPXtsYW5ndWFnZX1cblx0XHRcdFx0Y2hpbGRyZW49e3ZhbHVlfVxuXHRcdFx0XHRzaG93TGluZU51bWJlcnNcblx0XHRcdFx0Y2hpbGRyZW49e3ZhbHVlfVxuXHRcdFx0Lz5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRlbXBsYXRlKHsgaHRtbCwgZnJvbnRtYXR0ZXIgfSkge1xuXHRjb25zdCB7IGxhbmcsIGRhdGUsIHRhZ3MsIHRpdGxlLCBwYXRoIH0gPSBmcm9udG1hdHRlclxuXHRjb25zdCBkaXIgPSBsYW5nID09PSAnYXInID8gJ3J0bCcgOiBudWxsXG5cblx0Y29uc29sZS5sb2coaHRtbClcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U0VPIHsuLi5mcm9udG1hdHRlcn0gLz5cblx0XHRcdDxkaXYgZGlyPXtkaXJ9PlxuXHRcdFx0XHQ8c3Bhbj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuPiDigJQgPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHt0aXRsZX0mdXJsPWh0dHBzOi8vaWFtbmFiaWwubmV0bGlmeS5hcHAke3BhdGh9Jmhhc2h0YWdzPSR7dGFnc31gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtsYW5nID09PSAnYXInID8gJ9i62LHYryDZh9iw2Ycg2KfZhNmF2YLYp9mE2KknIDogJ1R3ZWV0IFRoaXMnfVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdtdC0wIG1iLTQnPnt0aXRsZX08L2gxPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxhcnRpY2xlIGRpcj17ZGlyfT5cblx0XHRcdFx0PFJlYWN0TWFya2Rvd24gcmVuZGVyZXJzPXtyZW5kZXJlcnN9IGFsbG93RGFuZ2Vyb3VzSHRtbD5cblx0XHRcdFx0XHR7aHRtbH1cblx0XHRcdFx0PC9SZWFjdE1hcmtkb3duPlxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xuXHRjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhzbHVnKVxuXG5cdHBvc3QuZnJvbnRtYXR0ZXIuZGF0ZSA9IGZvcm1hdERhdGUoXG5cdFx0cG9zdC5mcm9udG1hdHRlci5kYXRlLFxuXHRcdHBvc3QuZnJvbnRtYXR0ZXIubGFuZ1xuXHQpXG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0Li4ucG9zdFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cdGNvbnN0IHBhdGhzID0gZ2V0QWxsU2x1Z3MoKS5tYXAoc2x1ZyA9PiAoe1xuXHRcdHBhcmFtczogeyBzbHVnOiBzbHVnLnJlcGxhY2UoJy5tZCcsICcnKSB9XG5cdH0pKVxuXG5cdHJldHVybiB7XG5cdFx0cGF0aHMsXG5cdFx0ZmFsbGJhY2s6IGZhbHNlXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=