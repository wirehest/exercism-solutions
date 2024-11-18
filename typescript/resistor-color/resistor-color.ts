type Resistors = (typeof COLORS)[number];

export const COLORS = [
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

export const colorCode = (color: Resistors): number => {
  return COLORS.indexOf(color);
};
