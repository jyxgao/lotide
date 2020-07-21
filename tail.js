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

const tail = function(array) {
  let output = array.slice(1);
  return output;
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

// Test Case 2: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

// Test Case 3: An array with only one element should return an empty array
const array1 = ["this"];
console.log(tail(array1));

//Test Case 4: An empty array should yield an empty array
const array2 = [];
console.log(tail(array2));