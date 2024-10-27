export class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  get isEquilateral(): boolean {
    return this.#noZeroSides() && this.#triangleIneq()
      ? this.sides.every((side) => side === this.sides[0])
      : false;
  }

  get isIsosceles(): boolean {
    return this.#noZeroSides() && this.#triangleIneq()
      ? this.sides[0] === this.sides[1] ||
          this.sides[0] === this.sides[2] ||
          this.sides[1] === this.sides[2]
      : false;
  }

  get isScalene(): boolean {
    return this.#noZeroSides() && this.#triangleIneq()
      ? this.sides[0] !== this.sides[1] &&
          this.sides[0] !== this.sides[2] &&
          this.sides[1] !== this.sides[2]
      : false;
  }

  #noZeroSides(): boolean {
    return this.sides.every((side) => side > 0);
  }

  #triangleIneq(): boolean {
    return (
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[0] + this.sides[2] >= this.sides[1] &&
      this.sides[1] + this.sides[2] >= this.sides[0]
    );
  }
}
