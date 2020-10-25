webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/Post.jsx":
/*!*****************************!*\
  !*** ./components/Post.jsx ***!
  \*****************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./utils.js");


var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\components\\Post.jsx",
    _this = undefined;




var Post = function Post(_ref) {
  var slug = _ref.slug,
      frontmatter = _ref.frontmatter;
  var lang = frontmatter.lang,
      title = frontmatter.title,
      date = frontmatter.date,
      description = frontmatter.description,
      category = frontmatter.category;
  var dir = lang === 'ar' ? 'dir-rtl' : null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "list-none mb-12 text-center ".concat(dir),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "block mb-4",
      children: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(date, lang), " // ", category]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/blog/".concat(slug),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "mx-auto bg-transparent",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "mt-2 mx-auto text-4xl inline",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mt-4 text-xl",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, _this);
};
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzeCJdLCJuYW1lcyI6WyJQb3N0Iiwic2x1ZyIsImZyb250bWF0dGVyIiwibGFuZyIsInRpdGxlIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJkaXIiLCJmb3JtYXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUEsTUFDdENDLElBRHNDLEdBQ09ELFdBRFAsQ0FDdENDLElBRHNDO0FBQUEsTUFDaENDLEtBRGdDLEdBQ09GLFdBRFAsQ0FDaENFLEtBRGdDO0FBQUEsTUFDekJDLElBRHlCLEdBQ09ILFdBRFAsQ0FDekJHLElBRHlCO0FBQUEsTUFDbkJDLFdBRG1CLEdBQ09KLFdBRFAsQ0FDbkJJLFdBRG1CO0FBQUEsTUFDTkMsUUFETSxHQUNPTCxXQURQLENBQ05LLFFBRE07QUFHOUMsTUFBTUMsR0FBRyxHQUFHTCxJQUFJLEtBQUssSUFBVCxHQUFnQixTQUFoQixHQUE0QixJQUF4QztBQUVBLHNCQUNDO0FBQUksYUFBUyx3Q0FBaUNLLEdBQWpDLENBQWI7QUFBQSw0QkFDQztBQUFNLGVBQVMsRUFBQyxZQUFoQjtBQUFBLGlCQUNFQyx5REFBVSxDQUFDSixJQUFELEVBQU9GLElBQVAsQ0FEWixVQUM4QkksUUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksa0JBQVdOLElBQVgsQ0FBVjtBQUFBLDZCQUNDO0FBQUcsaUJBQVMsRUFBQyx3QkFBYjtBQUFBLCtCQUNDO0FBQUksbUJBQVMsRUFBQyw4QkFBZDtBQUFBLG9CQUE4Q0c7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkQsZUFTQztBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQUEsZ0JBQTZCRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFhQSxDQWxCTTtLQUFNTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNjM0NWVjNmE2Zjg2ZDEyOTg2NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgUG9zdCA9ICh7IHNsdWcsIGZyb250bWF0dGVyIH0pID0+IHtcblx0Y29uc3QgeyBsYW5nLCB0aXRsZSwgZGF0ZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5IH0gPSBmcm9udG1hdHRlclxuXG5cdGNvbnN0IGRpciA9IGxhbmcgPT09ICdhcicgPyAnZGlyLXJ0bCcgOiBudWxsXG5cblx0cmV0dXJuIChcblx0XHQ8bGkgY2xhc3NOYW1lPXtgbGlzdC1ub25lIG1iLTEyIHRleHQtY2VudGVyICR7ZGlyfWB9PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdibG9jayBtYi00Jz5cblx0XHRcdFx0e2Zvcm1hdERhdGUoZGF0ZSwgbGFuZyl9IC8vIHtjYXRlZ29yeX1cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxMaW5rIGhyZWY9e2AvYmxvZy8ke3NsdWd9YH0+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT0nbXgtYXV0byBiZy10cmFuc3BhcmVudCc+XG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT0nbXQtMiBteC1hdXRvIHRleHQtNHhsIGlubGluZSc+e3RpdGxlfTwvaDI+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtNCB0ZXh0LXhsJz57ZGVzY3JpcHRpb259PC9wPlxuXHRcdDwvbGk+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=