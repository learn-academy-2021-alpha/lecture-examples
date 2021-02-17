// Higher Order Functions

// Built-in methods - console.log(), .toUpperCase(), .push(), .length, .includes(), .pop(), .join(), .catcat(), Math.floor(), .charAt()
// All built in methods act on a particular data type

// Iteration - loop, repeating a command until a condition is met (each!!!!)
// Data type - array


// Higher order functions - build in methods used for iteration, called on arrays

// .forEach()
// .map()
// .filter()



// .forEach()

// [2, 3, 4, 5].forEach((value, index) => {
//   console.log("valuex2:", value * 2)
//   console.log("index:", index)
// })

// same thing with silly argument names
// [2, 3, 4, 5].forEach((banana, apple) => {
//   console.log("valuex2:", banana * 2)
//   console.log("index:", apple)
// })


// .map()

// var myArray = [3, 4, 5, 6]

// var mappedArray = myArray.map(value => {
//   return value * 2
// })
// console.log(mappedArray)

// var mappedArray = myArray.map((currentValue, apple, ogArray) => {
//   return `${currentValue} is at the index of ${apple} and the array is ${ogArray}`
// })
// console.log(mappedArray)
//
// var mappedArray = myArray.map(value => {
//   if(value % 2 === 0){
//     return "even"
//   } else {
//     return "odd"
//   }
// })
// console.log(mappedArray)

//
// const evenOrOdd = (array) => {
//   return array.map(value => {
//     if(value % 2 === 0){
//       return "even"
//     } else if(value % 2 !== 0){
//       return "odd"
//     } else {
//       return "oops"
//     }
//   })
// }
// console.log(evenOrOdd([2, 3, 4, 5]))
// console.log(evenOrOdd([4, 4, 4, 5, 6]))

// const evenOrOdd = (array) => {
//   let mappedArray = array.map(value => {
//     if(value % 2 === 0){
//       return "even"
//     } else if(value % 2 !== 0){
//       return "odd"
//     } else {
//       return "oops"
//     }
//   })
//   return mappedArray
// }
// console.log(evenOrOdd([2, 3, 4, 5]))
// console.log(evenOrOdd([4, 4, 4, 5, 6]))


// .filter()

var myArray = [3, 4, 5, 6, 7, 8, 9]


// const onlyEvens = (array) => {
//   return array.filter(value => {
//     return value % 2 === 0
//   })
// }
// console.log(onlyEvens(myArray))



var myMixedArray = [5, 6, "hello", true, false, null, 8, 9, "yo", "7"]
// create function that returns only numbers
// look at each item in the array and determine if the data type is number

const onlyNumbers = (array) => {
  return array.filter(value => {
    return typeof value === "number"
  })
}
console.log(onlyNumbers(myMixedArray))

// create a function that returns only odd numbers
const onlyOddNumbers = (array) => {
  return array.filter(value => {
    return (value % 2 !== 0) && (typeof value === "number")
    // return (typeof value === "number") && (value % 2 !== 0)
  })
}
console.log(onlyOddNumbers(myMixedArray))



// map/filter - pseudo code key word: each
// map - returns an array the same length as the array it is acting on, pseudo code key words: do something to each item in an array
// filter - returns a subset of the array it is action on, pseudo code key word: make a decision about each item in an array
