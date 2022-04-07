"use strict";

function ask(question, yes, no) {   //semantic
    if (confirm(question)) yes();
    else no();
}

ask (
    "동의하세요?",
    //function() {alert("동의했습니다"); },
    //function() {alert("동의하지않았습니다"); }
    ()=>alert("동의하셨습니다"),
    ()=>alert("동의하지않았습니다")
);