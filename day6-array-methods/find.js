arr = [2,4,6,8,10];
arr1 = [2,3,4,7,8];
function odd(value){
    if( (value % 2) == 1){
        return true;
    }else{
        return false;
    }
}

var out = arr.filter(odd);
var out1 = arr1.filter(odd);
console.log("Output of array 1 : " + out);
console.log("Output of array 2 :" + out1);