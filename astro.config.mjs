import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

import rehypeRewrite from 'rehype-rewrite'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

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
		shikiConfig: {
			theme: 'gruvbox-dark-hard'
		},
		rehypePlugins: [
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap'
				}
			],
			[
				rehypeRewrite,
				{
					rewrite: node => {
						if (
							node.type === 'element' &&
							!['ul', 'ol', 'li'].includes(node.tagName.toLowerCase())
						) {
							node.properties.dir = 'auto'
						}
					}
				}
			]
		]
	},
	vite: {
		plugins: [tailwindcss()]
	},
	experimental: {
		headingIdCompat: true
	}
})
