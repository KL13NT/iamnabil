import React, {Fragment} from "react"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from './post.module.css'

export default function Post ({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const languageClass = frontmatter.lang === 'ar'? 'rightToLeft': null
  
  console.log(frontmatter.ogImageName, frontmatter.ogImageExtension, frontmatter)

  let frontmatterToEnglish = (frontmatter)=>{
    frontmatter.author = `by ${frontmatter.author}`
    frontmatter.length = `${Math.floor(parseInt(frontmatter.length)/350)} min read`
  }

  let frontmatterToArabic = (frontmatter)=>{
    frontmatter.date = convertEnglishDate(frontmatter.date)
    frontmatter.author = `كتبه: ${frontmatter.author} في`
    frontmatter.length = `${Math.floor(parseInt(frontmatter.length)/350)} دقائق من القراءة`
  }
  
  let convertEnglishDate= (date)=>{
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

  if(languageClass==='rightToLeft') frontmatterToArabic(frontmatter)
  else frontmatterToEnglish (frontmatter)

  return (  
    <>
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} lang="en-gb"/>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description}/>
        <meta property="og:url" content={`http://iamnabil.me/blog${frontmatter.path}`} />
        <meta property="og:image:url" content={`http://iamnabil.me/blog/${frontmatter.ogImageName}.${frontmatter.ogImageExtension}`}/>
        <meta property="og:site_name" content="Nabil Tharwat - Blog"/>
      </Helmet>
      <article>
        <Img fluid={frontmatter.image.childImageSharp.fluid}/>
        <h1 className={`${styles.articleTitle} ${styles[languageClass]}`}>{frontmatter.title}</h1>
        <h5 className={`${styles.articleDescription} ${styles[languageClass]}`}>
          {
            languageClass==='rightToLeft'? `${frontmatter.author} ${frontmatter.date}`: `${frontmatter.date} ${frontmatter.author}`
          }
          <br/>
          <p className={`${styles.articleTime}`}>
            {frontmatter.length}
          </p>
        </h5>
        <hr className={styles.frontmatterBreak}/>
        <section
          className={`blog-post-content ${styles[languageClass]}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </article>
  </Layout>
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