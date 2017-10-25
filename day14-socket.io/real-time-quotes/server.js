//Including the required files
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//server listening at 127.0.0.1:3000
server.listen(3000);
console.log("Server listening at: 3000");
//Handling the default route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
//Handling the route for admin
app.get('/admin' , function(req,res) {
    res.sendFile(__dirname + '/admin.html'); 
})
//Code for sockets
io.on('connection', function (socket) {
  
  socket.emit('welcome', { data: 'welcome' });

  socket.on('new' , function(data) {   
          console.log('About to upload Quote')
          io.sockets.emit( 'next' , { data : data } )
    })
});