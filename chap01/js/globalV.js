"use strict";

let age = 17;   //전역 변수

let year = prompt("년도 입력");

function checkAge() {
    if(year == 2022) {
        age++;
    }
    else if(!year) {    //!year = year 값이 안 들어있다는 뜻
        alert("올바른 년도 입력");
    }
    else {
        age += (year-2021);
    }
}

checkAge();

if(age >= 18) {
    alert("성년입니다");
}

alert(`당신의 현재 나이 : ${age}`); //당신의 현재 나이가 바뀌어 버림
//alert("당신의 현재 나이는 : "+age);

/*
let age = 17;   //전역 변수

//let year = prompt("년도 입력");

function checkAge() {
    let Age=17;
    let year = prompt("년도 입력");
    if(year == 2022) {
        Age++;
    }
    else if(!year) {    //!year = year 값이 안 들어있다는 뜻
        alert("올바른 년도 입력");
    }
    else {
        Age += (year-2021);
    }
    return year;
}

let Age = checkAge();

if(Age >= 18) {
    alert("성년입니다");
}

alert(`당신의 현재 나이 : ${age}`); //당신의 현재 나이가 바뀌어 버림
//alert("당신의 현재 나이는 : "+age);
*/