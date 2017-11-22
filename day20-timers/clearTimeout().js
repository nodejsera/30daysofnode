function hello () {  
  console.log("This will not run at all");  
}  
console.log("It will Print the data once after the delay of 2000ms")
var tim = setTimeout(hello,2000);  
clearTimeout(tim);
 