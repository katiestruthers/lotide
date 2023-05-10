const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  describe("given a nested object with properties each containing an object of number of stars:", () => {
    const test1 =  {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    it("returns 'noma' with the callback x.stars === 2", () => {
      assert.strictEqual(findKey(test1, x => x.stars === 2), "noma");
    });
    it("returns 'Akaleri' with the callback x.stars > 2", () => {
      assert.strictEqual(findKey(test1, x => x.stars > 2), "Akaleri");
    });
    it("returns undefined with the callback x.stars === 4", () => {
      assert.strictEqual(findKey(test1, x => x.stars === 4), undefined);
    });
  });
});