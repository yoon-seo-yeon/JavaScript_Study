"use strict";
//스팸 문자열 걸러내기 : str에 'xxx'라는 문자열이 있으면 'true'를 아니면 'false'를 출력하는 
//함수 checkSpam()을 작성
//ex) checkSpam("free Xxxx") = true;

let str = "free xXx"; //xxx, xXx, XXX, Xxx든 다 true

function checkSpam(str) {
    /*
    let stru = str.toLowerCase();

    if(stru.includes("xxx")) return true;
    else return false;
    */

    if(str.toLowerCase().includes("xxx")) return true; //호출 체이닝
    else return false;
}

console.log(checkSpam(str));