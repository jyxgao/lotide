const eqArrays = require('./eqArrays');

/* Function that compares two input arrays on whether they are identical and prints an appropriate message */
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("🐣🐣🐣 Huzzah, the two arrays are identical!");
  } else {
    console.log("⛔⛔⛔ The arrays are not the same!");
  }
};

module.exports = assertArraysEqual;