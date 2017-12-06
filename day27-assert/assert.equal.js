//Name of the file : assert.equal.js
var assert = require('assert');
var a = 10;
var b = '10';
var c = 10.25;
//Case 1
assert.equal(a,b, "Nothing printed because they are using == for comparison");
//Case 2
assert.equal(a,c, "Error because values doesn't match");