const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if (Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else {
          return false;
        }
      } else if (!(object1[key] === object2[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`😁😁😁 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// testing
assertObjectsEqual({numbers: [1, 2, 3]}, {numbers: [1, 2, 3]}); // => true
assertObjectsEqual({numbers: [1, 2, 3]}, {numbers: [1, 2]}); // => false
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" }); // => true
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red", length: "long" }); // => false
