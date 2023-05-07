const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      } else if (typeof object1[key] === "object") {
        if (typeof object2[key] === "object") {
          if (!eqObjects(object1[key], object2[key])) {
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

// testing: primitives
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// testing: arrays
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

// STRETCH: testing objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({a: {z: {y: {x: {w: 1}}}}}, {a: {z: {y: {x: {w: 1}}}}}), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);