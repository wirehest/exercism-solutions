/** Represents the nursery rhyme 'This is the House that Jack Built.' */
export class House {
  /** Returns the verse specified. */
  static verse(num) {
    const phrases = [
      ['the house that Jack built.', ''],
      ['the malt', 'that lay in'],
      ['the rat', 'that ate'],
      ['the cat', 'that killed'],
      ['the dog', 'that worried'],
      ['the cow with the crumpled horn', 'that tossed'],
      ['the maiden all forlorn', 'that milked'],
      ['the man all tattered and torn', 'that kissed'],
      ['the priest all shaven and shorn', 'that married'],
      ['the rooster that crowed in the morn', 'that woke'],
      ['the farmer sowing his corn', 'that kept'],
      ['the horse and the hound and the horn', 'that belonged to'],
    ];

    let verse = [`This is ${phrases[num - 1][0]}`];
    for (let i = num; i > 1; i--) {
      verse.push(`${phrases[i - 1][1]} ${phrases[i - 2][0]}`);
    }
    return verse;
  }

  /** Returns the specified range of verses. */
  static verses(start, end) {
    let verses = [];
    for (let i = start; i <= end; i++) {
      verses.push(...House.verse(i));
      if (i < end) verses.push('');
    }
    return verses;
  }
}
