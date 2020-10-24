import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const ArticleHeader = ({ title, date, path, tags }) => (
	<div>
		<h1>{title}</h1>
		<div>
			<p>{date}</p>
			<a
				href={`https://twitter.com/intent/tweet?text=${title}&url=https://iamnabil.netlify.app${path}&hashtags=${tags}`}
			>
				Tweet This
			</a>
		</div>
	</div>
)

const ArticleBody = ({ frontmatter, html, fields }) => (
	<article>
		<ArticleHeader {...frontmatter} {...fields} />
		<ReactMarkdown allowDangerousHtml>{html}</ReactMarkdown>
	</article>
)

export default ArticleBody
