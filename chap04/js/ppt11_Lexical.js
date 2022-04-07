"use strict";

/*
//코드 블록과 범수의 범위
{
    let message = "안녕하세요";
    console.log(message); //안녕하세요
}

console.log(message);   //error

{
    let message = "어서오세요";
    console.log(message);   //어서오세요
}

{
    let message = "안녕히 가세요";
    console.log(message); //안녕히 가세요
}
*/

/*
//렉시컬 환경 - 1.변수
let phrase;         //할당 전에는 undefined값
phrase = "Hello";   //할당 및 초기화
phrase = "Bye";     //변경
console.log(phrase);
*/

/*
//렉시컬 환경 - 2.선언함수
let phrase = "Hello";
function say(name) {
    console.log(`${phrase}, ${name}`);
}

say("윤서연");
*/

/*
//렉시컬 환경 - 3.내 외부 렉시컬 환경
let phrase = "Hello";
function say(name) {
    console.log(`${phrase}, ${name}`);
}

say("John");    //Hello, John
*/

/*
//렉시컬 환경 - 4.함수를 반환하는 함수
function makeCounter() {
    let count = 0;

    return function() {
        return ++count;
    }
}

let counter = makeCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
//아래 것들은 제대로 실행되지 않는다 (왜..?)
//console.log(makeCounter()); 
//console.log(makeCounter()); 
//console.log(makeCounter()); 
*/

/*
//클로저 - 1
function f() {
    let value = 123;

    return function() {
        console.log(value);
    }
}

let g = f();
//f(); <-이건 제대로 실행 안 됨
g();
*/

/*
//클로저 - 2
function sum(a) {
    return function(b) {
        console.log(`${a}, ${b}`)
        return a + b;
    }
}

//sum(1)(2);  //a = 1, b = 2
//sum(5)(-1); //a = 5, b = -1
console.log(sum(1)(2));
console.log(sum(5)(-1));
//밑에 두 개 문장은 제대로 실행되지 않는다.
//console.log(sum(3, 4));
//console.log(sum(7, 1));
*/

/*
//가비지 컬렉션
function f() {
    let value = 123;

    return function() {
        console.log(value);
    }
}

let g = f();    //g가 살아있는 동안엔 연관 렉시컬 환경도 메모리에 살아있다
g();
g = null;   //도달할 수 없는 상태가 되었으므로 메모리에서 삭제된다
*/

/*
//실습문제 - 1
//다음의 실행 결과는?
let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}
name = "Pete";
sayHi();
//Hi, Pete
*/

/*
//실습문제 - 2
//다음의 실행 결과는?
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter());     //0
console.log(counter());     //1
console.log(counter2());    //0
console.log(counter2());    //1
*/

/*
//실습문제 - 3
//다음의 실행 결과는?
function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    }

    this.down = function() {
        return --count;
    }
}

let counter = new Counter();
console.log(counter.up());      //1
console.log(counter.up());      //2
console.log(counter.down());    //1
*/

/*
//실습문제 - 4
//다음의 실행 결과는?
let phrase = "Hello";

if(true) {
    let user = "John";
    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}
sayHi();
//이건 됨
// function sayHi2() {
//     let user = "John";
//     return function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }
// let say = sayHi2();
// say();   
*/

/*
function sayHiBye(firstName, lastName) {

    // 헬퍼(helper) 중첩 함수
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
}

sayHiBye("윤서연");
*/

/*
function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log((name));  //만약 makeWorker 함수 안에 Pete가 없다면 John 실행
    };
}
  
let name = "John";
  
// create a function
let work = makeWorker();
  
// call it
work(); // what will it show?
*/

/*
//클로저를 이용하여 합 구하기
function sum(a) {
    return function(b) {
        return a+b;
    }
}

console.log(sum(3)(4));
console.log(sum(7)(1));
*/


let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
