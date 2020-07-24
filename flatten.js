/* Function that compares two input arrays on whether they are identical and prints an appropriate message */
const assertArraysEqual = function(arr1, arr2) {
  // let message = "";
  // only run the for loop to check array if the number of elements in both match
  if (arr1.length === arr2.length) {
    // compare elements of the same index in both arrays see if they are identical
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("⛔⛔⛔ The arrays are not the same!");
        break;
      } else {
        // message if the two arrays are identical
        console.log("🐣🐣🐣 Huzzah, the two arrays are identical!");
        break;
      }
    }
  } else {
    console.log("⛔⛔⛔ The arrays are not the same!");
  }
};

/* Function that take in an array containing array elements, 
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
}

// TEST CODE **REQUIRES ASSERTIONS**
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]], [1, 2, 3, 4, 5, 6]));
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([100, [140, 24, "stranger"], [3, 4], 5, [6]])); // => [ 100, 140, 24, 'stranger', 3, 4, 5, 6 ]
