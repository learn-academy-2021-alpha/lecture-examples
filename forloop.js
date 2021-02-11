// increment operator
for (let i=0; i<5; i++) {
  console.log(i);
}

// decrement operator
for (let i=10; i>0; i--) {
  console.log(i);
}

// BEWARE: infinite loop
// for (let i=1; i>0; i++) {
//   console.log(i);
// }

// no execution
for (let i=0; i>0; i++) {
  console.log(i);
}

let letters = "Churro";

for (let i=0; i<letters.length; i++) {
  console.log(letters[i]);
}

let falalas = ["fa", "la", "laaaa"];

for (let i=0; i<falalas.length; i++) {
  console.log(falalas[i]);
}

let numbers = ["cat", "dog", "tree", 0, 100, 5, 0, 0, 0];
          //   20 < 9
for (let i=0; i<numbers.length; i++) {
  if (numbers[i] !== "cat") { // numbers[0] !== 100 --> true
    console.log(numbers[i]); // numbers[0] --> "cat"
  }
}
         //    0  1  2  3  
let numbers = [1, 2, 3, 4]; // length: 4

for (let i=0; i < numbers.length; i++) {
  console.log(numbers[i] * 3);
}






