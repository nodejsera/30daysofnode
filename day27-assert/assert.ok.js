const assert = require('assert');
//Case 1
assert.ok(true, "No error ");
//Case 2
assert.ok(1,"No error");
//Case 3
assert.ok(false,"It is an error");
//Case 4
assert.ok(0 , " Again error");
//case 5
var a = 10;
var b = 20;
assert(a > b , "A should be greater than B");

