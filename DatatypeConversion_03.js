//let score="33abc"                //output----->NaN (Not a number) , but type=Number
let score=true                     //output -->1  ,for false =0 ,for true=1
console.log(typeof score);         //string

// Conversion of string to number
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//conversion of numbers to boolean
//let IsloggedIn=1
//let IsloggedIn="Hrishikesh"                                                  //For string------>true
let IsloggedIn=""                                                              //for emptystring----->false
let booleanIsLoggedIn=Boolean(IsloggedIn)
console.log(booleanIsLoggedIn);


//conversion of number to string
let SomeNumber=90
let StringNumber=String(SomeNumber)
console.log(typeof StringNumber);







// ***********************************************  OPERATIONS  **************************************************

let str1="Hrishikesh"
let str2=" Deshpande"
let str3=str1 + str2
console.log(str3);


// bit confusing ------->Research topic
console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");                      //wrong format to write code 

console.log((3+4) * 5 % 3);



//tricky conversion
let gameCounter=100
gameCounter++                                //precedence operator prefix and postfix operation
console.log(gameCounter);








