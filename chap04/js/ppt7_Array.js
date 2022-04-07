"use strict";
/*
//배열
let fruits = ["사과", "자두", "체리"];
console.log(fruits);

fruits[2] = "망고스틴";
console.log(fruits);

fruits[3] = "딸기";
console.log(fruits);

let arr = ["사과", {name : "윤서연"}, true, function(){alert("안뇽");}];
console.log(arr);
*/

/*
//배열 - 스택
let student = ["윤서연", "이채은", "김지호", "유현아"];
console.log(student);
console.log(student.length);

student.pop();
console.log(student);
console.log(student.length);

student.push("유현아");
console.log(student);
console.log(student.length);
*/

/*
//배열 - 큐
let student = ["유현아", "윤서연", "이채은"];
console.log(student);

student.unshift("김지호");
console.log(student);

student.shift();
console.log(student);
*/

/*
//배열 주의사항 - 1
let student = ["김지호", "유현아", "윤서연", "이채은"];
console.log(student);
console.log(student.length);

student.length = 5;
console.log(student);
console.log(student.length);

student.length = 2;
console.log(student);
console.log(student.length);

student.length = 5;
console.log(student);
console.log(student.length);

student.push("이미림");
console.log(student);
console.log(student.length);
*/

/*
//배열 주의사항 - 2
let student = ["김지호", "유현아", "윤서연", "이채은"];
console.log(student.toString());

console.log();

for(let i = 0; i < student.length; i++) {
    console.log(student[i]);
}

console.log();

for(let key of student) {
    console.log(key);
}

console.log();

for(let value in student) {
    console.log(student[value]);
}
*/

/*
//배열 연습문제1
//아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.
//prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
//숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
//배열 요소의 합을 계산하고 리턴합니다.
//주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.

let num;
let numArray = [];
function sumInput() {
    while(true) {
        num = prompt("숫자를 입력해 주세요");
        if(isFinite(num) == true) {
            numArray.push(+num);
        }
        if(isFinite(num) == false || num == null || num == "") {
            break;
        }
    }
    let sum = 0;
    for(let key of numArray) {
        sum += key;
    }

    return sum;
}

alert(sumInput());
*/

/*
//배열 추가 메서드 - delete, splice
let me = ["Yoon", "Seo", "Yeon"];
console.log(me);
console.log(me.length);

delete me[1];
//me.splice(1, 1);
console.log(me);
console.log(me.length);

console.log();

let me2 = ["Yoon", "Seo", "Yeon", "Age", "18", "Love", "BTS"];
let me2_remove = me2.splice(0, 3);
console.log(me2_remove);
console.log(me2);
console.log(me2.length);
*/

/*
//배열 추가 메서드 - slice, concat
let me = ["Y", "o", "o", "n"];
console.log(me.slice(0, 2));
console.log(me.slice(1));

console.log();

let arr = [1, 2];
console.log(arr);

arr.concat([3, 4]);
console.log(arr);
*/

/*
//배열의 추가 메서드 - forEach
let list = ["A", "B", "C"];

list.forEach((item, index, list) => {
    console.log(item + " : " + index + " : " + list);
})

console.log();

for(let key in list) {
    console.log(key + " : " + list[key]);
}

console.log();

for(let value of list) {
    console.log(value);
}
*/

/*
//배열의 탐색관련 메서드 - indexOf, lastIndexOf, includes
let me = ["Y", "o", "o", "n"];
console.log(me.indexOf("o"));   //1
console.log(me.indexOf("o", 2));    //2
console.log(me.lastIndexOf("o")) //2
console.log(me.includes("y"));  //false
*/

/*
//배열의 탐색관련 메서드 - find
//employee에서 id가 2인 객체 검색
let employee = [
    {id : 1, name : "aaa"},
    {id : 2, name : "bbb"},
    {id : 3, name : "ccc"}
]

//함수 표현식
let fn = function(item, index, employee) { 
    return item.id == 2;
}
console.log(employee.find(fn));

//화살표 방식
let result = employee.find((item, index, employee) => item.id == 2);
console.log(result);
*/

/*
//배열 탐색 연습문제
//키와 이름을 갖는 배열 student 에서 키가 150이상인 학생의 이름을 검색하라.
let student = [
    {height : 155, name : "aaa"},
    {height : 142, name : "bbb"},
    {height : 153, name : "ccc"},
    {height : 147, name : "ccc"}
]

let result = student.filter((item, index, student) => item.height >= 150);
console.log(result);
*/

/*
//배열의 변형 메서드 - map
let lengths = ["aaa", "bbb", "ccc"];

//함수 표현식
let fn = function(item, index, array) {
    return item.length;
}
console.log(lengths.map(fn));

//화살표 방식
let result = lengths.map((item, index, lengths) => {
    return item.length;
})
console.log(result);
*/

/*
//배열의 변형 메서드 - sort
let arr = [1, 2, 15, 32, 45, 18, 24, 6];
arr.sort();
console.log(arr); //1, 15, 18, 2, 24, 32, 45 ,6
*/

/*
//sort 활용
//오름차순
function compareNumeric(a, b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

let arr = [1, 2, 15, 3];
arr.sort(compareNumeric);
console.log(arr);

//내림차순
function compareNumeric2(a, b) {
    if(a < b) return 1;
    if(a == b) return 0;
    if(a > b) return -1;
}

let arr2 = [1, 2, 15, 3];
arr2.sort(compareNumeric2);
console.log(arr2);
*/

/*
//배열의 변형 메서드 - reverse
let arr = [15, 48, 1, 6, 2, 8];
arr.reverse();
console.log(arr);
*/

/*
//배열의 변형 메서드 - split, join
let names = 'John, Peter, Brad';
let arr = names.split(', ');    
console.log(arr);
for(let name of arr) {
    console.log(`${name}에게 보내는 메시지`);
}
let arr1 = [1, 2, 3, 4, 5];
let str = arr1.join('=>');
console.log(str);
*/

/*
//배열 연습문제 1
//다음 배열 요소를 내림차순으로 정렬하라(let arr = [5,2,4,-9,34];)
let arr = [5,2,4,-9,34];  

function Sort(a, b) {
    if(a < b) return 1;
    if(a == b) return 0;
    if(a > b) return -1;
}

arr.sort(Sort);
console.log(arr);
*/

/*
//배열 연습문제 2
//위의 예제에서 배열을 복사하고 내림차순으로 정렬하라. 
let arr = [5,2,4,-9,34];
let arr2 = arr.slice();

function Sort(a, b) {
    if(a < b) return 1;
    if(a == b) return 0;
    if(a > b) return -1;
}

arr2.sort(Sort);
console.log(arr2);
*/

/*
//배열 연습문제 3
//상품명과 가격이 들어있는 객체가 담긴 배열 item이 있다. 
//상품의 가격만을 갖는 새로운 배열 purchase 를 생성하는 프로그램을 작성하라. 

let n = {
    name : "notebook", price : 1000
};

let p = {
    name : "pencil", price : 500
};

let e = {
    name : "eraser", price : 1500
};

let item = [
    n,
    p,
    e
]

let purchase = [];

purchase = item.map((key, index, item) => {
    return key.price;
})

console.log(purchase);
*/

/*
//배열 연습문제 4
//my-short-string”같이 여러 단어를 대시(-)로 구분한 문자열을
//카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요
let str = "my-short-string";

function Camel(str) {
    let str_split = str.split("-"); //배열
    str_split = str_split.map((str_split, index) => index == 0 ? str_split : str_split[0].toUpperCase() + str_split.slice(1));
    let result = str_split.join('');
    return result;
}

console.log(Camel(str));
*/

/*
let names = 'John, Peter, Brad';
let arr = names.split(", ");
console.log(arr);
console.log(names);

let me = ["Yoon", "Seo", "Yeon"];
console.log(me);

let arr2 = [1, 2, 3, 4];
let arr3 = arr2.join(", ");
console.log(arr2);
console.log(arr3);
*/

let me = ["Yoon", "Seo", "Yeon"];
console.log(me);
console.log(me.length);

me.pop();
console.log(me);
console.log(me.length);

for(let key in me) {
    console.log(me[key]);
}

for(let value of me) {
    console.log(value);
}