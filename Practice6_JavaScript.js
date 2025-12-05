// Create Array From Arguments
// Q1:
// Create a function createArray that takes 3 arguments and returns an array containing those three values.
// Run the function and print the result.
// Dynamic Number of Arguments

// Push Only Strings
// Q2:
// Create a function stringOnly that accepts any number of arguments, but returns an array containing only the arguments that are strings.

// Create Array of Squares
// Q3:
// Create a function squareNumbers that accepts numbers as arguments and returns an array of each number squared.
// Example:
// squareNumbers(2, 3, 4) → [4, 9, 16]



// Filter Even Numbers
// Q4:
// Create a function getEvenNumbers that accepts numbers as arguments and returns an array containing only even numbers.


// Create Array of Names
// Q5:
// Create a function collectNames that accepts name arguments and returns an array of names in uppercase.
// Example:
// collectNames("sid", "raj") → ["SID", "RAJ"]



// Convert Arguments Into Objects
// Q6:
// Create a function makeUser that takes 3 arguments: name, age, city.
// Return an array containing 1 object like:
// [
//   { name: "Sid", age: 22, city: "Delhi" }
// ]


// Mix values, return only numbers
// Q7:
// Create a function addTen that takes any number of arguments and returns an array where each number is increased by 10.



// Function with default values
// Q8:
// Create a function createFruitArray where if no arguments are passed, it returns ["apple", "banana"].
// If arguments are passed, return those arguments as an array.1Create Array From Arguments



//ANSWER:

// question 1:
function createArr(a, b, c) {
  a= [a, b, c];
  return a;
}
console.log(createArr(1, "aish", true));

// question 2:
function Onlystring(...args) {
 b= args.filter(element => typeof element === "string");
 return b;
}
console.log(Onlystring(10, "hello", true, "js", 55));

// question 3:
function square(...args) {
  return args.map(element => element * element);
}
console.log(square(1, 2, 3, 4, 5));

// question 4:
function arrayeve(...args) {
     let result= args.filter(elements => elements%2 === 0);
     return result;
}
console.log(arrayeve(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// question 5:
function names(...args) {
  let name= args.map(element => element.toUpperCase());
  return name;
}
console.log(names("a", "b", "c"));

// question 6:
function tnames(name,age,city){
    let res= [{name,age,city}];
    return res;
}
console.log(tnames("Aish", 18, "DPM"));

// question 7:
function addTen(...args) {
 Add= args.filter(element => typeof element === "numbers" ).map(elements => elements+10);
 return Add;
}
console.log(addTen(5, "abc", 20, true, 50));

// question 8:
function createFruitArray(...args) {
  if (args.length === 0) {
    return ["apple", "banana"];
  }
  return args;
}
console.log(createFruitArray()); 
console.log(createFruitArray("mango", "kiwi"));