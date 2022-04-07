"use strict";

function from_to(from, to) {
    let start = from;
    let timerId = setInterval(() => {
        console.log(start);
        if(start == to) {
            clearTimeout(timerId);
        }
        start++;
    }, 1000);
};

from_to(4, 20);