/** Transposes the input matrix. */
export const transpose = (input) => {
  let transposed = [];
  if (input.length === 0) return transposed;

  let rows = Math.max(...input.map((x) => x.length));
  let columns = input.length;

  // Pads each element if it is shorter than the remaining elements.
  let inputAdjustedLengths = input.map((x, i, a) => {
    let maxLengthRemainder = Math.max(...a.slice(i).map((y) => y.length));
    if (x.length < maxLengthRemainder) {
      x += ' '.repeat(maxLengthRemainder - x.length);
    }
    return x;
  });

  // Does the transposition.
  for (let i = 0; i < rows; i++) {
    let newRow = '';
    for (let j = 0; j < columns; j++) {
      newRow += inputAdjustedLengths[j][i] ?? '';
    }
    transposed.push(newRow);
  }
  return transposed;
};