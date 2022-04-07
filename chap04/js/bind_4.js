"use strict";
//this 값이 undefined인 함수 고치기 - 모던 자바스크립트

function askPassword(ok, fail) {
    let password = prompt("비밀 번호를 입력해주세요.", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name : "John",
    loginOk() {
        alert(`${this.name}님이 로그인하였습니다`);
    },

    loginFail() {
        alert(`${this.name}님이 로그인에 실패하였습니다`);
    },
};

// askPassword(user.loginOk, user.loginFail); //비밀번호가 맞아도 틀려도 아무 문장이 안 나옴
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));