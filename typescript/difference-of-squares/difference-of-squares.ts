export class Squares {
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
  }

  get squareOfSum(): number {
    return ((this.count / 2) * (1 + this.count)) ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
