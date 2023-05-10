const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("{ color: 'red', size: 'medium' } === { size: 'medium', color: 'red' }", () => {
    assert.isTrue(eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }));
  });
  it("{ size: 'medium', color: 'red' } !== { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.isFalse(eqObjects({ size: 'medium', color: 'red' }, { size: 'medium', color: 'red', sleeveLength: 'long' }));
  });
  it("{ size: 'medium', colors: ['red', 'blue'] } === { size: 'medium', colors: ['red', 'blue'] }", () => {
    assert.isTrue(eqObjects({ size: 'medium', colors: ['red', 'blue'] }, { size: 'medium', colors: ['red', 'blue'] }));
  });
  it("{ size: 'medium', colors: ['red', 'blue'] } !== { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }", () => {
    assert.isFalse(eqObjects({ size: 'medium', colors: ['red', 'blue'] }, { size: 'medium', colors: ['red', 'blue'], sleeveLength: 'long' }));
  });
  it("{ a: { z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("{a: {z: {y: {x: {w: 1}}}}} === {a: {z: {y: {x: {w: 1}}}}}", () => {
    assert.isTrue(eqObjects({a: {z: {y: {x: {w: 1}}}}}, {a: {z: {y: {x: {w: 1}}}}}));
  });
  it("{ a: { y: 0, z: 1 }, b: 2 } !== { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
});