export function largestProduct(str: string, span: number): number | Error {
  const ERRORS = {
    spanSmaller: 'Span must be smaller than string length',
    nonNegative: 'Span must not be negative',
    onlyDigits: 'Digits input must only contain digits',
  };

  if (str.length < span) throw new Error(ERRORS.spanSmaller);
  if (span <= 0) throw new Error(ERRORS.nonNegative);
  if (!Number.isInteger(+str)) throw new Error(ERRORS.onlyDigits);

  return Math.max(
    ...[...Array(str.length - span + 1).keys()].map((index) => {
      return [...str]
        .slice(index, index + span)
        .reduce((acc, digit) => (acc *= +digit), 1);
    }),
  );
}
