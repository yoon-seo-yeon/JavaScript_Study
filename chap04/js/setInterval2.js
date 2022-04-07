"use strict";

//2초 간격으로 메세지를 보여줌
let timerId = setInterval(() => console.log("째깍"), 2000);

//5초 후에 정지
setTimeout(() => {clearInterval(timerId); console.log("정지");}, 5000);