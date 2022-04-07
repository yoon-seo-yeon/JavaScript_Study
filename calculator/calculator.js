"use strict";
/*
이벤트, 이벤트핸들러
addEventListener(이벤트명, 핸들러 함수)
*/
let num1 = "";
let num2 = "";
let operator = "";

let op_value = document.querySelector("#operator"); //html  ---querySelector--> JS, JS --- vlaue ---> html
let result_value = document.querySelector("#result");
let onClickNumber = (number) => {
    return (event) => {
        if(operator) {
            if(!num2) {
                result_value.value = "";
            }
            num2 += number;    //js의 변수
        }else {
            num1 += number;
        }
        result_value.value += number;  //result_value는 html의 요소
    }
}

//click = 이벤트 이름
document.querySelector("#num-0").addEventListener("click", onClickNumber(0));
document.querySelector("#num-1").addEventListener("click", onClickNumber(1));
document.querySelector("#num-2").addEventListener("click", onClickNumber(2));
document.querySelector("#num-3").addEventListener("click", onClickNumber(3));
document.querySelector("#num-4").addEventListener("click", onClickNumber(4));
document.querySelector("#num-5").addEventListener("click", onClickNumber(5));
document.querySelector("#num-6").addEventListener("click", onClickNumber(6));
document.querySelector("#num-7").addEventListener("click", onClickNumber(7));
document.querySelector("#num-8").addEventListener("click", onClickNumber(8));
document.querySelector("#num-9").addEventListener("click", onClickNumber(9));

let onClickButton = (op) => {
    return () => {
        if(num1) {
            operator = op;
            op_value.value = op;
        } else  {
            alert("숫자를 먼저 입력하세요!");
        }
    }
}

document.querySelector("#plus").addEventListener("click", onClickButton("+"));
document.querySelector("#minus").addEventListener("click", onClickButton("-"));
document.querySelector("#div").addEventListener("click", onClickButton("/"));
document.querySelector("#mul").addEventListener("click", onClickButton("*"));
document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";

    result_value.value = "";
    op_value.value = "";
});
document.querySelector("#equal").addEventListener("click", () => {
    if(num2) {  //변수가 2개일 때 연산
        switch(operator) {
            case "+" :
            result_value.value = parseInt(num1) + parseInt(num2);
            break;

            case "-" :
            result_value.value = (num1 - num2);
            break;

            case "/" :
            result_value.value = (num1 / num2);
            break;

             case "*" :
            result_value.value = (num1 * num2);
            break;

            default :
            break;
        }
    }else {
        alert("num2를 입력하세요!");
    }
});