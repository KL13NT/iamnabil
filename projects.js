/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import SEO from './components/SEO'

const About = () => {
	return (
		<>
			<SEO description='My fun projects' path='/projects' title='Projects' />
			<h1>Useless is not worthless 🚀</h1>
			<p>
				Most of my projects are open source and free to use. Some of these don't
				have any other purpose than exploration and experimenting.
			</p>

			<br />

			<div>
				<a href='https://pollu.vercel.app'>
					<h4>Pollu</h4>
				</a>
				<p>
					An open-source anonymous straw poll platform with privacy in mind.
					Built with StorybookJS, NextJS, TailwindCSS, Vercel Serverless
					Functions, ExpressJS, Mongoose, and Mongo Cloud over the weekend.
				</p>
			</div>

			<br />

			<div>
				<a href='https://iamnabil.netlify.app'>
					<h4>My Blog</h4>
				</a>
				<p>
					This very website. Built with GatsbyJS, React, and Sass. I don't have
					much to say about it except that I designed and developed it all from
					the ground up, and maintain it from time to time. Oh, I hooked it up
					to NetlifyCMS recently too! A much better blogging workflow if you ask
					me.{' '}
					<span aria-label='Smiling emoji' role='img'>
						😄
					</span>
				</p>
			</div>

			<br />

			<div>
				<h4>ValariumBot</h4>
				<p>
					A discord bot built using TypeScript, NodeJS, MongoDB, and Redis.
					Deployed on Heroku and connected to Mongo Cloud. Uses{' '}
					<a href='https://github.com/tensorflow/tfjs-models/tree/master/toxicity'>
						TensorFlow's Toxicity Classifier
					</a>{' '}
					to prevent toxic behaviour, and has a fully functional levels system
					based on Voice and Text activity.
				</p>
			</div>

			<br />

			<div>
				<a href='https://github.com/KL13NT/discord-utils'>
					<h4>Discord Utils</h4>
				</a>
				<p>
					A useful collection of utilities that acceelerate NodeJS discord bot
					development. Built with TypeScript, versioned with{' '}
					<a href='https://github.com/conventional-changelog/standard-version'>
						standard version
					</a>
					. This is extracted from ValariumBot and currently the bot depends on
					it.
				</p>
			</div>

			<br />

			<div>
				<a href='https://auditmyday.netlify.app'>
					<h4>AuditMyDay</h4>
				</a>
				<p>
					A simple and efficient time audit with cloud sync support. Allows you
					to create audits and records without having to worry about organising
					or moving stuff around. Built with React, Firebase Auth, and
					Firestore. For the full list of technologies used refer to this{' '}
					<a href='https://www.facebook.com/groups/egyptian.geeks/permalink/3130397693666584/'>
						Facebook post
					</a>
					.
				</p>
			</div>

			<br />

			<div>
				<a href='https://valarium.netlify.app'>
					<h4>Valarium</h4>
				</a>
				<p>
					The official website for the online community that I founded. Has a
					blog built with GatsbyJS and Sass, and hooked up to NetlifyCMS.
				</p>
			</div>

			<br />

			<div>
				<a href='https://KL13NT.github.io/ally-reads'>
					<h4>Ally Reads!</h4>
				</a>
				<p>
					An accessibility browser extension made just for you. Allows you to
					change how text is displayed in articles and social media posts to
					make them more accessible, and every thing it does is 100%
					customisable.
				</p>
			</div>

			<br />

			<div>
				<a href='https://nabdjs.netlify.app'>
					<h4>NabdJS</h4>
				</a>
				<p>
					An Arabic programming language created using JavaScript following the
					principles of BASIC. AST-based and has support for simple types such
					as numbers and strings, as well as variables, globals and scoped.
					Supports functions in BASIC syntax and passes-by-reference, and them
					delicious # code comments.
				</p>
			</div>
		</>
	)
}

export default About
