function hello () {  
  console.log("This will Not Run at all");  
}  
console.log("It is supposed Print the data recursively after a delay of 2000ms again and again")
var s_int = setInterval(hello,2000); 
clearInterval(s_int);