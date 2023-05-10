const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("return [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("return ['1', 2, '3', 4, '5'] when given ['1', [2, '3', 4, '5']]", () => {
    assert.deepEqual(flatten(["1", [2, "3", 4, "5"]]), ["1", 2, "3", 4, "5"]);
  });
  it("return [] when given [[]]", () => {
    assert.deepEqual(flatten([[]]), []);
  });
});