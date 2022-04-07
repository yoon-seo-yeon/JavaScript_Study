"use strict";
/*
let book = {
    5 : "JS책"
}

//book.5 = "HTML책";
console.log(book);
//console.log(book.5);

book["5"] = "HTML책";
console.log(book);
//console.log(book.5);
console.log(book["5"]);
*/

/*
let obj = {
    book : "책"
}
console.log(obj.book);
console.log(obj.sports);
console.log(obj["book"]);
console.log(obj["sports"]);
*/

/*
let user = {
    name : "Seo Yeon",
    age : 18
}

let key = "age";
console.log(user[key]);
*/

/*
//실습
//1. 이름이 “mirim”, 이고 나이가 18, “nice programmer“가 yes인 객체 who를 생성하라. 
//2. 키값이 subject이고 값이 javascript인 프로퍼티를 추가하라. 
//3. nice programmer 프로퍼티를 삭제하라. 
//4. 키 nice programmer 의 value  값을 추출하라. 

let who = {
    name : "mirim",
    age : 18,
    nice_programmer : "yes"
};

console.log(who);

who.subject = "javascript";
console.log(who);

delete who.nice_programmer;
console.log(who);

console.log(who.nice_programmer);
*/

/*
let stationary = prompt("어떤 학용품을 구매하시겠습니까?");

let bag = {
    [stationary] : 10
}

alert(bag[stationary]);

let cnt = Number(prompt("몇 개 구입하시겠습니까?"));

bag[stationary] = 10 + cnt;

alert(bag[stationary]);
*/

/*
//실습2
//키보드로부터 이름과 나이를 입력받아 객체를 생성하는 프로그램을 작성

let name = prompt("이름");
let age = prompt("나이");


let Yoon = {
    [name] : name,
    [age] : age
}
alert(Yoon);
alert(Yoon[name]);
alert(Yoon[age]);

function Yoon(name, age) {
    return {
        name : name,
        age : age
    }
}

let Yoon_User = Yoon(name, age);
alert(Yoon_User.name);
alert(Yoon_User.age);
*/

/*
//in연산자
let user = {
    name : "Yoon",
    age : 18
}

console.log("age" in user);         //true
console.log("name" in user);        //true
console.log("subject" in user);     //false
*/

/*
//for ~ in
let Yoon = {
    name : "윤서연",
    age : 18
}

for(let key in Yoon) {
    console.log(key);
    console.log(Yoon[key]);
}
*/

/*
//실습1
//다음 코드의 적당한 부분에 객체가 비어 있는지 확인하여 true , false 를 반환하는 함수 IsEmpty()를 완성하시오. 

function IsEmpty(obj) {
    for(let key in obj) {
        return true;
    }
    return false;
}

let student = {

};

student["나미림"] = 2120;
student["고미림"] = 2121;

console.log(IsEmpty(student));
*/

/*
//실습2
//1. 팀원 { aaa:150, bbb:120, ccc:180 } 의 이름과 월급을 갖는 객체 employee 를 생성하고 
//2. for in 을 이용하여 팀원들의 급여 합을 구하라. 

let employee = {
    aaa : 150,
    bbb : 120,
    ccc : 180
}

let sum = 0;

for(let key in employee) {
    sum += employee[key];
}

console.log(sum);
*/

/*
//실습3
//1. 다음 메뉴 객체의 가격을 두 배로 올리는 함수 multiply()를 완성하시오
//2. 위의 예제에서 menu를 출력하는 함수 printMenu()를 추가하여 출력하시오. 
//3. menu 에 option : “선택” 프로퍼티를 추가하고 프토퍼티 값이 숫자인 경우에 대해서만 가격을 2배로 올리시오. 

let menu = {
    hamburger : 5000,
    potato : 1000,
    cola : 1000
}

function multiply(menu) {
    for(let key in menu) {
        if(typeof(menu[key]) == "number") {
            menu[key] *= 2;
        }
    }
}

function printMenu() {
    for(let item in menu) {
        console.log(menu[item]);
    }
}

menu.option = "선택";

multiply(menu);
printMenu();
*/

/*
//객체 참조 복사
//1
let user = {
    name : "John"
}
let admin = user;
admin.name = "Pete";
console.log(user.name); //결과 : Pete

//2
let a = {
}
let b = a;
console.log(a == b);    //결과 : true 
console.log(a === b);   //결과 : true

//3
let a = {}
let b = {}
console.log(a == b);    //결과 : false
console.log(a === b);   //결과 : false
*/

/*
//객체 복제
let user = {
    name : "Yoon",
    age : 18
};

let Yoon = {};

for(let key in user) {
    Yoon[key] = user[key];
}

console.log(user);
console.log(Yoon);
*/

/*
//객체 속의 객체
let user = {
    name : "Yoon",
    sizes : {
        height : 159,
        width : 46
    }
}

console.log(user.sizes.height);
*/

/*
//메서드와 this
let user = {
    name : "John",
    age : 30
}
user.sayHi = function() {
    console.log("안뇽");
}
user.sayHi();

let master = {
    name : "Yoon",
    age : 18,
    sayYes() {
        console.log(this.name + " " + this.age);
    }
}

master.sayYes();
*/

/*
//객체 연습문제1
//calculator 라는 객체를 만들고 세 가지 메서드를 구현해보자. 
//1. read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받는다. 입력 받은 값은 객체의 프로퍼티에 저장한다.
//2. sum()은 저장된 두 값의 합을 반환합니다.
//3. mul()은 저장된 두 값의 곱을 반환합니다.

let calculator = {
    read() {
        this.num1 = +prompt("첫 번째 수 입력");
        this.num2 = +prompt("두 번째 수 입력");
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/