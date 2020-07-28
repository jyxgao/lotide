const assertArraysEqual = require('./assertArraysEqual');

/* Function that takes in an array and a callback function as argument, 
returns the elements of the array from the beginning until it reaches the element 
that satisfies the callback function */
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

module.exports = takeUntil;

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TEST CODE
const data3 = ["I", "cannot", "stop", "learning", "new", "things"];
const results3 = takeUntil(data3, x => x === 'new');
assertArraysEqual(results3, ["I", "cannot", "stop", "learning"])

const data4 = [2, "string1", "string2", "string3", 4, 5]
const results4 = takeUntil(data4, x => x === "string3");
console.log(results4)
assertArraysEqual(results4, [2, "string1", "string2"])