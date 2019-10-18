export const convertEnglishDate = date => {
  const arabicNumbers = `۰١٢٣٤٥٦٧٨٩`
  const englishMonths = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ]
  const arabicMonths = `يناير فبراير مارس ابريل مايو يونيو يوليو اغسطس سبتمبر اكتوبر نوفمبر ديسمبر`.split(` `)
  const splitDate = date.split(` `)
  const arabicMonthFromEnglish = arabicMonths[englishMonths.indexOf(splitDate[0])]

  const replaced = 
    splitDate
      .slice(1)
      .toString()
      .replace(/[0-9]/g, w => {
        return arabicNumbers[+w] //converts to integer
      })
      .replace(`,`, ``)
      .split(`,`)

  return `${replaced[0]} ${arabicMonthFromEnglish}, ${replaced[1]}`
}
