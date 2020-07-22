/* Function that returns a new array that excludes specified given values from input array. */

/* Function that compares two input arrays on whether they are identical and prints an appropriate message */
const assertArraysEqual = function(arr1, arr2) {
  let message = "";
  // only run the for loop to check array if the number of elements in both match
  if (arr1.length === arr2.length) {
    // compare elements of the same index in both arrays see if they are identical
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return message = "⛔⛔⛔ The arrays are not the same!";
      }
    }
    // message if the two arrays are identical
    return message = "🐣🐣🐣 Huzzah, the two arrays are identical!";
  } else {
    return message = "⛔⛔⛔ The arrays are not the same!";
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

/* Function that removes array elements that match the input itemsToRemove array argument, without changing the initial array. */
const without = function(source, itemsToRemove) {
  let newArray = source;
  // look through each element in the source array
  for (let i = 0; i < newArray.length; i++) {
    // look through each element in the itemsToRemove array
    for (let j = 0; j < itemsToRemove.length; j++) {
      // check if any element matches an element in itemsToRemove array
      if (newArray[i] === itemsToRemove[j]) {
        // remove the element in the new array output if a match is found
        newArray.splice(i, 1);
        // removing the element means we need to count one down to not skip over any matching pairs
        i--;
        j--;
      }
    }
  }
  return newArray;
};

//TEST CODE
console.log(without([1, 2, 3, 4], [2, 3]));
console.log(without([50, 14, 2, 20, 4, 5, 2, 20, 10, 5], [5, 20]));
console.log(assertArraysEqual(without([50, 14, 2, 4, 5, 2, 20, 10, 5], [2, 5]), [50, 14, 4, 20, 10]));
console.log(assertArraysEqual(without([2, 99, 1, 299, 5, 99, 299], [99, 299]), [2, 1, 5]));
