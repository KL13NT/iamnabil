import React, {Fragment} from "react"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from './post.module.css'
import './post.css'


export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeTheme: '', fontSize: null, originalFontSize: null}
  }

  frontmatterToEnglish = (frontmatter)=>{
    console.log(frontmatter.author) 
    //ISSUE: FRONTMATTER PRESERVES CHANGE, SO `BY AUTHOR` BECOMES `BY BY AUTHOR`. USE `REPLACE` AS A QUICK FIX`
    frontmatter.author = `by ${frontmatter.author}`
    frontmatter.length = `${Math.ceil(parseInt(frontmatter.length)/350)} min read`
    this.setState({frontmatter})
  }

  frontmatterToArabic = (frontmatter)=>{
    frontmatter.date = this.convertEnglishDate(frontmatter.date)
    frontmatter.author = `كتبه: ${frontmatter.author} في`
    frontmatter.length = `${Math.ceil(parseInt(frontmatter.length)/350)} دقائق من القراءة`
    this.setState({frontmatter})
  }
  
  convertEnglishDate= (date)=>{
    let arabicNumbers = '۰١٢٣٤٥٦٧٨٩'
    let englishMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let arabicMonths = "يناير فبراير مارس ابريل مايو يونيو يوليو اغسطس سبتمبر اكتوبر نوفمبر ديسمبر".split(' ')
    let splitDate = date.split(' ')
    let arabicMonthFromEnglish = arabicMonths[englishMonths.indexOf(splitDate[0])]
    
    let replaced = splitDate.slice(1).toString().replace(/[0-9]/g, (w)=>{
      return arabicNumbers[+w] //converts to integer
    }).replace(',', '').split(',')
    
    return `${replaced[0]} ${arabicMonthFromEnglish}, ${replaced[1]}`
  }
  
  switchNightMode = (e)=>{
    let dataTheme = e.currentTarget.dataset.theme
    if(this.state.activeTheme == dataTheme){
      this.setState({activeTheme: null})
      e.currentTarget.classList.remove('button-active')
      if(dataTheme === 'nightmode--pitchblack') this.setState({isBlackTheme: null})
      else this.setState({isDarkTheme: null})
    }
    else{
      this.setState({activeTheme: dataTheme})
      if(dataTheme === 'nightmode--pitchblack'){
        this.setState({activeTheme: dataTheme, isBlackTheme: 'button-active', isDarkTheme: null})
      }
      else if(dataTheme === 'nightmode--dark'){
        this.setState({activeTheme: dataTheme, isBlackTheme: null, isDarkTheme: 'button-active'})
      }
    }
  }
  
  manageFontSize = (e)=>{
    e.stopPropagation()
    console.log(e.currentTarget, e.target)
    let html = document.querySelector('html')

    var fontSize = html.dataset.fontsize

    if(e.currentTarget.dataset.fontfunction === 'increase'){
      ++fontSize
      console.log(fontSize)
      html.dataset.fontsize = fontSize
      html.style.fontSize = `${fontSize}px`
    }
    else if(e.currentTarget.dataset.fontfunction === 'decrease'){
      --fontSize
      html.dataset.fontsize = fontSize
      html.style.fontSize = `${fontSize}px`
    }
    else if(e.currentTarget.dataset.fontfunction === 'reset'){
      html.style.fontSize = `${html.dataset.originalfontsize}px`
      html.dataset.fontsize = html.dataset.originalfontsize
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
      html: this.props.data.markdownRemark.html,
      languageClass: this.props.data.markdownRemark.frontmatter.lang === 'ar'? 'rightToLeft': null,
      frontmatter: this.props.data.markdownRemark.frontmatter
    })
  }

  componentDidMount(){
    let html = document.querySelector('html')
    let fontSize = parseInt(window.getComputedStyle(html, null).getPropertyValue('font-size'))
    html.dataset.fontsize = fontSize
    html.dataset.originalfontsize = fontSize

    if(this.languageClass === 'rightToLeft') this.frontmatterToArabic(this.state.frontmatter)
    else this.frontmatterToEnglish (this.state.frontmatter)
  }
  
  render(){
    return (  
      <>
      <Layout>
        <SEO title={this.state.frontmatter.title} description={this.state.frontmatter.description} lang="en-gb"/>
        <Helmet>
          <title>{this.state.frontmatter.title}</title>
          <meta property="og:title" content={this.state.frontmatter.title} />
          <meta property="og:description" content={this.state.frontmatter.description}/>
          <meta property="og:url" content={`http://iamnabil.me/blog${this.state.frontmatter.path}`} />
          <meta property="og:image:url" content={`http://iamnabil.me/blog/${this.state.frontmatter.ogImageName}.${this.state.frontmatter.ogImageExtension}`}/>
          <meta property="og:site_name" content="Nabil Tharwat - Blog"/>
        </Helmet>
        <div className={this.state.activeTheme}>
          <article onClick={this.handleArticleClick}>
            <div className={`styleControl ${styles.styleControl}`} data-content='styleControl'>
              <div>
                <button onClick={this.manageFontSize} data-fontfunction="decrease">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 42 42" style={{'enable-background':'new 0 0 42 42'}}>
    <path d="M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21
      S39.776,16,37.059,16z"/>
    </svg>

                </button>
                <button onClick={this.manageFontSize} data-fontfunction="reset">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="475.082px" height="475.082px" viewBox="0 0 475.082 475.082" style={{'enable-background':'new 0 0 475.082 475.082'}}>
    <g>
      <path d="M473.371,433.11c-10.657-3.997-20.458-6.563-29.407-7.706c-8.945-0.767-15.516-2.95-19.701-6.567
        c-2.475-1.529-5.808-6.95-9.996-16.279c-7.806-15.604-13.989-29.786-18.555-42.537c-7.427-20.181-13.617-35.789-18.565-46.829
        c-10.845-25.311-19.982-47.678-27.401-67.092c-4.001-10.466-15.797-38.731-35.405-84.796L255.813,24.265l-3.142-5.996h-15.129
        h-21.414l-79.94,206.704L68.523,400.847c-5.33,9.896-9.9,16.372-13.706,19.417c-3.996,2.848-14.466,5.805-31.405,8.843
        c-11.042,2.102-18.654,3.812-22.841,5.141L0,456.812h5.996c16.37,0,32.264-1.334,47.679-3.997l13.706-2.279
        c53.868,3.806,87.082,5.708,99.642,5.708c0.381-1.902,0.571-4.476,0.571-7.706c0-5.715-0.094-11.231-0.287-16.563
        c-3.996-0.568-7.851-1.143-11.561-1.711c-3.711-0.575-6.567-1.047-8.565-1.431c-1.997-0.373-3.284-0.568-3.855-0.568
        c-14.657-2.094-24.46-5.14-29.407-9.134c-3.236-2.282-4.854-6.375-4.854-12.278c0-3.806,2.19-11.796,6.567-23.982
        c14.277-39.776,24.172-65.856,29.692-78.224l128.483,0.568l26.269,65.096l13.411,32.541c1.144,3.241,1.711,6.283,1.711,9.138
        s-1.14,5.428-3.426,7.707c-2.285,1.905-8.753,4.093-19.417,6.563l-37.404,7.994c-0.763,6.283-1.136,13.702-1.136,22.271
        l16.56-0.575l57.103-3.138c10.656-0.38,23.51-0.575,38.547-0.575c18.264,0,36.251,0.763,53.957,2.282
        c21.313,1.523,39.588,2.283,54.819,2.283c0.192-2.283,0.281-4.754,0.281-7.423C475.082,445.957,474.513,440.537,473.371,433.11z
        M251.245,270.941c-2.666,0-7.662-0.052-14.989-0.144c-7.327-0.089-18.649-0.233-33.973-0.425
        c-15.321-0.195-29.93-0.383-43.824-0.574l48.535-128.477c7.424,15.037,16.178,35.117,26.264,60.242
        c11.425,27.79,20.179,50.727,26.273,68.809L251.245,270.941z"/>
    </g>
    </svg>

    </button>
                <button onClick={this.manageFontSize} data-fontfunction="increase">
                
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 42 42" style={{'enable-background':'new 0 0 42 42'}}>
              <path d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059
                C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"/>
              </svg>

              </button>
              </div>
              <hr/>
              <div>
                <button className={`night-mode-check night-mode-check--black ${this.state.isBlackTheme}`}  data-theme='nightmode--pitchblack' onClick={this.switchNightMode}/>
                <button className={`night-mode-check night-mode-check--dark ${this.state.isDarkTheme}`}  data-theme='nightmode--dark' onClick={this.switchNightMode}/>
              </div>
          </div>
            <Img fluid={this.state.frontmatter.image.childImageSharp.fluid}/>
            <h1 className={`${styles.articleTitle} ${styles[this.state.languageClass]}`}>{this.state.frontmatter.title}</h1>
            <h5 className={`${styles.articleDescription} ${styles[this.state.languageClass]}`}>
              {
                this.state.languageClass==='rightToLeft'? `${this.state.frontmatter.author} ${this.state.frontmatter.date}`: `${this.state.frontmatter.date} ${this.state.frontmatter.author}`
              }
              <br/>
              <p className={`${styles.articleTime}`}>
                {this.state.frontmatter.length}
              </p>
            </h5>
            <hr className={styles.frontmatterBreak}/>
            <section
              className={`blog-post-content ${styles[this.state.languageClass]}`}
              dangerouslySetInnerHTML={{ __html: this.state.html }}
            />
        </article>
      </div>
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