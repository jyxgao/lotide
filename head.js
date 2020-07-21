/* Function that compares two input values on whether they are identical */

const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) {
    output = `🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`;
  }
  return output;
};

/* Retrieve the first element in an input array */
const head = function(array) {
  let output = array[0];
  return output;
};

console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));