"use strict";

function getSecondsToTomorrow() {
    //현재시간으로 객체 생성
    let now = new Date();
    //오늘 0시 0분으로 객체 생성
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let difference = tomorrow - now;

    return Math.rounnd(difference/1000);
}

console.log(getSecondsToTomorrow());