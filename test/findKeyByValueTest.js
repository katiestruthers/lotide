const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  describe("given an object bestTVShowsByGenre:", () => {
    const bestTVShowsByGenre = {
      "sci_fi": "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    it("return 'drama' when given the value 'The Wire'", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    });
    it("return 'sci_fi' when given the value 'The Expanse'", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
    });
    it("return undefined when given the value 'That '70s Show'", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    });
    it("return undefined when given the value 'drama'", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "drama"), undefined);
    });
    it("return undefined when given the value ''", () => {
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
    });
  });
});