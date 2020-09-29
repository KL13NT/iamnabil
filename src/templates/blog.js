/* eslint-disable react/display-name */
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'

import { PostList } from '../components/PostList'

export default ({ pageContext: { edges } }) => {
	console.log(edges)
	return (
		<>
			<SEO />
			<Navbar about={true} home={false} />
			<Layout>
				<h1>Thoughts</h1>
				<p>These are not entirely thoughts.</p>
				<PostList edges={edges} />
			</Layout>
		</>
	)
}
