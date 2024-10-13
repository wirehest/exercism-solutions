/** Counts the number of 1 bits in a binary number. */
export const eggCount = (displayValue) => {
  const binary = displayValue.toString(2);
  return [...String(binary)].reduce((acc, x) => acc + +x, 0);
};