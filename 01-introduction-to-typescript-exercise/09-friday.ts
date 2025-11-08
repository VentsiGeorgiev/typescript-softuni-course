enum MonthName {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

function printFriday13th(values: unknown[]): string {
  const months = Object.values(MonthName) as MonthName[] // ['January', ..., 'December']
  const out: string[] = []

  for (const value of values) {
    if (value instanceof Date && !isNaN(value.getTime())) {
      if (value.getDate() === 13 && value.getDay() === 5) {
        const month = months[value.getMonth()]
        const year = value.getFullYear()
        out.push(`13-${month}-${year}`)
      }
    }
  }

  return out.join('\n')
}

console.log(
  printFriday13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
  ])
)

console.log(
  printFriday13th([
    new Date(2024, 0, 13),
    new Date(2024, 1, 13),
    new Date(2024, 2, 13),
    new Date(2024, 3, 13),
    new Date(2024, 4, 13),
    new Date(2024, 5, 13),
    new Date(2024, 6, 13),
    new Date(2024, 7, 13),
    new Date(2024, 8, 13),
    new Date(2024, 9, 13),
    new Date(2024, 10, 13),
    new Date(2024, 11, 13),
  ])
)
