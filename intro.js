// Intro to JavaScript
// 2/9/2021

// Number

// Whole number integer
42

// Float
3.14

// Mathematical operations
console.log(4 + 4)
console.log(8 - 4)
console.log(8 * 4)
console.log(9 / 3)

// Exponents
console.log(9 ** 3)

// Modulo
console.log(7 % 2)
console.log(6 % 3)


// String - collection of characters in quotations
"hello"
"6"
"anything I want"
console.log("hello")

// console.log(hello)
// This doesn't work ^^


// Boolean - true and false
console.log(true)
console.log(false)

// Null - equal to nothing else
console.log(null)

// Symbol - unique key

// Undefined - variable that has been declared but not given a value

// Variables

// Declaring variables:
// var - global scope, anything in a file
// let - local scope, lives inside the mini-programs we write
// const - protects a variable from being reassigned

// Name a variable - communicate intent, camel cased
var helloAlphaClass = "hello Alpha!"
console.log(helloAlphaClass)

// Variables can be reassigned
helloAlphaClass = 42
console.log(helloAlphaClass)

// Using const and getting an error on the reassignment
const helloAlphaClass2 = "hello Alpha!"
console.log(helloAlphaClass)

helloAlphaClass2 = 42
console.log(helloAlphaClass)

//
// Built In Methods - snippets of code functionality

// Length - is a property of a string
"hello".length
console.log("hello".length)
console.log("hello alpha".length)

var myCohort = "alpha"
console.log(myCohort.length)

console.log(77777.length)
// this doesn't work ^^

// Includes - does this value exist in the character set
console.log("hello alpha".includes("a"))
// returns the Boolean true
console.log("hello alpha1".includes("1"))
// returns the Boolean true

// console.log(77771.includes(1))
// this doesn't work, includes is a string method ^^

// CharAt (character at) - what value exists at this particular index

console.log("hello".charAt(0))
// returns "h"
console.log("hello".charAt(1))
// returns "e"
console.log("he llo".charAt(2))
// returns a " "

// console.log("hello".charAt(7))
// returns nothing

// Strings are indexed (more specifically zero indexed)
// Index describes the location of each character

// "hello"
// 0, 1, 2, 3, 4
// index 0 - "h"
// index 1 - "e"
// index 2 - "l"
// index 3 - "l"
// index 4 - "o"
