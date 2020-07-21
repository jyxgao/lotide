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

//TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Rubber ducks", "Rubber ducks"));
console.log(assertEqual(3, 5));
