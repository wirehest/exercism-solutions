/** Returns the Hamming distance between two DNA strands. */
export const compute = (seq1, seq2) => {
  if (seq1.length !== seq2.length) {
    throw new Error('strands must be of equal length');
  }

  let hamming = 0;
  for (let i = 0; i < seq1.length; i++) {
    if (seq1[i] !== seq2[i]) hamming++;
  }
  return hamming;
};
