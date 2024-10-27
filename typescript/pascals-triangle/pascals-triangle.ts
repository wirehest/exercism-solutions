export class Triangle {
  private pascals: number[][];

  constructor(rowNumber: number) {
    this.pascals = this.#makePascals(rowNumber);
  }

  get rows(): number[][] {
    return this.pascals;
  }

  get lastRow(): number[] {
    return this.pascals[this.pascals.length - 1];
  }

  #makePascals(rowNumber: number): number[][] {
    if (rowNumber === 0) return [];
    let pascals = [[1]];

    for (let i = 0; i < rowNumber - 1; i++) {
      const lastRow = pascals[pascals.length - 1];
      const newSums = lastRow
        .map((_, i, arr) => arr.slice(i, i + 2).reduce((a, c) => a + c))
        .filter((_, i) => i < lastRow.length - 1);
      let newRow = [1, ...newSums, 1];
      pascals.push(newRow);
    }
    return pascals;
  }
}
