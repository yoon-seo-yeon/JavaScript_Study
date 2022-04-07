//map은 반복실행하는 콜백함수 
//리턴값이 배열
"use strict";

let arr_length = ["aaa", "bbbbbb", "cccccccc"];

let fn = function(item, index, array) {
    return item.length;
};

console.log(arr_length.map(fn));