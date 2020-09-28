import React from 'react'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

const Toolset = () => {
	return (
		<>
			<SEO path='/toolset' title='Toolset' />
			<Navbar about={true} home={true} />
			<Layout>
				<h1>Work and Experiments</h1>
				<p>
					This is a list of all the tools I'm actively using, have used before,
					or have learned but haven't had the chance to use in a real world
					project yet. I currently have a thing for TypeScript 😀.
				</p>
				<div className='c-section'>
					<p>
						<span className='u-bold'>JavaScript Utilities</span>
						<br />
						Lodash, Underscore, and jQuery. Don't use them anymore, the language
						has grown enough.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>CSS Frameworks/Libraries</span>
						<br />
						Skeleton, Semantic UI, Bootstrap 4, Foundation, and Materialize.
						Haven't really used them much.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Templating Engines</span>
						<br />
						Pug ❤️, Slim, and Handlebars. Mainly for small projects.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Preprocessors</span>
						<br />
						Sass, SCSS, Stylus, and PostCSS. I don't know where to put
						CSSModules but I use it all the time so 🤷‍♂.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>UI Frameworks and State Management</span>
						<br />
						React ❤️, Redux, and messed around with Vue just a tad bit.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>CSS-in-JS</span>
						<br />
						Glamorous/Emotion, and Styled Components. Not a fan of CSS-in-JS
						though.🙅
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Build Tools and Transpilers</span>
						<br />
						Babel, Webpack ❤️, Gulp.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Databases and Cache</span>
						<br />
						MongoDB ❤️, Firebase Firestore, Redis.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>
							Server-Side and Serverless Technologies
						</span>
						<br />
						Mongoose, NodeJS, Express, GraphQL, Firebase Functions, and
						SocketIO.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Static Site Generators and CMS</span>
						<br />
						GatsbyJS, NetlifyCMS
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Deployment, and CI/CD</span>
						<br />
						GatsbyJS, Heroku, Netlify ❤️, Firebase, Git/GitHub, and TravisCI.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Testing</span>
						<br />
						Jest ❤️, Enzyme, and Cypress.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Design and UI/UX Tools</span>
						<br />
						Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma ❤️, and Zeplin.
					</p>
				</div>
				<br></br>
				<br></br>
				<h1>Development Environment</h1>
				<p>
					This is my development environment setup. Tools I use to be
					productive, all around.{' '}
				</p>
				<div className='c-section'>
					<p>
						<span className='u-bold'>
							Editor + Terminal{' '}
							<span aria-label='man technologist emoji' role='img'>
								👨‍💻
							</span>
						</span>
						<br />
						<a href='https://code.visualstudio.com/'>Visual Studio Code</a> is
						my current editor. It allows a lot of customisation. <br />
						I'm using{' '}
						<a href='https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple'>
							Shades of Purple
						</a>{' '}
						as my main theme and sometimes switch to{' '}
						<a href='https://marketplace.visualstudio.com/items?itemName=Hyzeta.vscode-theme-github-light'>
							GitHub Light
						</a>
						.<br />
						My main fonts are Space Mono and FiraCode, currently using the
						former.
						<br />
						Firefox is my main, and I use Chrome for testing alongside Firefox.{' '}
						<br />
						<a href='https://cmder.net/'>Cmder</a> is my terminal of choice with
						custom theme and{' '}
						<a href='https://github.com/AmrEldib/cmder-powerline-prompt'>
							integrations
						</a>
						.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>
							Productivity{' '}
							<span aria-label='muscle arm emoji' role='img'>
								💪
							</span>
						</span>
						<br />
						<a href='https://www.notion.so/'>Notion</a> is my main editorial
						app. Blog post drafts, to-do, and channel-related stuff. <br />
						In terms of project management my tool of choice is{' '}
						<a href='https://www.notion.so/'>Trello</a>.<br />
						As for time-tracking, I use a tool that I built myself called{' '}
						<a href='https://auditmyday.netlify.app'>AuditMyDay</a>.<br />
						Anything else? Probably have a bash/node script for it.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>
							Recording + Editing{' '}
							<span aria-label='laptop emoji' role='img'>
								📹
							</span>
						</span>
						<br />
						I mainly use OBS to record any and all videos, and use Vegas Pro 17
						as my editor.
						<br />
						Photoshop is used to make thumbnails as well as Figma. <br />
					</p>
				</div>
			</Layout>
		</>
	)
}

export default Toolset
