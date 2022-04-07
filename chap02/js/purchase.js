"use strict";

//상품명과 가격이 들어있는 객체가 담긴 배열 item이 있다 
//상품의 가격만을 갖는 새로운 배열 purchase를 생성하는 프로그램 작성

//객체
let n = {name : "notebook", price : 1000};
let p = {name : "pencil", price : 500};
let e = {name : "eraser", price : 1500};

//작성
let item = [
  n,p,e
]

let purchase = item.map(key => key.price); 
/*
let purchase = item.map((key, index, array) => {
  return key.price;
});
*/

console.log(purchase);

//가격의 합
let sum = 0;
purchase.forEach((price)=>{
  sum+=price;
});

console.log(sum);