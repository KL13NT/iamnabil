import React from 'react'

import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'
import Social from '../components/Social'

import styles from './toolset.module.sass'


const Toolset = () => {
  return (
    <>
      <SEO title="Nabil Tharwat | Front-End Engineer, Blogger, Mentor" description="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible." path="/toolset"/>
      <Navbar home={true} about={true}/>
      <Layout>
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
