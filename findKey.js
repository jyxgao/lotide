const findKeyByValue = require("./findKeyByValue");

const findKey = function(obj, callback) {
  let keyArray = Object.keys(obj)
  for (let key of keyArray) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// TEST
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // "noma"

console.log(result1);