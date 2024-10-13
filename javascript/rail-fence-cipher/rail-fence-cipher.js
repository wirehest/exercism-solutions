/** Encodes a message with the Rail Fence cipher. */
export const encode = (message, railCount) => {
  const msgArr = [...message];
  let encoded = Array.from({ length: railCount }).map(() => []);
  msgArr.forEach((x, i, arr) => encoded[getRail(i, railCount)].push(x));

  return encoded.flat().join('');
};

/** Decodes a Rail Fence-encoded ciphertext. */
export const decode = (secret, railCount) => {
  const sctArr = [...secret].reverse();
  let decoded = Array.from({ length: secret.length }).map((_, i) =>
    getRail(i, railCount)
  );
  const positions = [...decoded].sort();

  for (let pos of positions) {
    decoded[decoded.indexOf(pos)] = sctArr.pop();
  }

  return decoded.join('');
};

/** Returns the rail to use. */
export const getRail = (index, rails) => {
  return Math.abs(rails - ((index + rails - 1) % (2 * rails - 2)) - 1);
};