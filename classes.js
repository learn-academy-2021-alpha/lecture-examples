class Squirrel {
  constructor(numberOfNuts) {
    this.numberOfNuts = numberOfNuts;
    // console.log("I am in the constructor");
  }

  findANut() {
    this.numberOfNuts++;
  }

  hideANut() {
    this.numberOfNuts--;
  }
}

let scientistSquirrel = new Squirrel(10);
let pirateSquirrel = new Squirrel(15);
let surferSquirrel = new Squirrel(20);

// console.log(scientistSquirrel);
// console.log(pirateSquirrel);
// console.log(surferSquirrel);
// surferSquirrel.findANut();
// surferSquirrel.findANut();
// surferSquirrel.findANut();
// surferSquirrel.findANut();
// surferSquirrel.findANut();
// surferSquirrel.findANut();
// surferSquirrel.hideANut();
// console.log(`Surfer squirrel has ${surferSquirrel.numberOfNuts} nuts`);
// console.log(pirateSquirrel);
// pirateSquirrel.findANut();
// console.log(pirateSquirrel);
// console.log(surferSquirrel);

// Pets {name: "Churro", age: 1, type: "dog"}
class Pet {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
}

// instances of Pet
let churro = new Pet("Churro", 1, "dog");
let fluffy = new Pet("Fluffy", 8, "dog");
let biscuit = new Pet("Biscuit", 4, "cat");
let gravy = new Pet("Gravy", 4, "cat");

// instances can be used just like JS objects
let listOfPets = [churro, fluffy, biscuit, gravy];
console.log(listOfPets);

