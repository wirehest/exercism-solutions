'use strict';

/** Returns a word's Scrabble score. */
export const score = (word) => {
  let points = {};
  for (let pair of [
    ['AEIOULNRST', 1],
    ['DG', 2],
    ['BCMP', 3],
    ['FHVWY', 4],
    ['K', 5],
    ['JX', 8],
    ['QZ', 10],
  ]) {
    [...pair[0]].forEach((x) => (points[x] = pair[1]));
  }
  return [...word.toUpperCase()].reduce((a, c) => a + points[c], 0);
};
