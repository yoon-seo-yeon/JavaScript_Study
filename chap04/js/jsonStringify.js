"use strict";

let obj = { //객체
    namd : "Lee",
    age : 20,
    alive : true,
    hobby: ["music", "tennis"]
}

let todo = [    //배열
    {id : 1, content : "HTML"},
    {id : 2, content : "CSS"},
    {id : 3, content : "JavaScript"}
];

let prettyJson = JSON.stringify(obj, null, 10); //2칸씩 들여쓰기 한다
console.log(prettyJson);

//값의 type이 Number이면 필터링되어 반환되지 않는다
function filter(key, value) {
    return typeof value === "number" ? undefined : value;
}

let filterObj = JSON.stringify(obj, filter, 2);
console.log(filterObj);

let parse = JSON.parse(prettyJson);
console.log(parse);