"use strict";

let a = function() {
    alert("Hello");
};

a();
alert(a);   //funciton 함수 전체가 뜸

let b = a;  //함수 복사
let c = a;  //함수 복사
b();
c();
