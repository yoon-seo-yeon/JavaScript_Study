"use strict";

setValue(10, 20);

function setValue(one, two) { //선언함수 
    let total = one + two;
    console.log(total);
}

function showMessage(from) {
    console.log(from)
}
showMessage("홍길동");

function showMessage(from, text=" 환영합니다.") {
    console.log(from + text)
}
showMessage("홍길동");

function showCount(count) {
    console.log(count ?? "unkown");
}
showCount();

function getPoint() {
    return //return과 표현식을 한 줄에 작성하여야 한다 한 줄이 아닐 경우 undefined가 나옴
    10*20;
}

// let result=getPoint();

console.log(getPoint());