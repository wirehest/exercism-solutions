export function isArmstrongNumber(number: number | bigint): boolean {
  const digitCount = String(number).length;
  const armstrong = String(number)
    .split('')
    .reduce((acc, c) => acc + BigInt(c) ** BigInt(digitCount), 0n);
  return BigInt(number) === armstrong;
}
