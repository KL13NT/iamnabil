export function formatDate(date, lang) {
	return new Date(date).toLocaleDateString(lang, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}
