/* Function that compares two input values on whether they are identical */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("\"Lighthouse Labs\"", "\"Bootcamp\"");
assertEqual(1, 1);
assertEqual("\"Rubber ducks\"", "\"Rubber ducks\"");
assertEqual(3, 5);