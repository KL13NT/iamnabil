import React from 'react'

import { Link } from 'gatsby'


export const PostList = ({ edges }) => (
	<ul className='c-postList'>
		{
			edges.map(({ node: { frontmatter, fields } }) => {
				const languageClass = frontmatter.lang === 'ar' ? 'u-rightToLeft' : null
				const time = Math.ceil(fields.readingTime.minutes)

				return (
					<li key={ frontmatter.title }>
						<Link key={ frontmatter.title } className={ 'u-unstyledLink' } to={ frontmatter.path }>
							<h1 className={ languageClass }>{ frontmatter.title }</h1>
						</Link>
						<p className={ languageClass }>{ frontmatter.description }</p>
						<span> Posted { frontmatter.date } . { time } min read </span>
						{
							frontmatter.tags ?
								(
									<div className='o-tagsContainer'>
										{
											frontmatter.tags.map(tag => (
												<Link key={ tag + Math.random() } className='u-unstyledLink' to={ `tags/${tag}` }>{ tag }</Link>
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
