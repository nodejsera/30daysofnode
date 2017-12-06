//Name of the file : assert.notEqual.js
var assert = require('assert');
var a = 10;
var b = 10.25;
var c = '10';

//Case 1
assert.notEqual(a,b, "Nothing printed because they are using != for comparison");
//Case 2
assert.notEqual(a,c, "Error because values match");