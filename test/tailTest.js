const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Hi', 'Hola'] when given ['Hello', 'Hi', 'Hola']", () => {
    assert.deepEqual(tail(["Hello", "Hi", "Hola"]), ["Hi", "Hola"]);
  });
  it("does not modify the original array", () => {
    const numbers = [0, 1, 2];
    tail(numbers);
    assert.deepEqual(numbers, [0, 1, 2]);
  });
  it("returns [] when given [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] when given []", () => {
    assert.deepEqual(tail([]), []);
  });
});