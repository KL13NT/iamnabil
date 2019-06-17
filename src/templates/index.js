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
      <h1>NABIL THARWAT</h1>
      <p>I really like JavaScript.</p>
      <p>Find some lovely blog posts about it and programming in general below!</p>
      <hr style={{width: '30%', margin: '3rem auto 5rem auto'}}/>
    </header>
    <ul>
      {edges.map( node =>
        <>
        {console.log(node)}
          <li><Link to={node.node.frontmatter.path}><h1>{node.node.frontmatter.title}</h1></Link></li>
          <p>{node.node.frontmatter.description}</p>
        </>
      )}
    </ul>
  </Layout>
  )
}
