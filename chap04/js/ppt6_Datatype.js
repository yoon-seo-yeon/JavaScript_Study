"use strict";

/*
let str = "Hello";
console.log(str.toUpperCase()); //대문자
console.log(str.toLowerCase()); //소문자
*/

/*
//숫자형
let num = 255;
console.log(num.toString(16));  //ff
console.log(num.toString(2));   //11111111
*/

/*
//숫자형-어림수 구하기
let num1 = 3.1
console.log(Math.floor(num1));  //3
console.log(Math.ceil(num1));   //4
console.log(Math.round(num1));  //3
console.log(Math.trunc(num1));  //3

let num2 = 3.6
console.log(Math.floor(num2));  //3
console.log(Math.ceil(num2));   //4
console.log(Math.round(num2));  //4
console.log(Math.trunc(num2));  //3

let num3 = -1.1
console.log(Math.floor(num3));  //-1
console.log(Math.ceil(num3));   //0
console.log(Math.round(num3));  //-1
console.log(Math.trunc(num3));  //-1

let num4 = -1.6
console.log(Math.floor(num4));  //-1
console.log(Math.ceil(num4));   //0
console.log(Math.round(num4));  //0
console.log(Math.trunc(num4));  //-1
*/

/*
//숫자형-작은 정밀도 손실
let num1 = 0.1;
let num2 = 0.2;
let result = 0.1 + 0.2
console.log(result);   //작은 정밀도 손실이 일어남
console.log(+(result.toFixed(2))); //문자열로 바꾼 후 -> 숫자로 바꾸었다
*/

/*
//숫자형 - isNaN(), isFinite()
console.log(isNaN("*"));        //true
console.log(isNaN("123"));      //false
console.log(isNaN("12/3"));     //true
console.log(isNaN("*123"));     //true
console.log(isNaN("123*"));     //true

console.log(isFinite("*"));         //false
console.log(isFinite("123"));       //true
console.log(isFinite("12/3"));      //false
console.log(isFinite("*123"));      //false
console.log(isFinite("NaN"));       //false
console.log(isFinite("Infinity"));  //false
console.log(isFinite("NaN"));       //false
*/

/*
//숫자형 - parseInt(), parseFloat()
console.log(parseInt('100px'));         //100
console.log(parseInt('**25'));          //NaN   //문자로 시작하는 건 X
console.log(parseInt('1.5*-'));         //1
console.log(parseFloat('1.8px'));       //1.8
console.log(parseFloat('px4.6.5'));     //NaN   //문자로 시작하는 건 X
console.log(parseFloat('4.7.8*-'));     //4.7
*/

/*
//숫자형 - 연습문제 1
//사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 작성하라. 
//1. 반환되는 값은 꼭 숫자형 값이어야 한다.
//2. 사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환한다. 

let num;

function readNumber() {
    while(true) {
        num = prompt("숫자형을 입력하세요");
        if(isFinite(num) == true)
        break;
    }

    if(num == null || num == "") {
        return null;
    }

    return +num;
}

alert(readNumber());
*/

/*
//문자열 - 백틱
function Sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${Sum(1, 2)}`);
*/

/*
//문자열 - 길이 프로퍼티
let str = "Hello";
for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for(let value of str) {
    console.log(value);
}

for(let key in str) {
    console.log(str[key]);
}
*/

/*
//문자열의 불변성
let str = "Hello";
str[2] = 'E';   //오류 - 문자열은 수정이 불가능하다.
*/

/*
//문자열 관련 메서드 - 대소문자, 부분 문자열1,2
let str = "Hello My name is Yoon Seo Yeon";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("na")); //9
console.log(str.indexOf("na", 10)); //-1
console.log(str.indexOf("e", 10)); //12
console.log(str.lastIndexOf('S')); //22
*/

/*
//문자열 관련 메서드 - 연습문제
//str 문자열에서 “er”을 모두 검색하는 예제를 작성하시오. 

let str = "Where there is a will there is a way";
let foundposition = 0;
let position = 0;

while(true) {
    foundposition = str.indexOf("er", position);
    if(foundposition == -1) {
        break;
    }
    console.log(foundposition);
    position = foundposition+1;
}
*/

/*
//문자열 관련 메서드- 포함 여부 확인, startsWith(), endsWith(), str.slice, strsubstring, str.substr
let str = "Hello My name is Yoon Seo Yeon";
console.log(str.includes("my"));    //false
console.log(str.includes("na"));    //true

console.log(str.startsWith("el"));  //false
console.log(str.startsWith("He"));  //true

console.log(str.endsWith("yeon"));  //false
console.log(str.endsWith("n"));     //true

console.log(str.slice(0, 4));       //Hell
console.log(str.slice(2));          //llo My name is Yoon Seo Yeon

console.log(str.substring(1, 5));   //ello
console.log(str.substring(5));      // My name is Yoon Seo Yeon
*/

/*
//문자열 예제 - 1
//두 개의 숫자를 합쳐서 문자열로 나열하는 함수 concate(num1, num2)를 작성하시오. 
function concate(num1, num2) {
    let result = num1.toString() + num2.toString();
    return result;
}
console.log(concate(123, 456));
*/

/*
//문자열 예제 - 2
//문자열 거꾸로 출력(1의 보수 만들기)하기 //다시
let str = "1110101";
let start = 0;
let end = 1;

function reverse(str) {
    let str2 = str.slice(start, end);
    let result;
    if(str2 == "1") {
        str2 = "0";
        result += str2;
    }
    else {
        str2 = "1";
        result += str2;
    }
    start += 1;
    end += 1;

    return result;
}

console.log(reverse(str));
*/

/*
//문자열 예제 - 3
//첫 글자를 대문자로 변경하기
let str = "yoon";
function unFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(unFirst(str));
*/

/*
//문자열 예제 - 4
//스팸 문자열 걸러내기 :  str 에 'XXX’ 라는 문자열이 있으면 ‘true’를 아니면 ‘false’를 출력하는 함수 checkSpam(  )을 작성하시오
let str = "free xxXXx";
function checkSpam(str) {
    let str2 = str.toUpperCase();
    if(str2.includes("XXX")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkSpam(str));
*/

/*
//문자열 예제 - 5
//문자열 줄이기 : str의 길이를 확인하고 최대길이 maxlength를 초과하면 str의 끝을 생략부호(“…..”)로 대체해주는 함수 truncate(str, maxlength)를 작성하시오. 
let str = "What I'd like to tell on this topic is";
let maxlength = 20;
function truncate(str, maxlength) {
    let strlength = str.length;
    if(strlength > maxlength) {
        return str.slice(0, maxlength) + "...";
    }
}
console.log(truncate(str, maxlength));
*/

/*
//문자열 예제 - 6
//숫자만 추출하기  : 달러 표시가 나오고 그 뒤에 숫자가 나오는 문자열 “$120”가 있다고 가정하고 120만 추출해내는  extraCurrencyValue(str)을 작성하시오. 
let str = "$120";
function extraCurrencyValue(str) {
    return str.slice(1);
}
console.log(extraCurrencyValue(str));
*/