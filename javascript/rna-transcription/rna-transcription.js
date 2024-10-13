'use strict';

/** Translates a DNA sequence to RNA. */
export const toRna = (sequence) => {
  const pairs = { G: 'C', C: 'G', T: 'A', A: 'U' };
  return [...sequence].map((x) => pairs[x]).join('');
};
