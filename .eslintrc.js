module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 10,
		'ecmaFeatures': {
			'jsx': true,
			'modules': true,
			'experimentalObjectRestSpread': true
		}
	},
	'plugins': [
	],
	'rules': {
		'indent': [
			'error',
			2
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': [
			'error', 
			{
				'varsIgnorePattern': 'Fragment'
			}
		],
		'quote-props': [
			"error",
			'consistent-as-needed',
			{
				'keywords': true
			}
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		"prefer-destructuring": ["error", {
      "array": true,
      "object": true
			}, {
      "enforceForRenamedProperties": false
		}],
		"prefer-const": ["error", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": false
    }],
		"space-before-function-paren": ["error", "always"],
		"comma-dangle": ["error", "never"],
		'react/prop-types': 0
	},
};