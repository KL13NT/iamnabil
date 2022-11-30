const TWITTER_HANDLE = 'kl13nt'

export function formatDate(date, lang) {
	return new Date(date).toLocaleDateString(lang, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

export function getTwitterSearchPath(path) {
	return `https://twitter.com/search?q=${encodeURIComponent(
		`"https://iamnabil.netlify.app/${path}"`
	)}%20(from%3A${TWITTER_HANDLE})%20filter%3Alinks%20-filter%3Areplies&src=typed_query`
}

export function getTwitterPath(title, path) {
	return `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
		`https://iamnabil.netlify.app/${path}`
	)}&via=${TWITTER_HANDLE}`
}
