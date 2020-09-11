import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './Layout.module.sass'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={() => <div className='o-layout'>{children}</div>}
	/>
)

export default Layout
