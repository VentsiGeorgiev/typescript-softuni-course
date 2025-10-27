let firstName: string = 'john'
console.log(firstName)

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Down)

let value: any = 1
value = 'smith'
value = false

function init(s: unknown): string {
  // won't work
  // console.log(s.length)
  if (typeof s === 'string') {
    console.log(s.length)
  }
  return 'started at...'
}
init('start')

function optionalParams(firstName: string, lastName: string, age?: number) {
  console.log(`${firstName} ${lastName} ${age}`)
}
optionalParams('john', 'smith')
optionalParams('john', 'smith', 30)
