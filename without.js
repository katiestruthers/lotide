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

const without = function(source, itemsToRemove) {
  const returnArr = [];
  let found;

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      returnArr.push(source[i]);
    }
  }

  return returnArr;
};

// testing
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1, 2, 3]), []);

// test case: original array unmodified
const numbers = [1, 2, 3];
without(numbers, [1]);
assertArraysEqual(numbers, [1, 2, 3]);