const assertEqual = require('./assertEqual');

/* Function that finds a key by value in an object */
const findKeyByValue = function(obj, val) {
  let keyArray = Object.keys(obj);
  
  //loop through all the keys in the input object
  for (let key of keyArray) {
    //look for a value that matches val
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// findKeyByValue(bestTVShowsByGenre, "The Wire")
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const myFavoriteFoods = {
  fruit: "Cherries",
  snack: "Cuttlefish Chips",
  protein:  "Salmon Sashimi",
  vegetable: "Garlic Scape",
  prepared: "Ramen"
};

assertEqual(findKeyByValue(myFavoriteFoods, "Garlic Scape"), "vegetable");
assertEqual(findKeyByValue(myFavoriteFoods, "Ramen"), "prepared");
assertEqual(findKeyByValue(myFavoriteFoods, "Curry Sausage"), undefined);
