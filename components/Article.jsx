import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const ArticleHeader = ({ title, date, path, tags }) => (
	<div>
		<span>{date}</span>
		<span> — </span>
		<span>
			<a
				href={`https://twitter.com/intent/tweet?text=${title}&url=https://iamnabil.netlify.app${path}&hashtags=${tags}`}
			>
				Tweet This
			</a>
		</span>
		<h1>{title}</h1>
	</div>
)

const ArticleBody = ({ frontmatter, html, fields }) => (
	<article>
		<ArticleHeader {...frontmatter} {...fields} />
		<ReactMarkdown allowDangerousHtml>{html}</ReactMarkdown>
	</article>
)

export default ArticleBody
