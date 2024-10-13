/** Classifies numbers based on their Aliquot Sum. */
export const classify = (num) => {
  if (num <= 0)
    throw new Error('Classification is only possible for natural numbers.');

  const aliquot = [];
  for (let i = 1; i <= num; i++) {
    if (!(num % i)) {
      aliquot.push(i);
    }
  }
  const aliquotSum = aliquot.reduce((a, c) => a + c) - num;

  switch (true) {
    case aliquotSum + num === num:
      return 'deficient';
    case num === aliquotSum:
      return 'perfect';
    case num < aliquotSum:
      return 'abundant';
    case num > aliquotSum:
      return 'deficient';
  }
};