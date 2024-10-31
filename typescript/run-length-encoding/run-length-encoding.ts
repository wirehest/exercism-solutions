export function encode(str: string): string {
  if (!str.length) return '';

  let encoded = '';
  let subStrStart = 0;
  let subStrChar = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) continue;
    let length = i - subStrStart > 1 ? i - subStrStart : '';
    encoded += length + subStrChar;
    [subStrStart, subStrChar] = [i, str[i]];
  }
  return encoded;
}

export function decode(enc: string): string {
  if (!enc) return '';

  let decoded = '';
  let chars = [...enc].filter((x) => /[a-z ]/iu.test(x));
  let counts = enc
    .slice(0, -1)
    .split(/[a-z ]/iu)
    .map((x) => (+x === 0 ? x + 1 : x));

  if (chars.length !== counts.length) throw new Error('Array length mismatch');
  for (let [i, char] of chars.entries()) {
    decoded += char.repeat(+counts[i]);
  }
  return decoded;
}
