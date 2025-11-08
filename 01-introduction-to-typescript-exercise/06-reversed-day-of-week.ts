function reversedDayOfWeek(dayOfWeek: string): string | number {
  enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  return dayOfWeek in DaysOfWeek ? DaysOfWeek[dayOfWeek as keyof typeof DaysOfWeek] : 'error'
}

console.log(reversedDayOfWeek('Monday'))
console.log(reversedDayOfWeek('Friday'))
console.log(reversedDayOfWeek('invalid'))
