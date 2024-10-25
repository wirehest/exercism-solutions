export function eggCount(displayValue: number): number {
  const binary = displayValue.toString(2);
  return [...String(binary)].reduce((acc, x) => acc + +x, 0);
}
