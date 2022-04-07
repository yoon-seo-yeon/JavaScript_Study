"use strict";

/*
//맵과 셋 - 1
// let map = new Map();
// map.set("name", "Yoon Seo Yeon");
// map.set("age", 18);
let map = new Map([
    ["name", "Yoon Seo Yeon"],
    ["age", 18]
])

console.log(map);
console.log(map.get("name"));       //YoonSeoYeon
console.log(map.get("age"));        //18

console.log(map.has("name"));       //true
console.log(map.has("age"));        //true
console.log(map.has("height"));     //false
console.log(map.size);

map.delete("age");
console.log(map);

console.log(map.size);              //1

map.clear();
console.log(map);
console.log(map.has("name"));
*/

/*
//맵과 셋 - 2
let student = {
    name : "Yoon Seo Yeon"
}
let me = new Map();
me.set(student, 2112);
console.log(me);
console.log(me.get(student));

let me2 = new Map([
    ["name", "Yoon Seo Yeon"],
    ["age", 17],
    ["height", 159]
]);

console.log(me2);
me2.set("weight", 47);
console.log(me2);
me2.set("age", 18);
console.log(me2);
*/

/*
//맵과 set 메서드의 호출 체이닝
let map = new Map();
map.set("1", "str1").set("2", "str2").set("3", "abc");
console.log(map);
map.set("4", "def");
console.log(map);
*/

/*
//객체->맵 / 맵->객체
//객체 -> 맵
let me = {
    name : "Yoon Seo Yeon",
    age : 18
};

let me_map = new Map(Object.entries(me));
console.log(me); //객체
console.log(me_map);    //맵
console.log(me_map.get("age"));
me_map.set("height", 159);
me.weight = 47;
console.log(me);
console.log(me_map);
for(let key in me) {
    console.log(me[key]);
}
for(let value of me_map) {
    console.log(value);
}

console.log();

//맵->객체
let fruits = Object.fromEntries([
    ["cherry", 10],
    ["peach", 5],
    ["strawberry", 7]
]);
console.log(fruits);

for(let i in fruits) {
    console.log(i + " : " + fruits[i]);
}
*/

/*
//맵 요소에 반복작업
let me = new Map([
    ["name", "Yoon Seo Yeon"],
    ["age", 18],
    ["height", 159],
    ["weight", 47]
]);

//키를 대상으로 순회
for(let item of me.keys()) {
    console.log(item);
}
console.log();
//값을 대상으로 순회
for(let amount of me.values()) {
    console.log(amount);
}
console.log();
//[키, 값] 쌍을 대상으로 순회
for(let entry of me.entries()) {
    console.log(entry);
}
console.log();
me.forEach((item, index, me) => {
    console.log(`${index} : ${item}`);
})
*/

/*
//나중에 다시
//맵실습 예제
//애너그램(anagram)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이  
//애너그램으로 만든 단어를 걸러내는 함수 aclean( )을 적성해보자
//힌트: 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬하여 동일한 단어를 걸러낸다.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

}

console.log(aclean(arr));
*/

/*
//셋
let set = new Set();
set.add("Yoon");
set.add("Seo");
set.add("Yeon");
console.log(set);

set.add("yeon");
set.add("Yeon");
console.log(set);

set.delete("yeon");
console.log(set);

console.log(set.has("yeon"));
console.log(set.has("Yeon"));

console.log(set.keys());

console.log(set.values());

console.log(set.entries());
*/

/*
//셋의 값에 반복 작업
let set = new Set([
    "oranges",
    "apples",
    "bananas"
]);

for(let value of set) {
    console.log(value);
}
set.forEach((item, index, set) => {
    console.log(index + " : " + item);
})
*/

/*
//구조 분해 할당 - 배열 분해1
let arr = [1, 2, 3];
let one = arr[0];
console.log(one);

const arr2 = [4, 5, 6];
const[first, second, third] = arr2;
console.log(first);

let[i, j = 7, k = 5] = [10, 3];
console.log(i, j, k);

let [c, d] = [3, 4];
console.log(d);

let [e, f] = [5, 6, 7, 8];
console.log(e);

let [g, h] = [1, 2, 3];
console.log(g, h);
*/

/*
//구조 분해 할당 - 배열 분해2
let [fruits1, fruits2, ... rest] = ["cherry", "mango", "peach", "apple", "grape"];
console.log(fruits1);   //cherry
console.log(fruits2);   //mango
console.log(rest[0]);   //peach
console.log(rest[1]);   //apple
console.log(rest.length); //3

let[a, b, c] = [1, 2];
console.log(c);
*/

/*
//구조 분해 할당 -  객체 분해1
let me = {
    name : "Yoon Seo Yeon",
    age : 18,
    height : 159,
    weight : 47
};

let {name, age} = me;
console.log(name);
console.log(age);

let {weight, height, name2} = {name2 : "seo yeon", height : 159, weight : 47};
console.log(weight);
console.log(height);
console.log(name2);
*/

/*
//구조 분해 할당 - 객체 분해2
let me = {
    name : "seo yeon",
    age : 18,
    height : 159
};

let{name : n, age : a, height : h} = me;
console.log(n);
console.log(a);
console.log(h);
*/

/*
//구조 분해 할당 - 중첩구조 분해
let options = {
    size : {
        width : 100,
        height : 200
    },
    items : ["Cake", "Donut"],
    extra : true
};

let {
    size : {
        width, height
    },
    items : [item1, item2],
    title = "Menu"
} = options;

console.log(height);
console.log(item1);
*/

/*
//구조 분해 할당 - 함수매개변수의 활용
let options = {
    title : "My menu",
    items:["Item1", "Item2"]
}

function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    console.log(`${title}, ${width}, ${height}`);
    console.log(items);
}
showMenu(options);
*/

/*
//구조 분해 할당 - 연습문제1
//최대 급여 계산하기
let salaries = {
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
};

function topSalary(salaries) {
    
}
*/