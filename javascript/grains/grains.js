/** Returns the count of grains on the chess square specified. */
export const square = (sq) => {
  if (sq < 1 || sq > 64) throw new Error('square must be between 1 and 64');
  return String(2n ** BigInt(sq - 1));
};

/** Returns the total number of grains on the chessboard. */
export const total = () => {
  return String(2n ** 64n - 1n);
};