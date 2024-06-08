/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import SEO from './SEO'
import { PostList } from './PostList'
import {
	getArticleGithubPath,
	getTwitterPath,
	getTwitterSearchPath
} from '../utils'
import Newsletter from './Newsletter'

const renderers = {
	paragraph: ({ children }) => <p dir='auto'>{children}</p>,
	heading: ({ children, level }) => {
		const Heading = `h${level}`
		return <Heading dir='auto'>{children}</Heading>
	},
	blockquote: ({ children }) => <blockquote dir='auto'>{children}</blockquote>,
	code: ({ language, value }) => (
		<SyntaxHighlighter
			style={coldarkDark}
			language={language}
			showLineNumbers
			wrapLongLines
			customStyle={{
				padding: '0',
				borderRadius: '16px'
			}}
		>
			{value}
		</SyntaxHighlighter>
	),
	pre: ({ language, value }) => (
		<SyntaxHighlighter
			style={coldarkDark}
			language={language}
			showLineNumbers
			wrapLongLines
			customStyle={{
				padding: '0',
				borderRadius: '16px',
				fontSize: '18px'
			}}
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
		en: 'Tweet this'
	},
	discuss: {
		ar: 'ناقش هذه المقالة على تويتر',
		en: 'Discuss on X'
	},
	github: {
		ar: 'عدل هذه المقالة على جيتهب',
		en: 'Edit on GitHub'
	}
}

function ArticleHeaderLink({ href, title, src, text }) {
	return (
		<a
			href={href}
			title={title}
			className='bg-transparent mx-2 flex items-center w-full justify-between'
		>
			{text ? <span className='block mie-2'>{text}</span> : null}
			<img alt='' role='presentation' src={src} className='h-8' />
		</a>
	)
}

export default function Article({ html, frontmatter, path, lang, related }) {
	const { date, title, translation, cover } = frontmatter

	const translationMarkup = translation ? (
		<ArticleHeaderLink
			href={translation}
			title={textLanguageMapping.translation[lang]}
			src='/language-svgrepo-com.svg'
		/>
	) : null

	return (
		<div className='mx-auto mb-20'>
			<SEO {...frontmatter} path={path} />
			<div
				dir='auto'
				data-lang={lang}
				className='w-full md:w-5/6 xl:w-4/6 mx-auto'
			>
				<div className='w-full'>
					<div className='flex justify-between w-full'>
						<p>{date}</p>
						<p dir={lang === 'ar' ? 'ltr' : 'rtl'} className='flex'>
							<ArticleHeaderLink
								href={getArticleGithubPath(path)}
								title={textLanguageMapping.github[lang]}
								src='/github.svg'
							/>
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
							{translationMarkup}
						</p>
					</div>
					<h1 className='mt-4 mb-4'>{title}</h1>
				</div>
				{cover ? (
					<img
						src={cover.path}
						title={`Photo by ${cover.credit}`}
						alt={`By ${cover.credit}`}
						className='rounded-md h-auto lg:h-[600px] w-full object-cover mt-12'
						loading='lazy'
					/>
				) : null}
			</div>
			<article
				dir='auto'
				data-lang={lang}
				className='mt-14 w-full md:10/12 lg:max-w-[820px] mx-auto'
			>
				<ReactMarkdown renderers={renderers} allowDangerousHtml>
					{html}
				</ReactMarkdown>

				<div className='mx-auto mt-10 lg:mt-20 flex flex-col sm:flex-row justify-between w-full'>
					<div className='flex flex-col sm:flex-row w-full'>
						<ArticleHeaderLink
							text={textLanguageMapping.tweet[lang]}
							href={getTwitterPath(title, path)}
							title={textLanguageMapping.tweet[lang]}
							src='/twitter-tweet.svg'
						/>
						<ArticleHeaderLink
							text={textLanguageMapping.discuss[lang]}
							href={getTwitterSearchPath(path)}
							title={textLanguageMapping.discuss[lang]}
							src='/twitter-reply.svg'
						/>
					</div>
					<ArticleHeaderLink
						text={textLanguageMapping.github[lang]}
						href={getArticleGithubPath(path)}
						title={textLanguageMapping.github[lang]}
						src='/github.svg'
					/>
				</div>
				<hr className='w-full mt-5 mx-auto' />
				<div className='mx-auto mt-10 lg:mt-20'>
					<h3>Written by Nabil Tharwat</h3>
					<p>
						Nabil Tharwat is a software engineer and mentor who's super in love
						with all things accessibility and performance. He's host of The
						Weekly Noob podcast and his content has reached thousands of people
						around the world.
					</p>
					<p className='mt-4'>
						<a href='/about'>Learn more about Nabil.</a>
					</p>
					<Newsletter />
				</div>
			</article>
			<div className='mx-auto mt-20'>
				<h3>If you found this article helpful, you will love these as well.</h3>
				<div className='mt-6'>
					<PostList posts={related} lang={lang} />
				</div>
			</div>
		</div>
	)
}
