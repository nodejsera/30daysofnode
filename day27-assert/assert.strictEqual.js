//Name of the file : assert.strictEqual.js
var assert = require('assert');
var a = 10;
var b = '10';
var c = 10;

//Case 1
assert.strictEqual(a,c, "Nothing printed");
//Case 2
assert.strictEqual(a,b, "Error acc to strict equality comparison");

