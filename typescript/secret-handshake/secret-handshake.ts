type Actions = ('wink' | 'double blink' | 'close your eyes' | 'jump')[];

export function commands(num: number): Actions {
  const ACTIONS: Actions = ['wink', 'double blink', 'close your eyes', 'jump'];
  let bin = [...num.toString(2)].reverse().slice(0, 5);

  let handshake = bin.slice(0, 4).reduce<Actions>(
    (acc, val, i) => {
      if (+val) acc.push(ACTIONS[i]);
      return acc;
    },
    <Actions>[],
  );

  return +bin[4] ? handshake.reverse() : handshake;
}
