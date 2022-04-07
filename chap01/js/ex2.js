"use strict";

let who = {
    name:"mirim",
    age : 18,
    nice_programmer : "yes"
}

who.subject = "javascript";
delete who.nice_programmer;

console.log(who.nice_programmer);