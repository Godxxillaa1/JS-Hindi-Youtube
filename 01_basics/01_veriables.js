const accountId = 144553
let accountEmail = "xyx@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = changed
// accountId is const and const is a perminent value.

accountEmail = "changed@gmail.com"
// accountEmail is a let and let can be changed.

accountPassword = "changed12345"
// accountPassword is a var and var can be changed.

accountCity = "changed city"
// and a veriable without any variable-declarations can be changed.

let accountState;
// If we left the variable undefined, the output value of the variable will be undefined.

/*
Note:
    Perfer not to use var because of the issue in block scope and function scope.
*/

const myArray = [accountId, accountEmail, accountPassword, accountCity, accountState]
console.table(myArray)