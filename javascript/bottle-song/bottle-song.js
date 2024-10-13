/** Returns the lyrics to Ten Green Bottles. */
export const recite = (initial, takeDown) => {
  const titleCase = (word) => word[0].toUpperCase() + word.slice(1);
  const counts = [
    'no',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];
  let stanzas = [];

  for (let i = initial; i > initial - takeDown; i--) {
    const bottle = (pos) => (pos === 1 ? 'bottle' : 'bottles');
    const greenBottles = (pos) => `green ${bottle(pos)} hanging on the wall`;
    const first = (pos) => `${titleCase(counts[pos])} ${greenBottles(pos)},`;
    const third = 'And if one green bottle should accidentally fall,';
    const fourth = (pos) => `There'll be ${counts[pos]} ${greenBottles(pos)}.`;

    stanzas.push(first(i), first(i), third, fourth(i - 1));
    if (i > initial - takeDown + 1) stanzas.push('');
  }
  return stanzas;
};
