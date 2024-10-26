export function recite(rangeStart: number, rangeEnd: number): string {
  const giftArray = [
    ['first', 'a Partridge'],
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
  ];
  const beginning = 'On the';
  const middle = 'day of Christmas my true love gave to me:';
  const end = 'in a Pear Tree.\n';
  let verses = [];

  for (let i = rangeStart - 1; i < (rangeEnd ?? rangeStart); i++) {
    let gifts = getGifts(i + 1);
    verses.push(`${beginning} ${giftArray[i][0]} ${middle} ${gifts} ${end}`);
  }
  return verses.length === 1 ? verses[0] : verses.join('');

  function getGifts(verse: number): string {
    let gifts = '';
    for (let i = 0; i < verse; i++) {
      let conjunct = i === 0 ? '' : i === 1 ? ', and ' : ', ';
      gifts = giftArray[i][1] + conjunct + gifts;
    }
    return gifts;
  }
}
