/** Converts num to words. */
export const say = (num) => {
  if (num === 0) return 'zero';
  if (num < 0 || num > 999_999_999_999) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }
  const numWords = {
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

  /** Converts chunks to words. */
  function getWords(num) {
    let words = [];
    if (num > 99) words.push(`${numWords[Math.floor(num / 100)]} hundred`);
    num %= 100;
    if (!num) return words;
    if (numWords[num]) words.push(numWords[num]);
    else
      words.push(
        `${numWords[Math.floor(num / 10) * 10]}-${numWords[num % 10]}`
      );
    return words.join(' ');
  }

  /** Returns num in chunks of thousands. */
  function getChunks(num, chunkLength = 3) {
    let numCopy = [...(num + '')];
    let chunks = [];
    while (numCopy.length > 0) {
      chunks.push(+numCopy.slice(-chunkLength).join(''));
      numCopy.length = Math.max(numCopy.length - chunkLength, 0);
    }
    return chunks.reverse();
  }

  /** Inserts numerical scales between chunks. */
  function insertScale(chunks) {
    if (chunks.length === 1) return chunks;
    const scales = ['thousand', 'million', 'billion', 'trillion'];
    for (let i = chunks.length - 2, j = 0; i >= 0; i--, j++) {
      if (chunks[i] === 0) continue;
      chunks.splice(i + 1, 0, scales[j]);
    }
    return chunks;
  }

  let chunks = insertScale(getChunks(num));
  let inWords = chunks
    .filter((x) => x !== 0)
    .map((x) => (isFinite(x) ? getWords(x) : x))
    .join(' ');
  return inWords;
};