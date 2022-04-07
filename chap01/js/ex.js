"use strict";

function makeUser(name, age) {
    return {
        name : name,
        age : age
    }
}

let name = prompt("이름 입력");
let age = prompt("나이 입력");

let user = makeUser(name, age);
alert(user.name);
alert(user.age);