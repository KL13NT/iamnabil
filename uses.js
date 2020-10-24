import React from 'react'

import SEO from './components/SEO'

const Toolset = () => {
	return (
		<>
			<SEO path='/toolset' title='Toolset' />
			<h1>Work and Experiments</h1>
			<p>
				This is a list of all the tools I'm actively using, have used before, or
				have learned but haven't had the chance to use in a real world project
				yet. I currently have a thing for TypeScript 😀.
			</p>
			<br />
			<h4>JavaScript Utilities</h4>
			<p>
				Lodash, Underscore, and jQuery. Don't use them anymore, the language has
				grown enough.
			</p>
			<br />
			<h4>CSS Frameworks/Libraries</h4>
			<p>
				Skeleton, Semantic UI, Bootstrap 4, Foundation, and Materialize. Haven't
				really used them much.
			</p>
			<br />
			<h4>Templating Engines</h4>
			<p>Pug ❤️, Slim, and Handlebars. Mainly for small projects.</p>
			<br />
			<h4>Preprocessors</h4>
			<p>
				Sass, SCSS, Stylus, and PostCSS. I don't know where to put CSSModules
				but I use it all the time so 🤷‍♂.
			</p>
			<br />
			<h4>UI Frameworks and State Management</h4>
			<p>React ❤️, Redux, and messed around with Vue just a tad bit.</p>
			<br />
			<h4>CSS-in-JS</h4>
			<p>
				Glamorous/Emotion, and Styled Components. Not a fan of CSS-in-JS
				though.🙅
			</p>
			<br />
			<p>
				<h4>Build Tools and Transpilers</h4>
				Babel, Webpack ❤️, Gulp.
			</p>
			<br />
			<h4>Databases and Cache</h4>
			<p>MongoDB ❤️, Firebase Firestore, Redis.</p>
			<br />
			<h4>Server-Side and Serverless Technologies</h4>
			<p>
				Mongoose, NodeJS, Express, GraphQL, Firebase Functions, and SocketIO.
			</p>
			<br />
			<h4>Static Site Generators and CMS</h4>
			<p>GatsbyJS, NetlifyCMS</p>
			<br />
			<h4>Deployment, and CI/CD</h4>
			<p>GatsbyJS, Heroku, Netlify ❤️, Firebase, Git/GitHub, and TravisCI.</p>
			<br />
			<h4>Testing</h4>
			<p>Jest ❤️, Enzyme, and Cypress.</p>
			<br />
			<p>
				<h4>Design and UI/UX Tools</h4>
				Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma ❤️, and Zeplin.
			</p>
			<br></br>
			<br></br>
			<h1>Development Environment</h1>
			<p>
				This is my development environment setup. Tools I use to be productive,
				all around.{' '}
			</p>
			<h4>
				Editor + Terminal{' '}
				<span aria-label='man technologist emoji' role='img'>
					👨‍💻
				</span>
			</h4>
			<br />
			<a href='https://code.visualstudio.com/'>Visual Studio Code</a> is my
			current editor. It allows a lot of customisation. <br />
			I'm using{' '}
			<a href='https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple'>
				Shades of Purple
			</a>{' '}
			as my main theme and sometimes switch to{' '}
			<a href='https://marketplace.visualstudio.com/items?itemName=Hyzeta.vscode-theme-github-light'>
				GitHub Light
			</a>
			.<br />
			My main fonts are Space Mono and FiraCode, currently using the former.
			<br />
			Firefox is my main, and I use Chrome for testing alongside Firefox. <br />
			<a href='https://cmder.net/'>Cmder</a> is my terminal of choice with
			custom theme and{' '}
			<a href='https://github.com/AmrEldib/cmder-powerline-prompt'>
				integrations
			</a>
			.
			<h4>
				Productivity{' '}
				<span aria-label='muscle arm emoji' role='img'>
					💪
				</span>
			</h4>
			<br />
			<a href='https://www.notion.so/'>Notion</a> is my main editorial app. Blog
			post drafts, to-do, and channel-related stuff. <br />
			In terms of project management my tool of choice is{' '}
			<a href='https://www.notion.so/'>Trello</a>.<br />
			As for time-tracking, I use a tool that I built myself called{' '}
			<a href='https://auditmyday.netlify.app'>AuditMyDay</a>.<br />
			Anything else? Probably have a bash/node script for it.
			<h4>
				Recording + Editing{' '}
				<span aria-label='laptop emoji' role='img'>
					📹
				</span>
			</h4>
			<br />
			I mainly use OBS to record any and all videos, and use Vegas Pro 17 as my
			editor.
			<br />
			Photoshop is used to make thumbnails as well as Figma. <br />
		</>
	)
}

export default Toolset
