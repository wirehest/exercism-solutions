type VerseNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const ANIMALS = [
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse',
] as const;

export function verse(verseNumber: VerseNumber) {
  const VERSE_INDEX = verseNumber - 1;
  return (
    getStanzaFirstLine(VERSE_INDEX) +
    addAbsurdLines(VERSE_INDEX) +
    addSwallowedLines(VERSE_INDEX) +
    addWriggledAndJiggled(VERSE_INDEX) +
    addIDontKnowWhy(VERSE_INDEX)
  );
}

export function verses(start: VerseNumber, end: VerseNumber): string {
  let verses = [];
  for (let i = start; i <= end; i++) {
    verses.push(verse(i));
  }
  return verses.join('\n');
}

function getStanzaFirstLine(i: number): string {
  const FIRST_LINE = `I know an old lady who swallowed a ${ANIMALS[i]}.\n`;
  return i === 7 ? `${FIRST_LINE}She's dead, of course!\n` : FIRST_LINE;
}

function addAbsurdLines(i: number): string {
  const ABSURD_LINES = [
    'How absurd to swallow a bird!\n',
    'Imagine that, to swallow a cat!\n',
    'What a hog, to swallow a dog!\n',
    'Just opened her throat and swallowed a goat!\n',
    "I don't know how she swallowed a cow!\n",
  ] as const;
  return i > 1 && i < 7 ? ABSURD_LINES[i - 2] : '';
}

function addSwallowedLines(i: number): string {
  let lines = [];
  if (i > 2 && i < 7) {
    for (let j = i; j > 2; j--) {
      lines.push(`She swallowed the ${ANIMALS[j]} \
to catch the ${ANIMALS[j - 1]}.\n`);
    }
  }
  return lines.join('');
}

function addWriggledAndJiggled(i: number): string {
  const SWALLOW_BIRD = 'She swallowed the bird to catch the spider that';
  const WRIGGLE_JIGGLE = 'wriggled and jiggled and tickled inside her.\n';
  return i > 1 && i < 7
    ? `${SWALLOW_BIRD} ${WRIGGLE_JIGGLE}`
    : i === 1
      ? `It ${WRIGGLE_JIGGLE}`
      : '';
}

function addIDontKnowWhy(i: number): string {
  const DONT_KNOW_WHY =
    "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  const SWALLOW_SPIDER = 'She swallowed the spider to catch the fly.\n';
  return i > 0 && i < 7
    ? `${SWALLOW_SPIDER}${DONT_KNOW_WHY}`
    : i === 0
      ? DONT_KNOW_WHY
      : '';
}
