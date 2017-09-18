arr = [2,4,6,8,10];
arr1 = [2,3,4,6,8];
function even(value){
    if( (value % 2) == 0){
        return true;
    }else{
        return false;
    }
}

var out = arr.filter(even);
var out1 = arr1.filter(even);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);