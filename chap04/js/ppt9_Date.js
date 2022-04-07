"use strict";

/*
//다양한 방법으로 날짜 출력
let now = new Date();
alert(now);

let Jan01_1970 = new Date(0);
alert(Jan01_1970);

let Jan02_1970 = new Date(24 * 60 * 60 * 1000);
alert(Jan02_1970);
*/

/*
//Date 객체 - new Date(dateString), new Date(year, month[, day, hour, minute, second, millisecond]);
let Jul_05_2012 = new Date("July 5, 2012");
console.log(Jul_05_2012);

let Ju_05_2012 = new Date("Jul 5, 2012");
console.log(Ju_05_2012);

let Jul_05_2012_2 = new Date("5 July, 2012");
console.log(Jul_05_2012_2);

let Jul_05_2012_3 = new Date("07/05/2012");
console.log(Jul_05_2012_3);

let Jul_05_2012_4 = new Date("07/05/2012 13: 30");
console.log(Jul_05_2012_4);

let Jul_05_2012_5 = new Date("Thu, 05 Jul 2012 13:30:00 GMT-0500");
console.log(Jul_05_2012_5);

console.log();
let date = new Date() ;
console.log(date);

let date1 = new Date(2021, 9, 13, 23, 20);
console.log(date1);
*/

/*
//Date 객체 메서드 - Date.now(), Date.parse(), Date.getFullYear()...
console.log(Date.now());
let m = new Date(Date.now());
console.log(m);

let now = new Date();
console.log(now.getTime());

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms);
let ms2 = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
console.log(ms2);

let date = new Date();
let yyy = date.getFullYear();
let mmm = date.getMonth();
let ddd = date.getDate();
let hhh = date.getHours();
let mi = date.getMinutes();
let se = date.getSeconds();
let milli = date.getMilliseconds();
console.log(yyy);
console.log(mmm + 1);
console.log(ddd);
console.log(hhh);
console.log(mi);
console.log(se);
console.log(milli);
*/

/*
//참고 : Date 메서드
let date = new Date();
console.log(date);
//1997.10.13.09.01.13.1013
date.setFullYear(1997);
date.setMonth(9);
date.setDate(13);
date.setHours(18);
date.setMinutes(1);
date.setSeconds(12);
date.setMilliseconds(1013);
console.log(date);
*/

/*
//자동고침
//2020년 2월 28일 이틀 후의 날짜를 구하라
let date = new Date(2020, 1, 28);
console.log(date);
date.setDate(date.getDate()+2);
console.log(date);
*/

/*
//Date 객체 - 실습예제_1
//오늘 날짜에 해당하는 객체 today를 생성하여 출력하시오
let today = new Date(2021, 8, 27);
alert(today);
alert(`오늘은 ${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일입니다`);
*/

/*
//Date 객체 - 실습예제_2
//날짜를 입력하면  ”MON”,”WED”,”THU”,”FRI”,”SA”,”SUN” 이라고 출력하는 함수 getWeekDay(date)를 생성하시오. 
let someday = new Date(2021, 8, 26);

function getWeekday(someday) {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[someday.getDay()];
}

alert(getWeekday(someday));
*/

/*
//Date 객체 - 실습예제_3
//오늘 하루가 시작된 지 몇 초가 지났는지 반환하는 함수 getSecondsToday( )를 생성하시오.   
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let second = now-today;
    return Math.round(second/1000);
}
alert(getSecondsToday());
*/

/*
//Date 객체 - 실습예제_4
//오늘 하루가 끝날 때까지 몇 초가 남았는지 반환하는 함수 getSecondsToTomorrow( )를 생성하시오. 
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let second = tomorrow - now;
    return Math.round(second/1000);
}

alert(getSecondsToTomorrow());
*/

/*
//Date 객체 - 실습예제_5
//구입날짜로부터 30일간 교환이 가능하다고 할 때  구입 날짜를 입력 받아 교환 가능 여부를 판단하는 
//함수  calculate( )를 작성하시오

function calculate() {
    let year = prompt("구입 년도를 입력해 주세요");
    let month = prompt("구입 월을 입력해 주세요");
    let date = prompt("구입 날짜를 입력해 주세요");
    
    let p_date = new Date(year, month, date);
    let now = new Date();

    let difference = now - p_date;
    difference = Math.floor(difference/24*60*60*1000);

    if(difference > 30) {
        alert("교환이 불가능합니다");
    }
    else {
        alert("교환이 가능합니다");
    }
}

calculate();
*/

/*
//JSON 객체
let obj = {
    name : "Lee",
    age : 20,
    alive : true,
    hobby : ["music", "tennis"]
}

let todo = [
    {id : 1, content : "HTML"},
    {id : 2, content : "CSS"},
    {id : 3, content : "JavaScript"}
]

let json = JSON.stringify(obj);
console.log(typeof json, json);

let todos = JSON.stringify(todo);
console.log(typeof todos, todos);
*/

/*
//JSON객체 - 주의사항
let room = {
    number : 23
}

let meetup = {
    title : "Conference",
    participants: ["john", "ann"]
}

meetup.place = room;
room.occupiedBy = meetup;
JSON.stringify(meetup);
*/

/*
//JSON.stringify의 다양한 예
let obj = {
    name : "Yoon",
    age : 18,
    alive: true,
    hobby:["music", "tennis"]
}

let todo = [
    {id: 1, content: "HTML"},
    {id: 2, content: "CSS"},
    {id: 3, content: "JavaScript"}
]

let json = JSON.stringify(obj);
console.log(typeof json, json);

let todos = JSON.stringify(todo);
console.log(typeof todos, todos);

//space 로 가독성 높임
let prettyJson = JSON.stringify(obj, null, 2); //2칸씩 들여쓰기
console.log(prettyJson);

//값이 type이 Number이면 필터링되어 변환되지 않는다
function filter(key, value) {
    return typeof value === "number" ? undefined : value;
}

//replacer로 원하는 프로퍼티만 변환 가능
let filterObj = JSON.stringify(obj, filter, 2);
console.log(filterObj);
*/

/*
//JSON 객체 - toJSON()
let room = {
    number : 18
}
let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
}
console.log(meetup);
console.log(JSON.stringify(meetup));

console.log();

let room2 = {
    number : 18,
    toJSON() {
        return this.number;
    }
}
let meetup2 = {
    title: "Conference",
    room2
}
console.log(JSON.stringify(room2));
console.log(JSON.stringify(meetup2));
*/

/*
//JSON 객체 - JSON.parse(역직렬화)
let obj = {
    name : "Yoon",
    age : 18,
    alive: true,
    hobby:["music", "tennis"]
}

let todo = [
    {id: 1, content: "HTML"},
    {id: 2, content: "CSS"},
    {id: 3, content: "JavaScript"}
]

let json = JSON.stringify(obj);
console.log(typeof json, json)
let parsed1 = JSON.parse(json);
console.log(typeof parsed1, parsed1);

console.log();

let json2 = JSON.stringify(todo);
console.log(typeof json2, json2);
let parsed2 = JSON.parse(json2);
console.log(typeof parsed1, parsed2);
*/