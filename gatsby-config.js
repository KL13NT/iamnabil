const path = require('path')

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: 'Nabil\'s Blog',
		description: 'Kick off your next, great project with a curated list of helpful blog posts.',
		author: '@Nabil_Tharwat16',
		siteUrl: 'https://iamnabil.netlify.app'
	},
	plugins: [
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-page-transitions',
			options: {
				transitionTime: 1000
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Nabil\'s Blog',
				short_name: 'Nabil',
				start_url: '/',
				background_color: '#FFE600',
				icon: 'src/images/icon.png', // This path is relative to the root of the site.
				display: 'standalone',
				crossOrigin: 'use-credentials',
				orientation: 'portrait',
				theme_color: '#2F3BA2'
			}
		},
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, 'src', 'markdown-pages')
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: `${__dirname}/src/markdown-pages`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-reading-time',
					{
						resolve: 'gatsby-remark-link-card',
						options: {
						}
					}
				]
			}
		}
	]
}