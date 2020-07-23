/* Function that takes in an array and a callback function as argument, 
returns the elements of the array from the beginning until it reaches the element 
that satisfies the callback function */

// loop through each array items 
//    pass it through to the callback function
//     if it does not match what the callback function looks for, keep going
//     if it does match, stop and return the new array of items

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    // if false, keep pushing items into newArray
    if (callback(item) === false) {
      newArray.push(item);
    //else if true, stop and return the 'sliced' array
    } else {
      return newArray;
    }
  }
};

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

//TEST CODE
const data3 = ["I", "cannot", "stop", "learning", "new", "things"];
const results3 = takeUntil(data3, x => x === 'new');
assertArraysEqual(results3, ["I", "cannot", "stop", "learning"])

const data4 = [2, "string1", "string2", "string3", 4, 5]
const results4 = takeUntil(data4, x => x === "string3");
console.log(results4)
assertArraysEqual(results4, [2, "string1", "string2"])