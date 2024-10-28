export function makeDiamond(letter: string): string {
  const SPACER = ' ';
  let length = letter.charCodeAt(0) - 65;
  let topRows = [...Array(length + 1).keys()].map((i) => {
    let outer = SPACER.repeat(length - i);
    let inner = SPACER.repeat(Math.max(2 * i - 1, 0));
    let rowChar = String.fromCharCode(65 + i);

    return i
      ? `${outer}${rowChar}${inner}${rowChar}${outer}\n`
      : `${outer}${rowChar}${outer}\n`;
  });

  return topRows.concat(topRows.slice(0, length).reverse()).join('');
}
