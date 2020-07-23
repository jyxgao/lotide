/* Function that compares two input values on whether they are identical */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Function to count letter instances in an input string, returns an object with the counts*/
const countLetters = function(message) {
  const result = {};

  // Loop over all letters in the input message
  for (const letter of message) {
    // Count letters that are not spaces
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

//TEST CODE
const message1 = "Today I learned about Objects at Lighthouse Labs";
const result1 = countLetters(message1);
assertEqual(result1["a"], 5);
assertEqual(result1["T"], 1);
assertEqual(result1["z"], undefined);
assertEqual(result1["L"], 2);

