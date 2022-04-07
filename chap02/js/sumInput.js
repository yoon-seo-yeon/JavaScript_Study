"use strict";
//다시 풀기
function sumInput() {
    let num;
    let arr=[];
    let sum=0;
    while(true) {
        num=prompt("숫자를 입력하세요");

        if(num==null || num=="" || !isFinite(num)) 
            break;
            
        arr.push(+num);
    }

    for(let item of arr) {
        sum+=item;
    }
    return sum;
}

alert(sumInput());