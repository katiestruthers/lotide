const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  describe("given the data [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    it("return [1, 2, 5, 7, 2] when given the callback x => x < 0", () => {
      assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
    });
  });
  describe("given the data ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    it("return ['I've', 'been', 'to', 'Hollywood'] when given the callback x => x === ','", () => {
      assert.deepEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
    });
  });
});