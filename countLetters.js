const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letters = {};
  const noSpace = string.split(' ').join('');

  for (let letter of noSpace) {
    if (letter in letters) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }

  return letters;
};

// testing
const result1 = countLetters('LHL lhl');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);
assertEqual(result1['l'], 2);
assertEqual(result1['h'], 1);
assertEqual(result1[' '], undefined);

module.exports = countLetters;