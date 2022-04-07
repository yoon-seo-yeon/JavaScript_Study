"use strict";

//1+2+3+.......+n 을 계산하는 sumTo(n)을 재귀적 방법으로 작성하시오

function sumTo(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n-1);
    }
}

console.log(sumTo(100));    //5050