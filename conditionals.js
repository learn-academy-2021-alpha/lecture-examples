// Conditionals
// 2/10/2021

// Conditionals, decision trees, if/else statements


// Equality operator
// Returns a Boolean value
// Strict ===

var myNum = 42
console.log(myNum === 42)
console.log(myNum === 43)

// Type coersion ==
// does this work? yes, but don't
console.log(myNum == '42')

// Relational Operators
// Returns a Boolean value
// < > <= >=

console.log(4 < 8)
console.log(4 > 8)

// Logical Operators
// Returns a Boolean value
// Logical AND &&
console.log(5 > 4 && 7 > 9)

// Logical OR ||
console.log(5 > 4 || 7 > 9)

// Negation
// bang operator !

console.log(!true)


// If/Else

if(true){
  console.log("this is true!")
}
// if true, execute the code in the {}

if(false){
  console.log("this is true!")
}
// if false, no nothing


if(false){
  console.log("this is true!")
} else {
  console.log("here is the else")
}
// if false, move to the catch all statement


if(true){
  console.log("this is true!")
} else {
  console.log("here is the else")
}

// our first program!
// var myCohort = "alpha"
// var myCohort = "bravo"

if(myCohort === "alpha"){
  console.log("hey Alpha class")
} else {
  console.log("hey learn student")
}

// Sring iterpolation - backticks wrap the entire string, ${} will escape the string and we can write JavaScript code
var num1 = 42
var num2 = "hello"

if(num1 < num2){
  console.log(`The outcome is that ${num1} is less than ${num2}.`)
} else if(num1 > num2){
  console.log(`The outcome is that ${num1} is greater than ${num2}.`)
} else if(num1 === num2){
  console.log(`The numbers ${num1} and ${num2} are the same.`)
} else {
  console.log("Something went wrong")
}
