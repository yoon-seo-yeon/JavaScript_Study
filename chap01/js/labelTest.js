"use strict";
/*
for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
        let input = prompt(`(${i}, ${j})의 값`, '');
        if(!input) break;
    }
}
*/
outer: for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
        let input = prompt(`(${i}, ${j})의 값`, '');
        if(!input) break outer;
    }
}
alert('완료!');

//취소 버튼을 눌러도 '완료!'라는 메시지를 바로 볼 수 없다.
//왜냐하면 ineer for 문장에 대해서만 break가 동작하기 때문
//이럴 경우 사용하는 것이 label이다.