import division, { addition, multiplication, subtraction, average as AVG } from "./utility.js";

const a = 6;
const b = 3;

const add = addition(a, b);
console.log(`Addition of ${a} and ${b} is ${add}`);

const sub = subtraction(a, b);
console.log(`Subtraction of ${a} and ${b} is ${sub}`);

const mul = multiplication(a, b);
console.log(`Multiplication of ${a} and ${b} is ${mul}`);

const div = division(a,b);
console.log(`Division of ${a} and ${b} is ${div}`);

const avg = AVG(a,b);
console.log(`Average of ${a} and ${b} is ${avg}`);


// import * as Utility from "./utility.js";
// const add = Utility.addition(a, b);