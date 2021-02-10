// declare a variable that stores an array of strings
let months = ["January", "February", "March"];
console.log(months[0]);
console.log(months[1]);

let numbers = [1,2,3,4];
let combined = [1, "abc", "3", 3, true, false, 3.45]; 
console.log(combined[4]);
console.log(combined[100]);

// assign values into an array
combined[100] = "hundo";
combined[0] = "zero";
console.log(combined);
console.log(combined.length);

let hobbies = [];

// setters (aka. mutators) 
// .push() -- adds an item to the end of an array and returns the length of the array

hobbies.push("herping");

console.log(hobbies);
console.log(hobbies.length);

hobbies.push("extreme ironing");
hobbies.push("news-bombing");
hobbies.push("fork bending");

console.log(hobbies);

// .pop() --removes the last element in an array and return its value
hobbies.pop();
console.log(hobbies.pop());

// .shift() -- removes the first element in an array and returns its value
console.log(hobbies.shift());
console.log(hobbies);


// getters (aka. accessors)
// .concat() --concatenation - linking things together
let bigNumbers = [423423, 5436, 654778, 12324];
let smallNumbers = [1, 2, 3, 4];

let allNumbers = bigNumbers.concat(smallNumbers);
// console.log(allNumbers);
// console.log(smallNumbers);
// console.log(bigNumbers);

// .join() --creates a string from an array
let cakeLetters = ["c", "a", "k", "e"];
// console.log(cakeLetters.join("     :)     "));

// .indexOf() --gives the index of an given element/value
console.log(cakeLetters.indexOf("k"));
cakeLetters.push("k");
console.log(cakeLetters);
console.log(cakeLetters.indexOf("k"));

// create an array from a string
// .split()
let breadLetters = "bread".split();
console.log(breadLetters);


// array destructuring -- the undoing of structured data
let fullName = ["Mina", "Chuong"];

let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);

