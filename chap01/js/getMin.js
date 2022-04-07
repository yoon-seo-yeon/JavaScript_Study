"use strict";

// let num1,num2;

// function Min(a, b) {
//     if(a < b) {
//         return alert(a);
//     }
//     else {
//         return alert(b);
//     }
// }

// num1=Number(prompt("첫번째 수 입력"));
// num2=Number(prompt("두번째 수 입력"));

// Min(num1, num2);


let num1 = Number(prompt("첫 번째 수 입력"));
let num2 = Number(prompt("두 번째 수 입력"));

let Min = function(a, b) {
    if(a > b) {
        return b;
    }
    else {
        return a;
    }
}

alert(Min(num1, num2));