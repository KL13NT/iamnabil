import React from 'react'

import SEO from '../../components/SEO'

import { getAllPosts } from '../../api'
import { NotesList } from '../../components/NotesList'

export default function Notes({ posts }) {
	return (
		<>
			<SEO title='Notes' path='notes' />
			<h1>Notes</h1>
			<p>Study notes and resources for my content.</p>
			<div className='mt-12'>
				<NotesList posts={posts} lang='en' />
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
