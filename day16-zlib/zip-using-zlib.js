// Including the required modules	
var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('newfile.txt');
var write = fs.createWriteStream('newfile.txt.gz');
//Transform stream which is zipping the input file
read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");