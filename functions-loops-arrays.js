// Functions, Loops, Arrays, oh my!


var coffees = ["black coffee", "latte", "mocha", "cappuccino", "espresso"]
var teas = ["chai", "earl gray", "green", "herbal"]


// Create a function that take a set of data and add each item to a sentence

// input - array, array of strings
// output - array ["I would like a black coffee.", "I would like a latte.", "I would like a mocha.", "I would like a cappuccino."]

// create a function that takes in an array (done)
// access each item in the array (done)
// modify the string of each item (done)
// return a new array (done)

const coffeeOrder = (array) => {
  let orders = []
  for(let i=0; i<array.length; i++){
    orders.push(`I would like a ${array[i]}.`)
  }
  return orders
}
console.log(coffeeOrder(coffees))
console.log(coffeeOrder(["black coffee", "latte", "mocha", "cappuccino"]))
console.log(coffeeOrder(teas))
console.log(coffeeOrder(["beer", "wine"]))



// create a function that takes in an array of numbers
// return an array with all the numbers multiplied by two

var myNums = [2, 3, 4, 5, 6, 7]

// input - array [2, 3, 4, 5, 6, 7]
// output - array [4, 6, 8, 10, 12, 14]

const doubler = (banana) => {
  let storageArray = []
  for(let i=0; i<banana.length; i++){
    storageArray.push(banana[i] * 2)
  }
  return storageArray
}
console.log(doubler(myNums))
console.log(doubler([3, 4, 5]))
console.log(doubler([8, 9, 10, 20, 30]))


// return only odd numbers
const onlyOdds = (array) => {
  let storageArray = []
  for(let i=0; i<array.length; i++){
    if(array[i]%2 === 0){
      storageArray.push(array[i])
    }
  }
  return storageArray
}
console.log(onlyOdds(myNums))
console.log(onlyOdds([3, 4, 5]))
console.log(onlyOdds([8, 9, 10, 20, 30]))
