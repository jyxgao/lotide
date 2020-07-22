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

const middle = function(arr) {
  let newArray = [];

  if (arr.length > 2) {
    if (arr.length % 2 === 1) {
      newArray.push(arr[Math.floor(arr.length / 2)]);
      return newArray;
    } else {
      newArray.push(arr[(arr.length / 2) - 1], arr[(arr.length / 2)]);
      return newArray;
    }
  } else {
    return newArray;
  }
};

//TEST CODE
console.log(middle([4]));
console.log(middle([4, 6]));
console.log(middle([40, 500, 20, 10]));
console.log(middle([2, 4, 5, 6, 1, 2, 3]));

console.log(assertArraysEqual(middle([40, 500, 20, 10]), [500, 20]));
console.log(assertArraysEqual(middle([2, 4, 5, 6, 1, 2, 3]), [6]));
