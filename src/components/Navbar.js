import React from 'react'
import { Link } from 'gatsby'

import NightSwitch from  './NightSwitch'


const Navbar = () => {
	return(
		<nav className='o-navigation'>
			<div>
				<Link className='u-unstyledLink' to='/'>Nabil Tharwat</Link>
				<Link className='u-unstyledLink' to='/blog'>Blog</Link>
				<Link className='u-unstyledLink' to='/projects'>Projects</Link>
				<Link className='u-unstyledLink' to='/toolset'>Tools</Link>
			</div>
			{
				// fix for SSR bug
				typeof window !== 'undefined'?
					<NightSwitch/>:
					null
			}
		</nav>
	)
}

export default Navbar