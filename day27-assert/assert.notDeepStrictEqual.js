//Name of the file : assert.notDeepStrictEqual.js
var assert = require('assert');
var a = 10;
var b = '10';
var c = 10;
//Case 1
assert.notDeepStrictEqual(a,b, "No Error because they are checking for not deep strict equal");
//Case 2
assert.notDeepStrictEqual(a,c, "Error because values are equal");
