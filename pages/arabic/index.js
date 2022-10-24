import React from 'react'

import SEO from '../../components/SEO'

import { PostList } from '../../components/PostList'
import { getAllPosts } from '../../api'

export default function Blog({ posts }) {
	return (
		<div data-lang='ar' className='dir-rtl'>
			<SEO title='بالعربية' path='arabic' />
			<h1>مقالاتي</h1>
			<p>مقالاتي المكتوبة والمترجمة باللغة العربية الفصحى والعاميّة المصرية.</p>
			<PostList posts={posts} lang='arabic' />
		</div>
	)
}

export async function getStaticProps() {
	const posts = getAllPosts('arabic')

	return {
		props: {
			posts
		}
	}
}

export const config = {
	unstable_runtimeJS: false
}
