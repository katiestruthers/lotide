const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({numbers: [1, 2, 3]}, {numbers: [1, 2, 3]}); // => true
assertObjectsEqual({numbers: [1, 2, 3]}, {numbers: [1, 2]}); // => false
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" }); // => true
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red", length: "long" }); // => false