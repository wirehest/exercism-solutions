export class DiffieHellman {
  constructor(p, g) {
    this.#verifyInputs(p, g);
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) throw new Error();
    return this.#modularExp(this.g, privateKey, this.p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return this.#modularExp(theirPublicKey, myPrivateKey, this.p);
  }

  #modularExp(base, exp, mod) {
    if (mod === 1) return 0;

    let result = 1;
    base %= mod;

    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % mod;
      exp >>= 1;
      base = base ** 2 % mod;
    }

    return result;
  }

  #verifyInputs(p, g) {
    if (!(p > 1) || !this.#checkPrime(p) || !this.#checkPrime(g))
      throw new Error();
  }

  #checkPrime(num, div = 2) {
    if (num <= 1) {
      return false;
    }
    if (div > Math.sqrt(num)) {
      return true;
    }
    if (num % div === 0) {
      return false;
    } else {
      return this.#checkPrime(num, div + 1);
    }
  }
}
