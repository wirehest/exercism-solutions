'use strict';

/** Returns true if input string is a pangram, otherwise false. */
export const isPangram = (str) => {
  const alpha = [...'abcdefghijklmnopqrstuvwxyz'];
  return alpha.every((x) => str.toLowerCase().includes(x));
};