/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const classes = 'text-xl lowercase ml-8 no-underline bg-transparent'

const Navbar = () => {
	return (
		<nav className='flex w-full justify-between flex-wrap flex-col md:flex-row'>
			<Link href='/'>
				<a className='text-xl font-bold no-underline bg-transparent'>
					Nabil Tharwat
				</a>
			</Link>
			<div className='flex flex-wrap flex-col md:flex-row'>
				<Link href='/about'>
					<a className={classes}>About</a>
				</Link>
				<Link href='/blog'>
					<a className={classes}>Blog</a>
				</Link>
				<Link href='/projects'>
					<a className={classes}>Projects</a>
				</Link>
				<Link href='/uses'>
					<a className={classes}>/uses</a>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
