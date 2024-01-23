/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

import Link from 'next/link'

import { MDXProvider } from '@mdx-js/react'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import '../styling/index.sass'

const link = 'https://ceasefiretoday.com/'

const CustomLink = ({ href, ...props }) => {
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		)
	}

	return <a href={href} {...props} />
}

const CustomImg = ({ src, ...props }) => {
	return (
		<a href={src}>
			<img
				src={src}
				{...props}
				loading='lazy'
				className='text-center mx-auto'
			/>
		</a>
	)
}

const components = {
	a: CustomLink,
	img: CustomImg
}

function App({ Component, pageProps }) {
	return (
		<>
			<Banner>
				<a
					href={link}
					className='underline'
					target='_blank'
					rel='noreferrer'
					referrerPolicy='no-referrer'
				>
					# CeasefireNow!{' '}
					<span role='img' aria-label='palestine emoji'>
						🇵🇸
					</span>
				</a>
			</Banner>
			<div className='font-display p-4 py-8 lg:p-8'>
				<Navbar />
				<div className='w-full xl:w-5/6 mx-auto lg:mt-16 max-w-screen-2xl'>
					<MDXProvider components={components}>
						<Component {...pageProps} />
					</MDXProvider>
				</div>
			</div>

			<script
				defer
				src='https://static.cloudflareinsights.com/beacon.min.js'
				data-cf-beacon='{"token": "db338f8ae09f4d08ae1846d09464ae6f"}'
			></script>
		</>
	)
}

export default App
