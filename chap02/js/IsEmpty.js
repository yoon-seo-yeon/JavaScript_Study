"use strict";
function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
};

let student = {};

student["나미림"] = 2120;
student["고미림"] = 2121;

console.log(isEmpty(student));

console.log(student);