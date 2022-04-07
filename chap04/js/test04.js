"use strict";
let phrase = "Hello";

if(true) {
    let user = "John";
    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}
sayHi();

/*
if로 코드 블록 되어 있기 때문
if코드 밖에서 sayHi를 호출했기 때문
*/