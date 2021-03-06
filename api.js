import matter from 'gray-matter'

import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'blog')
const tutorialsDirectory = join(process.cwd(), 'tutorials')

export function getAllSlugs(filter = 'blog') {
	return readdirSync(
		filter === 'blog' ? postsDirectory : tutorialsDirectory
	).filter(path => path.endsWith('.md'))
}

export function getPostBySlug(slug, filter = 'blog') {
	const filename = slug.replace(/\.md$/, '')
	const path = join(
		filter === 'blog' ? postsDirectory : tutorialsDirectory,
		`${filename}.md`
	)
	console.log(path)
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

export function getAllPosts(filter = 'blog') {
	const slugs = getAllSlugs(filter)
	const posts = slugs
		.map(slug => getPostBySlug(slug, filter))
		.sort((post1, post2) => (post1.date > post2.date ? 1 : -1))

	return posts
}
