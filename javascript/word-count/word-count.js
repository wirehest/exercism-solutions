/** Counts the occurrences of unique words in a string. */
export const countWords = (str) => {
  let strArr = str
    .toLowerCase()
    .split(/[^\w']+/iu)
    .filter((x) => x !== '')
    .map((x) => {
      if (x.startsWith("'")) x = x.slice(1);
      if (x.endsWith("'")) x = x.slice(0, -1);
      return x;
    });
  let uniqueWords = [...new Set(strArr)];
  let counts = {};

  for (let word of strArr) {
    if (uniqueWords.includes(word)) {
      if (!counts[word]) {
        counts[word] = 1;
        continue;
      }
      ++counts[word];
    }
  }
  return counts;
};
