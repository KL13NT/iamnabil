import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

import './toggle.css'

export default function NightSwitch () {
	let html

	const localTheme = typeof window !== 'undefined'? (localStorage?.getItem('theme') ?? 'light'): 'light'
	const [ theme, setTheme ] = useState(localTheme)

	//Fix for `window is not available in SSR` gatsby error
	//This hook will run once only
	if(typeof window !== 'undefined'){
		html = window.document.querySelector('html')
	}

	useEffect(() => {
		theme === 'dark'
			? html.classList.add('u-nightmode')
			: html.classList.remove('u-nightmode')

		localStorage.setItem('theme', theme)
	}, [ html, theme ])

	const changeNightMode = () => {
		setTheme(theme === 'dark'? 'light': 'dark')
	}

	return (
		<div className='c-nightmode-toggle'>
			<Toggle
				aria-label='night mode switch'
				checked={ theme === 'light' }
				className='toggle-custom'
				icons={ {
					unchecked: <ToggleMoon />,
					checked: <ToggleSun />
				} }
				label='nightmode switch'
				name='night mode switch'
				onChange={ changeNightMode }/>
		</div>
	)
}

const ToggleMoon = () => <span className='toggle-moon' />
const ToggleSun = () => <span className='toggle-sun' />