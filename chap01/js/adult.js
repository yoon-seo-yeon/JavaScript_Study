"use strict";

let age;
age = prompt("나이를 입력하세요 : ");

// if (age >= 18 && age <=100) {
//     alert("성인");
// }

if (!(age < 18 || age > 100)) {
    alert("성인");
}
