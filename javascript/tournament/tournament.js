/** Returns the results of tournament in a formatted table. */
export const tournamentTally = (inputStr) => {
  let outcomeArr = ['Team'.padEnd(31) + '| MP |  W |  D |  L |  P'];
  if (!inputStr) return outcomeArr[0];

  let inputArr = inputStr.split('\n').map((inputStr) => inputStr.split(';'));
  let res = {};

  /** Creates object with tournament results. */
  inputArr.forEach((row) => {
    let [t1, t2, winLoss] = [...row];
    [t1, t2].forEach((team) => {
      if (res[team] === undefined) res[team] = { m: 0, w: 0, d: 0, l: 0, p: 0 };
    });
    if (winLoss === 'draw') [t1, t2].forEach((team) => res[team].d++);
    if (winLoss === 'win') {
      res[t1].w++;
      res[t2].l++;
    }
    if (winLoss === 'loss') {
      res[t1].l++;
      res[t2].w++;
    }
    [t1, t2].forEach((team) => {
      res[team].m++;
      res[team].p = 3 * res[team].w + res[team].d;
    });
  });

  /** Sorts teams by points-descending, then alphabetically. */
  let teamsSorted = [...Object.keys(res)].sort((t1, t2) => {
    return res[t2].p - res[t1].p === 0
      ? t1.localeCompare(t2)
      : res[t2].p - res[t1].p;
  });

  teamsSorted.forEach((t) => {
    let line = `${t.padEnd(31)}|`;
    ['m', 'w', 'd', 'l'].forEach(
      (stat) => (line += String(res[t][stat]).padStart(3) + ' |')
    );
    line += String(res[t].p).padStart(3);
    outcomeArr.push(line);
  });
  return outcomeArr.join('\n');
};
