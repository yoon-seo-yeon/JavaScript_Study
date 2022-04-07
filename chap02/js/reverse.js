"use strict";

// 문자열을 거꾸로 출력하기(1의 보수)

let str = "1110101";
let str2 = "";

function reverse(str) {
    for(let key of str) {
        if(key=='0') 
            str2 += '1';
        else 
            str2 += '0';
    }
    return str2;
}

console.log(reverse(str)); //0001010