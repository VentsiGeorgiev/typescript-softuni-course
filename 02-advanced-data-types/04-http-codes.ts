type TextCodes = {
  code: 200 | 201 | 301
  text: string
}
type SliceTextCodes = {
  code: 400 | 404 | 500
  text: string
  printChars?: number
}

function printHttpResponse(response: TextCodes | SliceTextCodes) {
  switch (response.code) {
    case 200:
    case 201:
    case 301:
      return response.text
    case 400:
    case 404:
    case 500:
      return response.text.slice(0, response.printChars)
    default:
      return 'No matching code found'
  }
}

// ### Variant 2
// type HttpResponse = {
//   code: number
//   text: string
//   printChars?: number
// }

// function printHttpResponse({ code, text, printChars }: HttpResponse) {
//   if (printChars) {
//     return text.slice(0, printChars)
//   } else {
//     return text
//   }
// }

// console.log(printHttpResponse({ code: 200, text: 'OK' }))
// console.log(printHttpResponse({ code: 201, text: 'Created' }))
// console.log(printHttpResponse({ code: 400, text: 'Bad Request', printChars: 4 }))
// console.log(printHttpResponse({ code: 404, text: 'Not Found' }))
// console.log(printHttpResponse({ code: 404, text: 'Not Found', printChars: 3 }))
// console.log(printHttpResponse({ code: 500, text: 'Internal Server Error', printChars: 1 }))
