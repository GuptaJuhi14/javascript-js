const score = 400 // JS automatically detects that the type is Number
// console.log(score); // output => 400

const balance = new Number(100) // type is specifically defined
// console.log(balance); // output => [Number: 100]

// console.log(balance.toString()); // output => 100
// console.log(balance.toString().length) // output => 3
// console.log(balance.toFixed(2)); // output => 100.00
// console.log(balance.toFixed(1)); // output => 100.0

const otherNumber = 23.8938

// console.log(otherNumber.toPrecision(3)); // output => 23.9
// console.log(otherNumber.toPrecision(2)); // output => 24
// console.log(otherNumber.toPrecision(1)); // output => 2e+1

// toLocaleString() method

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //output => 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //output => 10,00,000 / Indian Standard

// *** Maths ***

// Math.abs(-4), Math.round(4.6), Math.ceil(4.2), Math.floor(4.9), Math.min(3,5,8), Math.max(3,6,9)

console.log(Math.random()); // returns value Between 0 and 1
console.log((Math.random()*10)+1); // Between 1 and 10
console.log(Math.floor(Math.random()*10)+1) // floor rounds off to lowest value // gives one digit

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
// ** Formula **
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // max - min to get range and plus 1 to avoid 0 case / finally add min