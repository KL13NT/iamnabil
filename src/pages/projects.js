/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'

const About = () => {
	return (
		<>
			<SEO
				description='My fun projects'
				path='/projects'
				title='Projects' />
			<Navbar/>
			<Layout>
				<div className='o-body'>
					<h1 >Useless is not worthless</h1>
					<p>
						Most of my projects are open source and free to use. Some of these don't have any other purpose than exploration and experimenting.
					</p>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://iamnabil.netlify.app'>
							<span className='u-bold'>My Blog</span>
						</a>
						<p>
							This very website. Built with GatsbyJS, React, and Sass. I don't have
							much to say about it except that I designed and developed it all from the ground up,
							and maintain it from time to time.
						</p>
					</div>

					<div className='c-section'>
						<span className='u-bold'>ValariumBot</span>
						<p>
							A discord bot built using TypeScript, NodeJS, MongoDB, and Redis. Deployed on Heroku and connected to Mongo Cloud. Uses <a href='https://github.com/tensorflow/tfjs-models/tree/master/toxicity'>TensorFlow's Toxicity Classifier</a> to prevent toxic behaviour, and has a fully functional levels system based on Voice and Text activity.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://github.com/KL13NT/discord-utils'>
							<span className='u-bold'>Discord Utils</span>
						</a>
						<p>
							A useful collection of utilities (functions and classes) that help acceelerate NodeJS discord bot development. Built with TypeScript, versioned with <a href='https://github.com/conventional-changelog/standard-version'>standard version</a>. This is extracted from ValariumBot and currently the bot depends on it as a dependency.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://auditmyday.netlify.app'>
							<span className='u-bold'>AuditMyDay</span>
						</a>
						<p>
							A simple and efficient time audit with cloud sync support.
							Allows you to create audits and records without having to worry about
							organising or moving stuff around. Built with React, Firebase Auth, and Firestore.
							For the full list of technologies used refer to this <a href='https://www.facebook.com/groups/egyptian.geeks/permalink/3130397693666584/'>Facebook post</a>.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://valarium.netlify.app'>
							<span className='u-bold'>Valarium</span>
						</a>
						<p>
							The official website for the student community that I founded. Has a blog built with Gatsby and uses NetlifyCMS to manage articles and authors.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://KL13NT.github.io/ally-reads'>
							<span className='u-bold'>Ally Reads!</span>
						</a>
						<p>
            An accessibility browser extension made just for you. Allows you to change how text is displayed in articles and social media posts to make them more accessible, and every thing it does is 100% customisable.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://nabdjs.netlify.app'>
							<span className='u-bold'>NabdJS</span>
						</a>
						<p>
							An Arabic programming language created using JavaScript following
							the principles of BASIC. AST-based and has support for simple types such as
							numbers and strings, as well as variables, globals and scoped.
							Supports functions in BASIC syntax and passes-by-reference,
							and them delicious # code comments.
						</p>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default About