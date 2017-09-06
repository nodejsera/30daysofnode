var str = 'FFFFFF'
var pattern = /^[a-fA-F0-9]+$/gim;

var res = str.match( pattern );
if(res){
	console.log("Valid Hexadecimal number");
}else{
	console.log("Not a valid Hexadecimal number");
}