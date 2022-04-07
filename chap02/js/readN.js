"use strict";

// function readNumber() {
//     let num;
//     while(true) {
//         num = prompt("숫자를 입력하세요");
//         if(isFinite(num) == true) break;
//     }

//     if(num==null || num=="") {
//         return null;
//     }

//     return Number(num);
// }

// alert(readNumber());

function readNumber() {
    let num;
    while(true) {
        num = prompt("숫자를 입력하세요");
        if(isFinite(num) == true) {
            return Number(num);
        }
    }

    if(num == null || num == "") {
        return null;
    }
}

alert(readNumber());