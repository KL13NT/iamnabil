import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import ArticleBody from '../components/Article'

import './post.css'

import PageTransition from 'gatsby-plugin-page-transitions'

export default class Post extends React.Component {
	render (){
		const { frontmatter, html, fields } = this.props.data.markdownRemark
		const { lang } = frontmatter
		const languageClass = lang === 'ar'? 'u-rightToLeft': null

		return (
			<PageTransition>
				<Navbar about={ true } home={ true }/>
				<Layout>
					<SEO { ...frontmatter }/>
					<ArticleBody fields={ fields } frontmatter={ frontmatter } html={ html } languageClass={ languageClass }/>
				</Layout>
			</PageTransition>
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
				imageCaption
				tags
				nofooter
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
					words
					minutes
        }
      }
    }
  }
`