const VALUES = { AEIOULNRST: 1, DG: 2, BCMP: 3, FHVWY: 4, K: 5, JX: 8, QZ: 10 };
type Letters = keyof typeof VALUES;

export function score(word: string | undefined): number {
  if (typeof word === 'undefined') return 0;

  return word.split('').reduce((score, letter) => {
    for (let letters in VALUES) {
      if (letters.includes(letter.toUpperCase()))
        score += VALUES[letters as Letters];
    }
    return score;
  }, 0);
}
