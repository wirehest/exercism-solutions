export function translate(phrase: string): string {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => {
      switch (true) {
        case word.startsWith('squ'):
        case word.startsWith('thr'):
        case word.startsWith('sch'):
          return word.slice(3) + word.slice(0, 3) + 'ay';
        case word.startsWith('qa'):
          return word.slice(1) + 'qay';
        case word.startsWith('qu'):
        case word.startsWith('ch'):
        case word.startsWith('th'):
          return word.slice(2) + word.slice(0, 2) + 'ay';
        case word.startsWith('yt'):
        case word.startsWith('xr'):
        case 'aeiou'.includes(word[0]):
          return word + 'ay';
        case word.startsWith('rhy'):
          return word.slice(2) + 'rhay';
        default:
          return word.slice(1) + word[0] + 'ay';
      }
    })
    .join(' ');
}
