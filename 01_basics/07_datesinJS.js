/* *** Proposal:
Temporal => global object that acts as a top level namespace (like Math),brings modern date/time API
 Temporal.Now.Instant() => get the current system exact time
*/

// Dates

let myDate = new Date()
console.log(myDate); // Output => 2025-10-18T09:43:06.922Z

console.log(myDate.toString()) // Output => Sat Oct 18 2025 09:44:19 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.)// give ctrl+space to see diff methods)

console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
/*
 Output =>
Sat Oct 18 2025
2025-10-18T11:52:39.406Z
2025-10-18T11:52:39.406Z
10/18/2025
11:52:39 AM
*/

console.log(typeof myDate); // date is an Object in JS

let myCreatedDate = new Date(2025, 0, 23) // Months start from 0 in JS
console.log(myCreatedDate.toDateString()); // Output => Thu Jan 23 2025

let date2 = new Date(2025, 0 , 23, 5, 3)
console.log(date2.toLocaleString()); //1/23/2025, 5:03:00 AM

// ** TIMESTAMPS **

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1760788856310 => miliseconds from Jan1,1970

console.log(myCreatedDate.getTime()); // 1737590400000

console.log(Date.now());

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
 
// ** To customize
newDate.toLocaleString('default',{
    weekday: 'long'
})