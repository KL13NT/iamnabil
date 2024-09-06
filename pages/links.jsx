import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Links = () => {
	return (
		<>
			<SEO
				description="All Nabil Tharwat's Links"
				path='links'
				title='All my links'
			/>

			<Layout thin>
				<h1>All my links!</h1>
				<p>All my social and content links.</p>
				<ul>
					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/gh'
						>
							GitHub 👨‍💻
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/blog'
						>
							Writing 📝
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/arabic'
						>
							Arabic Writing 📝
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/uses'
						>
							Tech I use ⚙
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/sponsor'
						>
							GitHub Sponsors 💸
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/x'
						>
							Twitter/X 🐣
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/yt'
						>
							YouTube 🎴
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/podcast'
						>
							The Weekly Noob Podcast 🎙
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://nabiltharwat.com/in'
						>
							LinkedIn 💼
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://rendezvouswnabil.substack.com'
						>
							Rendezvous with Nabil Newsletter 📰
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://rendezvouswnabil.substack.com/feed'
						>
							Newsletter RSS 📰
						</a>
					</li>
				</ul>
			</Layout>
		</>
	)
}

export default Links
