// Higher Order Functions

// Built-in methods - console.log(), .toUpperCase(), .push(), .length, .includes(), .pop(), .join(), .catcat(), Math.floor(), .charAt()

// All built in methods act on a particular data type

// Iteration - loop, repeating a command until a condition is met (each!!!!)
// Data type - array


// Higher order functions - build in methods used for iteration, called on arrays

// there are many higher order functions, but these three are what will will focus on today:
// .forEach()
// .map()
// .filter()



// .forEach() - does something for each value in the array
// takes an argument of value, takes an optional argument of index

[2, 3, 4, 5].forEach((value, index) => {
  console.log("valuex2:", value * 2)
  console.log("index:", index)
})
// valuex2: 4
// index: 0
// valuex2: 6
// index: 1
// valuex2: 8
// index: 2
// valuex2: 10
// index: 3

// same thing with silly argument names
[2, 3, 4, 5].forEach((banana, apple) => {
  console.log("valuex2:", banana * 2)
  console.log("index:", apple)
})


// .map() - acts on arrays, returns an array the same length

var myArray = [3, 4, 5, 6]

// map requires the argument of value
var mappedArray = myArray.map(value => {
  return value * 2
})
console.log(mappedArray)

// map can have additional arguments of index and the original array
// it is determined by the order that the arguments are passed
var mappedArray = myArray.map((currentValue, index, ogArray) => {
  return `${currentValue} is at the index of ${index} and the array is ${ogArray}`
})
console.log(mappedArray)

// any logic can be passed into the map function
var mappedArray = myArray.map(value => {
  if(value % 2 === 0){
    return "even"
  } else {
    return "odd"
  }
})
console.log(mappedArray)

// wrapping the logic of map inside a custom function
const evenOrOdd = (array) => {
  return array.map(value => {
    if(value % 2 === 0){
      return "even"
    } else if(value % 2 !== 0){
      return "odd"
    } else {
      return "oops"
    }
  })
}
console.log(evenOrOdd([2, 3, 4, 5]))
console.log(evenOrOdd([4, 4, 4, 5, 6]))

// example with saving the mapped array as a variable and returning the array rather than the map function
const evenOrOdd = (array) => {
  let mappedArray = array.map(value => {
    if(value % 2 === 0){
      return "even"
    } else if(value % 2 !== 0){
      return "odd"
    } else {
      return "oops"
    }
  })
  return mappedArray
}
console.log(evenOrOdd([2, 3, 4, 5]))
console.log(evenOrOdd([4, 4, 4, 5, 6]))


// .filter() - acts on arrays, returns a subset of the original array

var myArray = [3, 4, 5, 6, 7, 8, 9]

// filter has a built in if/else statement
// it makes a decision about every item in the array
const onlyEvens = (array) => {
  return array.filter(value => {
    return value % 2 === 0
  })
}
console.log(onlyEvens(myArray))



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
    return value % 2 !== 0 && typeof value === "number"
    // return typeof value === "number") && value % 2 !== 0
  })
}
console.log(onlyOddNumbers(myMixedArray))



// map/filter - pseudo code key word: each
// map - returns an array the same length as the array it is acting on, pseudo code key words: do something to each item in an array
// filter - returns a subset of the array it is action on, pseudo code key word: make a decision about each item in an array
