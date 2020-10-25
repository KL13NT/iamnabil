import '../styling/index.sass'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const link =
	'https://www.aljazeera.com./news/2020/10/25/social-meboycott-french-products-online-against-macrons-islam'

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
					<Component {...pageProps} />
				</div>
			</div>
		</>
	)
}

export default App
