import React from 'react'

import SEO from '../../components/SEO'

import { PostList } from '../../components/PostList'
import { getAllPosts } from '../../api'

export default function Blog({ posts }) {
	return (
		<>
			<SEO title='Blog' path='blog' />
			<h1>Thoughts</h1>
			<p>
				These are not entirely thoughts. My Arabic articles can be found on the
				Arabic blog page.
			</p>
			<div className='mt-12'>
				<PostList posts={posts} lang='english' />
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts('blog')

	return {
		props: {
			posts
		}
	}
}
