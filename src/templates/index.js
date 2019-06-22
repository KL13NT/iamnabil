import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './index.css'

export default ({ pageContext: {edges} }) => {
  // console.log(edges)
  // console.log(node)
  return (
  <Layout>
    <SEO title="Nabil Tharwat - Blog" description="Welcome to my blog! I post technically helpful stuff!" lang="en-gb"/>
    <header>
      <p>FRONT-END DEVELOPER</p>
      <p>PERFORMANCE ADDICT</p>
      <p>PERFORMANCE ADDICT</p>
      <h1>NABIL THARWAT</h1>
      <p>FRONT-END DEVELOPER</p>
    </header>
    <ul>
      {edges.map( node =>{
        let languageClass = node.node.frontmatter.lang === 'ar'? 'rightToLeft': null
        return(
          <>
            <li className={languageClass}>
              <Link to={node.node.frontmatter.path}>{node.node.frontmatter.title}</Link>
              <p className={languageClass}>{node.node.frontmatter.description}</p>
            </li>
          </>
        )}
      )}
    </ul>
  </Layout>
  )
}
