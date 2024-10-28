export function rotate(str: string, shift: number): string {
  let code = [...str].map((x) => (/[a-z]/iu.test(x) ? shiftChar(x, shift) : x));
  return code.join('');

  function shiftChar(char: string, shift: number): string {
    let min = char.charCodeAt(0) <= 90 ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) + shift - min) % 26) + min);
  }
}
