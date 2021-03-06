import React from 'react'

import SEO from '../../components/SEO'

import { PostList } from '../../components/PostList'
import { getAllPosts } from '../../api'

export default function Tutorials({ posts }) {
	return (
		<>
			<SEO title='Tutorials' />
			<h1>Tutorials</h1>
			<p>
				I post technical tutorials for frontend developers and students here.
			</p>
			<hr />
			<PostList posts={posts} filter='tutorials' />
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts('tutorials')

	return {
		props: {
			posts
		}
	}
}

export const config = {
	unstable_runtimeJS: false
}
