import React from 'react'

import TwitterLogo from '../../static/twitter-logo.svg'
import LinkedinLogo from '../../static/linkedin-logo.svg'
import GitHubLogo from '../../static/github-logo.svg'
import DEVLogo from '../../static/dev.svg'
import AngelcoLogo from '../../static/angelco.svg'
import OutlookLogo from '../../static/mail.svg'
import CV from '../../static/cv.svg'

export const Social = () => (
  <div className="c-socialContainer">
    <a href="https://twitter.com/Nabil_Tharwat16">
      <img src={TwitterLogo} alt="Twitter profile" />
    </a>
    <a href="https://www.linkedin.com/in/i-am-nabil">
      <img src={LinkedinLogo} alt="LinkedIn profile" />
    </a>
    <a href="https://github.com/KL13NT">
      <img src={GitHubLogo} alt="GitHub profile" />
    </a>
    <a href="https://dev.to/kl13nt">
      <img src={DEVLogo} alt="Nabil Tharwat's DEV Profile"/>
    </a>
    <a href="https://angel.co/nabil-tharwat">
      <img src={AngelcoLogo} alt="Angel.co profile" />
    </a>
    <a href="mailto:nabil.tharwat@outlook.com">
      <img src={OutlookLogo} alt="Email Link Icon" />
    </a>
    <a href="https://docs.google.com/document/export?format=pdf&amp;id=1VL4_iTKO712R-H7S5_3_PkuG1ed97eoIJUMjo9T9noE">
      <img src={CV} alt="Resume Link Icon" />
    </a>
  </div>
)