/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/display-name */
import React, { Fragment } from 'react'

import Social from '../components/Social'

const MainHeader = () =>
	<>
		<h1 className='u-center'>I'm Nabil Tharwat —</h1>
		<h3 className='u-center'>Front-End Engineer, Blogger, Mentor</h3>
		<p>
			I'm a software engineer and occasionally a blogger and a mentor.
			I was born in Cairo with passion for computers.
			Started coding when I was 12 with VB, now living in JS land.
			I love contributing to open source.
			Accessibility and performance are part of my eternal quest.
		</p>
	</>

export default () =>
	<div className='o-header u-justify'>
		<MainHeader/>
		<Social/>
	</div>