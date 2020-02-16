import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { PostBottom } from '../components/PostBottom'

const ArticleHeader = ({ image, languageClass, title, date, path, tags }) =>
	<>
		<div className="o-article-header">
			<h1 className={languageClass}> {title} </h1>
			<div>
				<p>{ date }</p>
				<a href={`https://twitter.com/intent/tweet?text=${title}&amp;url=https://iamnabil.me${path}&amp;hashtags=${tags}`}>Tweet This</a>
			</div>
			<Img fluid={image.childImageSharp.fluid}/>
		</div>
	</>

const ArticleBody = ({ frontmatter, languageClass, html, fields }) =>
	<article className="o-article-body">
		<ArticleHeader {...frontmatter} {...fields} languageClass={languageClass}/>
		<section dangerouslySetInnerHTML={{ __html: html }} className={languageClass}/>
		{
			frontmatter.nofooter === 'true'? null: <PostBottom lang={ frontmatter.lang } languageClass={ languageClass }/>
		}
	</article>


ArticleHeader.propTypes = {
	image: PropTypes.object.isRequired,
	languageClass: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	length: PropTypes.number.isRequired
}

ArticleBody.propTypes = {
	frontmatter: PropTypes.object.isRequired,
	languageClass: PropTypes.string.isRequired
}

export default ArticleBody