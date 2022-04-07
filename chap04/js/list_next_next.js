"use strict";
//다음 리스트를 출력하는 프로그램을 재귀적 방법으로 작성하시오

// let list = {value: 1};
// list.next = {value: 2};
// list.next.next = {value: 3};
// list.next.next.next = {value: 4};
// list.next.next.next.next = null;


let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};
list.next.next.next.next = null;

function print(list) {
    //가장 단순화한 값을 출력
    console.log(list.value);

    //나머지 요소를 출력
    if(list.next) {
        print(list.next);
    }
}

print(list);