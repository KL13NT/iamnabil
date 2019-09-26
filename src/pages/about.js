import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import { Social } from '../components/Social'

import '../styling/main.styl'

const About = props => {
  return (
    <>
    <Navbar home={true} about={false}/>
    <Layout>
      <Helmet>
        <title>Nabil Tharwat | Front-End Engineer, Blogger, Mentor</title>
        <meta
          property="og:title"
          content="Nabil Tharwat | Front-End Engineer, Blogger, Mentor"
        />
        <meta
          property="og:description"
          content="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:title"
          content="Nabil Tharwat | Front-End Engineer, Blogger, Mentor"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://iamnabil.me/" />
        <meta property="og:image" content="meta.png" />
        <meta
          property="og:description"
          content="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
        />
        <meta
          name="description"
          content="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:300,300i,400&display=swap"
          rel="preload"
          as="font"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="preload"
          as="font"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className="o-header">
        <h1>I'm Nabil Tharwat —</h1>
        <h3>Front-End Engineer, Blogger, Mentor</h3>
        <p>
          I'm a software engineer and mentor. I was born in 2000 and grew up in
          Cairo. After graduating High School I embarked on a mission to become
          a software engineer. I spent day and night researching, designing, and
          creating beautiful products.
        </p>
        <br />
        <p>
          I build refreshing websites and take pride in providing an exceptional
          browsing experience through using the latest accessibility tools
          available to make my products as accessible and user-friendly as
          possible. I'm also a performance freak, so whenever there's a tiny
          chance to improve the optimisation of my code, I will gladly do it.
          60FPS is always my goal. The toolset on my resume is not inclusive of everything I've ever used but rather the ones I actively use. <a href="/toolset">Click here for a full list of what I actively use or have used before.</a>
        </p>
        <br />
        <p>
          I recently started a local student community that aims to make
          students' lives easier by providing the help and support needed and
          raise awareness about marginalised groups and underrepresented people.
          Everyone is welcome! Be sure to check out our Discord server:
          <a href="https://discord.gg/xrGAnTg">Click here to check it out!</a>
        </p>
        <Social/>
      </div>
      <div className="o-body">
        <hr className="c-hr-break" />
        <h2 className="c-sectionHeader">Selected Projects</h2>
        <div className="c-section">
          <a href="https://KL13NT.github.io/Clock-Animated">
            <h3 className="c-section-title">Clock Animated</h3>
          </a>
          <p>
            A demo clock with elegance and performance in mind. This was created
            during a local contest for HTML, CSS, and JavaScript. I came in
            first place. Judgement was based on code performance, style, and
            design.
          </p>
        </div>
        <div className="c-section">
          <a href="https://github.com/KL13NT/cppbasics">
            <h3 className="c-section-title">C++ Basics</h3>
          </a>
          <p>
            An 8-module C++ basics explanation for students going through
            university or just willing to learn C++ to advance in software
            development. This was created to complement Cairo University's
            curriculum of C++ and provide a deeper dive into the basics of the
            language that were never explained in class.
          </p>
        </div>
        <div className="c-section">
          <a href="https://Wall-E.netlify.com">
            <h3 className="c-section-title">Wall-E</h3>
          </a>
          <p>
            A progressive web app (PWA) that allows its users to purchase
            different services and products from a number of merchants, transfer
            money to other users, become merchants, and earn money from their
            products. This application functions offline and uses cutting edge
            features with backward-compatibility. This was developed during an
            internship in just under 40 days, over 25k lines of hand-written
            code, all by myself. Unfortunately the source code is not open
            source. (Note: Lines of code is not a measure of complexity as much
            as it just gives perspective to the amount of effort dedicated
            towards a project)
          </p>
        </div>
        <hr className="c-hr-break" />
        <h2 className="c-sectionHeader">OSS Contributions</h2>
        <div className="c-section">
          <p>
            Most of my projects are open source and free to use. I'd love that
            people use and benefit from my creations. I'm currently working on a
            few projects that aim to provide a better developer experience and
            provide end-users a more friendly and easy browser environment.
            Those include:
          </p>
        </div>
        <div className="c-section">
          <h3 className="c-section-title">A11Y Read</h3>
          <p>
            This is a browser extension that makes it easy for the user to
            manipulate the page, controlling font attributes such as weight,
            spacing, colour, and size. It also allows the user to manipulate
            paragraphs for people that tend to get lost in huge blocks of text
            and the general look of the page.
          </p>
        </div>
        <div className="c-section">
          <h3 className="c-section-title">DOCX</h3>
          <p>
            This is a documentation tool that manages to automatically read
            JavaScript files, parse functions and methods along their
            parameters, and in connection to block comments preceding those
            functions. Having parsed those files, the tool manages to create
            connections between those parts of the files and create beautifully
            linked documentation pages.
          </p>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default About