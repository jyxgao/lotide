const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual(middle([4, 6]), []);
assertArraysEqual(middle([4]), []);
assertArraysEqual(middle([40, 500, 20, 10]), [500, 20]);
assertArraysEqual(middle([2, 4, 5, 6, 1, 2, 3]), [6]);
