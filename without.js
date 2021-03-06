const assertArraysEqual = require('./assertArraysEqual');

/* Function that removes array elements that match the input itemsToRemove array argument, without changing the initial array. */
const without = function(source, itemsToRemove) {
  // create a copy of the original array so we don't change it
  let newArray = [];
  for (let n = 0; n < source.length; n++) {
    newArray.push(source[n]);
  }

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

module.exports = without;

//TEST CODE
console.log(without([1, 2, 3, 4], [2, 3]));
console.log(without([50, 14, 2, 20, 4, 5, 2, 20, 10, 5], [5, 20]));
assertArraysEqual(without([50, 14, 2, 4, 5, 2, 20, 10, 5], [2, 5]), [50, 14, 4, 20, 10]);
assertArraysEqual(without([2, 99, 1, 299, 5, 99, 299], [99, 299]), [2, 1, 5]);

//TEST to check if original array is changed
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

