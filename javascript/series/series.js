/** Represents a string of digits. */
export class Series {
  constructor(series) {
    if (!series) throw new Error('series cannot be empty');
    this.series = series;
    this.digits = [...series].map((x) => +x);
  }

  /**
   * Returns all slices of the specified length
   * with digits converted to Numbers.
   */
  slices(sliceLength) {
    if (sliceLength > this.series.length)
      throw new Error('slice length cannot be greater than series length');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (!sliceLength) throw new Error('slice length cannot be zero');

    return this.digits
      .map((_, i, arr) => arr.slice(i, i + sliceLength))
      .filter((_, i) => i < this.series.length - sliceLength + 1);
  }
}
