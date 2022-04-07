"use strict";

//숫자만 추출하기 : 달러 표시가 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정하고
//120만 추출해내는 extraCurrencyValue(str)을 작성

let str = "$120";

function extraCurrencyValue(str) {
    return str.slice(1);
}

console.log(extraCurrencyValue(str));