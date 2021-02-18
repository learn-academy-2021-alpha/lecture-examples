// JavaScript Objects
// 2/17/2021


// variable can hold a primitive data type
var myNum = 7

// variable can hold a collection of data
var myArray = [3, 4, 5, 6, [5, 6, 7]]
console.log(myArray[1])
// can reference the variable and a specific index to get back the value


// Objects are collections of key:value pairs
// keys - data type symbol
// value - any kind of JavaScript data type
// {key: "value"}
// {banana: "this is the banana value"}


// can store many items separated by commas
// {key1: "value1", key2: "value2", key3: "value3"}

// can be stored as variables
var myObject = {key1: "value1", key2: "value2", key3: "value3"}
console.log(myObject)

// dropped vertically to make it easier to read
var myObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}
// reference the value by dot notation
console.log(myObject.key1)
// "value1"
console.log(myObject.key3)
// "value3"

// object with static data
var breakfast = {
  item1: "eggs",
  item2: "bacon",
  item3: "toast",
  item4: {
    fruit1: {
      banana1: "whole",
      banana2: "sliced"
    },
    fruit2: "blueberry",
    fruit3: "strawberry"
  }
}
console.log(breakfast.item4.fruit3)
// "strawberry"

// console.log(breakfast.fruit3)
// this returns undefined ^^

console.log(breakfast.item4.fruit1.banana1)
// "whole"
console.log(breakfast.item4.fruit1.banana2)
// "sliced"


// Destructuring - saving the key as a special variable that is assigned the path through the object

let { banana1 } = breakfast.item4.fruit1
// can add multiple keys as long as the path is the same
let { banana1, banana2 } = breakfast.item4.fruit1
let { item3 } = breakfast

console.log(banana1)
console.log(banana2)
console.log(item3)

// another example
let { fruit2, fruit3, fruit1 } = breakfast.item4
console.log(fruit1.banana1)
console.log(fruit1.banana2)
console.log(fruit2)
console.log(fruit3)


// Object are the intersection between data and behavior

// objects can contain methods (behavior)
// method - functions that belongs to an object
// this - keyword in JS that references the object inside of the object itself

var myNumsObj = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
console.log(myNumsObj)
// {num1: 5, num2: 10, num3: 15, addUp: [Function: addUp]}
console.log(myNumsObj.num1)
// 5
console.log(myNumsObj.addUp())
// 30
console.log(myNumsObj.addUp)
// without calling the function it just returns the value with the key
// [Function: addUp]

// Example with more logic in the method
var myNumsObj = {
  num: [2, 3, 4],
  addUp: function(){
    let anchor = 0
    this.num.map(value => {
      return anchor += value
    })
    return anchor
  }
}
console.log(myNumsObj.addUp())


// Another way to interact with objects:

// Array of objects

var pets = [
  {
    name: "Fluffy",
    age: 8,
    type: "dog"
  },
  {
    name: "Churro",
    age: 1,
    type: "dog"},
  {
    name: "Gravy",
    age: 4,
    type: "cat"
  },
  {
    name: "Biscuits",
    age: 4,
    type: "cat"
  }
]

console.log(pets.length)
// 4
console.log(pets[0])
// { name: "Fluffy", age: 8, type: "dog" }
console.log(pets[0].name)
// "Fluffy"
console.log(pets[0].age)
// 8


// Example: create a function that takes in an array of pet objects and returns an array of the pet names

const petNames = (array) => {
  console.log("array:", array)
  return array.map(object => {
    console.log("object:", object)
    return object.name
  })
}
console.log(petNames(pets))
// [ 'Fluffy', 'Churro', 'Gravy', 'Biscuits' ]

// Example: create a function that takes in an array of pets and returns the names of the pets who are 4 years old
// filter!

const aged4 = (array) => {
  let petsWhoAre4 = array.filter(object => {
    return object.age === 4
  })
  return petsWhoAre4.map(object => {
    return `${object.name} is aged ${object.age}.`
  })
}
console.log(aged4(pets))
// [ 'Gravy is aged 4.', 'Biscuits is aged 4.' ]



// Extra info for later:

var marsdata = {
  // strings as keys rather than symbols
  "id": 102693,
  "sol": 1000,
  "camera": {
    "id": 20,
    "name": "FHAZ",
    "rover_id": 5,
    "full_name": "Front Hazard Avoidance Camera"
  },
  "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
  "earth_date": "2015-05-30",
  "rover": {
    "id": 5,
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active"
  }
}

// dot notation
console.log(marsdata.camera)
// nested objects
console.log(marsdata.camera.name)
// bracket notation (same thing as dot notation)
console.log(marsdata["camera"])
// nested objects
console.log(marsdata["camera"]["name"])
