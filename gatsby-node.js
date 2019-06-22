/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs')
const path = require('path')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // const allPosts = JSON.parse(fs.readFileSync('posts.json', 'utf8'))
  // console.log(allPosts)
  // Create a page that lists all Pokémon.
  

  // Create a page for each Pokémon.
  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              date
              title
              description
              author
              length
              lang
              ogImageName
              ogImageExtension
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPage({
      path: `/`,
      component: require.resolve("./src/templates/index.js"),
      context: result.data.allMarkdownRemark
    })
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
      
    })
  })
}