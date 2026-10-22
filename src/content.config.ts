import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content'
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().optional().nullable(),
			cover: z
				.object({
					path: image(),
					credit: z.string().optional().nullable(),
					thumb: image().optional()
				})
				.optional()
				.nullable(),
			path: z.string().url().optional().nullable(),
			translation: z.string().url().optional().nullable()
		})
})

export const collections = { blog }
