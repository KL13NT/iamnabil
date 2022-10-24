export function formatDate(date, lang) {
	return new Date(date).toLocaleDateString(lang, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}
