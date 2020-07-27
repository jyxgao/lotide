const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 3: An array with only one element should return an empty array
const array1 = ["this"];
assertEqual(tail(array1).length, 0);

//Test Case 4: An empty array should yield an empty array
const array2 = [];
assertEqual(tail(array2).length, 0);