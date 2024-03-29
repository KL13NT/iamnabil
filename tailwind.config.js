module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	content: [
		'./pages/**/*.js',
		'./pages/**/*.jsx',
		'./components/**/*.js',
		'./components/**/*.jsx',
		'./components/**/*.mdx',
		'./pages/**/*.mdx'
	],
	theme: {
		extend: {
			colors: {
				accent: '#F3F3F3',
				shadow: '#1F1F1F',
				link: '#FACF90',
				code: '#2d2b57',
				primary: '#000000',
				'dark-700': '#393939'
			},
			maxWidth: {
				min: 'min-content',
				max: 'max-content'
			}
		},
		fontFamily: {
			display:
				'Manrope, Comfortaa, Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',

			rtl: 'Tajawal, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
		}
	},
	variants: {},
	plugins: [require('tailwindcss-logical')]
}
