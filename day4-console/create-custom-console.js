var ws = require('fs');
const { Console } = require('console');
const output = ws.createWriteStream('./stdout.log');
const errOutput = ws.createWriteStream('./stderr.log');
// custom simple print
const print = new Console(output, errOutput);
//Now we can use it like console
const count = 5;
print.log('count: %d', count);
print.log('This will be stored in a file');