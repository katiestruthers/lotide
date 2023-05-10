const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("countLetters('LHL lhl') === {L: 2, H: 1, l: 2, h: 1}", () => {
    assert.deepEqual(countLetters('LHL lhl'), {L: 2, H: 1, l: 2, h: 1});
  });
});