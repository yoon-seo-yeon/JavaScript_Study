"use strict";

//첫 글자를 대문자로 변경하기
//ex) ucFirst("john") = John;
//str.toUpperCase(), str[0].toUpperCase(), str.slice(0);

let str = "john";

function ucFirst(str) {
    let strU = str[0].toUpperCase()+str.slice(1);

    return strU;
}

console.log(ucFirst(str));