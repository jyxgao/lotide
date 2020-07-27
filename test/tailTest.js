const assert = require("chai").assert;

const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']" , () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("should not change original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it("should return an empty array for an array with one element", () => {
    const words = ['this'];
    const expected = [];
    assert.deepEqual(tail(words), expected);
  });

  it("should return an empty array for an empty array", () => {
    const words = [];
    const expected = [];
    assert.deepEqual(tail(words), expected);
  });
});