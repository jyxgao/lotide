/* Function that compares two input values on whether they are identical */
const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) {
    console.log(output = `🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(output = `⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
  return output;
};

//TEST CODE
assertEqual("\"Lighthouse Labs\"", "\"Bootcamp\"");
assertEqual(1, 1);
assertEqual("\"Rubber ducks\"", "\"Rubber ducks\"");
assertEqual(3, 5);