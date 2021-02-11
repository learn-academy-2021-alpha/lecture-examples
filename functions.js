// Functions
// 2/11/2021

// encapsulation - functions shouldn't rely on anything else in your code other than what the developer gives as an input

// function anatomy
// 1) declaration
// 2) name - camelCase, communicates intent
// 3) single equals sign
// 4) parentheses
// 5) fat arrow
// 6) curlies
// 7) return
// 8) invoke the function

// Basic function:
const makeCoffee = () => {
  return "Enjoy your coffee"
}
// can be called/invoked as many times as is useful
console.log(makeCoffee())
console.log(makeCoffee())
console.log(makeCoffee())
console.log(makeCoffee())
console.log(makeCoffee())
console.log(makeCoffee())


// Function with an argument:
const makeCoffee = (coffeeType) => {
  return `Enjoy your ${coffeeType}`
  // don't do this:
  // return `Enjoy your ${myCoffee}`
}
var myCoffee = "latte"
console.log(makeCoffee(myCoffee))
console.log(makeCoffee("mocha"))
console.log(makeCoffee("cappuccino"))
console.log(makeCoffee())


// Pseudo coding - writing out your process in plain english

// Challenge: Take a coffee type and size and return the price of order based on size

// Step by step process:
// Create a function that takes in two arguments: coffeeType and size (done)
// if the size is large, return a sentence that says "My coffeeType costs $5" (done)
// if the size is medium, return a sentence that says "My coffeeType costs $4" (done)
// if the size is small, return a sentence that says "My coffeeType costs $3" (done)
// if none of the above, return a error message (done)

const makeCoffee = (coffeeType, coffeeSize) => {
  if(coffeeSize === "large"){
    return `Your ${coffeeSize} ${coffeeType} costs $5.`
  } else if(coffeeSize === "medium"){
    return `Your ${coffeeSize} ${coffeeType} cost $4.`
  } else if(coffeeSize === "small"){
    return `Your ${coffeeSize} ${coffeeType} costs $3.`
  } else {
    return "Something went wrong."
  }
}
console.log(makeCoffee("latte", "large"))
console.log(makeCoffee("latte", "medium"))
console.log(makeCoffee("mocha", "medium"))
console.log(makeCoffee("banana", "medium"))
console.log(makeCoffee("black coffee", "small"))
console.log(makeCoffee("black coffee", 42))


// Function with taking uppercasing into consideration
const makeCoffee = (coffeeType, coffeeSize) => {
  let downCaseCoffee = coffeeSize.toLowerCase()
  if(downCaseCoffee === "large"){
    return `Your ${coffeeSize} ${coffeeType} costs $5.`
  } else if(downCaseCoffee === "medium"){
    return `Your ${coffeeSize} ${coffeeType} cost $4.`
  } else if(downCaseCoffee === "small"){
    return `Your ${coffeeSize} ${coffeeType} costs $3.`
  } else {
    return "Something went wrong."
  }
}
console.log(makeCoffee("latte", "LARGE"))
console.log(makeCoffee("latte", "Large"))
