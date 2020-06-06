import React from 'react'
import { Helmet } from 'react-helmet'

const hostname = 'https://iamnabil.netlify.app'

const defaultTitle = 'Blog'
const defaultDescription = 'Front-End Engineer, Blogger, Mentor'
const defaultOGImagePath = '/icons/icon-512x512.png'
const defaultPath = '/'


function SEO ({
	title = defaultTitle,
	description = defaultDescription,
	path = defaultPath,
	ogImageName,
	ogImageExtension }) {

	const ogImageUrl = ogImageName? `${hostname}/${ogImageName}.${ogImageExtension}`: defaultOGImagePath
	const url = `${hostname}${path}`
	const finalTitle = 'Nabil Tharwat | ' + title
	const fullDescription = `Nabil Tharwat | ${description}`

	return (
		<Helmet>
			<title>{ finalTitle }</title>
			<meta content={ finalTitle } property='og:title' />
			<meta content='website' property='og:type' />
			<meta content={ fullDescription } name='description' />
			<meta content={ fullDescription } property='og:description' />
			<meta content={ url } property='og:url' />
			<meta content='Nabil Tharwat' property='og:site_name' />
			<meta content={ finalTitle } property='twitter:title' />
			<meta content={ fullDescription } property='twitter:description' />
			<meta content='summary' property='twitter:card' />
			<meta content='@Nabil_Tharwat' property='twitter:creator' />
			<meta content='@Nabil_Tharwat16' property='twitter:site'/>
			<meta content={ ogImageUrl } property='og:image'/>
			<meta content={ 'image/jpeg' } property='og:image:type'/>
			<meta content={ ogImageUrl } property='og:image:url'/>
			<meta content={ ogImageUrl } property='og:image:secure_url'/>
			<meta content={ ogImageUrl } property='twitter:image'/>
			{ /* {
        ogImageName
          ? <SEOImages ogImageName={ogImageName} ogImageExtension={ogImageExtension}/>
          : null
      } */ }
			<html lang='en-GB'/>
		</Helmet>
	)
}


export default SEO