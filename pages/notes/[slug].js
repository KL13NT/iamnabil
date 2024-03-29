const COLLECTION = 'notes'

import React from 'react'

import Article from '../../components/Article'

import { getArticleStaticPaths, getArticleStaticProps } from '../../api'

export default function Note(props) {
	return <Article {...props} />
}

export async function getStaticProps({ params: { slug } }) {
	return getArticleStaticProps(slug, COLLECTION)
}

export async function getStaticPaths() {
	return getArticleStaticPaths(COLLECTION)
}
