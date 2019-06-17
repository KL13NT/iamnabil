import React, {Fragment} from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import './post.css'

export default function Post ({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter.length)
  return (  
    <>
      <div style={{ width: '700px', margin: "4rem auto" }}>
        <h1 className='article-title'>{frontmatter.title}</h1>
        <h5>{frontmatter.author}<br/><p>{frontmatter.date} - {Math.floor(parseInt(frontmatter.length)/350)} min read</p></h5>
        <Img fluid={frontmatter.image.childImageSharp.fluid}/>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </div>
  </>
)}

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