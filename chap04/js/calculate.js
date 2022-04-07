"use strict";
//구입날짜로부터 30일간 교환에 가능하다고 할 때
//구입 날짜를 입력 받아 교환 가능 여부를 판단하는 함수 calculate()를 작성

function calculate() {
    let bdate = new Date(2021, 1, 1);
    let today = new Date();

    let difference = today = bdate;

    difference = Math.floor(difference/24*60*60*1000);   //ceil, round, floor중에 뭘 쓸지가 키포인트!

    if(difference > 30) {
        console.log("교환 불가");
    }
    else {
        console.log("교환 가능");
    }
}

calculate();