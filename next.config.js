const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/
})

module.exports = withMDX({
	target: 'experimental-serverless-trace',
	pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
