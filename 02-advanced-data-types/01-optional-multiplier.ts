type Input = number | string

// ### Variant 1
function multiply(a?: Input, b?: Input, c?: Input) {
  return Number(a || 1) * Number(b || 1) * Number(c || 1)
}

// ### Variant 2
// function multiply(a?: Input, b?: Input, c?: Input): number {
//   let total = 1
//   if (a) {
//     typeof a === 'string' ? (total = total * Number(a)) : (total = total * a)
//   }
//   if (b) {
//     typeof b === 'string' ? (total = total * Number(b)) : (total = total * b)
//   }
//   if (c) {
//     typeof c === 'string' ? (total = total * Number(c)) : (total = total * c)
//   }
//   return total
// }

console.log(multiply('3', 5, '10'))
console.log(multiply('2', '2'))
console.log(multiply(undefined, 2, 3))
console.log(multiply(7, undefined, '2'))
console.log(multiply(0, 2, 5))
console.log(multiply())
