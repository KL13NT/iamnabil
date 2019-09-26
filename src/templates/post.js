import React, { Fragment, useState } from "react"
import {Helmet} from "react-helmet"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"

import styles from './post.module.css'


export default class Post extends React.Component {
  render(){
    const { frontmatter, html } = this.props.data.markdownRemark
    const { title, image, length, lang } = frontmatter
    const languageClass = lang === 'ar'? 'u-rightToLeft': null
    
    return (  
      <>
      <Navbar home={true} about={true}/>
      <Layout>
        <SEO {...frontmatter}/>
        <article className="o-article-body">
          <div className="o-article-header">
            <Img fluid={image.childImageSharp.fluid}/>
            <h1 className={languageClass}> {title} </h1>
            <p> {Math.ceil(parseInt(length)/150)} min read </p>
          </div>
          <hr className={`c-hr-break ${languageClass}`}/>
          <section dangerouslySetInnerHTML={{ __html: html }} className={languageClass}/>
      </article>
    </Layout>
    </>
    )
  }
}


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { 
      path: { eq: $path }
    }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        author
        length
        lang
        ogImageName
        ogImageExtension
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`