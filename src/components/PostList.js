import React from 'react'
import { Link } from 'gatsby'


export const PostList = ({ edges }) => (
  <ul className="c-postList">
    {
      edges.map(({ node: { frontmatter } }) => {
        const languageClass = frontmatter.lang === `ar` ? `u-rightToLeft` : null
        const time = Math.ceil(parseInt(frontmatter.length) / 150)
        return (
          <li key={frontmatter.title}>
            <Link to={frontmatter.path} className={languageClass}>{frontmatter.title}</Link>
            <p className={languageClass}>{frontmatter.description}</p>
            <h5> Posted {frontmatter.date} . {time} min read </h5>
            {
              frontmatter.tags ?
                (
                  <div className="o-tagsContainer">
                    {
                      frontmatter.tags.map(tag => (
                        <Link to={`tags/${tag}`} key={tag + Math.random()}>{tag}</Link>
                      ))
                    }
                  </div>
                ) 
                : null
            }
          </li>
        )
      })}
  </ul>
)
