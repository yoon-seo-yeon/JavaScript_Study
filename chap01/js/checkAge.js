"use strict";

// function checkAge(a) {  //a는 매개변수 => 지역변수
//     if(a >= 18) {
//         return true;
//     }
//     else {
//         return confirm("재인증 하세요");
//     }
// }
// age = prompt("나이를 입력");
// alert(checkAge(age));

let age = prompt("나이를 입력");

let agee = function(a) {
    if(a >= 18) {
        return true;
    }
    else {
        return confirm("재인증 하세요");
    }
}

agee(age);


//화살표 함수
// let age = prompt("나이를 알려주세요", 18);

// let welcome = (age < 18) ?
//     () => alert("안녕"):
//     () => alert("안녕하세요!");
// welcome();