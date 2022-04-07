"use strict";
//bind 두 번 적용하기 - 모던 자바스크립트

function f() {
    console.log(this.name);
}

f = f.bind({name : "John"}).bind({name : "Ann"});
f();