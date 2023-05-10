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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arr) {
  let newArr = [];
  let newArrPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr[newArrPos] = arr[i][j];
        newArrPos++;
      }
    } else {
      newArr[newArrPos] = arr[i];
      newArrPos++;
    }
  }

  return newArr;
};

// testing
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", [2, "3", 4, "5"]]), ["1", 2, "3", 4, "5"]);
assertArraysEqual(flatten([[]]), []);

module.exports = flatten;