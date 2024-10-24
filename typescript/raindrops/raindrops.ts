export function convert(num: number): string {
  let result = '';
  if (!(num % 3)) result += 'Pling';
  if (!(num % 5)) result += 'Plang';
  if (!(num % 7)) result += 'Plong';

  return result.length > 0 ? result : String(num);
}
