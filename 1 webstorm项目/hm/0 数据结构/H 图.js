function Stack(){
    var items=[];
    this.push=function (element) {
        items.push(element);
    };
    this.pop=function () {
        return items.pop();
    };
    this.peek=function () {
        return items[items.length-1];
    };
    this.isEmpty=function () {
        return items.length===0;
    };
    this.size=function () {
        return items.length;
    };
    this.clear=function () {
        items=[];
    };
    this.print=function () {
        console.log(items.toString());
    };
}
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
function Dictionary(){
    var items={};  //对象的意思
    this.has=function(key){
        return key in items;
    };
    this.set=function(key,value){
        items[key]=value;
    };
    this.delete=function (key) {
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false
    };
    this.get=function(key){
        return this.has(key) ? items[key] : undefined;
    };
    this.values=function () {
        var values=[];
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };
    this.clear=function () {
        items={};
    };
    this.size=function () {
        return Object.keys(items).length;
    };
    this.keys=function () {
        return Object.keys(items);
    };
    this.getItems=function () {
        return items;
    };
}

function Graph(){
    var vertices=[];
    var adjList=new Dictionary();
    this.addVertex=function(v){
        vertices.push(v);
        adjList.set(v,[]);
    };
    this.addEdge=function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);  //是否有向，有向此行注释掉
    };
    this.toString=function(){
        var s='';
        for(var i=0;i<vertices.length;i++){
            s += vertices[i] + '->';
            var neighbors = adjList.get(vertices[i]);
            for(var j=0;j<neighbors.length;j++){
                s += neighbors[j]+ ' ';
            }
            s += '\n';
        }
        return s;
    };
    this.print1=function () {
        console.log(vertices[0])
    };
    this.print2=function () {
        console.log(adjList.get('A'));
    };

    var initializeColor=function () {
        var color=new Dictionary();
        for(var i=0;i<vertices.length;i++){
            color.set(vertices[i],'white');
        }
        return color;
    };
    this.bfs=function (v,callback) {
        var color=initializeColor(),
            queue=new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()){
            var u=queue.dequeue(),
                neighbors=adjList.get(u);
            color.delete(u);
            color.set(u,'grey');
            for(var i=0;i<neighbors.length;i++){
                var w=neighbors[i];
                if(color.get(w)==='white'){
                    color.delete(w);
                    color.set(w,'grey');
                    queue.enqueue(w);
                }
            }
            color.delete(u);
            color.set(u,'black');
            if(callback){
                callback(u);
            }
        }
    };
    this.BFS=function (v) {
        var color=initializeColor(),
            queue=new Queue(),
            d=new Dictionary(),
            pred=new Dictionary();
        queue.enqueue(v);

        for(var i=0;i<vertices.length;i++){
            d.set(vertices[i],0);
            pred.set(vertices[i],null);
        }

        while (!queue.isEmpty()){
            var u=queue.dequeue(),
                neighbors=adjList.get(u);
            color.delete(u);
            color.set(u,'grey');
            for(var i=0;i<neighbors.length;i++){
                var w=neighbors[i];
                if(color.get(w)==='white'){
                    //color.delete(w);
                    color.set(w,'grey');

                    d.set(w,d.get(u)+1);
                    pred.set(w,u);
                    queue.enqueue(w);
                }
            }
            //color.delete(u);
            color.set(u,'black');
        }
        return{   //返回的是一个对象，distances是属性名，后面是属性值；该属性值也是一个对象，这就是一个{}对象，最普通的对象，可以用  对象.predecessors[key] 来获取其对应的值
            distances:d.getItems(),
            predecessors:pred.getItems()
        };
    };

    this.dfs=function (callback) {
        var color=initializeColor();
        for(var i=0;i<vertices.length;i++){
            if(color.get(vertices[i])==='white'){
                dfsVisit(vertices[i],color,callback);
            }
        }
    };
    var dfsVisit=function (u,color,callback) {
        color.set(u,'grey');
        if(callback){
            callback(u);
        }
        var neighbors=adjList.get(u);
        for(var i=0;i<neighbors.length;i++){
            var w=neighbors[i];
            if(color.get(w)==='white'){
                dfsVisit(w,color,callback);
            }
        }
        color.set(u,'black');
    };

    var time=0;
    this.DFS=function () {  //对于图G，DFS算法遍历图G的所有节点，构建“森林”（有根树的一个集合）以及一组源节点（根），并输出这两个数组：发现时间和完成探索时间。
        var color=initializeColor(),
            d=new Dictionary(),
            f=new Dictionary(),
            p=new Dictionary();
        time=0;
        for(var i=0;i<vertices.length;i++){
            d.set(vertices[i],0);     //顶点u的发现时间
            f.set(vertices[i],0);      //当顶点u被标注为黑色时，u的完成探索时间
            p.set(vertices[i],null);    //顶点u的前溯点
        }
        for(var i=0;i<vertices.length;i++){
            if(color.get(vertices[i])==='white'){
                DFSVisit(vertices[i],color,d,f,p);
            }
        }
        return{   //返回的是一个对象，distances是属性名，后面是属性值；该属性值也是一个对象，这就是一个{}对象，最普通的对象，可以用  对象.predecessors[key] 来获取其对应的值
            distances:d.getItems(),
            finished:f.getItems(),
            predecessors:p.getItems()
        };
    };
    var DFSVisit=function (u,color,d,f,p) {
        console.log('discovered '+u)
        color.set(u,'grey');
        d.set(u,++time);
        var neighbors=adjList.get(u);
        for(var i=0;i<neighbors.length;i++){
            var w=neighbors[i];
            if(color.get(w)==='white'){
                p.set(w,u);
                DFSVisit(w,color,d,f,p);
            }
        }
        color.set(u,'black');
        f.set(u,++time);
        console.log('explored '+u);
    };
}

function printNode(value) {
    console.log('Visited vertix:'+value);
}

/*var graph=new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.print1();
graph.print2();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
graph.print2();
console.log('********* printing graph ***********');*/
//console.log(graph.toString());//创建邻接表

//graph.bfs(myVertices[0],printNode);//遍历bfs

/*
var shortestPathA=graph.BFS(myVertices[0]);
console.log(shortestPathA);  //BFS最短路径算法
*/

/*var fromVertex=myVertices[0];
for(var i=1;i<myVertices.length;i++){
    var toVertex=myVertices[i],
        path=new Stack();
    for(var v=toVertex;v!==fromVertex;v=shortestPathA.predecessors[v]){  //点表示类的一个对象的某个属性，[]用来获取一个对象的某个属性值，没有类，就是自由的对象,这里的v是个字符串有引号的，用.来取对象的属性，不加引号
        path.push(v);
    }
    path.push(fromVertex);
    var s=path.pop();
    while (!path.isEmpty()){
        s +=' - '+path.pop();
    }
    console.log(s);  //BFS构建从顶点A到 其他顶点的路径
}*/

//graph.dfs(printNode);//dfs遍历

/*var shortestPathB=graph.DFS();   //探索DFS算法，返回的是一个对象dfp
console.log(shortestPathB);*/

/*
var graph1=new Graph();
var myVertices1 = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < myVertices1.length; i++) {
    graph1.addVertex(myVertices1[i]);
}
graph1.addEdge('A', 'C');
graph1.addEdge('A', 'D');
graph1.addEdge('B', 'D');
graph1.addEdge('B', 'E');
graph1.addEdge('C', 'F');
graph1.addEdge('F', 'E');
var result=graph1.DFS();
console.log(result);*/



/*var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];
var INF=Number.MAX_VALUE;
function dijkstra(src){
    var dist=[],visited=[],
        //length=this.graph.length;
        length=graph.length;
    for (var i=0;i<length;i++){
        dist[i]=INF;
        visited[i]=false;
    }
    dist[src]=0;

    for(var i=0;i<length-1;i++){
        var u=minDistance(dist,visited);
        visited[u]=true;

        for (var j=0;j<length;j++){
            /!*if(!visited[v]&&this.graph[u][v]<dist[v]){
                dist[v]=dist[u]+this.graph[u][v];
            }*!/
            if(!visited[j]&&graph[u][j]!=0&&dist[u]!=INF&&dist[u]+graph[u][j]<dist[j]){
                dist[j]=dist[u]+graph[u][j];
                console.log('dist['+j+']='+dist[j]);
            }
        }
    }
    return dist;
}
function minDistance(dist,visited){
    var min=INF,minIndex=-1;
    for (var i=0;i<dist.length;i++){
        if(visited[i]==false&&dist[i]<=min){
            min=dist[i];
            minIndex=i;
        }
    }
    console.log('minIndex='+minIndex);
    return minIndex;
}
console.log("********* Dijkstra's Algorithm - Shortest Path ***********");
var dist = dijkstra(0);
for (i = 0; i < dist.length; i++){
    console.log(i + '\t\t' + dist[i]);
}*/

/*
var INF=10;
var graph = [
    [0, 2, 4, INF, INF, INF],
    [INF, 0, 2, 4, 2, INF],
    [INF, INF, 0, INF, 3, INF],
    [INF, INF, INF, 0, INF, 2],
    [INF, INF, INF, 3, 0, 2],
    [INF, INF, INF, INF, INF, 0]
];

function floydWarshall(){
    var dist=[],
        length=graph.length,
        i,j,k;

    for (i=0;i<length;i++){
        dist[i]=[];
        for (j=0;j<length;j++){
            dist[i][j]=graph[i][j];
        }
    }

    for(k=0;k<length;k++) {
        for (i = 0; i < length; i++) {
            for (j = 0; j < length; j++) {
                if(dist[i][k]+dist[k][j]<dist[i][j]){
                    dist[i][j]=dist[i][k]+dist[k][j];
                }
            }
        }
    }
    return dist;
}
var floy=floydWarshall();
console.log(floy);*/

var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];
var INF=100;
function prim() {
    var parent=[],
        key=[],
        visited=[];
    length=graph.length,
        i;
    for (i=0;i<length;i++){
        key[i]=INF;
    }

}

