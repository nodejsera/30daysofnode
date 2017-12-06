//Name of the file : assert.notStrictEqual.js
var assert = require('assert');
var a = 10;
var b = 10.25;
var c = '10';
var d = 10;

//Case 1
assert.notStrictEqual(a,b, "Nothing printed because they are using !== for comparison");
//Case 2
assert.notStrictEqual(a,c, "Nothing printed because still its not a match");
//case 3
assert.notStrictEqual(a,d, "Error because its a match");
