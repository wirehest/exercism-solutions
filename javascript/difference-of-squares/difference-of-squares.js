/** Representation of an arithmetic series. */
export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum() {
    return ((this.n / 2) * (1 + this.n)) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
