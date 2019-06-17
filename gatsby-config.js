const path = require('path')

module.exports = {
  pathPrefix: "/Blog",
  siteMetadata: {
    title: `Nabil's Blog`,
    description: `Kick off your next, great project with a curated list of helpful blog posts.`,
    author: `@Nabil_Tharwat16`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nabil's Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `yellow`,
        icon: 'src/static/images/titleImage.png', // This path is relative to the root of the site.
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `markdown-pages`),
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
