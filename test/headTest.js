const head = require('../head.js');
const assertEqual = require('../assertEqual');

//TEST CODE
assertEqual(head([5, 6, 7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head(["Lighthouse", "Labs"]), "Hello"); // failed
assertEqual(head([], undefined)); // pass