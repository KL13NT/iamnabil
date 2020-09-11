import React from 'react'

import { Post } from './Post'

export const PostList = ({ edges }) => (
	<ul className='c-postList'>
		{edges.map(({ node: { frontmatter, fields } }) => (
			<Post {...frontmatter} fields={fields} />
		))}
	</ul>
)
