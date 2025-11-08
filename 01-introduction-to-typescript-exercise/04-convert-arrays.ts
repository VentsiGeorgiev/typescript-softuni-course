function convertArray(array: string[]): [string, number] {
  const string = array.join('')
  const length = string.length
  return [string, length]
}
console.log(convertArray(['How', 'are', 'you?']))
