webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/checkForListedLanguage.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/checkForListedLanguage.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/create-element.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/create-element.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleObject = createStyleObject;
exports.createClassNameString = createClassNameString;
exports.createChildren = createChildren;
exports.default = createElement;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

// Get all possible permutations of all power sets
//
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 3
function powerSetPermutations(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;

  if (arr.length === 2) {
    // prettier-ignore
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }

  if (arr.length >= 3) {
    // Currently does not support more than 3 extra
    // class names (after `.token` has been removed)
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}

var classNameCombinations = {};

function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join('.');

  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }

  return classNameCombinations[key];
}

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  var nonTokenClassNames = classNames.filter(function (className) {
    return className !== 'token';
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function (styleObject, className) {
    return (0, _objectSpread2.default)({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;

    if (!useInlineStyles) {
      props = (0, _objectSpread2.default)({}, properties, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function (classes, selector) {
        selector.split('.').forEach(function (className) {
          if (!classes.includes(className)) classes.push(className);
        });
        return classes;
      }, []); // For compatibility with older versions of react-syntax-highlighter

      var startingClassName = properties.className && properties.className.includes('token') ? ['token'] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function (className) {
        return !allStylesheetSelectors.includes(className);
      }));
      props = (0, _objectSpread2.default)({}, properties, {
        className: createClassNameString(className) || undefined,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }

    var children = childrenCreator(node.children);
    return _react.default.createElement(TagName, (0, _extends2.default)({
      key: key
    }, props), children);
  }
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/highlight.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/highlight.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createElement = _interopRequireDefault(__webpack_require__(/*! ./create-element */ "./node_modules/react-syntax-highlighter/dist/cjs/create-element.js"));

var _checkForListedLanguage = _interopRequireDefault(__webpack_require__(/*! ./checkForListedLanguage */ "./node_modules/react-syntax-highlighter/dist/cjs/checkForListedLanguage.js"));

var newLineRegex = /\n/g;

function getNewLines(str) {
  return str.match(newLineRegex);
}

function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return _react.default.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === 'function' ? style(number) : style
    }, "".concat(number, "\n"));
  });
}

function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === void 0 ? {
    float: 'left',
    paddingRight: '10px'
  } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;
  return _react.default.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    style: numberStyle,
    startingLineNumber: startingLineNumber
  }));
}

function getEmWidthOfNumber(num) {
  var len = num.toString().length;
  return "".concat(len, "em");
}

function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: inlineLineNumberStyle
    },
    children: [{
      type: 'text',
      value: lineNumber
    }]
  };
}

function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  // minimally necessary styling for line numbers
  var defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  }; // prep custom styling

  var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle; // combine

  var assembledStyle = (0, _objectSpread2.default)({}, defaultLineNumberStyle, customLineNumberStyle);
  return assembledStyle;
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineNumberStyle = _ref3.lineNumberStyle,
      largestLineNumber = _ref3.largestLineNumber,
      showInlineLineNumbers = _ref3.showInlineLineNumbers,
      _ref3$lineProps = _ref3.lineProps,
      lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className,
      showLineNumbers = _ref3.showLineNumbers,
      wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;

  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }

  if (wrapLongLines & showLineNumbers) {
    properties.style = (0, _objectSpread2.default)({}, properties.style, {
      display: 'flex'
    });
  }

  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: (0, _toConsumableArray2.default)(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }

  return newTree;
}

function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;

  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  function createWrappedLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return createLineElement({
      children: children,
      lineNumber: lineNumber,
      lineNumberStyle: lineNumberStyle,
      largestLineNumber: largestLineNumber,
      showInlineLineNumbers: showInlineLineNumbers,
      lineProps: lineProps,
      className: className,
      showLineNumbers: showLineNumbers,
      wrapLongLines: wrapLongLines
    });
  }

  function createUnwrappedLine(children, lineNumber) {
    if (showLineNumbers && lineNumber && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
      children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
    }

    return children;
  }

  function createLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
  }

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);

    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        }; // if it's the first line

        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));

          var _line = createLine(_children, lineNumber);

          newTree.push(_line); // if it's the last line
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];

          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: 'text',
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [newChild];

            var _line2 = createLine(_children2, lineNumber, node.properties.className);

            newTree.push(_line2);
          } // if it's neither the first nor the last line

        } else {
          var _children3 = [newChild];

          var _line3 = createLine(_children3, lineNumber, node.properties.className);

          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }

    index++;
  };

  while (index < tree.length) {
    _loop();
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);

    if (children && children.length) {
      var lineNumber = newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }

  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}

function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
      stylesheet = _ref5.stylesheet,
      useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function (node, i) {
    return (0, _createElement.default)({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
} // only highlight.js has the highlightAuto method


function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}

function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
      language = _ref6.language,
      code = _ref6.code,
      defaultCodeValue = _ref6.defaultCodeValue;

  // figure out whether we're using lowlight/highlight or refractor/prism
  // then attempt highlighting accordingly
  // lowlight/highlight?
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = (0, _checkForListedLanguage.default)(astGenerator, language);

    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  } // must be refractor/prism, then


  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}

function _default(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref7) {
    var language = _ref7.language,
        children = _ref7.children,
        _ref7$style = _ref7.style,
        style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
        _ref7$customStyle = _ref7.customStyle,
        customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
        _ref7$codeTagProps = _ref7.codeTagProps,
        codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : undefined,
      style: (0, _objectSpread2.default)({}, style['code[class*="language-"]'], style["code[class*=\"language-".concat(language, "\"]")])
    } : _ref7$codeTagProps,
        _ref7$useInlineStyles = _ref7.useInlineStyles,
        useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles,
        _ref7$showLineNumbers = _ref7.showLineNumbers,
        showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers,
        _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
        showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN,
        _ref7$startingLineNum = _ref7.startingLineNumber,
        startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
        lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
        _ref7$lineNumberStyle = _ref7.lineNumberStyle,
        lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
        wrapLines = _ref7.wrapLines,
        _ref7$wrapLongLines = _ref7.wrapLongLines,
        wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines,
        _ref7$lineProps = _ref7.lineProps,
        lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
        renderer = _ref7.renderer,
        _ref7$PreTag = _ref7.PreTag,
        PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
        _ref7$CodeTag = _ref7.CodeTag,
        CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
        _ref7$code = _ref7.code,
        code = _ref7$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref7$code,
        astGenerator = _ref7.astGenerator,
        rest = (0, _objectWithoutProperties2.default)(_ref7, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? _react.default.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });

    if (!astGenerator) {
      return _react.default.createElement(PreTag, preProps, allLineNumbers, _react.default.createElement(CodeTag, codeTagProps, code));
    }
    /*
     * Some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined.
     */


    if (wrapLines === undefined && renderer || wrapLongLines) wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });

    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    } // determine largest line number so that we can force minWidth on all linenumber elements


    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);

    if (wrapLongLines) {
      codeTagProps.style = (0, _objectSpread2.default)({}, codeTagProps.style, {
        whiteSpace: 'pre-wrap'
      });
    } else {
      codeTagProps.style = (0, _objectSpread2.default)({}, codeTagProps.style, {
        whiteSpace: 'pre'
      });
    }

    return _react.default.createElement(PreTag, preProps, _react.default.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows: rows,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/supported-languages.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/supported-languages.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
// This file has been auto-generated by the `npm run build-languages-prism` task
//
var _default = ['abap', 'abnf', 'actionscript', 'ada', 'agda', 'al', 'antlr4', 'apacheconf', 'apl', 'applescript', 'aql', 'arduino', 'arff', 'asciidoc', 'asm6502', 'aspnet', 'autohotkey', 'autoit', 'bash', 'basic', 'batch', 'bbcode', 'bison', 'bnf', 'brainfuck', 'brightscript', 'bro', 'c', 'cil', 'clike', 'clojure', 'cmake', 'coffeescript', 'concurnas', 'cpp', 'crystal', 'csharp', 'csp', 'css-extras', 'css', 'cypher', 'd', 'dart', 'dax', 'dhall', 'diff', 'django', 'dns-zone-file', 'docker', 'ebnf', 'editorconfig', 'eiffel', 'ejs', 'elixir', 'elm', 'erb', 'erlang', 'etlua', 'excel-formula', 'factor', 'firestore-security-rules', 'flow', 'fortran', 'fsharp', 'ftl', 'gcode', 'gdscript', 'gedcom', 'gherkin', 'git', 'glsl', 'gml', 'go', 'graphql', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hcl', 'hlsl', 'hpkp', 'hsts', 'http', 'ichigojam', 'icon', 'iecst', 'ignore', 'inform7', 'ini', 'io', 'j', 'java', 'javadoc', 'javadoclike', 'javascript', 'javastacktrace', 'jolie', 'jq', 'js-extras', 'js-templates', 'jsdoc', 'json', 'json5', 'jsonp', 'jsstacktrace', 'jsx', 'julia', 'keyman', 'kotlin', 'latex', 'latte', 'less', 'lilypond', 'liquid', 'lisp', 'livescript', 'llvm', 'lolcode', 'lua', 'makefile', 'markdown', 'markup-templating', 'markup', 'matlab', 'mel', 'mizar', 'monkey', 'moonscript', 'n1ql', 'n4js', 'nand2tetris-hdl', 'nasm', 'neon', 'nginx', 'nim', 'nix', 'nsis', 'objectivec', 'ocaml', 'opencl', 'oz', 'parigp', 'parser', 'pascal', 'pascaligo', 'pcaxis', 'peoplecode', 'perl', 'php-extras', 'php', 'phpdoc', 'plsql', 'powerquery', 'powershell', 'processing', 'prolog', 'properties', 'protobuf', 'pug', 'puppet', 'pure', 'purebasic', 'python', 'q', 'qml', 'qore', 'r', 'racket', 'reason', 'regex', 'renpy', 'rest', 'rip', 'roboconf', 'robotframework', 'ruby', 'rust', 'sas', 'sass', 'scala', 'scheme', 'scss', 'shell-session', 'smali', 'smalltalk', 'smarty', 'solidity', 'solution-file', 'soy', 'sparql', 'splunk-spl', 'sqf', 'sql', 'stylus', 'swift', 't4-cs', 't4-templating', 't4-vb', 'tap', 'tcl', 'textile', 'toml', 'tsx', 'tt2', 'turtle', 'twig', 'typescript', 'unrealscript', 'vala', 'vbnet', 'velocity', 'verilog', 'vhdl', 'vim', 'visual-basic', 'warpscript', 'wasm', 'wiki', 'xeora', 'xml-doc', 'xojo', 'xquery', 'yaml', 'yang', 'zig'];
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/prism.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/prism.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _highlight = _interopRequireDefault(__webpack_require__(/*! ./highlight */ "./node_modules/react-syntax-highlighter/dist/cjs/highlight.js"));

var _prism = _interopRequireDefault(__webpack_require__(/*! ./styles/prism/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js"));

var _refractor = _interopRequireDefault(__webpack_require__(/*! refractor */ "./node_modules/refractor/index.js"));

var _supportedLanguages = _interopRequireDefault(__webpack_require__(/*! ./languages/prism/supported-languages */ "./node_modules/react-syntax-highlighter/dist/cjs/languages/prism/supported-languages.js"));

var highlighter = (0, _highlight.default)(_refractor.default, _prism.default);
highlighter.supportedLanguages = _supportedLanguages.default;
var _default = highlighter;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "black",
    "background": "none",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "black",
    "background": "#f5f2f0",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#f5f2f0",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "slategray"
  },
  "prolog": {
    "color": "slategray"
  },
  "doctype": {
    "color": "slategray"
  },
  "cdata": {
    "color": "slategray"
  },
  "punctuation": {
    "color": "#999"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#905"
  },
  "tag": {
    "color": "#905"
  },
  "boolean": {
    "color": "#905"
  },
  "number": {
    "color": "#905"
  },
  "constant": {
    "color": "#905"
  },
  "symbol": {
    "color": "#905"
  },
  "deleted": {
    "color": "#905"
  },
  "selector": {
    "color": "#690"
  },
  "attr-name": {
    "color": "#690"
  },
  "string": {
    "color": "#690"
  },
  "char": {
    "color": "#690"
  },
  "builtin": {
    "color": "#690"
  },
  "inserted": {
    "color": "#690"
  },
  "operator": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "entity": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)",
    "cursor": "help"
  },
  "url": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".language-css .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".style .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "atrule": {
    "color": "#07a"
  },
  "attr-value": {
    "color": "#07a"
  },
  "keyword": {
    "color": "#07a"
  },
  "function": {
    "color": "#DD4A68"
  },
  "class-name": {
    "color": "#DD4A68"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "bold"
  },
  "variable": {
    "color": "#e90"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/a11y-dark.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/atom-dark.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/cb.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/coy.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/darcula.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/dark.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/dracula.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/duotone-dark.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/duotone-earth.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/duotone-forest.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/duotone-light.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/duotone-sea.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/duotone-space.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/funky.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/ghcolors.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/hopscotch.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-dark.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-light.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-oceanic.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/nord.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/okaidia.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/pojoaque.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/shades-of-purple.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/solarizedlight.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/synthwave84.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/tomorrow.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/twilight.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vs.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js":
false,

/***/ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/xonokai.js":
false,

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
/* harmony import */ var react_syntax_highlighter_dist_cjs_prism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_prism__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_prism__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SEO */ "./components/SEO.jsx");




var _jsxFileName = "D:\\Workspace\\Maintaining\\iamnabil\\pages\\blog\\[slug].js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var renderers = {
  code: function code(_ref) {
    var language = _ref.language,
        value = _ref.value;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__["Prism"], {
      style: react_syntax_highlighter_dist_cjs_prism__WEBPACK_IMPORTED_MODULE_5__["shadesOfPurple"],
      language: language,
      children: value
    }, void 0, false, {
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
      lineNumber: 29,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: " \u2014 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://twitter.com/intent/tweet?text=".concat(title, "&url=https://iamnabil.netlify.app").concat(path, "&hashtags=").concat(tags),
          children: "Tweet This"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "mt-0 mb-4",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_3___default.a, {
        renderers: renderers,
        allowDangerousHtml: true,
        children: html
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL2NoZWNrRm9yTGlzdGVkTGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvaGlnaGxpZ2h0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL2xhbmd1YWdlcy9wcmlzbS9zdXBwb3J0ZWQtbGFuZ3VhZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3ByaXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbS9wcmlzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanMiXSwibmFtZXMiOlsicmVuZGVyZXJzIiwiY29kZSIsImxhbmd1YWdlIiwidmFsdWUiLCJzaGFkZXNPZlB1cnBsZSIsIlBvc3RUZW1wbGF0ZSIsImh0bWwiLCJmcm9udG1hdHRlciIsImxhbmciLCJkYXRlIiwidGFncyIsInRpdGxlIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBLElBQU1BLFNBQVMsR0FBRztBQUNqQkMsTUFBSSxFQUFFLG9CQUF5QjtBQUFBLFFBQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxRQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDOUIsd0JBQ0MscUVBQUMsOERBQUQ7QUFDQyxXQUFLLEVBQUVDLHNGQURSO0FBRUMsY0FBUSxFQUFFRixRQUZYO0FBR0MsY0FBUSxFQUFFQztBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQU9BO0FBVGdCLENBQWxCOztBQVllLFNBQVNFLFlBQVQsUUFBNkM7QUFBQSxNQUFyQkMsSUFBcUIsU0FBckJBLElBQXFCO0FBQUEsTUFBZkMsV0FBZSxTQUFmQSxXQUFlO0FBQUEsTUFDbkRDLElBRG1ELEdBQ2pCRCxXQURpQixDQUNuREMsSUFEbUQ7QUFBQSxNQUM3Q0MsSUFENkMsR0FDakJGLFdBRGlCLENBQzdDRSxJQUQ2QztBQUFBLE1BQ3ZDQyxJQUR1QyxHQUNqQkgsV0FEaUIsQ0FDdkNHLElBRHVDO0FBQUEsTUFDakNDLEtBRGlDLEdBQ2pCSixXQURpQixDQUNqQ0ksS0FEaUM7QUFBQSxNQUMxQkMsSUFEMEIsR0FDakJMLFdBRGlCLENBQzFCSyxJQUQwQixFQUUzRDs7QUFFQSxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLHVEQUFELG9CQUFTTCxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsOEJBQ0M7QUFBQSxrQkFBT0U7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBR0M7QUFBQSwrQkFDQztBQUNDLGNBQUksa0RBQTJDRSxLQUEzQyw4Q0FBb0ZDLElBQXBGLHVCQUFxR0YsSUFBckcsQ0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQVVDO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUEsa0JBQTJCQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFlQztBQUFBLDZCQUNDLHFFQUFDLCtEQUFEO0FBQWUsaUJBQVMsRUFBRVgsU0FBMUI7QUFBcUMsMEJBQWtCLE1BQXZEO0FBQUEsa0JBQ0VNO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRDtBQUFBLGtCQUREO0FBdUJBO0tBM0J1QkQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tzbHVnXS5lNmU5Y2RiM2RkZjViMDM5Yzk2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoYXN0R2VuZXJhdG9yLCBsYW5ndWFnZSkge1xuICB2YXIgbGFuZ3MgPSBhc3RHZW5lcmF0b3IubGlzdExhbmd1YWdlcygpO1xuICByZXR1cm4gbGFuZ3MuaW5kZXhPZihsYW5ndWFnZSkgIT09IC0xO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVTdHlsZU9iamVjdCA9IGNyZWF0ZVN0eWxlT2JqZWN0O1xuZXhwb3J0cy5jcmVhdGVDbGFzc05hbWVTdHJpbmcgPSBjcmVhdGVDbGFzc05hbWVTdHJpbmc7XG5leHBvcnRzLmNyZWF0ZUNoaWxkcmVuID0gY3JlYXRlQ2hpbGRyZW47XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFbGVtZW50O1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RTcHJlYWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWRcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vLyBHZXQgYWxsIHBvc3NpYmxlIHBlcm11dGF0aW9ucyBvZiBhbGwgcG93ZXIgc2V0c1xuLy9cbi8vIFN1cGVyIHNpbXBsZSwgbm9uLWFsZ29yaXRobWljIHNvbHV0aW9uIHNpbmNlIHRoZVxuLy8gbnVtYmVyIG9mIGNsYXNzIG5hbWVzIHdpbGwgbm90IGJlIGdyZWF0ZXIgdGhhbiAzXG5mdW5jdGlvbiBwb3dlclNldFBlcm11dGF0aW9ucyhhcnIpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDAgfHwgYXJyLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycjtcblxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMikge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiBbYXJyWzBdLCBhcnJbMV0sIFwiXCIuY29uY2F0KGFyclswXSwgXCIuXCIpLmNvbmNhdChhcnJbMV0pLCBcIlwiLmNvbmNhdChhcnJbMV0sIFwiLlwiKS5jb25jYXQoYXJyWzBdKV07XG4gIH1cblxuICBpZiAoYXJyLmxlbmd0aCA+PSAzKSB7XG4gICAgLy8gQ3VycmVudGx5IGRvZXMgbm90IHN1cHBvcnQgbW9yZSB0aGFuIDMgZXh0cmFcbiAgICAvLyBjbGFzcyBuYW1lcyAoYWZ0ZXIgYC50b2tlbmAgaGFzIGJlZW4gcmVtb3ZlZClcbiAgICByZXR1cm4gW2FyclswXSwgYXJyWzFdLCBhcnJbMl0sIFwiXCIuY29uY2F0KGFyclswXSwgXCIuXCIpLmNvbmNhdChhcnJbMV0pLCBcIlwiLmNvbmNhdChhcnJbMF0sIFwiLlwiKS5jb25jYXQoYXJyWzJdKSwgXCJcIi5jb25jYXQoYXJyWzFdLCBcIi5cIikuY29uY2F0KGFyclswXSksIFwiXCIuY29uY2F0KGFyclsxXSwgXCIuXCIpLmNvbmNhdChhcnJbMl0pLCBcIlwiLmNvbmNhdChhcnJbMl0sIFwiLlwiKS5jb25jYXQoYXJyWzBdKSwgXCJcIi5jb25jYXQoYXJyWzJdLCBcIi5cIikuY29uY2F0KGFyclsxXSksIFwiXCIuY29uY2F0KGFyclswXSwgXCIuXCIpLmNvbmNhdChhcnJbMV0sIFwiLlwiKS5jb25jYXQoYXJyWzJdKSwgXCJcIi5jb25jYXQoYXJyWzBdLCBcIi5cIikuY29uY2F0KGFyclsyXSwgXCIuXCIpLmNvbmNhdChhcnJbMV0pLCBcIlwiLmNvbmNhdChhcnJbMV0sIFwiLlwiKS5jb25jYXQoYXJyWzBdLCBcIi5cIikuY29uY2F0KGFyclsyXSksIFwiXCIuY29uY2F0KGFyclsxXSwgXCIuXCIpLmNvbmNhdChhcnJbMl0sIFwiLlwiKS5jb25jYXQoYXJyWzBdKSwgXCJcIi5jb25jYXQoYXJyWzJdLCBcIi5cIikuY29uY2F0KGFyclswXSwgXCIuXCIpLmNvbmNhdChhcnJbMV0pLCBcIlwiLmNvbmNhdChhcnJbMl0sIFwiLlwiKS5jb25jYXQoYXJyWzFdLCBcIi5cIikuY29uY2F0KGFyclswXSldO1xuICB9XG59XG5cbnZhciBjbGFzc05hbWVDb21iaW5hdGlvbnMgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lQ29tYmluYXRpb25zKGNsYXNzTmFtZXMpIHtcbiAgaWYgKGNsYXNzTmFtZXMubGVuZ3RoID09PSAwIHx8IGNsYXNzTmFtZXMubGVuZ3RoID09PSAxKSByZXR1cm4gY2xhc3NOYW1lcztcbiAgdmFyIGtleSA9IGNsYXNzTmFtZXMuam9pbignLicpO1xuXG4gIGlmICghY2xhc3NOYW1lQ29tYmluYXRpb25zW2tleV0pIHtcbiAgICBjbGFzc05hbWVDb21iaW5hdGlvbnNba2V5XSA9IHBvd2VyU2V0UGVybXV0YXRpb25zKGNsYXNzTmFtZXMpO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzTmFtZUNvbWJpbmF0aW9uc1trZXldO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZU9iamVjdChjbGFzc05hbWVzKSB7XG4gIHZhciBlbGVtZW50U3R5bGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgc3R5bGVzaGVldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICB2YXIgbm9uVG9rZW5DbGFzc05hbWVzID0gY2xhc3NOYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjbGFzc05hbWUgIT09ICd0b2tlbic7XG4gIH0pO1xuICB2YXIgY2xhc3NOYW1lc0NvbWJpbmF0aW9ucyA9IGdldENsYXNzTmFtZUNvbWJpbmF0aW9ucyhub25Ub2tlbkNsYXNzTmFtZXMpO1xuICByZXR1cm4gY2xhc3NOYW1lc0NvbWJpbmF0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlT2JqZWN0LCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKHt9LCBzdHlsZU9iamVjdCwgc3R5bGVzaGVldFtjbGFzc05hbWVdKTtcbiAgfSwgZWxlbWVudFN0eWxlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NOYW1lU3RyaW5nKGNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaGlsZHJlbihzdHlsZXNoZWV0LCB1c2VJbmxpbmVTdHlsZXMpIHtcbiAgdmFyIGNoaWxkcmVuQ291bnQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW5Db3VudCArPSAxO1xuICAgIHJldHVybiBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgIG5vZGU6IGNoaWxkLFxuICAgICAgICBzdHlsZXNoZWV0OiBzdHlsZXNoZWV0LFxuICAgICAgICB1c2VJbmxpbmVTdHlsZXM6IHVzZUlubGluZVN0eWxlcyxcbiAgICAgICAga2V5OiBcImNvZGUtc2VnbWVudC1cIi5jb25jYXQoY2hpbGRyZW5Db3VudCwgXCItXCIpLmNvbmNhdChpKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoX3JlZikge1xuICB2YXIgbm9kZSA9IF9yZWYubm9kZSxcbiAgICAgIHN0eWxlc2hlZXQgPSBfcmVmLnN0eWxlc2hlZXQsXG4gICAgICBfcmVmJHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIHN0eWxlID0gX3JlZiRzdHlsZSA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHN0eWxlLFxuICAgICAgdXNlSW5saW5lU3R5bGVzID0gX3JlZi51c2VJbmxpbmVTdHlsZXMsXG4gICAgICBrZXkgPSBfcmVmLmtleTtcbiAgdmFyIHByb3BlcnRpZXMgPSBub2RlLnByb3BlcnRpZXMsXG4gICAgICB0eXBlID0gbm9kZS50eXBlLFxuICAgICAgVGFnTmFtZSA9IG5vZGUudGFnTmFtZSxcbiAgICAgIHZhbHVlID0gbm9kZS52YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2UgaWYgKFRhZ05hbWUpIHtcbiAgICB2YXIgY2hpbGRyZW5DcmVhdG9yID0gY3JlYXRlQ2hpbGRyZW4oc3R5bGVzaGVldCwgdXNlSW5saW5lU3R5bGVzKTtcbiAgICB2YXIgcHJvcHM7XG5cbiAgICBpZiAoIXVzZUlubGluZVN0eWxlcykge1xuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjcmVhdGVDbGFzc05hbWVTdHJpbmcocHJvcGVydGllcy5jbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFsbFN0eWxlc2hlZXRTZWxlY3RvcnMgPSBPYmplY3Qua2V5cyhzdHlsZXNoZWV0KS5yZWR1Y2UoZnVuY3Rpb24gKGNsYXNzZXMsIHNlbGVjdG9yKSB7XG4gICAgICAgIHNlbGVjdG9yLnNwbGl0KCcuJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKGNsYXNzTmFtZSkpIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICB9LCBbXSk7IC8vIEZvciBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXG5cbiAgICAgIHZhciBzdGFydGluZ0NsYXNzTmFtZSA9IHByb3BlcnRpZXMuY2xhc3NOYW1lICYmIHByb3BlcnRpZXMuY2xhc3NOYW1lLmluY2x1ZGVzKCd0b2tlbicpID8gWyd0b2tlbiddIDogW107XG4gICAgICB2YXIgY2xhc3NOYW1lID0gcHJvcGVydGllcy5jbGFzc05hbWUgJiYgc3RhcnRpbmdDbGFzc05hbWUuY29uY2F0KHByb3BlcnRpZXMuY2xhc3NOYW1lLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiAhYWxsU3R5bGVzaGVldFNlbGVjdG9ycy5pbmNsdWRlcyhjbGFzc05hbWUpO1xuICAgICAgfSkpO1xuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjcmVhdGVDbGFzc05hbWVTdHJpbmcoY2xhc3NOYW1lKSB8fCB1bmRlZmluZWQsXG4gICAgICAgIHN0eWxlOiBjcmVhdGVTdHlsZU9iamVjdChwcm9wZXJ0aWVzLmNsYXNzTmFtZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcy5zdHlsZSwgc3R5bGUpLCBzdHlsZXNoZWV0KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRyZW5DcmVhdG9yKG5vZGUuY2hpbGRyZW4pO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRhZ05hbWUsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX29iamVjdFNwcmVhZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZFwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlLWVsZW1lbnRcIikpO1xuXG52YXIgX2NoZWNrRm9yTGlzdGVkTGFuZ3VhZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NoZWNrRm9yTGlzdGVkTGFuZ3VhZ2VcIikpO1xuXG52YXIgbmV3TGluZVJlZ2V4ID0gL1xcbi9nO1xuXG5mdW5jdGlvbiBnZXROZXdMaW5lcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5tYXRjaChuZXdMaW5lUmVnZXgpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxMaW5lTnVtYmVycyhfcmVmKSB7XG4gIHZhciBsaW5lcyA9IF9yZWYubGluZXMsXG4gICAgICBzdGFydGluZ0xpbmVOdW1iZXIgPSBfcmVmLnN0YXJ0aW5nTGluZU51bWJlcixcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbiAoXywgaSkge1xuICAgIHZhciBudW1iZXIgPSBpICsgc3RhcnRpbmdMaW5lTnVtYmVyO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBrZXk6IFwibGluZS1cIi5jb25jYXQoaSksXG4gICAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyLWxpbmUtbnVtYmVyXCIsXG4gICAgICBzdHlsZTogdHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nID8gc3R5bGUobnVtYmVyKSA6IHN0eWxlXG4gICAgfSwgXCJcIi5jb25jYXQobnVtYmVyLCBcIlxcblwiKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBBbGxMaW5lTnVtYmVycyhfcmVmMikge1xuICB2YXIgY29kZVN0cmluZyA9IF9yZWYyLmNvZGVTdHJpbmcsXG4gICAgICBjb2RlU3R5bGUgPSBfcmVmMi5jb2RlU3R5bGUsXG4gICAgICBfcmVmMiRjb250YWluZXJTdHlsZSA9IF9yZWYyLmNvbnRhaW5lclN0eWxlLFxuICAgICAgY29udGFpbmVyU3R5bGUgPSBfcmVmMiRjb250YWluZXJTdHlsZSA9PT0gdm9pZCAwID8ge1xuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMTBweCdcbiAgfSA6IF9yZWYyJGNvbnRhaW5lclN0eWxlLFxuICAgICAgX3JlZjIkbnVtYmVyU3R5bGUgPSBfcmVmMi5udW1iZXJTdHlsZSxcbiAgICAgIG51bWJlclN0eWxlID0gX3JlZjIkbnVtYmVyU3R5bGUgPT09IHZvaWQgMCA/IHt9IDogX3JlZjIkbnVtYmVyU3R5bGUsXG4gICAgICBzdGFydGluZ0xpbmVOdW1iZXIgPSBfcmVmMi5zdGFydGluZ0xpbmVOdW1iZXI7XG4gIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGNvZGVTdHlsZSwgY29udGFpbmVyU3R5bGUpXG4gIH0sIGdldEFsbExpbmVOdW1iZXJzKHtcbiAgICBsaW5lczogY29kZVN0cmluZy5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKSxcbiAgICBzdHlsZTogbnVtYmVyU3R5bGUsXG4gICAgc3RhcnRpbmdMaW5lTnVtYmVyOiBzdGFydGluZ0xpbmVOdW1iZXJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBnZXRFbVdpZHRoT2ZOdW1iZXIobnVtKSB7XG4gIHZhciBsZW4gPSBudW0udG9TdHJpbmcoKS5sZW5ndGg7XG4gIHJldHVybiBcIlwiLmNvbmNhdChsZW4sIFwiZW1cIik7XG59XG5cbmZ1bmN0aW9uIGdldElubGluZUxpbmVOdW1iZXIobGluZU51bWJlciwgaW5saW5lTGluZU51bWJlclN0eWxlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHRhZ05hbWU6ICdzcGFuJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBrZXk6IFwibGluZS1udW1iZXItLVwiLmNvbmNhdChsaW5lTnVtYmVyKSxcbiAgICAgIGNsYXNzTmFtZTogWydjb21tZW50JywgJ2xpbmVudW1iZXInLCAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyLWxpbmUtbnVtYmVyJ10sXG4gICAgICBzdHlsZTogaW5saW5lTGluZU51bWJlclN0eWxlXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiBsaW5lTnVtYmVyXG4gICAgfV1cbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNzZW1ibGVMaW5lTnVtYmVyU3R5bGVzKGxpbmVOdW1iZXJTdHlsZSwgbGluZU51bWJlciwgbGFyZ2VzdExpbmVOdW1iZXIpIHtcbiAgLy8gbWluaW1hbGx5IG5lY2Vzc2FyeSBzdHlsaW5nIGZvciBsaW5lIG51bWJlcnNcbiAgdmFyIGRlZmF1bHRMaW5lTnVtYmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWluV2lkdGg6IGdldEVtV2lkdGhPZk51bWJlcihsYXJnZXN0TGluZU51bWJlciksXG4gICAgcGFkZGluZ1JpZ2h0OiAnMWVtJyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH07IC8vIHByZXAgY3VzdG9tIHN0eWxpbmdcblxuICB2YXIgY3VzdG9tTGluZU51bWJlclN0eWxlID0gdHlwZW9mIGxpbmVOdW1iZXJTdHlsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxpbmVOdW1iZXJTdHlsZShsaW5lTnVtYmVyKSA6IGxpbmVOdW1iZXJTdHlsZTsgLy8gY29tYmluZVxuXG4gIHZhciBhc3NlbWJsZWRTdHlsZSA9ICgwLCBfb2JqZWN0U3ByZWFkMi5kZWZhdWx0KSh7fSwgZGVmYXVsdExpbmVOdW1iZXJTdHlsZSwgY3VzdG9tTGluZU51bWJlclN0eWxlKTtcbiAgcmV0dXJuIGFzc2VtYmxlZFN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5lRWxlbWVudChfcmVmMykge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMy5jaGlsZHJlbixcbiAgICAgIGxpbmVOdW1iZXIgPSBfcmVmMy5saW5lTnVtYmVyLFxuICAgICAgbGluZU51bWJlclN0eWxlID0gX3JlZjMubGluZU51bWJlclN0eWxlLFxuICAgICAgbGFyZ2VzdExpbmVOdW1iZXIgPSBfcmVmMy5sYXJnZXN0TGluZU51bWJlcixcbiAgICAgIHNob3dJbmxpbmVMaW5lTnVtYmVycyA9IF9yZWYzLnNob3dJbmxpbmVMaW5lTnVtYmVycyxcbiAgICAgIF9yZWYzJGxpbmVQcm9wcyA9IF9yZWYzLmxpbmVQcm9wcyxcbiAgICAgIGxpbmVQcm9wcyA9IF9yZWYzJGxpbmVQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRsaW5lUHJvcHMsXG4gICAgICBfcmVmMyRjbGFzc05hbWUgPSBfcmVmMy5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmMyRjbGFzc05hbWUgPT09IHZvaWQgMCA/IFtdIDogX3JlZjMkY2xhc3NOYW1lLFxuICAgICAgc2hvd0xpbmVOdW1iZXJzID0gX3JlZjMuc2hvd0xpbmVOdW1iZXJzLFxuICAgICAgd3JhcExvbmdMaW5lcyA9IF9yZWYzLndyYXBMb25nTGluZXM7XG4gIHZhciBwcm9wZXJ0aWVzID0gdHlwZW9mIGxpbmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IGxpbmVQcm9wcyhsaW5lTnVtYmVyKSA6IGxpbmVQcm9wcztcbiAgcHJvcGVydGllc1snY2xhc3NOYW1lJ10gPSBjbGFzc05hbWU7XG5cbiAgaWYgKGxpbmVOdW1iZXIgJiYgc2hvd0lubGluZUxpbmVOdW1iZXJzKSB7XG4gICAgdmFyIGlubGluZUxpbmVOdW1iZXJTdHlsZSA9IGFzc2VtYmxlTGluZU51bWJlclN0eWxlcyhsaW5lTnVtYmVyU3R5bGUsIGxpbmVOdW1iZXIsIGxhcmdlc3RMaW5lTnVtYmVyKTtcbiAgICBjaGlsZHJlbi51bnNoaWZ0KGdldElubGluZUxpbmVOdW1iZXIobGluZU51bWJlciwgaW5saW5lTGluZU51bWJlclN0eWxlKSk7XG4gIH1cblxuICBpZiAod3JhcExvbmdMaW5lcyAmIHNob3dMaW5lTnVtYmVycykge1xuICAgIHByb3BlcnRpZXMuc3R5bGUgPSAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe30sIHByb3BlcnRpZXMuc3R5bGUsIHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgdGFnTmFtZTogJ3NwYW4nLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Db2RlVHJlZSh0cmVlKSB7XG4gIHZhciBjbGFzc05hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICB2YXIgbmV3VHJlZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSB0cmVlW2ldO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBuZXdUcmVlLnB1c2goY3JlYXRlTGluZUVsZW1lbnQoe1xuICAgICAgICBjaGlsZHJlbjogW25vZGVdLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKG5ldyBTZXQoY2xhc3NOYW1lKSlcbiAgICAgIH0pKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gY2xhc3NOYW1lLmNvbmNhdChub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lKTtcbiAgICAgIG5ld1RyZWUgPSBuZXdUcmVlLmNvbmNhdChmbGF0dGVuQ29kZVRyZWUobm9kZS5jaGlsZHJlbiwgY2xhc3NOYW1lcykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdUcmVlO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzTGluZXMoY29kZVRyZWUsIHdyYXBMaW5lcywgbGluZVByb3BzLCBzaG93TGluZU51bWJlcnMsIHNob3dJbmxpbmVMaW5lTnVtYmVycywgc3RhcnRpbmdMaW5lTnVtYmVyLCBsYXJnZXN0TGluZU51bWJlciwgbGluZU51bWJlclN0eWxlLCB3cmFwTG9uZ0xpbmVzKSB7XG4gIHZhciBfcmVmNDtcblxuICB2YXIgdHJlZSA9IGZsYXR0ZW5Db2RlVHJlZShjb2RlVHJlZS52YWx1ZSk7XG4gIHZhciBuZXdUcmVlID0gW107XG4gIHZhciBsYXN0TGluZUJyZWFrSW5kZXggPSAtMTtcbiAgdmFyIGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiBjcmVhdGVXcmFwcGVkTGluZShjaGlsZHJlbiwgbGluZU51bWJlcikge1xuICAgIHZhciBjbGFzc05hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgIHJldHVybiBjcmVhdGVMaW5lRWxlbWVudCh7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBsaW5lTnVtYmVyOiBsaW5lTnVtYmVyLFxuICAgICAgbGluZU51bWJlclN0eWxlOiBsaW5lTnVtYmVyU3R5bGUsXG4gICAgICBsYXJnZXN0TGluZU51bWJlcjogbGFyZ2VzdExpbmVOdW1iZXIsXG4gICAgICBzaG93SW5saW5lTGluZU51bWJlcnM6IHNob3dJbmxpbmVMaW5lTnVtYmVycyxcbiAgICAgIGxpbmVQcm9wczogbGluZVByb3BzLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzaG93TGluZU51bWJlcnM6IHNob3dMaW5lTnVtYmVycyxcbiAgICAgIHdyYXBMb25nTGluZXM6IHdyYXBMb25nTGluZXNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVud3JhcHBlZExpbmUoY2hpbGRyZW4sIGxpbmVOdW1iZXIpIHtcbiAgICBpZiAoc2hvd0xpbmVOdW1iZXJzICYmIGxpbmVOdW1iZXIgJiYgc2hvd0lubGluZUxpbmVOdW1iZXJzKSB7XG4gICAgICB2YXIgaW5saW5lTGluZU51bWJlclN0eWxlID0gYXNzZW1ibGVMaW5lTnVtYmVyU3R5bGVzKGxpbmVOdW1iZXJTdHlsZSwgbGluZU51bWJlciwgbGFyZ2VzdExpbmVOdW1iZXIpO1xuICAgICAgY2hpbGRyZW4udW5zaGlmdChnZXRJbmxpbmVMaW5lTnVtYmVyKGxpbmVOdW1iZXIsIGlubGluZUxpbmVOdW1iZXJTdHlsZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxpbmUoY2hpbGRyZW4sIGxpbmVOdW1iZXIpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgICByZXR1cm4gd3JhcExpbmVzIHx8IGNsYXNzTmFtZS5sZW5ndGggPiAwID8gY3JlYXRlV3JhcHBlZExpbmUoY2hpbGRyZW4sIGxpbmVOdW1iZXIsIGNsYXNzTmFtZSkgOiBjcmVhdGVVbndyYXBwZWRMaW5lKGNoaWxkcmVuLCBsaW5lTnVtYmVyKTtcbiAgfVxuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgIHZhciBub2RlID0gdHJlZVtpbmRleF07XG4gICAgdmFyIHZhbHVlID0gbm9kZS5jaGlsZHJlblswXS52YWx1ZTtcbiAgICB2YXIgbmV3TGluZXMgPSBnZXROZXdMaW5lcyh2YWx1ZSk7XG5cbiAgICBpZiAobmV3TGluZXMpIHtcbiAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUuc3BsaXQoJ1xcbicpO1xuICAgICAgc3BsaXRWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0LCBpKSB7XG4gICAgICAgIHZhciBsaW5lTnVtYmVyID0gc2hvd0xpbmVOdW1iZXJzICYmIG5ld1RyZWUubGVuZ3RoICsgc3RhcnRpbmdMaW5lTnVtYmVyO1xuICAgICAgICB2YXIgbmV3Q2hpbGQgPSB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBcIlwiLmNvbmNhdCh0ZXh0LCBcIlxcblwiKVxuICAgICAgICB9OyAvLyBpZiBpdCdzIHRoZSBmaXJzdCBsaW5lXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB2YXIgX2NoaWxkcmVuID0gdHJlZS5zbGljZShsYXN0TGluZUJyZWFrSW5kZXggKyAxLCBpbmRleCkuY29uY2F0KGNyZWF0ZUxpbmVFbGVtZW50KHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbmV3Q2hpbGRdLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lXG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgdmFyIF9saW5lID0gY3JlYXRlTGluZShfY2hpbGRyZW4sIGxpbmVOdW1iZXIpO1xuXG4gICAgICAgICAgbmV3VHJlZS5wdXNoKF9saW5lKTsgLy8gaWYgaXQncyB0aGUgbGFzdCBsaW5lXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc3BsaXRWYWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdmFyIHN0cmluZ0NoaWxkID0gdHJlZVtpbmRleCArIDFdICYmIHRyZWVbaW5kZXggKyAxXS5jaGlsZHJlbiAmJiB0cmVlW2luZGV4ICsgMV0uY2hpbGRyZW5bMF07XG5cbiAgICAgICAgICBpZiAoc3RyaW5nQ2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBsYXN0TGluZUluUHJldmlvdXNTcGFuID0ge1xuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlwiLmNvbmNhdCh0ZXh0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBuZXdFbGVtID0gY3JlYXRlTGluZUVsZW1lbnQoe1xuICAgICAgICAgICAgICBjaGlsZHJlbjogW2xhc3RMaW5lSW5QcmV2aW91c1NwYW5dLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IG5vZGUucHJvcGVydGllcy5jbGFzc05hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJlZS5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXdFbGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9jaGlsZHJlbjIgPSBbbmV3Q2hpbGRdO1xuXG4gICAgICAgICAgICB2YXIgX2xpbmUyID0gY3JlYXRlTGluZShfY2hpbGRyZW4yLCBsaW5lTnVtYmVyLCBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgbmV3VHJlZS5wdXNoKF9saW5lMik7XG4gICAgICAgICAgfSAvLyBpZiBpdCdzIG5laXRoZXIgdGhlIGZpcnN0IG5vciB0aGUgbGFzdCBsaW5lXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2NoaWxkcmVuMyA9IFtuZXdDaGlsZF07XG5cbiAgICAgICAgICB2YXIgX2xpbmUzID0gY3JlYXRlTGluZShfY2hpbGRyZW4zLCBsaW5lTnVtYmVyLCBub2RlLnByb3BlcnRpZXMuY2xhc3NOYW1lKTtcblxuICAgICAgICAgIG5ld1RyZWUucHVzaChfbGluZTMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxhc3RMaW5lQnJlYWtJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIGluZGV4Kys7XG4gIH07XG5cbiAgd2hpbGUgKGluZGV4IDwgdHJlZS5sZW5ndGgpIHtcbiAgICBfbG9vcCgpO1xuICB9XG5cbiAgaWYgKGxhc3RMaW5lQnJlYWtJbmRleCAhPT0gdHJlZS5sZW5ndGggLSAxKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdHJlZS5zbGljZShsYXN0TGluZUJyZWFrSW5kZXggKyAxLCB0cmVlLmxlbmd0aCk7XG5cbiAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZU51bWJlciA9IG5ld1RyZWUubGVuZ3RoICsgc3RhcnRpbmdMaW5lTnVtYmVyO1xuICAgICAgdmFyIGxpbmUgPSBjcmVhdGVMaW5lKGNoaWxkcmVuLCBsaW5lTnVtYmVyKTtcbiAgICAgIG5ld1RyZWUucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd3JhcExpbmVzID8gbmV3VHJlZSA6IChfcmVmNCA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZjQsIG5ld1RyZWUpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UmVuZGVyZXIoX3JlZjUpIHtcbiAgdmFyIHJvd3MgPSBfcmVmNS5yb3dzLFxuICAgICAgc3R5bGVzaGVldCA9IF9yZWY1LnN0eWxlc2hlZXQsXG4gICAgICB1c2VJbmxpbmVTdHlsZXMgPSBfcmVmNS51c2VJbmxpbmVTdHlsZXM7XG4gIHJldHVybiByb3dzLm1hcChmdW5jdGlvbiAobm9kZSwgaSkge1xuICAgIHJldHVybiAoMCwgX2NyZWF0ZUVsZW1lbnQuZGVmYXVsdCkoe1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIHN0eWxlc2hlZXQ6IHN0eWxlc2hlZXQsXG4gICAgICB1c2VJbmxpbmVTdHlsZXM6IHVzZUlubGluZVN0eWxlcyxcbiAgICAgIGtleTogXCJjb2RlLXNlZ2VtZW50XCIuY29uY2F0KGkpXG4gICAgfSk7XG4gIH0pO1xufSAvLyBvbmx5IGhpZ2hsaWdodC5qcyBoYXMgdGhlIGhpZ2hsaWdodEF1dG8gbWV0aG9kXG5cblxuZnVuY3Rpb24gaXNIaWdobGlnaHRKcyhhc3RHZW5lcmF0b3IpIHtcbiAgcmV0dXJuIGFzdEdlbmVyYXRvciAmJiB0eXBlb2YgYXN0R2VuZXJhdG9yLmhpZ2hsaWdodEF1dG8gIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb2RlVHJlZShfcmVmNikge1xuICB2YXIgYXN0R2VuZXJhdG9yID0gX3JlZjYuYXN0R2VuZXJhdG9yLFxuICAgICAgbGFuZ3VhZ2UgPSBfcmVmNi5sYW5ndWFnZSxcbiAgICAgIGNvZGUgPSBfcmVmNi5jb2RlLFxuICAgICAgZGVmYXVsdENvZGVWYWx1ZSA9IF9yZWY2LmRlZmF1bHRDb2RlVmFsdWU7XG5cbiAgLy8gZmlndXJlIG91dCB3aGV0aGVyIHdlJ3JlIHVzaW5nIGxvd2xpZ2h0L2hpZ2hsaWdodCBvciByZWZyYWN0b3IvcHJpc21cbiAgLy8gdGhlbiBhdHRlbXB0IGhpZ2hsaWdodGluZyBhY2NvcmRpbmdseVxuICAvLyBsb3dsaWdodC9oaWdobGlnaHQ/XG4gIGlmIChpc0hpZ2hsaWdodEpzKGFzdEdlbmVyYXRvcikpIHtcbiAgICB2YXIgaGFzTGFuZ3VhZ2UgPSAoMCwgX2NoZWNrRm9yTGlzdGVkTGFuZ3VhZ2UuZGVmYXVsdCkoYXN0R2VuZXJhdG9yLCBsYW5ndWFnZSk7XG5cbiAgICBpZiAobGFuZ3VhZ2UgPT09ICd0ZXh0Jykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGRlZmF1bHRDb2RlVmFsdWUsXG4gICAgICAgIGxhbmd1YWdlOiAndGV4dCdcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChoYXNMYW5ndWFnZSkge1xuICAgICAgcmV0dXJuIGFzdEdlbmVyYXRvci5oaWdobGlnaHQobGFuZ3VhZ2UsIGNvZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXN0R2VuZXJhdG9yLmhpZ2hsaWdodEF1dG8oY29kZSk7XG4gICAgfVxuICB9IC8vIG11c3QgYmUgcmVmcmFjdG9yL3ByaXNtLCB0aGVuXG5cblxuICB0cnkge1xuICAgIHJldHVybiBsYW5ndWFnZSAmJiBsYW5ndWFnZSAhPT0gJ3RleHQnID8ge1xuICAgICAgdmFsdWU6IGFzdEdlbmVyYXRvci5oaWdobGlnaHQoY29kZSwgbGFuZ3VhZ2UpXG4gICAgfSA6IHtcbiAgICAgIHZhbHVlOiBkZWZhdWx0Q29kZVZhbHVlXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZGVmYXVsdENvZGVWYWx1ZVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmF1bHQoZGVmYXVsdEFzdEdlbmVyYXRvciwgZGVmYXVsdFN0eWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBTeW50YXhIaWdobGlnaHRlcihfcmVmNykge1xuICAgIHZhciBsYW5ndWFnZSA9IF9yZWY3Lmxhbmd1YWdlLFxuICAgICAgICBjaGlsZHJlbiA9IF9yZWY3LmNoaWxkcmVuLFxuICAgICAgICBfcmVmNyRzdHlsZSA9IF9yZWY3LnN0eWxlLFxuICAgICAgICBzdHlsZSA9IF9yZWY3JHN0eWxlID09PSB2b2lkIDAgPyBkZWZhdWx0U3R5bGUgOiBfcmVmNyRzdHlsZSxcbiAgICAgICAgX3JlZjckY3VzdG9tU3R5bGUgPSBfcmVmNy5jdXN0b21TdHlsZSxcbiAgICAgICAgY3VzdG9tU3R5bGUgPSBfcmVmNyRjdXN0b21TdHlsZSA9PT0gdm9pZCAwID8ge30gOiBfcmVmNyRjdXN0b21TdHlsZSxcbiAgICAgICAgX3JlZjckY29kZVRhZ1Byb3BzID0gX3JlZjcuY29kZVRhZ1Byb3BzLFxuICAgICAgICBjb2RlVGFnUHJvcHMgPSBfcmVmNyRjb2RlVGFnUHJvcHMgPT09IHZvaWQgMCA/IHtcbiAgICAgIGNsYXNzTmFtZTogbGFuZ3VhZ2UgPyBcImxhbmd1YWdlLVwiLmNvbmNhdChsYW5ndWFnZSkgOiB1bmRlZmluZWQsXG4gICAgICBzdHlsZTogKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKHt9LCBzdHlsZVsnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0nXSwgc3R5bGVbXCJjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXCIuY29uY2F0KGxhbmd1YWdlLCBcIlxcXCJdXCIpXSlcbiAgICB9IDogX3JlZjckY29kZVRhZ1Byb3BzLFxuICAgICAgICBfcmVmNyR1c2VJbmxpbmVTdHlsZXMgPSBfcmVmNy51c2VJbmxpbmVTdHlsZXMsXG4gICAgICAgIHVzZUlubGluZVN0eWxlcyA9IF9yZWY3JHVzZUlubGluZVN0eWxlcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY3JHVzZUlubGluZVN0eWxlcyxcbiAgICAgICAgX3JlZjckc2hvd0xpbmVOdW1iZXJzID0gX3JlZjcuc2hvd0xpbmVOdW1iZXJzLFxuICAgICAgICBzaG93TGluZU51bWJlcnMgPSBfcmVmNyRzaG93TGluZU51bWJlcnMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjckc2hvd0xpbmVOdW1iZXJzLFxuICAgICAgICBfcmVmNyRzaG93SW5saW5lTGluZU4gPSBfcmVmNy5zaG93SW5saW5lTGluZU51bWJlcnMsXG4gICAgICAgIHNob3dJbmxpbmVMaW5lTnVtYmVycyA9IF9yZWY3JHNob3dJbmxpbmVMaW5lTiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY3JHNob3dJbmxpbmVMaW5lTixcbiAgICAgICAgX3JlZjckc3RhcnRpbmdMaW5lTnVtID0gX3JlZjcuc3RhcnRpbmdMaW5lTnVtYmVyLFxuICAgICAgICBzdGFydGluZ0xpbmVOdW1iZXIgPSBfcmVmNyRzdGFydGluZ0xpbmVOdW0gPT09IHZvaWQgMCA/IDEgOiBfcmVmNyRzdGFydGluZ0xpbmVOdW0sXG4gICAgICAgIGxpbmVOdW1iZXJDb250YWluZXJTdHlsZSA9IF9yZWY3LmxpbmVOdW1iZXJDb250YWluZXJTdHlsZSxcbiAgICAgICAgX3JlZjckbGluZU51bWJlclN0eWxlID0gX3JlZjcubGluZU51bWJlclN0eWxlLFxuICAgICAgICBsaW5lTnVtYmVyU3R5bGUgPSBfcmVmNyRsaW5lTnVtYmVyU3R5bGUgPT09IHZvaWQgMCA/IHt9IDogX3JlZjckbGluZU51bWJlclN0eWxlLFxuICAgICAgICB3cmFwTGluZXMgPSBfcmVmNy53cmFwTGluZXMsXG4gICAgICAgIF9yZWY3JHdyYXBMb25nTGluZXMgPSBfcmVmNy53cmFwTG9uZ0xpbmVzLFxuICAgICAgICB3cmFwTG9uZ0xpbmVzID0gX3JlZjckd3JhcExvbmdMaW5lcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNyR3cmFwTG9uZ0xpbmVzLFxuICAgICAgICBfcmVmNyRsaW5lUHJvcHMgPSBfcmVmNy5saW5lUHJvcHMsXG4gICAgICAgIGxpbmVQcm9wcyA9IF9yZWY3JGxpbmVQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcmVmNyRsaW5lUHJvcHMsXG4gICAgICAgIHJlbmRlcmVyID0gX3JlZjcucmVuZGVyZXIsXG4gICAgICAgIF9yZWY3JFByZVRhZyA9IF9yZWY3LlByZVRhZyxcbiAgICAgICAgUHJlVGFnID0gX3JlZjckUHJlVGFnID09PSB2b2lkIDAgPyAncHJlJyA6IF9yZWY3JFByZVRhZyxcbiAgICAgICAgX3JlZjckQ29kZVRhZyA9IF9yZWY3LkNvZGVUYWcsXG4gICAgICAgIENvZGVUYWcgPSBfcmVmNyRDb2RlVGFnID09PSB2b2lkIDAgPyAnY29kZScgOiBfcmVmNyRDb2RlVGFnLFxuICAgICAgICBfcmVmNyRjb2RlID0gX3JlZjcuY29kZSxcbiAgICAgICAgY29kZSA9IF9yZWY3JGNvZGUgPT09IHZvaWQgMCA/IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbiA6IF9yZWY3JGNvZGUsXG4gICAgICAgIGFzdEdlbmVyYXRvciA9IF9yZWY3LmFzdEdlbmVyYXRvcixcbiAgICAgICAgcmVzdCA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyLmRlZmF1bHQpKF9yZWY3LCBbXCJsYW5ndWFnZVwiLCBcImNoaWxkcmVuXCIsIFwic3R5bGVcIiwgXCJjdXN0b21TdHlsZVwiLCBcImNvZGVUYWdQcm9wc1wiLCBcInVzZUlubGluZVN0eWxlc1wiLCBcInNob3dMaW5lTnVtYmVyc1wiLCBcInNob3dJbmxpbmVMaW5lTnVtYmVyc1wiLCBcInN0YXJ0aW5nTGluZU51bWJlclwiLCBcImxpbmVOdW1iZXJDb250YWluZXJTdHlsZVwiLCBcImxpbmVOdW1iZXJTdHlsZVwiLCBcIndyYXBMaW5lc1wiLCBcIndyYXBMb25nTGluZXNcIiwgXCJsaW5lUHJvcHNcIiwgXCJyZW5kZXJlclwiLCBcIlByZVRhZ1wiLCBcIkNvZGVUYWdcIiwgXCJjb2RlXCIsIFwiYXN0R2VuZXJhdG9yXCJdKTtcbiAgICBhc3RHZW5lcmF0b3IgPSBhc3RHZW5lcmF0b3IgfHwgZGVmYXVsdEFzdEdlbmVyYXRvcjtcbiAgICB2YXIgYWxsTGluZU51bWJlcnMgPSBzaG93TGluZU51bWJlcnMgPyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFsbExpbmVOdW1iZXJzLCB7XG4gICAgICBjb250YWluZXJTdHlsZTogbGluZU51bWJlckNvbnRhaW5lclN0eWxlLFxuICAgICAgY29kZVN0eWxlOiBjb2RlVGFnUHJvcHMuc3R5bGUgfHwge30sXG4gICAgICBudW1iZXJTdHlsZTogbGluZU51bWJlclN0eWxlLFxuICAgICAgc3RhcnRpbmdMaW5lTnVtYmVyOiBzdGFydGluZ0xpbmVOdW1iZXIsXG4gICAgICBjb2RlU3RyaW5nOiBjb2RlXG4gICAgfSkgOiBudWxsO1xuICAgIHZhciBkZWZhdWx0UHJlU3R5bGUgPSBzdHlsZS5obGpzIHx8IHN0eWxlWydwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJ10gfHwge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZidcbiAgICB9O1xuICAgIHZhciBnZW5lcmF0b3JDbGFzc05hbWUgPSBpc0hpZ2hsaWdodEpzKGFzdEdlbmVyYXRvcikgPyAnaGxqcycgOiAncHJpc21qcyc7XG4gICAgdmFyIHByZVByb3BzID0gdXNlSW5saW5lU3R5bGVzID8gT2JqZWN0LmFzc2lnbih7fSwgcmVzdCwge1xuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcmVTdHlsZSwgY3VzdG9tU3R5bGUpXG4gICAgfSkgOiBPYmplY3QuYXNzaWduKHt9LCByZXN0LCB7XG4gICAgICBjbGFzc05hbWU6IHJlc3QuY2xhc3NOYW1lID8gXCJcIi5jb25jYXQoZ2VuZXJhdG9yQ2xhc3NOYW1lLCBcIiBcIikuY29uY2F0KHJlc3QuY2xhc3NOYW1lKSA6IGdlbmVyYXRvckNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBjdXN0b21TdHlsZSlcbiAgICB9KTtcblxuICAgIGlmICghYXN0R2VuZXJhdG9yKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcmVUYWcsIHByZVByb3BzLCBhbGxMaW5lTnVtYmVycywgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb2RlVGFnLCBjb2RlVGFnUHJvcHMsIGNvZGUpKTtcbiAgICB9XG4gICAgLypcbiAgICAgKiBTb21lIGN1c3RvbSByZW5kZXJlcnMgcmVseSBvbiBpbmRpdmlkdWFsIHJvdyBlbGVtZW50cyBzbyB3ZSBuZWVkIHRvIHR1cm4gd3JhcExpbmVzIG9uXG4gICAgICogaWYgcmVuZGVyZXIgaXMgcHJvdmlkZWQgYW5kIHdyYXBMaW5lcyBpcyB1bmRlZmluZWQuXG4gICAgICovXG5cblxuICAgIGlmICh3cmFwTGluZXMgPT09IHVuZGVmaW5lZCAmJiByZW5kZXJlciB8fCB3cmFwTG9uZ0xpbmVzKSB3cmFwTGluZXMgPSB0cnVlO1xuICAgIHJlbmRlcmVyID0gcmVuZGVyZXIgfHwgZGVmYXVsdFJlbmRlcmVyO1xuICAgIHZhciBkZWZhdWx0Q29kZVZhbHVlID0gW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiBjb2RlXG4gICAgfV07XG4gICAgdmFyIGNvZGVUcmVlID0gZ2V0Q29kZVRyZWUoe1xuICAgICAgYXN0R2VuZXJhdG9yOiBhc3RHZW5lcmF0b3IsXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgZGVmYXVsdENvZGVWYWx1ZTogZGVmYXVsdENvZGVWYWx1ZVxuICAgIH0pO1xuXG4gICAgaWYgKGNvZGVUcmVlLmxhbmd1YWdlID09PSBudWxsKSB7XG4gICAgICBjb2RlVHJlZS52YWx1ZSA9IGRlZmF1bHRDb2RlVmFsdWU7XG4gICAgfSAvLyBkZXRlcm1pbmUgbGFyZ2VzdCBsaW5lIG51bWJlciBzbyB0aGF0IHdlIGNhbiBmb3JjZSBtaW5XaWR0aCBvbiBhbGwgbGluZW51bWJlciBlbGVtZW50c1xuXG5cbiAgICB2YXIgbGFyZ2VzdExpbmVOdW1iZXIgPSBjb2RlVHJlZS52YWx1ZS5sZW5ndGggKyBzdGFydGluZ0xpbmVOdW1iZXI7XG4gICAgdmFyIHJvd3MgPSBwcm9jZXNzTGluZXMoY29kZVRyZWUsIHdyYXBMaW5lcywgbGluZVByb3BzLCBzaG93TGluZU51bWJlcnMsIHNob3dJbmxpbmVMaW5lTnVtYmVycywgc3RhcnRpbmdMaW5lTnVtYmVyLCBsYXJnZXN0TGluZU51bWJlciwgbGluZU51bWJlclN0eWxlLCB3cmFwTG9uZ0xpbmVzKTtcblxuICAgIGlmICh3cmFwTG9uZ0xpbmVzKSB7XG4gICAgICBjb2RlVGFnUHJvcHMuc3R5bGUgPSAoMCwgX29iamVjdFNwcmVhZDIuZGVmYXVsdCkoe30sIGNvZGVUYWdQcm9wcy5zdHlsZSwge1xuICAgICAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29kZVRhZ1Byb3BzLnN0eWxlID0gKDAsIF9vYmplY3RTcHJlYWQyLmRlZmF1bHQpKHt9LCBjb2RlVGFnUHJvcHMuc3R5bGUsIHtcbiAgICAgICAgd2hpdGVTcGFjZTogJ3ByZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFByZVRhZywgcHJlUHJvcHMsIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29kZVRhZywgY29kZVRhZ1Byb3BzLCAhc2hvd0lubGluZUxpbmVOdW1iZXJzICYmIGFsbExpbmVOdW1iZXJzLCByZW5kZXJlcih7XG4gICAgICByb3dzOiByb3dzLFxuICAgICAgc3R5bGVzaGVldDogc3R5bGUsXG4gICAgICB1c2VJbmxpbmVTdHlsZXM6IHVzZUlubGluZVN0eWxlc1xuICAgIH0pKSk7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vL1xuLy8gVGhpcyBmaWxlIGhhcyBiZWVuIGF1dG8tZ2VuZXJhdGVkIGJ5IHRoZSBgbnBtIHJ1biBidWlsZC1sYW5ndWFnZXMtcHJpc21gIHRhc2tcbi8vXG52YXIgX2RlZmF1bHQgPSBbJ2FiYXAnLCAnYWJuZicsICdhY3Rpb25zY3JpcHQnLCAnYWRhJywgJ2FnZGEnLCAnYWwnLCAnYW50bHI0JywgJ2FwYWNoZWNvbmYnLCAnYXBsJywgJ2FwcGxlc2NyaXB0JywgJ2FxbCcsICdhcmR1aW5vJywgJ2FyZmYnLCAnYXNjaWlkb2MnLCAnYXNtNjUwMicsICdhc3BuZXQnLCAnYXV0b2hvdGtleScsICdhdXRvaXQnLCAnYmFzaCcsICdiYXNpYycsICdiYXRjaCcsICdiYmNvZGUnLCAnYmlzb24nLCAnYm5mJywgJ2JyYWluZnVjaycsICdicmlnaHRzY3JpcHQnLCAnYnJvJywgJ2MnLCAnY2lsJywgJ2NsaWtlJywgJ2Nsb2p1cmUnLCAnY21ha2UnLCAnY29mZmVlc2NyaXB0JywgJ2NvbmN1cm5hcycsICdjcHAnLCAnY3J5c3RhbCcsICdjc2hhcnAnLCAnY3NwJywgJ2Nzcy1leHRyYXMnLCAnY3NzJywgJ2N5cGhlcicsICdkJywgJ2RhcnQnLCAnZGF4JywgJ2RoYWxsJywgJ2RpZmYnLCAnZGphbmdvJywgJ2Rucy16b25lLWZpbGUnLCAnZG9ja2VyJywgJ2VibmYnLCAnZWRpdG9yY29uZmlnJywgJ2VpZmZlbCcsICdlanMnLCAnZWxpeGlyJywgJ2VsbScsICdlcmInLCAnZXJsYW5nJywgJ2V0bHVhJywgJ2V4Y2VsLWZvcm11bGEnLCAnZmFjdG9yJywgJ2ZpcmVzdG9yZS1zZWN1cml0eS1ydWxlcycsICdmbG93JywgJ2ZvcnRyYW4nLCAnZnNoYXJwJywgJ2Z0bCcsICdnY29kZScsICdnZHNjcmlwdCcsICdnZWRjb20nLCAnZ2hlcmtpbicsICdnaXQnLCAnZ2xzbCcsICdnbWwnLCAnZ28nLCAnZ3JhcGhxbCcsICdncm9vdnknLCAnaGFtbCcsICdoYW5kbGViYXJzJywgJ2hhc2tlbGwnLCAnaGF4ZScsICdoY2wnLCAnaGxzbCcsICdocGtwJywgJ2hzdHMnLCAnaHR0cCcsICdpY2hpZ29qYW0nLCAnaWNvbicsICdpZWNzdCcsICdpZ25vcmUnLCAnaW5mb3JtNycsICdpbmknLCAnaW8nLCAnaicsICdqYXZhJywgJ2phdmFkb2MnLCAnamF2YWRvY2xpa2UnLCAnamF2YXNjcmlwdCcsICdqYXZhc3RhY2t0cmFjZScsICdqb2xpZScsICdqcScsICdqcy1leHRyYXMnLCAnanMtdGVtcGxhdGVzJywgJ2pzZG9jJywgJ2pzb24nLCAnanNvbjUnLCAnanNvbnAnLCAnanNzdGFja3RyYWNlJywgJ2pzeCcsICdqdWxpYScsICdrZXltYW4nLCAna290bGluJywgJ2xhdGV4JywgJ2xhdHRlJywgJ2xlc3MnLCAnbGlseXBvbmQnLCAnbGlxdWlkJywgJ2xpc3AnLCAnbGl2ZXNjcmlwdCcsICdsbHZtJywgJ2xvbGNvZGUnLCAnbHVhJywgJ21ha2VmaWxlJywgJ21hcmtkb3duJywgJ21hcmt1cC10ZW1wbGF0aW5nJywgJ21hcmt1cCcsICdtYXRsYWInLCAnbWVsJywgJ21pemFyJywgJ21vbmtleScsICdtb29uc2NyaXB0JywgJ24xcWwnLCAnbjRqcycsICduYW5kMnRldHJpcy1oZGwnLCAnbmFzbScsICduZW9uJywgJ25naW54JywgJ25pbScsICduaXgnLCAnbnNpcycsICdvYmplY3RpdmVjJywgJ29jYW1sJywgJ29wZW5jbCcsICdveicsICdwYXJpZ3AnLCAncGFyc2VyJywgJ3Bhc2NhbCcsICdwYXNjYWxpZ28nLCAncGNheGlzJywgJ3Blb3BsZWNvZGUnLCAncGVybCcsICdwaHAtZXh0cmFzJywgJ3BocCcsICdwaHBkb2MnLCAncGxzcWwnLCAncG93ZXJxdWVyeScsICdwb3dlcnNoZWxsJywgJ3Byb2Nlc3NpbmcnLCAncHJvbG9nJywgJ3Byb3BlcnRpZXMnLCAncHJvdG9idWYnLCAncHVnJywgJ3B1cHBldCcsICdwdXJlJywgJ3B1cmViYXNpYycsICdweXRob24nLCAncScsICdxbWwnLCAncW9yZScsICdyJywgJ3JhY2tldCcsICdyZWFzb24nLCAncmVnZXgnLCAncmVucHknLCAncmVzdCcsICdyaXAnLCAncm9ib2NvbmYnLCAncm9ib3RmcmFtZXdvcmsnLCAncnVieScsICdydXN0JywgJ3NhcycsICdzYXNzJywgJ3NjYWxhJywgJ3NjaGVtZScsICdzY3NzJywgJ3NoZWxsLXNlc3Npb24nLCAnc21hbGknLCAnc21hbGx0YWxrJywgJ3NtYXJ0eScsICdzb2xpZGl0eScsICdzb2x1dGlvbi1maWxlJywgJ3NveScsICdzcGFycWwnLCAnc3BsdW5rLXNwbCcsICdzcWYnLCAnc3FsJywgJ3N0eWx1cycsICdzd2lmdCcsICd0NC1jcycsICd0NC10ZW1wbGF0aW5nJywgJ3Q0LXZiJywgJ3RhcCcsICd0Y2wnLCAndGV4dGlsZScsICd0b21sJywgJ3RzeCcsICd0dDInLCAndHVydGxlJywgJ3R3aWcnLCAndHlwZXNjcmlwdCcsICd1bnJlYWxzY3JpcHQnLCAndmFsYScsICd2Ym5ldCcsICd2ZWxvY2l0eScsICd2ZXJpbG9nJywgJ3ZoZGwnLCAndmltJywgJ3Zpc3VhbC1iYXNpYycsICd3YXJwc2NyaXB0JywgJ3dhc20nLCAnd2lraScsICd4ZW9yYScsICd4bWwtZG9jJywgJ3hvam8nLCAneHF1ZXJ5JywgJ3lhbWwnLCAneWFuZycsICd6aWcnXTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oaWdobGlnaHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hpZ2hsaWdodFwiKSk7XG5cbnZhciBfcHJpc20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0eWxlcy9wcmlzbS9wcmlzbVwiKSk7XG5cbnZhciBfcmVmcmFjdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVmcmFjdG9yXCIpKTtcblxudmFyIF9zdXBwb3J0ZWRMYW5ndWFnZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xhbmd1YWdlcy9wcmlzbS9zdXBwb3J0ZWQtbGFuZ3VhZ2VzXCIpKTtcblxudmFyIGhpZ2hsaWdodGVyID0gKDAsIF9oaWdobGlnaHQuZGVmYXVsdCkoX3JlZnJhY3Rvci5kZWZhdWx0LCBfcHJpc20uZGVmYXVsdCk7XG5oaWdobGlnaHRlci5zdXBwb3J0ZWRMYW5ndWFnZXMgPSBfc3VwcG9ydGVkTGFuZ3VhZ2VzLmRlZmF1bHQ7XG52YXIgX2RlZmF1bHQgPSBoaWdobGlnaHRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICBcImNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXVwiOiB7XG4gICAgXCJjb2xvclwiOiBcImJsYWNrXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwibm9uZVwiLFxuICAgIFwidGV4dFNoYWRvd1wiOiBcIjAgMXB4IHdoaXRlXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjFlbVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcInByZVwiLFxuICAgIFwid29yZFNwYWNpbmdcIjogXCJub3JtYWxcIixcbiAgICBcIndvcmRCcmVha1wiOiBcIm5vcm1hbFwiLFxuICAgIFwid29yZFdyYXBcIjogXCJub3JtYWxcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxLjVcIixcbiAgICBcIk1velRhYlNpemVcIjogXCI0XCIsXG4gICAgXCJPVGFiU2l6ZVwiOiBcIjRcIixcbiAgICBcInRhYlNpemVcIjogXCI0XCIsXG4gICAgXCJXZWJraXRIeXBoZW5zXCI6IFwibm9uZVwiLFxuICAgIFwiTW96SHlwaGVuc1wiOiBcIm5vbmVcIixcbiAgICBcIm1zSHlwaGVuc1wiOiBcIm5vbmVcIixcbiAgICBcImh5cGhlbnNcIjogXCJub25lXCJcbiAgfSxcbiAgXCJwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXVwiOiB7XG4gICAgXCJjb2xvclwiOiBcImJsYWNrXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2Y1ZjJmMFwiLFxuICAgIFwidGV4dFNoYWRvd1wiOiBcIjAgMXB4IHdoaXRlXCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjFlbVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcInByZVwiLFxuICAgIFwid29yZFNwYWNpbmdcIjogXCJub3JtYWxcIixcbiAgICBcIndvcmRCcmVha1wiOiBcIm5vcm1hbFwiLFxuICAgIFwid29yZFdyYXBcIjogXCJub3JtYWxcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxLjVcIixcbiAgICBcIk1velRhYlNpemVcIjogXCI0XCIsXG4gICAgXCJPVGFiU2l6ZVwiOiBcIjRcIixcbiAgICBcInRhYlNpemVcIjogXCI0XCIsXG4gICAgXCJXZWJraXRIeXBoZW5zXCI6IFwibm9uZVwiLFxuICAgIFwiTW96SHlwaGVuc1wiOiBcIm5vbmVcIixcbiAgICBcIm1zSHlwaGVuc1wiOiBcIm5vbmVcIixcbiAgICBcImh5cGhlbnNcIjogXCJub25lXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiMWVtXCIsXG4gICAgXCJtYXJnaW5cIjogXCIuNWVtIDBcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiYXV0b1wiXG4gIH0sXG4gIFwicHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06Oi1tb3otc2VsZWN0aW9uXCI6IHtcbiAgICBcInRleHRTaGFkb3dcIjogXCJub25lXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2IzZDRmY1wiXG4gIH0sXG4gIFwicHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gOjotbW96LXNlbGVjdGlvblwiOiB7XG4gICAgXCJ0ZXh0U2hhZG93XCI6IFwibm9uZVwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNiM2Q0ZmNcIlxuICB9LFxuICBcImNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXTo6LW1vei1zZWxlY3Rpb25cIjoge1xuICAgIFwidGV4dFNoYWRvd1wiOiBcIm5vbmVcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIjYjNkNGZjXCJcbiAgfSxcbiAgXCJjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gOjotbW96LXNlbGVjdGlvblwiOiB7XG4gICAgXCJ0ZXh0U2hhZG93XCI6IFwibm9uZVwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNiM2Q0ZmNcIlxuICB9LFxuICBcInByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOjpzZWxlY3Rpb25cIjoge1xuICAgIFwidGV4dFNoYWRvd1wiOiBcIm5vbmVcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIjYjNkNGZjXCJcbiAgfSxcbiAgXCJwcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSA6OnNlbGVjdGlvblwiOiB7XG4gICAgXCJ0ZXh0U2hhZG93XCI6IFwibm9uZVwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNiM2Q0ZmNcIlxuICB9LFxuICBcImNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXTo6c2VsZWN0aW9uXCI6IHtcbiAgICBcInRleHRTaGFkb3dcIjogXCJub25lXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2IzZDRmY1wiXG4gIH0sXG4gIFwiY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIDo6c2VsZWN0aW9uXCI6IHtcbiAgICBcInRleHRTaGFkb3dcIjogXCJub25lXCIsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2IzZDRmY1wiXG4gIH0sXG4gIFwiOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCIjZjVmMmYwXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiLjFlbVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiLjNlbVwiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vcm1hbFwiXG4gIH0sXG4gIFwiY29tbWVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInNsYXRlZ3JheVwiXG4gIH0sXG4gIFwicHJvbG9nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwic2xhdGVncmF5XCJcbiAgfSxcbiAgXCJkb2N0eXBlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwic2xhdGVncmF5XCJcbiAgfSxcbiAgXCJjZGF0YVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInNsYXRlZ3JheVwiXG4gIH0sXG4gIFwicHVuY3R1YXRpb25cIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTk5XCJcbiAgfSxcbiAgXCJuYW1lc3BhY2VcIjoge1xuICAgIFwiT3BhY2l0eVwiOiBcIi43XCJcbiAgfSxcbiAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5MDVcIlxuICB9LFxuICBcInRhZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5MDVcIlxuICB9LFxuICBcImJvb2xlYW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTA1XCJcbiAgfSxcbiAgXCJudW1iZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTA1XCJcbiAgfSxcbiAgXCJjb25zdGFudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5MDVcIlxuICB9LFxuICBcInN5bWJvbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5MDVcIlxuICB9LFxuICBcImRlbGV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOTA1XCJcbiAgfSxcbiAgXCJzZWxlY3RvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2OTBcIlxuICB9LFxuICBcImF0dHItbmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2OTBcIlxuICB9LFxuICBcInN0cmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2OTBcIlxuICB9LFxuICBcImNoYXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjkwXCJcbiAgfSxcbiAgXCJidWlsdGluXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzY5MFwiXG4gIH0sXG4gIFwiaW5zZXJ0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjkwXCJcbiAgfSxcbiAgXCJvcGVyYXRvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5YTZlM2FcIixcbiAgICBcImJhY2tncm91bmRcIjogXCJoc2xhKDAsIDAlLCAxMDAlLCAuNSlcIlxuICB9LFxuICBcImVudGl0eVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5YTZlM2FcIixcbiAgICBcImJhY2tncm91bmRcIjogXCJoc2xhKDAsIDAlLCAxMDAlLCAuNSlcIixcbiAgICBcImN1cnNvclwiOiBcImhlbHBcIlxuICB9LFxuICBcInVybFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5YTZlM2FcIixcbiAgICBcImJhY2tncm91bmRcIjogXCJoc2xhKDAsIDAlLCAxMDAlLCAuNSlcIlxuICB9LFxuICBcIi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5YTZlM2FcIixcbiAgICBcImJhY2tncm91bmRcIjogXCJoc2xhKDAsIDAlLCAxMDAlLCAuNSlcIlxuICB9LFxuICBcIi5zdHlsZSAudG9rZW4uc3RyaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzlhNmUzYVwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcImhzbGEoMCwgMCUsIDEwMCUsIC41KVwiXG4gIH0sXG4gIFwiYXRydWxlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzA3YVwiXG4gIH0sXG4gIFwiYXR0ci12YWx1ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwN2FcIlxuICB9LFxuICBcImtleXdvcmRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDdhXCJcbiAgfSxcbiAgXCJmdW5jdGlvblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNERDRBNjhcIlxuICB9LFxuICBcImNsYXNzLW5hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjREQ0QTY4XCJcbiAgfSxcbiAgXCJyZWdleFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNlOTBcIlxuICB9LFxuICBcImltcG9ydGFudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNlOTBcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJ2YXJpYWJsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNlOTBcIlxuICB9LFxuICBcImJvbGRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcIml0YWxpY1wiOiB7XG4gICAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIlxuICB9XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJ1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInXG5pbXBvcnQgeyBzaGFkZXNPZlB1cnBsZSB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9wcmlzbSdcblxuaW1wb3J0IFNFTyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NFTydcblxuaW1wb3J0IHsgZ2V0QWxsU2x1Z3MsIGdldFBvc3RCeVNsdWcgfSBmcm9tICcuLi8uLi9hcGknXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IHJlbmRlcmVycyA9IHtcblx0Y29kZTogKHsgbGFuZ3VhZ2UsIHZhbHVlIH0pID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN5bnRheEhpZ2hsaWdodGVyXG5cdFx0XHRcdHN0eWxlPXtzaGFkZXNPZlB1cnBsZX1cblx0XHRcdFx0bGFuZ3VhZ2U9e2xhbmd1YWdlfVxuXHRcdFx0XHRjaGlsZHJlbj17dmFsdWV9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VGVtcGxhdGUoeyBodG1sLCBmcm9udG1hdHRlciB9KSB7XG5cdGNvbnN0IHsgbGFuZywgZGF0ZSwgdGFncywgdGl0bGUsIHBhdGggfSA9IGZyb250bWF0dGVyXG5cdC8vIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5nID09PSAnYXInID8gJ3J0bCcgOiBudWxsXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFNFTyB7Li4uZnJvbnRtYXR0ZXJ9IC8+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3Bhbj57ZGF0ZX08L3NwYW4+XG5cdFx0XHRcdDxzcGFuPiDigJQgPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHt0aXRsZX0mdXJsPWh0dHBzOi8vaWFtbmFiaWwubmV0bGlmeS5hcHAke3BhdGh9Jmhhc2h0YWdzPSR7dGFnc31gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFR3ZWV0IFRoaXNcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbXQtMCBtYi00Jz57dGl0bGV9PC9oMT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0PFJlYWN0TWFya2Rvd24gcmVuZGVyZXJzPXtyZW5kZXJlcnN9IGFsbG93RGFuZ2Vyb3VzSHRtbD5cblx0XHRcdFx0XHR7aHRtbH1cblx0XHRcdFx0PC9SZWFjdE1hcmtkb3duPlxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xuXHRjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhzbHVnKVxuXG5cdHBvc3QuZnJvbnRtYXR0ZXIuZGF0ZSA9IGZvcm1hdERhdGUoXG5cdFx0cG9zdC5mcm9udG1hdHRlci5kYXRlLFxuXHRcdHBvc3QuZnJvbnRtYXR0ZXIubGFuZ1xuXHQpXG5cblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0Li4ucG9zdFxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cdGNvbnN0IHBhdGhzID0gZ2V0QWxsU2x1Z3MoKS5tYXAoc2x1ZyA9PiAoe1xuXHRcdHBhcmFtczogeyBzbHVnOiBzbHVnLnJlcGxhY2UoJy5tZCcsICcnKSB9XG5cdH0pKVxuXG5cdHJldHVybiB7XG5cdFx0cGF0aHMsXG5cdFx0ZmFsbGJhY2s6IGZhbHNlXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=