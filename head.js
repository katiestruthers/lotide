const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};

// testing
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);