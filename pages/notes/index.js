import React from 'react'

import SEO from '../../components/SEO'

import { PostList } from '../../components/PostList'
import { getAllPosts } from '../../api'

export default function Blog({ posts }) {
	return (
		<>
			<SEO title='Notes' path='notes' />
			<h1>Notes</h1>
			<p>
				Notes I use to prepare content I publish. May also include study notes.
			</p>

			<div className='mt-12'>
				{posts.length > 0 ? (
					<PostList posts={posts} lang='english' />
				) : (
					<div className='text-center'>
						<img src='/doge_sad.jpg' alt='doge sad' className='h-64 mx-auto' />
						<h1 className='font-display'>
							{'<'}EMPTY{'>'}
						</h1>
						<p>
							You've stumbled upon an empty desert. May it be filled some day.
						</p>
					</div>
				)}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts('notes')

	return {
		props: {
			posts
		}
	}
}

export const config = {
	unstable_runtimeJS: false
}
