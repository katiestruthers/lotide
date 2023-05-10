const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([3, 2, 1], [1, 2, 3]); // => false