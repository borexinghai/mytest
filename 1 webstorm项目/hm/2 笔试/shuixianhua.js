var sc;   //定义一变量接收
//while(sc = read_line()){
while(sc = prompt('123')){
    var arr = sc.split(' ');     //
    n=parseInt(arr[1]);
    m=parseInt(arr[0]);
    if(100<=m&&m<=n&&n<=999){
        var out = [];
        var j=0;
        for(var i=m;i<=n;i++)
        {
            var geWei,shiWei,baiWei;
            baiWei=parseInt(i/100);
            shiWei=parseInt((i-baiWei*100)/10);
            geWei=i-baiWei*100-shiWei*10;
            if(i==geWei*geWei*geWei+shiWei*shiWei*shiWei+baiWei*baiWei*baiWei)
            {
                j=j+1;
                if(j>1){
                    out.push(" "+i);
                }
                else{
                    out.push(i);
                }
            }
        }
        if(j==0){
            out.push("no");
        }
        print(out.join(''));
    }
}
