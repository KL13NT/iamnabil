/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Link from 'next/link'

import { formatDate } from '../utils'

const Translation = ({ translation }) => (
	<p dir='ltr'>
		<a href={translation} className='bg-transparent'>
			English translation available on
			<img
				src='/dev-badge.svg'
				alt='dev.to'
				className='inline-block w-8 ml-2'
			/>
		</a>
	</p>
)

export const Post = ({ path, frontmatter }) => {
	const { lang, title, date, description, category, translation } = frontmatter

	const dir = lang === 'ar' ? 'dir-rtl' : null

	return (
		<li className={`list-none mb-12 text-center ${dir}`}>
			<span className='block mb-4'>
				{formatDate(date, lang)} // {category}
			</span>

			<Link href={`/${path}`}>
				<a className='mx-auto bg-transparent'>
					<h2 className='mt-2 mx-auto text-2xl lg:text-4xl inline'>{title}</h2>
				</a>
			</Link>

			<p className='mt-4 text-xl'>{description}</p>

			{translation && <Translation {...frontmatter} />}
		</li>
	)
}
