const GIFTS = new Map([
  ['first', 'a Partridge in a Pear Tree'],
  ['second', 'two Turtle Doves'],
  ['third', 'three French Hens'],
  ['fourth', 'four Calling Birds'],
  ['fifth', 'five Gold Rings'],
  ['sixth', 'six Geese-a-Laying'],
  ['seventh', 'seven Swans-a-Swimming'],
  ['eighth', 'eight Maids-a-Milking'],
  ['ninth', 'nine Ladies Dancing'],
  ['tenth', 'ten Lords-a-Leaping'],
  ['eleventh', 'eleven Pipers Piping'],
  ['twelfth', 'twelve Drummers Drumming'],
]);

export function recite(rangeStart, rangeEnd) {
  let verses = [];

  for (let i = rangeStart; i <= (rangeEnd ?? rangeStart); i++) {
    let { day, gifts } = getVerseElements(i - 1);
    verses.push(
      `On the ${day} day of Christmas my true love gave to me: ${gifts}.\n`,
    );
  }

  return verses.length === 1 ? verses[0] : verses.join('\n');
}

function getVerseElements(verseNumber) {
  let giftIndices = [...Array(verseNumber + 1).keys()];
  let day = [...GIFTS.keys()][verseNumber];
  let gifts = giftIndices.reduce((gifts, idx) => {
    let conjunction = idx === 0 ? '' : idx === 1 ? ', and ' : ', ';
    return [...GIFTS.values()][idx] + conjunction + gifts;
  }, '');

  return { day, gifts };
}
