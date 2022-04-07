"use strict";

/*
//this 사용의 문제
let me = {
    firstname : "홍",
    lastname : "길동",
    introduce() {
        console.log(`My name is ${this.firstname}${this.lastname}입니다`);
    }
}

me.introduce(); //My name is 홍길동입니다
setTimeout(me.introduce, 1000); //My name is undefinedundefined입니다
*/

/*
//래퍼함수의 사용(함수로 감싸자!) - 1
let me = {
    firstname : "홍",
    lastname : "길동",
    introduce() {
        console.log(`My name is ${this.firstname}${this.lastname}입니다`);
    }
}
me.introduce(); //My name is 홍길동입니다

setTimeout(me.introduce, 1000); //My name is undefinedundefined입니다

setTimeout(function() { //My name is 홍길동입니다
    me.introduce();
}, 1000);

setTimeout(()=>me.introduce(), 1000);  //My name is 홍길동입니다
*/

/*
//래퍼함수의 사용 - 2
let me = {
    firstname : "홍",
    lastname : "길동",
    introduce() {
        console.log(`My name is ${this.firstname}${this.lastname}입니다`);
    }
}
//1초가 되기 전에 introduce()가 someone else로 재정의 되어 기대와 다르게 나타난다
setTimeout(()=>me.introduce(), 1000);   //someone else
me = {
    introduce() {
        console.log("someone else");
    }
}
*/

/*
//bind의 사용
let user = {
    firstname: "길동",
    lastname: "홍"
};

function func1() {
    console.log(this.lastname + this.firstname);
}

function func2(phrase) {
    console.log(phrase, ", " + this.lastname + this.firstname);
}

let funcUser1 = func1.bind(user);
funcUser1();

let funcUser2 = func2.bind(user);
funcUser2("Hello");
*/

/*
//this 사용의 문제 - 해결방법 bind
let me = {
    firstname: "홍",
    lastname: "길동",
    introduce() {
        console.log(`My name is ${this.firstname}${this.lastname}입니다`);
    }
};

let intro = me.introduce.bind(me);
intro();
*/

/*
//this 사용의 문제 - 해결방법 bind(부분적용)
function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
console.log(double(3)); //2, 3
console.log(double(4)); //2, 4
console.log(double(5)); //2, 5
*/

/*
//함수 바인딩 실습 예제 - 1
//다음 코드의 실행 결과는?
function f() {
    console.log(this);
}

let user = {
    g: f.bind(null)
}
user.g();   //null
*/

/*
//함수 바인딩 실습 예제 - 2
//다음 코드의 실행 결과를 예측하고 Bind함수를 이용하여 수정해보자
function aksPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name : "Yoon",
    loginOk() {
        alert(`${this.name}님이 로그인하였습니다`);
    },
    loginFail() {
        alert(`${this.name}님이 로그인에 실패하였습니다`);
    }
}
//aksPassword(user.loginOk, user.loginFail);  //실행이 제대로 되지 않는다
aksPassword(user.loginOk.bind(user), user.loginFail.bind(user));
*/

/*
//화살표 함수 다시 살펴보기
let group = {
    title: "1모둠",
    students : ["보라", "호진", "지민"],
    showList() {
        this.students.forEach(
            student => console.log(this.title + " : " + student)
        );
    }
    // showList() { //에러 발생
    //     this.students.forEach(function(student) {
    //         console.log(this.title + " : " + student)
    //     });
    // }
};

group.showList();
*/