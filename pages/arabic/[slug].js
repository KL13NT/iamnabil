const COLLECTION = 'arabic'

import React from 'react'

import Article from '../../components/Article'

import { getArticleStaticPaths, getArticleStaticProps } from '../../api'

export default function Blog(props) {
	return <Article {...props} />
}

export async function getStaticProps({ params: { slug } }) {
	return getArticleStaticProps(slug, COLLECTION)
}

export async function getStaticPaths() {
	return getArticleStaticPaths(COLLECTION)
}

export const config = {
	unstable_runtimeJS: false
}
