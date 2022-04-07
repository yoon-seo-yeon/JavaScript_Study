"use strict";

let age = 11;
function test() {
    age = 43;
}

test();
alert(age);

//////////////

let age = 11;
function test() {
    let age = 43;
}

test();
alert(age);