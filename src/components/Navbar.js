import React from 'react'
import { Link } from 'gatsby'

import NightSwitch from  './NightSwitch'


const Navbar = ({ home, about })=>{
	return(
		<nav className="o-navigation">
			<div>
				{
					home
						? <Link className='u-unstyledLink' to='/'>Home</Link>
						: null
				}
				{
					about
						? <Link className='u-unstyledLink' to="/about">About</Link>
						: null
				}
			</div>
			<div>
				<NightSwitch/>
			</div>
		</nav>
	)
}

export default Navbar