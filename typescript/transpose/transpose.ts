export function transpose(input: string[]): string[] {
  let transposed: string[] = [];
  if (!input.length) return transposed;

  let rows = Math.max(...input.map((x) => x.length));
  let columns = input.length;

  // Pads each element if it is shorter than the remaining elements.
  let inputAdjustedLengths = input.map((x, i, a) => {
    let maxLengthRemainder = Math.max(...a.slice(i).map((y) => y.length));
    if (x.length < maxLengthRemainder) {
      x = x.padEnd(maxLengthRemainder, ' ');
    }
    return x;
  });

  // Does the transposition.
  for (let i = 0; i < rows; i++) {
    let newRow: string = '';
    for (let j = 0; j < columns; j++) {
      newRow += inputAdjustedLengths[j][i] ?? '';
    }
    transposed.push(newRow);
  }
  return transposed;
}
