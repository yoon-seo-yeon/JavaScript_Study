let num;
num=prompt("숫자를 입력하세요 : ");

outer: for(i=2;i<=num;i++){
    for(j=2;j<i;j++){
        if(i%j == 0) continue getPrime;   
    } 
    alert(i);   
}