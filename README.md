# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jyxgao/lotide`

**Require it:**

`const _ = require('@jyxgao/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: compares two input arrays on whether they are identical and prints an appropriate message 
* `assertEqual`: compares two input values on whether they are identical
* `countLetters`: counts letter instances in an input string, returns an object with the counts
* `countOnly`: takes in an array of items and an object that specifies which array items to count, outputs an object containing items being counted and how many times they occurred in total
* `eqArrays`: compares two input arrays on whether they are identical
* `eqObjects`: takes two objects and returns true or false based on perfect match
* `findKey`: finds the first key of a given value
* `findKeyByValue`: finds a key by value in an object
* `flatten`: takes in an array containing array elements, returns a "flattened" version of the array
* `head`: retrieves the first element in an input array
* `letterPositions`: takes a string input and produces an object of all its letters (case-sensitive),
with an array of indices they have appeared at in the string
* `map`: takes in an array and callback function, returns new array after going through the callback function
* `middle`: returns the middle number in an array of odd number of elements; two of the middle numbers in an array of even number of elemetns
* `tail`: retrieves all except the first element of an input array
* `takeUntil`: takes in an array and a callback function as argument, returns the elements of the array from the beginning until it reaches the element 
that satisfies the callback function
* `without`: removes array elements that match the input itemsToRemove array argument, without changing the initial array