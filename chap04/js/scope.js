"use strict";

{
    let message = "안녕하세요.";
    console.log(message);
}

//console.log(message); //블록 안에서 선언되었기 때문에 블록 밖에서는 출력할 수 없다 //오류 발생

{
    //메시지 출력
    let message = "어서오세요."; //선언 중복해서 에러 날거라고 생각할 수 있는데 위의 message와 이 message는 다른 message이기 때문에 오류가 나지 않는다
    console.log(message);
}

{
    //또 다른 메세지 출력
    let message = "안녕히 가세요.";
    console.log(message);
}