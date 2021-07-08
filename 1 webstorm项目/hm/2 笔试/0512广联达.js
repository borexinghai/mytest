/*
function f(s) {
    var arr=s.split(/[A-Z]+/);   //这边得有给＋，不然出错，
    //console.log('1:'+arr);

    var i=0,
        result=-1;
    for(i=0;i<arr.length;i++){
        //var str=arr[i].match(/[a-z]{1}/g);
        //console.log('2:'+str);
        var brr=arr[i].split('');
        for(var j=0;j<brr.length;j++){
            for(var k=j+1;k<brr.length;k++){
                if(brr[j]==brr[k]){
                    brr.splice(k,1);
                }
            }
            //console.log('3:'+brr);
        }
        str=brr.join('');  //要加’‘，否则返回‘1，2，3’，而不能返回’123‘
        //console.log('4:'+str);
        if(str.length>=2 &&str.length>result){
            result=str.length;
        }
    }
    return result;
}

var s='aaAbbcc';
s='aaBBBbocBaAb';
result=f(s);
console.log(result);


function ff(){
    var crr=[['q','w','e','f'],
        ['a','w','a','d'],
        ['s','0','0','s'],
        ['a','s','d','f']
    ];

    /!*crr=[['q','w','e'],
        ['a','w','a'],
        ['s','0','0']
    ];*!/
    var time=Math.floor((crr.length+1)/2);
    var s='';
    for(var i=0;i<time;i++){
        console.log(i);
        var d=crr[i];
        for(var j=0;j<i;j++){
            d.pop();
            d.shift();
        }
        s+=d.join('');
        console.log('上'+s);

        for(var j=i+1;j<crr.length-1-i;j++){
            s=s+crr[j][crr.length-1-i];
        }
        console.log('右'+s);

        var wei=crr[crr.length-1-i].reverse();
        for(var j=0;j<i;j++){
            wei.pop();
            wei.shift();
        }
        //wei=wei.reverse();
        s+=wei.join('');
        console.log('下'+s);

        for(var j=crr.length-2-i;j>i;j--){
            s=s+crr[j][i];
        }
        console.log('左'+s);
    }
    var a=s.split('');

    if(crr.length%2==0) {
        a.pop();
        a.pop();
    }else{
        a.pop();
    }
    s=a.join('');
    console.log(s);
}

*/

function fff(m,n,k,line) {
    /*    修剪花的费用：
    输入：4 2 1
        3125
    输出：17
    总共4朵花，2是修花标准，每次修剪，右边的花加上1*/
    var result=0;
    for(var i=0;i<line.length;i++){
        if(line[i]>n){
            result+=line[i]-n;
            for(var j=i+1;j<line.length;j++){
                line[j]=line[j]+k;
            }
        }
    }
    console.log(result);
    return result;
}
var m,n,k,line,result;
m=4;n=2,k=1;line=[3,1,2,5];
fff(m,n,k,line);
