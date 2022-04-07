"use strict";

let a;
let message;
age = prompt("나이를 입력 : ");


if (age < 3) {
    message = '아기야 안녕?';
}
else if (age < 18) {
    message = '안녕!';
}
else if (age < 100) {
    message = '환영합니다!';
}
else {
    message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
}

/*
message = (age < 3) ? '아기야 안녕?' :
          (age < 18) ? '안녕!' :
          (age < 100) ? '환영합니다!' :
          '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
*/
 alert(message);