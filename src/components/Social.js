import React from 'react'

import TwitterLogo from '../../static/twitter-logo.svg'
import LinkedinLogo from '../../static/linkedin-logo.svg'
import GitHubLogo from '../../static/github-logo.svg'
import DEVLogo from '../../static/dev.svg'
import AngelcoLogo from '../../static/angelco.svg'
import YoutubeLogo from '../../static/youtube.svg'
import OutlookLogo from '../../static/mail.svg'
import CV from '../../static/cv.svg'

export default function Social () {
	return (
		<div className='c-socialContainer'>
			<a
				className='u-unstyledLink'
				data-id='Twitter'
				href='https://twitter.com/Nabil_Tharwat16'>
				<img alt='Twitter profile' src={ TwitterLogo } />
			</a>
			<a className='u-unstyledLink' href='https://www.linkedin.com/in/i-am-nabil'>
				<img alt='LinkedIn profile' src={ LinkedinLogo } />
			</a>
			<a className='u-unstyledLink' href='https://github.com/KL13NT'>
				<img alt='GitHub profile' src={ GitHubLogo } />
			</a>
			<a className='u-unstyledLink' data-id='Dev.to' href='https://dev.to/kl13nt'>
				<img alt="Nabil Tharwat's DEV Profile" src={ DEVLogo } />
			</a>
			<a
				className='u-unstyledLink'
				data-id='AngelCo'
				href='https://angel.co/nabil-tharwat'>
				<img alt='Angel.co profile' src={ AngelcoLogo } />
			</a>
			<a
				className='u-unstyledLink'
				data-id='Youtube'
				href='https://www.youtube.com/channel/UCdGKzbiQkePzSqFf7HBrSPg'>
				<img alt='My youtube channel' src={ YoutubeLogo } />
			</a>
			<a className='u-unstyledLink' href='mailto:nabil.tharwat@outlook.com'>
				<img alt='Email Link Icon' src={ OutlookLogo } />
			</a>
			<a
				className='u-unstyledLink'
				href='https://docs.google.com/document/export?format=pdf&amp;id=1VL4_iTKO712R-H7S5_3_PkuG1ed97eoIJUMjo9T9noE'>
				<img alt='Resume Link Icon' src={ CV } />
			</a>
		</div>
	)
}