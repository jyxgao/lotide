/* Function that compares two input values on whether they are identical */
const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) {
    console.log(output = `🐣🐣🐣 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(output = `⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
  return output;
};

//all items = array ; itemsToCount = object
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  //loop over allItems 

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  //return an object with counts of specified itemsToCount
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