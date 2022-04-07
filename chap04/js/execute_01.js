"use strict";

let x = 'xxx';  //전역변수

function text() {   //선언함수
    let y = 'yyy';

    function bar() {    //선언함수
        let z = 'zzz';
        console.log(x+y+z);
    }
    bar();
}

text();
//실행시 두 개의 실행 컨텍스트를 생성