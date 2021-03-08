import React from 'react'

import { Post } from './Post'

export const PostList = ({ posts }) => (
	<ul className='mt-12'>
		{posts.map(post => (
			<React.Fragment key={post.path}>
				<Post {...post} key={post.frontmatter.path} />
				<hr />
			</React.Fragment>
		))}
	</ul>
)
