export function verse(index: number): string {
  let line: string;

  switch (index) {
    case 2:
      line =
        '2 bottles of beer on the wall, 2 bottles of beer.\n\
Take one down and pass it around, 1 bottle of beer on the wall.\n';
      break;
    case 1:
      line =
        '1 bottle of beer on the wall, 1 bottle of beer.\n\
Take it down and pass it around, no more bottles of beer on the wall.\n';
      break;
    case 0:
      line =
        'No more bottles of beer on the wall, no more bottles of beer.\n\
Go to the store and buy some more, 99 bottles of beer on the wall.\n';
      break;
    default:
      line = `${index} bottles of beer on the wall, \
${index} bottles of beer.\nTake one down and pass it around, \
${index - 1} bottles of beer on the wall.\n`;
      break;
  }

  return line;
}

export function sing(
  initialBottlesCount?: number,
  takeDownCount?: number,
): string {
  let verses: string[] = [];
  let start = initialBottlesCount ?? 99;
  let end = takeDownCount ?? 0;

  for (let i = start; i >= end; i--) {
    verses.push(verse(i));
  }

  return verses.join('\n');
}
