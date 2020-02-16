import React, { Fragment } from 'react'

import Social from '../components/Social'


export default ({ tiny }) => tiny?
	<div className="o-header u-justify">
		<h1 className="u-center">I'm Nabil Tharwat —</h1>
		<h3 className="u-center">Front-End Engineer, Blogger, Mentor</h3>
		<p>
			I'm a software engineer and occasionally a blogger and a mentor. I was born in Cairo and grew up
			there. After graduating high school I embarked on a mission to become
			a software engineer. I'm the author of Ally Reads! and DOCX.
		</p>
		<Social/>
	</div>
	: <div className="o-header u-justify">
		<h1 className="u-center">I'm Nabil Tharwat —</h1>
		<h3 className="u-center">Front-End Engineer, Blogger, Mentor</h3>
		<p>
			I'm a software engineer, and occasionally a blogger and mentor. I was born in Cairo, Egypt and grew up in
			there. After graduating High School I embarked on a mission to become
			a software engineer. I'm the creator of Ally Reads! and DOCX.
		</p>
		<br />
		<p>
			I love contributing to open source software, and I'm also a performance addict. Whenever there's a tiny
			chance to beneficially improve the optimisation of my code, I will gladly do it.
			Accessibility and performance are part of my eternal quest.
		</p>
		<br />
		<p>
			I recently started an online student community that aims to improve
			students' lives by providing the help and support needed. We also
			raise awareness about marginalised groups and underrepresented people.
			Everyone is welcome! Be sure to check out our Discord server if you're an Egyptian/Arab student.
			<a href="https://discord.gg/xrGAnTg">Click here to check it out!</a>
		</p>
		<Social/>
	</div>
