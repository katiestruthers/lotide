const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns { Jason: 1, Fang: 2 } when given array of first names and object of who to count", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.deepEqual(result1, { Jason: 1, Fang: 2 });
  });
});
