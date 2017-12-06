//Name of the file : assert.throw.js
var assert = require('assert');
assert.throws(
  () => {
    throw new Error('An error occured');
  },
  Error
);