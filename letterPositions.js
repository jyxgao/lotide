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

/* Function that compares two input arrays on whether they are identical */
const eqArrays = function(arr1, arr2) {
  // only run the for loop to check array if the number of elements in both match
  if (arr1.length === arr2.length) {
    // compare elements of the same index in both arrays see if they are identical
    for (let i = 0; i < arr1.length; i++) {
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

/* Function that takes a string input and produces an object of all its letters (case-sensitive),
with an array of indices they have appeared at in the string*/

const letterPositions = function(message) {

  //define the result object
  const result = {};

  // loop through each character in the input string
  for (let i = 0; i < message.length; i++) {
    
    // only run if character is not an empty space
    if (message[i] !== " ") {
      // add new index to the result array if it has been tracked at least once
      if (result[message[i]]) {
        result[message[i]].push(i);
      // if the letter has not been tracked before, make a new array with its index.
      } else {
        result[message[i]] = [i];
      }
    }
  }

  return result;
};

//TEST CODE

const message1 = "hello";
const result1 = letterPositions(message1);
assertArraysEqual(result1["l"], [2, 3]);

assertArraysEqual(letterPositions("Lighthouse Labs")["L"], [0, 11]);
assertArraysEqual(letterPositions("Lighthouse Boat Ocean")["o"], [6, 12]);