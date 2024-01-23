/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const classes = 'text-xl lowercase no-underline bg-transparent'

const Navbar = () => {
	const home =
		typeof window !== 'undefined' ? window.location.pathname === '/' : null

	return (
		<nav className='flex w-full justify-center flex-wrap flex-row gap-8'>
			{!home && (
				<Link href='/'>
					<a className={classes}>Home</a>
				</Link>
			)}
			<Link href='/newsletter'>
				<a className={classes}>Newsletter</a>
			</Link>
			<Link href='/blog'>
				<a className={classes}>Blog</a>
			</Link>
			<Link href='/arabic'>
				<a className={classes} data-lang='ar'>
					بالعربية
				</a>
			</Link>
			<Link href='/notes'>
				<a className={classes}>Notes</a>
			</Link>
			<a className={classes} href='https://github.com/sponsors/KL13NT'>
				sponsor
			</a>
			<Link href='/uses'>
				<a className={classes}>/uses</a>
			</Link>
		</nav>
	)
}

export default Navbar
