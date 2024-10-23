export function valid(digitString: string): boolean {
  const strArr = [...digitString].filter((char) => char !== ' ');
  if (!strArr.every((char) => '0123456789'.includes(char))) return false;
  if (strArr.length < 2) return false;

  return !(
    strArr
      .reverse()
      .map((c, i) => (!((i + 1) % 2) ? (2 * +c > 9 ? 2 * +c - 9 : 2 * +c) : +c))
      .reverse()
      .reduce((a, c) => a + c) % 10
  );
}
