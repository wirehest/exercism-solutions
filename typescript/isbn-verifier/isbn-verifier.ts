export function isValid(isbn: string): boolean {
  let noDashes = [...isbn].filter((char) => char !== '-');

  // Exclude invalid ISBNs:
  let lengthValid = noDashes.length === 10;
  let digitsValid = [...noDashes.slice(0, 9)].every((char) => isFinite(+char));
  let checkValid = '0123456789X'.includes(noDashes[9]);
  if (!lengthValid || !digitsValid || !checkValid) return false;

  // Check validity:
  return [...noDashes].reduce((acc, char, i) => {
    return acc + (char === 'X' ? 10 : +char) * (10 - i);
  }, 0) % 11
    ? false
    : true;
}
