"use strict";

let users = [
    {id : 1, name : "John"},
    {id : 2, name : "Pete"}, 
    {id : 3, name : "Mary"}
]

// let result = users.find((item, index, users)=>{
//     return item.id==1;
// })

let result = users.find(function(item, index, users){
    return item.id==1;
});

console.log(result.name);