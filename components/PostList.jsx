import React from 'react'

import { Post } from './Post'

export const PostList = ({ posts }) => (
	<ul className='c-postList'>
		{posts.map(post => (
			<Post {...post} />
		))}
	</ul>
)
