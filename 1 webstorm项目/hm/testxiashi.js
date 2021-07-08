/*var arr = ["孙悟空","猪八戒","沙和尚","唐僧","白骨精"];
arr.forEach(
    function(value , index , obj){
    console.log(value);
}
);*/





/*
var k=0;
  while(k=1)
    k++;
*/
//todo:1111
//fixme:

//





function main(n) {
    var num=n;

    var i=0;
    while(num!=0){
        if(num==1){
            console.log(true);
            break;
        }else {
            num=checkNum(num);
            i++;
            if(i>10){
                console.log(false);
                break;
            }
        }
    }
}
function checkNum(p) {
    var i,s=0;
    var a=p;
    while(a!=0){
        i=a%10;
        s+=i*i;
        a=Math.floor(a/10);
    }
    return s;
}
main(10030)

var ciShu=0;
cN(19);
function cN(n) {
    ciShu++;
    if(ciShu>10){
        console.log(false);
        return;
    }
    if(n==1){
        console.log(true);
        return;
    }
    var s=0,i;
    while (n>0){
        i=n%10;
        s+=i*i;
        n=Math.floor(n/10);
    }
    cN(s);
}