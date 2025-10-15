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

console.log(Math); // Object[Math]{}
