/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import SEO from './components/SEO'

const About = () => {
	if (typeof window !== 'undefined') {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on('init', user => {
				if (!user) {
					window.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/'
					})
				}
			})
		}
	}

	return (
		<>
			<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
			<SEO description='Learn more about me' title='About' />
			<h1 className='text-6xl'>
				Hi there{' '}
				<span aria-label='Hand waving emoji' role='img'>
					👋
				</span>
			</h1>
			<p>
				I'm Nabil Tharwat, a software engineer, content creator, and mentor
				based in Cairo, Egypt. I started coding when I was 12 with VB, and now
				living in JS land. I love contributing to open source and lifting others
				up. Accessibility and performance are part of my eternal quest.
			</p>
			<h3>Get in touch</h3>
			<p>
				<a href='mailto:nabil.tharwat@outlook.com'>Email</a> and{' '}
				<a href='https://twitter.com/Nabil_Tharwat16'>Twitter</a> are your best
				channels. You can also find me on{' '}
				<a href='https://www.linkedin.com/in/i-am-nabil'>LinkedIn</a>,{' '}
				<a href='https://github.com/KL13NT'>GitHub</a>, and{' '}
				<a href='https://www.youtube.com/channel/UCdGKzbiQkePzSqFf7HBrSPg'>
					YouTube
				</a>
				.
			</p>
			<p>
				When I'm not coding some frontend stuff I'm usually found experimenting,
				mentoring people new to the field, trying out new utilities on the
				market, blogging, going live, making videos and devlogs, or contributing
				to Valarium.
			</p>
			<p>
				2019 was a busy year for a me. I participated in Hacktoberfest, founded{' '}
				<a href='https://valarium.netlify.app'>Valarium</a>, scored first place
				on TheNetNinja's February Code{' '}
				<a href='https://kl13nt.github.io/Clock-Animated/'>Challenge</a>, and
				created a simple C++ introductory text{' '}
				<a href='https://github.com/KL13NT/cppbasics'>course</a> for college
				students.
			</p>
			<p>
				By mid-2020 I managed to collect all four frontend-related FreeCodeCamp
				certificates, published my first{' '}
				<a href='https://github.com/KL13NT/discord-utils'>npm package</a>,
				hosted 4 online{' '}
				<a href='https://www.youtube.com/playlist?list=PLLVZR2VAHRwGGihgl7StmuS6DdvPXbfoV'>
					sessions
				</a>
				, and started learning Russian.
			</p>
			<p>
				Coming from the future @late-2020, I started my own podcast, created a
				social network against discrimination, created{' '}
				<a href='https://pollu.vercel.app'>Pollu</a>, an open-source straw poll
				platform built with anonymity in mind. I also participated in
				Hacktoberfest 2020, improved my online presence, enhanced my design
				skills, and produced more content focused on students like myself.
			</p>
			<p>
				I love environments that help me grow. Team members who know how to
				communicate their thoughts well are appreciated. I love making a
				difference with my code.
			</p>
			<p className='text-center mt-12'>
				Made with
				<span aria-label='Heart emoji' role='img'>
					{' '}
					❤️{' '}
				</span>
				and Gatsby
			</p>
		</>
	)
}

export default About
