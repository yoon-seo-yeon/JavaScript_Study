"use strict";

//str문자열에서 "er"을 모두 검색하는 예제를 작성하시오
let str = "Where there is a will there is a way";
let index = 0;

while(1) {
    let str_of = str.indexOf("er", index);
    if(str_of==-1) break;
    console.log(str_of);
    index = str_of+1;
}