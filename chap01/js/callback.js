"use strict";
//화살표 함수
/*
let message = (question, yes, no) => {
    if(confirm(question)) {
        yes();
    }

    else {
        no();
    }
}

(message(  "동의하십니까?",
function() {alert("동의하셨습니다");},
function() {alert("취소 버튼을 누르셨습니다");}));
*/

//콜백함수
/*
function ask(question, yes, no) {   //semantic, 
    if (confirm(question)) {
        yes();   //yes라고 답한 경우 showOk()를 호출
    }
    else {
        no();    //no라고 대답한 경우 showNO()를 호출한다
    }
}

function showOK() {
    alert("동의하셨습니다");
}

function showNO() {
    alert("동의하지않았습니다");
}

ask("동의하십니까?", showOK, showNO);
*/

//함수 표현식
let ask = function(quesiton, yes, no) {
    if(confirm(quesiton)){
        yes();
    }else {
        no();
    }
}

function showOK() {
    alert("동의하셨습니다.");
}

function showNO() {
    alert("동의하지 않으셨습니다.");
}

ask("동의하십니까?", showOK, showNO);