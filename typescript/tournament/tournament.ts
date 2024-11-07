interface Results {
  [team: string]: { m: number; w: number; d: number; l: number; p: number };
}

export class Tournament {
  public tally(input: string): string {
    let outcomeArr = ['Team'.padEnd(31) + '| MP |  W |  D |  L |  P'];
    if (!input) return outcomeArr[0];

    let inputArr = input.split('\n').map((input) => input.split(';'));
    let results: Results = {};

    /** Creates object with tournament results. */
    inputArr.forEach((row) => {
      let [team1, team2, matchOutcome] = [...row];

      [team1, team2].forEach((team) => {
        if (results[team] === undefined) {
          results[team] = { m: 0, w: 0, d: 0, l: 0, p: 0 };
        }
      });

      switch (matchOutcome) {
        case 'draw':
          [team1, team2].forEach((team) => results[team].d++);
          break;
        case 'win':
          results[team1].w++;
          results[team2].l++;
          break;
        case 'loss':
          results[team1].l++;
          results[team2].w++;
          break;
      }

      [team1, team2].forEach((team) => {
        results[team].m++;
        results[team].p = 3 * results[team].w + results[team].d;
      });
    });

    /** Sorts teams by points-descending, then alphabetically. */
    let teamsSorted = [...Object.keys(results)].sort((team1, team2) => {
      return results[team2].p - results[team1].p === 0
        ? team1.localeCompare(team2)
        : results[team2].p - results[team1].p;
    });

    teamsSorted.forEach((team) => {
      let line = `${team.padEnd(31)}|`;
      ['m', 'w', 'd', 'l'].forEach((stat) => {
        line +=
          String(results[team][stat as keyof Results[typeof team]]).padStart(
            3,
          ) + ' |';
      });
      line += String(results[team].p).padStart(3);
      outcomeArr.push(line);
    });

    return outcomeArr.join('\n');
  }
}
