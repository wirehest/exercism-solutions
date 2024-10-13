/** Returns the nth prime number, specified by "position." */
export const prime = (position) => {
  if (position === 0) throw new Error('there is no zeroth prime');

  function sieve(n) {
    if (n === 1) return [];
    let primes = [null, null].concat(Array(n - 1).fill(true));
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
};
