arr = [ 5 , 5 , 8 , 7 , 6 ];
console.log(arr);
function mul(value ,total){
    total = value * total;
    return total;
}
var output = arr.reduce(mul);
console.log("The product of the array is : " + output);
