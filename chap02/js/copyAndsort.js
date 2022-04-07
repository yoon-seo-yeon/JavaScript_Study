//dsort.js 예제에서 배열을 복사하고 내림차순으로 정렬하라
"use strict";

let arr = [5, 2, 4, -9, 34];
let arr2 = arr.slice();

function compareN(a, b) {
    if(b > a) return 1;
    if(b == a) return 0;
    if(b < a) return -1;
}

arr2.sort(compareN);
console.log(arr2);