import React from 'react'

import SEO from '../components/SEO'

import { PostList } from '../components/PostList'
import { getAllPosts } from '../api'

export default function Blog({ posts }) {
	return (
		<>
			<SEO title='Blog' />
			<h1>Thoughts</h1>
			<p>
				These are not entirely thoughts. Some of them written in Arabic, others
				in English.
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
