/**
 * Created by Administrator on 2014/11/23.
 */
function saveStorage(id){
    var target=document.getElementById(id);
    var str=target.value;
    sessionStorage.setItem("mess",str);
}
function  loadStorage(id) {
    var target=document.getElementById(id);
    var msg=sessionStorage.getItem("mess");
    target.innerHTML=msg;
}
