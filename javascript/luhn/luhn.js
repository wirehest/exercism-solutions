/** Returns whether a number is valid per the Luhn formula. */
export const valid = (str) => {
  const strArr = [...str.split(' ').join('')];
  if (strArr.join('').length < 2) return false;
  if (!strArr.every((x) => ' 0123456789'.includes(x))) return false;

  const split = strArr.flatMap((x) => [...x]);
  const doubling = split
    .reverse()
    .map((x, i) => (!((i + 1) % 2) ? (2 * +x > 9 ? 2 * +x - 9 : 2 * +x) : +x))
    .reverse();
  const sum = doubling.reduce((a, c) => a + c);

  return !(sum % 10) ? true : false;
};