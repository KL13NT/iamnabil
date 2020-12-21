/* eslint-disable react/display-name */
import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SEO from '../../components/SEO'

import { getAllSlugs, getPostBySlug } from '../../api'
import { formatDate } from '../../utils'

const renderers = {
	code: ({ language, value }) => {
		return (
			<SyntaxHighlighter
				style={shadesOfPurple}
				language={language}
				showLineNumbers
			>
				{value}
			</SyntaxHighlighter>
		)
	},
	pre: ({ language, value }) => {
		return (
			<SyntaxHighlighter
				style={shadesOfPurple}
				language={language}
				showLineNumbers
			>
				{value}
			</SyntaxHighlighter>
		)
	}
}

export default function PostTemplate({ html, frontmatter }) {
	const { lang, date, tags, title, path } = frontmatter
	const dir = lang === 'ar' ? 'rtl' : null

	return (
		<>
			<SEO {...frontmatter} />
			<div dir={dir}>
				<p>
					{date}
					<span> — </span>
					<a
						href={`https://twitter.com/intent/tweet?text=${title}&url=https://iamnabil.netlify.app${path}&hashtags=${tags}`}
					>
						{lang === 'ar' ? 'غرد هذه المقالة' : 'Tweet This'}
					</a>
				</p>
				<h1 className='mt-0 mb-4'># {title}</h1>
			</div>
			<hr />
			<article dir={dir} className='mt-24'>
				<ReactMarkdown renderers={renderers} allowDangerousHtml>
					{html}
				</ReactMarkdown>
			</article>
		</>
	)
}

export async function getStaticProps({ params: { slug } }) {
	const post = getPostBySlug(slug)

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
	const paths = getAllSlugs().map(slug => ({
		params: { slug: slug.replace('.md', '') }
	}))

	return {
		paths,
		fallback: false
	}
}
