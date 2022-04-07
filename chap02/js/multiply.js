"usd strict";
let multi = 0;

let menu = {
    hamburger : 5000,
    potato : 1000,
    cola : 1000
};

menu.option="선택";

function multiply(menu) {
    for(let key in menu) {
        if(typeof (menu[key])=="number") {
            menu[key]*=2;
        }
    }
};

function printMenu(menu) {
    for(let item in menu) {
        console.log(item + ":" + menu[item]);
    }
};

multiply(menu);
printMenu(menu);