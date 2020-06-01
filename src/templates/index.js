/* eslint-disable react/display-name */
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'

import '../styling/main.sass'

import { PostList } from '../components/PostList'
import Header from '../components/Header'

export default ({ pageContext: { edges } }) => {
	return (
		<>
			<SEO/>
			<Navbar about={ true } home={ false }/>
			<Layout>
				<Header tiny={ true }/>
				<PostList edges={ edges }/>
			</Layout>
		</>
	)
}
