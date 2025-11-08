function isNonEmptyStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === 'string')
}

console.log(isNonEmptyStringArray({}))
console.log(isNonEmptyStringArray({ test: 'one' }))
console.log(isNonEmptyStringArray([]))
console.log(isNonEmptyStringArray(undefined))
console.log(isNonEmptyStringArray(null))
console.log(isNonEmptyStringArray([12, 23]))
console.log(isNonEmptyStringArray(['test', 1234]))
console.log(isNonEmptyStringArray(['a', 'b', 'c']))
