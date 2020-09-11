import React from 'react'

import { Link } from 'gatsby'

export const Post = ({
	lang,
	title,
	path,
	date,
	introduction,
	description
}) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
	const languageClass = lang === 'ar' ? 'u-rightToLeft' : null
	const localeDate = new Date(date).toLocaleDateString(
		lang === 'ar' ? 'ar-EG' : 'en-US',
		options
	)

	return (
		<li className={`c-post ${languageClass}`}>
			<Link className={'u-unstyledLink'} to={path}>
				<h1 className={languageClass}>{title}</h1>
			</Link>
			<p className={languageClass}>{introduction || description}</p>
			<span>{localeDate}</span>
		</li>
	)
}
