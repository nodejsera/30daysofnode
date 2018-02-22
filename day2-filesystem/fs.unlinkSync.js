var fs = require('fs');
var filename = 'data.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');