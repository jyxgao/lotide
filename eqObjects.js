/* Function that compares two input arrays on whether they are identical */
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

//TEST CODE.
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const acb = { a: "1", c: "3", b: "2",};

console.log(eqObjects(ab, ba)); // true
console.log(eqObjects(ab, abc)); //false
console.log(eqObjects(acb, abc)); // true
console.log(eqObjects(acb, abc)); // true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // true
console.log(eqObjects(cd, cd2)); // false

