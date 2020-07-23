/* Function that compares two input values on whether they are identical */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Retrieve the first element in an input array */
const head = function(array) {
  let output = array[0];
  return output;
};

assertEqual(head([5, 6, 7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head(["Lighthouse", "Labs"]), "Hello"); // failed
assertEqual(head([], undefined)); // pass