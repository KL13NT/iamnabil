import React from 'react'
import Link from 'next/link'

import { formatDate } from '../utils'

export const Post = ({ slug, frontmatter }) => {
	const { lang, title, date, description, category } = frontmatter

	const dir = lang === 'ar' ? 'dir-rtl' : null

	return (
		<li className={`list-none mb-12 text-center ${dir}`}>
			<span className='block mb-4'>
				{formatDate(date, lang)} // {category}
			</span>
			<Link href={`/blog/${slug}`}>
				<a className='mx-auto bg-transparent'>
					<h2 className='mt-2 mx-auto text-2xl lg:text-4xl inline'>{title}</h2>
				</a>
			</Link>
			<p className='mt-4 text-xl'>{description}</p>
		</li>
	)
}
