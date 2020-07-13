import React from 'react'
import { Link } from 'gatsby'

import NightSwitch from  './NightSwitch'


const Navbar = ({ home, about }) => {
	return(
		<nav className='o-navigation'>
			<div>
				<Link className='u-unstyledLink' to='/'>Nabil Tharwat</Link>
				<Link className='u-unstyledLink' to='/blog'>Blog</Link>
				<Link className='u-unstyledLink' to='/projects'>Projects</Link>
			</div>
			<div>
				<NightSwitch/>
			</div>
		</nav>
	)
}

export default Navbar