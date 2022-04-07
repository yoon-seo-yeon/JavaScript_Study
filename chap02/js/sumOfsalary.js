"use strict";
let sum=0;

let employee =  {
    aaa : 150,
    bbb : 120,
    ccc : 180
};

for(let key in employee) {
    sum += employee[key];
};

console.log(sum);