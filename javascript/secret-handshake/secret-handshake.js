/** Returns a secret handshake based on the digits of a binary number. */
export const commands = (num) => {
  const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
  const bin = [...num.toString(2)].reverse().slice(0, 5);

  let handshake = bin.slice(0, 4).reduce((acc, val, i) => {
    if (+val) {
      acc.push(actions[i]);
    }
    return acc;
  }, []);

  return +bin[4] ? handshake.reverse() : handshake;
};
