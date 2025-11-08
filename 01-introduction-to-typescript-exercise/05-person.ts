function person(
  id: number,
  fName: string,
  lName: string,
  age: number,
  mName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
): (string | number)[] {
  const name = mName ? `${fName} ${mName} ${lName}` : `${fName} ${lName}`
  const personHobbies = hobbies && hobbies.length > 0 ? hobbies.join(', ') : '-'
  const personWorkInfo = workInfo ? `${workInfo[0]} -> ${workInfo[1]} ` : '-'
  return [id, name, age, personHobbies, personWorkInfo]
}

console.log(
  person(
    12,
    'Eliot',
    'Des',
    20,
    'Braylen',
    ['tennis', 'football', 'hiking'],
    ['SalesConsultant', 2500]
  )
)
console.log(`Expected output: [12, 'Eliot Braylen Des', 20, 'tennis, football, hiking', 'Sales Consultant ->
2500']`)
console.log(person(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))
console.log(`Expected output: [20, 'Mary Trent', 25, 'fitness, rowing', '-']`)
console.log(person(21, 'Joseph', 'Angler', 28))
console.log(`Expected output: [21, 'Joseph Angler', 28, '-', '-']`)
console.log(person(21, 'Kristine', 'Neva', 23, ''))
console.log(`Expected output: [21, 'Kristine Neva', 23, '-', '-']`)
