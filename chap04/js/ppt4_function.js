"use strict";

/*
function setBookTitle() {
    let title = "JS 책";

    return title;
}

let calculatePoint = function(one, two) {
    let total = one + two;
    let bonus = total + 100;

    return bonus;
}

console.log(setBookTitle());
console.log(calculatePoint(5, 7)); //total = 12, bonus = 112
*/

/*
function setValue(one, two) {
    let total = one + two;
    return total;
}

console.log(setValue(10, 20));
*/

/*
function showMessage(from, text = "no text given") {
    console.log(from + " : " + text);
}

showMessage("Ann");
*/

/*
function showMessage(from, text = anotherFunction()) {
    console.log(from + " : " + text);
}

function anotherFunction() {
    console.log("javascript");
}

showMessage("Ann");
*/

/*
function showCount(count) {
    console.log(count ?? "unknown");
}

showCount("1");
*/

/*
function getPoint() {
    return 10 * 30;
}

let result = getPoint();
console.log(result);
*/

/*
function checkAge(age) {
    if(age >= 18) {
        return console.log(true);
    }
    else {
        return console.log("보호자의 동의를 받으셨나요?");
    }
}

checkAge(18);
*/

/*
//나이를 입력 받아 나이가 18세 이상이면 성인으로 인증하여 true 값을 return 하고, 
//그렇지 않은 경우 재인증을 받으라는 메시지를 confirm 하는 함수 checkAge( )를  작성하시오
let age;
age = prompt("나이를 입력하세요");

function checkAge(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return confirm("재인증 하세요");
    }
}

checkAge(age);
*/

/*
//두 수를 prompt 를 이용해 입력 받아 두 수중 작은 수를 구하는 프로그램을 작성하라.   
//Min(a, b)의 형태를 갖는 함수를 작성해서 활용하라

let num1, num2;
num1 = Number(prompt("첫 번째 수를 입력하세요!"));
num2 = Number(prompt("두 번째 수를 입력하세요!"));

function Min(num1, num2) {
    if(num1 < num2) {
        return alert(num1 + "과 " + num2 + "중 더 작은 수는 " + num1 + "입니다!");
    }
    else {
        return alert(num1 + "과 " + num2 + "중 더 작은 수는 " + num2 + "입니다!");
    }
}

Min(num1, num2);
*/

/*
//위와 같은 조건으로 pow(x, n)을 작성하라
let x, n;
x = Number(prompt("x 값을 입력하세요!"));
n = Number(prompt("n 값을 입력하세요!"));

function pow(x, n) {
    let result = 1; //1로 초기화 안했더니 NaN나옴 초기화 필수인듯
    for(let i = 1; i <= n; i++) {
        result *= x;
    }
    return alert("답은 : " + result);
}

pow(x, n);
*/

//함수 선언문
/*
let age = prompt("나이를 알려주세요");

function Age(age) {
    if(age < 18) {
        alert("안녕");
    } else {
        alert("안녕하세요");
    }
}
Age(age);
*/

//함수 표현식
/*
let age = prompt("나이를 알려주세요");

let welcom = function(age) {
    if(age < 18) {
        alert("안녕");
    }else {
        alert("안녕하세요");
    }
}
welcom();

let welcom = (age < 18) ?
    function() {alert("안녕");} :
    function() {alert("안녕하세요");};
welcom();
*/

//화살표함수
/*
let age = prompt("나이를 알려주세요!!");

// let welcom = (age < 18) ?
//     () => {alert("안뇽");} : 
//     () => {alert("안뇽하세요");};

// welcom();

let welcom = (age) => {
    if(age < 18) {
        alert("안뇽안뇽");
    }else {
        alert("안뇽하세요");
    }
}

welcom(age);
*/

//화살표함수(덧셈)
/*
let num1 = Number(prompt("첫번째 수를 입력해주세요"));
let num2 = Number(prompt("두번째 수를 입력해주세요"));

let Sum = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

alert(Sum(num1, num2));
*/

//화살표함수(동의, 비동의)
/*
let ask = function(quesition, yes, no) {
    if(confirm(quesition)) {
        yes();
    }
    else {
        no();
    }
}

ask(
    "동의하십니까?",
    ()=>alert("동의하셨습니다!!"),
    ()=>alert("동의하지 않으셨습니다!!")
);
*/