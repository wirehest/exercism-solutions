export function translate(phrase: string): string {
  const AY = 'ay';
  return phrase
    .split(' ')
    .map((word) => {
      let match = getMatchingBeginning(word);
      return match.length > 0
        ? `${word.slice(match.length)}${match}${AY}`
        : `${word}${AY}`;
    })
    .join(' ');
}

function getMatchingBeginning(word: string): string {
  const REGEX_PATTERNS = {
    STARTS_WITH_VOWEL_SOUND: /^[aeiou]|xr|xt/,
    STARTS_WITH_CONSONANTS: /^[^aeiou]+/,
    CONSONANTS_WITH_QU: /^[^aeiou]*qu/,
    CONSONANTS_WITH_Y: /^[^aeiou]+(?=y)/,
  } as const;

  switch (true) {
    case REGEX_PATTERNS.CONSONANTS_WITH_Y.test(word):
      return word.match(REGEX_PATTERNS.CONSONANTS_WITH_Y)![0];
    case REGEX_PATTERNS.CONSONANTS_WITH_QU.test(word):
      return word.match(REGEX_PATTERNS.CONSONANTS_WITH_QU)![0];
    case REGEX_PATTERNS.STARTS_WITH_CONSONANTS.test(word):
      return word.match(REGEX_PATTERNS.STARTS_WITH_CONSONANTS)![0];
    case REGEX_PATTERNS.STARTS_WITH_VOWEL_SOUND.test(word):
      return '';
    default:
      throw new Error('no pattern matched');
  }
}
