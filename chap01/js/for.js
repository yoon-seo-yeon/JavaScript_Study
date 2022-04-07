"use strict";

let sum = 0, odd = 0, even = 0;

for(let i=1; i<=50; i++) {
    sum+=i;
    if(i%2==1) {
        odd+=i;
    }
    else {
        even+=i;
    }
};
document.getElementById("sum").value = sum;
document.getElementById("odd").value = odd;
document.getElementById("even").value = even;