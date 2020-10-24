import React from 'react'

import SEO from '../../components/SEO'
import ArticleBody from '../../components/Article'

import { getAllSlugs, getPostBySlug } from '../../api'

function PostTemplate({ html, frontmatter }) {
	const { lang } = frontmatter
	const languageClass = lang === 'ar' ? 'u-rightToLeft' : null

	return (
		<>
			<SEO {...frontmatter} />
			<ArticleBody
				frontmatter={frontmatter}
				html={html}
				languageClass={languageClass}
			/>
		</>
	)
}

export async function getStaticProps({ params: { slug } }) {
	const post = getPostBySlug(slug)

	return {
		props: {
			...post
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllSlugs().map(slug => ({ params: { slug } }))

	return {
		paths,
		fallback: false
	}
}

export default PostTemplate
