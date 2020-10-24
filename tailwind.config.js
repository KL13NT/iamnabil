const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: [],
	theme: {
		extend: {
			colors: {
				accent: '#F3F3F3',
				shadow: '#1F1F1F',
				link: '#FACF90'
			},
			maxWidth: {
				min: 'min-content',
				max: 'max-content'
			}
		},
		fontFamily: {
			display:
				'Overpass Mono, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',

			rtl:
				'Cairo, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
		}
	},
	variants: {},
	plugins: []
}
