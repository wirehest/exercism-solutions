export function encode(plainText: string): string {
  const PLAIN = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const CIPHER = 'zyxwvutsrqponmlkjihgfedcba0123456789';

  return [...plainText.toLowerCase()]
    .map((char) => (PLAIN.includes(char) ? CIPHER[PLAIN.indexOf(char)] : ''))
    .filter((char) => char !== '')
    .reduce((acc, char, i) => (acc += !((i + 1) % 5) ? `${char} ` : char), '')
    .trim();
}

export function decode(cipherText: string): string {
  const PLAIN = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const CIPHER = 'zyxwvutsrqponmlkjihgfedcba0123456789';

  return [...cipherText]
    .map((char) => (CIPHER.includes(char) ? PLAIN[CIPHER.indexOf(char)] : ''))
    .join('');
}
