"use strict";

function makeCounter() {
    let count = 0;

    return function() { //함수를 리턴하는 함수(클로저)
        return ++count;
    }
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/*
원래라면 count가 ++된다음 출력되고 초기화 되야 하는데
클로저 함수 때문에 초기화 되지 않고 증가가 되는 것이다
*/