"use strict";

//문자열 줄이기 : str의 길이를 확인하고 최대길이 maxlength를 초과하면 str의 끝을 생략부호(".....")로 
//대체해주는 함수 truncate(str, maxlength)를 작성하시오
//ex) truncate("What I'd like to tell on this topic is;", 20) => "What I'd like to tel...."

let str = "What I'd like to tell on this topic is";
let maxlength = 20;

function truncate(str, maxlength) {
    let str_length = str.length;

    if(str_length > maxlength) {
        return str.substring(0, maxlength) + ".....";
    }

    /*
    //쌤 코드
    let result='';
    if(str.length > maxlength) {
        result = str.slice(0, maxlength)+".....";
    }
    return result;
    */
}

console.log(truncate(str, maxlength));