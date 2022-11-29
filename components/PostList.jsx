/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Link from 'next/link'

import { formatDate } from '../utils'

export const Post = ({ path, frontmatter, lang }) => {
	const { date, path: externalPath, cover, title } = frontmatter

	const dir = lang === 'ar' ? 'rtl' : 'ltr'

	return (
		<li className='list-none' dir={dir}>
			<Link href={externalPath || `/${path}`}>
				<a className='group hover:no-underline bg-transparent block w-full lg:w-min'>
					<img
						src={cover.thumb}
						alt={title}
						className='transition-all rounded-md outline outline-0 outline-red-500 outline-offset-0 group-hover:outline-2 group-hover:outline-offset-4 w-full h-[580px] lg:h-[580px] lg:w-[440px] lg:min-w-[440px] object-cover m-0'
						loading='lazy'
					/>
					<span className='block text-lg mt-4'>{formatDate(date, lang)}</span>

					<h2 className='mt-2 mx-auto text-3xl inline mt-4 bg-gradient-to-r from-link to-link bg-[length:0px_10px] bg-left-bottom rtl:bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
						{title}
					</h2>
				</a>
			</Link>
		</li>
	)
}

export const PostList = ({ posts, lang }) => (
	<ul
		className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${
			lang === 'ar' ? 'dir-rtl' : ''
		}`}
		data-lang={lang}
	>
		{posts.map(post => (
			<React.Fragment key={post.path}>
				<Post {...post} key={post.frontmatter.path} lang={lang} />
			</React.Fragment>
		))}
	</ul>
)
