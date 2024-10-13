/** Encodes a string using the rotational cipher and given offset. */
export const rotate = (str, shift) => {
  const shiftChar = (char, shift) => {
    let min = char.charCodeAt() <= 90 ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt() + shift - min) % 26) + min);
  };
  let code = [...str].map((x) => (/[a-z]/iu.test(x) ? shiftChar(x, shift) : x));
  return code.join('');
};
