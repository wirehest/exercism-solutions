/** Representation of a triangle */
export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides;

    this.notTriangle =
      this.a + this.b + this.c === 0 ||
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.a + this.c < this.b
        ? true
        : false;
  }

  /** Returns if the triangle is equilateral. */
  get isEquilateral() {
    return this.notTriangle
      ? false
      : this.a === this.b && this.a === this.c
      ? true
      : false;
  }

  /** Returns if the triangle is isosceles. */
  get isIsosceles() {
    return this.notTriangle
      ? false
      : this.a === this.b || this.a === this.c || this.b === this.c
      ? true
      : false;
  }

  /** Returns if the triangle is scalene. */
  get isScalene() {
    return this.notTriangle
      ? false
      : this.a !== this.b && this.a !== this.c && this.b !== this.c;
  }
}
