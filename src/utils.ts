import { GITHUB_REPO, TWITTER_HANDLE } from './constants'
import { Breakpoints, type Lang } from './types'

import { site } from 'astro:config/client'

export function formatDate(date: Date, lang: Lang) {
	return new Date(date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

export function getTwitterSearchPath(id: string) {
	return `https://twitter.com/search?q=${encodeURIComponent(
		`"${site}/${id}"`
	)}%20(from%3A${TWITTER_HANDLE})%20filter%3Alinks%20-filter%3Areplies&src=typed_query`
}

export function getTwitterPath(title: string, id: string) {
	return `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
		`${site}/${id}`
	)}&via=${TWITTER_HANDLE}`
}

export function getArticleGithubPath(id: string) {
	return `${GITHUB_REPO}/tree/master/collections/${id}.md`
}

export function invariant(condition: any, message = 'Invariant violation') {
	if (!condition) {
		throw new Error(message)
	}
}

export function assertValue<T>(
	value: unknown,
	message = 'Invariant violation'
): asserts value is T {
	if (value === undefined || value === null) {
		throw new Error(message)
	}
}

export type BreakpointsKey = keyof typeof Breakpoints
export type GenerateSizesOptions = Partial<Record<BreakpointsKey, number>>

/**
 * Accepts a mapping of breakpoint to image size relative to viewport width
 * */
export const generateImageSizes = (sizes: GenerateSizesOptions) => {
	const sortedSizes = Object.entries(sizes).sort((a, b) => a[1] - b[1]) as [
		BreakpointsKey,
		number
	][]

	const generatedSizes = sortedSizes
		.map(([breakpoint, vw], index, original) => {
			const maxWidth = Breakpoints[breakpoint]

			if (!maxWidth) {
				throw new Error(`Unknown breakpoint: ${breakpoint}`)
			}

			if (index === original.length - 1) {
				return `${vw}vw`
			}

			return `(max-width: ${maxWidth}px) ${vw}vw`
		})
		.join(', ')

	return {
		sizes: generatedSizes
	}
}
