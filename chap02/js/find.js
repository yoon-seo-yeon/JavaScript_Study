//find는 id 3인거 엄복동만 나옴 filter예제 같이 보기
"use strict";

let employee = [
    {id : 1, name : "홍길동"},
    {id : 2, name : "나미림"},
    {id : 3, name : "엄복동"},
    {id : 3, name : "신림동"}
];

//id값으로 name 검색

//함수표현식
let fn = function(item, index, employee) {
    return item.id == 3;
};
console.log(employee.find(fn));

//화살표 함수
let result1 = employee.find((item, index, employee) => item.id==3);
console.log(result1);  //item, index, employee는 find 함수를 호출한 곳에서 가져온다
//item은 id : 1, name : "홍길동" 이런 것
//employee는 find를 호출한 배열
//let result1 = employee.find((item, index, list) => item.id==3);
//console.log(result1);
//employee자리의 이름을 list로 바꿔도 잘 실행된다 
//자바스크립트는 자리만 잘 맞춰주면 된다

//이름이 신림동인 것 
let result2 = employee.find((item, index, employee) => item.name=="신림동");
console.log(result2);
//index뒤에 employee를 빼도 잘 실행된다
// let result2 = employee.find((item, index) => item.name=="신림동");
// console.log(result2);
//자바스크립트는 빼도 뒤에 employee가 온다는걸 스스로 안다