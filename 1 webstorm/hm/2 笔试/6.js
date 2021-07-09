var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',function(line){
    //line为输入的单行字符串，split函数-通过空格将该行数据转换成数组
    var arr = line.split(' ');
    //数组arr的每一项都是字符串格式，若需要整型，则需要parseInt将其转换成数字
    console.log(parseInt(arr[0])+parseInt(arr[1]));
    console.log(typeof 'line');
    console.log('line');
})
