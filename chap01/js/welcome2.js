"use strict"; //함수 표현식

// let age=prompt("나이를 알려주세요");
// let welcome;

// if(age < 18) {
//     welcome=function() {
//         alert("안녕!");
//     }
// }else {
//     welcome=function(){
//         alert("안녕하세요!");
//     }
// }
// welcome();

let age = prompt("나이를 알려주세요", 18);
// let welcome = (age < 18) ?
//     //function() {alert("안녕!");} :
//     //function() {alert("안녕하세요!");};
//     () => {alert("안녕!");} :
//     () => {alert("안녕하세요!");};
// welcome();

let welcom = function(age) {
    if(age < 18) {
        alert("안녕");
    }
    else {
        alert("안녕하세요");
    }
}

welcom(age);