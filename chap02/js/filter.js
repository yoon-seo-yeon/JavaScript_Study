//filter는 있는거 다 찾기 
//ex)id 3인거 엄복동 신림동 다 나옴 
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
console.log(employee.filter(fn));

//화살표 함수
let result1 = employee.filter((item, index, employee) => item.id==3);
console.log(result1);        

//이름이 신림동인 것 
let result2 = employee.filter((item, index, employee) => item.name=="신림동");
console.log(result2);