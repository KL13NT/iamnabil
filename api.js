import matter from 'gray-matter'

import { readFileSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import { formatDate } from './utils'

const collections = join(process.cwd(), 'collections')

/**
 * @typedef {Object} Slug
 * @property {String} path relative path from / without .md
 * @property {String} slug file name with .md
 */

export function getAllSlugs(collection = 'arabic') {
	return readdirSync(`${collections}/${collection}`).map(slug =>
		slug.replace('.md', '')
	)
}

export function getFSPathFromSlug(slug, collection) {
	return resolve(__dirname, `${collections}/${collection}/${slug}`)
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
			date: new Date(data.date).toJSON(),
			cover: data.cover
				? {
						path: data.cover.thumb
							? data.cover.path
							: `${data.cover.path}&w=1920&q=80`,
						thumb: data.cover.thumb
							? data.cover.thumb
							: `${data.cover.path}&w=420&h=560&q=80`,
						credit: data.cover.credit || null
				  }
				: null
		},
		html: content,
		slug, // filename
		path: getWebPathFromSlug(slug, collection) // web path
	}
}

export function getAllPosts(collection = 'arabic') {
	const slugs = getAllSlugs(collection)
	const posts = slugs
		.map(slug => getPostByFilename(slug, collection))
		.sort((post1, post2) => (post1.date > post2.date ? 1 : -1))

	return posts
}

export function getTranslationSlug(translation, collection) {
	if (!translation) return null
	else if (translation.type === 0)
		return `/${getWebPathFromSlug(translation.path, collection)}`
	else return translation.path
}

export function getArticleStaticProps(slug, collection) {
	const post = getPostByFilename(slug, collection)
	const { external, translation } = post.frontmatter

	if (external) {
		return {
			notFound: true
		}
	}

	const related = getRelated(3, collection, slug)
	const translationSlug = getTranslationSlug(translation, collection)
	const lang = collection === 'blog' ? 'en' : 'ar'
	const date = formatDate(
		post.frontmatter.date,
		collection === 'blog' ? 'en-GB' : 'ar-EG'
	)

	return {
		props: {
			...post,
			frontmatter: {
				...post.frontmatter,
				translation: translationSlug,
				date
			},
			lang,
			related
		}
	}
}

export function getArticleStaticPaths(collection) {
	const paths = getAllSlugs(collection).map(slug => ({
		params: {
			slug
		}
	}))

	return {
		paths,
		fallback: false
	}
}

export function getRelated(number, collection, slug) {
	const posts = getAllPosts(collection)

	return posts.filter(post => post.slug !== slug).slice(0, number)
}
