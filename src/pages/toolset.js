import React from 'react'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'


const Toolset = () => {
	return (
		<>
			<SEO path='/toolset' title='Toolset'/>
			<Navbar about={ true } home={ true }/>
			<Layout>
				<h1>Work and Experiments</h1>
				<p>
					This is a list of all the tools I'm actively using, have used before, or have learned but haven't had the chance to use in a real world project yet.
				</p>
				<div className='c-section'>
					<p>
						<span className='u-bold'>The Basics</span><br/>
						HTML5, CSS3, ES2020. Always trying to be up to date. 💯😉
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>JavaScript Utilities</span><br/>
						Lodash, Underscore, and jQuery. Don't use them anymore, the language has grown enough.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>CSS Frameworks/Libraries</span><br/>
						Skeleton, Semantic UI, Bootstrap 4, Foundation, and Materialize.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Templating Engines</span><br/>
						Pug ❤️, Slim, and Handlebars.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Preprocessors</span><br/>
						Sass, SCSS, Stylus, and PostCSS. I don't know where to put CSSModules but I use it all the time so 🤷‍♂.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Frontned Frameworks/State Management</span><br/>
						React ❤️, Redux, and Apollo. Barely used Apollo though.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>CSS-in-JS</span><br/>
						Glamorous/Emotion, and Styled Components. Not a fan of CSS-in-JS though.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Build Tools and Transpilers</span><br/>
						Babel, Webpack ❤️, Gulp.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Server-Side Technologies</span><br/>
						MongoDB, Mongoose, NodeJS, Express, GraphQL, Firebase Firestore, Firebase Functions, and SocketIO.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Static Site Generators, Deployment, and CI/CD</span><br/>
						GatsbyJS, Heroku, Netlify ❤️, Firebase Hosting, Git/GitHub, and TravisCI.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Testing</span><br/>
						Jest ❤️, Enzyme, and Cypress.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Design and UI/UX Tools</span><br/>
						Adobe Illustrator, Adobe Photoshop, Adobe XD, Figma ❤️, and Zeplin.
					</p>
				</div>
				<br></br>
				<br></br>
				<h1>Development Environment</h1>
				<p>This is info on my development environment setup</p>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Editor + Terminal <span aria-label='man technologist emoji' role='img'>👨‍💻</span></span><br/>
						<a href='https://code.visualstudio.com/'>Visual Studio Code</a> is my current editor. <br/>
						I'm using Shades of Purple theme, and Space Mono font. <br/>
						Firefox is my main, and I use Chrome for testing alongside Firefox. <br/>
						<a href='https://cmder.net/'>Cmder</a> is my terminal of choice with custom git and NPM integrations.
					</p>
				</div>
				<div className='c-section'>
					<p>
						<span className='u-bold'>Recording + Editing</span><br/>
						I mainly use OBS to record any and all videos, and use Vegas Pro 17 as my editor.<br/>
						Photoshop is used to make thumbnails as well as Figma. <br/>
					</p>
				</div>
			</Layout>
		</>
	)
}

export default Toolset
