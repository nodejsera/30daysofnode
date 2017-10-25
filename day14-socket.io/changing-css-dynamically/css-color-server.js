//Including the required files
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//server listening at 127.0.0.1:3000
server.listen(3000);
console.log("Listening at 3000");
//Handling the default route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/css-color.html');
});
//Handling the route for admin 
app.get('/admin' , function(req,res) {
    res.sendFile(__dirname + '/css-color-admin.html'); 
})
//Code for sockets
io.on('connection', function (socket) {
  socket.on('admin' , function(data) {
      console.log(data); 
      console.log('about to broadcast')
      io.sockets.emit( 'color' , { data : data } )
    })
});