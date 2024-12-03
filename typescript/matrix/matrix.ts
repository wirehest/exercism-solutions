export class Matrix {
  matrix;
  height;
  width;

  constructor(matrix: string) {
    this.matrix = matrix
      .split('\n')
      .map((row) => row.split(' ').map((x) => +x));
    this.height = this.matrix.length;
    this.width = this.matrix.reduce((a, c) => (c.length > a ? c.length : a), 0);
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));
  }
}
