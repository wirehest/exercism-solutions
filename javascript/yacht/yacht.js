/** Scores rolls for the dice game, "Yacht." */
export const score = (rolls, category) => {
  rolls = rolls.sort((a, b) => a - b);
  category = category.toLowerCase();

  switch (category) {
    case 'ones':
    case 'twos':
    case 'threes':
    case 'fours':
    case 'fives':
    case 'sixes':
      let factor = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'];
      return (
        (factor.indexOf(category) + 1) *
        rolls.filter((x) => x === factor.indexOf(category) + 1).length
      );
    case 'full house':
      if ([...new Set(rolls)].length !== 2) return 0;
      if (
        rolls.slice(0, 2).every((x) => x === rolls[0]) &&
        rolls.slice(3).every((x) => x === rolls[4])
      ) {
        return rolls.reduce((acc, x) => acc + x, 0);
      }
      return 0;
    case 'four of a kind':
      if (rolls.slice(0, 4).every((x) => x === rolls[0])) return 4 * rolls[0];
      if (rolls.slice(1, 5).every((x) => x === rolls[4])) return 4 * rolls[4];
      return 0;
    case 'little straight':
    case 'big straight':
      for (let i = 1; i < 5; i++) {
        if (!(rolls[i] === rolls[i - 1] + 1)) return 0;
      }
      if (category === 'little straight') return rolls[0] === 1 ? 30 : 0;
      return rolls[0] > 1 ? 30 : 0;
    case 'choice':
      return rolls.reduce((acc, x) => acc + x, 0);
    case 'yacht':
      return rolls.every((x) => x === rolls[0]) ? 50 : 0;
  }
};
