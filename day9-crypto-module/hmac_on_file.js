// Including the required modules
var crypto = require('crypto');
var fs = require('fs');

//Algorithm to be used for HMAC
var algorithm = 'md5';
//Secret to be used with HMAC
var secret ='Rj2895647';
//creating hmac object
var hmac = crypto.createHmac(algorithm, secret);

// reading the content of the file
var filename = "data.txt";
var file_data = fs.ReadStream(filename);

//passing the data to be hashed
file_data.on('data', function(data) {
  hmac.update(data)
})

//Creating the hmac in the required format and writing it in file
file_data.on('end', function() {
  var gen_hmac = hmac.digest('hex')
  console.log('Hmac generated using ' + algorithm + ' \nHashed output is :  ' + gen_hmac + ' \nFile name is :  ' + filename);
  fs.writeFileSync(filename, gen_hmac);
}) 

