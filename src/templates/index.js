/* eslint-disable react/display-name */
import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'

import '../styling/main.sass'

import { PostList } from '../components/PostList'
import Header from '../components/Header'

export default ({ pageContext: { edges } }) => {
	return (
		<>
			<SEO
				description='I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible.' title='Nabil Tharwat | Blog'/>
			<Navbar about={ true } home={ false }/>
			<Layout>
				<Header tiny={ true }/>
				<PostList edges={ edges }/>
			</Layout>
		</>
	)
}
