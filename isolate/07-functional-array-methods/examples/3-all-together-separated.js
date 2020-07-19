'use strict';

// a function with array methods, extra variables, and separated logic

/**
 * sums all of the even numbers in an array of numbers
 *  does not modify the array
 *  checks to make sure all entries are numbers
 * @param {number[]} arr - contains to numbers to operate on
 * @returns {number} the sum of all even numbers in the array
 */
const sumEvenNumbers = (arr) => {
  const isANumber = (entry) => {
    return typeof entry === 'number';
  };
  const allAreNumbers = arr.every(isANumber);
  if (!allAreNumbers) { throw new TypeError('arr is not all numbers'); }

  const isEven = (entry) => {
    return entry % 2 === 0;
  };
  const sumNumbers = (sum, next) => {
    return sum + next;
  };

  const allEvenNumbers = arr.filter(isEven);
  const sumOfEvens = allEvenNumbers.reduce(sumNumbers);

  return sumOfEvens;
};

const _1_arg = [1, 2, 3, 4, 5];
const _1_expect = 6;
const _1_actual = sumEvenNumbers(_1_arg);
console.assert(_1_actual === _1_expect, 'sums 1 to 6');

const _2_arg = [-2, -3, -4, -5, -6];
const _2_expect = -12;
const _2_actual = sumEvenNumbers(_2_arg);
console.assert(_2_actual === _2_expect, 'sums -1 to -6');


try { // it should throw an error for invalid arrays
  sumEvenNumbers([1, 2, '3', 4, 5]);
  console.assert(false, 'is type-safe');
} catch (err) {
  console.assert(true, 'is type-safe');
}

