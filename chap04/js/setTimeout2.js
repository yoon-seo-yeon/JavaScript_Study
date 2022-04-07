"use strict";

function sayHi() {
    console.log("안녕하세요!");
}
setTimeout(sayHi, 5000);    //밀리초 5초 후에


function sayHiname(who, phrase) {
    console.log(who + "님" + phrase);
}
setTimeout(sayHiname, 3000, "홍길동", "안녕하세요!");    //밀리초 3초 후에

let st1 = setTimeout(function sayHello(){ //sayHello라는 function을 2초 후에 실행할 것이다
    console.log("안녕하세요*^^*");
}, 2000);

st1;
// clearTimeout(st1);