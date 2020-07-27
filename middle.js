/* Function that returns the middle number in an array of odd number of elements; 
2 of the middle numbers in an array of even number of elemetns. */
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

module.exports = middle;