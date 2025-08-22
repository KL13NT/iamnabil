import { getCollection } from 'astro:content'
import type { BasePostType, Collection } from './types'

const getBlogPostsWithFilter = async (filter: string) => {
	const posts = await getCollection('blog', ({ id }) => id.startsWith(filter))

	return posts.sort((post1, post2) =>
		post1.data.date < post2.data.date ? 1 : -1
	)
}

export const getRelatedPosts = async (
	post: BasePostType,
	filter: Collection
) => {
	const posts = await getBlogPostsWithFilter(filter)

	return posts.filter(targetPost => targetPost.id !== post.id).slice(0, 3)
}

export const getEnglishBlog = async () => getBlogPostsWithFilter('blog')
export const getArabicBlog = async () => getBlogPostsWithFilter('arabic')
export const getNotes = async () => getBlogPostsWithFilter('notes')
