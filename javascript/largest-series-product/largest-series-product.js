/**
 * Returns the greatest substring product for
 * substrings of lengths specified by span.
 */
export function largestProduct(str, span) {
  if (str.length < span)
    throw new Error('Span must be smaller than string length');
  if (span <= 0) throw new Error('Span must be greater than zero');
  if (!str.split('').every((x) => Number.isInteger(+x))) {
    throw new Error('Digits input must only contain digits');
  }

  let maxProduct = 0;
  let i = 0;
  do {
    let subProduct = str
      .split('')
      .slice(i, i + span)
      .reduce((a, c) => a * c);
    if (subProduct > maxProduct) maxProduct = subProduct;
    i++;
  } while (i <= str.length - span);

  return maxProduct;
}
