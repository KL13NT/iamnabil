module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended'
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true
		}
	},
	plugins: ['react', 'jsx-a11y'],
	rules: {
		indent: 0,
		'linebreak-style': 0,
		'react-hooks/exhaustive-deps': 0,
		'react/no-unescaped-entities': 0,
		'react/jsx-curly-spacing': 0,
		'react/prop-types': 0,
		'no-mixed-spaces-and-tabs': 0,
		'prefer-rest-params': 0,
		'no-unused-vars': 1,
		'no-whitespace-before-property': 2,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'object-curly-spacing': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		semi: ['error', 'never'],
		'block-spacing': [2, 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		'no-unused-vars': [
			'error',
			{
				varsIgnorePattern: 'Fragment'
			}
		],
		'quote-props': [
			'error',
			'as-needed',
			{
				keywords: false
			}
		],
		'space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
				overrides: {
					new: true,
					'=': true
				}
			}
		],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false
			}
		]
	}
}
