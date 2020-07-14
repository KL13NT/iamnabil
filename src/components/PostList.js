import React from 'react'

import { Link } from 'gatsby'


export const PostList = ({ edges }) => (
	<ul className='c-postList'>
		{
			edges.map(({ node: { frontmatter, fields } }) => {
				const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
				const languageClass = frontmatter.lang === 'ar' ? 'u-rightToLeft' : null
				const time = Math.ceil(fields.readingTime.minutes)
				const date = new Date(frontmatter.date).toLocaleDateString('en-US', options)
				return (
					<li key={ frontmatter.title }>
						<Link key={ frontmatter.title } className={ 'u-unstyledLink' } to={ frontmatter.path }>
							<h1 className={ languageClass }>{ frontmatter.title }</h1>
						</Link>
						<p className={ languageClass }>{ frontmatter.introduction || frontmatter.description }</p>
						<span> Posted { date } . { time } min read </span>
						{
							frontmatter.tags ?
								(
									<div className='o-tagsContainer'>
										{
											frontmatter.tags.map(tag => (
												<Link key={ tag + Math.random() } className='u-unstyledLink' to={ `/tags/${tag}` }>{ tag }</Link>
											))
										}
									</div>
								)
								: null
						}
					</li>
				)
			}) }
	</ul>
)
