var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	console.log("Port Number : 3000");
    res.writeHead(200, {'Content-Type': 'text/html'});
    // change the to 'text/plain' to 'text/html' it will work as your index page
	fs.readFile('index.pdf',function(error,data){
    if(error){
       res.json({'status':'error',msg:err});
    }else{
       res.writeHead(200, {"Content-Type": "application/pdf"});
       res.write(data);
       res.end();       
    }
});
}).listen(3000);


