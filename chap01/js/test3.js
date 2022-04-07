"use strict";

let stationary = prompt("어떤 학용품을 구매하시겠습니까?");

let bag = {
    [stationary] : 10
};

alert(bag[stationary]);

let cnt = Number(prompt("몇 개 구입하시겠습니까?"));
bag[stationary] = 10 + cnt;

alert(bag[stationary]);