"use strict";

let calculator = {
    read() { //function 생략
        this.a = Number(prompt("숫자1을 입력하세요"));
        this.b = Number(prompt("숫자1을 입력하세요"));
    },

    sum() {
        return (this.a + this.b);   
    },

    mul() {
        return (this.a * this.b);
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());