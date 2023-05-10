const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("return [2, 3] when given without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("return ['1', '2'] when given without('1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("return [1, 2, 3] when given without([1, 2, 3], [])", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
  it("return [] when given without([], [1, 2, 3])", () => {
    assert.deepEqual(without([], [1, 2, 3]), []);
  });
  it("ensure original array remains unmodified", () => {
    const numbers = [1, 2, 3];
    without(numbers, [1]);
    assert.deepEqual(numbers, [1, 2, 3]);
  });
});
