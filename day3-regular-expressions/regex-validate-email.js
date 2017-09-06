
var str = 'rjbitdemo@gmail.com'
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;

var res = str.match( pattern );
if(res){
	console.log("Valid email address");
}else{
	console.log("Please enter a valid email address");
}


