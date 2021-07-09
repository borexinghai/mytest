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

function LinkedList(){
    var Node=function(element){
        this.element=element;
        this.next=null;
    };
    var length=0;
    var head=null;
    this.append=function(element){
        var node=new Node(element),
            current;
        if(head===null){
            head=node;
        }else {
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;
    };
    this.insert=function (position,element) {
        if(position>-1 && position<length){
            var node=new Node(element),
                current=head,
                previous,
                index=0;
            if(position === 0){
                node.next=current;
                head=node;
            }else {
                while(index++ < position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else {
            return false;
        }
    };
    this.removeAt=function (position) {
        if(position>-1 && position<length){
            var current=head,
                previous,
                index=0;
            if(position === 0){
                head=current.next;
            }else {
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            length--;
            return current.element;
        }else {
            return null;
        }
    };
    this.remove=function (element) {
        var index=this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf=function(element){
        var current=head,
            index=-1;
        while(current){
            if(element===current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    };
    this.isEmpty=function(){
        return length===0;
    };
    this.size=function () {
        return length;
    };
    this.getHead=function () {
        return head;
    };
    this.toString=function(){
        var current=head,
            string='';
        while(current){
            string+=current.element+(current.next?'n':'');
            current=current.next;
        }
        return string;
    };
    this.print=function () {

    };
}

function HashTable(){
    var table=[];
    var loseloseHashCode=function(key){
        var hash=0;
        for(var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%37;
    };
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        console.log(position+'-'+key);
        table[position]=value;
    };
    this.get=function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove=function (key) {
        table[loseloseHashCode(key)]=undefined;
    };
    this.print=function () {
        for(var i=0;i<table.length;++i){
            if(table[i]!==undefined){
                console.log(i+':'+table[i]);
            }
        }
    };

    var ValuePair=function (key,value) {
        this.key=key;
        this.value=value;
        this.toString=function(){
            return '['+this.key+'-'+this.value+']';
        }
    };
    this.put1=function(key,value){
        var position=loseloseHashCode(key);
        if(table[position]==undefined){
            table[position]=new LinkedList();
        }
        table[position].append(new ValuePair(key,value));
    };
    this.get1=function(key){
        var position=loseloseHashCode(key);
        if(table[position]!==undefined){
            var current=table[position].getHead();
            while (current.next){
                if(current.element.key===key){
                    return current.element.value;
                }
                current=current.next;
            }
            if(current.element.key===key){
                return current.element.value;
            }
        }
        return undefined;
    };
    this.remove1=function (key) {
        var position=loseloseHashCode(key);
        if(table[position]!==undefined){
            var current=table[position].getHead();
            while (current.next){
                if(current.element.key===key){
                    table[position].remove(current.element);
                    if(table[position].isEmpty()){
                        table[position]=undefined;
                    }
                    return true;
                }
                current=current.next;
            }
            if(current.element.key===key){
                table[position].remove(current.element);
                if(table[position].isEmpty()){
                    table[position]=undefined;
                }
                return true;
            }
        }
        return false;
    };

    this.put2=function(key,value){
        var position=loseloseHashCode(key);
        if(table[position]==undefined){
            table[position]=new ValuePair(key,value);
        }else {
            var index=++position;
            while (table[position]!=undefined){
                index++;
            }
        }
        table[position]=new ValuePair(key,value);
    };
    this.get2=function(key){
        var position=loseloseHashCode(key);
        if(table[position]!==undefined){
            if(table[position].key===key){
                return table[position].value;
            }else {
                var index=++position;
                while (table[index]===undefined||table[index].key!==key){
                    index++;
                }
                if(table[index].key===key){
                    return table[index].value;
                }
            }
        }
        return undefined;
    };
    this.remove2=function(key){
        var position=loseloseHashCode(key);
        if(table[position]!==undefined){
            if(table[position].key===key){
                table[index]=undefined;
            }else {
                var index=++position;
                while (table[index]===undefined||table[index].key!==key){
                    index++;
                }
                if(table[index].key===key){
                    table[index]=undefined;
                }
            }
        }
        return undefined;
    };
}

/*var a=new Dictionary();
a.set('A',null);
a.set('B','A');
console.log(typeof a.getItems());
console.log(a.getItems());
console.log(a.getItems()['B']);

var b={'A':null,'B':'A'};
console.log(b['A']);*/

//使用es6的Map结构实现哈希表。
var twoSum = function(nums, target) {
    var myMap = new Dictionary();
    for (var i = 0; i < nums.length; i++) {
        var another = target - nums[i];
        if (myMap.has(another) && myMap.get(another) !== i) {
            return [i, myMap.get(another)];
        }
        myMap.set(nums[i], i);
    }
};

var nums=[2,7,11,15],
target=9;
console.log(twoSum(nums, target).toString());
