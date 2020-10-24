import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<p>
			I recently changed article links from `/blog/post/post-name` to
			`/blog/post-name`, if that's the case for you, just remove the `/post/`
			part from the link.
		</p>
		<Link href='/'>Click here to go to the home page</Link>
	</Layout>
)

export default NotFoundPage
