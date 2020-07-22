/* Function that compares two input arrays on whether they are identical */

const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) {
    output = `🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`;
  } else {
    output = `⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`;
  }
  return output;
};

const eqArrays = function(arr1, arr2) {
  // only run the for loop to check array if the number of elements in both match
  if (arr1.length === arr2.length) {
    // compare elements of the same index in both arrays see if they are identical
    for ( let i = 0; i < arr1.length; i++) {
      // if at least one is not identical, return false
      if (arr1[i] !== arr2[i]) {
        return false;
        } 
      }
      // return true if there are no mismatch found
      return true;
  } else {
    return false;
  }
};

// TEST CODE 
  // test code for eqArrays function:
  console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
  console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
  console.log(eqArrays([1, 2, 3], [1, 2, 3, 6])) // => false

  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

  // test code for assertEqual function:
  console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
  console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false)); // => false
  console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)); // => false

