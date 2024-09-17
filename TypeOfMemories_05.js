// stack memeory and heap memory
/*
 Stack memory ---------->Primitive datatype 
Heap memory--------->Non Primitive datatype
*/

let myChannel="HrishikeshDeshpande.com"
let anothername=myChannel
anothername="Chai aur lassi"

console.log(myChannel)
console.log(anothername);

let UserOne={
        useremail:"Hrishikeshdeshpande13@gmailcom",
        Password:"Pratham@123",
        name:"Hrishikesh"
}

let Usertwo=UserOne
Usertwo.useremail="Hrishikesh@google.com"
Usertwo.Password="Sachin@123"

console.log(UserOne.useremail);
console.log(Usertwo.useremail);


