import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

function SEO ({ title, description, path, ogImageName, ogImageExtension }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={`https://kl13nt.github.io${path}`} />
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:card" content="summary"/>
      <meta property="twitter:creator" content="Nabil Tharwat"/>
      <meta property="og:site_name" content="Nabil Tharwat"/>
      {
        ogImageName 
          ? <meta property="og:image:url" content={`https://kl13nt.github.io/${ogImageName}.${ogImageExtension}`}/>
          : null
      }
      {
        ogImageName 
          ? <meta property="og:image:url" content={`https://kl13nt.github.io/${ogImageName}.${ogImageExtension}`}/>
          : null
      }
    </Helmet>
  )
}


export default SEO