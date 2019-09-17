import React from 'react'
import { Link } from 'gatsby'


export const PostList = ({ edges }) => (
  <ul className="c-postList">
    {edges.map(({ node: { frontmatter } }) => {
      const languageClass = frontmatter.lang === 'ar' ? 'c-rightToLeft' : null
      return (
        <>
          <li className={languageClass}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
            <p className={languageClass}>{frontmatter.description}</p>
            {frontmatter.lang === 'ar' ? (
              <h5>
                {Math.ceil(parseInt(frontmatter.length) / 150)} دقائق من القرائة
              </h5>
            ) : (
              <h5>
                {Math.ceil(parseInt(frontmatter.length) / 150)} min read
              </h5>
            )}
            {frontmatter.tags ? (
              <ul className="o-tagsContainer">
                {frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`tags/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        </>
      )
    })}
  </ul>
)
