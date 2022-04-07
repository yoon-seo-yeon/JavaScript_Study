"use strict";

let list = ["A", "B", "C"];

//함수 표현식
let fn = function(item, index, list) {
    console.log(item + " : " + index + " : " + list);
}

list.forEach(fn);

console.log();

//화살표 방식 (요즘은 이걸 더 많이 씀)
list.forEach((item, index, list) => {
    console.log(item + " : " + index + " : " + list);
})

console.log();

list.forEach(function(item, index, list) {
    console.log(item + " : " + index + " : " + list);
})