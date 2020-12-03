import Link from 'next/link'

import { MDXProvider } from '@mdx-js/react'

import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import '../styling/index.sass'

const link =
	'https://www.aljazeera.com./news/2020/10/25/social-meboycott-french-products-online-against-macrons-islam'

const CustomLink = ({ href, ...props }) => {
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		)
	}

	return <a href={href} {...props} />
}

const CustomImg = ({ src, ...props }) => {
	return (
		<a href={src}>
			<img
				src={src}
				{...props}
				loading='lazy'
				className='text-center mx-auto'
			/>
		</a>
	)
}

const components = {
	a: CustomLink,
	img: CustomImg
}

function App({ Component, pageProps }) {
	return (
		<>
			<Banner>
				<a
					href={link}
					className='underline'
					target='_blank'
					referrerPolicy='no-referrer'
				>
					# Boycott France
				</a>
			</Banner>
			<div className='bg-accent font-display p-4 py-8 lg:p-8 lg:p-12 min-h-screen'>
				<Navbar />
				<div className='lg:w-3/5 mx-auto mt-24'>
					<MDXProvider components={components}>
						<Component {...pageProps} />
					</MDXProvider>
				</div>
			</div>
		</>
	)
}

export default App
