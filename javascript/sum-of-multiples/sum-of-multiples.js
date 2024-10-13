/**
 * Returns the sum of numbers in a range that are divisible by factors
 * represented by item levels.
 */
export const sum = (items, level) => {
  let values = Array.from({ length: level }).map((_, i) => i);
  let energy = [];

  for (let value of items) {
    if (!value) continue;
    energy = energy.concat(values.filter((x) => !(x % value)));
  }

  return [...new Set(energy)].reduce((acc, x) => acc + x, 0);
};
