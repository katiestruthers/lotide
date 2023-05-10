const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([], [1]), false);

// STRETCH: testing nested arrays
assertEqual(eqArrays([1, [2, [3, [4, [5]]]]], [1, [2, [3, [4, [5]]]]]), true);
assertEqual(eqArrays([1, [2, 3], 4], [1, 2, 3, 4]), false);