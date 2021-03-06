import React from 'react'

import { Post } from './Post'

export const PostList = ({ posts, filter = 'blog' }) => (
	<ul className='mt-12'>
		{posts.map(post => (
			<React.Fragment key={post.frontmatter.path}>
				<Post {...post} key={post.frontmatter.path} filter={filter} />
				<hr />
			</React.Fragment>
		))}
	</ul>
)
