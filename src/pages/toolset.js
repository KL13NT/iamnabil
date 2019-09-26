import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import { Social } from '../components/Social'

import '../styling/main.styl'
import styles from './toolset.module.styl'
import Layout from '../components/layout'


const Toolset = props => {
  return (
    <>
      <Navbar home={true} about={true}/>
      <Layout>
        <Helmet>
          <title>Nabil Tharwat | Front-End Engineer, Blogger, Mentor</title>
          <meta
            property="og:title"
            content="Nabil Tharwat | Front-End Engineer, Blogger, Mentor"
          />
          <meta
            property="og:description"
            content="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            property="og:title"
            content="Nabil Tharwat | Front-End Engineer, Blogger, Mentor"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://iamnabil.me/" />
          <meta property="og:image" content="meta.png" />
          <meta
            property="og:description"
            content="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
          />
          <meta
            name="description"
            content="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:300,300i,400&display=swap"
            rel="preload"
            as="font"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="preload"
            as="font"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <div className="o-header">
          <h1>My Toolset</h1>
          <h3>
          This is a list of all the tools I'm actively using or have used before
          </h3>
          <Social />
        </div>
        <div className="o-body">
          <hr className="c-hr-break" />
          <div className={`c-section ${styles.toolsetTable}`}>
            <div>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>ES8+</p>
              <p>jQuery</p>
              <p>Underscore</p>
              <p>Lodash</p>
              <p>Semantic UI</p>
              <p>Bootstrap</p>
              <p>Skeleton</p>
              <p>Foundation</p>
              <p>Materialize</p>
              <p>Normalize</p>
              <p>Pug</p>
              <p>Slim</p>
              <p>Stylus</p>
              <p>Scss</p>
              <p>Sass</p>
              <p>PostCSS</p>
              <p>Handlebars</p>
            </div>
            <div>
              <p>React</p>
              <p>Redux</p>
              <p>Next</p>
              <p>Apollo</p>
              <p>Glamorous/Emotion</p>
              <p>Styled Components</p>
              <p>Webpack</p>
              <p>Babel</p>
              <p>GatsbyJS</p>
              <p>NodeJS</p>
              <p>Express</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>SocketIO</p>
              <p>Firestore</p>
              <p>GraphQL</p>
              <p>Heroku</p>
              <p>Netlify</p>
              <p>Jest</p>
              <p>Enzyme</p>
              <p>Cypress</p>
              <p>Git/GitHub</p>
              <p>TravisCI</p>
            </div>
            <div>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
              <p>Adobe XD</p>
              <p>Figma</p>
              <p>Zeplin</p>
              <p>ESLint</p>
              <p>Prettier</p>
              <p>CSSLint</p>
              <p>CSSModules</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <hr className="c-hr-break" />
        </div>
      </Layout>
    </>
  )
}

export default Toolset
