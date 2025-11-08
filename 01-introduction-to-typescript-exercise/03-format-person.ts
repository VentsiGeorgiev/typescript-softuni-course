function greetPerson(data: [string, number]): string {
  return `Hello my name is ${data[0]} and my age is ${data[1]}`
}
console.log(greetPerson(['john', 40]))
console.log(greetPerson(['smith', 22]))
// ts errors
// console.log(greetPerson(['smith', 22, 'john']))
// console.log(greetPerson(['smith', '22']))
// console.log(greetPerson([]))
