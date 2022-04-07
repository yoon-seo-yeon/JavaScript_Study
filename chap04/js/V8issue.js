"use strict";

let value = "이름이 같은 다른 변수";

function f() {
    let value = "가장 가까운 변수";
    
    function g() {
        debugger;
        //콘솔에 alert(value);를 입력하면 '이름이 같은 다른 변수'가 출력됨
    }
    return g;
}

let g = f();
g();
alert(value);