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
      showLineNumbers: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOlsicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJhMTF5RGFyayIsIlBvc3RUZW1wbGF0ZSIsImh0bWwiLCJmcm9udG1hdHRlciIsImxhbmciLCJkYXRlIiwidGFncyIsInRpdGxlIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EsSUFBTUEsU0FBUyxHQUFHO0FBQ2pCQyxNQUFJLEVBQUUsb0JBQXlCO0FBQUEsUUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLFFBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUM5Qix3QkFDQyxxRUFBQyw4REFBRDtBQUNDLFdBQUssRUFBRUMsc0ZBRFI7QUFFQyxjQUFRLEVBQUVGLFFBRlg7QUFHQyxjQUFRLEVBQUVDLEtBSFg7QUFJQyxxQkFBZTtBQUpoQixtQkFNRUEsS0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFVQTtBQVpnQixDQUFsQjs7QUFlZSxTQUFTRSxZQUFULFFBQTZDO0FBQUEsTUFBckJDLElBQXFCLFNBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFdBQWUsU0FBZkEsV0FBZTtBQUFBLE1BQ25EQyxJQURtRCxHQUNqQkQsV0FEaUIsQ0FDbkRDLElBRG1EO0FBQUEsTUFDN0NDLElBRDZDLEdBQ2pCRixXQURpQixDQUM3Q0UsSUFENkM7QUFBQSxNQUN2Q0MsSUFEdUMsR0FDakJILFdBRGlCLENBQ3ZDRyxJQUR1QztBQUFBLE1BQ2pDQyxLQURpQyxHQUNqQkosV0FEaUIsQ0FDakNJLEtBRGlDO0FBQUEsTUFDMUJDLElBRDBCLEdBQ2pCTCxXQURpQixDQUMxQkssSUFEMEIsRUFFM0Q7O0FBRUEsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyx1REFBRCxvQkFBU0wsV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLDhCQUNDO0FBQUEsa0JBQU9FO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQUdDO0FBQUEsK0JBQ0M7QUFDQyxjQUFJLGtEQUEyQ0UsS0FBM0MsOENBQW9GQyxJQUFwRix1QkFBcUdGLElBQXJHLENBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFVQztBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBLGtCQUEyQkM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBZUM7QUFBQSw2QkFDQyxxRUFBQywrREFBRDtBQUFlLGlCQUFTLEVBQUVYLFNBQTFCO0FBQXFDLDBCQUFrQixNQUF2RDtBQUFBLGtCQUNFTTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkQ7QUFBQSxrQkFERDtBQXVCQTtLQTNCdUJELFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9bc2x1Z10uMDI1OTRmNzMyZWY1N2E1NDJhMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCdcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJ1xuaW1wb3J0IHsgYTExeURhcmsgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanMnXG5cbmltcG9ydCBTRU8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TRU8nXG5cbmltcG9ydCB7IGdldEFsbFNsdWdzLCBnZXRQb3N0QnlTbHVnIH0gZnJvbSAnLi4vLi4vYXBpJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCByZW5kZXJlcnMgPSB7XG5cdGNvZGU6ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxTeW50YXhIaWdobGlnaHRlclxuXHRcdFx0XHRzdHlsZT17YTExeURhcmt9XG5cdFx0XHRcdGxhbmd1YWdlPXtsYW5ndWFnZX1cblx0XHRcdFx0Y2hpbGRyZW49e3ZhbHVlfVxuXHRcdFx0XHRzaG93TGluZU51bWJlcnNcblx0XHRcdD5cblx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0PC9TeW50YXhIaWdobGlnaHRlcj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFRlbXBsYXRlKHsgaHRtbCwgZnJvbnRtYXR0ZXIgfSkge1xuXHRjb25zdCB7IGxhbmcsIGRhdGUsIHRhZ3MsIHRpdGxlLCBwYXRoIH0gPSBmcm9udG1hdHRlclxuXHQvLyBjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZyA9PT0gJ2FyJyA/ICdydGwnIDogbnVsbFxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTRU8gey4uLmZyb250bWF0dGVyfSAvPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW4+e2RhdGV9PC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4g4oCUIDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7dGl0bGV9JnVybD1odHRwczovL2lhbW5hYmlsLm5ldGxpZnkuYXBwJHtwYXRofSZoYXNodGFncz0ke3RhZ3N9YH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRUd2VldCBUaGlzXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9J210LTAgbWItNCc+e3RpdGxlfTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdDxSZWFjdE1hcmtkb3duIHJlbmRlcmVycz17cmVuZGVyZXJzfSBhbGxvd0Rhbmdlcm91c0h0bWw+XG5cdFx0XHRcdFx0e2h0bWx9XG5cdFx0XHRcdDwvUmVhY3RNYXJrZG93bj5cblx0XHRcdDwvYXJ0aWNsZT5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcblx0Y29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcoc2x1ZylcblxuXHRwb3N0LmZyb250bWF0dGVyLmRhdGUgPSBmb3JtYXREYXRlKFxuXHRcdHBvc3QuZnJvbnRtYXR0ZXIuZGF0ZSxcblx0XHRwb3N0LmZyb250bWF0dGVyLmxhbmdcblx0KVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdC4uLnBvc3Rcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuXHRjb25zdCBwYXRocyA9IGdldEFsbFNsdWdzKCkubWFwKHNsdWcgPT4gKHtcblx0XHRwYXJhbXM6IHsgc2x1Zzogc2x1Zy5yZXBsYWNlKCcubWQnLCAnJykgfVxuXHR9KSlcblxuXHRyZXR1cm4ge1xuXHRcdHBhdGhzLFxuXHRcdGZhbGxiYWNrOiBmYWxzZVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9