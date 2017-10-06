var express = require('express');
var fs = require('fs')

var app = express()

app.get('/', function (req, res) {
  res.send('Simple Example of routes!');
}) 

app.get('/signup', function(req,res){
	// this is how we will receive params from front end 
	
	var name = req.query.name; 
  var email = req.query.email;
  var password = req.query.password;
  //For demo purpose
  console.log(name + '' + email + ' ' + password);

  /**
   * Store this in a database and perform further processing
   */
    res.send("In signup module")
});

app.listen(3000, function () {
  console.log('Server is listening at 3000')
})
