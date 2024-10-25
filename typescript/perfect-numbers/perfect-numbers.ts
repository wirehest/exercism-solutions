type AliquotClass = 'deficient' | 'perfect' | 'abundant';

export function classify(num: number): AliquotClass {
  if (num <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let aliquot = [];
  for (let i = 1; i <= num; i++) {
    if (!(num % i)) {
      aliquot.push(i);
    }
  }

  let aliquotSum = aliquot.reduce((acc, factor) => acc + factor, 0) - num;

  if (num === aliquotSum) return 'perfect';
  if (num < aliquotSum) return 'abundant';
  return 'deficient';
}
