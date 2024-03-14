import React from 'react'
import Head from 'next/head'
import { HOSTNAME } from '../constants'

const defaultTitle = 'Nabil Tharwat'
const defaultDescription = 'Frontend Software Engineer, Blogger, Mentor'
const defaultOGImagePath = '/og.png'
const defaultPath = ''

function SEO({
	title,
	lang,
	description = defaultDescription,
	path = defaultPath,
	cover,
	children
}) {
	const ogImageUrl = cover ? cover.path : `${HOSTNAME}${defaultOGImagePath}`
	const url = `${HOSTNAME}/${path}`
	const finalTitle = title
		? title + (lang === 'ar' ? ' | نبيل ثروت' : ' | Nabil Tharwat')
		: defaultTitle

	return (
		<Head>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin='true'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap'
				rel='stylesheet'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap'
				rel='stylesheet'
			/>
			<title>{finalTitle}</title>
			<meta
				name='google-site-verification'
				content='Jwd5WF70ZzZgB0muYxnSlHsVh3allc411SZx25cGYTo'
			/>
			<meta content={finalTitle} property='og:title' />
			<meta content='website' property='og:type' />
			<meta content={description} name='description' />
			<meta content={description} property='og:description' />
			<meta content={url} property='og:url' />
			<meta content='Nabil Tharwat' property='og:site_name' />
			<meta content={ogImageUrl} property='og:image' />
			<meta content={'image/jpeg'} property='og:image:type' />
			<meta content={ogImageUrl} property='og:image:url' />
			<meta content={ogImageUrl} property='og:image:secure_url' />
			<meta content='summary_large_image' name='twitter:card'></meta>
			<meta content={finalTitle} property='twitter:title' />
			<meta content={description} property='twitter:description' />
			<meta content='@Nabil_Tharwat' property='twitter:creator' />
			<meta content='@Nabil_Tharwat16' property='twitter:site' />
			<meta content={ogImageUrl} property='twitter:image' />

			{/* ICONS */}

			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/icons/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/icons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/icons/favicon-16x16.png'
			/>
			<link rel='manifest' href='/icons/site.webmanifest' />
			<link
				rel='mask-icon'
				href='/icons/safari-pinned-tab.svg'
				color='#5bbad5'
			/>
			<link rel='shortcut icon' href='/icons/favicon.ico' />
			<meta name='msapplication-TileColor' content='#f3f7f9' />
			<meta
				name='msapplication-TileImage'
				content='/icons/mstile-144x144.png'
			/>
			<meta name='msapplication-config' content='/icons/browserconfig.xml' />
			<meta name='theme-color' content='#ffffff' />

			{children}
		</Head>
	)
}

export default SEO
