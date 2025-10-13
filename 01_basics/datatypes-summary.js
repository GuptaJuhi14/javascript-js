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

console.log(typeOf myFunction); // output => function
