import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

import rehypeRewrite from 'rehype-rewrite'

/** @type {import('rehype-rewrite').RehypeRewriteOptions} */
const rehypeRewriteOptions = {
	rewrite: (node, index, parent) => {
		if (node.type === 'element') {
			node.properties.dir = 'auto'
		}
	}
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		react(),
		sitemap({
			filter: page => page !== 'https://nabiltharwat.com/admin/'
		})
	],
	site: 'https://nabiltharwat.com',
	prefetch: {
		defaultStrategy: 'viewport',
		prefetchAll: true
	},
	image: {
		breakpoints: [640, 1024, 1536],
		layout: 'full-width',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com'
			}
		]
	},
	markdown: {
		rehypePlugins: [[rehypeRewrite, rehypeRewriteOptions]]
	},
	vite: {
		plugins: [tailwindcss()]
	},
	experimental: {
		headingIdCompat: true
	}
})
