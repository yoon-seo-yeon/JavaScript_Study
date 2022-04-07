//다음 배열 요소를 내림차순으로 정렬하라
//let arr = [5, 2, 4, -9, 34];
"use strict";

let arr = [5, 2, 4, -9, 34];

function compareN(a, b) {
    if(b > a) return 1;
    if(b == a) return 0;
    if(b < a) return -1;
}

arr.sort(compareN);
console.log(arr);