"use strict";   //함수 선언문

let age = prompt("나이 입력");

if (age < 18) {
    function welcome() {    
    //특정한 코드 블럭 안에 정의되어 있는 함수 => 코드 블럭 밖에서 호출 불가
        alert("청소년입니다. 환영합니다");
    }
}
else {
    function welcome() {
        alert("성인입니다. 환영합니다");
    }
}

welcome();

//이 문제의 해결 방법은 welcome2.js로 