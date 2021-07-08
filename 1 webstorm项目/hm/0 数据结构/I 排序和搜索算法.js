function ArrayList(){
    var array=[];
    this.insert=function (item) {
        array.push(item);
    };
    this.toString=function () {
        return array.join('-');
    };

    this.quickSort=function () {
        quick(array,0,array.length-1);
    };
    var quick=function (array,left,right) {
        var index;
        if(array.length>1){
            index=partition(array,left,right);

            if(left<index-1){
                quick(array,left,index-1);
            }
            if(index<right){
                quick(array,index,right);
            }
        }
    };
    var partition=function (array,left,right) {
        var pivot=array[Math.floor((right+left)/2)],
            i=left;
        j=right;
        while(i<=j){
            while(array[i]<pivot){
                i++;
            }
            while(array[j]>pivot){
                j--;
            }
            if(i<=j){
                swap(array,i,j);
                i++;
                j--;
            }
        }
        return i;
    };

    var swap=function (array,index1,index2) {
        var aux=array[index1];
        array[index1]=array[index2];
        array[index2]=aux;
    };
}

function createNonSortedArray(size){
    var array=new ArrayList();
    for(var i=size;i>0;i--){
        array.insert(i);
    }
    return array;
}

/*array=createNonSortedArray(7);
console.log(array.toString());
array.quickSort();
console.log(array.toString());*/

var array=new ArrayList();
array.insert(3);
array.insert(5);
array.insert(1);
array.insert(2);
array.insert(4);
array.insert(7);
array.insert(6);
console.log(array.toString());
array.quickSort();
console.log(array.toString());