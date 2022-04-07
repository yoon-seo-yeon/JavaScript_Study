//실행이 안됨
"use strict";

function camel(str){
    let arr = str.split("-");  // 배열로 쪼개기 
    //map함수의 매개변수 순서는 달라도 관계없다. 
    //slice(1)는 두번째부터 배열요소를 리턴 
    arr = arr.map((arr, index) => index == 0 ? arr : arr[0].toUpperCase() + arr.slice(1)); //배열의 첫글자를 대무자로 바꾸기 
    let result = arr.join(''); //배열을 문자열로 바꾸기 
    return result;
    /* 호출 체이닝
    return str.split("-").map((arr, index) => index == 0 ? arr : arr[0].toUpperCase() + arr.slice(1)).join('');
    */
}

let str = "my-short-string";
console.log(camel(str)); //myShortString