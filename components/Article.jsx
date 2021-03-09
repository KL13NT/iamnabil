/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SEO from './SEO'

const renderers = {
	p: ({ value }) => <p dir='auto'>{value}</p>,
	blockquote: ({ children }) => <blockquote dir='auto'>{children}</blockquote>,
	code: ({ language, value }) => (
		<SyntaxHighlighter
			style={shadesOfPurple}
			language={language}
			showLineNumbers
		>
			{value}
		</SyntaxHighlighter>
	),
	pre: ({ language, value }) => (
		<SyntaxHighlighter
			style={shadesOfPurple}
			language={language}
			showLineNumbers
		>
			{value}
		</SyntaxHighlighter>
	)
}

export default function Article({ html, frontmatter, path }) {
	const { lang, date, title } = frontmatter

	return (
		<>
			<SEO {...frontmatter} path={path} />
			<div dir='auto' data-lang={lang}>
				<p>
					{date}
					<span> — </span>
					<a
						href={`https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
							`https://iamnabil.netlify.app/${path}`
						)}&via=kl13nt`}
					>
						{lang === 'ar' ? 'غرد هذه المقالة' : 'Tweet This'}
					</a>
				</p>
				<h1 className='mt-0 mb-4'># {title}</h1>
			</div>
			<hr />
			<article dir='auto' data-lang={lang} className='mt-24'>
				<ReactMarkdown renderers={renderers} allowDangerousHtml>
					{html}
				</ReactMarkdown>
			</article>
		</>
	)
}
