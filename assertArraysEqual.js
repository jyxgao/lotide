/* Function that compares two input arrays on whether they are identical and prints an appropriate message */
const assertArraysEqual = function(arr1, arr2) {
  // let message = "";
  // only run the for loop to check array if the number of elements in both match
  if (arr1.length === arr2.length) {
    // compare elements of the same index in both arrays see if they are identical
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("⛔⛔⛔ The arrays are not the same!");
      }
    }
    // message if the two arrays are identical
    console.log("🐣🐣🐣 Huzzah, the two arrays are identical!");
  } else {
    console.log("⛔⛔⛔ The arrays are not the same!");
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3, 6]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false