import React from 'react'
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
			<div className='o-layout'>
				{ children }
			</div>
		) }/>
)

export default Layout
