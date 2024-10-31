export function primes(n: number): (number | undefined)[] {
  if (n === 1) return [];

  let primes = [false, false].concat(Array(n - 1).fill(true));

  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
    if (primes[i]) {
      primes.forEach((_, j) => {
        if (!(j % i) && j > i) primes[j] = false;
      });
    }
  }

  return primes
    .map((x, i) => {
      if (x) return i;
    })
    .filter(Boolean);
}
