import React, { Fragment, useState } from "react"
import {Helmet} from "react-helmet"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import ArticleBody from '../components/Article'

import styles from './post.module.css'


export default class Post extends React.Component {
  render(){
    const { frontmatter, html, fields } = this.props.data.markdownRemark
    const { title, image, length, lang } = frontmatter
    const languageClass = lang === 'ar'? 'u-rightToLeft': null
    
    return (  
      <>
      <Navbar home={true} about={true}/>
      <Layout>
        <SEO {...frontmatter}/>
        <ArticleBody frontmatter={frontmatter} fields={fields} languageClass={languageClass} html={html}/>
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
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`