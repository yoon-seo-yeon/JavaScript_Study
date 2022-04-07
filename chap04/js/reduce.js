"use strict";

const oneTowThree = [1, 2, 3];

let result = oneTowThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
    }, 0);

console.log(result);