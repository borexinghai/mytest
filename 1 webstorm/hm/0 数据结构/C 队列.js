function Queue(){
    var items=[];
    this.enqueue=function (element) {
        items.push(element);
    };
    this.dequeue=function () {
        return items.shift();
    };
    this.isEmpty=function () {
        return items.length==0;
    };
}