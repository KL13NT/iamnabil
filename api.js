import matter from 'gray-matter'

import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

import { sortByDate } from './utils'

const postsDirectory = join(process.cwd(), 'blog')

export function getAllSlugs() {
	return readdirSync(postsDirectory).filter(path => path.endsWith('.md'))
}

export function getPostBySlug(slug) {
	const filename = slug.replace(/\.md$/, '')
	const path = join(postsDirectory, `${filename}.md`)
	const text = readFileSync(path, 'utf-8')

	const { data, content } = matter(text)

	return {
		frontmatter: {
			...data,
			date: new Date(data.date).toJSON()
		},
		html: content,
		slug: filename
	}
}

export function getAllPosts(sorter) {
	const slugs = getAllSlugs()
	const posts = slugs
		.map(slug => getPostBySlug(slug))
		.sort(sorter || sortByDate)

	return posts
}
