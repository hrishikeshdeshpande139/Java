const CustomerId=123456                           //const keyword is fixed . value is fixed ----->cannot be changed 

// two ways to declare the variable
let customerEmail="Sachin@123"
var accountPassword="657432"                       //due to scope level problem in javascript "let" and "const" keywords are used.
accountCity="Pune"

/*
prefer not to use var 
Because of issue in block scope and functional scope
*/
customerEmail="Hrishikeshdeshpande@123"
accountPassword="12345567"
accountCity="Bengluru"

console.table([CustomerId,customerEmail,accountPassword,accountCity])                  // creates a table 