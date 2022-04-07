"use strict";

let id;
let pw;
alert(prompt("아이디", "") == "admin" ? prompt("패스워드", "") == "1234" ? "환영" : "인증 실패!" : "아이디 오류!");
//내가 직접 다시 한것 21.04.25
//alert(prompt("아이디", "")=="admin" ? prompt("비밀번호", "")=="1234" ? "환영" : "인증 실패!" : "아이디 오류!")