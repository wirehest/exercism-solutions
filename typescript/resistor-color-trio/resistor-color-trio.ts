export function decodedResistorValue(bands: string[]): string | undefined {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];
  const METRIC = { 0: '', 2: 'mega', 3: 'kilo', 6: 'mega', 9: 'giga' };

  let first = String(COLORS.findIndex((color) => color === bands[0]));
  let second = String(COLORS.findIndex((color) => color === bands[1]));
  let zeroes = '0'.repeat(COLORS.findIndex((color) => color === bands[2]));
  let ohms = +(first + second + zeroes);

  if (!ohms) return '0 ohms';
  for (let [exp, prefix] of Object.entries(METRIC).reverse()) {
    if (ohms % 10 ** +exp === 0) {
      return `${ohms / 10 ** +exp} ${prefix}ohms`;
    }
  }
}
