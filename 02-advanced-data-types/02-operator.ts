type Param = string | number | string[]
type Operation = 'Index' | 'Length' | 'Add'
type Operand = number

function operator(a: Param, b: Operation, c: Operand) {
  if (b === 'Index' && typeof a !== 'number') {
    return a[c]
  }
  if (b === 'Length' && typeof a !== 'number') {
    return a.length % c
  }
  if (b === 'Add' && typeof !Array.isArray(a)) {
    return Number(a) + c
  }
}

// function operator(a: Param, b: Operation, c: Operand) {
//   const isStringArray = (x: unknown): x is string[] =>
//     Array.isArray(x) && x.length > 0 && x.every((item) => typeof item === 'string')

//   if (b === 'Index' && (typeof a === 'string' || isStringArray(a))) {
//     return a[c]
//   }
//   if (b === 'Length' && (typeof a === 'string' || isStringArray(a))) {
//     return a.length % c
//   }
//   if (b === 'Add') {
//     if (typeof a === 'number') {
//       return a + c
//     }
//     if (typeof a === 'string' && !Number.isNaN(a)) {
//       return Number(a) + c
//     }
//   }
// }

console.log(operator(['First', 'Second', 'Third'], 'Index', 1))
// Second
console.log(operator('string', 'Index', 1))
// // t
console.log(operator(['Just', 'Two'], 'Length', 5))
// // 2
console.log(operator('short string1', 'Length', 5))
// // 3
console.log(operator('7', 'Add', 3))
// // 10
console.log(operator(11, 'Add', 3))
// // 14
