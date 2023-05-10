const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  describe("given the array of words ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];

    it("return ['ground', 'control', 'to', 'major', 'tom'] when given a callback of word => word", () => {
      assert.deepEqual(map(words, word => word), words);
    });
    it("return ['g', 'c', 't', 'm', 't'] when given a callback of word => word[0]", () => {
      assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
    });
    it("return [6, 7, 2, 5, 3] when given a callback of word => word.length", () => {
      assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
    });
  });
});