"use strict";

//두 개의 숫자를 합쳐서 문자열로 나타내는 함수 concate(num1, num2)를 작성하시오
//ex) concat(123,456) = 123456

function concate(num1, num2) {
    return num1.toString() + num2.toString();
}

console.log(concate(2, 5));