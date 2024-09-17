/* Primitive datatpe   -------> Call by Value
string
number
boolean
null
undefined
symbol
BigInt
*/

/*Non Primitive    --------->Reference
Arrays
objects
functions
*/

const IsloggedIn=false;
const outsidetemperature=null;

const id=Symbol('1234')
const anotherid=Symbol('1234')                     //symbol is a datatype

console.log(id===anotherid);                        //false 


// non primitive data types
const heroes=["superman","batman","spiderman"]                    //arrays
const myOBJ={
    name:"Hrishikesh",
    age:20,
    std:12,
    DOB:"September"
}

const myfunnction=function(){
           console.log("hello world");
           
}

const BigNumber=12347950504294039430
console.log(typeof BigNumber);






/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.
*/


/*Premitive Datatypes

                  Type                                   typeof

i)             Number                                    number
ii)            String                                   string
iii)           Boolean                                  boolean
iv)           Bigint                                    bigint
v)            Symbol                                    symbol
vi)           Null                                      object
vii)          Undefined                                 undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/