import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

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
		slug
	}
}

export function getAllPosts() {
	const slugs = getAllSlugs()
	const posts = slugs
		.map(slug => getPostBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

	return posts
}
