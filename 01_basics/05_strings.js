const name = "Gupta"
const repoCount = 50

// console.log(name + repoCount + "Value");

// STRING INTERPOLATION

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Gupta") // object

console.log(gameName[0]); // output => G
console.log(gameName.__proto__); // output => {}

console.log(gameName.length); // output => 5
console.log(gameName.toUpperCase()); // output => GUPTA
console.log(gameName.indexOf('p')); // output => 2

const newString = gameName.substring(1,3)
console.log(newString); // output => up

const anotherString = gameName.slice(-5,3) // starts from end and 3 characters
console.log(anotherString); // output => Gup

const string1 = "   Gupta  "
console.log(string1.trim()); // removes extra starting and end spaces
 // works on white space characters plus line terminators
 
 const url = "https://gupta.com/gupta%14juhi"

 console.log(url.replace('%14','-')) // Output => https://gupta.com/gupta-juhi 
console.log(url.includes("gupta")) // Output => true
console.log(url.includes('yashi')) // Output => false

const gameName1 = "Gupta-Juhii"
console.log(gameName1.split('-')) // Output => [ 'Gupta', 'Juhii' ]
