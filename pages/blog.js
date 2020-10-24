import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'

import { PostList } from '../components/PostList'
import { getAllPosts } from '../api'

export default ({ posts }) => {
	return (
		<>
			<SEO />
			<h1>Thoughts</h1>
			<p>These are not entirely thoughts.</p>
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
