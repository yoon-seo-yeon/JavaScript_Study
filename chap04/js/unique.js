"use strict";
//배열 arr에서 중복값을 제거해주는 함수 unique(arr)을 작성하시오

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values));