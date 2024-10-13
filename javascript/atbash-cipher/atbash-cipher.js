/** Encodes a message using the Atbash Cipher. */
export const encode = (plainText) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba0123456789';
  let encoded = [...plainText.toLowerCase()]
    .map((x) => (plain.includes(x) ? cipher[plain.indexOf(x)] : ''))
    .filter((x) => x !== '');
  let spaced = '';

  for (let [i, c] of encoded.entries()) {
    spaced += !((i + 1) % 5) ? `${c} ` : c;
  }
  return spaced.trim();
};

/** Decodes a message encoded with the Atbash Cipher. */
export const decode = (encoded) => {
  const plain = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba0123456789';
  let decoded = [...encoded].map((x) =>
    cipher.includes(x) ? plain[cipher.indexOf(x)] : ''
  );

  return decoded.join('');
};