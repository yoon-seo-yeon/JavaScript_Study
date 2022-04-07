"use strict";

/*
애너그램은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이
애너그램으로 만든 단어를 걸러내는 함수 aclean()을 작성
힌트: 단어를 글자 단위로 조갠 후, 알파벳 순으로 정렬하여 동일한 단어를 걸러낸다
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));      //"nap, teachers, ear"나 "PAN, cheaters, era"이 출력되어야 한다

function aclean(arr) {
    let map = new Map();
    
    for(let item of arr) {      //item은 배열의 원래값
        let sorted = item       //PAN
            .toLowerCase()      //pan
            .split('')          //[p, a, n]
            .sort()             //['a', 'n', 'p']
            .join('');          //sorted는 하나의 형식으로 정리된 값
        map.set(sorted, item);  //동일한 키가 있는 경우 덮어쓰게 한다
    }
    return Array.from(map.values());    //값 추출
}