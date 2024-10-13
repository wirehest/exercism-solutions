/** Translates English to Pig Latin. */
export const translate = (phrase) => {
  const consonants = ['a', 'e', 'i', 'o', 'u'];
  let words = phrase.toLowerCase().split(' ');

  let piglatinified = words.map((x) => {
    if (consonants.includes(x.at(0))) {
      return x + 'ay';
    }

    if (x.startsWith('squ') || x.startsWith('thr') || x.startsWith('sch')) {
      return x.slice(3) + x.slice(0, 3) + 'ay';
    }

    if (x.startsWith('qa')) {
      return x.slice(1) + 'qay';
    }

    if (x.startsWith('qu') || x.startsWith('ch') || x.startsWith('th')) {
      return x.slice(2) + x.slice(0, 2) + 'ay';
    }

    if (x.startsWith('yt') || x.startsWith('xr')) {
      return x + 'ay';
    }
    if (x.startsWith('rhy')) {
      return x.slice(2) + 'rhay';
    }

    return x.slice(1) + x.at(0) + 'ay';
  });
  return piglatinified.join(' ');
};
