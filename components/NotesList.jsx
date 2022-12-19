/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Link from 'next/link'
import { formatDate } from '../utils'

export const NotesList = ({ posts }) => (
	<ul
		className={
			'p-0 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full max-w-7xl'
		}
	>
		{posts.map(post => (
			<li className='list-none max-w-md' key={post.path} dir='ltr'>
				<Link href={`/${post.path}`} className='block w-full'>
					<a className='group hover:no-underline bg-transparent block w-full'>
						<span className='block text-lg mt-4'>
							{formatDate(post.frontmatter.date, 'en')}
						</span>

						<h2 className='mt-2 mx-auto text-3xl inline mt-4 bg-gradient-to-r from-link to-link bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
							{post.frontmatter.title}
						</h2>

						<p>{post.frontmatter.description}</p>
					</a>
				</Link>
			</li>
		))}
	</ul>
)
