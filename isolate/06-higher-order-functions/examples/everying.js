'use strict';

/* everying with a callback
  you might have noticed that these loops strategies are repetitive
  higher order functions will help you write more reusable code
*/

const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Reflect.ownKeys(actual).length === Reflect.ownKeys(expect).length && Reflect.ownKeys(expect).every((key) => deepCompare(actual[key], expect[key])));

/**
 * calls the callback with each item in the array
 *  will return true if every function call returned a truthy value
 * @param {Array} arr - an array of items to check
 * @param {Function} callback - how to check each item
 * @returns {boolean} if the callback returned truthy for each item
 */
const every = (arr, callback) => {
  let allAreTrue = true;
  for (const entry of arr) {
    const isTrue = callback(entry);
    allAreTrue = isTrue && allAreTrue;
  }
  return allAreTrue;
};


const argArray = [3, 2, null, 8, 'hi'];

// are all values numbers?
const isANumber = (val) => {
  return typeof val === 'number';
};

const _1_expect = false;
const _1_actual = every(argArray, isANumber);
console.assert(deepCompare(_1_actual, _1_expect), 'Test 1');


// are all values not boolean?
const isNotBoolean = (val) => {
  return typeof val !== 'boolean';
};

const _2_expect = true;
const _2_actual = every(argArray, isNotBoolean);
console.assert(deepCompare(_2_actual, _2_expect), 'Test 2');

