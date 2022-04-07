"use strict";

let age;
age = prompt("나이 입력 : ");

// if (age >= 18 && age <=100) {
//     alert("성인");
// }

if (!(age < 18 || age > 100)) {
    alert("성인");
}
