import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'


const ArticleHeader = ({ image, languageClass, title, html, length })=>
  <>
    <div className="o-article-header">
      <Img fluid={image.childImageSharp.fluid}/>
      <h1 className={languageClass}> {title} </h1>
      <p> {Math.ceil(parseInt(length)/150)} min read </p>
    </div>
    <hr className={`c-hr-break ${languageClass}`}/>
    <section dangerouslySetInnerHTML={{ __html: html }} className={languageClass}/>
  </>

const ArticleBody = ({ frontmatter, languageClass, html })=>
  <article className="o-article-body">
    <ArticleHeader {...frontmatter} languageClass={languageClass} html={html}/>
  </article>


ArticleHeader.propTypes = {
  image: PropTypes.object.isRequired,
  languageClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
}

ArticleBody.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  languageClass: PropTypes.string.isRequired
}

export default ArticleBody