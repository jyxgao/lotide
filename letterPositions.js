const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;

//TEST CODE
const message1 = "hello";
const result1 = letterPositions(message1);
assertArraysEqual(result1["l"], [2, 3]);

assertArraysEqual(letterPositions("Lighthouse Labs")["L"], [0, 11]);
assertArraysEqual(letterPositions("Lighthouse Boat Ocean")["o"], [6, 12]);