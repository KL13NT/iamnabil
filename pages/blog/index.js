import React from 'react'

import SEO from '../../components/SEO'

import { PostList } from '../../components/PostList'
import { getAllPosts } from '../../api'

export default function Blog({ posts }) {
	return (
		<>
			<SEO title='Blog' />
			<h1>Thoughts</h1>
			<p>
				These are not entirely thoughts. Some of them are written in Arabic,
				some others are available in English.
			</p>
			<hr />
			<PostList posts={posts} />
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts()

	return {
		props: {
			posts
		}
	}
}

export const config = {
	unstable_runtimeJS: false
}
