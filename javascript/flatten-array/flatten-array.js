'use strict';

/** Returns a flattened array. */
export const flatten = (arr) => {
  while (arr.some((x) => Array.isArray(x))) arr = arr.flat();
  return arr.filter((x) => x !== null);
};
