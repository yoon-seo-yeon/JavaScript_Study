"use strict";

function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2); //2가 고정됨

console.log(double(3)); //2*3
console.log(double(4)); //2*4
console.log(double(5)); //2*5