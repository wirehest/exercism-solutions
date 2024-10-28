export function sum(items: Array<number>, level: number): number {
  let values = [...Array(level).keys()];
  let filtered = items.flatMap((iValue) => {
    return values.filter((value) => (!iValue ? 0 : !(value % iValue)));
  });
  return [...new Set(filtered)].reduce((acc, value) => acc + value, 0);
}
