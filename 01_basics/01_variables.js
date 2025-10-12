const accountId = 14453
let aacountEmail = "gupta@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId= 2 // not allowed

accountEmail = "guptaji@gmail.com"
accountPassword = "23456"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var because of issue in block scope and functional scope
*/