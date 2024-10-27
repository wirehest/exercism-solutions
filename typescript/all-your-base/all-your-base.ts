export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number,
): number[] {
  if (inputBase < 2 || !Number.isInteger(inputBase)) {
    throw new Error('Wrong input base');
  }
  if (outputBase < 2 || !Number.isInteger(outputBase)) {
    throw new Error('Wrong output base');
  }
  if (JSON.stringify(digits) === '[0]') return [0];
  if (
    digits[0] === 0 ||
    digits.length === 0 ||
    digits.every((x) => x === 0) ||
    digits.some((x) => x < 0) ||
    digits.some((x) => x >= inputBase)
  ) {
    throw new Error('Input has wrong format');
  }

  let baseTen = digits
    .reverse()
    .reduce((acc, x, i) => acc + x * inputBase ** i, 0);
  return convertFromBaseTen(baseTen).reverse();

  function convertFromBaseTen(digit: number): number[] {
    let converted = [];
    while (digit) {
      converted.push(digit % outputBase);
      digit = Math.floor(digit / outputBase);
    }
    return converted;
  }
}
