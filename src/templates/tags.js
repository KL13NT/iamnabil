import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

import { PostList } from "../components/PostList";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;
  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <PostList edges={edges}/>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
