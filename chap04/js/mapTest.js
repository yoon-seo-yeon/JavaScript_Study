"use strict";

let recipeMap = new Map([
    ["cucumber", 500],
    ["tomato", 350],
    ["onion", 50]
]);

for(let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for(let price of recipeMap.values()) {
    console.log(price);
}

for(let entry of recipeMap.entries()) {
    console.log(entry);
}

recipeMap.forEach((value, key, recipeMap) => {
    console.log(`${key} : ${value}`);
});