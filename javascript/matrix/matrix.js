/** Representation of a matrix. */
export class Matrix {
  constructor(matrixStr) {
    this.matrix = matrixStr
      .split('\n')
      .map((row) => row.split(' ').map((x) => +x));
    this.height = this.matrix.length;
    this.width = this.matrix.reduce((a, c) => (c.length > a ? c.length : a), 0);
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
  }
}
