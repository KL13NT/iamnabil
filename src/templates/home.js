import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { allPosts } }) => (  
  <ul style={{ width: 960, margin: "4rem auto" }}>
    {allPosts.map(post=>
      <>
        <li><Link to={`./post/${encodeURIComponent(post.title)}`}><h1>{post.title}</h1></Link></li>
        <p>{post.description}</p>
      </>
    )}
  </ul>
)

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