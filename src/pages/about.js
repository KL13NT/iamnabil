import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import Header from '../components/Header'

import '../styling/main.sass'

const About = () => {
	return (
		<>
			<SEO title="Nabil Tharwat | Front-End Engineer, Blogger, Mentor" description="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible." />
			<Navbar home={true} about={false}/>
			<Layout>
				<Header tiny={false}/>
				<hr className='c-hr-break'></hr>
				<div className="o-body">

					<h2 >Selected Projects</h2>
					<p>
            Most of my projects are open source and free to use. I'm currently working on a
            few projects that aim to provide a better developer experience and
            provide end-users a more friendly and easy browser environment.
					</p>
					<div className="c-section">
						<a className='u-unstyledLink' href="https://KL13NT.github.io/ally-reads">
							<h3 >Ally Reads!</h3>
						</a>
						<span className='c-tag'>Open Source</span>
						<p>
            An accessibility browser extension made just for you. Allows you to change how text is displayed in articles and social media posts to make them more accessible, and every thing it does is 100% customisable.
						</p>
					</div>
					<div className="c-section">
						<a className='u-unstyledLink' href="https://github.com/KL13NT/SW19-WIP-">
							<h3 >SW19</h3>
						</a>
						<span className='c-tag'>Open Source</span>
						<p>
            A quick animation made in a few hours on an exams night for 2019 new year's eve. The architecture of the code is an absolute mess given it was made in a few hours and that I was basically experimenting with stuff. I may refactor it some time.
						</p>
					</div>
					<div className="c-section">
						<a className='u-unstyledLink' href="https://github.com/KL13NT/cppbasics">
							<h3 >C++ Basics</h3>
						</a>
						<span className='c-tag'>Open Source</span>
						<p>
            An 8-module C++ basics explanation for students going through
            university or just willing to learn C++ to advance in software
            development. This was created to complement Cairo University's
            curriculum of C++ and provide a deeper dive into the basics of the
            language that were never explained in class.
						</p>
					</div>

					<h2 >What I do</h2>
					<div className="c-section">
						<p>I love trying out new things all the time and teaching others what I learn along the way. I'm interested in performance and UX, as well as AI/ML and would love to work on something involving all of them. I also blog from time to time and mentor people who are new to the field.</p>
					</div>
					<h2 >Achievements</h2>
					<div className="c-section">
						<ul>
							<li>Mentored some developers that are on their way to becoming successful software engineers. </li>
							<li>Gave a few classes in college and contributed directly to local computer science communities.</li>
							<li>Produced introductory courses to topics like Data Structures and C++ Programming.</li>
							<li>Started Valarium, an online student club for computer science enthusiasts and people interested in technology as a whole.</li>
							<li>Have been assigned as team leader in college for two years now, and the team has been growing rapidly ever since.</li>
							<li>Came in first place TheNetNinja's February Code Challege, 2019 with my simplistic <a href="https://kl13nt.github.io/Clock-Animated/">clock.</a></li>
						</ul>
					</div>
					<h2 >Q & A</h2>
					<div className="c-section">
						<ul>
							<li>
								What's your preferred type of employment?<br/>
								Remote, Full-Time with a flexible work schedule, and Part-Time.
							</li>
							<li>
								What roles would you be most excited about?<br/>
								UXE, Frontend, and SRE.
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
								If money were not an issue, what would you be doing right now?<br/>
								Hiking, sky-diving, biking, or playing Beat Saber.
							</li>

							<li>
								What words of advice would you give your younger self?<br/>
								Concentrate on your goal and don't let the wind steer your ship.
							</li>

							<li>
								What's the most creative thing you've ever done?<br/>
								A discord bot with NLP using TensorFlow that detects toxic behaviour and warns members with marked as such.
							</li>

							<li>
								What's your super power?<br/>
								Being able to focus on my goals and not let them fade away, no matter what.
							</li>

							<li>
								What's the best way for people to get in touch with you?<br/>
								The most preferable method of communication is through Discord or WhatsApp. I hate unsolicited calls.
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