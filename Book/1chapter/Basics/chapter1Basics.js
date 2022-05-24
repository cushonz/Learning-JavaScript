// Use double slashes to comment in JavaScript!


console.log("hi");

// This declares a variable named x
let x;

// Assign the value 4 to x
x = 4;

// JavaScript supports a multitude of types like:
x = 1; // int
x = 0.01 // Real
x = "hello friend :), please enjoy your visit" // Strings (can also use 'single quotes')
x = true; // Boolean
x = null; // These are special values
x = undefined;

/* Object notation in JavaScript 

The object datatype is an extremely important component of 
JavaScript. Objects are a collection of name/value pairs
*/
let car = { // Object must be enclosed in curly braces
    make: "Subaru",
    model: "WRX",
    year: 2002,
    engine: "EJ25",
    displacement: 2.0,
    bodyStyle: "Wagon",
    horsePower: 260
}

console.log(car.engine); // Access via object.<field> notation

console.log(car["make"]); // Fields can also be accessed using this notation

car.make = "Toyota"; // Overrwite the make field

let numbers = [1,2,3,4];// Array notation in JavaScript

numbers[0] // Access array by index

let empty = [] // Creating an empty array with no elements

empty.length // Returns array length

let points = [
    {x: 0, y: 0},
    {x: 0, y: 1}
];

// Math in JavaScript

3 + 2
3 - 2
3 * 2

//Supported arith operators
let i = 0;
i++; // => 1
i--; // => 0
i += 2 // => 2

x // variable names are also considered exressions

let n = 2, y = 3;

n === y // => false
n !== y // => true
n < y // less than
n <= y // less than or equal to
n > y // greater than

// String can be compare using ===
let stringX = "this", stringY = "that";

console.log(stringX === stringY);

