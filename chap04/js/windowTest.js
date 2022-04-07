"use strict";

alert("Hello");
window.alert("Hi");

var gVar = 5;       //엔진이 윈도우객체 내부적으로 프로피티 생성 => 이름과 동일 충돌
//static 효과 => 모던 자바스크립트 X
alert(window.gVar);

window.currentsuer = {  //중요한 변수여서 모든 함수가 접근 가능한 변수를 선언하고 싶은 경우
    name: "John"
}

let currentsuer= "Peter"; //변수 충돌시... 엔진은 가까운 변수부터 가져온다
alert(currentsuer); //Peter
alert(window.currentsuer.name);  //John