import React, { Fragment } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navbar from "../components/Navbar";


import "../styling/main.styl";

import { PostList } from '../components/PostList'
import { Social } from '../components/Social'

//TODO: UNIFY FONT-FAMILY ATTRIBUTES
export default ({ pageContext: { edges } }) => {
  return (
    <>
      <Navbar about={true} home={false}/>
      <Layout>
        <SEO
          title="Nabil Tharwat - Blog"
          description="Welcome to my blog! I post technically helpful stuff!"
          lang="en-gb"
        />
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
