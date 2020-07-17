import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

import './toggle.sass'

export default function NightSwitch () {
	const classList = typeof window !== 'undefined'? window.document.querySelector('html').classList: undefined
	const storedTheme = typeof window !== 'undefined'? localStorage.getItem('theme'): 'light'

	const [ theme, setTheme ] = useState(storedTheme)

	const toggleTheme = () => {
		const newState = theme === 'light'? 'dark': 'light'

		window.localStorage.setItem('theme', newState)
		setTheme(newState)
	}

	const setClass = () => {
		theme === 'dark'
			? classList.add('u-nightmode')
			: classList.remove('u-nightmode')
	}

	useEffect(setClass, [ classList, theme ])

	return (
		<div className='c-nightmode-toggle'>
			<Toggle
				aria-label='night mode switch'
				checked={ theme === 'dark' }
				className='toggle-custom'
				icons={ {
					unchecked: <ToggleSun />,
					checked: <ToggleMoon />
				} }
				label='nightmode switch'
				name='nightmode switch'
				onChange={ toggleTheme }/>
		</div>
	)
}

const ToggleSun = () => <span aria-label='sun with clouds emoji' role='img'>🌤</span>
const ToggleMoon = () => <span aria-label='moon emoji' role='img'>🌛</span>