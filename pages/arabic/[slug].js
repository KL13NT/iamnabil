const COLLECTION = 'arabic'

import React from 'react'

import Article from '../../components/Article'

import {
	getArticleStaticPaths,
	getPostByFilename,
	getWebPathFromSlug
} from '../../api'
import { formatDate } from '../../utils'

export default function Blog(props) {
	return <Article {...props} />
}

export async function getStaticProps({ params: { slug } }) {
	const post = getPostByFilename(slug, COLLECTION)

	post.frontmatter.date = formatDate(post.frontmatter.date, 'ar-EG')

	return {
		props: {
			...post,
			lang: 'ar',
			path: getWebPathFromSlug(slug, COLLECTION)
		}
	}
}

export async function getStaticPaths() {
	return getArticleStaticPaths(COLLECTION)
}

export const config = {
	unstable_runtimeJS: false
}
