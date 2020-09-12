import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

import { PostList } from '../components/PostList'

const Tags = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark

	const tagHeader = `Posts tagged with "${tag}"`
	const description = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`

	return (
		<>
			<SEO description={description} path={`/tags/${tag}`} title={tagHeader} />
			<Navbar about={true} home={true} />
			<Layout>
				<div>
					<h1>{tagHeader}</h1>
					<p>{description}</p>
					<PostList edges={edges} />
				</div>
			</Layout>
		</>
	)
}

export default Tags

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
						description
						lang
						tags
						date(formatString: "MMMM DD, YYYY")
					}
					fields {
						readingTime {
							minutes
						}
					}
				}
			}
		}
	}
`
