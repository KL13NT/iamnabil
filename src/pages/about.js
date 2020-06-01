/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import '../styling/main.sass'

const About = () => {
	return (
		<>
			<SEO
				description='Frontend self-taught croco, an occasional mentor and blogger. JavaScript is my robotic right hand. I’m all about performance and accessibility.'
				title='Nabil Tharwat | Front-End Engineer, Blogger, Mentor' />
			<Navbar about={ false } home={ true }/>
			<Layout>
				<Header tiny={ false }/>
				<hr className='c-hr-break'></hr>
				<div className='o-body'>

					<h2 >Recent Projects</h2>
					<p>
						Most of my projects are open source and free to use.
						This list is not inclusive of every thing I worked on. You can find
						all my projects on my <a href='https://github.com/kl13nt'>GitHub</a>
					</p>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://iamnabil.netlify.app'>
							<h3 className='c-tag' data-tag='PWA'>My Blog</h3>
						</a>
						<p>
							This very website. Built with Gatsby, Sass, and Markdown. I don't have
							much to say about it except that I designed and developed it all from the ground up,
							and maintain it from time to time.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://auditmyday.netlify.app'>
							<h3 className='c-tag' data-tag='open-source, PWA'>AuditMyDay</h3>
						</a>
						<p>
							A simple and efficient time audit with cloud sync support.
							Allows you to create audits and records without having to worry about
							organising or moving stuff around. Built with React, Firebase Auth, and Firestore.
							For the full list of technologies used refer to this <a href='https://www.facebook.com/groups/egyptian.geeks/permalink/3130397693666584/'>Facebook post</a>.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://nabdjs.netlify.app'>
							<h3 className='c-tag' data-tag='open-source'>NabdJS</h3>
						</a>
						<p>
							An Arabic programming language created using JavaScript following
							the principles of BASIC. AST-based and has support for simple types such as
							numbers and strings, as well as variables, globals and scoped.
							Supports functions in BASIC syntax and passes-by-reference,
							and them delicious # code comments.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://valarium.netlify.app'>
							<h3 className='c-tag' data-tag='open-source'>Valarium</h3>
						</a>
						<p>
							This is the official website for the student community that I founded.
							Has 0 lines of JavaScript code, and filled with delicious sassy Sass
							resting on top of Pug.
						</p>
					</div>

					<div className='c-section'>
						<a className='u-unstyledLink' href='https://KL13NT.github.io/ally-reads'>
							<h3 className='c-tag' data-tag='open-source'>Ally Reads!</h3>
						</a>
						<p>
            An accessibility browser extension made just for you. Allows you to change how text is displayed in articles and social media posts to make them more accessible, and every thing it does is 100% customisable.
						</p>
					</div>
					<div className='c-section'>
						<a className='u-unstyledLink' href='https://kl13nt.github.io/SW19-WIP-'>
							<h3 className='c-tag' data-tag='open-source'>SW19</h3>
						</a>
						<p>
            A quick animation made in a few hours on an exams night for 2019 new year's eve. The architecture of the code is an absolute mess given it was made in a few hours and that I was basically experimenting with stuff. I may refactor it some time.
						</p>
					</div>
					<div className='c-section'>
						<a className='u-unstyledLink' href='https://github.com/KL13NT/cppbasics'>
							<h3 className='c-tag' data-tag='educational'>C++ Basics</h3>
						</a>
						<p>
            An 8-module C++ basics explanation for students going through
            university or just willing to learn C++ to advance in software
            development. This was created to complement Cairo University's
            curriculum of C++ and provide a deeper dive into the basics of the
            language that were never explained in class.
						</p>
					</div>

					<h2 >What I do</h2>
					<div className='c-section'>
						<p>
							I love trying out new things all the time.
							I blog from time to time and mentor people who are new to the field.
							I also have a YouTube channel where I post educational videos,
							devlogs, and more when I have the time.
						</p>
					</div>
					<h2 >Achievements</h2>
					<div className='c-section'>
						<ul>
							<li>Mentored developers that are on their way to becoming successful software engineers. </li>
							<li>Collected freeCodeCamp.org's Frontend-related certs (4 certs). </li>
							<li>Gave classes in college and contributed directly to local computer science communities.</li>
							<li>Founded Valarium, an online student club for computer science enthusiasts and people interested in technology as a whole.</li>
							<li>Came in first place TheNetNinja's February Code Challege, 2019 with my simplistic <a href='https://kl13nt.github.io/Clock-Animated/'>clock.</a></li>
						</ul>
					</div>
					<h2 >Q & A</h2>
					<div className='c-section'>
						<ul>
							<li>
								What's your preferred type of employment?<br/>
								Working remotely is my absolute favourite, but I'm okay working Full-Time with a flexible work schedule and Part-Time.
							</li>
							<li>
								What roles would you be most excited about?<br/>
								UXE and Frontend.
							</li>
							<li>
								What role attributes would you be most excited about in your next job?<br/>
								Mentorship, autonomy, and opportunities for professional growth.
							</li>
							<li>
								What company attributes would you be most excited about in your next job?<br/>
								Flexible work arrangements, mentorship culture, inclusive workspace, and work/life balance.
							</li>
							<li>
								What's the most useful business-related book you've ever read?<br/>
								Design Systems Handbook <br/>
							</li>
							<li>
								What are you reading right now?<br/>
								Site Reliability Engineering: How Google Runs Production Systems
							</li>

							<li>
								What's your favorite non-business book?<br/>
								Nineteen Eighty-Four novel by George Orwell
							</li>

							<li>
								What's your super power?<br/>
								Being able to follow through on my goals without hesitation.
							</li>

							<li>
								What's the best way for people to get in touch with you?<br/>
								The preferable method of communication is Email.
							</li>

							<li>
								What words of wisdom do you live by?<br/>
								He who sows the win shall reap the storm.<br/>
							</li>

							<li>
								What aspects of your work are you most passionate about?<br/>
								Giving others a delightful experience and solving complex problems.
							</li>

							<li>
								What was the most impactful class you took in school?<br/>
								English.
							</li>

							<li>
								What's something you wish you had done years earlier?<br/>
								Learning computer science.
							</li>

							<li>
								What's an obstacle you've overcome?<br/>
								Language barrier, cultural differences, and self-denial.<br/>
							</li>
						</ul>
					</div>
					<h2 >What I'm looking for</h2>
					<div className='c-section'>
						<p>I love environments that help me grow.
							Team members who know how to communicate their thoughts well are appreciated.
							I love making a difference with my code.
						</p>
					</div>

					<h2 >Contact</h2>
					<div className='c-section'>
						<p>If you'd like to contact me, you can use the links at the top of this page or fill this form:</p>
						<form className='c-form' data-netlify='true' method='post' name='contact' netlify-honeypot='bot-field'>
							<input name='bot-field' type='hidden' />
							<input name='form-name' type='hidden' value='contact' />

							<label htmlFor='name'>Name:</label>
							<input required id='name' name='name' placeholder="What's your name?" type='text' />

							<label htmlFor='email'>Email:</label>
							<input required id='email' name='email' placeholder='Example@example' type='email' />

							<label htmlFor='message'>Message:</label>
							<textarea required id='message' name='message'>Something to say?</textarea>

							<span>I will never share data sent through this form with anyone. </span>

							<button type='submit'>Send</button>
						</form>
					</div>
					<span
						className='u-center'
						style={ { fontSize: '0.8rem', marginTop: '6rem' } }>
						Made with
						<span aria-label='Heart emoji' role='img'>❤️</span>
						and Gatsby
					</span>
				</div>
			</Layout>
		</>
	)
}

export default About