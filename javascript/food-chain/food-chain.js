/** A representation of the song 'I Know an Old Lady Who Swallowed a Fly.' */
export class Song {
  /** Returns individual verses from the song. */
  verse(verseNum) {
    const v = verseNum - 1;
    const animals = [
      'fly',
      'spider',
      'bird',
      'cat',
      'dog',
      'goat',
      'cow',
      'horse',
    ];
    let lines = '';

    /** I know an old lady who swallowed a fly... */
    (() => {
      let l = `I know an old lady who swallowed a ${animals[v]}.\n`;
      if (v === 7) l += "She's dead, of course!\n";
      lines += l;
    })();

    /** How absurd to swallow... */
    (() => {
      if (v === 7) return;
      const absurdLines = [
        '',
        '',
        'How absurd to swallow a bird!\n',
        'Imagine that, to swallow a cat!\n',
        'What a hog, to swallow a dog!\n',
        'Just opened her throat and swallowed a goat!\n',
        "I don't know how she swallowed a cow!\n",
        '',
      ];
      lines += absurdLines[v];
    })();

    /** She swallowed the... */
    (() => {
      if (v < 3 || v === 7) return;
      for (let i = v; i > 2; i--) {
        lines += `She swallowed the ${animals[i]} to catch the ${
          animals[i - 1]
        }.\n`;
      }
    })();

    /** Wriggled and jiggled... */
    (() => {
      let l = ' wriggled and jiggled and tickled inside her.\n';
      if (v === 0 || v === 7) return;
      if (v === 1) l = 'It' + l;
      if (v > 1) l = 'She swallowed the bird to catch the spider that' + l;

      lines += l;
    })();

    /** I don't know why she swallowed the fly... */
    (() => {
      if (v === 7) return;
      let l = "I don't know why she swallowed the fly. Perhaps she'll die.\n";
      if (v !== 0) l = 'She swallowed the spider to catch the fly.\n' + l;
      lines += l;
    })();
    return lines;
  }

  /** Returns a range of verses from the song. */
  verses(start, end) {
    let verses = [];
    for (let i = start; i <= end; i++) {
      verses += this.verse(i) + '\n';
    }
    return verses;
  }
}
