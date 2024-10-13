// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return +array1.join('') + +array2.join('');
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value === +[...String(value)].reverse().join('') ? true : false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const coerced = +input;
  if (input === '' || !!input === false) return 'Required field';
  if (coerced === 0 || isNaN(coerced)) return 'Must be a number besides 0';
  return '';
}

