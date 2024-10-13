/** Base conversion function. */
export const convert = (numbers, current, target) => {
  if (current < 2) throw new Error('Wrong input base');
  if (target < 2) throw new Error('Wrong output base');
  if (JSON.stringify(numbers) === '[0]') return [0];
  if (
    numbers[0] === 0 ||
    numbers.length === 0 ||
    numbers.every((x) => x === 0) ||
    numbers.some((x) => x < 0) ||
    numbers.some((x) => x >= current)
  ) {
    throw new Error('Input has wrong format');
  }
  
  let baseTen = numbers
    .reverse()
    .reduce((acc, x, i) => acc + x * current ** i, 0);
  
  if (target === 10) Array.from(baseTen);
  return convertFromBaseTen(baseTen).reverse();

  function convertFromBaseTen(number) {
    let converted = [];
    while (number) {
      converted.push(number % target);
      number = Math.floor(number / target);
    }
    return converted;
  }
};
