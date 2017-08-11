//simple-server-in-nodejs.js 						
var http = require('http');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  console.log("server Working");
  response.end('Server Working Success');
});

server.listen(port,host, (error) => {  
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});	