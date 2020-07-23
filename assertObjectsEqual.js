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


/* Function that takes two objects and returns true or false based on perfect match */
const eqObjects = function(obj1, obj2) {

  // check length of objects, if they match, continue with for loop
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    // loop through each key in one set of object (obj1)
    for (let key of Object.keys(obj1)) {
      // if we come across a key with an array type value
      if (Array.isArray(obj1[key])) {
        // bring in eqArrays function to check if it matches array in obj2, exit function and return false if there's a mismatch
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      // continue to check if each value from obj1 matches ones in obj2, exit function and return false if there's a mismatch
      } else if (obj1[key] !== obj2[key]) {
        return false;
      } 
    }
    // return true if none of the above conditions were met 
    return true;
  // return false if length of objects don't match
  } else {
    return false;
  }
};