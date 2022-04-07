"use strict";
//오늘 하루가 시작된 지 몇 초가 지났는지 반환하는 함수 getSecondsToday()를 생성

function getSecondsToday() {
    //현재 시간으로 객체 생성
    let now = new Date();
    //오늘 0시 0분으로 객체 생성
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let difference = now - today;   //밀리츠의 차이

    //밀리초를 초로 변환하여 정수화
    return Math.round(difference/1000);
}

console.log(getSecondsToday());