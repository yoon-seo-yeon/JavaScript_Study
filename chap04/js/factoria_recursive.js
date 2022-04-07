"use strict";

function factorial(n) {
    //if문
    if(n == 1) {
        return n;
    } else {
       return n*factorial(n-1); 
    }

    //삼항연산자
    // return n ? n * factorial(n-1) : 1;
}

console.log(factorial(5));  //120