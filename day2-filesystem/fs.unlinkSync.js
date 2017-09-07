var fs = require('fs');
var filename = 'data.txt';
fs.unlink(filename);
console.log('File Deleted Successfully');