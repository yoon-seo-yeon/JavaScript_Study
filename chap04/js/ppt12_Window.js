"use strict";

/*
//전역 객체
alert("Hello");
window.alert("Hi");
var gVar = 5;
alert(window.gVar);
window.currentUser = {
    name: "John"
}

let currentUser = "Pete";
alert(currentUser);

alert(currentUser.name);

alert(window.currentUser.name);
*/

/*
//setTimeout 호출 스케쥴링 - 1
function sayHi() {
    console.log("안녕하세요");
}
setTimeout(sayHi, 1000);
let timerId = setTimeout(sayHi, 1000);
timerId;
setTimeout(() => console.log('안뇽'), 1000);
*/

/*
//setTimeout 호출 스케쥴링 - 2
function sayHi() {
    console.log("안녕하세요");
}
setTimeout(sayHi, 5000);

function sayHiname(who, phrase) {
    console.log(who + "님," + phrase);
}
setTimeout(sayHiname, 3000, "홍길동", "안녕하세요");

let st1 = (setTimeout(function sayHello() {
    console.log("Hello");
}, 2000));
//st1; 
//clearTimeout(st1);
// clearTimeout(setTimeout(function sayHello() {
//     console.log("Hello");
// }, 2000));
*/

/*
//setInterval 반복 호출 스케쥴링 - 1
let timerId = setInterval(()=>console.log("째깍"), 2000);
setTimeout(()=>{clearInterval(timerId); console.log("정지");}, 5000);
*/

//setInterval 반복 호출 스케쥴링 - 2
// setInterval(function() {
//     const today = new Date();
//     const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

//     let year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let date = today.getDate();
//     let day = dayNames[today.getDay()];
//     let hour = today.getHours();
//     let minute = today.getMinutes();
//     let second = today.getSeconds();

//     const ampm = hour >= 12 ? "PM" : "AM";

//     hour %= 12;
//     hour = hour || 12;

//     minute = minute < 10 ? '0' + minute : minute;
//     second = second < 10 ? '0' + second : second;

//     const now = `${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second}${ampm}`;
//     console.log(now);
// }, 1000);

/*
let date = new Date();
let yyy = date.getFullYear();
let mmm = date.getMonth();
let ddd = date.getDate();
let hhh = date.getHours();
let mi = date.getMinutes();
let se = date.getSeconds();
console.log(yyy);
console.log(mmm + 1);
console.log(ddd);
console.log(hhh);
console.log(mi);
console.log(se);
*/

/*
//일정한 간격으로 반복 호출하는 스케쥴링 - setTimeout 사용
let timerId = setTimeout(function clock() {
    let today = new Date();
    let now = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    console.log(now);
    timerId = setTimeout(clock, 1000);
}, 1000);
*/

/*
//일정한 간격으로 반복 호출하는 스케쥴링 - setInterval 사용
setInterval(function() {
    let today = new Date();
    let now = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    console.log(now);
}, 1000);
*/

/*
let i = 1;
setInterval(function func() {
    func(i++);
}, 100);
*/

/*
let i = 1;
setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
}, 100);
*/

/*
//대기 시간이 0인 setTimeout
// function func() {
//     return alert("World");
// }
//Hello가 먼저 출력되고 그 다음 World가 출력된다
setTimeout(()=>console.log("World"));
console.log("Hello");
*/

/*
//실습예제
//from 부터 to까지 1초 간격으로 출력하는 프로그램을 작성하라 - setTimeout
function from_to(from, to) {
    setTimeout(function run() {
        console.log(from);
        if(from < to) {
            setTimeout(run, 1000);
        }
        from++;
    }, 1000);
}

from_to(7, 17);
*/

/*
//실습예제
//from 부터 to까지 1초 간격으로 출력하는 프로그램을 작성하라 - setILnterval
function from_to(from, to) {
    let timerId = setInterval(()=> {
        console.log(from);
        if(from == to) {
            clearInterval(timerId);
        }
        from++;
    }, 1000)
}

from_to(1, 7);
*/