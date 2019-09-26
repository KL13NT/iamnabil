import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'

import './toggle.css'

export default function NightSwitch () {
  let html
  let theme
  const [isNightModeDisabled, setNightMode] = useState(true)
  
  //Fix for `window is not available in SSR` gatsby error
  //This hook will run once only 
  useEffect(()=>{
    html = window.document.querySelector('html')
    theme = localStorage.getItem('theme')
  })

  //First page load check
  useEffect(()=>{
    if(theme === 'dark') setNightMode(!isNightModeDisabled)
  }, [])

  useEffect(()=>{
    !isNightModeDisabled
      ? html.classList.add('u-nightmode')
      : html.classList.remove('u-nightmode')
  }, [isNightModeDisabled])

  const changeNightMode = ()=>{
    localStorage.setItem('theme', !isNightModeDisabled? 'light': 'dark')
    setNightMode(!isNightModeDisabled)
  }
  
  return (
    <div className='c-nightmode-toggle'>
      <Toggle
        onChange={changeNightMode}
        checked={isNightModeDisabled}
        name="night mode switch"
        className="toggle-custom"
        icons={{
          checked: <ToggleMoon />,
          unchecked: <ToggleSun />
        }}
      />
    </div>
  )
}

const ToggleMoon = () => <span className="toggle-moon" />
const ToggleSun = () => <span className="toggle-sun" />