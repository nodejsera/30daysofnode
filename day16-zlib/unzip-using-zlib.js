// Including the required modules	
var zlib = require('zlib');
var fs = require('fs');

var unzip = zlib.createUnzip();

var read = fs.createReadStream('newfile.txt.gz');
var write = fs.createWriteStream('unzip.txt');
//Transform stream which is unzipping the zipped file
read.pipe(unzip).pipe(write);	
console.log("unZipped Successfully");

 