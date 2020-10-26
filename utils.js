export function formatDate(date, lang) {
	return new Date(date).toLocaleDateString(lang, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}

export function sortByDate(post1, post2) {
	return post1.date > post2.date ? 1 : -1
}
