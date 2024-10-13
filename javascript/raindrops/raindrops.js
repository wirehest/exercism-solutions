'use strict';

/**
 * Converts num into raindrop sounds based on divisibility:
 * - if divisible by 3, add "Pling" to the result;
 * - if divisible by 5, add "Plang" to the result;
 * - if divisible by 7, add "Plong" to the result;
 * - if not divisible by 3, 5, or 7, return num as a string.
 */
export const convert = (num) => {
  let result = '';
  if (!(num % 3)) result += 'Pling';
  if (!(num % 5)) result += 'Plang';
  if (!(num % 7)) result += 'Plong';

  return result.length > 0 ? result : String(num);
};

console.assert(convert(1) === '1');
