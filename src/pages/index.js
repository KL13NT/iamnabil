/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'

const About = () => {
	return (
		<>
			<SEO
				description='Learn more about me'
				title='About' />
			<Navbar about={ false } home={ true }/>
			<Layout>
				<h1>
					Hi there <span aria-label='Hand waving emoji' role='img'>👋</span>
				</h1>

				<p>
					My name is Nabil Tharwat. I'm a software engineer, content creator, and mentor. I was born and raised in Cairo with a passion for computers. I started coding when I was 12 with VB, now living in JS land. I love contributing to open source. Accessibility and performance are part of my eternal quest.
				</p>

				<p>
					If you'd like to get in touch with me <a href='mailto:nabil.tharwat@outlook.com'>email</a> and <a href='https://twitter.com/Nabil_Tharwat16'>Twitter</a> are your best channels. You can also find me on <a href='https://www.linkedin.com/in/i-am-nabil'>LinkedIn</a>, <a href='https://github.com/KL13NT'>GitHub</a>, and <a href='https://www.youtube.com/channel/UCdGKzbiQkePzSqFf7HBrSPg'>YouTube</a>. My resume can be downloaded in PDF <a href='https://docs.google.com/document/export?format=pdf&amp;id=1VL4_iTKO712R-H7S5_3_PkuG1ed97eoIJUMjo9T9noE'>here</a>.
				</p>

				<p>
					When I'm not coding some frontend stuff I'm usually found experimenting, mentoring people new to the field, trying out new utilities on the market, blogging, making videos and devlogs, or contributing to Valarium.
				</p>

				<p>
					2019 was a busy year for a freshman student in which I participated in Hacktoberfest, founded <a href='https://valarium.netlify.app'>Valarium</a>, scored first place on TheNetNinja's February Code <a href='https://kl13nt.github.io/Clock-Animated/'>Challenge</a>, and created a simple C++ introductory text <a href='https://github.com/KL13NT/cppbasics'>course</a> for college students.
				</p>

				<p>
					By mid-2020 I managed to collect all four frontend-related FreeCodeCamp certificates, published my first <a href='https://github.com/KL13NT/discord-utils'>npm package</a>, hosted 4 online <a href='https://www.youtube.com/playlist?list=PLLVZR2VAHRwGGihgl7StmuS6DdvPXbfoV'>sessions</a>, and started learning Russian.
				</p>

				<p>
					I love environments that help me grow. Team members who know how to communicate their thoughts well are appreciated. I love making a difference with my code.
				</p>

				<h2 >Personal Q & A</h2>
				<p>
					<span className='u-bold'>What roles would you be most excited about?</span><br/>
								UXE and Frontend.
				</p>
				<p>
					<span className='u-bold'>What role attributes would you be most excited about in your next job?</span><br/>
								Mentorship, autonomy, and opportunities for professional growth.
				</p>
				<p>
					<span className='u-bold'>What company attributes would you be most excited about in your next job?</span><br/>
								Flexible work arrangements, mentorship culture, inclusive workspace, and work/life balance.
				</p>
				<p>
					<span className='u-bold'>What's the most useful business-related book you've ever read?</span><br/>
								Design Systems Handbook <br/>
				</p>
				<p>
					<span className='u-bold'>What are you reading right now?</span><br/>
								Site Reliability Engineering: How Google Runs Production Systems
				</p>

				<p>
					<span className='u-bold'>What's your favorite non-business book?</span><br/>
								Nineteen Eighty-Four novel by George Orwell
				</p>

				<p>
					<span className='u-bold'>What's the best way for people to get in touch with you?</span><br/>
								The preferable method of communication is Email.
				</p>

				<p>
					<span className='u-bold'>What words of wisdom do you live by?</span><br/>
								He who sows the wind shall reap the storm.<br/>
				</p>

				<p>
					<span className='u-bold'>What aspects of your work are you most passionate about?</span><br/>
								Giving others a delightful experience and solving complex problems.
				</p>

				<p>
					<span className='u-bold'>What's are obstacle you've overcome to become who you are now?</span><br/>
								Language barrier, cultural differences, and self-denial.<br/>
				</p>
				<span
					className='u-center'
					style={ { fontSize: '0.8rem', marginTop: '6rem' } }>
						Made with
					<span aria-label='Heart emoji' role='img'> ❤️ </span>
						and Gatsby
				</span>
			</Layout>
		</>
	)
}

export default About