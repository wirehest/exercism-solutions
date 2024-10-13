/** Implements the square code cipher. */
export class Crypto {
  constructor(plain) {
    this.plain = plain;
  }

  get ciphertext() {
    let normal = this.plain
      .toLowerCase()
      .split('')
      .filter((x) => {
        let code = x.charCodeAt();
        return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
      })
      .join('');

    let cols = Math.ceil(Math.sqrt(normal.length));
    let rows = cols * (cols - 1) >= normal.length ? cols - 1 : cols;

    if (rows * cols !== normal.length) {
      normal += ' '.repeat(rows * cols - normal.length);
    }

    let encodeOrder = [];
    Array.from({ length: cols }).forEach((_, i) => {
      encodeOrder = encodeOrder.concat(
        Array.from({ length: rows }, (_, j) => j * cols + i)
      );
    });

    return encodeOrder.reduce((acc, x, i) => {
      let space =
        Number.isInteger((i + 1) / cols) && i !== normal.length - 1 ? ' ' : '';
      return acc + normal[x] + space;
    }, '');
  }
}
