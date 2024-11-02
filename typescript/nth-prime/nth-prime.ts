export function nth(position: number): number | undefined {
  if (position === 0) throw new Error('Prime is not possible');

  function sieve(n: number): (number | undefined)[] {
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

  let i = 1;
  let primes = sieve(10);

  while (primes.length < position) {
    primes = sieve(10 ** ++i);
  }
  return primes[position - 1];
}
