# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @katiestruthers/lotide`

**Require it:**

`const _ = require('@katiestruthers/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: actual [array], expected [array]. Displays a message to the console indicating the equality of the two arrays.
* `assertEqual(actual, expected)`: actual [primitive], expected [primitive]. Displays a message to the console indicating the equality of the two primitives.
* `asserObjectsEqual(actual, expected)`: actual [object], expected [object]. Displays a message to the console indicating the equality of the two objects.
* `countLetters(string)`: string [string]. Returns the number of letters in string. 
* `countOnly(allItems, itemsToCount)`: allItems [array], itemsToCount [object]. Returns an object with a count of relevant items (as per itemsToCount) from allItems. 
* `eqArrays(arr1, arr2)`: arr1 [array], arr2 [array]. Returns a boolean indicating whether the two arrays are equal. 
* `eqArrays(object1, object2)`: object1 [object], object2 [object]. Returns a boolean indicating whether the two objects are equal. 
* `findKey(object, callback)`: object [object], callback [function]. If property in object returns true for callback, return that property. 
* `findKeyByValue(object, value)`: object [object], value [primitive]. If value of property in object exists, return that property. 
* `flatten(arr)`: arr [array]. Returns a "flattened" array without any nesting. 
* `head(array)`: array [array]. Returns the first element (index 0) of array. 
* `letterPositions(string)`: string [string]. Returns an object containing the index positions of each letter in the string.
* `map(array, callback)`: array [array], callback [function]. Returns new array with callback applied to each element.
* `middle(arr)`: arr [arr]. Returns an array of size 0-2 containing the middle element(s). 
* `tail`: array [array]. Returns array excluding the first element (index 0). 
* `takeUntil(array, callback)`: array [array], callback [function]. Return new array containing all elements of array up until callback is true.
* `without(source, itemsToRemove)`: source [array], itemsToRemove [items]. Returns new array that contains all items from source except for those found in itemsToRemove. 