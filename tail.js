/* Retrieves all except the first element of an input array */
const tail = function(array) {
  let output = [];
  if (array.length > 1) {
    output = array.slice(1);
  }
  return output;
};

module.exports = tail;
