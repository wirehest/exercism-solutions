/** Returns a diamond shape based on an input letter. */
export const rows = (letter) => {
  const [ALPHA, SP] = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', ' '];
  const INDEX = ALPHA.indexOf(letter);
  let edge = INDEX;
  let lines = [];

  ALPHA.slice(0, ALPHA.indexOf(letter) + 1)
    .split('')
    .forEach((x) => {
      let str = SP.repeat(edge) + x + SP.repeat(INDEX - edge--);
      lines.push(str + str.slice(0, -1).split('').reverse().join(''));
    });
  
  return lines.concat(lines.slice(0, -1).reverse());
};