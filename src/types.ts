import type { CollectionEntry } from 'astro:content'

export type BasePostType = CollectionEntry<'blog'>
export type PostType = CollectionEntry<'blog'> & {
	related: CollectionEntry<'blog'>[]
}

export type Lang = 'en' | 'ar'
export type Collection = 'arabic' | 'blog' | 'notes'

/**
 * Tailwind-compatible breakpoints. Combine with tailwind breakpoint classes for
 * accurate layout-linked image optimisation.
 */
export enum Breakpoints {
	'sm' = 640,
	'lg' = 1024,
	'xxl' = 1536
}
