// Primitive - Call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // in typescript => const score:number = 100 but in JS we dont define type
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

// ** declaration of Symbol **
const id = Symbol('123') // return type is also symbol
const anotherId = Symbol('123')
// result of the above two will not be same

console.log(id === anotherId); // output => false

const bigNumber = 345454543634323n // adding n at the end it automatically becomes bigInt

// Non Primitive - Reference / datatype is object 

// Array, Objects, Functions

// Array
const heroes = ["shaktiman" , "naagraaj" , "teja"]

// Object / Everything inside {} is object 
let myObj = {
  name: "Gupta",
  age: 23,
}

// Function

// definition of function => function (){}
// to store it into variable and declare it

const myFunction = function()
{
    console.log("hello world")
}

// console.log(typeOf myFunction) // output => function


// *** MEMORY ***

// Stack (Primitive) , Heap (Non-Primitive)

// Stack memory - gives Copy of  declared variable
//heap memory - gives reference of variable / change is reflected on original value

let myProjectname = "Creator Copilot" //primitive datatype => stack

let anotherName = myProjectname
anotherName = "Creator"

console.log(myProjectname); // output => Creator Copilot

console.log(anotherName); // output => Creator

// Non primitive data type => heap memory
let user1 = {
  email: "user@gmail.com",
  upi: "user@ybl"
}

let user2 = user1

user2.email = "gupta@gmail.com"

console.log(user1.email); // output => gupta@gmail.com
console.log(user2.email); // output => gupta@gmail.com

