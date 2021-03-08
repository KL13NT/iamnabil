const COLLECTION = 'tutorials'

import React from 'react'

import Article from '../../components/Article'

import { getAllSlugs, getPostByFilename } from '../../api'
import { formatDate } from '../../utils'

export default function Tutorial(props) {
	return <Article {...props} />
}

export async function getStaticProps({ params: { slug } }) {
	const post = getPostByFilename(slug, COLLECTION)

	post.frontmatter.date = formatDate(
		post.frontmatter.date,
		post.frontmatter.lang
	)

	return {
		props: {
			...post
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllSlugs(COLLECTION).map(slug => ({
		params: {
			slug
		}
	}))

	return {
		paths,
		fallback: false
	}
}

export const config = {
	unstable_runtimeJS: false
}
