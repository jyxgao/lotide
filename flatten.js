const assertArraysEqual = require('./assertArraysEqual');

/* Function that takes in an array containing array elements, 
returns a "flattened" version of the array */
const flatten = function(nestedArray) {
  let newArray = [];
  for (let element of nestedArray) {
    // check if the element is an array type
    if (Array.isArray(element)) {
      // if array type, loop through the array and add element into newArray
      for (let i of element)
      newArray.push(i);
    // if not array, add the element to newArray
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

module.exports = flatten;

// TEST CODE **REQUIRES ASSERTIONS**
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([100, [140, 24, "stranger"], [3, 4], 5, [6]])); // => [ 100, 140, 24, 'stranger', 3, 4, 5, 6 ]
