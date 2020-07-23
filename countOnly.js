/* Function that compares two input values on whether they are identical */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Function that takes in an array of items and an object that specifies which array items to count,
outputs an object containing items being counted and how many times they occurred in total */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // loop over allItems
  for (const item of allItems) {
    // check if any of allItems matches ones in itemsToCount
    if (itemsToCount[item]) {
      // increment count everytime an item is found
      if (results[item]) {
        results[item] += 1;
      // default if only found once
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// run the function
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima", undefined]);
assertEqual(result1["Fang"], 2);