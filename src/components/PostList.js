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
						<Link className={ languageClass + ' ' + 'u-unstyledLink' } to={ frontmatter.path }>{ frontmatter.title }</Link>
						<p className={ languageClass }>{ frontmatter.description }</p>
						<h5> Posted { frontmatter.date } . { time } min read </h5>
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
