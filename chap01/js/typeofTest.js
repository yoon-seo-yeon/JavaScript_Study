"use strict";
console.log(typeof undefined);          //undefined
console.log(typeof 0);                  //number
console.log(typeof 10n);                //BigInt
console.log(typeof true);               //boolean
console.log(typeof "foo");              //string
console.log(typeof Symbol("id"));       //Symbol
console.log(typeof Math);               //object
console.log(typeof null);               //object
console.log(typeof alert);              //undefined //크롬 콘솔창에서는 function으로 나온다 -> 이게 맞는것
console.log(typeof prompt);             //undefined

let testName = "mirim";
console.log(`hello ${1}`);              //hello 1
console.log(`hello ${"testName"}`);     //hello testName
console.log(`hello ${testName}`);       //hello mirim