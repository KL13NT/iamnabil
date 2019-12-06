import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const hostname = `https://iamnabil.me`
const defaultOGImagePath = `/icons/icon-512x512.png`


function SEO ({ title, description, path, ogImageName, ogImageExtension }) {
  const ogImageUrl = ogImageName? `${hostname}/${ogImageName}.${ogImageExtension}`: defaultOGImagePath
  const url = `${hostname}${path? path: null}`
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Nabil Tharwat" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="@Nabil_Tharwat" />
      <meta property="twitter:site" content="@Nabil_Tharwat16"/>
      <meta property="og:image" content={ogImageUrl}/>
      <meta property="og:image:type" content={`image/jpeg`}/>
      <meta property="og:image:url" content={ogImageUrl}/>
      <meta property="og:image:secure_url" content={ogImageUrl}/>
      <meta property="twitter:image" content={ogImageUrl}/>
      {/* {
        ogImageName 
          ? <SEOImages ogImageName={ogImageName} ogImageExtension={ogImageExtension}/>
          : null
      } */}
      <html lang="en-GB"/>
    </Helmet>
  )
}


export default SEO