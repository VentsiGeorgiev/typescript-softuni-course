// v1

function printDayOfWeek(number: number): string {
  enum DayOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  return DayOfWeek[number] || 'Error'
}

console.log(printDayOfWeek(0))
console.log(printDayOfWeek(5))
console.log(printDayOfWeek(-1))

// v2
enum DayOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function printDayOfWeekv2(number: DayOfWeek): string {
  return DayOfWeek[number] || 'Error'
}

console.log(printDayOfWeekv2(4))
// typescript complains this wont work
// Argument of type '-1' is not assignable to parameter of type 'DayOfWeek'
// console.log(printDayOfWeekv2(-1))
