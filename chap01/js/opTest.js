"use strict";
console.log(null==undefined);       //true
console.log(null===undefined);      //false
console.log(null>0);                //false
console.log(null==0);               //false
console.log(null===0);              //false
console.log(null>=0);               //true
console.log(0==false);              //true
console.log(""==false);             //true

console.log("\n");

console.log(5>4);                       //true
console.log("apple" > "pineapple");     //false
console.log("2" > "12");                //true
console.log(undefined == null);         //true
console.log(undefined === null);        //false
console.log(null == "\n0\n");           //false
console.log(null === +"\n0\n");         //false