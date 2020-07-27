const assertArraysEqual = require('./assertArraysEqual');

/* Function that takes in an array and callback function, returns new array after going through the callback function */
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const colors = ["red", "purple", "yellow", "orange"];
const results2 = map(colors, word => word[0]);
console.log(results2);
assertArraysEqual(results2, ["r", "p", "y", "o"])

const numbers = [13, 241, 2351, 86];
const results3 = map(numbers, word => word[0]);
console.log(results3); // return undefined