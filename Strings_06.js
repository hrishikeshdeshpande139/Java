const name="hrishikesh"
const repocount=50

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String('Sangram-hc-prompt')
console.log(gamename[0]);
console.log(gamename.__proto__);                              //object

console.log(gamename.length);
console.log(gamename.charAt(3));
console.log(gamename.indexOf('g'));

const newString=gamename.substring(0,4)                           //last value 4 is not included ,can never use negative value
console.log(newString);

const anotherString=gamename.slice(-8,4)
console.log(anotherString);

const mystring="       sachin            "
console.log(mystring);
console.log(mystring.trim());                                           //spaces avoided

console.log(gamename.split('-'));













