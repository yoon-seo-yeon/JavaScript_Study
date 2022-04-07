"use strict";

/*
//실행 컨텍스트-1
let x = "xxx";  //전역변수

function test() {   //선언함수
    let y = "yyy";

    function bar() {
        let z = "zzz";
        console.log(x+y+z);
    }
    console.log("ㅋ");
    bar();
}
test();
*/

/*
//실행 컨텍스트-2
//다음 두 코드의 차이점은?
// let age = 11;
// function test() {
//     age = 43;
// }
// test();
// console.log(age);

let age = 11;
function test() {
    let age = 43;
}
test();
console.log(age);
*/

/*
//재귀
//for문 방법
function pow(x, n) {
    let result = 1;
    for(let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, 3));

//재귀호출 사용
function pow2(x, n) {
    if(n==1) {
        return x;
    }else {
        return x * pow2(x, n-1);
    }
}
console.log(pow2(2, 3));
*/

/*
//다시 하기
//재귀 순회의 좋은 예
let company = {
    sales: [
        {name : "Yoon", salry: 2000},
        {name : "Alice", salry: 1600}
    ],
    development: {
        sites: [{name: "Peter", salary: 2000}, {name: "Alex", salary: 1800}],
        internals: [{name: "Jack", salary: 1300}]
    }
};
*/

/*
let list = {value : 1};
list.next = {value : 2};
list.next.next = {value : 3};
list.next.next.next = {value : 4};
list.next.next.next.next = null;
console.log(list);
*/

