// Using var, let, and const
var num = 10; // function-scoped
let str = "Hello"; // block-scoped
const isTrue = true; // block-scoped and cannot be reassigned

console.log("Before reassignment:");
console.log("var num:", num);
console.log("let str:", str);
console.log("const isTrue:", isTrue);

// Reassigning variables
num = 20;
str = "Hi";
// isTrue = false; // Uncommenting this will cause an error

console.log("After reassignment:");
console.log("var num:", num);
console.log("let str:", str);
