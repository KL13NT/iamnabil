/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

import SEO from '../components/SEO'

const NotFoundPage = () => (
	<>
		<SEO title='404: Not found' />
		<div className='text-center'>
			<img src='/doge_sad.jpg' alt='doge sad' className='h-64 mx-auto' />
			<h1 className='font-display'>
				{'<'}NOT_FOUND{'>'}
			</h1>
			<p>
				You just hit a route that doesn't exist... the sadness.
				<br />
				<Link href='/'>
					<a>Go home</a>
				</Link>
			</p>
		</div>
	</>
)

export default NotFoundPage

export const config = {
	unstable_runtimeJS: false
}
