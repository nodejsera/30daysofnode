var stringDecoder = require('string_decoder').StringDecoder;
var sd = new stringDecoder('utf8');
var buff = Buffer('data to be buffered');
//Print the buffered data
console.log(buff); 
//Print the decoded buffer  
console.log(sd.write(buff));