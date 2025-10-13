let score = "33"

// const {score} = req.body // here it is not sure what is the type of score

console.log(typeof score)
console.log(typeof(score)) //as a method

// Operation is to be performed on numbers

let valueInNumber = Number(score) //conversion of string to number datatype

console.log(typeof valueInNumber)

let num = "33abc"

let valueInNumber2 = Number(num)

console.log(typeof valueInNumber2)
console.log(valueInNumber2) // output-> NaN /which is not a number

// on conversion into number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// numm => 0
// undefined => undefined

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // output=> true

//on conversion into boolean
// 1=> true; 0 => false
// "" => false
// "gupta" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.group(typeof stringNumber)
console.log(stringNumber)

// ***** Operations ***** //

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " Gupta"
let str3 = str1 +str2
console.log(str3)

console.log("1"+2) // output => 12
console.log(1+"2") // output => 12
console.log("1"+2+2) // ouutput => 122 / first element is string so rest all will be treated as string
console.log(1+2+"2") // output => 32  

// ** Tricky conversion **

console.log(true) // output => true
console.log(+true) // output => 1
// console.log(true +); //error
console.log(+"");// output => 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);// output => 101
++gameCounter
console.log(gameCounter); // output =>101

