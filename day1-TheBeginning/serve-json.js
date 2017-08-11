var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	console.log("Port Number : 3000");
    res.writeHead(200, {'Content-Type': 'application/json'});
    // change the to 'text/plain' to 'text/html' it will work as your index page
	let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}
	res.end( JSON.stringify(json_response) ); 
}).listen(3000);