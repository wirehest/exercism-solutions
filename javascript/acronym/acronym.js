/** Returns an acronym built from input string. */
export const parse = (str) => {
  const pattern = /(?<=^| |-|_)[a-z]/giu;
  return str.match(pattern).join('').toUpperCase();
};