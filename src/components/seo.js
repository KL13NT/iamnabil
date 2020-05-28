import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const hostname = 'https://iamnabil.netlify.app'
const defaultOGImagePath = '/icons/icon-512x512.png'


function SEO ({ title, description, path, ogImageName, ogImageExtension }) {
	const ogImageUrl = ogImageName? `${hostname}/${ogImageName}.${ogImageExtension}`: defaultOGImagePath
	const url = `${hostname}${path? path: null}`

	return (
		<Helmet>
			<title>{ title }</title>
			<meta content={ title } property='og:title' />
			<meta content='website' property='og:type' />
			<meta content={ description } name='description' />
			<meta content={ description } property='og:description' />
			<meta content={ url } property='og:url' />
			<meta content='Nabil Tharwat' property='og:site_name' />
			<meta content={ title } property='twitter:title' />
			<meta content={ description } property='twitter:description' />
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