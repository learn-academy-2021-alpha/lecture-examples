class Food {
  constructor() {
    this.isEdible = true;
    this.isGrowing = false;
  }

  grow() {
    this.isGrowing = true;
  }
}

class Fruit extends Food {
  constructor(type) {
    super();
    this.hasSeeds = true;
    this.isRipened = false;
    this.type = type;
  }
  
  ripen() {
    this.isRipened = true;
  }

  logRipenedState() {
    if (this.isRipened) {
      console.log("I am ripened");
    } else {
      console.log("I have not ripened!");
    }
  }
}

class Banana extends Fruit {
  constructor(type) {
    super(type);
    this.isPeeled = false;
  }
}

// let fruit = new Fruit("big"); 
// console.log(fruit);
// console.log("make it grow");
// fruit.grow();
// console.log(fruit);

let banana = new Banana("banana");
console.log(banana);
// banana.ripen();
// banana.logRipenedState();