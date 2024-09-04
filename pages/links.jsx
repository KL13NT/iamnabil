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
							href='https://github.com/kl13nt'
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
							href='https://github.com/sponsors/KL13NT?frequency=one-time&sponsor=KL13NT'
						>
							GitHub Sponsors 💸
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://x.com/kl13nt/'
						>
							Twitter/X 🐣
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://www.youtube.com/@NabilTharwat_'
						>
							YouTube 🎴
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://theweeklynoob.netlify.app/'
						>
							The Weekly Noob Podcast 🎙
						</a>
					</li>

					<li className='list-none'>
						<a
							className='text-3xl bg-none bg-transparent mt-12 block'
							href='https://www.linkedin.com/in/i-am-nabil/'
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
