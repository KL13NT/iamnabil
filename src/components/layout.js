import React from 'react'
import PropTypes from 'prop-types'
import PageTransition from 'gatsby-plugin-page-transitions'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
	<StaticQuery
		query={ graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    ` }
		render={ () => (
			<PageTransition>
				<div className='o-layout'>
					{ children }
				</div>
			</PageTransition>
		) }/>
)

import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
// import Transition from '../components/transition'

import './layout.css'

const TemplateWrapper = ({ children, location }) => (
	<div>
		<Helmet
			meta={ [
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' }
			] }
			title='Gatsby Default Starter'/>
		<Header />
		<div
			style={ {
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0
			} }>
			<Transition location={ location }>{ children }</Transition>
		</div>
	</div>
)


export default Layout
