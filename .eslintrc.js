module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "react/jsx-curly-spacing": [
      2,
      {
        when: "always",
        children: true,
      },
    ],
    "react/jsx-closing-tag-location": [2],
    "react/default-props-match-prop-types": [
      2,
      { allowRequiredDefaults: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/boolean-prop-naming": [2],
    "react/prop-types": 0,
    "react/jsx-closing-bracket-location": ["warn", "after-props"],
    "max-params": [1],
    indent: ["warn", "tab"],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    semi: ["warn", "never"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": 1,
    "quote-props": [
      "error",
      "consistent-as-needed",
      {
        keywords: true,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "no-whitespace-before-property": 2,
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false,
        overrides: {
          new: true,
          "=": true,
        },
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "comma-dangle": ["error", "never"],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "block-spacing": [2, "always"],
  },
}
