/** Returns the first five characters of the input string. */
export const truncate = (input) => {
  let i = 0;
  let trimmed = '';

  // for...of loop iterates over Unicode code points instead of
  // UTF-16 code units allowing truncation by character.
  for (let char of input) {
    if (i === 5) break;
    trimmed += char;
    i++;
  }
  return trimmed;
};