import React, { Fragment } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navbar from "../components/Navbar";


import "../styling/main.styl";

import { PostList } from '../components/PostList'
import { Social } from '../components/Social'

export default ({ pageContext: { edges } }) => {
  return (
    <>
      <SEO
        title="Nabil Tharwat | Blog" description="I build refreshing websites and take pride in providing an exceptional browsing experience through using the latest accessibility tools available to make my products as accessible and user-friendly as possible."
      />
      <Navbar about={true} home={false}/>
      <Layout>
        <div className='o-header'>
          <h1>Nabil Tharwat</h1>
          <p>
            I'm a software engineer and mentor based in Cairo. I blog about
            different topic that benefit students on their journey to becoming
            software engineers.
          </p>
          <Social/>
        </div>
        <PostList edges={edges}/>
      </Layout>
    </>
  );
};
