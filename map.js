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

/* Function that takes in an array and callback function, returns new array after going through the callback function */
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


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