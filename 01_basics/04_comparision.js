// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // output => true //JS automatically converts "2" into number

// typescript doesnt allow comparision of two different datatypes

console.log("02" > 1); // output => true

console.log(null > 0); // output => false / sometimes null is converted to NaN and sometimes to 0
console.log(null == 0); // output => false
console.log(null >= 0); // output => true

console.log(undefined == 0); // output => false
console.log(undefined > 0); //output => false
console.log(undefined < 0); // output => false

// ** Strict Check **
// === // checks the datatypes of values as well

console.log("2" === 2); // output =>
