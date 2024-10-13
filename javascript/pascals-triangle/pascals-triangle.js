/** Returns Pascal's Triangle up to n rows. */
export const rows = (n) => {
  if (n === 0) return [];
  let pascals = [[1]];

  for (let i = 0; i < n - 1; i++) {
    const lastRow = pascals.at(-1);
    const newSums = lastRow
      .map((_, i, arr) => arr.slice(i, i + 2).reduce((a, c) => a + c))
      .filter((_, i) => i < lastRow.length - 1);
    let newRow = [1, ...newSums, 1];
    pascals.push(newRow);
  }
  return pascals;
};
