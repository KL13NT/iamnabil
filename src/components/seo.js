import React from 'react'
import { Helmet } from 'react-helmet'

const hostname = `https://iamnabil.me`

function SEO ({ title, description, path, ogImageName, ogImageExtension }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${hostname}${path? path: null}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="Nabil Tharwat" />
      <meta property="og:site_name" content="Nabil Tharwat" />
      {
        ogImageName 
          ? <meta property="og:image:url" content={`${hostname}/${ogImageName}.${ogImageExtension}`}/>
          : null
      }
      {
        ogImageName 
          ? <meta property="og:image:url" content={`${hostname}/${ogImageName}.${ogImageExtension}`}/>
          : null
      }
      <html lang="en-GB"/>
    </Helmet>
  )
}


export default SEO