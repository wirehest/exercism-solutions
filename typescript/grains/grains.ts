export const square = (sq: number): bigint => {
  if (sq < 1 || sq > 64) throw new Error('square must be between 1 and 64');
  return 2n ** BigInt(sq - 1);
};

export const total = (): bigint => {
  return 2n ** 64n - 1n;
};
