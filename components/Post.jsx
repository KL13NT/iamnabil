import React from 'react'

import Link from 'next/link'

export const Post = ({ frontmatter }) => {
	const { lang, title, path, date, description } = frontmatter
	console.log(date, typeof date)

	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	const languageClass = lang === 'ar' ? 'rtl' : null
	const localeDate = new Date(date).toLocaleDateString(
		lang === 'ar' ? 'ar-EG' : 'en-US',
		options
	)

	return (
		<li className={languageClass}>
			<Link href={`/blog/${path}`}>
				<a>
					<h4>{title}</h4>
				</a>
			</Link>
			<p>{description}</p>
			<span>{localeDate}</span>
		</li>
	)
}
