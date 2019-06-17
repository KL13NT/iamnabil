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
    <SEO title="Valarium - Blog" description="Welcome to our blog! We post technically helpful stuff!" lang="en-gb"/>
    <header>
      <h1>Valarium</h1>
      <p>Education should be a right, not a privilege.</p>
      <p>Find some lovely articles on various topics below!</p>
    </header>
    <ul>
      {edges.map( node =>
        <>
        {console.log(node)}
          <li>
            <Link to={node.node.frontmatter.path}><h2>{node.node.frontmatter.title}</h2></Link>
            <p>{node.node.frontmatter.description}</p>
            
          </li>

        </>
      )}
    </ul>
  </Layout>
  )
}