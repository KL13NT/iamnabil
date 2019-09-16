import React, { Fragment } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.css";
import styles from "./index.module.css";
import "../styling/main.styl";

import { PostList } from '../components/PostList'

export default ({ pageContext: { edges } }) => {
  return (
    <Layout>
      <SEO
        title="Nabil Tharwat - Blog"
        description="Welcome to my blog! I post technically helpful stuff!"
        lang="en-gb"
      />
      <nav className=".o-navigation">
        <Link to="/about">About</Link>
      </nav>
      <div className={styles.header}>
        <h1>Nabil Tharwat</h1>
        <p>
          I'm a software engineer and mentor based in Cairo. I blog about
          different topic that benefit students on their journey to becoming
          software engineers.
        </p>
        <div className={styles.socialContainer}>
          <a
            className={styles.socialLink}
            href="https://twitter.com/Nabil_Tharwat16"
          >
            <img src="twitter.svg" alt="Twitter Link Icon" />
          </a>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/i-am-nabil"
          >
            <img src="linkedin.svg" alt="LinkedIn Link Icon" />
          </a>
          <a className={styles.socialLink} href="https://github.com/KL13NT">
            <img src="github-logo.svg" alt="GitHub Link Icon" />
          </a>
          <a
            className={styles.socialLink}
            href="mailto:nabil.tharwat@outlook.com"
          >
            <img src="mail.svg" alt="Email Link Icon" />
          </a>
          <a
            className={styles.socialLink}
            href="https://docs.google.com/document/export?format=pdf&amp;id=1VL4_iTKO712R-H7S5_3_PkuG1ed97eoIJUMjo9T9noE"
          >
            <img src="cv.svg" alt="Resume Link Icon" />
          </a>
        </div>
      </div>
      <PostList edges={edges}/>
    </Layout>
  );
};
