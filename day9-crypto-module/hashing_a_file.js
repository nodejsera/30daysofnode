//Loading the required modules in node.js
var crypto = require('crypto');
var fs = require('fs');

//Algorithm to be used for HMAC
var algorithm = 'sha256';
//creating hmac object
var hash = crypto.createHash(algorithm);

// reading the content of the file
var filename = "data.txt";
var file_data = fs.ReadStream(filename);

//passing the data to be hashed
file_data.on('data', function(data) {
  hash.update(data)
})

//Creating the hmac in the required format and writing it in file
file_data.on('end', function() {
  var gen_hash = hash.digest('hex')
  console.log('Hash generated using ' + algorithm + ' \nHashed output is :  ' + gen_hash + ' \nFile name is :  ' + filename);
  fs.writeFileSync(filename, gen_hash);
})