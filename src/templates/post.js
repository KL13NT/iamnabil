import React, { Fragment, useState } from "react"
import {Helmet} from "react-helmet"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"

import styles from './post.module.css'


export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeTheme: '', fontSize: null, originalFontSize: null}
  }

  
  switchNightMode = (e)=>{
    let dataTheme = e.currentTarget.dataset.theme
    if(this.state.activeTheme == dataTheme){
      this.setState({activeTheme: null})
      e.currentTarget.classList.remove('button-active')
      document.querySelector('body').style.background = '#f3f7f9'
      if(dataTheme === 'nightmode--pitchblack') this.setState({isBlackTheme: null})
      else this.setState({isDarkTheme: null})
    }
    else{
      this.setState({activeTheme: dataTheme})
      if(dataTheme === 'nightmode--pitchblack'){
        document.querySelector('body').style.background = 'black'
        this.setState({activeTheme: dataTheme, isBlackTheme: 'button-active', isDarkTheme: null})
      }
      else if(dataTheme === 'nightmode--dark'){
        document.querySelector('body').style.background = 'rgb(20, 20, 20)'
        this.setState({activeTheme: dataTheme, isBlackTheme: null, isDarkTheme: 'button-active'})
      }
    }
  }

  handleArticleClick = (e)=>{
    if(window.innerWidth < 992){
      if(this.state.activeTheme != null){
        this.setState({activeTheme: null})
      }
      else{
        this.setState({activeTheme: 'nightmode--pitchblack'})
      }
    }
  }
  
  componentWillMount(){
    this.setState({
      markdownRemark: this.props.data.markdownRemark,
      html: this.props.data.markdownRemark.html
    })
  }

  render(){
    const { frontmatter } = this.props.data.markdownRemark
    const { activeTheme } = this.state
    const { title, description, path, ogImageName, ogImageExtension, length, image } = frontmatter
    const languageClass = frontmatter.lang === 'ar'? 'u-rightToLeft': null
    return (  
      <>
      <Navbar home={true} about={true}/>
      <Layout>
        <SEO title={title} description={description} lang="en-gb"/>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description}/>
          <meta property="og:url" content={`https://kl13nt.github.io/blog${path}`} />
          <meta property="og:image:url" content={`https://kl13nt.github.io/blog/${ogImageName}.${ogImageExtension}`}/>
          <meta property="og:image" content={`https://kl13nt.github.io/blog/${ogImageName}.${ogImageExtension}`}/>
          <meta property="og:site_name" content="Nabil Tharwat - Blog"/>
        </Helmet>
          <article className="o-article-body" onClick={this.handleArticleClick}>
            <div className="o-article-header">
              <Img fluid={image.childImageSharp.fluid}/>
              <h1 className={languageClass}> {title} </h1>
              <p> {Math.ceil(parseInt(length)/150)} min read </p>
            </div>
            <hr className={styles.frontmatterBreak + ' ' + languageClass}/>
            <section dangerouslySetInnerHTML={{ __html: this.state.html }} className={languageClass}/>
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