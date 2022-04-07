"use strict";

let user = {
    name : "John", age : 30
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요? 키를 입력하세요");
//변수로 접근
alert(user[key]);
//alert(user.key); -> undefined 나옴