export function primes(n: number): number[] {
  // limit factors, per trial division
  const MAX_FACTOR = Math.ceil(Math.sqrt(n));

  // initialize boolean array to track which indices are prime
  let factors = [false, false].concat(Array(n - 1).fill(true));

  for (let i = 2; i < MAX_FACTOR; i++) {
    if (factors[i]) {
      let indexOfNextMultiple = 2 * i;
      while (indexOfNextMultiple <= n) {
        factors[indexOfNextMultiple] = false;
        indexOfNextMultiple += i;
      }
    }
  }

  // return accumulated indices of true elements
  return factors.reduce<number[]>((acc, isPrime, i) => {
    if (isPrime) acc.push(i);
    return acc;
  }, []);
}
