interface NumberToWords {
  [number: number]: string;
}

export function sayInEnglish(num: number): string {
  if (num === 0) return 'zero';
  if (num < 0 || num > 999_999_999_999) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  const CHUNK_TO_SCALE: NumberToWords = {
    1: 'thousand',
    2: 'million',
    3: 'billion',
  };
  const NUMBER_TO_WORDS: NumberToWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  let digits = [...String(num)];
  let chunks = [];

  while (digits.length > 0) {
    let chunkStart = Math.max(digits.length - 3, 0);
    chunks.push(+digits.splice(chunkStart, 3).join(''));
  }

  return chunks
    .map((chunk, i) => {
      let words = [];

      if (chunk > 99) {
        words.push(NUMBER_TO_WORDS[Math.floor(chunk / 100)], 'hundred');
      }

      chunk %= 100;
      if (chunk > 0) {
        if (chunk in NUMBER_TO_WORDS) {
          words.push(NUMBER_TO_WORDS[chunk % 100]);
        } else {
          let tens = NUMBER_TO_WORDS[Math.floor(chunk / 10) * 10];
          let ones = NUMBER_TO_WORDS[Math.floor(chunk % 10)];
          words.push(`${tens}-${ones}`);
        }

        if (i > 0) words.push(CHUNK_TO_SCALE[i]);
      }

      return words;
    })
    .reverse()
    .flatMap((chunk) => chunk)
    .join(' ');
}
