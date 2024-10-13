/** Converts Arabic numerals to Roman numerals. */
export const toRoman = (num) => {
  const romans = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let remaining = num;
  let romanNumerals = '';

  for (let numeral of romans) {
    let count = Math.floor(remaining / numeral[0]);
    romanNumerals += numeral[1].repeat(count);
    remaining -= count * numeral[0];
  }
  return romanNumerals;
};
