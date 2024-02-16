/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const classes = 'text-xl lowercase no-underline bg-transparent'

const Navbar = () => {
	const home =
		typeof window !== 'undefined' ? window.location.pathname === '/' : null

	// Wrapping the links in a div because next renders the data-lang attribute on
	// the wrong element client-side
	return (
		<nav className='flex w-full justify-center flex-wrap flex-row gap-8'>
			<div>
				{!home && (
					<Link href='/'>
						<a className={classes}>Home</a>
					</Link>
				)}
			</div>

			<Link href='/newsletter'>
				<a className={classes}>Newsletter</a>
			</Link>

			<Link href='/connect'>
				<a className={classes}>Connect</a>
			</Link>

			<Link href='/blog'>
				<a className={classes}>Blog</a>
			</Link>

			<Link href='/arabic'>
				<a className={classes} data-lang='ar'>
					بالعربية
				</a>
			</Link>

			<a className={classes} href='https://github.com/sponsors/KL13NT'>
				sponsor
			</a>

			<Link href='/uses'>
				<a className={classes}>/uses</a>
			</Link>

			<div />
		</nav>
	)
}

export default Navbar
