	
var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
	console.log("Port Number : 3000");
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    // change the to 'text/plain' to 'text/html' it will work as your index page
	var file = 'index.mp3';
	fs.exists('video.mp4',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('video.mp4');
			rstream.pipe(res);
		}
		else
		{
			res.send("Its a 404");
			res.end();
		}
	
	});
	
}).listen(3000);


	
	