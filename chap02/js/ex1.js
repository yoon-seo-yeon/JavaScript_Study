"use strict";

let numbers=[];
let num;
let sum = 0;

function sumInput() {
    while(true) {
        num = prompt("숫자를 입력하세요");
        if(num==="" || num===null || !isFinite(num)) break;

        numbers.push(+num);
    }

    for(let key of numbers) {
        sum+=key;
    }

    return sum;
}

alert(sumInput());