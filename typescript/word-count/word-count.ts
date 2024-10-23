export function count(str: string): Map<string, number> {
  let counts = new Map();
  let strArr = str
    .toLowerCase()
    .split(/[^\w']+/iu)
    .map((word) => {
      if (word.startsWith("'")) word = word.slice(1);
      if (word.endsWith("'")) word = word.slice(0, -1);
      return word;
    })
    .filter((word) => word !== '');

  strArr.forEach((word) => {
    if (!counts.has(word)) counts.set(word, 0);
    counts.set(word, counts.get(word) + 1);
  });

  return counts;
}
