export function dateFormat(date: string) {
  const [year, month, day] = date.split('-')
  const d = new Date()
  d.setFullYear(+year)
  d.setMonth(+month - 1)
  d.setDate(+day)

  return d.toLocaleDateString(undefined, {
    day: '2-digit',
    year: 'numeric',
    month: '2-digit',
  })
}
