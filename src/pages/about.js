import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import { Social } from '../components/Social'

import '../styling/main.styl'

const About = () => {
	return (
		<>
			<SEO title="Nabil Tharwat | Front-End Engineer, Blogger, Mentor" description="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible." />
			<Navbar home={true} about={false}/>
			<Layout>
				<div className="o-header u-justify">
					<h1 className="u-center">I'm Nabil Tharwat —</h1>
					<h3 className="u-center">Front-End Engineer, Blogger, Mentor</h3>
					<p>
          I'm a software engineer and mentor. I was born in 2000 and grew up in
          Cairo. After graduating High School I embarked on a mission to become
          a software engineer. I spent day and night researching, designing, and
          creating beautiful products.
					</p>
					<br />
					<p>
          I build refreshing websites and take pride in providing an exceptional
          browsing experience through using the latest accessibility tools
          available to make my products as accessible and user-friendly as
          possible. I'm also a performance freak, so whenever there's a tiny
          chance to improve the optimisation of my code, I will gladly do it.
          60FPS is always my goal.
					</p>
					<br />
					<p>
          I recently started a local student community that aims to make
          students' lives easier by providing the help and support needed and
          raise awareness about marginalised groups and underrepresented people.
          Everyone is welcome! Be sure to check out our Discord server. <a href="https://discord.gg/xrGAnTg">Click here to check it out!</a>
					</p>
					<Social/>
				</div>
				<hr className='c-hr-break'></hr>
				<div className="o-body">
					
					<h2 >Selected Projects</h2>
					<div className="c-section">
						<a className='u-unstyledLink' href="https://KL13NT.github.io/Clock-Animated">
							<h3 >Clock Animated</h3>
						</a>
						<p>
            A demo clock with elegance and performance in mind. This was created
            during a local contest for HTML, CSS, and JavaScript. I came in
            first place. Judgement was based on code performance, style, and
            design.
						</p>
					</div>
					<div className="c-section">
						<a className='u-unstyledLink' href="https://github.com/KL13NT/cppbasics">
							<h3 >C++ Basics</h3>
						</a>
						<p>
            An 8-module C++ basics explanation for students going through
            university or just willing to learn C++ to advance in software
            development. This was created to complement Cairo University's
            curriculum of C++ and provide a deeper dive into the basics of the
            language that were never explained in class.
						</p>
					</div>
					<div className="c-section">
						<a className='u-unstyledLink' href="https://Wall-E.netlify.com">
							<h3 >Wall-E</h3>
						</a>
						<p>
            A progressive web app (PWA) that allows its users to purchase
            different services and products from a number of merchants, transfer
            money to other users, become merchants, and earn money from their
            products. This application functions offline and uses cutting edge
            features with backward-compatibility. This was developed during an
            internship in just under 40 days, over 25k lines of hand-written
            code, all by myself. Unfortunately the source code is not open
            source. (Note: Lines of code is not a measure of complexity as much
            as it just gives perspective to the amount of effort dedicated
            towards a project)
						</p>
					</div>
					
					<h2 >OSS Contributions</h2>
					<div className="c-section">
						<p>
            Most of my projects are open source and free to use. I'd love that
            people use and benefit from my creations. I'm currently working on a
            few projects that aim to provide a better developer experience and
            provide end-users a more friendly and easy browser environment.
            Those include:
						</p>
					</div>
					<div className="c-section">
						<h3 >A11Y Read</h3>
						<p>
            This is a browser extension that makes it easy for the user to
            manipulate the page, controlling font attributes such as weight,
            spacing, colour, and size. It also allows the user to manipulate
            paragraphs for people that tend to get lost in huge blocks of text
            and the general look of the page.
						</p>
					</div>
					<div className="c-section">
						<h3 >DOCX</h3>
						<p>
            This is a documentation tool that manages to automatically read
            JavaScript files, parse functions and methods along their
            parameters, and in connection to block comments preceding those
            functions. Having parsed those files, the tool manages to create
            connections between those parts of the files and create beautifully
            linked documentation pages.
						</p>
					</div>
					
					<h2 >What I do</h2>
					<div className="c-section">
						<p>I love trying out new things all the time and teaching others what I learn along the way. I'm interested in performance and UX, as well as AI and ML and would love to work on something involving all of them. I also blog from time to time and mentor people who are new to the field.</p>
					</div>
					<h2 >Achievements</h2>
					<div className="c-section">
						<ul>
							<li>Completed an internship in which I worked on a React project alone and delivered a First Viable Product within 30 days of starting work on it. I handled design on my own and made sure the website is accessible and performant even on 5+ years old mobile devices.</li>
							<li>I've mentored some developers that are on their way to becoming successful front-end developers. </li>
							<li>Gave a few classes in college and contributed directly to the explanation of some of the most complex topics involved with my college's curriculum regarding computer science.</li>
							<li>Started Valarium, an online student club for computer science enthusiasts and people interested in technology as a whole.</li>
							<li>Have been assigned as team leader in college for two years now, have been lifting the team up and helping the best I can, and the team has been growing rapidly ever since.</li>
							<li>Came in first place TheNetNinja's February Code Challege, 2019 with my simplistic <a href="https://kl13nt.github.io/Clock-Animated/">clock.</a></li>
						</ul>
					</div>
					<h2 >Q & A</h2>
					<div className="c-section">
						<ul>
							<li>
								What's the most useful business-related book you've ever read?<br/>
								JavaScript and JQuery: Interactive Front-End Web Development<br/>
								HTML and CSS: Design and Build Websites<br/>
								Modern Web Development on the JAMstack<br/>
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
								If money were not an issue, what would you be doing right now?<br/>
								Coding side projects, hiking, sky-diving, or gaming on an expensive machine
							</li>

							<li>
								What words of advice would you give your younger self?<br/>
								Concentrate on your goal and don't let the wind steer your ship
							</li>

							{/* <li>
								What's the most creative thing you've ever done?<br/>
								A discord bot with NLP using TensorFlow that actually converses with users
							</li> */}

							<li>
								What's your super power?<br/>
								Being able to focus on my goals and not let them fade from my vision, no matter what
							</li>

							<li>
								What's the best way for people to get in touch with you?<br/>
								I've got accounts almost everywhere! Discord, Facebook, Linkedin, Twitter, Skype, Email, you name it
							</li>

							<li>
								What words of wisdom do you live by?<br/>
								He who sows the win shall reap the storm.<br/>
								Get knocked down, get back up again.<br/>
							</li>

							<li>
								What aspects of your work are you most passionate about?<br/>
								The part involving humans and loads of challenges for the mind
							</li>

							<li>
								What was the most impactful class you took in school?<br/>
								English
							</li>

							<li>
								What's something you wish you had done years earlier?<br/>
								Learning CS
							</li>

							<li>
								What's an obstacle you've overcome?<br/>
								Language barrier, cultural differences, and negative opinions.<br/>
							</li>
						</ul>
					</div>
					<h2 >What I'm looking for</h2>
					<div className="c-section">
						<p>I love environments that help me grow either by directly providing or by indirectly being helpful in that manner. Team members who know how to communicate their thoughts well are absolutely appreciated. I love making a difference with my code.</p>
					</div>
					
					<h2 >Contact</h2>
					<div className="c-section">
						<p>If you'd like to contact me you can use the links at the top of this page or fill this form:</p>
						<form method="post" netlify-honeypot="bot-field" data-netlify="true" className="c-form" name="contact">
							<input type="hidden" name="bot-field" />
							<input type="hidden" name="form-name" value="contact" />
							<label>Name:<input type="text" name="name" placeholder="What's your name?" required/></label>
							<label>Email:<input type="email" name="email" placeholder="example@example.example" required/></label>
							<label>Message: <textarea name="message" required></textarea></label>
							<span>Data submitted in this form is secure and not shared with anyone but me. <br/><br/>After sending the page will refresh and this form will be cleared. Don't worry though, it probably worked. </span>
              
							<button type="submit">Send</button>
						</form>
					</div>
					<span className="u-center" style={{ fontSize: '0.8rem', marginTop: '6rem' }}>Made with ❤️ and Gatsby</span>
				</div>
			</Layout>
		</>
	)
}

export default About