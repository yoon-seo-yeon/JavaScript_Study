// "use strict";
let a, b;

function pow(i, j) {
    let m;
    let k;
    k=i;
    for(m=1; m<j; m++) {
        k=k*i;
    }
    return alert(k);
}

a=Number(prompt("number 1 : "));
b=Number(prompt("number 2 : "));
pow(a, b);