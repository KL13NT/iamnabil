import matter from 'gray-matter'

import { readFileSync, readdirSync } from 'fs'
import { join, resolve } from 'path'

const collections = join(process.cwd(), 'collections')

/**
 * @typedef {Object} Slug
 * @property {String} path relative path from / without .md
 * @property {String} slug file name with .md
 */

export function getAllSlugs(collection = 'blog') {
	return readdirSync(`${collections}/${collection}`)
		.filter(path => path.endsWith('.md'))
		.map(slug => slug.replace('.md', ''))
}

export function getFSPathFromSlug(slug, collection) {
	return resolve(__dirname, `${collections}/${collection}/${slug}`)
}

export function getFSPathFromWeb(path) {
	return resolve(__dirname, `${collections}/${path}.md`)
}

export function getWebPathFromSlug(slug, collection) {
	return `${collection}/${slug.replace('.md', '')}`
}

/**
 *
 * @param {String} slug
 * @param {String} collection
 */
export function getPostByFilename(slug, collection) {
	const file = readFileSync(
		resolve(__dirname, `${collections}/${collection}/${slug}.md`),
		'utf-8'
	)

	const { data, content } = matter(file)

	return {
		frontmatter: {
			...data,
			date: new Date(data.date).toJSON()
		},
		html: content,
		slug, // filename
		path: getWebPathFromSlug(slug, collection) // web path
	}
}

export function getAllPosts(collection = 'blog') {
	const slugs = getAllSlugs(collection)
	const posts = slugs
		.map(slug => getPostByFilename(slug, collection))
		.sort((post1, post2) => (post1.date > post2.date ? 1 : -1))

	return posts
}
