import { XMLParser } from 'fast-xml-parser'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Rendezvous from '../components/Rendezvous'
import RendezvousList from '../components/RendezvousList'
import { PostList } from '../components/PostList'
import { getAllPosts } from '../api'
import { HOSTNAME } from '../constants'

const parser = new XMLParser()

const Connect = ({ rss, articles }) => {
	return (
		<>
			<SEO
				description='البريد الصوتي الخاص بنبيل ثروت! 👀'
				path='connect'
				title='إتصّل بنبيل'
				cover={{
					path: `${HOSTNAME}/connect.jpg`
				}}
			/>

			<Layout thin>
				<section data-lang='ar' className='dir-rtl'>
					<h1>اتّصل بنبيل!</h1>
					<p>
						"اتّصل بنبيل" هو الفويس ميل بتاعي. ابعتولي أسئلتكوا وأفكاركوا
						بصوتكوا.
					</p>
					<p>
						دوس على "ابدأ التسجيل" واختار المايكروفون اللي عايز تستخدمه. قدم
						نفسك (السلام, اسمي كذا) واسأل اللي تحبه. معاك ٩٠ ثانية.{' '}
					</p>
					<p>
						لو الفورم معلقة إتأكد ان إعدادات الخصوصية في متصفحك مش حاجبة رمز
						التحقق من البشرية وإنك مدي إذن لاستخدام الميكروفون الخاص بيك.
					</p>

					<Rendezvous />
				</section>
			</Layout>

			<div
				className='w-full max-w-[1000px] mx-auto dir-rtl mt-32'
				data-lang='ar'
			>
				<h2 className='mb-8'>
					الأسئلة السابقة ({rss.channel.item.length.toLocaleString('ar-EG')})
				</h2>
				<RendezvousList items={rss.channel.item} />
			</div>

			<div
				className='w-full xl:w-5/6 mx-auto lg:mt-16 max-w-screen-2xl dir-rtl py-8'
				data-lang='ar'
			>
				<h2 className='mb-8'>مهتم بقراءة مقال؟</h2>
				<PostList posts={articles} lang={'ar'} />
			</div>
		</>
	)
}

export async function loadRSSFeed() {
	const res = await fetch('https://anchor.fm/s/f1886f84/podcast/rss')
	const xml = await res.text()

	const parsed = parser.parse(xml, {
		parseAttributeValue: true,
		ignoreAttributes: false
	})

	const { item } = parsed.rss.channel
	const items = Array.isArray(item) ? item : [item]

	const rss = {
		...parsed.rss,
		channel: {
			...parsed.rss.channel,
			item: items.map((item, index) => ({
				...item,
				id: index + 1,
				season: item['itunes:summary']
			}))
		}
	}

	return rss
}

export const getStaticProps = async () => {
	const rss = await loadRSSFeed()
	const articles = getAllPosts('arabic').slice(0, 3)

	return {
		props: {
			articles,
			rss
		}
	}
}

export default Connect
