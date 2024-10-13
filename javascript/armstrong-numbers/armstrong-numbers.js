'use strict';

/**
 * Returns true when the input number is an Armstrong number, else false.
 * An Armstrong number is a number that is the sum of its own digits each
 * raised to the power of the number of digits.
 */
export const isArmstrongNumber = (num) => {
  const digitCount = String(num).length;
  const armstrong = String(num)
    .split('')
    .reduce((a, c) => a + (+c) ** digitCount, 0);

  return num === armstrong ? true : false;
};