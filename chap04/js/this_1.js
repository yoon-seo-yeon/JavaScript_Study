"use strict";

let me = {
    firstname : "홍",
    lastname : "길동",

    introduce() {
        console.log(`My name is ${this.firstname}${this.lastname}입니다.`); 
    }
}

me.introduce(); //동작
//setTimeout(me.introduce, 1000); //동작 안함

setTimeout(function() { //동작
    me.introduce();
}, 1000);

setTimeout(()=>me.introduce(), 1000); //동작 //화살표 함수

me = { //위 동작하는 두 함수는 1000초가 걸리기 때문에 밑에서 재정의 해도 Hi로 나온다
    introduce() {
        console.log("Hi");
    }
}