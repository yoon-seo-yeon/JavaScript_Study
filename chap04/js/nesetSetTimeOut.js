"use strict";

let timerId = setTimeout(function clock() {
    let today = new Date();
    let now = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    console.log(now);
    timerId = setTimeout(clock, 1000);
}, 1000);

// setTimeout(() => console.log("World"));
// console.log("Hello");