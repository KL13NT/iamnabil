import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'


const ArticleHeader = ({ image, languageClass, title, readingTime })=>
  <>
    <div className="o-article-header">
      <Img fluid={image.childImageSharp.fluid}/>
      <h1 className={languageClass}> {title} </h1>
      <p> {Math.floor(readingTime.minutes)} min read </p>
    </div>
    <hr className={`c-hr-break ${languageClass}`}/>
  </>

const ArticleBody = ({ frontmatter, languageClass, html, fields })=>
  <article className="o-article-body">
    <ArticleHeader {...frontmatter} {...fields} languageClass={languageClass}/>
    <section dangerouslySetInnerHTML={{ __html: html }} className={languageClass}/>
    <p>If you liked this article make sure to share it with your friends, and if you have any questions or want to see more like this make sure to follow me on Twitter <a href="Https://twitter.com/Nabil_Tharwat16">@Nabil_Tharwat16</a> or join in on the fun in our Discord server <a href="https://discord.gg/xrGAnTg">Valarium</a>.</p>
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