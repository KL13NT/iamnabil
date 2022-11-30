/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import SEO from './SEO'
import { PostList } from './PostList'
import { getTwitterPath, getTwitterSearchPath } from '../utils'

const renderers = {
	paragraph: ({ children }) => <p dir='auto'>{children}</p>,
	heading: ({ children, level }) => {
		const Heading = `h${level}`
		return <Heading dir='auto'>{children}</Heading>
	},
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

const textLanguageMapping = {
	translation: {
		en: 'بالعربية',
		ar: 'English version'
	},
	tweet: {
		ar: 'غرد هذه المقالة',
		en: 'Tweet this article'
	},
	discuss: {
		ar: 'ناقش هذه المقالة على تويتر',
		en: 'Discuss this article on Twitter'
	}
}

function ArticleHeaderLink({ href, title, src }) {
	return (
		<a href={href} title={title} className='bg-transparent mx-2'>
			<img alt='' role='presentation' src={src} className='h-8' />
		</a>
	)
}

export default function Article({ html, frontmatter, path, lang, related }) {
	const { date, title, translation, cover } = frontmatter

	const articleHeaderLinksMarkup = (
		<p dir={lang === 'ar' ? 'ltr' : 'rtl'} className='flex'>
			{translation ? (
				<ArticleHeaderLink
					href={translation}
					title={textLanguageMapping.translation[lang]}
					src='/language-svgrepo-com.svg'
				/>
			) : null}
			<ArticleHeaderLink
				href={getTwitterPath(title, path)}
				title={textLanguageMapping.tweet[lang]}
				src='/twitter-tweet.svg'
			/>
			<ArticleHeaderLink
				href={getTwitterSearchPath(path)}
				title={textLanguageMapping.discuss[lang]}
				src='/twitter-reply.svg'
			/>
		</p>
	)

	return (
		<div className='mx-auto mb-20'>
			<SEO {...frontmatter} path={path} />
			<div dir='auto' data-lang={lang} className='w-full lg:w-4/6 mx-auto'>
				<div className='w-full'>
					<div className='flex justify-between w-full'>
						<p>{date}</p>
						{articleHeaderLinksMarkup}
					</div>
					<h1 className='mt-4 mb-4'>{title}</h1>
				</div>
				<img
					src={cover.path}
					title={`Photo by ${cover.credit}`}
					alt={`By ${cover.credit}`}
					className='rounded-md h-auto lg:h-[600px] w-full object-cover mt-12'
					loading='lazy'
				/>
			</div>
			<article
				dir='auto'
				data-lang={lang}
				className='mt-14 text-content mx-auto'
			>
				<ReactMarkdown renderers={renderers} allowDangerousHtml>
					{html}
				</ReactMarkdown>
			</article>
			<hr className='mt-10 lg:mt-20 w-3/5 mx-auto' />
			<div className='mx-auto mt-10 lg:mt-20 text-content'>
				<h3>Written by Nabil Tharwat</h3>
				<p>
					Nabil Tharwat is a software engineer and mentor who's super in love
					with all things accessibility and performance. He's host of The Weekly
					Noob podcast and his content has reached thousands of people around
					the world.
				</p>
				<p className='mt-4'>
					<a href='/about'>Learn more about Nabil.</a>
				</p>
			</div>
			<div className='mx-auto mt-20 lg:mt-40'>
				<h3>If you found this article helpful, you will love these as well.</h3>
				<PostList posts={related} lang={lang} />
			</div>
		</div>
	)
}
