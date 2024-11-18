type Resistors = (typeof COLORS)[number];

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

export function decodedValue(arr: Resistors[]): number {
  return +('' + COLORS.indexOf(arr[0]) + COLORS.indexOf(arr[1]));
}
