export function calculatePrimeFactors(num: number): number[] {
  let factors: number[] = [];
  let divisor = 2;

  if (num <= 1) return factors;
  while (num > 1) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
      continue;
    } else {
      while (!isPrime(++divisor)) {
        break;
      }
    }
  }
  return factors;

  function isPrime(
    num: number,
    divisor: number = Math.round(Math.sqrt(num)),
  ): boolean {
    if (divisor < 2) return true;
    if (num % divisor === 0) return false;
    return isPrime(num, --divisor);
  }
}
