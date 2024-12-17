type Resistors = (typeof COLORS)[number];
type PrefixKey = keyof typeof PREFIXES;

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
] as const;
const PREFIXES = { 3: 'kilo', 6: 'mega', 9: 'giga' } as const;

export function decodedResistorValue(bands: Resistors[]): string {
  let trailingZerosPattern = /0{9}|0{6}|0{3}/;
  let fullString = bands
    .slice(0, 2)
    .reduce((acc, color) => acc + COLORS.indexOf(color), '');
  fullString += '0'.repeat(COLORS.indexOf(bands[2]));

  let trailingZeroCount = trailingZerosPattern.test(fullString)
    ? (fullString.match(trailingZerosPattern)![0].length as PrefixKey)
    : (0 as PrefixKey);

  let significantDigits = +fullString.replace(trailingZerosPattern, '');
  let prefix = PREFIXES[trailingZeroCount];

  return `${significantDigits} ${prefix}ohms`;
}
