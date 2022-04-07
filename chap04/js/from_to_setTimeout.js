"use strict";

function from_to(from, to) {
    let start = from;
    setTimeout(function go() {
         console.log(start);
        if(start < to) {
            setTimeout(go, 1000);
        }
        start++;
    }, 1000);
};

from_to(5, 20);