export function compute(left: string, right: string): number {
  if (left.length !== right.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  let hamming = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) hamming++;
  }
  return hamming;
}
