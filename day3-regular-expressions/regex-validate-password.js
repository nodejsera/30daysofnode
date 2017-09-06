var str = 'Aa#1aaabcde'
var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

var res = str.match( pattern );
if(res){
	console.log("Valid password");
}else{
	console.log("Not a valid password");
}