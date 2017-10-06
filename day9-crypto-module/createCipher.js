var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

var cipher = crypto.createCipher(algorithm,password);
//console.log(cipher);
var crypted = cipher.update('1223234','utf8','hex');
//console.log(crypted);
crypted += cipher.final('hex');
console.log(crypted);

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}