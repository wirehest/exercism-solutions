/** Returns the count of nucleotides in the input strand. */
export function countNucleotides(str) {
  const strArr = [...str];
  let nucs = { A: 0, C: 0, G: 0, T: 0 };

  if (![...new Set(str)].every((x) => [...Object.keys(nucs), ''].includes(x)))
    throw new Error('Invalid nucleotide in strand');
  strArr.forEach((x) => nucs[x]++);

  return Object.values(nucs).join(' ');
}
