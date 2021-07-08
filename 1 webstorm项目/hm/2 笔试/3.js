/*输入
输入的第一行为一个正整数T，表示有T组测试数据。
随后的T行中，每行为一组测试数据。
每组测试数据包含由3个正整数构成，分别为N、M和a，其中1<=N, M, a <=10^9。
样例输入
1
6 6 4
输出
对每组测试数据，单独输出一行，为所需采购的地砖数。
样例输出
4*/

 read_line= require('readline');
var print = console.log;

var lineNum=parseInt(read_line());
for(var i=0;i<lineNum;i++){
    //var lines = read_line();
    //3
    //1 2
    //2 3
    //lineNum为3，lines['1 2','2 3']
    var arr = read_line().split(' ');
    var N=parseInt(arr[0]);
    var M=parseInt(arr[1]);
    var a=parseInt(arr[2]);
    if(N%a==0){
        var n=N/a;
    }else{
        n=Math.floor(N/a)+1;}
    if(M%a==0){
        var m=M/a;
    }else{
        m=Math.floor(M/a)+1;}
    print(n*m);
}