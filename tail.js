const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// Test Case 1: Check the returned array elements
const greetings = tail(["Hello", "Hi", "Hola"]);
assertEqual(greetings.length, 2);
assertEqual(greetings[0], "Hi");
assertEqual(greetings[1], "Hola");

// Test Case 2: Original array remains unmodified
const numbers = [0, 1, 2];
tail(numbers);
assertEqual(numbers.length, 3);

// Test Case 3: Array with one element --> empty array
const oneEl = tail([1]);
assertEqual(oneEl.length, 0);
assertEqual(oneEl[0], undefined);

// Test Case 4: Empty array --> empty array
const noEl = tail([]);
assertEqual(noEl.length, 0);
assertEqual(noEl[0], undefined);