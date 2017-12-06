//Name of the file : assert.ifError.js
var assert = require('assert');
//Case 1 : No error
assert.ifError(0);
//Case 2 : throws 1
assert.ifError(1);
//Case 3 : throws error
assert.ifError('error');




/**var assert = require('assert');
function sayHello(name, callback) {
  var error = true;
  var str   = "Hello "+name;
  callback(error, str);
}

// use the function
sayHello('World', function(err, value){
  assert.ifError(err);
  assert.equal(value, "Hello World");
}) **/